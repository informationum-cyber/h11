import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/consultants/matthew-wang')({
  component: MatthewWang,
})

const PORTFOLIO_BASE = 'https://mattwang8229.github.io/portfolio/'

const featuredWork = [
  {
    meta: 'Capital Allocation • Excel Modeling',
    title: 'ROI Model for SunCom Acquisition',
    description:
      '5-year cash flows (base/best/worst), IRR & payback; sensitivity to lease-up & cap-rate assumptions.',
    href: `${PORTFOLIO_BASE}portfolio.html#roi-summary`,
  },
  {
    meta: 'Valuation • WACC • DDM',
    title: 'TELUS Equity Valuation',
    description:
      'Pro-forma statements with WACC & DDM; short-term buy vs. potential long-term overvaluation signals.',
    href: `${PORTFOLIO_BASE}portfolio.html#valuation-summary`,
  },
  {
    meta: 'Macro • Liquidity • Risk',
    title: 'Liquidity Shock Simulation',
    description:
      'Modeled bond sell-offs & credit-demand shifts; proposed stabilization tools for policy response.',
    href: `${PORTFOLIO_BASE}portfolio.html#policy-summary`,
  },
]

const portfolioLinks = [
  { label: 'Experience', href: `${PORTFOLIO_BASE}projects.html` },
  { label: 'Portfolio', href: `${PORTFOLIO_BASE}portfolio.html` },
  { label: 'About', href: `${PORTFOLIO_BASE}about.html` },
  { label: 'Contact', href: `${PORTFOLIO_BASE}contact.html` },
]

function MatthewWang() {
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
            Finance &middot; Modeling &middot; Strategy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#143D2D] mb-6">
            From Financial Models to Strategic Insights
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            FP&amp;A, forecasting, and KPI reporting to support strategy and
            business growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`${PORTFOLIO_BASE}assets/Resume-Matthew-Wei-Wang-Autodesk-FA.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-6 py-3 rounded-sm font-medium transition-colors"
            >
              Download Resume
            </a>
            <a
              href={`${PORTFOLIO_BASE}portfolio.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1E5C3A] text-[#1E5C3A] hover:bg-[#1E5C3A] hover:text-white px-6 py-3 rounded-sm font-medium transition-colors"
            >
              View Portfolio <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* FEATURED WORK */}
        <section className="mb-20">
          <div className="inline-block px-4 py-2 bg-[#1E5C3A]/10 text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-4">
            FEATURED WORK
          </div>
          <h2 className="text-3xl font-bold text-[#143D2D] mb-2">
            Three highlights
          </h2>
          <p className="text-gray-600 font-light mb-10">
            See more on the full Experience &amp; Portfolio pages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-white border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-md rounded-2xl p-6 transition-all group"
              >
                <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-3">
                  {item.meta}
                </div>
                <h3 className="text-lg font-bold text-[#143D2D] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#1E5C3A] font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                  Open case study <ArrowRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT TEASER */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-20">
          <div className="bg-[#143D2D] rounded-2xl p-10 flex flex-col">
            <p className="text-sm font-semibold tracking-widest text-[#6BAF8A] uppercase mb-4">
              About Matthew
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Strategy &amp; Analytics with a human touch
            </h2>
            <p className="text-gray-300 font-light leading-relaxed mb-8">
              Hi, I&rsquo;m Matthew Wang &mdash; a strategy and analytics
              enthusiast with a strong academic foundation in Economics and
              Communication, Culture, Information &amp; Technology from the
              University of Toronto, complemented by executive certificate
              leadership experience at SKEMA Business School. I&rsquo;ve led
              hands-on finance projects including ROI models, valuations, and
              investor decks, developing a skillset that blends financial
              modeling, data-driven problem solving, and clear storytelling for
              diverse audiences. I thrive where precision and creativity meet.
            </p>
            <div className="flex flex-wrap gap-4 mt-auto">
              <a
                href={`${PORTFOLIO_BASE}about.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#143D2D] px-5 py-2.5 rounded-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Learn more <ExternalLink size={14} />
              </a>
              <a
                href={`${PORTFOLIO_BASE}assets/Resume-Matthew-Wei-Wang-Autodesk-FA.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-5 py-2.5 rounded-sm font-medium hover:bg-white/10 transition-colors"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 relative min-h-[280px]">
            <img
              src="/team/matthew-wang.jpg"
              alt="Matthew Wang"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
        </section>

        {/* MORE FROM MATTHEW — linked externally */}
        <section className="border-t border-gray-100 pt-14">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
            More from Matthew
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {portfolioLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 border border-gray-100 hover:border-[#1E5C3A]/40 hover:shadow-sm rounded-xl px-5 py-4 text-gray-700 font-medium transition-all"
              >
                {link.label}{' '}
                <ExternalLink size={14} className="text-gray-400" />
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-light mt-6">
            These pages live on Matthew&rsquo;s own site and open in a new tab.
          </p>
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
