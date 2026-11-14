import { createFileRoute } from '@tanstack/react-router'
import { ScenarioQuizPage } from '../components/ScenarioQuizPage'
import { gregCaseStudies } from '../data/greg-case-studies'

export const Route = createFileRoute('/greg-case-studies')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ScenarioQuizPage
      config={{
        slug: 'greg-case-studies',
        title: 'PMP Case Study Practice',
        password: 'GREG2026',
        scenarios: gregCaseStudies,
      }}
    />
  )
}
