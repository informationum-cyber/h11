import { createFileRoute, Link } from '@tanstack/react-router'
import { Briefcase, ArrowRight, Compass, Users } from 'lucide-react'

export const Route = createFileRoute('/career-transformation')({
  component: CareerTransformation,
})

function CareerTransformation() {
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
          <Link to="/career-transformation" className="text-[#1E5C3A] font-semibold">Career</Link>
          <Link to="/learning-transformation" className="hover:text-[#1E5C3A] transition-colors">Learning</Link>
          <Link to="/vizhun" className="hover:text-[#1E5C3A] transition-colors">Vizhun</Link>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-[#1E5C3A] inline-flex items-center gap-2 mb-6">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#143D2D] mb-6">Career Transformation</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Your career journey is unique. Whether you are breaking into the market, seeking a transition, or aiming for leadership, we provide the mentorship, coaching, and confidence you need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#1E5C3A]/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[#1E5C3A]" />
            </div>
            <h2 className="text-2xl font-bold text-[#143D2D] mb-3">CECY Program</h2>
            <p className="text-sm text-[#1E5C3A] font-semibold tracking-wide uppercase mb-4">Mentorship</p>
            <p className="text-gray-600 mb-6 flex-grow">
              Canadian Early Careers and Youth (CECY) Mentoring Program. We provide dedicated mentorship and training specifically tailored for co-ops and fresh graduates looking to build a strong foundation.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <p className="text-lg font-bold text-[#143D2D] mb-4">Free Consult</p>
              <a href="mailto:cecy@hanseleleven.com" className="inline-block w-full px-4 py-3 bg-[#143D2D] text-white rounded-sm font-medium hover:bg-[#0E2E21] transition-colors">
                Request a 15-min Coffee Chat
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#1E5C3A]/10 rounded-lg flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-[#1E5C3A]" />
            </div>
            <h2 className="text-2xl font-bold text-[#143D2D] mb-3">Early Career Coaching</h2>
            <p className="text-sm text-[#1E5C3A] font-semibold tracking-wide uppercase mb-4">1:1 Coaching</p>
            <p className="text-gray-600 mb-6 flex-grow">
              Co-op opportunities, breaking into the corporate Canadian market, resume help, and 1:1 coaching. Specialized for early careers in IT, management, finance, and corporate communication.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col gap-3">
              <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                <span className="text-gray-600 font-medium">45 mins</span>
                <span className="text-lg font-bold text-[#143D2D]">$70</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                <span className="text-gray-600 font-medium">1.5 hours</span>
                <span className="text-lg font-bold text-[#143D2D]">$120</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#1E5C3A]/10 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-[#1E5C3A]" />
            </div>
            <h2 className="text-2xl font-bold text-[#143D2D] mb-3">Career Transitions</h2>
            <p className="text-sm text-[#1E5C3A] font-semibold tracking-wide uppercase mb-4">Interview Coaching</p>
            <p className="text-gray-600 mb-6 flex-grow">
              Are you ready to become a PM? Career transition conversations are serious and require a strong mentor, network, and confidence—whether for an internal move or external job opportunities.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col gap-3">
              <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                <span className="text-gray-600 font-medium">2 hours</span>
                <span className="text-lg font-bold text-[#143D2D]">$230</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border border-gray-100">
                <span className="text-gray-600 font-medium">4 hours</span>
                <span className="text-lg font-bold text-[#143D2D]">$315</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#143D2D] rounded-2xl p-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to crack any interview?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl">Connect with our seasoned professionals and gain the insights and confidence you need to take the next big step in your career.</p>
          <a href="mailto:coaching@hanseleleven.com" className="bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl inline-flex items-center">
            Contact Us Today <ArrowRight size={20} className="ml-2" />
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
