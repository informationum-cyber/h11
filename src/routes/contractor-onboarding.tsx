import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Lock, CheckCircle2, Download, AlertCircle } from 'lucide-react'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'

export const Route = createFileRoute('/contractor-onboarding')({
  component: RouteComponent,
})

const SLUG = 'contractor-onboarding'
const PASSWORD = 'CONTRACT2026'
const UNLOCK_KEY = `pmp_unlocked_${SLUG}`

// Deliberately not a discoverable filename — see /public/documents.
const JUNG_DOCUMENT_URL = '/documents/e0a0d10f9ac8b42fbef0cec2d245c6d9f82c36f0.pdf'

type Stage = 'form' | 'ineligible' | 'submitting' | 'error' | 'success'

function RouteComponent() {
  const [unlocked, setUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [stage, setStage] = useState<Stage>('form')

  const [fullName, setFullName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [sinConsent, setSinConsent] = useState<'yes' | 'no' | ''>('')
  const [sin, setSin] = useState('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoConsent, setPhotoConsent] = useState(false)
  const [termsRead, setTermsRead] = useState<'yes' | 'no' | ''>('')
  const [idType, setIdType] = useState('')
  const [idFile, setIdFile] = useState<File | null>(null)
  const [declareTrue, setDeclareTrue] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(UNLOCK_KEY) === 'true') {
      setUnlocked(true)
    }
  }, [])

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    if (passwordInput.trim().toUpperCase() === PASSWORD) {
      sessionStorage.setItem(UNLOCK_KEY, 'true')
      setPasswordError('')
      setUnlocked(true)
    } else {
      setPasswordError('Incorrect password. Please check with your contact at Hansel Eleven.')
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (sinConsent === 'no') {
      setStage('ineligible')
      return
    }

    setStage('submitting')

    try {
      const formData = new FormData()
      formData.append('form-name', 'contractor-onboarding')
      formData.append('bot-field', '')
      formData.append('submittedAt', new Date().toLocaleString())
      formData.append('fullName', fullName)
      formData.append('dateOfBirth', dateOfBirth)
      formData.append('sinConsent', sinConsent)
      formData.append('sin', sin)
      formData.append('photoConsent', photoConsent ? 'yes' : 'no')
      formData.append('termsRead', termsRead)
      formData.append('idType', idType)
      formData.append('declareTrue', declareTrue ? 'yes' : 'no')
      if (photoFile) formData.append('photo', photoFile, photoFile.name)
      if (idFile) formData.append('idDocument', idFile, idFile.name)

      const res = await fetch('/__forms.html', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error(`Submission failed: ${res.status}`)

      setStage('success')
    } catch {
      setStage('error')
    }
  }

  const lastName = fullName.trim().split(/\s+/).pop()?.toLowerCase() ?? ''
  const showJungDownload = stage === 'success' && lastName === 'jung'

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-2xl mx-auto px-6 py-16">
        {!unlocked ? (
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#143D2D] flex items-center justify-center mx-auto mb-6">
              <Lock className="text-white" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Contractor Onboarding</h1>
            <p className="text-gray-600 mb-8 font-light">
              This area is restricted to existing Hansel Eleven contractors. Enter your access password to continue.
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
        ) : stage === 'ineligible' ? (
          <div className="max-w-md mx-auto text-center py-12">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="text-red-500" size={22} />
            </div>
            <h1 className="text-2xl font-bold text-[#143D2D] mb-3">Not Eligible for Contract</h1>
            <p className="text-gray-600 font-light">
              A background check is a required condition of engagement with Hansel Eleven Incorporated. Without
              consent to a background check, we're unable to proceed with a contract at this time.
            </p>
          </div>
        ) : stage === 'success' ? (
          <div className="max-w-md mx-auto text-center py-12">
            <div className="w-14 h-14 rounded-full bg-[#f0f7f2] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-[#1E5C3A]" size={22} />
            </div>
            <h1 className="text-2xl font-bold text-[#143D2D] mb-3">Thank You</h1>
            <p className="text-gray-600 font-light mb-8">
              Your information has been submitted to Hansel Eleven. We'll be in touch if anything further is needed.
            </p>
            {showJungDownload && (
              <a
                href={JUNG_DOCUMENT_URL}
                download
                className="inline-flex items-center justify-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-6 py-3 rounded-sm font-medium transition-colors"
              >
                <Download size={18} />
                Download Your Signed Agreement
              </a>
            )}
          </div>
        ) : (
          <div>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Please Enter Your Information</h1>
              <p className="text-gray-600 font-light">All fields are required to complete your onboarding.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* A) Name */}
              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">
                  A) Name (legal name as per ID)
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                  placeholder="e.g. Jane Smith"
                />
              </div>

              {/* B) Date of birth */}
              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">B) Date of birth</label>
                <input
                  type="date"
                  required
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                />
              </div>

              {/* C) SIN consent */}
              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">
                  C) SIN for background check — do you agree?
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="sinConsent"
                      value="yes"
                      required
                      checked={sinConsent === 'yes'}
                      onChange={() => setSinConsent('yes')}
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="sinConsent"
                      value="no"
                      required
                      checked={sinConsent === 'no'}
                      onChange={() => setSinConsent('no')}
                    />
                    No
                  </label>
                </div>
                {sinConsent === 'no' && (
                  <p className="text-sm text-red-500 mt-2">
                    A background check is required to contract with Hansel Eleven. You can still click Submit
                    below, but the remaining fields won't be required.
                  </p>
                )}
              </div>

              {/* D) SIN */}
              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">D) Enter SIN</label>
                <input
                  type="password"
                  inputMode="numeric"
                  autoComplete="off"
                  required={sinConsent !== 'no'}
                  maxLength={11}
                  value={sin}
                  onChange={(e) => setSin(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A]"
                  placeholder="xxx-xxx-xxx"
                />
              </div>

              {/* E) Photo upload + consent */}
              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">
                  E) Upload photo for identity
                </label>
                <input
                  type="file"
                  accept="image/*"
                  required={sinConsent !== 'no'}
                  onChange={(e) => setPhotoFile(e.target.files?.[0] ?? null)}
                  className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-[#f0f7f2] file:text-[#1E5C3A] file:font-medium"
                />
                <label className="flex items-start gap-2 text-sm text-gray-700 mt-3">
                  <input
                    type="checkbox"
                    required={sinConsent !== 'no'}
                    checked={photoConsent}
                    onChange={(e) => setPhotoConsent(e.target.checked)}
                    className="mt-1"
                  />
                  I consent to have my photo stored with Hansel for verification purposes
                </label>
              </div>

              {/* F) Terms of employment */}
              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">
                  F) I have read my terms of employment
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="termsRead"
                      value="yes"
                      required={sinConsent !== 'no'}
                      checked={termsRead === 'yes'}
                      onChange={() => setTermsRead('yes')}
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="radio"
                      name="termsRead"
                      value="no"
                      required={sinConsent !== 'no'}
                      checked={termsRead === 'no'}
                      onChange={() => setTermsRead('no')}
                    />
                    No
                  </label>
                </div>
              </div>

              {/* G) ID upload */}
              <div>
                <label className="block text-sm font-semibold text-[#143D2D] mb-2">
                  G) Upload one identification
                </label>
                <p className="text-xs text-gray-500 mb-3">License, PR card, or passport</p>
                <select
                  required={sinConsent !== 'no'}
                  value={idType}
                  onChange={(e) => setIdType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A] mb-3 bg-white"
                >
                  <option value="" disabled>
                    Select identification type
                  </option>
                  <option value="license">Driver's License</option>
                  <option value="pr_card">PR Card</option>
                  <option value="passport">Passport</option>
                </select>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  required={sinConsent !== 'no'}
                  onChange={(e) => setIdFile(e.target.files?.[0] ?? null)}
                  className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-[#f0f7f2] file:text-[#1E5C3A] file:font-medium"
                />
              </div>

              {/* H) Declaration */}
              <div>
                <label className="flex items-start gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    required={sinConsent !== 'no'}
                    checked={declareTrue}
                    onChange={(e) => setDeclareTrue(e.target.checked)}
                    className="mt-1"
                  />
                  H) I declare all info provided to be true
                </label>
              </div>

              {stage === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong submitting your information. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={stage === 'submitting'}
                className="w-full bg-[#1E5C3A] hover:bg-[#144D2E] disabled:opacity-60 text-white px-6 py-3 rounded-sm font-medium transition-colors"
              >
                {stage === 'submitting' ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
