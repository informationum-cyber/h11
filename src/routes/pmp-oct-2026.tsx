import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { pmpOct2026Questions } from '../data/pmp-oct-2026-questions'

export const Route = createFileRoute('/pmp-oct-2026')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'pmp-oct-2026',
        title: 'PMP October 2026 Test',
        password: 'PMPOCT2026',
        questions: pmpOct2026Questions,
        durationMinutes: 50,
      }}
    />
  )
}
