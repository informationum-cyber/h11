import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, ArrowRight, Settings, Users2, ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/enterprise-transformation')({
  component: EnterpriseTransformation,
})

function EnterpriseTransformation() {
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
          <Link to="/enterprise-transformation" className="text-[#DD6547] font-semibold">Enterprise</Link>
          <Link to="/career-transformation" className="hover:text-[#DD6547] transition-colors">Career</Link>
          <Link to="/learning-transformation" className="hover:text-[#DD6547] transition-colors">Learning</Link>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-[#DD6547] inline-flex items-center gap-2 mb-6">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#232C33] mb-6">Enterprise Transformation</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Transforming how organizations deliver projects. We bridge the gap between traditional methodologies and modern agility to build sustainable ecosystems where both businesses and their people thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#232C33]/10 rounded-lg flex items-center justify-center mb-6">
              <Settings className="w-6 h-6 text-[#232C33]" />
            </div>
            <h2 className="text-2xl font-bold text-[#232C33] mb-3">HART Framework</h2>
            <p className="text-sm text-[#DD6547] font-semibold tracking-wide uppercase mb-4">Flagship Offering</p>
            <p className="text-gray-600 flex-grow">
              <strong>Hybrid Adaptive Responsive Transformation.</strong> A proprietary diagnostic and delivery profile methodology. It serves as a smart tool for understanding exactly what methodology to choose for your unique organizational context.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#232C33]/10 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-[#232C33]" />
            </div>
            <h2 className="text-2xl font-bold text-[#232C33] mb-3">Delivery Consulting</h2>
            <p className="text-sm text-[#DD6547] font-semibold tracking-wide uppercase mb-4">Implementation Support</p>
            <p className="text-gray-600 flex-grow">
              Expert consulting to implement hybrid delivery practices seamlessly. We help you navigate complex enterprise environments, establish strong governance, and ensure predictable, high-quality outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-[#232C33]/10 rounded-lg flex items-center justify-center mb-6">
              <Users2 className="w-6 h-6 text-[#232C33]" />
            </div>
            <h2 className="text-2xl font-bold text-[#232C33] mb-3">PMO Workshops</h2>
            <p className="text-sm text-[#DD6547] font-semibold tracking-wide uppercase mb-4">Training + Change Management</p>
            <p className="text-gray-600 flex-grow">
              Empower your Project Management Office (PMO) with targeted workshops that drive change management and instill a culture of continuous improvement and delivery excellence.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#DD6547] rounded-2xl p-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <Building2 className="w-12 h-12 text-white/80 mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">Ready to transform your delivery?</h3>
          <p className="text-white/90 mb-8 max-w-2xl text-lg">Partner with Hansel Eleven to align your strategy, structure, and people for sustainable success.</p>
          <a href="mailto:enterprise@hanseleleven.com" className="bg-white text-[#DD6547] px-8 py-4 rounded-sm text-lg font-bold transition-all shadow-lg hover:shadow-xl inline-flex items-center">
            Schedule an Enterprise Consult <ArrowRight size={20} className="ml-2" />
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
