import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'
import { CheckCircle2, ArrowRight, Users, Star } from 'lucide-react'
import { ExamUpdateBanner } from '../components/ExamUpdateBanner'
import { HandbookDownload } from '../components/HandbookDownload'

export const Route = createFileRoute('/learning-transformation')({
  component: LearningTransformation,
})

const cohortPackages = [
  {
    id: 'cohort-4',
    name: 'PMP Cohort (Group of 4)',
    price: 300,
    unit: '/ seat',
    badge: 'Most Popular',
    features: [
      '8 hours scheduled over a month, same as our 1:1 program',
      'Covers all syllabus as per PMI ECO',
      'Group practice papers, quizzes, and peer discussion',
      'Exam registration assistance',
    ],
  },
  {
    id: 'cohort-3',
    name: 'PMP Study Squad (Group of 3)',
    price: 380,
    unit: '/ seat',
    badge: 'More 1:1 Attention',
    features: [
      '8 hours scheduled over a month, smaller group',
      'Covers all syllabus as per PMI ECO',
      'More individual airtime per session than the group of 4',
      'Exam registration assistance',
    ],
  },
]

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function CohortReserveForm({
  selectedPackage,
  onSelectPackage,
}: {
  selectedPackage: string
  onSelectPackage: (id: string) => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': 'pmp-cohort-reserve',
          name,
          email,
          phone,
          package: selectedPackage,
          message,
        }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-gray-100">
        <h3 className="text-2xl font-bold text-[#232C33] mb-3">You're on the list!</h3>
        <p className="text-gray-600">We've received your reservation request and will reach out by email shortly to confirm your seat and arrange payment.</p>
      </div>
    )
  }

  return (
    <form
      name="pmp-cohort-reserve"
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <input type="hidden" name="form-name" value="pmp-cohort-reserve" />
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">Package</label>
        <select
          value={selectedPackage}
          onChange={(e) => onSelectPackage(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DD6547]"
        >
          {cohortPackages.map((pkg) => (
            <option key={pkg.id} value={pkg.name}>{pkg.name} — ${pkg.price}{pkg.unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DD6547]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DD6547]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone (optional)</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DD6547]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Anything else?</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Preferred dates, time zone, etc."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DD6547]"
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-[#DD6547] hover:bg-[#C2553A] disabled:opacity-60 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl inline-flex items-center"
        >
          {status === 'submitting' ? 'Submitting...' : 'Reserve My Spot'} <ArrowRight size={20} className="ml-2" />
        </button>
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-3">Something went wrong submitting the form. Please email consult@hanseleleven.com instead.</p>
        )}
        <p className="text-gray-500 text-sm mt-3">No payment is taken now — reserving a spot just confirms your interest. We'll follow up by email to lock in your cohort and arrange payment.</p>
      </div>
    </form>
  )
}

