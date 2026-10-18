import type { PMPQuestion } from './pmp-quiz-types'

export const pmpOct2026Questions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'People',
    topic: 'Virtual Team Collaboration',
    prompt:
      'A support project uses live collaboration windows across three locations. All shift times below are already converted to UTC. Tokyo T1 and Seattle S2 work 23:00-07:00; Tokyo T2 and London L1 work 07:00-15:00; London L2 and Seattle S1 work 15:00-23:00. Which pairing provides live overlap throughout the day?',
    options: [
      { key: 'a', text: 'T1-L2, T2-S1 and L1-S2.' },
      { key: 'b', text: 'T1-S2, T2-L1 and L2-S1.' },
      { key: 'c', text: 'T1-L1, T2-L2 and S1-S2.' },
      { key: 'd', text: 'Replace live windows with a single daily meeting.' },
    ],
    correct: 'b',
    explanation:
      'Each pair works during the same UTC interval. Together, the three intervals cover 24 hours, allowing a live handoff rather than waiting for another location to return to work. This is a coordination problem: compare actual overlap before choosing the communication arrangement.',
  },
  {
    id: 2,
    domain: 'People',
    topic: 'Product Owner Collaboration',
    prompt:
      'During development, the product owner says the emerging functionality does not match the intended design. The team believes it has followed the agreed requirements, and the reason for the disagreement is unclear. What should the project manager or Scrum Master do next?',
    options: [
      {
        key: 'a',
        text: 'Facilitate clarification with the PO and team, inspect the work against agreed criteria, and agree on any adjustments.',
      },
      {
        key: 'b',
        text: 'Ask the team to continue doing the work as work cannot stop and send the product owner two status updates each week.',
      },
      {
        key: 'c',
        text: 'Tell the product owner to wait until the project closes so that he can talk about the functionality and agreed requirements.',
      },
      {
        key: 'd',
        text: "Direct developers to implement the project manager's preferred design as he has final decision-making authority.",
      },
    ],
    correct: 'a',
    explanation:
      'The immediate need is a shared understanding of the expected outcome and the work produced. Collaborative inspection can distinguish an unclear requirement, a defect and a new request. The resulting adjustment should follow the applicable product and change governance.',
  },
  {
    id: 3,
    domain: 'Business Environment',
    topic: 'Stakeholder Expectation Management',
    prompt:
      'A product owner releases an MVP. Marketing expected more features, but those expectations were never validated with the delivery team. The project manager wants to prevent the same expectation gap before the next release is finalized. What is the best action?',
    options: [
      {
        key: 'a',
        text: 'Promise to deliver every requested feature in the next release to satisfy customer expectations.',
      },
      {
        key: 'b',
        text: 'Establish early stakeholder feedback and align release expectations with the product owner and team.',
      },
      {
        key: 'c',
        text: 'Delay all future releases until the product is feature complete and communicate this to the delivery team.',
      },
      { key: 'd', text: 'Ask the sponsor to replace the product owner.' },
    ],
    correct: 'b',
    explanation:
      'Early feedback makes expectations visible while there is still time to discuss value, scope and release trade-offs. The product owner remains accountable for backlog ordering. Feedback informs that decision; it does not guarantee that every request will be accepted.',
  },
  {
    id: 4,
    domain: 'People',
    topic: 'Conflict Resolution',
    prompt:
      'Two colleagues have an escalating disagreement. The project manager did not witness the incident and does not yet understand either person’s concern. No immediate safety issue exists. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Speak privately with each person to understand the facts and perspectives before arranging a joint resolution discussion.',
      },
      {
        key: 'b',
        text: "Convene the entire department and narrate the incident and ask everyone's opinion on arriving at a satisfactory solution.",
      },
      {
        key: 'c',
        text: 'Narrate the event to the project sponsor and ask the sponsor to decide which person is correct.',
      },
      {
        key: 'd',
        text: 'Use balance of probabilities to identify who is wrong and remove that person from the project immediately.',
      },
    ],
    correct: 'a',
    explanation:
      'A short, neutral fact-finding conversation helps the project manager understand the conflict and prepare a constructive discussion. The aim is then to help the parties resolve the issue together. Private meetings are an initial assessment step, not a permanent substitute for collaboration.',
  },
  {
    id: 5,
    domain: 'Process',
    topic: 'Scope Decomposition & WBS',
    prompt:
      'A sponsor provides a fixed target date and funding limit for a predictive project. The project manager discovers that the team has not yet decomposed and agreed on the deliverables. What should the project manager do before developing a detailed, achievable delivery plan?',
    options: [
      { key: 'a', text: 'Publish a detailed schedule based only on the target date.' },
      { key: 'b', text: 'Set quality metrics for deliverables that have not been identified.' },
      { key: 'c', text: 'Assume the funding limit is the complete cost baseline.' },
      { key: 'd', text: 'Work with the team to define the deliverables and create the WBS.' },
    ],
    correct: 'd',
    explanation:
      'A target date and funding ceiling are constraints, not proof that scope has been sufficiently defined. Decomposing deliverables provides a basis for identifying work, estimating effort and developing a credible schedule and cost baseline. Inconsistencies must be surfaced and resolved.',
  },
  {
    id: 6,
    domain: 'Process',
    topic: 'Risk & Issue Management',
    prompt:
      'Customer personnel have not completed training needed for an upcoming implementation. The launch date has not yet slipped, but implementation readiness is threatened. What should the project manager do next?',
    options: [
      { key: 'a', text: 'Engage the customer and assess readiness and agree a recovery action.' },
      {
        key: 'b',
        text: 'Record the risk and wait for the next monthly status meeting to discuss this with stakeholders.',
      },
      { key: 'c', text: 'Extend the launch date without consulting the customer.' },
      {
        key: 'd',
        text: 'Assign indefinite free support without checking the contract or approval authority.',
      },
    ],
    correct: 'a',
    explanation:
      'The missing training is an existing readiness issue, and it creates a risk to implementation. Prompt engagement establishes the cause, the remaining work and the appropriate response. Record the issue and linked risks, assign owners, and use change control if the response alters approved commitments.',
  },
  {
    id: 7,
    domain: 'Process',
    topic: 'Team-Based Estimating',
    prompt:
      'An experienced project manager can draft a WBS alone today, but the specialists who will deliver the work will be available next week. No urgent commitment requires an approved WBS today. What is the best approach?',
    options: [
      {
        key: 'a',
        text: 'Arrange collaborative decomposition with the delivery team, using any initial draft as input rather than an approved baseline.',
      },
      {
        key: 'b',
        text: "Approve the project manager's draft immediately and prohibit revisions as work needs to be locked in for the team to take it up.",
      },
      {
        key: 'c',
        text: 'Ask the sponsor to estimate all technical work packages and provide an initial plan.',
      },
      { key: 'd', text: 'Start all work packages before checking whether requirements are covered.' },
    ],
    correct: 'a',
    explanation:
      'With no urgent commitment forcing a decision today, decomposition should involve the people who will actually deliver the work. A solo draft can be useful as a starting point for discussion, but it should not be locked in as a baseline before the delivery team has had a chance to shape it.',
  },
  {
    id: 8,
    domain: 'Process',
    topic: 'Schedule Artifacts',
    prompt:
      'A stakeholder needs to see planned activity dates, sequencing and milestones. Which artifact most directly provides that information?',
    options: [
      { key: 'a', text: 'The scope management plan.' },
      {
        key: 'b',
        text: 'The schedule management plan describing scheduling methods and control rules.',
      },
      { key: 'c', text: 'The project schedule, which may be displayed as a Gantt chart.' },
      { key: 'd', text: 'The stakeholder engagement assessment matrix.' },
    ],
    correct: 'c',
    explanation:
      'The project schedule contains the planned timing of work. A schedule management plan explains how the schedule will be developed, maintained and controlled. A Gantt chart is one possible presentation of schedule information; it is not synonymous with the management plan.',
  },
  {
    id: 9,
    domain: 'Process',
    topic: 'Schedule Recovery & EVM',
    prompt:
      'A predictive project reports CPI 1.15 and SPI 0.82. The sponsor asks for schedule recovery without additional funding. Which option should the project manager evaluate first?',
    options: [
      {
        key: 'a',
        text: 'Assess whether critical-path activities can safely overlap through fast tracking, including resulting risks.',
      },
      {
        key: 'b',
        text: 'Hire additional contractors immediately because CPI above 1 proves extra cash is available.',
      },
      {
        key: 'c',
        text: 'Change the schedule baseline to conceal the delay in order to not create panic among the stakeholders.',
      },
      {
        key: 'd',
        text: 'Modify cost figures until CPI equals 1.00. A CPI that has hit 1.00 is safe in terms of project management for costs.',
      },
    ],
    correct: 'a',
    explanation:
      'The indices indicate favorable cost efficiency and unfavorable schedule efficiency. Evaluating overlap is a reasonable recovery option under the funding constraint. Check dependencies, rework exposure and governance before implementation. Crashing generally increases cost; a favorable CPI alone does not establish available funds.',
  },
  {
    id: 10,
    domain: 'Process',
    topic: 'Risk Response & Change Control',
    prompt:
      "A known risk occurs. Its planned response would now require work beyond the approved scope baseline and money beyond the response owner's delegated authority. No emergency exception applies. What should the project manager do?",
    options: [
      { key: 'a', text: 'Implement everything immediately because the risk was identified previously.' },
      { key: 'b', text: 'Use any remaining contingency without checking authorization.' },
      {
        key: 'c',
        text: 'Document the impacts and obtain the required change approval before implementing.',
      },
      { key: 'd', text: 'Ignore the response because approved baselines can never change.' },
    ],
    correct: 'c',
    explanation:
      'An identified risk is not unlimited authorization to change scope or spend. When the actual response exceeds approved baselines or delegated authority, follow the established change process. A response already authorized within existing tolerances may be executed under that authority; the facts here explicitly say otherwise.',
  },
  {
    id: 11,
    domain: 'Process',
    topic: 'Quality & Acceptance Criteria',
    prompt:
      'During a production-system upgrade, a stakeholder questions whether output is sufficiently consistent and reliable. Acceptance requirements and quality measures already exist. What is the best next action?',
    options: [
      { key: 'a', text: 'Redefine the project scope immediately.' },
      { key: 'b', text: 'Escalate to the project sponsor before examining the measures or output.' },
      {
        key: 'c',
        text: 'Measure and inspect the deliverables against the agreed quality and acceptance criteria.',
      },
      {
        key: 'd',
        text: 'Treat the concern only as a hypothetical risk and avoid collecting performance evidence.',
      },
    ],
    correct: 'c',
    explanation:
      'Use the agreed measures to determine whether the output meets requirements. That evidence establishes whether there is a defect, normal variation or an expectation mismatch, and guides corrective action. Escalation and scope changes should follow evidence and the applicable authority, rather than replace assessment.',
  },
  {
    id: 12,
    domain: 'Process',
    topic: 'Risk Review Cadence',
    prompt:
      'An agile team created a risk register at initiation. After three sprints, technical challenges and market conditions have changed. Which approach best keeps risk management relevant?',
    options: [
      { key: 'a', text: 'Keep the original register unchanged until project closure.' },
      {
        key: 'b',
        text: 'Review risks only at a quarterly steering committee as frequent review of risks are not required.',
      },
      {
        key: 'c',
        text: 'Replace risk ownership with automated email alerts to make the process more lightweight and agile.',
      },
      {
        key: 'd',
        text: 'Embed risk identification and review into iteration planning, updating owners and responses as conditions change.',
      },
    ],
    correct: 'd',
    explanation:
      'Short feedback cycles allow the team to identify new uncertainty and adjust responses as it learns. A register remains useful when maintained and connected to decisions. Regular stakeholder reviews can complement this work, but do not replace continuous team attention to evolving conditions.',
  },
  {
    id: 13,
    domain: 'Business Environment',
    topic: 'Operational Risk Coordination',
    prompt:
      "A medical-office improvement project has confirmed that recruitment gaps, inadequate training and turnover are undermining safe operations. The causes are already understood. Which action should the project manager prioritize within the project's authority?",
    options: [
      { key: 'a', text: 'Repeat a broad lessons-learned exercise without changing the response.' },
      {
        key: 'b',
        text: 'Coordinate with the accountable clinical and operations leaders on staffing and training.',
      },
      { key: 'c', text: 'Purchase new monitoring software and then assess its relevance.' },
      { key: 'd', text: 'Focus only on producing a more detailed status report.' },
    ],
    correct: 'b',
    explanation:
      'The scenario already identifies the operational causes and their consequences. Coordinate a response with the leaders authorized to make staffing and clinical decisions, prioritizing safe and effective care. The project manager enables the response and escalates urgent concerns appropriately, rather than assuming clinical authority.',
  },
  {
    id: 14,
    domain: 'Process',
    topic: 'Change Control & Gold Plating',
    prompt:
      'A predictive software project is within budget and ahead of schedule. The team identifies a two-day code change that could improve performance by 20%, beyond the approved requirement. No one has authorized the change. What should the project manager do next?',
    options: [
      {
        key: 'a',
        text: 'Evaluate value, impact and alternatives, then route any proposed change through the applicable approval process.',
      },
      {
        key: 'b',
        text: 'Implement it because the project is ahead of schedule and there will be no negative impact because of a change.',
      },
      {
        key: 'c',
        text: 'Ask developers to hide the extra work in an existing task so that it can easily pass an audit by the change committee.',
      },
      { key: 'd', text: 'Reject any discussion of the idea because improvements can never be proposed.' },
    ],
    correct: 'a',
    explanation:
      'An improvement can be considered without being implemented. Evaluate its value, cost, risk and effect on commitments, then seek the appropriate decision. Gold plating is adding unauthorized extras; an assessed proposal that follows change governance is different.',
  },
  {
    id: 15,
    domain: 'Process',
    topic: 'Risk Monitoring & Triggers',
    prompt:
      'A possible market price increase may reduce sales. The risk has been assessed as within tolerance, and the approved response is to monitor sales against a defined trigger before activating further action. Prices have not yet changed and the trigger has not been reached. What should the PM do?',
    options: [
      {
        key: 'a',
        text: 'Change the product price and then obtain approvals when meeting with the sponsor and stakeholders next time.',
      },
      { key: 'b', text: 'Declare a sales-loss issue even though sales have not declined.' },
      { key: 'c', text: 'Stop the project immediately as this is unnecessary risk exposure.' },
      {
        key: 'd',
        text: 'Monitor the agreed indicators, keep the risk information current and act if the risk exposure changes.',
      },
    ],
    correct: 'd',
    explanation:
      'Monitoring is an active response when it is deliberately selected, owned and tied to a trigger. Continue checking whether the exposure remains acceptable. If conditions change or the threshold is crossed, reassess and activate or seek approval for the next response as required.',
  },
]
