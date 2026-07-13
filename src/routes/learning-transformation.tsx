import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, ArrowRight, CreditCard, Star, BookOpen } from 'lucide-react'
import { createCheckoutSession } from '../server/stripe.functions'

const whitepapers = [
  {
    title: 'No Toll-Free Highways',
    subtitle: 'Why Every Meeting Has a Cost; Even When Nobody Notices',
    description: 'Every meeting carries a hidden cost in time, attention, and opportunity. This paper quantifies what organisations routinely overlook and provides a framework for meeting discipline.',
    publisher: 'GovWhitePapers',
    url: 'https://govwhitepapers.com/whitepapers/no-toll-free-highways-where-every-meeting-has-a-cost',
  },
  {
    title: 'The Human Operating System™',
    subtitle: 'Projects do not fail because of bad plans.',
    description: 'They fail because of human conditions that no project charter or risk register captures. This paper explores the invisible dynamics that determine whether a project truly succeeds.',
    publisher: 'GovWhitePapers',
    url: 'https://govwhitepapers.com/whitepapers/human-operating-system-why-projects-fail-people-before-they-fail-plans',
  },
  {
    title: 'Protecting the Product from Its Own Clients',
    subtitle: 'What project managers learn when they finally cross into product thinking.',
    description: 'A practitioner\'s account of the critical shift from delivery execution to product stewardship — and why crossing that boundary changes everything about how you manage scope.',
    publisher: 'Hansel Eleven / Figshare',
    url: 'https://doi.org/10.6084/m9.figshare.32974694',
  },
]

export const Route = createFileRoute('/learning-transformation')({
  component: LearningTransformation,
})

