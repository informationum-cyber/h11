import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Lock, AlertCircle } from 'lucide-react'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'

export const Route = createFileRoute('/book-mabela')({
  component: RouteComponent,
})

const UNLOCK_KEY = 'booking_unlocked_mabela'

function RouteComponent() {
  const [unlocked, setUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    const stored = sessionStorage.getItem(UNLOCK_KEY)
    if (stored) {
      setUnlocked(true)
    }
  }, [])

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    const pw = passwordInput.trim().toUpperCase()
    if (pw === 'MABELA2026') {
      sessionStorage.setItem(UNLOCK_KEY, pw)
      setUnlocked(true)
      setPasswordError('')
    } else {
      setPasswordError('Incorrect password. Please check with Deepak for access.')
    }
  }

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
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="text-amber-700" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Payment Refunded</h1>
            <p className="text-gray-600 font-light">
              Your payment has been refunded. Please do not contact tutor privately.
            </p>
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
