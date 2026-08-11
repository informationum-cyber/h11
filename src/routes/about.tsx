import { createFileRoute, Link } from '@tanstack/react-router'
import { Linkedin } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

const team = [
  {
    name: 'Alex G',
    role: 'Product & Technology Consultant',
    initials: 'AG',
    bio: [
      'Alex is a graduate of the University of Chicago Booth School of Business, where he earned his MBA. He is passionate about getting digital products from ideation to impact—combining user-centric design, data-informed decisions, and emerging technologies to build solutions that solve real problems.',
      'In his free time, Alex loves to play sports and has twice won MVP at the state level tennis championships.',
    ],
  },
  {
    name: 'Sanya A',
    role: 'Change & Business Transformation Consultant',
    initials: 'SA',
    bio: [
      'Sanya holds a graduate degree in Fine Arts and a degree in Business Management from Mumbai. This unique blend of creativity and business acumen helps her see the bigger picture while paying attention to the details that drive meaningful change.',
      'A classical dancer, Sanya has performed in several dance dramas on stage, where her discipline, expression, and storytelling skills come to life.',
    ],
  },
  {
    name: 'Kim D',
    role: 'Operations & Client Success Consultant',
    initials: 'KD',
    bio: [
      'Kim has extensive experience in client-facing roles, managing operations and operations teams in large companies in Korea before relocating to Canada. He is known for building efficient processes, leading high-performing teams, and delivering exceptional client experiences.',
      'In his free time, Kim practices taekwondo and enjoys playing video games—two passions that keep him focused, agile, and always up for a challenge.',
    ],
  },
]

function About() {
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
          <Link to="/about" className="text-[#1E5C3A] font-semibold">About</Link>
          <Link to="/enterprise-transformation" className="hover:text-[#1E5C3A] transition-colors">Enterprise</Link>
          <Link to="/career-transformation" className="hover:text-[#1E5C3A] transition-colors">Career</Link>
          <Link to="/learning-transformation" className="hover:text-[#1E5C3A] transition-colors">Learning</Link>
          <Link to="/vizhun" className="hover:text-[#1E5C3A] transition-colors">Vizhun</Link>
        </nav>
      </header>

      <main className="w-full max-w-6xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm font-medium text-gray-500 hover:text-[#1E5C3A] inline-flex items-center gap-2 mb-10">
          &larr; Back to Home
        </Link>

        {/* PAGE TITLE */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#143D2D] mb-6">About Hansel Eleven</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
            A boutique transformation and professional enablement firm dedicated to guiding organizations and individuals through complexity — with empathy, structure, and a human-centered approach.
          </p>
        </div>

        {/* MISSION */}
        <section className="bg-[#143D2D] rounded-2xl p-10 md:p-14 mb-20">
          <p className="text-sm font-semibold tracking-widest text-[#6BAF8A] uppercase mb-4">Our Mission</p>
          <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed italic">
            "To empower professionals and organizations to navigate complexity and achieve sustainable growth through human-centered, adaptive, and structured transformation."
          </blockquote>
        </section>

        {/* FOUNDER */}
        <section className="mb-24">
          <div className="inline-block px-4 py-2 bg-[#1E5C3A]/10 text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-8">
            FOUNDER
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-[#143D2D] mb-2">Deepak S</h2>
              <p className="text-[#1E5C3A] font-semibold mb-8">Founder & Principal Consultant</p>
              <div className="space-y-5 text-gray-700 font-light leading-relaxed text-lg">
                <p>
                  Based in Canada, Deepak is a transformation and delivery leader with nearly two decades of experience across banking, financial services, and enterprise PMO leadership. As the founder of Hansel Eleven, he has successfully spearheaded large-scale transformation initiatives, operating seamlessly across traditional, agile, and hybrid models.
                </p>
                <p>
                  A passionate advocate for human-centered delivery, he is dedicated to mentoring early-career talent and coaching delivery professionals to thrive in an ever-evolving landscape.
                </p>
                <p>
                  Deepak is also a published researcher — his work on meeting economics, human organizational dynamics, and product stewardship is featured across GovWhitePapers and Figshare.
                </p>
              </div>
              <a
                href="https://linkedin.com/in/deepyeshu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-[#1E5C3A] hover:text-[#143D2D] transition-colors font-medium"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
            <div className="flex justify-center lg:justify-start">
              <img
                src="/founder.jpg"
                alt="Deepak S"
                className="w-72 h-72 rounded-2xl object-cover shadow-lg border-4 border-white ring-1 ring-gray-100"
              />
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="mb-20">
          <div className="inline-block px-4 py-2 bg-[#1E5C3A]/10 text-[#1E5C3A] font-semibold tracking-wide text-sm rounded-full mb-4">
            THE TEAM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#143D2D] mb-12">The people behind the work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                {/* Avatar */}
                <div className="w-full aspect-square rounded-2xl bg-[#143D2D]/5 border border-gray-100 flex items-center justify-center mb-6 overflow-hidden">
                  <span className="text-5xl font-black text-[#143D2D]/30 tracking-tight select-none">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#143D2D] mb-1">{member.name}</h3>
                <p className="text-[#1E5C3A] font-semibold text-sm mb-4">{member.role}</p>
                <div className="space-y-3 text-gray-600 font-light leading-relaxed text-sm">
                  {member.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPANY OVERVIEW */}
        <section className="border-t border-gray-100 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-4xl font-black text-[#143D2D] mb-2">~20</div>
              <div className="text-gray-600 font-light">Years of combined delivery experience</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#143D2D] mb-2">100%</div>
              <div className="text-gray-600 font-light">PMP first-attempt pass rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#143D2D] mb-2">7</div>
              <div className="text-gray-600 font-light">Cities we serve globally</div>
            </div>
          </div>
        </section>
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
