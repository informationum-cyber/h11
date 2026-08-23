export type PMPDomain = 'People' | 'Process' | 'Business Environment'

export interface PMPQuestion {
  id: number
  domain: PMPDomain
  topic: string
  prompt: string
  options: { key: 'a' | 'b' | 'c' | 'd'; text: string }[]
  correct: 'a' | 'b' | 'c' | 'd'
  explanation: string
}

export interface PMPScenario {
  id: number
  title: string
  /** Full narrative shown in the fixed side pane while the student works through this scenario's questions. */
  scenarioText: string
  questions: PMPQuestion[]
}
