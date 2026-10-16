import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  ArrowDown,
  Layers,
  ShieldAlert,
  Scale,
  Check,
  X,
  FileText,
} from 'lucide-react'

export const Route = createFileRoute('/hart')({
  head: () => ({
    meta: [
      { title: 'HART | Hansel Eleven' },
      {
        name: 'description',
        content:
          'HART is a context-driven framework for tailoring program delivery, governance and product decision-making in regulated technology programs.',
      },
    ],
  }),
  component: HartPage,
})

const CONTACT_HREF =
  'mailto:helevn@proton.me?subject=HART%20conversation'

const symptoms = [
  'Status reports stay green until the week before go-live.',
  'Nobody can clearly say who approves, rejects or defers scope.',
  'Dependencies surface for the first time in integration testing.',
  'Go/no-go meetings turn into negotiations.',
  'Agile teams and governance bodies frustrate each other.',
  'Audit asks "why did we do it this way?" and nobody can show the reasoning.',
]

const lenses = [
  {
    icon: Layers,
    letter: 'W',
    title: 'The work',
    question:
      'How volatile, uncertain, interrupt-driven and interconnected is the work?',
  },
  {
    icon: ShieldAlert,
    letter: 'C',
    title: 'The consequences',
    question:
      'What customer, operational, financial or regulatory exposure exists if it goes wrong?',
  },
  {
    icon: Scale,
    letter: 'P',
    title: 'Product decisions',
    question:
      'Can accountable people prioritize, say no, defer and own the trade-offs?',
  },
]

const chain = [
  {
    step: 'Program condition',
    example:
      'Many stakeholders can add competing demands; nobody has clear authority to reject or defer them.',
  },
  {
    step: 'Decision rule',
    example:
      'Establish explicit authority for accepting, rejecting, deferring and prioritizing scope before delivery speeds up.',
  },
  {
    step: 'Selected practice',
    example:
      'Written decision rights, an accountable product decision-maker and an escalation path.',
  },
  {
    step: 'Expected benefit',
    example: 'Coherent priorities and faster decisions.',
  },
  {
    step: 'Trade-off',
    example:
      'Stakeholders lose unilateral control; the authority needs leadership backing.',
  },
  {
    step: 'Review trigger',
    example:
      'Decisions sit unresolved for longer, or unauthorized scope additions keep recurring.',
  },
]

const deliverables = [
  'Diagnostic findings across work, consequences and product decision capability',
  'The decision rationale: which practices were selected, which were rejected, and why',
  'The HART Delivery Blueprint: decision rights, cadences, controls, dependencies and evidence',
  'A prioritized 30/60/90-day improvement roadmap',
]

function HartPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-center items-center border-b border-gray-100">
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/about" className="hover:text-[#1E5C3A] transition-colors">
            About
          </Link>
          <Link
            to="/enterprise-transformation"
            className="text-[#1E5C3A] font-semibold"
          >
            Enterprise
          </Link>
          <Link
            to="/career-transformation"
            className="hover:text-[#1E5C3A] transition-colors"
          >
            Career
          </Link>
          <Link
            to="/learning-transformation"
            className="hover:text-[#1E5C3A] transition-colors"
          >
            Learning
          </Link>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="w-full max-w-5xl mx-auto px-6 pt-16 pb-20 text-center">
          <Link
            to="/enterprise-transformation"
            className="text-sm font-medium text-gray-500 hover:text-[#1E5C3A] inline-flex items-center gap-2 mb-8"
          >
            &larr; Enterprise Transformation
          </Link>
          <p className="text-sm text-[#1E5C3A] font-semibold tracking-widest uppercase mb-4">
            HART &middot; Hybrid Adaptive Responsive Transformation
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#143D2D] mb-8 leading-tight">
            Delivery is moving. Governance is struggling to keep up.{' '}
            <span className="text-[#D86040]">Who decides?</span>
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto mb-10">
            HART helps regulated technology programs choose the right mix of
            delivery, product and governance practices, and explain every
            choice.
          </p>
          <a
            href={CONTACT_HREF}
            className="bg-[#D86040] hover:bg-[#C1542F] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center"
          >
            Book a HART conversation <ArrowRight size={20} className="ml-2" />
          </a>
        </section>

        {/* SYMPTOMS */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#143D2D] mb-10 text-center">
              Does this sound familiar?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {symptoms.map((s) => (
                <li
                  key={s}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-3 text-gray-700"
                >
                  <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-[#D86040]"></span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto">
              These are rarely failures of effort. They are usually a mismatch
              between the practices a program uses and the conditions it
              actually operates in.
            </p>
          </div>
        </section>

        {/* IS / ISN'T */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#143D2D] mb-6 text-center">
            What HART is, and isn&rsquo;t
          </h2>
          <blockquote className="text-2xl md:text-3xl font-light text-[#1E5C3A] text-center max-w-3xl mx-auto mb-12">
            &ldquo;The program determines the practices. The practices do not
            determine the program.&rdquo;
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-[#1E5C3A]/20 bg-[#1E5C3A]/5">
              <h3 className="text-xl font-bold text-[#143D2D] mb-4">HART is</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  'A context-driven framework for tailoring delivery, governance and product decision-making',
                  'A way to select and combine established practices to fit your program',
                  'A traceable rationale behind every recommendation',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="w-5 h-5 text-[#1E5C3A] shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <h3 className="text-xl font-bold text-[#143D2D] mb-4">
                HART isn&rsquo;t
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  'A new Agile methodology',
                  'A replacement for Scrum, Kanban, PMBOK or your existing governance',
                  'A one-size-fits-all maturity score',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <X className="w-5 h-5 text-[#D86040] shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* LENSES */}
        <section className="bg-[#143D2D] text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Three questions HART asks
            </h2>
            <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
              Practices are selected based on the nature of the work, the
              consequences of failure, and the organization&rsquo;s ability to
              make product decisions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lenses.map(({ icon: Icon, letter, title, question }) => (
                <div
                  key={letter}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-[#6BAF8A]/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#6BAF8A]" />
                    </div>
                    <span className="text-3xl font-black text-[#6BAF8A]">
                      {letter}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-white/80">{question}</p>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm text-center mt-10 max-w-2xl mx-auto">
              Regulatory obligations are treated as hard constraints. They are
              never averaged away by a score.
            </p>
          </div>
        </section>

        {/* TRACEABILITY CHAIN */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#143D2D] mb-4 text-center">
            Every recommendation is traceable
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            HART doesn&rsquo;t just tell you what to do. It shows why, what it
            costs, and when to revisit it, so the choice can be defended to a
            steering committee, risk partners or auditors.
          </p>
          <p className="text-sm font-semibold tracking-wide uppercase text-[#1E5C3A] mb-4">
            Example: product decision authority
          </p>
          <ol className="space-y-2">
            {chain.map(({ step, example }, i) => (
              <li key={step}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <div className="font-bold text-[#143D2D] flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#1E5C3A] text-white text-sm flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </div>
                  <div className="text-gray-700">{example}</div>
                </div>
                {i < chain.length - 1 && (
                  <div className="flex justify-center py-1" aria-hidden="true">
                    <ArrowDown className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* OFFER */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm text-[#1E5C3A] font-semibold tracking-widest uppercase mb-3 text-center">
              Initial offering
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#143D2D] mb-4 text-center">
              HART Delivery Assessment
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              A fixed-scope engagement of two to three weeks for regulated
              technology programs, starting with financial services. Stakeholder
              interviews, a review of program evidence, the HART diagnostic and
              a leadership workshop.
            </p>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-[#143D2D] mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#D86040]" /> What you
                receive
              </h3>
              <ul className="space-y-4 text-gray-700">
                {deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <Check className="w-5 h-5 text-[#1E5C3A] shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ORIGIN */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#143D2D] mb-6 text-center">
            Where HART comes from
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              HART grew out of delivery work at two extremes. One was a
              fast-moving product with a never-ending backlog: easy to
              customize and quick to sell, but without product decisions it
              became unwieldy within a few years. The other was large, regulated
              banking programs with many interdependent teams, where every
              release was shaped by risk, testing evidence and go/no-go
              decisions.
            </p>
            <p>
              Neither pure agility nor heavy governance was the answer. What
              mattered was choosing practices deliberately, for the conditions
              at hand, and being able to explain the choice.
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-8 text-center">
            HART is designed to apply across industries and is being proven
            first in financial services. It does not claim to invent tailoring,
            Agile or governance; its contribution is an auditable path from
            diagnosis to decision.
          </p>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="bg-[#1E5C3A] rounded-2xl p-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Is your program running on the right practices?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl text-lg">
              Start with a short conversation about where delivery,
              governance and product decisions are pulling against each other.
            </p>
            <a
              href={CONTACT_HREF}
              className="bg-white text-[#1E5C3A] px-8 py-4 rounded-sm text-lg font-bold transition-all shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Book a HART conversation <ArrowRight size={20} className="ml-2" />
            </a>
            <p className="text-white/70 text-sm mt-4">helevn@proton.me</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#143D2D] text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-black tracking-tight mb-4">
            HANSEL ELEVEN
          </div>
          <p className="text-[#6BAF8A] mb-4">
            Transformation & Professional Enablement
          </p>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hansel Eleven Inc. All rights
            reserved. HART is a working framework of Hansel Eleven Inc.
          </div>
        </div>
      </footer>
    </div>
  )
}
