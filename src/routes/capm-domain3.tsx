import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { capmDomain3Questions } from '../data/capm-domain3-questions'

export const Route = createFileRoute('/capm-domain3')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'capm-domain3',
        title: 'CAPM Domain 3 Practice Questions — Agile Frameworks/Methodologies',
        password: 'CAPM2026',
        questions: capmDomain3Questions,
        durationMinutes: 55,
      }}
    />
  )
}
