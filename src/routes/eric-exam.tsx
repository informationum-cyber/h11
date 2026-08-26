import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Lock, ArrowRight, ListChecks, BookOpen, Layers, RotateCcw } from 'lucide-react'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { ScenarioQuizPage } from '../components/ScenarioQuizPage'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'
import { ericExamQuestions } from '../data/eric-exam-questions'
import { ericScenarios } from '../data/eric-scenario-questions'
import { eric92Questions } from '../data/eric-92-questions'
import { ericPrePmpQuestions } from '../data/eric-prepmp-questions'

export const Route = createFileRoute('/eric-exam')({
  component: RouteComponent,
})

const SLUG = 'eric-exam'
const PASSWORD = 'ERIC123'
const UNLOCK_KEY = `pmp_unlocked_${SLUG}`

type Mode = 'gate' | 'choose' | 'regular' | 'scenario' | 'big' | 'prepmp'

function RouteComponent() {
  const [mode, setMode] = useState<Mode>('gate')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem(UNLOCK_KEY) === 'true') {
      setMode('choose')
    }
  }, [])

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    if (passwordInput.trim().toUpperCase() === PASSWORD) {
      sessionStorage.setItem(UNLOCK_KEY, 'true')
      setPasswordError('')
      setMode('choose')
    } else {
      setPasswordError('Incorrect password. Please check with your instructor for access.')
    }
  }

  if (mode === 'regular') {
    return (
      <PMPQuizPage
        config={{
          slug: SLUG,
          title: "Eric's PMP Practice Exam",
          password: PASSWORD,
          questions: ericExamQuestions,
          durationMinutes: 100,
          skipGate: true,
        }}
      />
    )
  }

  if (mode === 'big') {
    return (
      <PMPQuizPage
        config={{
          slug: SLUG,
          title: "Eric's 92-Question PMP Exam",
          password: PASSWORD,
          questions: eric92Questions,
          durationMinutes: 112,
          skipGate: true,
        }}
      />
    )
  }

  if (mode === 'prepmp') {
    return (
      <PMPQuizPage
        config={{
          slug: SLUG,
          title: "Eric's Pre-PMP Exam",
          password: PASSWORD,
          questions: ericPrePmpQuestions,
          durationMinutes: 56,
          skipGate: true,
        }}
      />
    )
  }

  if (mode === 'scenario') {
    return (
      <ScenarioQuizPage
        config={{
          slug: SLUG,
          title: 'Eric Scenario Practice',
          password: PASSWORD,
          scenarios: ericScenarios,
          skipGate: true,
        }}
        onExit={() => setMode('choose')}
      />
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-4xl mx-auto px-6 py-16">
        {mode === 'gate' && (
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#143D2D] flex items-center justify-center mx-auto mb-6">
              <Lock className="text-white" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">Eric's PMP Practice</h1>
            <p className="text-gray-600 mb-8 font-light">
              This area is restricted to enrolled students. Enter your access password to continue.
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
        )}

        {mode === 'choose' && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#143D2D] mb-4">Eric's PMP Practice</h1>
              <p className="text-gray-600 font-light text-lg">Choose which practice you want to run.</p>
            </div>

            <div className="space-y-5">
              <button
                onClick={() => setMode('big')}
                className="w-full text-left bg-[#143D2D] hover:bg-[#0E2E21] rounded-2xl p-7 transition-colors group"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#a8d5b5] mb-3">
                  <Layers size={14} /> New
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">92-Question Exam</h2>
                    <p className="text-sm text-gray-300 font-light">
                      The biggest practice set yet — 92 questions, 112 minutes, all three PMP domains.
                    </p>
                  </div>
                  <ArrowRight className="text-white shrink-0 ml-4 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </button>

              <button
                onClick={() => setMode('scenario')}
                className="w-full text-left bg-white border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md rounded-2xl p-7 transition-all group"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-gray-400 mb-3">
                  <BookOpen size={14} /> Scenario practice
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#143D2D] mb-2">Eric Scenario Practice</h2>
                    <p className="text-sm text-gray-600 font-light">
                      Deep-dive scenarios plus themed question sets. Each scenario's narrative stays visible while you work through its questions.
                    </p>
                  </div>
                  <ArrowRight className="text-[#1E5C3A] shrink-0 ml-4 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </button>

              <button
                onClick={() => setMode('regular')}
                className="w-full text-left bg-white border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md rounded-2xl p-7 transition-all group"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-gray-400 mb-3">
                  <ListChecks size={14} /> Full exam
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#143D2D] mb-2">50-Question Regular Exam</h2>
                    <p className="text-sm text-gray-600 font-light">
                      The original timed practice exam — 50 questions, 100 minutes, all three PMP domains.
                    </p>
                  </div>
                  <ArrowRight className="text-[#1E5C3A] shrink-0 ml-4 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </button>

              <button
                onClick={() => setMode('prepmp')}
                className="w-full text-left bg-white border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md rounded-2xl p-7 transition-all group"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-gray-400 mb-3">
                  <RotateCcw size={14} /> Review
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#143D2D] mb-2">Eric's Pre-PMP Exam</h2>
                    <p className="text-sm text-gray-600 font-light">
                      46 questions built from your missed answers on a prior practice run — see exactly which ones you get wrong when you finish.
                    </p>
                  </div>
                  <ArrowRight className="text-[#1E5C3A] shrink-0 ml-4 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </button>
            </div>
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
