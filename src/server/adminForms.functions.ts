import { createServerFn } from '@tanstack/react-start'

const ADMIN_PASSWORD = 'DeepakAdmin123*'

interface NetlifyForm {
  id: string
  name: string
}

type NetlifyFileValue = { filename: string; type: string; size: number; url: string }

interface NetlifySubmission {
  id: string
  number: number
  created_at: string
  data: Record<string, string | NetlifyFileValue>
}

type Submission = {
  id: string
  number: number
  createdAt: string
  data: Record<string, string | NetlifyFileValue>
}

function requireAuth(password: string) {
  if (password !== ADMIN_PASSWORD) {
    throw new Error('Unauthorized')
  }
}

async function fetchSubmissionsForForm(formName: string): Promise<{ submissions: Submission[] }> {
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
  const form = forms.find((f) => f.name === formName)
  if (!form) {
    return { submissions: [] }
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
}

export const getContractorSubmissions = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    requireAuth(data.password)
    return fetchSubmissionsForForm('contractor-onboarding')
  })

export const getReimbursementClaims = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    requireAuth(data.password)
    return fetchSubmissionsForForm('reimbursement-request')
  })

export const deleteSubmissions = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string; submissionIds: string[] }) => data)
  .handler(async ({ data }) => {
    requireAuth(data.password)

    if (data.submissionIds.length === 0) {
      return { deleted: 0 }
    }

    const token = process.env.NETLIFY_API_TOKEN
    if (!token) {
      throw new Error(
        'Netlify API not configured. Set NETLIFY_API_TOKEN and NETLIFY_SITE_ID as environment variables on the Netlify site.',
      )
    }

    const authHeaders = { Authorization: `Bearer ${token}` }

    const results = await Promise.all(
      data.submissionIds.map(async (id) => {
        const res = await fetch(`https://api.netlify.com/api/v1/submissions/${id}`, {
          method: 'DELETE',
          headers: authHeaders,
        })
        return { id, ok: res.ok, status: res.status }
      }),
    )

    const failed = results.filter((r) => !r.ok)
    if (failed.length > 0) {
      throw new Error(
        `Deleted ${results.length - failed.length} of ${results.length}. Failed: ${failed
          .map((f) => `${f.id} (${f.status})`)
          .join(', ')}`,
      )
    }

    return { deleted: results.length }
  })
