import type { PMPQuestion } from './pmp-quiz-types'

export const pmp25q50mQuestions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'People',
    topic: 'Governance & Compliance',
    prompt:
      'A hybrid transformation project is six weeks from a regulatory milestone. A senior architect tells the project manager privately that the current solution can meet the deadline only by bypassing a peer-review control. The product owner argues that the control is an internal preference and asks the team to proceed. What should the project manager do FIRST?',
    options: [
      {
        key: 'a',
        text: 'Ask the architect to document the workaround and proceed because the milestone is externally mandated.',
      },
      {
        key: 'b',
        text: 'Escalate the product owner immediately for attempting to bypass governance.',
      },
      {
        key: 'c',
        text: 'Verify the applicable governance/compliance requirement and its impact, then facilitate a compliant delivery option with the relevant stakeholders.',
      },
      {
        key: 'd',
        text: 'Add the issue to lessons learned and allow the team to decide through self-organization.',
      },
    ],
    correct: 'c',
    explanation:
      'First establish the actual compliance/governance constraint and its implications. Then work with the right stakeholders on a compliant path. Neither deadline pressure nor self-organization overrides mandatory controls.',
  },
  {
    id: 2,
    domain: 'People',
    topic: 'Team Psychological Safety',
    prompt:
      "During sprint planning, two experienced developers repeatedly dismiss a newly hired data scientist's estimates. The data scientist stops contributing and later tells the Scrum Master that the estimates involve model-validation work the developers do not understand. What is the BEST next action?",
    options: [
      {
        key: 'a',
        text: "Replace team estimation with the project manager's estimates until trust improves.",
      },
      {
        key: 'b',
        text: 'Meet only with the developers and remind them that the data scientist is the subject-matter expert.',
      },
      {
        key: 'c',
        text: 'Facilitate a team discussion that surfaces the assumptions behind the estimates and reinforces an environment where expertise can be challenged respectfully.',
      },
      {
        key: 'd',
        text: 'Ask the data scientist to provide written estimates before future planning sessions.',
      },
    ],
    correct: 'c',
    explanation:
      'The issue is both technical understanding and psychological safety. Facilitation should expose assumptions while preserving collaborative decision-making.',
  },
  {
    id: 3,
    domain: 'People',
    topic: 'Stakeholder Alignment & Value',
    prompt:
      "A sponsor and a product manager disagree about what 'success' means. The sponsor wants adoption across all regions; the product manager wants rapid release to one profitable segment. Both objectives are plausible and the team is receiving conflicting priorities. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: "Prioritize the sponsor's objective because the sponsor funds the project.",
      },
      {
        key: 'b',
        text: 'Ask the team to optimize for both objectives without changing the plan.',
      },
      {
        key: 'c',
        text: 'Facilitate alignment on measurable outcomes and decision criteria, then update the relevant project/product artifacts.',
      },
      {
        key: 'd',
        text: 'Use the original business case as the final authority even if market conditions have changed.',
      },
    ],
    correct: 'c',
    explanation:
      'Modern PMP questions emphasize common vision, measurable outcomes, and stakeholder alignment. Authority alone does not resolve conflicting definitions of value.',
  },
  {
    id: 4,
    domain: 'People',
    topic: 'Cross-Regional Collaboration',
    prompt:
      "A globally distributed agile team has strong technical performance but increasing rework between two regions. Retrospectives show that each region interprets 'ready for testing' differently. What is the BEST combination of actions for the project manager to take?",
    options: [
      {
        key: 'a',
        text: 'Facilitate direct collaboration between the regions to uncover assumptions and improve the workflow, and establish a shared working agreement/definition that makes the handoff criteria explicit.',
      },
      {
        key: 'b',
        text: 'Increase status-report frequency so leadership can identify which region causes more defects.',
      },
      {
        key: 'c',
        text: 'Assign final interpretation authority to the region with the higher velocity.',
      },
      {
        key: 'd',
        text: 'Separate the regions into independent delivery teams immediately.',
      },
    ],
    correct: 'a',
    explanation:
      'Shared criteria and direct collaboration address the root cause. More reporting or choosing a "winning" region does not create alignment.',
  },
  {
    id: 5,
    domain: 'People',
    topic: 'Stakeholder Resistance & AI',
    prompt:
      "A stakeholder who previously supported an AI-enabled customer-service project becomes resistant after seeing a prototype produce an inaccurate recommendation. The team says the stakeholder is 'anti-AI' and wants the project manager to reduce the stakeholder's involvement. What should the project manager do FIRST?",
    options: [
      {
        key: 'a',
        text: "Reduce the stakeholder's influence because resistance is slowing delivery.",
      },
      {
        key: 'b',
        text: 'Explore the stakeholder’s concern, clarify the impact and risk tolerance, and agree on validation/oversight expectations.',
      },
      {
        key: 'c',
        text: 'Ask the sponsor to explain that AI errors are statistically unavoidable.',
      },
      {
        key: 'd',
        text: 'Replace the prototype model before speaking with the stakeholder.',
      },
    ],
    correct: 'b',
    explanation:
      'Resistance should be understood before action is taken. The concern may be about risk, controls, customer harm, or acceptance criteria rather than opposition to AI itself.',
  },
  {
    id: 6,
    domain: 'People',
    topic: 'Influence Without Authority',
    prompt:
      'A functional manager keeps reassigning a critical specialist from a matrix project. The project manager has no direct authority over the specialist. The next milestone is at risk. What is the MOST effective response?',
    options: [
      {
        key: 'a',
        text: 'Escalate immediately to the steering committee and request dedicated authority.',
      },
      {
        key: 'b',
        text: 'Show the functional manager the milestone impact and business consequences, understand their competing priorities, and negotiate a workable resource commitment.',
      },
      {
        key: 'c',
        text: 'Tell the specialist to ignore the functional manager until the milestone is complete.',
      },
      {
        key: 'd',
        text: 'Add schedule contingency and accept the recurring reassignment.',
      },
    ],
    correct: 'b',
    explanation:
      'Influence without authority relies on shared outcomes, evidence, understanding competing priorities, and negotiation before escalation.',
  },
  {
    id: 7,
    domain: 'People',
    topic: 'Stakeholder Communication',
    prompt:
      'A project manager inherits a team that meets every sprint goal but stakeholders complain that demonstrations are confusing and decisions are repeatedly reopened. What should the project manager improve FIRST?',
    options: [
      { key: 'a', text: 'Velocity forecasting.' },
      {
        key: 'b',
        text: 'Stakeholder communication and decision clarity, including who needs what information and how decisions are recorded.',
      },
      { key: 'c', text: 'Team capacity planning.' },
      { key: 'd', text: 'The sprint length.' },
    ],
    correct: 'b',
    explanation:
      'Delivery output is not the main problem; stakeholder understanding, communication, and governance of decisions are.',
  },
  {
    id: 8,
    domain: 'People',
    topic: 'Accountability & Learning Culture',
    prompt:
      'A team member makes a serious mistake that causes a two-day delay. The member immediately discloses it and proposes a recovery plan. Several stakeholders demand that the individual be removed. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Remove the team member to demonstrate accountability.',
      },
      {
        key: 'b',
        text: 'Protect the team member from all stakeholder feedback.',
      },
      {
        key: 'c',
        text: 'Assess the systemic causes and recovery plan, address accountability constructively, and preserve a learning-oriented team environment.',
      },
      { key: 'd', text: "Record the person's name in the risk register." },
    ],
    correct: 'c',
    explanation:
      'Accountability and learning can coexist. The project manager should address causes and recovery without creating a blame culture.',
  },
  {
    id: 9,
    domain: 'Process',
    topic: 'Change Management & Governance',
    prompt:
      'A predictive infrastructure project has a fixed completion date. Halfway through execution, a new law changes the required data-retention period. The change will increase cost and may affect architecture. What should the project manager do FIRST?',
    options: [
      {
        key: 'a',
        text: 'Implement the legal requirement immediately and seek approval afterward.',
      },
      {
        key: 'b',
        text: 'Assess the requirement’s impact on scope, schedule, cost, risk, and benefits, then process the necessary change through governance.',
      },
      {
        key: 'c',
        text: 'Reject the change because the baseline has already been approved.',
      },
      {
        key: 'd',
        text: 'Ask the vendor to absorb the cost because compliance is part of quality.',
      },
    ],
    correct: 'b',
    explanation:
      'Mandatory external change still requires impact assessment and appropriate governance. The fact that it must ultimately be addressed does not eliminate disciplined change analysis.',
  },
  {
    id: 10,
    domain: 'Process',
    topic: 'Flow Metrics & Agile Analysis',
    prompt:
      'An agile product team has stable velocity, yet the release is slipping because completed stories remain blocked in security review for an average of nine days. Which metric or analysis is MOST useful to the project manager?',
    options: [
      { key: 'a', text: 'Sprint velocity by developer.' },
      {
        key: 'b',
        text: 'Flow/cycle-time analysis across the end-to-end value stream.',
      },
      { key: 'c', text: 'Cost performance index.' },
      { key: 'd', text: 'Story-point variance against the original estimate.' },
    ],
    correct: 'b',
    explanation:
      'The bottleneck exists after development. End-to-end flow and cycle time expose waiting states that velocity can hide.',
  },
  {
    id: 11,
    domain: 'Process',
    topic: 'AI in Risk Management',
    prompt:
      'A project manager is considering an AI tool to generate an initial risk register from historical project data. What is the BEST combination of actions before using the output?',
    options: [
      {
        key: 'a',
        text: 'Validate the AI-generated outputs for relevance, bias, and omissions, and confirm that use of the data and tool complies with organizational privacy/security requirements.',
      },
      {
        key: 'b',
        text: 'Treat the AI-generated risks as approved because the model was trained on internal data.',
      },
      {
        key: 'c',
        text: 'Avoid AI entirely because risk identification must be performed only by humans.',
      },
      {
        key: 'd',
        text: 'Publish the raw output to stakeholders to maximize transparency.',
      },
    ],
    correct: 'a',
    explanation:
      'AI can accelerate analysis, but human validation, context checks, and compliant use of data and tools remain necessary before acting on AI-generated output.',
  },
  {
    id: 12,
    domain: 'Process',
    topic: 'Vendor Acceptance & Value',
    prompt:
      'A vendor delivers a component that technically meets the contract specification, but user testing shows it creates a major accessibility barrier for a key customer group. The acceptance criteria did not explicitly address this issue. What should the project manager do NEXT?',
    options: [
      {
        key: 'a',
        text: 'Accept the component because the vendor met the written specification.',
      },
      {
        key: 'b',
        text: 'Reject the component and charge the vendor for rework.',
      },
      {
        key: 'c',
        text: 'Assess the impact on intended outcomes, requirements, compliance, and value, then engage the relevant stakeholders to determine the appropriate change.',
      },
      {
        key: 'd',
        text: 'Ask users to adapt their process until the next release.',
      },
    ],
    correct: 'c',
    explanation:
      'The project manager should connect quality and acceptance to intended value and applicable obligations, then use the appropriate decision/change path.',
  },
  {
    id: 13,
    domain: 'Process',
    topic: 'Earned Value Interpretation',
    prompt:
      "A project has CPI = 0.91 and SPI = 1.04. A senior executive asks whether the project is 'healthy.' What is the BEST response?",
    options: [
      { key: 'a', text: 'Yes, because the project is ahead of schedule.' },
      {
        key: 'b',
        text: 'No, because any CPI below 1.0 means the project should be stopped.',
      },
      {
        key: 'c',
        text: 'Explain that schedule performance is currently favorable while cost efficiency is unfavorable, then relate both to forecast, risk, and expected business outcomes.',
      },
      {
        key: 'd',
        text: 'Average CPI and SPI to produce a single health score.',
      },
    ],
    correct: 'c',
    explanation:
      'Single metrics should not be turned into a simplistic verdict. Interpret the indicators in context and connect them to forecast and outcomes.',
  },
  {
    id: 14,
    domain: 'Process',
    topic: 'Dependency Management in Agile',
    prompt:
      'A Scrum team repeatedly carries over stories because external API dependencies are discovered only after development begins. What should the project manager or Scrum Master encourage FIRST?',
    options: [
      {
        key: 'a',
        text: 'Increase sprint length so dependencies have more time to resolve.',
      },
      {
        key: 'b',
        text: 'Identify and refine dependency assumptions earlier, involving external teams during backlog refinement/planning.',
      },
      {
        key: 'c',
        text: 'Reduce the definition of done so stories can close before integration.',
      },
      { key: 'd', text: 'Increase individual developer utilization.' },
    ],
    correct: 'b',
    explanation:
      'Earlier dependency discovery and cross-team coordination addresses the root cause rather than masking it.',
  },
  {
    id: 15,
    domain: 'Process',
    topic: 'Program-Level Integration',
    prompt:
      'A program contains three projects delivering parts of one customer journey. Each project reports green status, yet the end-to-end launch is at risk because integration milestones are misaligned. What is the BEST action?',
    options: [
      {
        key: 'a',
        text: 'Keep each project green because each manager owns only their scope.',
      },
      {
        key: 'b',
        text: 'Create an integrated view of dependencies, milestones, risks, and outcomes, and manage the cross-project interfaces.',
      },
      {
        key: 'c',
        text: 'Ask each project to increase its contingency reserve.',
      },
      {
        key: 'd',
        text: 'Combine all three project teams into one Scrum team.',
      },
    ],
    correct: 'b',
    explanation:
      'Program-level delivery requires management of interfaces and shared outcomes, not isolated project health.',
  },
  {
    id: 16,
    domain: 'Process',
    topic: 'Scope Prioritization Under Constraints',
    prompt:
      'During UAT, users request a feature that would significantly improve adoption but is not necessary for the current regulatory release. The deadline cannot move. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Add the feature because user adoption is always the highest priority.',
      },
      {
        key: 'b',
        text: 'Reject the feature permanently because it was not in the original scope.',
      },
      {
        key: 'c',
        text: 'Evaluate value, effort, risk, and release constraints with the product/business stakeholders and prioritize it appropriately, potentially for a later increment.',
      },
      {
        key: 'd',
        text: 'Ask the development team to work overtime and include it.',
      },
    ],
    correct: 'c',
    explanation:
      'Value matters, but so do constraints and prioritization. The feature can be assessed without jeopardizing a mandatory release.',
  },
  {
    id: 17,
    domain: 'Process',
    topic: 'Hybrid & Rolling-Wave Planning',
    prompt:
      'A team is using a hybrid approach. Executives want a detailed 12-month plan, while the product team says uncertainty makes detailed feature commitments beyond three months unreliable. What should the project manager propose?',
    options: [
      {
        key: 'a',
        text: 'Refuse to provide any long-range view because agile prohibits long-term planning.',
      },
      {
        key: 'b',
        text: 'Create a rolling-wave plan: detailed near-term commitments with progressively higher-level forecasts and assumptions for later periods.',
      },
      {
        key: 'c',
        text: 'Produce a detailed 12-month baseline and prevent changes.',
      },
      { key: 'd', text: 'Use only a product backlog with no dates.' },
    ],
    correct: 'b',
    explanation:
      'Rolling-wave planning provides governance visibility while acknowledging uncertainty.',
  },
  {
    id: 18,
    domain: 'Process',
    topic: 'Risk Quantification (EMV)',
    prompt:
      'A risk with a 30% probability and a $400,000 impact has a planned response costing $50,000 that reduces probability to 10% but does not change impact. Ignoring secondary risks, what is the expected monetary benefit of implementing the response?',
    options: [
      { key: 'a', text: '$30,000' },
      { key: 'b', text: '$50,000' },
      { key: 'c', text: '$80,000' },
      { key: 'd', text: '$120,000' },
    ],
    correct: 'a',
    explanation:
      'Original EMV = 0.30 x $400,000 = $120,000. Residual EMV = 0.10 x $400,000 = $40,000. Risk reduction = $80,000. Less the response cost of $50,000 gives a net expected benefit of $30,000.',
  },
  {
    id: 19,
    domain: 'Business Environment',
    topic: 'Business Case Reassessment',
    prompt:
      'A project is on time and on budget, but a competitor launches a substitute product that sharply reduces the expected market benefit of your project. What should the project manager do FIRST?',
    options: [
      {
        key: 'a',
        text: 'Continue because scope, schedule, and cost baselines remain healthy.',
      },
      {
        key: 'b',
        text: 'Reassess the business case, expected value, and strategic alignment with the sponsor/product leadership.',
      },
      { key: 'c', text: 'Cancel the project immediately.' },
      { key: 'd', text: 'Accelerate the schedule without changing scope.' },
    ],
    correct: 'b',
    explanation:
      'The 2026 exam places stronger emphasis on value and external business context. A material market change should trigger reassessment rather than automatic continuation or cancellation.',
  },
  {
    id: 20,
    domain: 'Business Environment',
    topic: 'Regulatory & External Change Monitoring',
    prompt:
      "A government announces a sustainability reporting rule that is likely to take effect before your project's product launches. Legal says final guidance is still pending. What is the BEST action?",
    options: [
      { key: 'a', text: 'Ignore it until the rule is legally effective.' },
      {
        key: 'b',
        text: 'Immediately redesign the product for the strictest imaginable interpretation.',
      },
      {
        key: 'c',
        text: 'Monitor the external change, assess plausible impacts and response options, and engage compliance/governance stakeholders as information develops.',
      },
      { key: 'd', text: 'Transfer the risk to the customer.' },
    ],
    correct: 'c',
    explanation:
      'External changes should be monitored and analyzed proportionately. Premature redesign and passive waiting are both weak responses.',
  },
  {
    id: 21,
    domain: 'Business Environment',
    topic: 'Responsible AI & Ethics',
    prompt:
      'A company wants to use an AI model to prioritize insurance claims. The project can deliver the model within budget, but pilot results show different error rates across customer groups. What should MOST directly shape the project manager’s next steps?',
    options: [
      {
        key: 'a',
        text: 'Whether the different error rates create ethical, regulatory, customer, or reputational risks, and whether the model can be governed, validated, monitored, and corrected appropriately.',
      },
      { key: 'b', text: 'Whether the model improves team velocity.' },
      { key: 'c', text: 'Whether the sponsor personally prefers automation.' },
      {
        key: 'd',
        text: 'Whether the project can remove human review to maximize ROI.',
      },
    ],
    correct: 'a',
    explanation:
      'Business-environment judgment includes the regulatory, ethical, customer, and governance implications of AI-enabled outcomes — not velocity or personal preference.',
  },
  {
    id: 22,
    domain: 'Business Environment',
    topic: 'Benefits Realization & Adoption',
    prompt:
      'A transformation project is expected to save $8 million annually. Three months before launch, operations estimates that adoption will be only 40% unless an additional $700,000 is invested in training and process change. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Reject the additional spending because the project budget is already approved.',
      },
      {
        key: 'b',
        text: 'Present the adoption evidence and evaluate the additional investment against expected benefits and value realization.',
      },
      {
        key: 'c',
        text: 'Launch first and address adoption after benefits fail to materialize.',
      },
      {
        key: 'd',
        text: 'Change the benefits forecast without informing governance.',
      },
    ],
    correct: 'b',
    explanation:
      'Benefits are not realized merely by delivering outputs. Adoption and organizational change may be necessary to achieve the intended value.',
  },
  {
    id: 23,
    domain: 'Business Environment',
    topic: 'Global/Local Tailoring & Compliance',
    prompt:
      'A multinational project has a standard global process, but a new local privacy requirement conflicts with one step in that process. The local team proposes an exception. What should the project manager do FIRST?',
    options: [
      {
        key: 'a',
        text: 'Enforce the global standard to preserve consistency.',
      },
      { key: 'b', text: 'Let the local team create any process it wants.' },
      {
        key: 'c',
        text: 'Validate the local requirement and engage governance/compliance to tailor the process while preserving required controls and outcomes.',
      },
      { key: 'd', text: 'Delay the local rollout indefinitely.' },
    ],
    correct: 'c',
    explanation:
      'Tailoring should respond to legitimate local context while maintaining governance and intended outcomes.',
  },
  {
    id: 24,
    domain: 'Business Environment',
    topic: 'Outcome-Based Reporting',
    prompt:
      'A steering committee asks the project manager to report only schedule and budget. The project manager knows the project’s primary objective is a 20% reduction in customer abandonment after launch. Which reporting approach BEST reflects the 2026 PMP emphasis?',
    options: [
      {
        key: 'a',
        text: 'Report only schedule and budget because they are objective project metrics.',
      },
      {
        key: 'b',
        text: 'Report schedule and budget plus leading indicators and evidence related to the intended customer/business outcome.',
      },
      {
        key: 'c',
        text: 'Replace all delivery metrics with customer satisfaction.',
      },
      {
        key: 'd',
        text: 'Wait until project closure before discussing benefits.',
      },
    ],
    correct: 'b',
    explanation:
      'The refreshed exam emphasizes outcomes, value, and business impact alongside delivery performance.',
  },
  {
    id: 25,
    domain: 'Business Environment',
    topic: 'Transparent Status Reporting',
    prompt:
      "A project's benefits depend on a policy change that has not yet been approved by the board. Delivery is 70% complete and technically healthy. The sponsor asks the project manager to label the project green. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Mark it green because execution performance is healthy.',
      },
      {
        key: 'b',
        text: 'Mark it red because the board has not approved the policy.',
      },
      {
        key: 'c',
        text: 'Report delivery performance separately from the unresolved strategic/benefit dependency and its impact on value realization.',
      },
      {
        key: 'd',
        text: 'Omit the dependency until the board makes a decision.',
      },
    ],
    correct: 'c',
    explanation:
      'Transparent reporting distinguishes execution health from business-environment dependencies that affect benefits and value.',
  },
  {
    id: 26,
    domain: 'Business Environment',
    topic: 'Organizational Change & Transition',
    prompt:
      'A project will automate a manual process and eliminate several operational roles. The technical implementation is low risk, but business leaders are concerned about resistance and service disruption during transition. What should the project manager prioritize?',
    options: [
      {
        key: 'a',
        text: 'Technical completion because organizational impacts are outside the project.',
      },
      {
        key: 'b',
        text: 'Organizational change planning, stakeholder engagement, transition readiness, and measures that protect intended business outcomes.',
      },
      {
        key: 'c',
        text: 'Keeping the workforce impact confidential until deployment.',
      },
      {
        key: 'd',
        text: 'Increasing automation scope to maximize savings before resistance grows.',
      },
    ],
    correct: 'b',
    explanation:
      'Business outcomes depend on change readiness and stakeholder transition, not just technical delivery.',
  },
]
