import { Link } from '@tanstack/react-router'
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react'
import type { PMPDomain, PMPQuestion } from '../data/pmp-quiz-types'

export const DOMAINS: PMPDomain[] = ['People', 'Process', 'Business Environment']

export interface QuizResults {
  correctCount: number
  byDomain: Record<PMPDomain, { correct: number; total: number }>
  wrongQuestions: PMPQuestion[]
}

export function scoreQuestions(questions: PMPQuestion[], answers: Partial<Record<number, 'a' | 'b' | 'c' | 'd'>>): QuizResults {
  const wrongQuestions: PMPQuestion[] = []
  const byDomain: Record<PMPDomain, { correct: number; total: number }> = {
    People: { correct: 0, total: 0 },
    Process: { correct: 0, total: 0 },
    'Business Environment': { correct: 0, total: 0 },
  }
  let correctCount = 0
  for (const q of questions) {
    byDomain[q.domain].total += 1
    const given = answers[q.id]
    if (given === q.correct) {
      correctCount += 1
      byDomain[q.domain].correct += 1
    } else {
      wrongQuestions.push(q)
    }
  }
  return { correctCount, byDomain, wrongQuestions }
}

function domainAdvice(domain: PMPDomain, wrongTopics: string[]) {
  const topicList = wrongTopics.join('; ')
  switch (domain) {
    case 'People':
      return `Revisit stakeholder engagement, team leadership, and conflict-handling scenarios — particularly: ${topicList}. Focus on servant-leadership and proactive communication patterns.`
    case 'Process':
      return `Tighten up your technical process fundamentals — particularly: ${topicList}. Re-work the earned value, scheduling, and quality formulas until they're automatic.`
    case 'Business Environment':
      return `Review how external factors and governance connect to the project — particularly: ${topicList}. Focus on distinguishing OPAs from EEFs and when compliance overrides other constraints.`
  }
}

export function ResultsAdvisory({
  title,
  allQuestions,
  results,
  totalQuestions,
  onRetake,
  showTutoringCTA,
}: {
  title: string
  allQuestions: PMPQuestion[]
  results: QuizResults
  totalQuestions: number
  onRetake: () => void
  showTutoringCTA: boolean
}) {
  const { correctCount, byDomain, wrongQuestions } = results
  const scorePct = Math.round((correctCount / totalQuestions) * 100)

  const readiness =
    scorePct >= 80
      ? { label: 'Strong readiness', color: 'text-[#1E5C3A]' }
      : scorePct >= 60
        ? { label: 'On track — a few gaps to close', color: 'text-amber-600' }
        : { label: 'Needs focused review', color: 'text-red-600' }

  const weakDomains = DOMAINS.filter((d) => byDomain[d].total > byDomain[d].correct)

  return (
    <div>
      <div className="inline-block px-4 py-2 bg-[#f0f7f2] text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-4">
        ADVISORY PORTAL
      </div>
      <h1 className="text-3xl font-bold text-[#143D2D] mb-2">Your {title} Results</h1>
      <p className="text-gray-600 mb-8 font-light">Auto-generated the moment you finished — based on the questions you got wrong.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#143D2D] rounded-2xl p-7 text-white">
          <div className="text-5xl font-black mb-1">
            {correctCount}/{totalQuestions}
          </div>
          <div className="text-gray-300 text-sm mb-3">{scorePct}% correct</div>
          <div className={`text-sm font-semibold ${readiness.color === 'text-red-600' ? 'text-red-300' : 'text-[#a8d5b5]'}`}>
            {readiness.label}
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-7">
          <p className="text-sm font-semibold text-[#143D2D] mb-4">Score by domain</p>
          <div className="space-y-3">
            {DOMAINS.map((d) => {
              const { correct, total } = byDomain[d]
              const pct = total ? Math.round((correct / total) * 100) : 0
              return (
                <div key={d}>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>{d}</span>
                    <span>
                      {correct}/{total}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1E5C3A]" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-7 mb-10">
        <h2 className="text-xl font-bold text-[#143D2D] mb-4">Your personalized study advisory</h2>
        {wrongQuestions.length === 0 ? (
          <p className="text-gray-700">
            Perfect score across every domain — no gaps to flag. You're testing exam-ready on this question set.
          </p>
        ) : (
          <div className="space-y-4">
            {weakDomains.map((d) => {
              const topics = Array.from(
                new Set(wrongQuestions.filter((q) => q.domain === d).map((q) => q.topic)),
              )
              return (
                <div key={d} className="flex gap-3">
                  <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-[#143D2D]">{d} Domain:</strong> {domainAdvice(d, topics)}
                  </p>
                </div>
              )
            })}
          </div>
        )}
        {showTutoringCTA && (
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">Want structured, 1:1 help closing these gaps?</p>
            <Link
              to="/learning-transformation"
              hash="tutoring"
              className="inline-flex items-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-colors w-fit"
            >
              View PMP Tutoring Options <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#143D2D] mb-4">Full question review</h2>
        <div className="space-y-4">
          {(() => {
            const wrongIds = new Set(wrongQuestions.map((q) => q.id))
            return allQuestions.map((q) => {
              const isWrong = wrongIds.has(q.id)
              return (
                <div
                  key={q.id}
                  className={`rounded-xl p-5 border ${isWrong ? 'border-red-100 bg-red-50/40' : 'border-gray-100'}`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    {isWrong ? (
                      <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 size={18} className="text-[#1E5C3A] shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-1">
                        Question {q.id} &middot; {q.domain} &middot; {q.topic}
                      </div>
                      <p className="text-sm text-gray-800 font-medium">{q.prompt}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 ml-8">
                    Correct answer: <strong>{q.correct.toUpperCase()}</strong> &mdash; {q.explanation}
                  </p>
                </div>
              )
            })
          })()}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onRetake}
          className="px-6 py-3 border-2 border-[#143D2D] text-[#143D2D] rounded-sm font-medium hover:bg-[#143D2D] hover:text-white transition-colors"
        >
          Retake Test
        </button>
      </div>
    </div>
  )
}
