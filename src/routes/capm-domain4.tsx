import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { capmDomain4Questions } from '../data/capm-domain4-questions'

export const Route = createFileRoute('/capm-domain4')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'capm-domain4',
        title: 'CAPM Domain 4 Practice Questions — Business Analysis Frameworks',
        password: 'CAPM2026',
        questions: capmDomain4Questions,
        durationMinutes: 20,
      }}
    />
  )
}
