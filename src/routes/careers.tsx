import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail, ArrowRight, Users } from 'lucide-react'
import { QuizHeader, QuizFooter } from '../components/QuizChrome'

export const Route = createFileRoute('/careers')({
  component: Careers,
})

function Careers() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <QuizHeader />

      <main className="w-full max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#143D2D] mb-6">Careers at Hansel Eleven</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            We're always looking for great people to join the Hansel Eleven family — whether you're new to us or already part of the team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Prospective partners/associates */}
          <div className="bg-[#f0f7f2] rounded-2xl p-10 flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#143D2D] flex items-center justify-center mb-6">
              <Users className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[#143D2D] mb-4">Join the Family</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8 flex-1">
              Interested in partnering with us or joining as an associate? We'd love to hear from you. Send your resume and a bit about yourself to our team.
            </p>
            <a
              href="mailto:helevn@proton.me"
              className="inline-flex items-center justify-center gap-2 bg-[#1E5C3A] hover:bg-[#144D2E] text-white px-6 py-3 rounded-sm font-medium transition-colors"
            >
              <Mail size={18} />
              helevn@proton.me
            </a>
          </div>

          {/* Existing contractors */}
          <div className="bg-white border border-gray-100 rounded-2xl p-10 flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#143D2D] flex items-center justify-center mb-6">
              <ArrowRight className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[#143D2D] mb-4">Existing Contractors</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8 flex-1">
              Already engaged with Hansel Eleven as a contractor? Complete your onboarding information here.
            </p>
            <Link
              to="/contractor-onboarding"
              className="inline-flex items-center justify-center gap-2 bg-[#143D2D] hover:bg-[#0E2E21] text-white px-6 py-3 rounded-sm font-medium transition-colors"
            >
              Click here
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>

      <QuizFooter />
    </div>
  )
}
