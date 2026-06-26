import { createFileRoute, Link } from '@tanstack/react-router'
import { Network, TrendingUp, GraduationCap, Linkedin, CalendarClock, Quote, ArrowRight, Users, Award } from 'lucide-react'
import { HandbookDownload } from '../components/HandbookDownload'
import { ExamUpdateBanner } from '../components/ExamUpdateBanner'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const testimonials = [
  {
    name: 'Tomas Czyz',
    country: 'Poland',
    flag: '🇵🇱',
    quote: 'Hansel Eleven helped me in my journey to build real confidence for the corporate workplace. Every session was well prepared, engaging, and focused on my goals. I appreciate how much the mentors care about my progress and make learning enjoyable.',
  },
  {
    name: 'Andrea D',
    country: 'Italy',
    flag: '🇮🇹',
    quote: "Deepak from Hansel Eleven is a wonderful mentor. I can't stop thanking him for opening my eyes to the world of Project Management, which changed my perspective and helped me love my job even more. In your professional life, some people are unforgettable, and he is one of them.",
  },
  {
    name: 'Bota K',
    country: 'Uzbekistan',
    flag: '🇺🇿',
    quote: 'The guidance I received from them has been invaluable in preparing me for technical and C-level interviews where I got great feedback from those interviews.',
  },
  {
    name: 'Salama',
    country: 'Egypt',
    flag: '🇪🇬',
    quote: 'Your expertise, passion, and dedication have helped shape my vision of this project management field and have optimally prepared me to face the challenges ahead. I am convinced that your positive influence will remain etched in me throughout my career.',
    note: 'Translated from the original French',
  },
  {
    name: 'Antonio',
    country: 'United Kingdom',
    flag: '🇬🇧',
    quote: 'Consulted with them as I was looking to start a career in IT PM. Received great guidance, direction and invaluable knowledge about the industry.',
  },
]

