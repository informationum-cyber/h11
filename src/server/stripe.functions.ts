import { createServerFn } from '@tanstack/react-start'
import Stripe from 'stripe'

export const createCheckoutSession = createServerFn({ method: 'POST' }).handler(
  async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const baseUrl = process.env.URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: '16-Hour PMP Tutoring Package',
              description:
                '16 hours of 1:1 PMP exam preparation over 6–8 weeks. Full PMI ECO syllabus, practice papers, quizzes, and exam registration assistance.',
            },
            unit_amount: 35000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/learning-transformation#tutoring`,
    })

    return { url: session.url! }
  },
)
