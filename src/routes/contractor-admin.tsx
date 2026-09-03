import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Lock, RefreshCw, Eye, EyeOff, ExternalLink, AlertCircle } from 'lucide-react'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'
import { getContractorSubmissions } from '../server/adminForms.functions'

export const Route = createFileRoute('/contractor-admin')({
  component: RouteComponent,
})

const UNLOCK_KEY = 'pmp_unlocked_contractor-admin'

type Submission = {
  id: string
  number: number
  createdAt: string
  data: Record<string, string>
}

const FIELD_LABELS: Record<string, string> = {
  fullName: 'Legal Name',
  dateOfBirth: 'Date of Birth',
  sinConsent: 'Background Check Consent',
  sin: 'SIN',
  photoConsent: 'Photo Storage Consent',
  termsRead: 'Terms of Employment Read',
  idType: 'ID Type',
  declareTrue: 'Declared Info True',
  photo: 'Identity Photo',
  idDocument: 'ID Document',
  submittedAt: 'Submitted At',
}

const FILE_FIELDS = new Set(['photo', 'idDocument'])
const FIELD_ORDER = [
  'fullName',
  'dateOfBirth',
  'sinConsent',
  'sin',
  'photoConsent',
  'photo',
  'termsRead',
  'idType',
  'idDocument',
  'declareTrue',
  'submittedAt',
]

function SinValue({ value }: { value: string }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <span className="inline-flex items-center gap-2">
      <span className="font-mono">{revealed ? value : '•'.repeat(Math.max(value.length, 6))}</span>
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        className="text-gray-400 hover:text-[#1E5C3A]"
        aria-label={revealed ? 'Hide SIN' : 'Reveal SIN'}
      >
        {revealed ? <EyeOff size={14} /> : <Eye size={14} />}
      </button>
    </span>
  )
}

function FieldValue({ fieldKey, value }: { fieldKey: string; value: string }) {
  if (fieldKey === 'sin') return <SinValue value={value} />
  if (FILE_FIELDS.has(fieldKey) && /^https?:\/\//.test(value)) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 text-[#1E5C3A] hover:underline"
      >
        View file <ExternalLink size={12} />
      </a>
    )
  }
  return <span>{value || '—'}</span>
}

function RouteComponent() {
  const [unlocked, setUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [submissions, setSubmissions] = useState<Submission[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchSubmissions(pw: string) {
    setLoading(true)
    setError('')
    try {
      const result = await getContractorSubmissions({ data: { password: pw } })
      setSubmissions(result.submissions)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load submissions.')
      setSubmissions(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const stored = sessionStorage.getItem(UNLOCK_KEY)
    if (stored) {
      setPassword(stored)
      setUnlocked(true)
      fetchSubmissions(stored)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    const pw = passwordInput.trim()
    setPasswordError('')
    setLoading(true)
    try {
      const result = await getContractorSubmissions({ data: { password: pw } })
      setSubmissions(result.submissions)
      sessionStorage.setItem(UNLOCK_KEY, pw)
      setPassword(pw)
      setUnlocked(true)
    } catch (err) {
      const message = err instanceof Error ? err.message : ''
      if (message === 'Unauthorized' || !message) {
        setPasswordError('Incorrect password.')
      } else {
        // Password may be correct but the Netlify API isn't configured — let them in and show the real error.
        sessionStorage.setItem(UNLOCK_KEY, pw)
        setPassword(pw)
        setUnlocked(true)
        setError(message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        {!unlocked ? (
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#143D2D] flex items-center justify-center mx-auto mb-6">
              <Lock className="text-white" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Contractor Submissions</h1>
            <p className="text-gray-600 mb-8 font-light">Admin access only.</p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Admin password"
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A] text-center"
                autoFocus
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1E5C3A] hover:bg-[#144D2E] disabled:opacity-60 text-white px-6 py-3 rounded-sm font-medium transition-colors"
              >
                {loading ? 'Checking…' : 'Unlock'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-10">
              <div>
                <h1 className="text-3xl font-bold text-[#143D2D] mb-1">Contractor Submissions</h1>
                <p className="text-gray-600 font-light text-sm">
                  {submissions ? `${submissions.length} submission${submissions.length === 1 ? '' : 's'}` : ''}
                </p>
              </div>
              <button
                onClick={() => fetchSubmissions(password)}
                disabled={loading}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1E5C3A] hover:text-[#144D2E] disabled:opacity-60"
              >
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                Refresh
              </button>
            </div>

            {error && (
              <div className="flex items-start gap-3 bg-red-50 text-red-700 rounded-lg p-4 mb-8 text-sm">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Couldn't load submissions</p>
                  <p>{error}</p>
                </div>
              </div>
            )}

            {loading && !submissions && <p className="text-gray-500 text-sm">Loading…</p>}

            {submissions && submissions.length === 0 && !error && (
              <p className="text-gray-500 text-sm">No submissions yet.</p>
            )}

            <div className="space-y-6">
              {submissions?.map((s) => (
                <div key={s.id} className="rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="px-6 py-3 bg-gray-50 text-xs font-semibold tracking-wide uppercase text-[#1E5C3A] flex justify-between">
                    <span>Submission #{s.number}</span>
                    <span className="text-gray-400 normal-case font-normal">
                      {new Date(s.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="p-6 grid sm:grid-cols-2 gap-4">
                    {FIELD_ORDER.filter((k) => k in s.data).map((key) => (
                      <div key={key}>
                        <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-1">
                          {FIELD_LABELS[key] ?? key}
                        </div>
                        <div className="text-sm text-gray-800">
                          <FieldValue fieldKey={key} value={s.data[key]} />
                        </div>
                      </div>
                    ))}
                    {Object.keys(s.data)
                      .filter((k) => !FIELD_ORDER.includes(k) && k !== 'bot-field')
                      .map((key) => (
                        <div key={key}>
                          <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-1">
                            {key}
                          </div>
                          <div className="text-sm text-gray-800">
                            <FieldValue fieldKey={key} value={s.data[key]} />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