const testimonialAccents = ['border-t-[#dad6ff]', 'border-t-[#ffd799]', 'border-t-[#d6faff]', 'border-t-[#e8e8ea]']
const dotGrid16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const stripeBlockBig = [0, 1, 2, 3, 4]

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/logo.jpeg" alt="Hansel Eleven Logo" className="h-28 w-auto object-contain" />
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/enterprise-transformation" className="hover:text-[#DD6547] transition-colors">Enterprise</Link>
          <Link to="/career-transformation" className="hover:text-[#DD6547] transition-colors">Career</Link>
          <Link to="/learning-transformation" className="hover:text-[#DD6547] transition-colors">Learning</Link>
          <Link to="/vizhun" className="hover:text-[#DD6547] transition-colors">Vizhun</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative isolate w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="hidden md:block absolute -top-48 -left-48 w-[320px] h-[320px] bg-[#DD6547] rounded-full"></div>
          <div className="hidden md:block absolute -bottom-40 -right-40 w-[320px] h-[320px] bg-[#232C33] rounded-[3rem] rotate-12"></div>
          <div className="hidden md:grid absolute top-6 left-0 grid-cols-4 gap-3">
            {dotGrid16.map((i) => (
              <span key={i} className="w-4 h-4 rounded-full bg-[#dad6ff]"></span>
            ))}
          </div>
          <div className="hidden md:flex absolute bottom-6 right-0 flex-col gap-2 w-32">
            {stripeBlockBig.map((i) => (
              <span key={i} className="h-3 rounded-sm bg-[#ffd799]"></span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DD6547]/10 text-[#DD6547] font-semibold tracking-wide text-sm rounded-full">
              <Award size={16} /> 100% FIRST-ATTEMPT PASS RATE
            </div>
            <ExamUpdateBanner />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#232C33] max-w-4xl mx-auto leading-tight mb-8">
            Pass Your PMP Exam — <br /> Train in a Cohort
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-light">
            Join a small group of peers preparing for the same exam. Same proven curriculum as our 1:1 tutoring, at a <span className="text-[#DD6547] font-medium">lower price per seat.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link to="/learning-transformation" hash="cohort" className="bg-[#DD6547] hover:bg-[#C2553A] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center">
              <Users size={20} className="mr-2" /> Reserve Your Cohort Seat
            </Link>
            <a href="#offerings" className="text-[#232C33] hover:text-[#DD6547] px-8 py-4 text-lg font-medium transition-colors inline-flex items-center">
              Explore Our Other Offerings <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* PILLAR CARDS */}
      <section id="offerings" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#232C33]/10 text-[#232C33] font-semibold tracking-wide text-sm rounded-full mb-6">
              OUR OTHER OFFERINGS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#232C33] leading-tight">
              Beyond PMP Cohorts
            </h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <Link to="/enterprise-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#dad6ff] hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#232C33]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#232C33] transition-colors">
              <Network className="w-7 h-7 text-[#232C33] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#232C33] mb-3">Enterprise Transformation</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform how you deliver</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> HART Framework</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> Consulting</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> Workshops</li>
            </ul>
          </Link>

          {/* Card 2 */}
          <Link to="/career-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#ffd799] hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#DD6547]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#DD6547] transition-colors">
              <TrendingUp className="w-7 h-7 text-[#DD6547] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#232C33] mb-3">Career Transformation</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform your career path</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#232C33]"></span> CECY Platform</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#232C33]"></span> Coaching</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#232C33]"></span> Transitions</li>
            </ul>
          </Link>

          {/* Card 3 */}
          <Link to="/learning-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#d6faff] hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#232C33]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#232C33] transition-colors">
              <GraduationCap className="w-7 h-7 text-[#232C33] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#232C33] mb-3">Learning Transformation</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform your expertise</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> PMP Prep</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> Agile Training</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#DD6547]"></span> Thought Leadership</li>
            </ul>
          </Link>

          {/* Card 4 */}
          <Link to="/vizhun" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#e8e8ea] hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#DD6547]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#DD6547] transition-colors">
              <CalendarClock className="w-7 h-7 text-[#DD6547] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#232C33] mb-3">Vizhun</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform your vision into a plan</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#232C33]"></span> Vision to Calendar</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#232C33]"></span> Smart Scheduling</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#232C33]"></span> Early Access</li>
            </ul>
          </Link>

        </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <div className="inline-block px-4 py-2 bg-[#DD6547]/10 text-[#DD6547] font-semibold tracking-wide text-sm rounded-full mb-6">
              ABOUT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232C33] mb-8 leading-tight">
              Navigating Complexity with Empathy & Structure
            </h2>
            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
              <p>
                Hansel Eleven is a boutique transformation and professional enablement firm dedicated to guiding organizations and individuals through complexity. We believe that modern challenges require more than rigid frameworks; they demand a human-centered, adaptive approach to delivery and development.
              </p>
              <p>
                By bridging the gap between traditional methodologies and modern agility, we design sustainable ecosystems where both businesses and their people can thrive. Our expertise spans enterprise delivery consulting, PMO, governance design, hybrid agile frameworks, and empowering people to execute with precision and empathy. In addition to delivery consulting for projects, we focus on training and mentoring of individuals as well.
              </p>
              <p>
                Hansel Eleven transforms how you work. Whether you’re transforming your delivery approach, your career path, or your skillset, we guide you through complexity.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-10 md:p-14 rounded-2xl border border-gray-100 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DD6547]/5 rounded-bl-full -z-0"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#232C33] mb-6">Founder & Vision</h3>
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <img 
                  src="/founder.jpg" 
                  alt="Deepak S" 
                  className="w-32 h-32 rounded-full object-cover shadow-sm border-2 border-white shrink-0"
                />
                <div>
                  <p className="text-gray-700 leading-relaxed font-light mb-4">
                    Based in Canada, <strong>Deepak S</strong> is a transformation and delivery leader with nearly two decades of experience across banking, financial services, and enterprise PMO leadership. As the founder of Hansel Eleven, Deepak has successfully spearheaded large-scale transformation initiatives, operating seamlessly across traditional, agile, and hybrid models.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-light mb-4">
                    A passionate advocate for human-centered delivery, he is dedicated to mentoring early-career talent and coaching delivery professionals to thrive in an ever-evolving landscape.
                  </p>
                  <a href="https://linkedin.com/in/deepyeshu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#DD6547] hover:text-[#232C33] transition-colors" title="LinkedIn Profile">
                    <Linkedin size={20} />
                    <span className="ml-2 font-medium text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold tracking-widest text-[#DD6547] uppercase mb-2">Our Mission</p>
                <p className="text-gray-600 italic">"To empower professionals and organizations to navigate complexity and achieve sustainable growth through human-centered, adaptive, and structured transformation."</p>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-16">
          <HandbookDownload />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#DD6547]/10 text-[#DD6547] font-semibold tracking-wide text-sm rounded-full mb-6">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232C33] leading-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-t-4 flex flex-col ${testimonialAccents[i % testimonialAccents.length]}`}>
                <Quote className="w-8 h-8 text-[#DD6547]/30 mb-4" />
                <p className="text-gray-700 font-light leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                {t.note && <p className="text-xs text-gray-400 italic mb-4">{t.note}</p>}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <span className="text-2xl" role="img" aria-label={t.country}>{t.flag}</span>
                  <div>
                    <p className="font-bold text-[#232C33] text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#232C33] text-white py-12 text-center">
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
