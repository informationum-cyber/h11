import { createFileRoute, Link } from '@tanstack/react-router'
import { Award, Briefcase, GraduationCap, Target } from 'lucide-react'

export const Route = createFileRoute('/consultants/revthee-ganesan')({
  component: RevtheeGanesan,
})

const highlights = [
  {
    icon: Briefcase,
    meta: 'Current Role',
    title: 'Product Owner & QA Leadership, Force Marketing',
    description:
      'Combines product strategy, agile delivery, and QA leadership to accelerate time-to-market on automotive marketing campaigns.',
  },
  {
    icon: Award,
    meta: 'Certifications',
    title: 'CSM, CSPO & ISTQB Certified',
    description:
      'Certified Scrum Master, Certified Scrum Product Owner (SAFe® Product Owner/Product Manager), and ISTQB-certified in software quality assurance.',
  },
  {
    icon: Target,
    meta: '20+ Years of Experience',
    title: 'Product Ownership, QA & Software Management',
    description:
      'A career-long focus on advancing quality assurance and test assurance processes across cross-functional teams.',
  },
  {
    icon: GraduationCap,
    meta: 'Location',
    title: 'Greater Houston, Texas',
    description: 'University of Lynchburg graduate, based in Houston, Texas.',
  },
]

function RevtheeGanesan() {
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
            Product Ownership &middot; Quality Assurance &middot; Agile Delivery
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#143D2D] mb-6">
            Revthee Ganesan
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Advisory Consultant for special projects, bringing 20+ years of
            product ownership, QA, and software management expertise to
            high-performing, cross-functional teams.
          </p>
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
              About Revthee
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Agile excellence, driven by quality
            </h2>
            <div className="space-y-4 text-gray-300 font-light leading-relaxed">
              <p>
                With over 20 years of experience, Revthee brings a unique blend
                of product ownership, quality assurance, and software management
                expertise. At Force Marketing, she contributes to enhancing
                automotive campaigns by combining product strategy, agile
                delivery, and QA leadership to accelerate time-to-market and
                drive measurable team performance improvement.
              </p>
              <p>
                Her work is grounded in her certifications, including Certified
                Scrum Master and SAFe&reg; Product Owner/Product Manager, which
                underscore her commitment to driving agile excellence.
              </p>
              <p>
                Her focus is on advancing quality assurance analysis and test
                assurance processes, ensuring seamless collaboration among
                cross-functional teams and delivering impactful product
                solutions. By leveraging a structured approach and a passion for
                efficiency, she aims to create high-performing workflows that
                empower teams to achieve their objectives while maintaining the
                highest standards of quality.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 relative min-h-[280px]">
            <img
              src="/team/revthee-ganesan.jpg"
              alt="Revthee Ganesan"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
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
