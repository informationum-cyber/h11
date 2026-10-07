import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Megaphone,
  Globe2,
  ClipboardList,
  Briefcase,
  Linkedin,
  FileText,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/consultants/shawn-jung')({
  component: ShawnJung,
})

const whitepaper = {
  title: 'Management Consultant in a Startup',
  subtitle: 'Challenges and a Success Path',
  publisher: 'Figshare / Preprint',
  author: 'Ji-Won (Shawn) Jung',
  date: 'Oct 2026',
  url: 'https://figshare.com/articles/preprint/_b_Management_Consultant_b_b_in_a_Startup_b_/34062363?file=69595476',
}

const highlights = [
  {
    icon: Megaphone,
    meta: 'Marketing & Content',
    title: 'LinkedIn Content Creation',
    description:
      "Creates and manages content that grows Hansel Eleven's presence and engagement on LinkedIn.",
  },
  {
    icon: Globe2,
    meta: 'Digital Strategy',
    title: 'Social Media & Web Presence R&D',
    description:
      "Researches and develops strategies to strengthen Hansel Eleven's social media and web presence.",
  },
  {
    icon: ClipboardList,
    meta: 'Project Coordination',
    title: 'Hansel Eleven Website Project',
    description:
      'Leads requirement analysis and coordinates delivery for the Hansel Eleven Website Project.',
  },
  {
    icon: Briefcase,
    meta: 'Leadership Support',
    title: 'Policy & Business Development',
    description:
      'Supports company policy development and assists leadership with business development and marketing.',
  },
]

function ShawnJung() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-center items-center border-b border-gray-100">
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/about" className="text-[#1E5C3A] font-semibold">
            About
          </Link>
          <Link
            to="/enterprise-transformation"
            className="hover:text-[#1E5C3A] transition-colors"
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
          <Link to="/vizhun" className="hover:text-[#1E5C3A] transition-colors">
            Vizhun
          </Link>
        </nav>
      </header>

      <main className="w-full max-w-6xl mx-auto px-6 py-16">
        <Link
          to="/about"
          className="text-sm font-medium text-gray-500 hover:text-[#1E5C3A] inline-flex items-center gap-2 mb-10"
        >
          &larr; Back to Our Consultants
        </Link>

        {/* HERO */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-semibold tracking-widest text-[#6BAF8A] uppercase mb-4">
            Marketing &middot; Web Presence &middot; Business Development
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#143D2D] mb-6">
            Ji-Won (Shawn) Jung
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Driving Hansel Eleven's content, web presence, and business
            development — from LinkedIn to the Website Project to company
            policy.
          </p>
          <a
            href="https://www.linkedin.com/in/ji-won-jung"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-6 py-3 rounded-sm font-medium transition-colors"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>

        {/* HIGHLIGHTS */}
        <section className="mb-20">
          <div className="inline-block px-4 py-2 bg-[#1E5C3A]/10 text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-4">
            HIGHLIGHTS
          </div>
          <h2 className="text-3xl font-bold text-[#143D2D] mb-10">
            Background at a glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col bg-white border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md rounded-2xl p-6 transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1E5C3A]/10 flex items-center justify-center mb-4">
                  <item.icon className="text-[#1E5C3A]" size={20} />
                </div>
                <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-2">
                  {item.meta}
                </div>
                <h3 className="text-lg font-bold text-[#143D2D] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-20">
          <div className="bg-[#143D2D] rounded-2xl p-10 flex flex-col">
            <p className="text-sm font-semibold tracking-widest text-[#6BAF8A] uppercase mb-4">
              About Shawn
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Building Hansel Eleven's presence and processes
            </h2>
            <div className="space-y-4 text-gray-300 font-light leading-relaxed">
              <p>
                At Hansel Eleven, Shawn leads LinkedIn content creation and
                R&amp;D for our social media and web presence, and handles
                requirement analysis and project coordination for the Hansel
                Eleven Website Project.
              </p>
              <p>
                He also supports company policy development and assists
                leadership with business development and marketing.
              </p>
              <p>
                He brings a foundation of 5+ years in operations and people
                management across Canada and South Korea, and is a Business
                Administration student at the University of Toronto Scarborough,
                specializing in Accounting with a minor in Economics and working
                toward his CPA designation.
              </p>
              <p>
                On campus, he serves as VP of Sponsorship for the Infinite
                Aperture Club and previously led corporate relations at UTKOS
                (Director, then VP) and HR at ACE UTSC. He is fluent in English
                and Korean, with working proficiency in French.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 relative min-h-[280px]">
            <img
              src="/team/shawn-jung.jpg"
              alt="Ji-Won (Shawn) Jung"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
        </section>

        {/* PUBLISHED RESEARCH */}
        <section className="mb-20">
          <div className="inline-block px-4 py-2 bg-[#1E5C3A]/10 text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-4">
            PUBLISHED RESEARCH
          </div>
          <h2 className="text-3xl font-bold text-[#143D2D] mb-10">
            White paper
          </h2>

          <a
            href={whitepaper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center gap-6 bg-white border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md rounded-2xl p-8 transition-all"
          >
            <div className="w-14 h-14 shrink-0 rounded-xl bg-[#1E5C3A]/10 flex items-center justify-center">
              <FileText className="text-[#1E5C3A]" size={24} />
            </div>
            <div className="flex-grow">
              <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-2">
                {whitepaper.publisher} &middot; {whitepaper.author} &middot;{' '}
                {whitepaper.date}
              </div>
              <h3 className="text-xl font-bold text-[#143D2D] mb-1 group-hover:text-[#1E5C3A] transition-colors">
                {whitepaper.title}
              </h3>
              <p className="text-gray-600 font-light">{whitepaper.subtitle}</p>
            </div>
            <div className="inline-flex items-center gap-2 text-[#1E5C3A] font-medium text-sm shrink-0 group-hover:gap-3 transition-all">
              Read Paper <ArrowRight size={16} />
            </div>
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#143D2D] text-white py-12 text-center mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-black tracking-tight mb-4">
            HANSEL ELEVEN
          </div>
          <p className="text-[#6BAF8A] mb-4">
            Transformation & Professional Enablement
          </p>
          <p className="text-gray-300 text-sm mb-8 font-light tracking-wide">
            Supporting companies and people in <br className="md:hidden" />
            Toronto | San Francisco | Warsaw | Dubai | Chennai | Seoul | Hong
            Kong
          </p>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hansel Eleven Inc. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
