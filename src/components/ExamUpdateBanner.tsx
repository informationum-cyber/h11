import { Sparkles } from 'lucide-react'

export function ExamUpdateBanner() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#232C33]/5 text-[#232C33] font-medium text-sm rounded-full">
      <Sparkles size={16} className="text-[#DD6547] shrink-0" />
      PMI's exam content outline changes July 9, 2026 — new AI-focused content is being added. Train on the latest version.
    </div>
  )
}