function LearningTransformation() {
  const [selectedPackage, setSelectedPackageName] = useState(cohortPackages[0].name)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-100">
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img src="/logo.jpeg" alt="Hansel Eleven Logo" className="h-28 w-auto object-contain" />
          </Link>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/enterprise-transformation" className="hover:text-[#DD6547] transition-colors">Enterprise</Link>
          <Link to="/career-transformation" className="hover:text-[#DD6547] transition-colors">Career</Link>
          <Link to="/learning-transformation" className="text-[#DD6547] font-semibold">Learning</Link>
          <Link to="/vizhun" className="hover:text-[#DD6547] transition-colors">Vizhun</Link>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-[#DD6547] inline-flex items-center gap-2 mb-6">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#232C33] mb-6">PMP Certification Training</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mb-6">
            Comprehensive PMP exam preparation with a <strong className="font-semibold text-[#DD6547]">100% first-attempt pass rate</strong>. Train in a small cohort, save versus 1:1 pricing, and keep each other accountable.
          </p>
          <ExamUpdateBanner />
        </div>

        {/* COHORT PRICING */}
        <section id="cohort" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-[#DD6547]" />
            <h2 className="text-2xl font-bold text-[#232C33]">PMP Cohorts</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Train alongside 2-3 peers preparing for the same exam. Same curriculum and pass-rate track record as our 1:1 tutoring, at a lower price per seat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {cohortPackages.map((pkg) => (
              <div key={pkg.id} className={`rounded-2xl p-8 border border-gray-100 border-t-4 flex flex-col ${pkg.id === 'cohort-4' ? 'bg-[#dad6ff]/10 border-t-[#dad6ff]' : 'bg-[#ffd799]/10 border-t-[#ffd799]'}`}>
                <div className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide uppercase text-[#DD6547] mb-3">
                  <Star size={14} className="fill-[#DD6547]" /> {pkg.badge}
                </div>
                <h3 className="text-xl font-bold text-[#232C33] mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-black text-[#232C33]">${pkg.price}</span>
                  <span className="text-gray-500 ml-1">{pkg.unit}</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5" /> {f}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPackageName(pkg.name)}
                  className="bg-[#232C33] hover:bg-[#1A2126] text-white px-6 py-3 rounded-sm font-medium transition-colors"
                >
                  Reserve This Package
                </button>
              </div>
            ))}
          </div>
          <CohortReserveForm selectedPackage={selectedPackage} onSelectPackage={setSelectedPackageName} />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Offering 1: PMP Training */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#232C33] mb-4">1:1 PMP Tutoring</h2>
            <p className="text-gray-600 mb-6">Prefer individual attention? We still offer 1:1 sessions.</p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#DD6547]">Premium PMP Tutoring</h3>
                  <span className="text-xl font-black text-[#232C33]">$550</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5"/> 8 hours scheduled over a month</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5"/> Covers all syllabus as per PMI ECO</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5"/> Practice sample papers & online quizzes</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5"/> Exam registration assistance</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5"/> Offline messaging support & help</li>
                </ul>
                <p className="text-sm font-medium text-[#232C33] bg-gray-50 p-3 rounded-lg">
                  <strong>Advantage:</strong> Individual 1:1 tutoring tailored entirely to your learning style and pace.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[#DD6547]">Self-Learner Session</h3>
                  <span className="text-xl font-black text-[#232C33]">$220</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5"/> 2-hour session with an expert tutor</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#DD6547] shrink-0 mt-0.5"/> Dedicated Q&A and concept clarification</li>
                </ul>
                <p className="text-sm font-medium text-[#232C33] bg-gray-50 p-3 rounded-lg">
                  <strong>Advantage:</strong> Self-learning at your pace, with a tutor available for fine-tuning your practice.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Offering 2: Agile & Other Training */}
            <div>
              <h2 className="text-2xl font-bold text-[#232C33] mb-4">Agile & Framework Certifications</h2>
              <p className="text-gray-600 mb-6 font-light">
                Expand your toolkit beyond traditional project management. We offer specialized training and guidance for modern delivery frameworks.
              </p>
              <div className="bg-[#232C33] text-white p-6 rounded-xl">
                <p className="mb-4 text-gray-300">Contact us for details on certifications like:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#dad6ff] text-[#232C33] px-3 py-1 rounded-full text-sm font-medium">ITIL</span>
                  <span className="bg-[#ffd799] text-[#232C33] px-3 py-1 rounded-full text-sm font-medium">AgilePM</span>
                  <span className="bg-[#d6faff] text-[#232C33] px-3 py-1 rounded-full text-sm font-medium">CSM</span>
                  <span className="bg-[#e8e8ea] text-[#232C33] px-3 py-1 rounded-full text-sm font-medium">SAFe</span>
                </div>
                <a href="mailto:contact@hanseleleven.com" className="inline-flex items-center text-[#DD6547] font-medium hover:text-white transition-colors">
                  Contact for details <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Offering 3: Partnerships */}
            <div>
              <h2 className="text-2xl font-bold text-[#232C33] mb-4">Thought Leadership & Partnerships</h2>
              <p className="text-gray-600 mb-4 font-light">
                We are actively seeking collaborations in the transformation space. Partner with us for the review and co-creation of:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> White Papers</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> Speaking Engagements</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> Framework Development</li>
              </ul>
              <div className="flex flex-col gap-4">
                <a href="https://figshare.com/authors/Deepak_Saibaba/24172350" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#DD6547] font-medium hover:text-[#232C33] transition-colors">
                  Read Our Published White Papers <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="mailto:partner@hanseleleven.com" className="inline-block px-6 py-3 border-2 border-[#232C33] text-[#232C33] rounded-sm font-medium hover:bg-[#232C33] hover:text-white transition-colors w-fit">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <HandbookDownload />
        </div>

        {/* CTA */}
        <div className="bg-[#DD6547]/10 rounded-2xl p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#232C33] mb-4">Not sure which option fits you?</h3>
          <p className="text-gray-600 mb-8">Book a free 15-minute consultation to discuss your certification goals.</p>
          <a href="mailto:consult@hanseleleven.com" className="bg-[#DD6547] hover:bg-[#C2553A] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl inline-block">
            Book a 15-Min Free Consult
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#232C33] text-white py-12 text-center mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-black tracking-tight mb-4">HANSEL ELEVEN</div>
          <p className="text-[#DD6547] mb-4">Transformation & Professional Enablement</p>
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
