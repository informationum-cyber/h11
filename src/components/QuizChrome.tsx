import { Link } from '@tanstack/react-router'

export function QuizHeader() {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-100">
      <div className="mb-4 md:mb-0">
        <Link to="/">
          <img src="/logo.png" alt="Hansel Eleven Logo" className="h-28 w-auto object-contain" />
        </Link>
      </div>
      <nav className="flex gap-6 text-sm font-medium text-gray-600">
        <Link to="/enterprise-transformation" className="hover:text-[#1E5C3A] transition-colors">Enterprise</Link>
        <Link to="/career-transformation" className="hover:text-[#1E5C3A] transition-colors">Career</Link>
        <Link to="/learning-transformation" className="hover:text-[#1E5C3A] transition-colors">Learning</Link>
        <Link to="/vizhun" className="hover:text-[#1E5C3A] transition-colors">Vizhun</Link>
      </nav>
    </header>
  )
}

export function QuizFooter() {
  return (
    <footer className="bg-[#143D2D] text-white py-12 text-center mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-2xl font-black tracking-tight mb-4">HANSEL ELEVEN</div>
        <p className="text-[#6BAF8A] mb-4">Transformation & Professional Enablement</p>
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Hansel Eleven Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
