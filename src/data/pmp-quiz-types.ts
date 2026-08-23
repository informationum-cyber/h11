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
  /**
   * Full narrative shown in the fixed side pane while the student works through this scenario's
   * questions. Omit for a themed set of standalone questions with no shared narrative — those
   * render full-width with `title` as a section header instead of a two-pane layout.
   */
  scenarioText?: string
  questions: PMPQuestion[]
}
