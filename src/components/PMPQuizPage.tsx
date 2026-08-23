import { useEffect, useMemo, useRef, useState } from 'react'
import { Clock, ArrowRight, ArrowLeft, Lock } from 'lucide-react'
import type { PMPQuestion } from '../data/pmp-quiz-types'
import { QuizHeader, QuizFooter } from './QuizChrome'
import { ResultsAdvisory, scoreQuestions } from './QuizResultsAdvisory'
import { emailResults } from '../lib/quizEmail'

export interface PMPQuizConfig {
  /** Used to namespace the sessionStorage unlock key — keep unique per exam. */
  slug: string
  title: string
  password: string
  questions: PMPQuestion[]
  durationMinutes: number
  /** Show the "View PMP Tutoring Options" CTA on the results page. Defaults to true. */
  showTutoringCTA?: boolean
  /** Skip the password gate — use when a parent page has already unlocked this slug. Defaults to false. */
  skipGate?: boolean
}

type Stage = 'gate' | 'intro' | 'quiz' | 'results'
type Answers = Partial<Record<number, 'a' | 'b' | 'c' | 'd'>>

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function articleFor(n: number) {
  const s = String(n)
  return s.startsWith('8') || s === '11' || s === '18' ? 'an' : 'a'
}

export function PMPQuizPage({ config }: { config: PMPQuizConfig }) {
  const { title, questions, durationMinutes, showTutoringCTA = true, skipGate = false } = config
  const testPassword = config.password.toUpperCase()
  const durationSeconds = durationMinutes * 60
  const unlockKey = `pmp_unlocked_${config.slug}`

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
  const question = questions[currentIndex]

  const results = useMemo(() => scoreQuestions(questions, answers), [answers, questions])

  useEffect(() => {
    if (stage !== 'results' || emailedRef.current) return
    emailedRef.current = true

    const scorePercent = `${Math.round((results.correctCount / questions.length) * 100)}%`
    const domainBreakdown = (['People', 'Process', 'Business Environment'] as const)
      .map((d) => {
        const { correct, total } = results.byDomain[d]
        return `${d}: ${correct}/${total}`
      })
      .join('\n')
    const missedQuestions = results.wrongQuestions.length
      ? results.wrongQuestions
          .map((q) => {
            const given = answers[q.id]
            return `Q${q.id} (${q.domain} — ${q.topic}): answered ${given ? given.toUpperCase() : '—'}, correct ${q.correct.toUpperCase()}`
          })
          .join('\n')
      : 'None — perfect score.'

    emailResults({
      examTitle: title,
      studentName: studentName.trim() || '(not provided)',
      score: `${results.correctCount}/${questions.length}`,
      scorePercent,
      domainBreakdown,
      missedQuestions,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-4xl mx-auto px-6 py-16">
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
              {questions.length} scenario-based questions covering all three PMP domains, timed to {articleFor(durationMinutes)} {durationMinutes}-minute window.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl font-black text-[#143D2D]">{questions.length}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Questions</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl font-black text-[#143D2D]">{durationMinutes}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Minutes</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-3xl font-black text-[#143D2D]">3</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Domains</div>
              </div>
            </div>
            <div className="text-left bg-[#143D2D] text-gray-200 rounded-2xl p-7 mb-10">
              <p className="font-semibold text-white mb-3">Before you begin:</p>
              <ul className="space-y-2 text-sm font-light">
                <li>The timer starts as soon as you click Start and cannot be paused.</li>
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
              Start Test <ArrowRight size={18} />
            </button>
          </div>
        )}

        {stage === 'quiz' && question && (
          <div>
            <div className="flex items-center justify-between mb-6 sticky top-0 bg-white/95 backdrop-blur py-3 z-10">
              <span className="text-sm font-medium text-gray-500">
                Question {currentIndex + 1} of {questions.length} &middot; {answeredCount} answered
              </span>
              <span
                className={`inline-flex items-center gap-2 text-sm font-bold px-3 py-1.5 rounded-full ${
                  timeLeft <= 300 ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-[#143D2D]'
                }`}
              >
                <Clock size={14} /> {formatTime(timeLeft)}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {questions.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-8 h-8 text-xs font-semibold rounded-full flex items-center justify-center transition-colors ${
                    i === currentIndex
                      ? 'bg-[#1E5C3A] text-white'
                      : answers[q.id]
                        ? 'bg-[#a8d5b5] text-[#143D2D]'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

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
                    onClick={() => selectAnswer(question.id, opt.key)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-colors flex gap-3 ${
                      selected
                        ? 'border-[#1E5C3A] bg-[#f0f7f2]'
                        : 'border-gray-100 hover:border-gray-300'
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
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm font-medium text-gray-600 disabled:opacity-30 hover:text-[#143D2D]"
              >
                <ArrowLeft size={16} /> Previous
              </button>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
                  className="inline-flex items-center gap-2 bg-[#143D2D] hover:bg-[#1E5C3A] text-white px-6 py-3 rounded-sm font-medium transition-colors"
                >
                  Next <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={() => setStage('results')}
                  className="inline-flex items-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-6 py-3 rounded-sm font-medium transition-colors"
                >
                  Submit Test
                </button>
              )}
            </div>
          </div>
        )}

        {stage === 'results' && (
          <ResultsAdvisory
            title={title}
            allQuestions={questions}
            results={results}
            totalQuestions={questions.length}
            onRetake={retakeTest}
            showTutoringCTA={showTutoringCTA}
          />
        )}
      </main>

      <QuizFooter />
    </div>
  )
}
