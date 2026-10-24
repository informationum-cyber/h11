import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Lock, CreditCard, CalendarDays } from 'lucide-react'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'
import { createMabelaCheckoutSession, priceForClassCount } from '../server/mabelaBooking.functions'

export const Route = createFileRoute('/book-mabela')({
  component: RouteComponent,
})

const UNLOCK_KEY = 'booking_unlocked_mabela'
const MAX_CLASSES = 8

function formatPrice(cents: number) {
  const dollars = cents / 100
  return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`
}

function discountLabel(classCount: number) {
  if (classCount >= 6) return ' (15% off)'
  if (classCount >= 4) return ' (10% off)'
  return ''
}

function RouteComponent() {
  const [unlocked, setUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [classCount, setClassCount] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [payError, setPayError] = useState('')

  useEffect(() => {
    const stored = sessionStorage.getItem(UNLOCK_KEY)
    if (stored) {
      setPassword(stored)
      setUnlocked(true)
    }
  }, [])

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    const pw = passwordInput.trim()
    if (pw.toUpperCase() === 'MABELA2026') {
      sessionStorage.setItem(UNLOCK_KEY, pw)
      setPassword(pw)
      setUnlocked(true)
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password. Please check with Deepak for access.')
    }
  }

  async function handlePay() {
    setPayError('')
    setSubmitting(true)
    try {
      const { url } = await createMabelaCheckoutSession({ data: { password, classCount } })
      window.location.href = url
    } catch (err) {
      setPayError(err instanceof Error ? err.message : 'Could not start checkout. Please try again.')
      setSubmitting(false)
    }
  }

  const options = Array.from({ length: MAX_CLASSES }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-xl mx-auto px-6 py-16">
        {!unlocked ? (
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#143D2D] flex items-center justify-center mx-auto mb-6">
              <Lock className="text-white" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Book Your Classes</h1>
            <p className="text-gray-600 mb-8 font-light">
              Hi Mabela — enter your access password to book your classes with Deepak.
            </p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Access password"
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A] text-center"
                autoFocus
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
              <button
                type="submit"
                className="w-full bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-6 py-3 rounded-sm font-medium transition-colors"
              >
                Unlock
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="text-center mb-10">
              <div className="w-14 h-14 rounded-full bg-[#1E5C3A]/10 flex items-center justify-center mx-auto mb-6">
                <CalendarDays className="text-[#1E5C3A]" size={22} />
              </div>
              <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Book Your Classes</h1>
              <p className="text-gray-600 font-light">
                Choose how many classes you'd like to book with Deepak. Packages of 4+ get a
                discount automatically.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-7 mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                Number of classes
              </label>
              <select
                value={classCount}
                onChange={(e) => setClassCount(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A] bg-white text-lg font-medium mb-6"
              >
                {options.map((n) => (
                  <option key={n} value={n}>
                    {n} class{n === 1 ? '' : 'es'} — {formatPrice(priceForClassCount(n))}
                    {discountLabel(n)}
                  </option>
                ))}
              </select>

              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 mb-6">
                <span className="text-sm text-gray-600">Total due today</span>
                <span className="text-2xl font-black text-[#143D2D]">
                  {formatPrice(priceForClassCount(classCount))}
                </span>
              </div>

              {payError && <p className="text-red-500 text-sm mb-4">{payError}</p>}

              <button
                onClick={handlePay}
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] disabled:opacity-60 text-white px-6 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                <CreditCard size={20} />
                {submitting ? 'Redirecting to checkout…' : `Pay ${formatPrice(priceForClassCount(classCount))} & Book`}
              </button>
            </div>

            <p className="text-center text-xs text-gray-400">
              $30 per class &middot; 4+ classes: 10% off &middot; 6+ classes: 15% off
            </p>
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
