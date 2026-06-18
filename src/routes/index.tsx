import { createFileRoute, Link } from '@tanstack/react-router'
import { Network, TrendingUp, GraduationCap, Linkedin, CalendarClock } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

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
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-5">
            {/* Subtle geometric background element */}
            <div className="w-[600px] h-[600px] border-[40px] border-[#232C33] rounded-full filter blur-3xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#232C33] max-w-4xl mx-auto leading-tight mb-8">
            Transformation & <br /> Professional Enablement
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-light">
            Guiding professionals and organizations through complexity — <span className="text-[#DD6547] font-medium">one breadcrumb at a time.</span>
          </p>
          <a href="#offerings" className="bg-[#DD6547] hover:bg-[#C2553A] text-white px-8 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block">
            Explore Our Offerings
          </a>
        </div>
      </section>

      {/* PILLAR CARDS */}
      <section id="offerings" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <Link to="/enterprise-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
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
          <Link to="/career-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
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
          <Link to="/learning-transformation" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
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
          <Link to="/vizhun" className="block bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
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
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#DD6547] hover:text-[#232C33] transition-colors" title="LinkedIn Profile">
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
