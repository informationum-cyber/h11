import { createFileRoute } from '@tanstack/react-router'
import { PMPQuizPage } from '../components/PMPQuizPage'
import { pmp25q50mQuestions } from '../data/pmp25q50m-questions'

export const Route = createFileRoute('/pmp25q50m')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PMPQuizPage
      config={{
        slug: 'pmp25q50m',
        title: '25 Q Test 50 Mins',
        password: 'PMP25Q50M',
        questions: pmp25q50mQuestions,
        durationMinutes: 75,
      }}
    />
  )
}
