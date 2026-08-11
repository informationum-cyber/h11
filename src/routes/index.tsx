import { createFileRoute, Link } from '@tanstack/react-router'
import { Network, TrendingUp, GraduationCap, CalendarClock, Quote, ArrowRight } from 'lucide-react'

const whitepapers = [
  {
    title: 'No Toll-Free Highways',
    subtitle: 'Why Every Meeting Has a Cost; Even When Nobody Notices',
    publisher: 'GovWhitePapers',
    url: 'https://govwhitepapers.com/whitepapers/no-toll-free-highways-where-every-meeting-has-a-cost',
  },
  {
    title: 'The Human Operating System™',
    subtitle: 'Projects do not fail because of bad plans. They fail because of human conditions that no project charter or risk register captures.',
    publisher: 'GovWhitePapers',
    url: 'https://govwhitepapers.com/whitepapers/human-operating-system-why-projects-fail-people-before-they-fail-plans',
  },
  {
    title: 'Protecting the Product from Its Own Clients',
    subtitle: 'What project managers learn when they finally cross into product thinking.',
    publisher: 'Hansel Eleven / Figshare',
    url: 'https://doi.org/10.6084/m9.figshare.32974694',
  },
]

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

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src="/logo.png" alt="Hansel Eleven Logo" className="h-28 w-auto object-contain" />
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/about" className="hover:text-[#1E5C3A] transition-colors">About</Link>
          <Link to="/enterprise-transformation" className="hover:text-[#1E5C3A] transition-colors">Enterprise</Link>
          <Link to="/career-transformation" className="hover:text-[#1E5C3A] transition-colors">Career</Link>
          <Link to="/learning-transformation" className="hover:text-[#1E5C3A] transition-colors">Learning</Link>
          <Link to="/vizhun" className="hover:text-[#1E5C3A] transition-colors">Vizhun</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-5">
            {/* Subtle geometric background element */}
            <div className="w-[600px] h-[600px] border-[40px] border-[#143D2D] rounded-full filter blur-3xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#143D2D] max-w-4xl mx-auto leading-tight mb-8">
            Transformation & <br /> Professional Enablement
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-light">
            Guiding professionals and organizations through complexity — <span className="text-[#1E5C3A] font-medium">one breadcrumb at a time.</span>
          </p>
          <a href="#offerings" className="bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block">
            Explore Our Offerings
          </a>
        </div>
      </section>

      {/* PILLAR CARDS */}
      <section id="offerings" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <Link to="/enterprise-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#143D2D]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#143D2D] transition-colors">
              <Network className="w-7 h-7 text-[#143D2D] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#143D2D] mb-3">Enterprise Transformation</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform how you deliver</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1E5C3A]"></span> HART Framework</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1E5C3A]"></span> Consulting</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1E5C3A]"></span> Workshops</li>
            </ul>
          </Link>

          {/* Card 2 */}
          <Link to="/career-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#1E5C3A]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#1E5C3A] transition-colors">
              <TrendingUp className="w-7 h-7 text-[#1E5C3A] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#143D2D] mb-3">Career Transformation</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform your career path</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#143D2D]"></span> CECY Platform</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#143D2D]"></span> Coaching</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#143D2D]"></span> Transitions</li>
            </ul>
          </Link>

          {/* Card 3 */}
          <Link to="/learning-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#143D2D]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#143D2D] transition-colors">
              <GraduationCap className="w-7 h-7 text-[#143D2D] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#143D2D] mb-3">Learning Transformation</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform your expertise</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1E5C3A]"></span> PMP Prep</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1E5C3A]"></span> Agile Training</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1E5C3A]"></span> Thought Leadership</li>
            </ul>
          </Link>

          {/* Card 4 */}
          <Link to="/vizhun" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-[#1E5C3A]/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#1E5C3A] transition-colors">
              <CalendarClock className="w-7 h-7 text-[#1E5C3A] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-[#143D2D] mb-3">Vizhun</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform your vision into a plan</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#143D2D]"></span> Vision to Calendar</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#143D2D]"></span> Smart Scheduling</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#143D2D]"></span> Early Access</li>
            </ul>
          </Link>

        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-gray-100">
        <div className="max-w-xl">
          <div className="inline-block px-4 py-2 bg-[#1E5C3A]/10 text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-4">
            ABOUT US
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#143D2D] mb-4 leading-tight">
            A boutique transformation firm
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Hansel Eleven is dedicated to guiding organizations and individuals through complexity — with empathy, structure, and a human-centered approach.
          </p>
        </div>
        <Link to="/about" className="shrink-0 inline-flex items-center gap-2 bg-[#143D2D] text-white px-8 py-4 rounded-sm font-medium hover:bg-[#1E5C3A] transition-colors">
          Meet the Team <ArrowRight size={18} />
        </Link>
      </section>

      {/* PUBLISHED RESEARCH SECTION */}
      <section className="bg-[#143D2D] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-2 bg-[#1E5C3A]/20 text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-6">
              THOUGHT LEADERSHIP
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Published Research
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Original research on delivery, leadership, and organizational complexity — by Deepak S.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whitepapers.map((wp, i) => (
              <a
                key={i}
                href={wp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1E5C3A]/50 rounded-2xl p-8 transition-all flex flex-col"
              >
                <div className="text-[#1E5C3A] text-xs font-bold tracking-widest uppercase mb-4">{wp.publisher}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1E5C3A] transition-colors leading-snug">{wp.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">{wp.subtitle}</p>
                <div className="inline-flex items-center gap-2 text-[#1E5C3A] text-sm font-medium group-hover:gap-3 transition-all">
                  Read Paper <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#1E5C3A]/10 text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-6">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#143D2D] leading-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <Quote className="w-8 h-8 text-[#1E5C3A]/30 mb-4" />
                <p className="text-gray-700 font-light leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                {t.note && <p className="text-xs text-gray-400 italic mb-4">{t.note}</p>}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <span className="text-2xl" role="img" aria-label={t.country}>{t.flag}</span>
                  <div>
                    <p className="font-bold text-[#143D2D] text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#143D2D] text-white py-12 text-center">
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
