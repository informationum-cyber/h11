import { createServerFn } from '@tanstack/react-start'
import Stripe from 'stripe'

const MABELA_PASSWORD = 'MABELA2026'
const PRICE_PER_CLASS_CENTS = 3000
const MAX_CLASSES = 8

/** 1-3 classes: no discount. 4-5: 10% off. 6-8: 15% off. */
export function priceForClassCount(classCount: number): number {
  const subtotal = classCount * PRICE_PER_CLASS_CENTS
  if (classCount >= 6) return Math.round(subtotal * 0.85)
  if (classCount >= 4) return Math.round(subtotal * 0.9)
  return subtotal
}

export const createMabelaCheckoutSession = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string; classCount: number }) => data)
  .handler(async ({ data }) => {
    if (data.password !== MABELA_PASSWORD) {
      throw new Error('Unauthorized')
    }
    const classCount = Math.trunc(data.classCount)
    if (!Number.isInteger(classCount) || classCount < 1 || classCount > MAX_CLASSES) {
      throw new Error(`Choose between 1 and ${MAX_CLASSES} classes.`)
    }

    const totalAmount = priceForClassCount(classCount)
    const discountLabel = classCount >= 6 ? ' (15% off)' : classCount >= 4 ? ' (10% off)' : ''

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const baseUrl = process.env.URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${classCount} Class${classCount === 1 ? '' : 'es'} with Deepak${discountLabel}`,
              description: `${classCount} one-on-one class${classCount === 1 ? '' : 'es'}, booked as a package.`,
            },
            unit_amount: totalAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}&product=mabela-classes&classes=${classCount}`,
      cancel_url: `${baseUrl}/book-mabela`,
    })

    return { url: session.url! }
  })
