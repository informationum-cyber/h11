import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { aygulQuizQuestions } from '../data/aygul-quiz-questions'

export const Route = createFileRoute('/aygul-quiz')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'aygul-quiz',
        title: 'Aygul Quiz',
        password: 'aygul123',
        questions: aygulQuizQuestions,
        durationMinutes: 80,
      }}
    />
  )
}