function LearningTransformation() {
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState('')

  async function handleBuyNow() {
    setCheckoutLoading(true)
    setCheckoutError('')
    try {
      const { url } = await createCheckoutSession()
      window.location.href = url
    } catch {
      setCheckoutError('Could not start checkout. Please email consult@hanseleleven.com.')
      setCheckoutLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-100">
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img src="/logo.png" alt="Hansel Eleven Logo" className="h-28 w-auto object-contain" />
          </Link>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/enterprise-transformation" className="hover:text-[#1E5C3A] transition-colors">Enterprise</Link>
          <Link to="/career-transformation" className="hover:text-[#1E5C3A] transition-colors">Career</Link>
          <Link to="/learning-transformation" className="text-[#1E5C3A] font-semibold">Learning</Link>
          <Link to="/vizhun" className="hover:text-[#1E5C3A] transition-colors">Vizhun</Link>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-[#1E5C3A] inline-flex items-center gap-2 mb-6">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#143D2D] mb-6">Learning Transformation</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl">
            Empowering professionals with top-tier certification training, mentoring, and thought leadership. We proudly maintain a <strong className="font-semibold text-[#1E5C3A]">100% pass rate</strong> for our PMP and Agile certification students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Offering 1: PMP Training */}
          <div id="tutoring" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-[#143D2D] mb-4">PMP Certification Training</h2>
            <p className="text-gray-600 mb-6">Comprehensive preparation for the Project Management Professional (PMP) exam.</p>

            <div className="space-y-6">
              {/* 16-hour package — buyable now */}
              <div className="bg-[#143D2D] rounded-2xl p-7 border-t-4 border-t-[#1E5C3A]">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide uppercase text-[#a8d5b5] mb-2">
                      <Star size={12} className="fill-[#a8d5b5]" /> Best Value
                    </div>
                    <h3 className="text-xl font-bold text-white">16-Hour PMP Tutoring Package</h3>
                  </div>
                  <div className="text-right ml-4 shrink-0">
                    <span className="text-3xl font-black text-white">$350</span>
                    <p className="text-gray-400 text-xs mt-0.5">one-time</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-300 space-y-2 mt-4 mb-6">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5" /> 16 hours of 1:1 tutoring over 6–8 weeks</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5" /> Full PMI ECO syllabus coverage</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5" /> Practice sample papers & online quizzes</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5" /> Exam registration assistance</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5" /> Offline messaging support throughout</li>
                </ul>
                <button
                  onClick={handleBuyNow}
                  disabled={checkoutLoading}
                  className="w-full bg-[#1E5C3A] hover:bg-[#144D2E] disabled:opacity-60 text-white px-6 py-4 rounded-sm font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <CreditCard size={18} />
                  {checkoutLoading ? 'Redirecting to checkout…' : 'Buy Now — $350'}
                </button>
                {checkoutError && (
                  <p className="text-red-400 text-sm mt-3 text-center">{checkoutError}</p>
                )}
              </div>

              {/* 20-hour premium package */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#1E5C3A]">Premium PMP Tutoring</h3>
                  <span className="text-xl font-black text-[#143D2D]">$550</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5"/> 20 hours of 1:1 tutoring over 8–10 weeks</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5"/> Covers all syllabus as per PMI ECO</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5"/> Practice sample papers & online quizzes</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5"/> Exam registration assistance</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5"/> Offline messaging support & help</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5"/> 1 extra high-difficulty practice exam included</li>
                </ul>
                <p className="text-sm font-medium text-[#143D2D] bg-gray-50 p-3 rounded-lg">
                  <strong>Advantage:</strong> Individual 1:1 tutoring tailored entirely to your learning style and pace.
                </p>
              </div>

              {/* 2-hour self-learner session */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#1E5C3A]">Self-Learner Session</h3>
                  <span className="text-xl font-black text-[#143D2D]">$150</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5"/> 2-hour session with an expert tutor</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#1E5C3A] shrink-0 mt-0.5"/> Dedicated Q&A and concept clarification</li>
                </ul>
                <p className="text-sm font-medium text-[#143D2D] bg-gray-50 p-3 rounded-lg">
                  <strong>Advantage:</strong> Self-learning at your pace, with a tutor available for fine-tuning your practice.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Offering 2: Agile & Other Training */}
            <div>
              <h2 className="text-2xl font-bold text-[#143D2D] mb-4">Agile & Framework Certifications</h2>
              <p className="text-gray-600 mb-6 font-light">
                Expand your toolkit beyond traditional project management. We offer specialized training and guidance for modern delivery frameworks.
              </p>
              <div className="bg-[#143D2D] text-white p-6 rounded-xl">
                <p className="mb-4 text-gray-300">Contact us for details on certifications like:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">ITIL</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">AgilePM</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">CSM</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">SAFe</span>
                </div>
                <a href="mailto:contact@hanseleleven.com" className="inline-flex items-center text-[#1E5C3A] font-medium hover:text-white transition-colors">
                  Contact for details <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Offering 3: Partnerships */}
            <div>
              <h2 className="text-2xl font-bold text-[#143D2D] mb-4">Partnerships</h2>
              <p className="text-gray-600 mb-4 font-light">
                We actively seek collaborations in the transformation space — co-creation of white papers, speaking engagements, and framework development.
              </p>
              <a href="mailto:partner@hanseleleven.com" className="inline-block px-6 py-3 border-2 border-[#143D2D] text-[#143D2D] rounded-sm font-medium hover:bg-[#143D2D] hover:text-white transition-colors w-fit">
                Partner With Us
              </a>
            </div>
          </div>
        </div>

        {/* WHITEPAPERS */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-[#1E5C3A]" />
            <h2 className="text-2xl font-bold text-[#143D2D]">Published White Papers</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Original research by Deepak Yeshwanth Saibaba on delivery, leadership, and the human dynamics that shape project outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whitepapers.map((wp, i) => (
              <a
                key={i}
                href={wp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md transition-all p-7"
              >
                <div className="text-[#1E5C3A] text-xs font-bold tracking-widest uppercase mb-3">{wp.publisher}</div>
                <h3 className="text-lg font-bold text-[#143D2D] mb-2 group-hover:text-[#1E5C3A] transition-colors leading-snug">{wp.title}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{wp.subtitle}</p>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">{wp.description}</p>
                <div className="inline-flex items-center gap-2 text-[#1E5C3A] text-sm font-medium group-hover:gap-3 transition-all">
                  Read Paper <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#1E5C3A]/10 rounded-2xl p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#143D2D] mb-4">Ready to accelerate your learning?</h3>
          <p className="text-gray-600 mb-8">Book a free 15-minute consultation to discuss your certification goals.</p>
          <a href="mailto:consult@hanseleleven.com" className="bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl inline-block">
            Book a 15-Min Free Consult
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#143D2D] text-white py-12 text-center mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-black tracking-tight mb-4">HANSEL ELEVEN</div>
          <p className="text-[#6BAF8A] mb-4">Transformation & Professional Enablement</p>
          <p className="text-gray-300 text-sm mb-8 font-light tracking-wide">
            Supporting companies and people in <br className="md:hidden" />
            Toronto | San Francisco | Warsaw | Dubai | Chennai | Seoul | Hong Kong
          </p>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hansel Eleven Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
