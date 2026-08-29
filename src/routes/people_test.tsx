import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { people10Questions } from '../data/people10-questions'

export const Route = createFileRoute('/people_test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'people-10',
        title: 'People 10',
        password: 'Greg123',
        questions: people10Questions,
        durationMinutes: 12,
      }}
    />
  )
}
