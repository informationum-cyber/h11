import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { capmDomain1Set2Questions } from '../data/capm-domain1-set2-questions'

export const Route = createFileRoute('/capm-domain1-set2')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'capm-domain1-set2',
        title: 'CAPM Domain 1 Practice Questions (Set 2)',
        password: 'CAPM2026',
        questions: capmDomain1Set2Questions,
        durationMinutes: 45,
      }}
    />
  )
}
