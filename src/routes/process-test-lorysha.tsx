import { createFileRoute } from '@tanstack/react-router'
import { FullMockExamPage } from '../components/FullMockExamPage'
import { pmpProcessLoryshaCaseStudy } from '../data/pmp-process-lorysha-case-study'
import { pmpProcessLoryshaQuestions } from '../data/pmp-process-lorysha-questions'

export const Route = createFileRoute('/process-test-lorysha')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <FullMockExamPage
      config={{
        slug: 'process-test-lorysha',
        title: 'Process Test',
        password: 'LORYSHA2026',
        sectionA: pmpProcessLoryshaCaseStudy,
        sectionB: pmpProcessLoryshaQuestions,
        sectionC: [],
        durationMinutes: 79,
        hideTopicHint: true,
        sectionBLabel: 'Practice Questions',
        introDescription:
          '62 Process-domain questions: an opening case study followed by independent practice questions.',
      }}
    />
  )
}
