import { createFileRoute, Link } from '@tanstack/react-router'
import { CalendarClock, ArrowRight, Sparkles, ListChecks, Clock3 } from 'lucide-react'

export const Route = createFileRoute('/vizhun')({
  component: Vizhun,
})

function Vizhun() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-100">
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img src="/logo.jpeg" alt="Hansel Eleven Logo" className="h-16 w-auto object-contain" />
          </Link>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/enterprise-transformation" className="hover:text-[#DD6547] transition-colors">Enterprise</Link>
          <Link to="/career-transformation" className="hover:text-[#DD6547] transition-colors">Career</Link>
          <Link to="/learning-transformation" className="hover:text-[#DD6547] transition-colors">Learning</Link>
          <Link to="/vizhun" className="text-[#DD6547] font-semibold">Vizhun</Link>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-[#DD6547] inline-flex items-center gap-2 mb-6">
            &larr; Back to Home
          </Link>
          <div className="inline-block px-4 py-2 bg-[#DD6547]/10 text-[#DD6547] font-semibold tracking-wide text-sm rounded-full mb-6">
            PRODUCT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#232C33] mb-6">Vizhun</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Tell Vizhun what you want your life to look like. It turns your unstructured vision into a realistic schedule — calendar entries that actually fit around the time you already have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#DD6547]/10 rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-[#DD6547]" />
            </div>
            <h2 className="text-xl font-bold text-[#232C33] mb-3">Speak Your Vision</h2>
            <p className="text-gray-600 flex-grow">
              Describe your goals in plain language — a fitness goal, a career milestone, a habit you want to build. No rigid forms or templates required.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#232C33]/10 rounded-lg flex items-center justify-center mb-6">
              <ListChecks className="w-6 h-6 text-[#232C33]" />
            </div>
            <h2 className="text-xl font-bold text-[#232C33] mb-3">Get a Real Plan</h2>
            <p className="text-gray-600 flex-grow">
              Vizhun breaks your vision into concrete, achievable steps and sequences them sensibly — so the plan reflects how change actually happens.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#DD6547]/10 rounded-lg flex items-center justify-center mb-6">
              <Clock3 className="w-6 h-6 text-[#DD6547]" />
            </div>
            <h2 className="text-xl font-bold text-[#232C33] mb-3">Fits Your Calendar</h2>
            <p className="text-gray-600 flex-grow">
              It reads your existing schedule and places each step where it will actually happen, syncing directly to your calendar.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#232C33] rounded-2xl p-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <CalendarClock className="w-12 h-12 text-[#DD6547] mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Be the first to try Vizhun</h3>
          <p className="text-gray-300 mb-8 max-w-2xl">We're building Vizhun now. Join the waitlist to get early access and help shape the product.</p>
          <a href="mailto:vizhun@hanseleleven.com?subject=Vizhun%20Waitlist" className="bg-[#DD6547] hover:bg-[#C2553A] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl inline-flex items-center">
            Join the Waitlist <ArrowRight size={20} className="ml-2" />
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
