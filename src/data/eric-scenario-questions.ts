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
  {
    id: 2,
    title: 'EnterpriseNow Transformation Project Scenario',
    scenarioText:
      "You are assigned as PM to lead EnterpriseNow, a 12-month digital transformation initiative across your national financial services firm. The project involves: (1) deploying a new accounting system to 15 regional offices, (2) procuring $2M in new IT infrastructure from overseas suppliers, and (3) training 10,000+ employees on new processes. Budget approved: $2.5M. Planned Value: $520K (at current stage). Actual Cost to date: $335K. Your project sponsor has approved the scope. However, during a mid-project review, the sponsor mentions a critical capability was missing from the scope—advanced reporting dashboards that will significantly impact the project's business value. The sponsor approves this addition, but it requires unbudgeted work. Simultaneously, you are assembling an Agile delivery team for the accounting system rollout to the Northern Region office. The functional manager and senior users have provided high-level requirements. The project is high-risk because this accounting system has never been deployed in your organisation before, and delivery must be right the first time—there's no room for rework across 15 offices. You are also planning a massive communication strategy to engage 10,000+ stakeholders across all regions who will be impacted by the system changes and new processes. Finally, your procurement team has ordered $2M in physical IT hardware from overseas, but global supply chain disruptions have caused a three-month delay in shipment arrival.",
    questions: [
      {
        id: 1,
        domain: 'Process',
        topic: 'Change Control & Reserves',
        prompt:
          'During your progress review with the sponsor, they approve adding critical reporting dashboards to scope. Your Planned Value is $520K and Actual Cost is $335K. What will you do next?',
        options: [
          { key: 'a', text: 'Work with the PMO to unlock project management reserves for the extra work.' },
          { key: 'b', text: 'Ask the Product Owner to reprioritise the backlog and see if the new work will fit.' },
          { key: 'c', text: 'Perform the work within your normal budget as your project is on track.' },
          { key: 'd', text: 'Raise a change request for the changes and gain approval from the Change Control Board.' },
        ],
        correct: 'a',
        explanation:
          "The sponsor has already approved the scope addition — what's missing is funding for the unbudgeted work, so the next step is securing it through management reserve via the PMO, not re-running an approval that already happened, silently absorbing it into a budget it wasn't scoped for, or treating this predictive workstream as if it had an agile backlog.",
      },
      {
        id: 2,
        domain: 'People',
        topic: 'Team Structure & Colocation',
        prompt:
          'You are assembling an Agile team for the Northern Region accounting system rollout. The functional manager and senior users have provided high-level requirements and scope. The project needs quick delivery. What will you do next?',
        options: [
          { key: 'a', text: 'Select project members from each city to ensure diversity of knowledge within the team.' },
          { key: 'b', text: 'Put together a resource management plan outlining the resources required.' },
          { key: 'c', text: 'Ask your PMO for current available resources and assign them to the work.' },
          { key: 'd', text: 'Select a small team that can work in the same area so they can solve problems as they arise.' },
        ],
        correct: 'd',
        explanation:
          'A small, co-located team maximizes the fast face-to-face collaboration and quick problem-solving that agile delivery depends on — spreading the team across cities, defaulting to whoever the PMO has free, or leading with a formal planning document all trade away the speed this rollout needs.',
      },
      {
        id: 3,
        domain: 'Process',
        topic: 'Delivery Approach Selection',
        prompt:
          'The new accounting system you are deploying has not been used by anyone in your organisation before. The project is quite high-risk, and the delivery needs to be right the first time. What will you do next?',
        options: [
          { key: 'a', text: 'Select a small team that can work in the same area so they can solve problems as they arise.' },
          { key: 'b', text: 'Use a predictive project approach and source part of your team externally if they have skillsets in the new system.' },
          { key: 'c', text: 'Train existing internal staff in the new system then have them work on the project.' },
          { key: 'd', text: 'Perform a make or buy analysis on the different software options.' },
        ],
        correct: 'b',
        explanation:
          "Tailoring the approach to context matters here: with zero tolerance for rework across 15 offices and no in-house experience with the system, a predictive approach with detailed upfront planning, backed by externally sourced expertise, reduces risk far more than relying on newly-trained internal staff or re-litigating a software choice that's already been made.",
      },
      {
        id: 4,
        domain: 'Process',
        topic: 'Communications Planning',
        prompt:
          "You are putting together a communication plan for 10,000+ stakeholders across all regions who will be impacted by EnterpriseNow. You have identified affected stakeholders, analysed and prioritised them, and are creating a communication strategy. What will you NOT include in your plan?",
        options: [
          { key: 'a', text: 'Why should information be shared with stakeholders?' },
          { key: 'b', text: 'What is the best way to provide information?' },
          { key: 'c', text: 'How can they make changes to the communication plan?' },
          { key: 'd', text: 'When and how often is information needed?' },
        ],
        correct: 'c',
        explanation:
          "A communications management plan defines the purpose, method, and cadence of communication — it doesn't hand stakeholders a mechanism to unilaterally alter the plan itself; changes to the plan go through the project's own change control, not stakeholder self-service.",
      },
      {
        id: 5,
        domain: 'Process',
        topic: 'Resource & Procurement Risk Planning',
        prompt:
          'You put together a resource plan for the $2M IT hardware procurement from overseas. However, global supply chains were impacted and the shipment was delayed by three months, significantly impacting your project timeline. What should you have done differently?',
        options: [
          { key: 'a', text: 'Hired a resource manager to take care of the resource tasks on your project.' },
          { key: 'b', text: 'Planned strategically about the timing from order to delivery to usage, managing resource risks and their responses.' },
          { key: 'c', text: 'Ensured a means to track the inventory from arrival on site to the delivery of an integrated product.' },
          { key: 'd', text: 'Sourced the inventory locally to reduce the impact of global supply chains.' },
        ],
        correct: 'b',
        explanation:
          "The gap was upfront risk planning, not execution — proactively identifying supply-chain risk across the full order-to-usage timeline and building response plans for it addresses the root cause, where adding headcount, better inventory tracking after arrival, or a specific local-sourcing fix only treat symptoms or assume one narrow response in hindsight.",
      },
    ],
  },
  {
    id: 3,
    title: 'Practice Questions — AI Risks',
    questions: [
      {
        id: 1,
        domain: 'Process',
        topic: 'AI Strategy Types (Automation vs Augmentation)',
        prompt:
          'You are managing a project to deliver a new battery type for electric vehicles. The project sponsor suggests that you use AI to auto-generate weekly status reports, and use AI for pattern recognition to adjust the ROI for new risks and their responses. What AI strategies are these, respectively?',
        options: [
          { key: 'a', text: 'Automation; Augmentation.' },
          { key: 'b', text: 'Assistance; Automation.' },
          { key: 'c', text: 'Augmentation; Assistance.' },
          { key: 'd', text: 'Automation; Assistance.' },
        ],
        correct: 'a',
        explanation:
          "Auto-generating the status reports replaces a manual task outright — that's automation. Using AI pattern recognition to help adjust ROI for risks and responses supports and enhances the PM's own judgment rather than replacing it — that's augmentation.",
      },
      {
        id: 2,
        domain: 'Process',
        topic: 'AI Risk Mitigation (Bias)',
        prompt:
          'A project manager wants to reduce the risk of bias in an AI tool used for resource allocation decisions across multiple departments. Which of the following actions best mitigates this risk?',
        options: [
          { key: 'a', text: 'Increase the frequency of AI-generated reviews.' },
          { key: 'b', text: 'Diversify the data sets used to train the AI system.' },
          { key: 'c', text: 'Restrict AI use to cost-related calculations.' },
          { key: 'd', text: 'Require executive approval for every AI query.' },
        ],
        correct: 'b',
        explanation:
          "Bias mitigation for an AI system centers on diversifying the training data sets, periodic bias testing, and involving different teams in the AI system's development. Increasing review frequency, restricting AI to cost calculations, or requiring sign-off on every query don't touch the root cause of bias.",
      },
      {
        id: 3,
        domain: 'Process',
        topic: 'AI Risk Categorization (IP Ownership)',
        prompt:
          'You are leading a project where the team uses an AI tool to summarize contractual obligations. During a risk workshop the legal department flags that portions of the training data may have been sourced without proper licensing of the information. How will you raise this in the Risk Register?',
        options: [
          { key: 'a', text: 'Bias in the training data set.' },
          { key: 'b', text: 'Reliability of the summarization accuracy.' },
          { key: 'c', text: 'Ownership rights over AI-generated content.' },
          { key: 'd', text: 'Transparency in how the model was trained.' },
        ],
        correct: 'c',
        explanation:
          "Improperly licensed training data is fundamentally an IP and usage-rights exposure — it's a question of whether the organization actually owns or has rights to the content the model produces, not a data-quality issue like bias (A), an accuracy concern (B), or a documentation gap about training methodology (D).",
      },
      {
        id: 4,
        domain: 'Business Environment',
        topic: 'AI Data Privacy Risk',
        prompt:
          'Your team uses an AI tool to analyze team performance data, including personal work patterns and communication logs, without informing team members or securing consent. After learning about this, one of your team members raises concerns. What does this scenario show?',
        options: [
          { key: 'a', text: 'Unclear accountability for AI decisions.' },
          { key: 'b', text: 'Lack of proper data privacy safeguards.' },
          { key: 'c', text: 'Missing bias testing on the model.' },
          { key: 'd', text: 'Nothing - your team is completely justified in using the data.' },
        ],
        correct: 'b',
        explanation:
          "Analyzing personal work patterns and communication logs without informing people or securing consent is a data privacy and consent failure — not an accountability gap (A), a bias issue (C), and certainly not something the team was justified in doing (D).",
      },
      {
        id: 5,
        domain: 'Process',
        topic: 'AI Deployment Risk Controls',
        prompt:
          'You are leading a project that deploys an AI system to monitor equipment in a manufacturing plant. During testing, the AI occasionally recommends actions that could create unsafe operating conditions. What should you do before approving deployment?',
        options: [
          { key: 'a', text: 'Validate safety controls and require human oversight.' },
          { key: 'b', text: 'Increase AI training data before deployment.' },
          { key: 'c', text: 'Only allow experienced operators to ignore unsafe recommendations.' },
          { key: 'd', text: 'Reduce the AI confidence threshold to improve responsiveness.' },
        ],
        correct: 'a',
        explanation:
          "Occasional unsafe recommendations are a safety risk that must be controlled directly — validating safety controls and requiring human oversight addresses that head-on. More training data doesn't guarantee safety, letting operators selectively ignore unsafe output still lets unsafe recommendations occur, and lowering the confidence threshold would likely surface more, not fewer, questionable recommendations.",
      },
      {
        id: 6,
        domain: 'People',
        topic: 'AI Decision Accountability',
        prompt:
          'You are managing a project that uses AI to prioritize vendor selections. After implementation, stakeholders discover the AI recommended a supplier with significant compliance issues. Senior management asks who is responsible for the decision. What is the best response?',
        options: [
          { key: 'a', text: 'Raise a legal claim against the AI vendor to ensure accountability.' },
          { key: 'b', text: 'Assign accountability to the AI development team.' },
          { key: 'c', text: 'Accept AI recommendations as objective project decisions.' },
          { key: 'd', text: 'Project leaders remain accountable, even for AI-supported decisions.' },
        ],
        correct: 'd',
        explanation:
          "Accountability for a decision can't be outsourced to a tool or its vendor — project leaders remain accountable for decisions made with AI support, which is why pursuing the AI vendor (A), shifting blame to the AI development team (B), and treating AI output as inherently objective (C) all misplace responsibility.",
      },
    ],
  },
  {
    id: 4,
    title: 'Practice Questions — PMBOK 8th Edition',
    questions: [
      {
        id: 1,
        domain: 'Process',
        topic: 'Work Breakdown Structure (WBS) Creation',
        prompt:
          'Jonah is managing a product development project at RLM. The team needs to clearly organize all deliverables and decompose the work into manageable components to support planning and execution. What should Jonah do next?',
        options: [
          { key: 'a', text: 'Organize deliverables into a work breakdown structure.' },
          { key: 'b', text: 'Capture requirements as user stories and refine them iteratively.' },
          { key: 'c', text: 'Prioritize features in a backlog for incremental delivery.' },
          { key: 'd', text: 'Validate the completed deliverables with stakeholders.' },
        ],
        correct: 'a',
        explanation:
          "Decomposing deliverables into manageable components to support planning and execution is exactly what a work breakdown structure does. User stories and backlog prioritization (B, C) are adaptive techniques not indicated by this predictive-style decomposition task, and validating completed deliverables (D) is a later monitoring activity, not part of this planning step.",
      },
      {
        id: 2,
        domain: 'Process',
        topic: 'WBS Dictionary',
        prompt:
          'Nate is managing a manufacturing facility upgrade using a predictive approach. Nate has elicited the requirements from project stakeholders and turned them into project scope. Nate wants to add more details to the work packages to ensure clarity and alignment across the team. What will he do next?',
        options: [
          { key: 'a', text: 'Create a responsibility assignment matrix (RAM) to define roles and responsibilities.' },
          { key: 'b', text: 'Perform quality control and verify the work packages.' },
          { key: 'c', text: 'Develop a clear requirements traceability matrix.' },
          { key: 'd', text: 'Develop a detailed WBS dictionary.' },
        ],
        correct: 'd',
        explanation:
          "The WBS dictionary is what adds the missing detail to each work package — deliverables, acceptance criteria, resources, assumptions — for clarity and team alignment. A RAM (A) defines roles, not work package detail; quality control (B) is an execution-phase activity, too early here; and a requirements traceability matrix (C) links requirements to deliverables rather than detailing the work packages themselves.",
      },
      {
        id: 3,
        domain: 'Process',
        topic: 'Validate Scope Inputs (Verified vs Validated Deliverables)',
        prompt:
          'Marcus is overseeing a bridge construction project at BEL. Several completed components have passed internal quality checks. The client is now reviewing these outputs against agreed criteria to determine formal approval. What should Marcus obtain as an input to help the client with their decision?',
        options: [
          { key: 'a', text: 'Work performance reports summarizing project progress and quality metrics.' },
          { key: 'b', text: 'Validated deliverables.' },
          { key: 'c', text: 'Verified deliverables.' },
          { key: 'd', text: 'Change requests addressing gaps identified during stakeholder review.' },
        ],
        correct: 'c',
        explanation:
          "Components that have already passed internal quality checks are verified deliverables — the output of Control Quality, and the correct input to Validate Scope. Validated deliverables (B) are the output of Validate Scope, not an input to it — that's what the client's review is about to produce. Work performance reports (A) summarize status rather than provide the deliverables themselves, and change requests (D) only apply once gaps are actually found.",
      },
      {
        id: 4,
        domain: 'Process',
        topic: 'Control Quality Outputs (Quality Reports)',
        prompt:
          'At Redwood Biologics, Diane is managing a pharmaceutical product development project. During monitoring, inconsistencies in deliverable quality are identified. Stakeholders request additional information on these issues to support improvements. What should Diane produce?',
        options: [
          { key: 'a', text: 'Work performance data.' },
          { key: 'b', text: 'The scope baseline.' },
          { key: 'c', text: 'Change requests in the change log.' },
          { key: 'd', text: 'The quality report.' },
        ],
        correct: 'd',
        explanation:
          "The quality report is the Control Quality output built specifically to communicate quality issues, summarize findings, and recommend corrective actions to stakeholders — exactly what's being asked for. Work performance data (A) is raw, unprocessed observation rather than the digested information stakeholders requested; the scope baseline (B) is unrelated; and change requests (C) address specific approved changes, not a general summary of the issues.",
      },
    ],
  },
]
