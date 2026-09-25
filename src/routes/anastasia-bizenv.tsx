import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { anastasiaBizEnvQuestions } from '../data/anastasia-bizenv-questions'

export const Route = createFileRoute('/anastasia-bizenv')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'anastasia-bizenv',
        title: 'Business Environment Practice Test',
        password: 'ANASTASIA2026',
        questions: anastasiaBizEnvQuestions,
        durationMinutes: 50,
      }}
    />
  )
}
