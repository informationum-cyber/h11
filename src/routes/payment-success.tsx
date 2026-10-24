import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/payment-success')({
  component: PaymentSuccess,
})

const PRODUCT_COPY: Record<
  string,
  { body: (classes: string | null) => string; bullets: (classes: string | null) => string[] }
> = {
  consult: {
    body: () =>
      "Thank you — your 1-hour PMP consultation is booked. You'll receive a confirmation email shortly and we'll be in touch to schedule your session.",
    bullets: () => [
      'Confirmation email sent to your inbox',
      "We'll reach out within 24 hours to schedule your session",
      'Covers your background, a PMP ECO walkthrough, readiness assessment, and a personalized roadmap',
    ],
  },
  'mabela-classes': {
    body: (classes) => {
      const n = classes ? Number(classes) : null
      const label = n ? `${n} class${n === 1 ? '' : 'es'}` : 'your classes'
      return `Thank you — ${label} ${n === 1 ? 'is' : 'are'} booked. You'll receive a confirmation email shortly and we'll be in touch to schedule your sessions.`
    },
    bullets: (classes) => {
      const n = classes ? Number(classes) : null
      return [
        'Confirmation email sent to your inbox',
        "We'll reach out within 24 hours to schedule your first session",
        n ? `${n} class${n === 1 ? '' : 'es'} scheduled flexibly around your availability` : 'Sessions scheduled flexibly around your availability',
      ]
    },
  },
}

const DEFAULT_COPY = {
  body: () =>
    "Thank you — your 16-Hour PMP Tutoring Package is booked. You'll receive a confirmation email shortly and we'll be in touch to schedule your first session.",
  bullets: () => [
    'Confirmation email sent to your inbox',
    "We'll reach out within 24 hours to schedule your first session",
    '16 hours scheduled flexibly over 6–8 weeks',
  ],
}

function PaymentSuccess() {
  const [product, setProduct] = useState<string | null>(null)
  const [classes, setClasses] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setProduct(params.get('product'))
    setClasses(params.get('classes'))
  }, [])

  const copy = (product && PRODUCT_COPY[product]) || DEFAULT_COPY

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d6faff] mb-8">
            <CheckCircle2 className="w-10 h-10 text-[#232C33]" />
          </div>
          <h1 className="text-4xl font-bold text-[#232C33] mb-4">Payment Confirmed!</h1>
          <p className="text-xl text-gray-600 font-light mb-8">{copy.body(classes)}</p>
          <div className="bg-[#ffd799]/30 rounded-2xl p-6 mb-8 text-left">
            <p className="font-semibold text-[#232C33] mb-2">What happens next:</p>
            <ul className="text-sm text-gray-700 space-y-2">
              {copy.bullets(classes).map((b) => (
                <li key={b} className="flex gap-2">
                  <CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-500 text-sm mb-8">
            Questions? Email us at{' '}
            <a href="mailto:consult@hanseleleven.com" className="text-[#DD6547] hover:underline">
              consult@hanseleleven.com
            </a>
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-[#232C33] font-medium hover:text-[#DD6547] transition-colors"
          >
            Back to Home <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </main>

      <footer className="bg-[#232C33] text-white py-8 text-center">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hansel Eleven Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
