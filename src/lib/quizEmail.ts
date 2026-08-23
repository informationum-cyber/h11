function encodeFormData(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function emailResults(fields: {
  examTitle: string
  studentName: string
  score: string
  scorePercent: string
  domainBreakdown: string
  missedQuestions: string
}) {
  fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeFormData({
      'form-name': 'quiz-results',
      'bot-field': '',
      takenAt: new Date().toLocaleString(),
      ...fields,
    }),
  }).catch(() => {
    // Best-effort — never block the student's results on a failed email.
  })
}
