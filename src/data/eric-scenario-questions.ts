import type { PMPScenario } from './pmp-quiz-types'

export const ericScenarios: PMPScenario[] = [
  {
    id: 1,
    title: 'FinVision Project Scenario',
    scenarioText:
      "You are assigned as PM to lead FinVision, a strategic 5-month digital banking platform launch for your financial services firm. Budget: $2.5M. You assemble a new team of 8 from different departments: engineers, UX designers, BA, QA lead, and contractors. Jane, a fintech expert with 12 years of experience, is hired mid-way. Your CFO sponsor imposes new governance layers: weekly steering approvals, risk assessments, and audit reports. During Month 2, a stakeholder mentions casually that the banking vertical will be divested in Q3 next year—the same timeframe as your project launch. While scoping with Jane, you discover the core data model could benefit another project (Wealth Management Platform). Three executives are also competing for credit and control over FinVision's strategic direction, creating scope ambiguity.",
    questions: [
      {
        id: 1,
        domain: 'People',
        topic: 'Team Chartering & Roles',
        prompt:
          'Your newly assembled team has no shared understanding of roles. Engineers, designers, and QA are blaming each other for delays. What will you do next?',
        options: [
          { key: 'a', text: 'Meet with the functional manager to align time requirements.' },
          { key: 'b', text: 'Meet with your team to set a team charter and define roles & responsibilities.' },
          { key: 'c', text: 'Meet with the project sponsor to gain additional resources.' },
          { key: 'd', text: 'Escalate the issue to the steering committee as a project risk.' },
        ],
        correct: 'b',
        explanation:
          'A cross-functional team with no shared understanding of roles needs a team charter and clear roles/responsibilities first — that resolves the finger-pointing at its source, before involving functional managers, the sponsor, or the steering committee.',
      },
      {
        id: 2,
        domain: 'People',
        topic: 'Diversity & Inclusion',
        prompt:
          'Jane, your fintech expert, has just been hired. You notice she is paid 15% less than male colleagues at her level, is left out of key meetings, and her opinions are often overlooked. What will you do next?',
        options: [
          { key: 'a', text: 'Make steps to update her pay to match others, and solicit her opinion and advice specifically during each meeting.' },
          { key: 'b', text: 'Take the lower pay as a cost saving for your project budget.' },
          { key: 'c', text: 'Ask Jane to document her knowledge in case she leaves.' },
          { key: 'd', text: 'This is normal in your industry—do nothing.' },
        ],
        correct: 'a',
        explanation:
          'A PMP-certified project manager has a professional and ethical obligation to address inequitable treatment directly — correcting the pay gap and actively including her voice, not treating unfairness as a budget line or the status quo.',
      },
      {
        id: 3,
        domain: 'People',
        topic: 'Stakeholder Communication & Governance',
        prompt:
          'Your CFO has imposed new governance: weekly steering approvals, multi-level sign-offs, risk assessments, and audit reports. Your team sees this as bureaucratic bloat. You are tempted to bypass it. What will you do next?',
        options: [
          { key: 'a', text: 'Go directly to the people you need, avoiding the stakeholders.' },
          { key: 'b', text: 'Raise a risk in your risk register about lack of resources.' },
          { key: 'c', text: 'Communicate more often with stakeholders and gain deeper awareness of their concerns and ideas.' },
          { key: 'd', text: 'Show stakeholders the Resource Assignment Matrix and roles/responsibilities.' },
        ],
        correct: 'c',
        explanation:
          "Governance imposed by a sponsor reflects real concerns — the way through it is deeper stakeholder engagement to understand and address what's driving it, not bypassing it or reframing it as an unrelated resource risk.",
      },
      {
        id: 4,
        domain: 'Business Environment',
        topic: 'Business Value & Project Termination',
        prompt:
          'During a working group meeting, a stakeholder mentions that your banking vertical will be divested in Q3 next year. Your project launches in 5 months—the same timeframe. What will you do next?',
        options: [
          { key: 'a', text: "Keep the project going as it is—product discontinuation isn't your responsibility." },
          { key: 'b', text: 'Set a meeting with your project sponsor to share the information and recommend project termination.' },
          { key: 'c', text: 'Change the project scope to build a different product instead.' },
          { key: 'd', text: 'Ask for additional funding to improve the product before discontinuation.' },
        ],
        correct: 'b',
        explanation:
          "A pending divestiture directly threatens the project's business justification — the PM must surface this to the sponsor immediately and recommend evaluating termination, rather than continuing on inertia or unilaterally changing scope.",
      },
      {
        id: 5,
        domain: 'Process',
        topic: 'Risk Management (Opportunities)',
        prompt:
          "While creating the scope statement, you discover that the core data model for FinVision would benefit the Wealth Management Platform (another project). What will you do next?",
        options: [
          { key: 'a', text: "Place the feature in the other project's backlog and ask them to prioritize it." },
          { key: 'b', text: 'Raise this functionality in your risk register as a threat with a "mitigate" response.' },
          { key: 'c', text: 'Add the scope to your project and complete it as soon as possible.' },
          { key: 'd', text: 'Raise this functionality in your risk register as an opportunity with an "exploit" response, and meet with the other project team and sponsor to discuss.' },
        ],
        correct: 'd',
        explanation:
          'A reusable asset that benefits another project is a positive risk (opportunity), not a threat — the correct response is to exploit it formally through the risk register and coordinate with the other project team and sponsor.',
      },
      {
        id: 6,
        domain: 'People',
        topic: 'Conflict Resolution & Facilitation',
        prompt:
          "Three senior executives are competing for credit over FinVision: the CDO wants it under Digital Transformation, the CTO wants it in his product portfolio, and the CRO wants governance control. This has led to conflicts and scope ambiguity. What will you do next?",
        options: [
          { key: 'a', text: 'Create a scope statement yourself to avoid further conflict.' },
          { key: 'b', text: 'Limit resources to the executives until they can agree on a way forward.' },
          { key: 'c', text: 'Facilitate a discussion with the executives as a neutral third party, focusing on agreed project goals.' },
          { key: 'd', text: 'Escalate the issue to the project steering committee and ask them to resolve it.' },
        ],
        correct: 'c',
        explanation:
          'Executive turf conflicts over ownership call for the PM to facilitate a neutral, goals-focused discussion directly — not to unilaterally decide, withhold resources, or immediately hand the conflict off.',
      },
      {
        id: 7,
        domain: 'Business Environment',
        topic: 'Benefits Sustainment & Program Funding',
        prompt:
          'Leadership now tells you: "Manage FinVision after launch to keep it relevant. Half your team rolls off next month. Your budget is nearly depleted." What will you do next?',
        options: [
          { key: 'a', text: 'Retain as many current project staff as possible to continue work on the product.' },
          { key: 'b', text: 'Secure funding for a stable team, then use current research to form a suite of projects to sustain the product.' },
          { key: 'c', text: 'Raise a change request on your current project to add scope and continue making improvements.' },
          { key: 'd', text: 'Ask for additional funding to see if you can improve the product instead.' },
        ],
        correct: 'b',
        explanation:
          'Sustaining a product after launch is a benefits-realization problem, not a scope-creep or headcount-retention one — it needs dedicated funding and a structured program of follow-on projects, not stretching the original project or its depleted team.',
      },
    ],
  },
]
