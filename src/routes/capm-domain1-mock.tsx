import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { capmDomain1Questions } from '../data/capm-domain1-questions'

export const Route = createFileRoute('/capm-domain1-mock')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'capm-domain1-mock',
        title: 'CAPM Domain 1 Mock Test',
        password: 'CAPM2026',
        questions: capmDomain1Questions,
        durationMinutes: 30,
      }}
    />
  )
}
