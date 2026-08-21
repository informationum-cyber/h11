import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { ericExamQuestions } from '../data/eric-exam-questions'

export const Route = createFileRoute('/eric-exam')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'eric-exam',
        title: "Eric's PMP Practice Exam",
        password: 'eric123',
        questions: ericExamQuestions,
        durationMinutes: 100,
      }}
    />
  )
}
