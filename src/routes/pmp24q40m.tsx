import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { pmp24q40mQuestions } from '../data/pmp24q40m-questions'

export const Route = createFileRoute('/pmp24q40m')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'pmp24q40m',
        title: 'PMP24Q40M Practice Test',
        password: 'PMP40',
        questions: pmp24q40mQuestions,
        durationMinutes: 40,
      }}
    />
  )
}
