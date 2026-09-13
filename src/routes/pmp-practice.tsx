import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Lock, ArrowRight, ListChecks, Users, GitBranch } from 'lucide-react'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { FullMockExamPage } from '../components/FullMockExamPage'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'
import { pmpMockExamSectionA } from '../data/pmp-mock-exam-section-a'
import { pmpMockExamSectionB } from '../data/pmp-mock-exam-section-b'
import { pmpMockExamSectionC } from '../data/pmp-mock-exam-section-c'
import { pmpPeopleDrillQuestions } from '../data/pmp-people-drill-questions'
import { pmpProcessDrillQuestions } from '../data/pmp-process-drill-questions'

export const Route = createFileRoute('/pmp-practice')({
  component: RouteComponent,
})

const SLUG = 'pmp-practice'
const PASSWORD = 'PMP1232026'
const UNLOCK_KEY = `pmp_unlocked_${SLUG}`

type Mode = 'gate' | 'choose' | 'mock' | 'peopleDrill' | 'processDrill'

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

  if (mode === 'mock') {
    return (
      <FullMockExamPage
        config={{
          slug: SLUG,
          title: 'Full PMP Mock Exam',
          password: PASSWORD,
          sectionA: pmpMockExamSectionA,
          sectionB: pmpMockExamSectionB,
          sectionC: pmpMockExamSectionC,
          durationMinutes: 230,
          skipGate: true,
        }}
      />
    )
  }

  if (mode === 'peopleDrill') {
    return (
      <PMPQuizPage
        config={{
          slug: SLUG,
          title: 'People Domain Drill',
          password: PASSWORD,
          questions: pmpPeopleDrillQuestions,
          durationMinutes: Math.round(pmpPeopleDrillQuestions.length * 1.28),
          skipGate: true,
        }}
      />
    )
  }

  if (mode === 'processDrill') {
    return (
      <PMPQuizPage
        config={{
          slug: SLUG,
          title: 'Process Domain Drill',
          password: PASSWORD,
          questions: pmpProcessDrillQuestions,
          durationMinutes: Math.round(pmpProcessDrillQuestions.length * 1.28),
          skipGate: true,
        }}
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
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">PMP Practice Test</h1>
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
              <h1 className="text-4xl font-bold text-[#143D2D] mb-4">PMP Practice Test</h1>
              <p className="text-gray-600 font-light text-lg">
                Structured to match the real 2026 PMP exam: 33% People, 41% Process, 26% Business Environment.
              </p>
            </div>

            <button
              onClick={() => setMode('mock')}
              className="w-full text-left bg-[#143D2D] hover:bg-[#0E2E21] rounded-2xl p-8 transition-colors group mb-10"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#a8d5b5] mb-3">
                <ListChecks size={14} /> Full mock exam
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Full PMP Mock Exam</h2>
                  <p className="text-sm text-gray-300 font-light">
                    180 questions, 230 minutes — a Section A case-study set (40) followed by two independent-question
                    sections (70 + 70), domain-weighted exactly like the real exam.
                  </p>
                </div>
                <ArrowRight className="text-white shrink-0 ml-4 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </button>

            <div className="text-center mb-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">Domain Drills</p>
              <p className="text-sm text-gray-500 font-light mt-1">Focus on one domain at a time.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <button
                onClick={() => setMode('peopleDrill')}
                className="text-left bg-white border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md rounded-2xl p-6 transition-all group"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-gray-400 mb-3">
                  <Users size={14} /> People
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-[#143D2D] mb-1">People Domain Drill</h2>
                    <p className="text-sm text-gray-600 font-light">
                      {pmpPeopleDrillQuestions.length} questions focused entirely on team leadership, conflict, and
                      stakeholder engagement.
                    </p>
                  </div>
                </div>
                <ArrowRight className="text-[#1E5C3A] mt-4 group-hover:translate-x-1 transition-transform" size={18} />
              </button>

              <button
                onClick={() => setMode('processDrill')}
                className="text-left bg-white border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md rounded-2xl p-6 transition-all group"
              >
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-gray-400 mb-3">
                  <GitBranch size={14} /> Process
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-[#143D2D] mb-1">Process Domain Drill</h2>
                    <p className="text-sm text-gray-600 font-light">
                      {pmpProcessDrillQuestions.length} questions focused entirely on schedule, cost, risk, and
                      delivery mechanics.
                    </p>
                  </div>
                </div>
                <ArrowRight className="text-[#1E5C3A] mt-4 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
