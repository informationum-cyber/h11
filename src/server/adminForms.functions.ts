import { createServerFn } from '@tanstack/react-start'

const ADMIN_PASSWORD = 'DeepakAdmin123*'

interface NetlifyForm {
  id: string
  name: string
}

interface NetlifySubmission {
  id: string
  number: number
  created_at: string
  data: Record<string, string>
}

export const getContractorSubmissions = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    if (data.password !== ADMIN_PASSWORD) {
      throw new Error('Unauthorized')
    }

    const token = process.env.NETLIFY_API_TOKEN
    const siteId = process.env.NETLIFY_SITE_ID
    if (!token || !siteId) {
      throw new Error(
        'Netlify API not configured. Set NETLIFY_API_TOKEN and NETLIFY_SITE_ID as environment variables on the Netlify site.',
      )
    }

    const authHeaders = { Authorization: `Bearer ${token}` }

    const formsRes = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/forms`, {
      headers: authHeaders,
    })
    if (!formsRes.ok) {
      throw new Error(`Failed to list forms (${formsRes.status})`)
    }
    const forms = (await formsRes.json()) as NetlifyForm[]
    const form = forms.find((f) => f.name === 'contractor-onboarding')
    if (!form) {
      return { submissions: [] as Array<{ id: string; number: number; createdAt: string; data: Record<string, string> }> }
    }

    const subsRes = await fetch(`https://api.netlify.com/api/v1/forms/${form.id}/submissions`, {
      headers: authHeaders,
    })
    if (!subsRes.ok) {
      throw new Error(`Failed to fetch submissions (${subsRes.status})`)
    }
    const submissions = (await subsRes.json()) as NetlifySubmission[]

    return {
      submissions: submissions
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .map((s) => ({
          id: s.id,
          number: s.number,
          createdAt: s.created_at,
          data: s.data ?? {},
        })),
    }
  })
