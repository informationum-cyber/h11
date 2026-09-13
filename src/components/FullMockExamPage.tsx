import { useEffect, useMemo, useRef, useState } from 'react'
import { Clock, ArrowRight, ArrowLeft, Lock, BookOpen } from 'lucide-react'
import type { PMPQuestion, PMPScenario } from '../data/pmp-quiz-types'
import { QuizHeader, QuizFooter } from './QuizChrome'
import { ResultsAdvisory, scoreQuestions } from './QuizResultsAdvisory'
import { emailResults } from '../lib/quizEmail'

export interface FullMockExamConfig {
  slug: string
  title: string
  password: string
  sectionA: PMPScenario[]
  sectionB: PMPQuestion[]
  sectionC: PMPQuestion[]
  durationMinutes: number
  showTutoringCTA?: boolean
  skipGate?: boolean
}

type Stage = 'gate' | 'intro' | 'quiz' | 'results'
type Answers = Partial<Record<number, 'a' | 'b' | 'c' | 'd'>>
type Section = 'A' | 'B' | 'C'

interface ExamQuestion extends PMPQuestion {
  section: Section
  sectionLabel: string
  localNumber: number
  scenarioTitle?: string
  scenarioText?: string
}

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return h > 0
    ? `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    : `${m}:${s.toString().padStart(2, '0')}`
}

export function FullMockExamPage({ config }: { config: FullMockExamConfig }) {
  const { title, sectionA, sectionB, sectionC, durationMinutes, showTutoringCTA = true, skipGate = false } = config
  const testPassword = config.password.toUpperCase()
  const durationSeconds = durationMinutes * 60
  const unlockKey = `pmp_unlocked_${config.slug}`

  const examQuestions: ExamQuestion[] = useMemo(() => {
    let globalId = 0
    let sectionALocal = 0
    const fromScenarios = sectionA.flatMap((scenario) =>
      scenario.questions.map((q) => {
        globalId += 1
        sectionALocal += 1
        return {
          ...q,
          id: globalId,
          section: 'A' as const,
          sectionLabel: 'Section A — Case Studies',
          localNumber: sectionALocal,
          scenarioTitle: scenario.title,
          scenarioText: scenario.scenarioText,
        }
      }),
    )
    const fromB = sectionB.map((q, i) => {
      globalId += 1
      return { ...q, id: globalId, section: 'B' as const, sectionLabel: 'Section B', localNumber: i + 1 }
    })
    const fromC = sectionC.map((q, i) => {
      globalId += 1
      return { ...q, id: globalId, section: 'C' as const, sectionLabel: 'Section C', localNumber: i + 1 }
    })
    return [...fromScenarios, ...fromB, ...fromC]
  }, [sectionA, sectionB, sectionC])

  const totalQuestions = examQuestions.length

  const [stage, setStage] = useState<Stage>(skipGate ? 'intro' : 'gate')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [timeLeft, setTimeLeft] = useState(durationSeconds)
  const [studentName, setStudentName] = useState('')
  const emailedRef = useRef(false)

  useEffect(() => {
    if (!skipGate && sessionStorage.getItem(unlockKey) === 'true') {
      setStage('intro')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [stage, currentIndex])

  useEffect(() => {
    if (stage !== 'quiz') return
    if (timeLeft <= 0) {
      setStage('results')
      return
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
  }, [stage, timeLeft])

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    if (passwordInput.trim().toUpperCase() === testPassword) {
      sessionStorage.setItem(unlockKey, 'true')
      setPasswordError('')
      setStage('intro')
    } else {
      setPasswordError('Incorrect password. Please check with your instructor for access.')
    }
  }

  function startTest() {
    setCurrentIndex(0)
    setAnswers({})
    setTimeLeft(durationSeconds)
    emailedRef.current = false
    setStage('quiz')
  }

  function selectAnswer(questionId: number, key: 'a' | 'b' | 'c' | 'd') {
    setAnswers((prev) => ({ ...prev, [questionId]: key }))
  }

  function retakeTest() {
    setStage('intro')
  }

  const answeredCount = Object.keys(answers).length
  const question = examQuestions[currentIndex]

  const results = useMemo(() => scoreQuestions(examQuestions, answers), [answers, examQuestions])

  useEffect(() => {
    if (stage !== 'results' || emailedRef.current) return
    emailedRef.current = true

    const scorePercent = `${Math.round((results.correctCount / totalQuestions) * 100)}%`
    const domainBreakdown = (['People', 'Process', 'Business Environment'] as const)
      .map((d) => {
        const { correct, total } = results.byDomain[d]
        return `${d}: ${correct}/${total}`
      })
      .join('\n')
    const missedQuestions = results.wrongQuestions.length
      ? results.wrongQuestions
          .map((q) => {
            const eq = q as ExamQuestion
            const given = answers[q.id]
            return `${eq.sectionLabel} Q${eq.localNumber} (${q.domain} — ${q.topic}): answered ${given ? given.toUpperCase() : '—'}, correct ${q.correct.toUpperCase()}`
          })
          .join('\n')
      : 'None — perfect score.'

    emailResults({
      examTitle: title,
      studentName: studentName.trim() || '(not provided)',
      score: `${results.correctCount}/${totalQuestions}`,
      scorePercent,
      domainBreakdown,
      missedQuestions,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-6xl mx-auto px-6 py-16">
        {stage === 'gate' && (
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#143D2D] flex items-center justify-center mx-auto mb-6">
              <Lock className="text-white" size={22} />
            </div>
            <h1 className="text-3xl font-bold text-[#143D2D] mb-3">{title}</h1>
            <p className="text-gray-600 mb-8 font-light">
              This practice exam is restricted to enrolled students. Enter your access password to continue.
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
                Unlock Test
              </button>
            </form>
          </div>
        )}

        {stage === 'intro' && (
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#143D2D] mb-4">{title}</h1>
            <p className="text-gray-600 mb-10 font-light text-lg">
              {totalQuestions} questions across all three PMP domains, structured like the real exam: a case-study
              section followed by two independent-question sections.
            </p>
            <div className="grid grid-cols-4 gap-4 mb-10">
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl font-black text-[#143D2D]">{sectionA.reduce((n, s) => n + s.questions.length, 0)}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Section A</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl font-black text-[#143D2D]">{sectionB.length}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Section B</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl font-black text-[#143D2D]">{sectionC.length}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Section C</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl font-black text-[#143D2D]">{durationMinutes}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Minutes</div>
              </div>
            </div>
            <div className="text-left bg-[#143D2D] text-gray-200 rounded-2xl p-7 mb-10">
              <p className="font-semibold text-white mb-3">Before you begin:</p>
              <ul className="space-y-2 text-sm font-light">
                <li>The timer starts as soon as you click Start and runs continuously through all three sections — it does not pause, unlike the two short breaks on the real exam.</li>
                <li>Section A's case studies keep their narrative pinned next to the questions while you work through them.</li>
                <li>You can move freely between questions and change answers before submitting.</li>
                <li>The test auto-submits when the timer reaches zero.</li>
                <li>After submitting, you'll get a personalized results report with domain-by-domain advice based on the questions you missed.</li>
              </ul>
            </div>
            <div className="mb-8 max-w-xs mx-auto">
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#1E5C3A] text-center"
              />
            </div>
            <button
              onClick={startTest}
              className="bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-10 py-4 rounded-sm text-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              Start Exam <ArrowRight size={18} />
            </button>
          </div>
        )}

        {stage === 'quiz' && question && (
          <div>
            <div className="flex items-center justify-between mb-6 sticky top-0 bg-white/95 backdrop-blur py-3 z-10">
              <span className="text-sm font-medium text-gray-500">
                {question.sectionLabel} &middot; Question {question.localNumber} &middot; {answeredCount}/{totalQuestions} answered overall
              </span>
              <span
                className={`inline-flex items-center gap-2 text-sm font-bold px-3 py-1.5 rounded-full ${
                  timeLeft <= 600 ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-[#143D2D]'
                }`}
              >
                <Clock size={14} /> {formatTime(timeLeft)}
              </span>
            </div>

            {(['A', 'B', 'C'] as Section[]).map((sec) => {
              const secQuestions = examQuestions.filter((q) => q.section === sec)
              if (secQuestions.length === 0) return null
              return (
                <div key={sec} className="mb-3">
                  <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-1.5">
                    Section {sec}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {secQuestions.map((q) => {
                      const globalIdx = examQuestions.indexOf(q)
                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentIndex(globalIdx)}
                          className={`w-7 h-7 text-[11px] font-semibold rounded-full flex items-center justify-center transition-colors ${
                            globalIdx === currentIndex
                              ? 'bg-[#1E5C3A] text-white'
                              : answers[q.id]
                                ? 'bg-[#a8d5b5] text-[#143D2D]'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          {q.localNumber}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            <div className="h-6" />

            {question.section === 'A' && question.scenarioText ? (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                  <div className="lg:sticky lg:top-24 bg-gray-50 rounded-2xl p-6 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#1E5C3A] mb-3">
                      <BookOpen size={14} /> Case Study
                    </div>
                    <h2 className="text-lg font-bold text-[#143D2D] mb-3">{question.scenarioTitle}</h2>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{question.scenarioText}</p>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <QuestionBody
                    question={question}
                    currentIndex={currentIndex}
                    totalQuestions={totalQuestions}
                    answers={answers}
                    onSelect={selectAnswer}
                    onPrev={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                    onNext={() => setCurrentIndex((i) => Math.min(totalQuestions - 1, i + 1))}
                    onSubmit={() => setStage('results')}
                  />
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                <QuestionBody
                  question={question}
                  currentIndex={currentIndex}
                  totalQuestions={totalQuestions}
                  answers={answers}
                  onSelect={selectAnswer}
                  onPrev={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  onNext={() => setCurrentIndex((i) => Math.min(totalQuestions - 1, i + 1))}
                  onSubmit={() => setStage('results')}
                />
              </div>
            )}
          </div>
        )}

        {stage === 'results' && (
          <div className="max-w-4xl mx-auto">
            <ResultsAdvisory
              title={title}
              allQuestions={examQuestions}
              results={results}
              totalQuestions={totalQuestions}
              onRetake={retakeTest}
              showTutoringCTA={showTutoringCTA}
            />
          </div>
        )}
      </main>

      <QuizFooter />
    </div>
  )
}

