import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { Lock, CheckCircle2, AlertCircle } from 'lucide-react'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'

export const Route = createFileRoute('/reimbursement')({
  component: RouteComponent,
})

const SLUG = 'reimbursement'
const PASSWORD = 'CONTRACT2026'
const UNLOCK_KEY = `pmp_unlocked_${SLUG}`
const IFRAME_NAME = 'reimbursement-submit-frame'
const MAX_AMOUNT = 30

type Stage = 'form' | 'submitting' | 'success'

function RouteComponent() {
  const [unlocked, setUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [stage, setStage] = useState<Stage>('form')

  const [employeeName, setEmployeeName] = useState('')
  const [employeeId, setEmployeeId] = useState('')
  const [amount, setAmount] = useState('')
  const [acknowledged, setAcknowledged] = useState(false)
  const [formError, setFormError] = useState('')

  const formRef = useRef<HTMLFormElement>(null)
  const submittedAtRef = useRef<HTMLInputElement>(null)
  const awaitingSubmitRef = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem(UNLOCK_KEY) === 'true') {
      setUnlocked(true)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    if (passwordInput.trim().toUpperCase() === PASSWORD) {
      sessionStorage.setItem(UNLOCK_KEY, 'true')
      setPasswordError('')
      setUnlocked(true)
    } else {
      setPasswordError('Incorrect password.')
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')

    const amountValue = parseFloat(amount)
    if (Number.isNaN(amountValue) || amountValue <= 0) {
      setFormError('Please enter a valid amount.')
      return
    }
    if (amountValue > MAX_AMOUNT) {
      setFormError(`This form only accepts reimbursement claims up to $${MAX_AMOUNT}. For anything higher, contact Hansel Eleven directly.`)
      return
    }

    if (submittedAtRef.current) {
      submittedAtRef.current.value = new Date().toLocaleString()
    }

    setStage('submitting')
    awaitingSubmitRef.current = true
    formRef.current?.submit()

    timeoutRef.current = setTimeout(() => {
      if (awaitingSubmitRef.current) {
        awaitingSubmitRef.current = false
        setStage('success')
      }
    }, 8000)
  }

  function handleIframeLoad() {
    if (!awaitingSubmitRef.current) return
    awaitingSubmitRef.current = false
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setStage('success')
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
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Reimbursement Form</h1>
            <p className="text-gray-600 mb-8 font-light">
              This area is restricted to Hansel Eleven contractors. Enter your access password to continue.
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
        ) : stage === 'success' ? (
          <div className="max-w-md mx-auto text-center py-12">
            <div className="w-14 h-14 rounded-full bg-[#f0f7f2] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-[#1E5C3A]" size={22} />
            </div>
            <h1 className="text-2xl font-bold text-[#143D2D] mb-3">Claim Submitted</h1>
            <p className="text-gray-600 font-light">
              Your reimbursement claim has been submitted to Hansel Eleven. We'll follow up if anything further is
              needed.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Reimbursement Claim</h1>
              <p className="text-gray-600 font-light">
                For eligible expenses up to <strong>${MAX_AMOUNT}</strong>. Larger amounts must be approved directly
                with Hansel Eleven before submitting a claim.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="/__forms.html"
              method="POST"
              encType="multipart/form-data"
              target={IFRAME_NAME}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="reimbursement-request" />
              <input type="hidden" name="bot-field" value="" />
              <input type="hidden" name="submittedAt" ref={submittedAtRef} />

              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  required
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                  placeholder="e.g. Jane Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  required
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">Upload Receipt</label>
                <input
                  type="file"
                  name="receipt"
                  accept="image/*,.pdf"
                  required
                  className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-[#f0f7f2] file:text-[#1E5C3A] file:font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">
                  Amount (CAD, max ${MAX_AMOUNT})
                </label>
                <input
                  type="number"
                  name="amount"
                  required
                  min="0.01"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                  placeholder="0.00"
                />
              </div>

              <label className="flex items-start gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="acknowledged"
                  value="yes"
                  required
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="mt-1"
                />
                I confirm this claim is accurate and that the receipt provided is genuine. I understand submitting
                false information may result in denial of this claim and other consequences.
              </label>

              {formError && (
                <div className="flex items-start gap-2 text-red-600 text-sm bg-red-50 rounded-lg p-3">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <p>{formError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={stage === 'submitting'}
                className="w-full bg-[#1E5C3A] hover:bg-[#144D2E] disabled:opacity-60 text-white px-6 py-3 rounded-sm font-medium transition-colors"
              >
                {stage === 'submitting' ? 'Submitting…' : 'Submit Claim'}
              </button>
            </form>

            <iframe name={IFRAME_NAME} title="submission" hidden onLoad={handleIframeLoad} />
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
