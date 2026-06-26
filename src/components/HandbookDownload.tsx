import { useState, type FormEvent } from 'react'
import { Download, BookOpen } from 'lucide-react'

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export function HandbookDownload() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'pmp-handbook-download', email }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
      <img
        src="/pmp-handbook-cover.jpg"
        alt="PMP Exam Handbook 2026 cover"
        className="w-32 md:w-40 rounded-lg shadow-lg shrink-0"
      />
      <div className="flex-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DD6547]/10 text-[#DD6547] font-semibold tracking-wide text-xs rounded-full mb-3">
          <BookOpen size={14} /> AUTHOR OF THE PMP EXAM HANDBOOK 2026
        </div>
        <h3 className="text-xl font-bold text-[#232C33] mb-2">Get the Mini Handbook, Free</h3>
        <p className="text-gray-600 mb-5">
          A practical guide to thinking like PMI — mindset, exam strategy, and key formulas in one quick reference. Drop your email and we'll send it your way.
        </p>

        {status === 'success' ? (
          <p className="text-[#232C33] font-medium bg-white border border-gray-100 rounded-lg px-4 py-3">
            You're on the list! We'll email you the handbook as soon as it's ready.
          </p>
        ) : (
          <form name="pmp-handbook-download" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="form-name" value="pmp-handbook-download" />
            <input
              required
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DD6547]"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-[#DD6547] hover:bg-[#C2553A] disabled:opacity-60 text-white px-6 py-3 rounded-sm font-medium transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center whitespace-nowrap"
            >
              {status === 'submitting' ? 'Sending...' : 'Get My Free Copy'} <Download size={16} className="ml-2" />
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-3">Something went wrong. Please email consult@hanseleleven.com instead.</p>
        )}
      </div>
    </div>
  )
}