function QuestionBody({
  question,
  currentIndex,
  totalQuestions,
  answers,
  onSelect,
  onPrev,
  onNext,
  onSubmit,
}: {
  question: ExamQuestion
  currentIndex: number
  totalQuestions: number
  answers: Answers
  onSelect: (questionId: number, key: 'a' | 'b' | 'c' | 'd') => void
  onPrev: () => void
  onNext: () => void
  onSubmit: () => void
}) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold tracking-wide uppercase text-[#1E5C3A]">
        {question.domain} Domain &middot; {question.topic}
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">{question.prompt}</h2>

      <div className="space-y-3 mb-10">
        {question.options.map((opt) => {
          const selected = answers[question.id] === opt.key
          return (
            <button
              key={opt.key}
              onClick={() => onSelect(question.id, opt.key)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-colors flex gap-3 ${
                selected ? 'border-[#1E5C3A] bg-[#f0f7f2]' : 'border-gray-100 hover:border-gray-300'
              }`}
            >
              <span className={`font-bold uppercase ${selected ? 'text-[#1E5C3A]' : 'text-gray-400'}`}>
                {opt.key}.
              </span>
              <span className="text-gray-800">{opt.text}</span>
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-sm font-medium text-gray-600 disabled:opacity-30 hover:text-[#143D2D]"
        >
          <ArrowLeft size={16} /> Previous
        </button>

        {currentIndex < totalQuestions - 1 ? (
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 bg-[#143D2D] hover:bg-[#1E5C3A] text-white px-6 py-3 rounded-sm font-medium transition-colors"
          >
            Next <ArrowRight size={16} />
          </button>
        ) : (
          <button
            onClick={onSubmit}
            className="inline-flex items-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-6 py-3 rounded-sm font-medium transition-colors"
          >
            Submit Exam
          </button>
        )}
      </div>
    </div>
  )
}
