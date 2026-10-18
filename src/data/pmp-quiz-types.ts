export type PMPDomain = 'People' | 'Process' | 'Business Environment'

export type PMPOptionKey = 'a' | 'b' | 'c' | 'd' | 'e'

export interface PMPQuestion {
  id: number
  domain: PMPDomain
  topic: string
  prompt: string
  options: { key: PMPOptionKey; text: string }[]
  /** A single key for a normal question, or an array of keys for a "select N" multi-answer question. */
  correct: PMPOptionKey | PMPOptionKey[]
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

/** A student's answer to each question, keyed by question id. Always an array, even for a single-answer question. */
export type PMPAnswers = Partial<Record<number, PMPOptionKey[]>>

export function correctKeys(question: Pick<PMPQuestion, 'correct'>): PMPOptionKey[] {
  return Array.isArray(question.correct) ? question.correct : [question.correct]
}

export function isMultiSelect(question: Pick<PMPQuestion, 'correct'>): boolean {
  return Array.isArray(question.correct) && question.correct.length > 1
}

export function formatAnswerKeys(keys: PMPOptionKey[]): string {
  return keys
    .map((k) => k.toUpperCase())
    .sort()
    .join(', ')
}

export function hasAnswer(answers: PMPAnswers, questionId: number): boolean {
  return (answers[questionId]?.length ?? 0) > 0
}

export function isAnswerCorrect(question: Pick<PMPQuestion, 'correct'>, given: PMPOptionKey[] | undefined): boolean {
  const correct = [...correctKeys(question)].sort()
  const g = [...(given ?? [])].sort()
  return g.length === correct.length && g.every((k, i) => k === correct[i])
}

/** Toggles or replaces a selected option depending on whether the question allows multiple answers. */
export function nextAnswerState(
  question: Pick<PMPQuestion, 'correct'>,
  current: PMPOptionKey[] | undefined,
  key: PMPOptionKey,
): PMPOptionKey[] {
  if (!isMultiSelect(question)) return [key]
  const existing = current ?? []
  return existing.includes(key) ? existing.filter((k) => k !== key) : [...existing, key]
}
