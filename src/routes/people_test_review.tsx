import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Lock, CheckCircle2 } from 'lucide-react'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'
import { people10Questions } from '../data/people10-questions'
import { people10QuestionsPl } from '../data/people10-questions-pl'

export const Route = createFileRoute('/people_test_review')({
  component: RouteComponent,
})

const PASSWORD = 'GREG123'
const UNLOCK_KEY = 'pmp_unlocked_people-10'

function RouteComponent() {
  const [unlocked, setUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

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
      setPasswordError('Incorrect password.')
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-4xl mx-auto px-6 py-16">
        {!unlocked ? (
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#143D2D] flex items-center justify-center mx-auto mb-6">
              <Lock className="text-white" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">People 10 — Study Guide</h1>
            <p className="text-gray-600 mb-8 font-light">
              This reference page is restricted to enrolled students. Enter your access password to continue.
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
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#f0f7f2] text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-4">
                STUDY GUIDE — ENGLISH / POLSKI
              </div>
              <h1 className="text-4xl font-bold text-[#143D2D] mb-4">People 10</h1>
              <p className="text-gray-600 font-light text-lg">
                All 10 questions with explanations in English and Polish, for review alongside the timed test.
              </p>
            </div>

            <div className="space-y-8">
              {people10Questions.map((q) => {
                const pl = people10QuestionsPl.find((t) => t.id === q.id)
                if (!pl) return null
                return (
                  <div key={q.id} className="rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="px-6 py-3 bg-gray-50 text-xs font-semibold tracking-wide uppercase text-[#1E5C3A]">
                      Question {q.id} &middot; {q.domain} &middot; {q.topic}
                    </div>

                    {/* English */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="text-xs font-bold tracking-wide uppercase text-gray-400 mb-2">English</div>
                      <p className="text-gray-900 font-medium mb-4 leading-relaxed">{q.prompt}</p>
                      <div className="space-y-2 mb-4">
                        {q.options.map((opt) => (
                          <div
                            key={opt.key}
                            className={`flex gap-2 px-4 py-2.5 rounded-lg text-sm ${
                              opt.key === q.correct ? 'bg-[#f0f7f2] text-[#143D2D] font-medium' : 'text-gray-700'
                            }`}
                          >
                            <span className="font-bold uppercase shrink-0">{opt.key}.</span>
                            <span>{opt.text}</span>
                            {opt.key === q.correct && <CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 ml-auto mt-0.5" />}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-[#143D2D]">Explanation:</strong> {q.explanation}
                      </p>
                    </div>

                    {/* Polish */}
                    <div className="p-6 bg-gray-50/50">
                      <div className="text-xs font-bold tracking-wide uppercase text-gray-400 mb-2">Polski</div>
                      <p className="text-gray-900 font-medium mb-4 leading-relaxed">{pl.prompt}</p>
                      <div className="space-y-2 mb-4">
                        {pl.options.map((opt) => (
                          <div
                            key={opt.key}
                            className={`flex gap-2 px-4 py-2.5 rounded-lg text-sm ${
                              opt.key === q.correct ? 'bg-[#f0f7f2] text-[#143D2D] font-medium' : 'text-gray-700'
                            }`}
                          >
                            <span className="font-bold uppercase shrink-0">{opt.key}.</span>
                            <span>{opt.text}</span>
                            {opt.key === q.correct && <CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 ml-auto mt-0.5" />}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-[#143D2D]">Wyjaśnienie:</strong> {pl.explanation}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
