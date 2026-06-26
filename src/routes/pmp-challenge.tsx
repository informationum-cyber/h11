import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Award, ArrowRight, CheckCircle2, XCircle, Target } from 'lucide-react'
import { ExamUpdateBanner } from '../components/ExamUpdateBanner'

export const Route = createFileRoute('/pmp-challenge')({
  component: PmpChallenge,
})

const questions = [
  {
    prompt:
      "Mid-sprint, a key stakeholder asks your Scrum team to add a new feature immediately. The sprint backlog is already committed. What's the best action?",
    options: [
      'Add the feature now since the stakeholder is important to the project',
      "Note the request, protect the current sprint's scope, and bring it to the next sprint planning session for prioritization",
      'Cancel the current sprint and restart with the new feature included',
      'Quietly remove a lower-priority item to make room without discussing it with the team',
    ],
    correct: 1,
    explanation:
      'Sprint scope is protected once committed. New requests are captured and prioritized for a future sprint by the Product Owner, preserving the team\'s focus and the integrity of the current commitment.',
  },
  {
    prompt:
      'Two senior team members are in an ongoing disagreement over which technical approach to take, and it is starting to affect team morale. As the project leader, what should you do first?',
    options: [
      'Escalate immediately to the sponsor for a final decision',
      'Pick the approach you personally think is best and instruct the team to proceed',
      'Facilitate a collaborative discussion between the two to understand the root cause and reach a shared resolution',
      'Avoid getting involved since technical disagreements usually resolve themselves',
    ],
    correct: 2,
    explanation:
      'Conflict resolution starts with addressing root cause through collaboration, not authority or avoidance. A facilitated, collaborative discussion preserves relationships and usually produces a better technical outcome.',
  },
  {
    prompt:
      'A mid-project benefits realization review shows the business case no longer aligns with current strategic objectives. What should you do?',
    options: [
      'Continue executing exactly as planned since the project charter was already approved',
      'Quietly adjust the scope yourself to better match the new strategic direction',
      'Conduct a value/benefit reassessment with the sponsor and recommend whether to continue, change direction, or terminate',
      'Ignore the review since benefits realization is only relevant after project closure',
    ],
    correct: 2,
    explanation:
      "Projects exist to deliver business value. When a review shows misalignment, the project manager should engage the sponsor in a formal reassessment rather than unilaterally continuing or changing course.",
  },
  {
    prompt:
      'Float on a critical path activity has been exhausted due to a delayed approval. The deadline is fixed, but the budget has some flexibility. What is the best schedule compression technique here?',
    options: [
      'Fast tracking, by running the next activities in parallel regardless of dependencies',
      'Crashing, by adding resources to the critical path activity to bring it back on schedule',
      'Reducing scope to remove the delayed work entirely',
      'Taking no action, since float is only a planning concern',
    ],
    correct: 1,
    explanation:
      'With a fixed deadline and flexible budget, crashing (adding resources) is the appropriate compression technique. Fast tracking increases risk by overlapping dependent activities and is better suited when budget is fixed and risk tolerance is higher.',
  },
  {
    prompt:
      'Your team is fully distributed across five time zones, and recurring misunderstandings about requirements are slowing delivery. What should you prioritize?',
    options: [
      'Mandate that all team members attend the same live meeting regardless of local time',
      'Establish a clear communications management plan with defined channels, cadence, and async documentation',
      'Rely on email as the single source of truth for all requirement discussions',
      'Reduce check-ins so the team is not burdened by time zone differences',
    ],
    correct: 1,
    explanation:
      'Distributed teams need a deliberate communications management plan: defined channels, cadence, and durable async documentation, so timezone differences do not translate into information gaps.',
  },
]

function PmpChallenge() {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'result'>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const score = answers.filter((a, i) => a === questions[i].correct).length
  const percentage = Math.round((score / questions.length) * 100)

  function selectAnswer(optionIndex: number) {
    const next = [...answers, optionIndex]
    setAnswers(next)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setStage('result')
    }
  }

  function restart() {
    setStage('intro')
    setCurrent(0)
    setAnswers([])
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-center">
        <Link to="/">
          <img src="/logo.jpeg" alt="Hansel Eleven Logo" className="h-20 w-auto object-contain" />
        </Link>
      </header>

      <main className="w-full max-w-3xl mx-auto px-6 py-8 pb-24">
        {stage === 'intro' && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6547]/10 text-[#DD6547] font-semibold tracking-wide text-sm rounded-full mb-8">
              <Target size={16} /> 60-SECOND PMP CHALLENGE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#232C33] mb-6 leading-tight">
              Think you're ready for the PMP exam?
            </h1>
            <p className="text-xl text-gray-600 font-light mb-6 max-w-xl mx-auto">
              Answer 5 situational questions pulled straight from real PMP exam patterns. Most candidates miss at least two of them on their first try.
            </p>
            <div className="flex justify-center mb-10">
              <ExamUpdateBanner />
            </div>
            <button
              onClick={() => setStage('quiz')}
              className="bg-[#DD6547] hover:bg-[#C2553A] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Start the Challenge <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        )}

        {stage === 'quiz' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                Question {current + 1} of {questions.length}
              </span>
              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <span
                    key={i}
                    className={`w-8 h-1.5 rounded-full ${i <= current ? 'bg-[#DD6547]' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#232C33] mb-8 leading-snug">
              {questions[current].prompt}
            </h2>
            <div className="space-y-4">
              {questions[current].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  className="w-full text-left bg-gray-50 hover:bg-[#DD6547]/10 border border-gray-100 hover:border-[#DD6547]/30 rounded-xl px-6 py-4 transition-colors text-gray-800 font-medium"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {stage === 'result' && (
          <div>
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-[#DD6547] mx-auto mb-4" />
              <p className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-2">Your Score</p>
              <h2 className="text-6xl font-black text-[#232C33] mb-4">{percentage}%</h2>
              <p className="text-xl text-gray-600 font-light max-w-lg mx-auto">
                {percentage === 100
                  ? "Perfect score. You clearly know your ECO domains — let's get you exam-ready with the same rigor."
                  : percentage >= 60
                  ? "Solid instincts, but the real exam digs deeper into these same scenarios. A structured cohort closes the gap fast."
                  : "These situational questions trip up most candidates who study alone. A structured, proven curriculum makes the difference."}
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {questions.map((q, i) => {
                const isCorrect = answers[i] === q.correct
                return (
                  <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="flex gap-3 items-start mb-2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <p className="font-semibold text-[#232C33]">{q.prompt}</p>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">{q.explanation}</p>
                  </div>
                )
              })}
            </div>

            <div className="bg-[#232C33] rounded-2xl p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to turn this into a 100% pass rate?</h3>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Join a PMP cohort of 3-4 peers, train with our proven curriculum, and reserve your seat — no payment required to hold your spot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  to="/learning-transformation"
                  hash="cohort"
                  className="bg-[#DD6547] hover:bg-[#C2553A] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl inline-flex items-center"
                >
                  Reserve Your Cohort Seat <ArrowRight size={20} className="ml-2" />
                </Link>
                <button onClick={restart} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                  Retake the Challenge
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#232C33] text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-black tracking-tight mb-4">HANSEL ELEVEN</div>
          <p className="text-[#DD6547] mb-4">Transformation & Professional Enablement</p>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hansel Eleven Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
