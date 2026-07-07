import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/payment-success')({
  component: PaymentSuccess,
})

function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-center">
        <Link to="/">
          <img src="/logo.jpeg" alt="Hansel Eleven Logo" className="h-20 w-auto object-contain" />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d6faff] mb-8">
            <CheckCircle2 className="w-10 h-10 text-[#232C33]" />
          </div>
          <h1 className="text-4xl font-bold text-[#232C33] mb-4">Payment Confirmed!</h1>
          <p className="text-xl text-gray-600 font-light mb-8">
            Thank you — your 16-Hour PMP Tutoring Package is booked. You'll receive a confirmation email shortly and we'll be in touch to schedule your first session.
          </p>
          <div className="bg-[#ffd799]/30 rounded-2xl p-6 mb-8 text-left">
            <p className="font-semibold text-[#232C33] mb-2">What happens next:</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5" /> Confirmation email sent to your inbox</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5" /> We'll reach out within 24 hours to schedule your first session</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5" /> 16 hours scheduled flexibly over 6–8 weeks</li>
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
