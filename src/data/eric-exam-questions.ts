import type { PMPQuestion } from './pmp-quiz-types'

export const ericExamQuestions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'People',
    topic: 'Performance Coaching',
    prompt: 'A team member frequently misses deadlines. As a project manager, what should you do first?',
    options: [
      { key: 'a', text: 'Escalate to the sponsor' },
      { key: 'b', text: 'Address the issue privately with the team member' },
      { key: 'c', text: 'Reassign the tasks' },
      { key: 'd', text: 'Document the issue in lessons learned' },
    ],
    correct: 'b',
    explanation: 'Private dialogue identifies root causes and preserves morale.',
  },
  {
    id: 2,
    domain: 'People',
    topic: 'Stakeholder Engagement',
    prompt: 'A stakeholder is unhappy with project progress. How should you handle the situation?',
    options: [
      { key: 'a', text: 'Ignore concerns until delivery' },
      { key: 'b', text: 'Schedule a meeting to understand their expectations' },
      { key: 'c', text: 'Ask the sponsor to intervene' },
      { key: 'd', text: 'Add more resources without approval' },
    ],
    correct: 'b',
    explanation: 'Direct engagement clarifies concerns and builds trust.',
  },
  {
    id: 3,
    domain: 'People',
    topic: 'Conflict Resolution',
    prompt: 'You notice conflict between two team members during a sprint. What is your best response?',
    options: [
      { key: 'a', text: 'Replace one team member' },
      { key: 'b', text: 'Facilitate a discussion to resolve the conflict' },
      { key: 'c', text: 'Escalate to HR immediately' },
      { key: 'd', text: 'Ignore unless it impacts work' },
    ],
    correct: 'b',
    explanation: 'Mediation preserves teamwork and resolves root issues.',
  },
  {
    id: 4,
    domain: 'People',
    topic: 'Team Onboarding',
    prompt: 'A new team member joins mid-project. What is the most important first step?',
    options: [
      { key: 'a', text: 'Assign tasks right away' },
      { key: 'b', text: 'Introduce them to stakeholders' },
      { key: 'c', text: 'Provide project onboarding and explain roles/responsibilities' },
      { key: 'd', text: 'Ask them to shadow another team member' },
    ],
    correct: 'c',
    explanation: 'Proper onboarding ensures context and accelerates integration.',
  },
  {
    id: 5,
    domain: 'People',
    topic: 'Psychological Safety',
    prompt: 'During a team retrospective, members hesitate to share issues. What should you do?',
    options: [
      { key: 'a', text: 'Skip the session' },
      { key: 'b', text: 'Encourage open discussion by setting a safe environment' },
      { key: 'c', text: 'Report non-participation to HR' },
      { key: 'd', text: 'Extend the project schedule' },
    ],
    correct: 'b',
    explanation: 'Psychological safety enables honest feedback for improvement.',
  },
  {
    id: 6,
    domain: 'People',
    topic: 'Servant Leadership',
    prompt: 'Which leadership style is most effective in Agile environments?',
    options: [
      { key: 'a', text: 'Autocratic' },
      { key: 'b', text: 'Servant leadership' },
      { key: 'c', text: 'Directive' },
      { key: 'd', text: 'Transactional' },
    ],
    correct: 'b',
    explanation: 'Servant leadership empowers teams and removes obstacles.',
  },
  {
    id: 7,
    domain: 'People',
    topic: 'Change Control Discipline',
    prompt: 'A senior stakeholder asks for major scope change without following change control. How should you respond?',
    options: [
      { key: 'a', text: 'Accept to maintain stakeholder satisfaction' },
      { key: 'b', text: 'Add it to the backlog and review formally' },
      { key: 'c', text: 'Escalate immediately to the sponsor' },
      { key: 'd', text: 'Reject without explanation' },
    ],
    correct: 'b',
    explanation: 'Formal change control maintains project stability.',
  },
  {
    id: 8,
    domain: 'People',
    topic: 'Distributed Team Collaboration',
    prompt: "Your distributed team struggles with miscommunication across time zones. What's the best action?",
    options: [
      { key: 'a', text: 'Reduce meetings altogether' },
      { key: 'b', text: 'Implement overlapping work hours and better collaboration tools' },
      { key: 'c', text: 'Assign all communication to one lead' },
      { key: 'd', text: 'Extend project deadlines' },
    ],
    correct: 'b',
    explanation: 'Overlapping hours and tools enhance distributed collaboration.',
  },
  {
    id: 9,
    domain: 'Process',
    topic: 'Scope Decomposition (WBS)',
    prompt: 'What is the primary purpose of a Work Breakdown Structure (WBS)?',
    options: [
      { key: 'a', text: 'Sequence project activities' },
      { key: 'b', text: 'Define deliverables and project scope' },
      { key: 'c', text: 'Estimate costs' },
      { key: 'd', text: 'Track risks' },
    ],
    correct: 'b',
    explanation: 'WBS decomposes scope into smaller, manageable tasks.',
  },
  {
    id: 10,
    domain: 'Process',
    topic: 'Critical Path Method',
    prompt: 'A project is behind schedule. Which tool reveals the schedule impact?',
    options: [
      { key: 'a', text: 'Monte Carlo simulation' },
      { key: 'b', text: 'Critical Path Method (CPM)' },
      { key: 'c', text: 'Earned Value Management (EVM)' },
      { key: 'd', text: 'Ishikawa diagram' },
    ],
    correct: 'b',
    explanation: 'CPM identifies task dependencies and delays.',
  },
  {
    id: 11,
    domain: 'Process',
    topic: 'Risk Response Strategies',
    prompt: "You identify a risk with high probability and high impact. What's the best response?",
    options: [
      { key: 'a', text: 'Accept it' },
      { key: 'b', text: 'Mitigate it' },
      { key: 'c', text: 'Transfer it' },
      { key: 'd', text: 'Avoid it' },
    ],
    correct: 'b',
    explanation: 'Mitigation proactively reduces likelihood or impact.',
  },
  {
    id: 12,
    domain: 'Process',
    topic: 'Earned Value (CPI)',
    prompt: 'The cost performance index (CPI) is 0.8. What does this indicate?',
    options: [
      { key: 'a', text: 'Project is under budget' },
      { key: 'b', text: 'Project is over budget' },
      { key: 'c', text: 'Project is ahead of schedule' },
      { key: 'd', text: 'Project is on track' },
    ],
    correct: 'b',
    explanation: 'CPI < 1 means overspending relative to planned efficiency.',
  },
  {
    id: 13,
    domain: 'Process',
    topic: 'Cost Estimating Techniques',
    prompt: 'What is the best method for estimating project costs when historical data is available?',
    options: [
      { key: 'a', text: 'Parametric estimation' },
      { key: 'b', text: 'Bottom-up estimation' },
      { key: 'c', text: 'Three-point estimation' },
      { key: 'd', text: 'Reserve analysis' },
    ],
    correct: 'a',
    explanation: 'Parametric estimation leverages data-driven models.',
  },
  {
    id: 14,
    domain: 'Process',
    topic: 'Schedule Compression',
    prompt: 'A project sponsor requests completion earlier than planned. What should you do?',
    options: [
      { key: 'a', text: 'Crash or fast-track the schedule after analyzing trade-offs' },
      { key: 'b', text: 'Agree immediately' },
      { key: 'c', text: 'Add unapproved resources' },
      { key: 'd', text: 'Ignore the request' },
    ],
    correct: 'a',
    explanation: 'Crashing/fast-tracking are valid methods with trade-off analysis.',
  },
  {
    id: 15,
    domain: 'Process',
    topic: 'Quality Root-Cause Analysis',
    prompt: 'What tool is best for identifying root causes of quality issues?',
    options: [
      { key: 'a', text: 'Pareto chart' },
      { key: 'b', text: 'Fishbone diagram' },
      { key: 'c', text: 'Gantt chart' },
      { key: 'd', text: 'Control chart' },
    ],
    correct: 'b',
    explanation: 'Fishbone diagrams systematically identify root causes.',
  },
  {
    id: 16,
    domain: 'Process',
    topic: 'Earned Value (SPI)',
    prompt: 'What does SPI < 1 indicate in Earned Value Management?',
    options: [
      { key: 'a', text: 'Ahead of schedule' },
      { key: 'b', text: 'Behind schedule' },
      { key: 'c', text: 'On track' },
      { key: 'd', text: 'Over budget' },
    ],
    correct: 'b',
    explanation: 'SPI < 1 signals work progressing slower than planned.',
  },
  {
    id: 17,
    domain: 'Process',
    topic: 'Project Charter',
    prompt: 'Which document formally authorizes a project?',
    options: [
      { key: 'a', text: 'Project Charter' },
      { key: 'b', text: 'Statement of Work' },
      { key: 'c', text: 'Business Case' },
      { key: 'd', text: 'Scope Statement' },
    ],
    correct: 'a',
    explanation: 'The Project Charter officially authorizes a project.',
  },
  {
    id: 18,
    domain: 'Process',
    topic: 'Agile Velocity & Capacity',
    prompt: 'In Agile, velocity is used for:',
    options: [
      { key: 'a', text: 'Tracking costs' },
      { key: 'b', text: 'Measuring stakeholder satisfaction' },
      { key: 'c', text: 'Estimating team capacity for future sprints' },
      { key: 'd', text: 'Assigning resources' },
    ],
    correct: 'c',
    explanation: 'Velocity forecasts how much work teams can complete in future sprints.',
  },
  {
    id: 19,
    domain: 'Process',
    topic: 'Earned Value (Combined CPI/SPI)',
    prompt: 'A project has CPI = 1.2 and SPI = 0.9. What does this mean?',
    options: [
      { key: 'a', text: 'Under budget, ahead of schedule' },
      { key: 'b', text: 'Over budget, behind schedule' },
      { key: 'c', text: 'Under budget, behind schedule' },
      { key: 'd', text: 'Over budget, ahead of schedule' },
    ],
    correct: 'c',
    explanation: 'CPI > 1 = cost efficiency (under budget); SPI < 1 = delays (behind).',
  },
  {
    id: 20,
    domain: 'Business Environment',
    topic: 'Regulatory Compliance',
    prompt: 'A project must comply with new government regulations. What should you do first?',
    options: [
      { key: 'a', text: 'Stop project execution until clarified' },
      { key: 'b', text: 'Review how compliance impacts project scope and costs' },
      { key: 'c', text: 'Escalate to stakeholders only' },
      { key: 'd', text: 'Ignore until an audit occurs' },
    ],
    correct: 'b',
    explanation: 'Assess impact before taking corrective action.',
  },
  {
    id: 21,
    domain: 'Business Environment',
    topic: 'Strategic Alignment',
    prompt: "A project is not aligned with organizational strategy. What's the best action?",
    options: [
      { key: 'a', text: 'Continue as planned' },
      { key: 'b', text: 'Recommend termination to leadership' },
      { key: 'c', text: 'Ignore misalignment' },
      { key: 'd', text: 'Add extra resources' },
    ],
    correct: 'b',
    explanation: 'Misaligned projects waste resources; termination is best practice.',
  },
  {
    id: 22,
    domain: 'Business Environment',
    topic: 'Value Delivery & Benefits',
    prompt: 'Value delivery in projects is best measured by:',
    options: [
      { key: 'a', text: 'Earned Value' },
      { key: 'b', text: 'Business outcomes achieved' },
      { key: 'c', text: 'Budget adherence only' },
      { key: 'd', text: 'Stakeholder satisfaction only' },
    ],
    correct: 'b',
    explanation: 'Real project success is delivering tangible business outcomes.',
  },
  {
    id: 23,
    domain: 'Business Environment',
    topic: 'Benefits Management Plan',
    prompt: 'Which document defines how project benefits will be measured after delivery?',
    options: [
      { key: 'a', text: 'Benefits Management Plan' },
      { key: 'b', text: 'Scope Statement' },
      { key: 'c', text: 'Stakeholder Register' },
      { key: 'd', text: 'Charter' },
    ],
    correct: 'a',
    explanation: 'Benefits Management Plan ensures benefits are tracked and realized.',
  },
  {
    id: 24,
    domain: 'Business Environment',
    topic: 'Tailoring',
    prompt: 'Which best describes "tailoring" in project management?',
    options: [
      { key: 'a', text: 'Adjusting processes to fit project context' },
      { key: 'b', text: 'Customizing stakeholder expectations' },
      { key: 'c', text: 'Modifying PMBOK permanently' },
      { key: 'd', text: 'Skipping required processes' },
    ],
    correct: 'a',
    explanation: 'Tailoring adapts processes to project-specific needs.',
  },
  {
    id: 25,
    domain: 'People',
    topic: 'Stakeholder Vision Alignment',
    prompt:
      'A hybrid project is six weeks into execution. The sponsor believes success means launching all planned features by December, while the product owner believes success means achieving a 20% increase in customer adoption even if several features are deferred. Team members are receiving conflicting priorities. What should the project manager do first?',
    options: [
      { key: 'a', text: "Ask the sponsor to define the project's success criteria" },
      { key: 'b', text: 'Facilitate a discussion between key stakeholders to establish a shared project vision' },
      { key: 'c', text: "Tell the team to follow the product owner's priorities because value is more important than scope" },
      { key: 'd', text: 'Document both definitions of success in the stakeholder register' },
    ],
    correct: 'b',
    explanation:
      'Conflicting stakeholder definitions of success must be reconciled through facilitated alignment before the team can execute confidently — unilaterally picking a side or merely documenting the conflict leaves it unresolved.',
  },
  {
    id: 26,
    domain: 'People',
    topic: 'Conflict Resolution',
    prompt:
      'Two senior developers repeatedly disagree during sprint planning. One wants to prioritize technical-debt reduction while the other argues that only customer-facing functionality should be selected. Their arguments are beginning to affect the rest of the team. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Escalate the disagreement to their functional managers' },
      { key: 'b', text: 'Decide which developer has the stronger technical argument' },
      { key: 'c', text: 'Understand the source and context of the conflict before selecting a resolution approach' },
      { key: 'd', text: 'Ask the product owner to remove both developers from sprint planning' },
    ],
    correct: 'c',
    explanation:
      'Effective conflict management starts with diagnosing the root cause and context; jumping to escalation, a ruling, or removal skips that step.',
  },
  {
    id: 27,
    domain: 'People',
    topic: 'Team Empowerment',
    prompt:
      'An agile team relies heavily on one senior engineer who makes nearly every technical decision. The engineer is becoming overloaded, and team members wait for approval rather than solving problems themselves. What is the best action for the project manager?',
    options: [
      { key: 'a', text: 'Request another senior engineer' },
      { key: 'b', text: 'Empower the team to make appropriate decisions and distribute knowledge and responsibility' },
      { key: 'c', text: 'Give the engineer formal authority over the entire technical team' },
      { key: 'd', text: "Escalate the engineer's workload to the sponsor" },
    ],
    correct: 'b',
    explanation:
      "Servant leadership means building team self-sufficiency and distributing decision-making, not adding headcount or further centralizing authority.",
  },
  {
    id: 28,
    domain: 'People',
    topic: 'Stakeholder Reassessment',
    prompt:
      "Halfway through a project, a government regulator who previously had little involvement begins requesting detailed evidence about the project's data-management practices. What should the project manager do?",
    options: [
      { key: 'a', text: 'Provide the regulator with the existing weekly status report' },
      { key: 'b', text: 'Ask the sponsor to manage all communication with the regulator' },
      { key: 'c', text: 'Reassess the stakeholder and tailor the engagement and communication approach' },
      { key: 'd', text: 'Add the regulator to the project team' },
    ],
    correct: 'c',
    explanation:
      "A stakeholder's influence and needs can shift during the project; reassess the stakeholder register and tailor engagement rather than reusing a generic report or offloading the relationship.",
  },
  {
    id: 29,
    domain: 'People',
    topic: 'Value-Based Prioritization',
    prompt:
      'A sponsor expects a digital product to contain twelve major capabilities at launch. Customer research now shows that four capabilities would generate most of the expected business value and could be released three months earlier. What should the project manager do?',
    options: [
      { key: 'a', text: 'Continue delivering all twelve because the sponsor originally approved them' },
      { key: 'b', text: 'Facilitate a discussion about expectations, value and desired outcomes with the stakeholders' },
      { key: 'c', text: 'Remove the lower-value capabilities from scope immediately' },
      { key: 'd', text: 'Ask the development team to work overtime and deliver all twelve earlier' },
    ],
    correct: 'b',
    explanation:
      'New value data should prompt a stakeholder conversation to realign expectations, not a unilateral scope cut or a blind commitment to the original plan.',
  },
  {
    id: 30,
    domain: 'People',
    topic: 'Outcome Validation',
    prompt:
      'Customer satisfaction with a recently released increment has fallen sharply. The team delivered everything contained in the approved backlog, and the product owner believes the project is therefore successful. What should the project manager do next?',
    options: [
      { key: 'a', text: 'Close the increment because all backlog items were completed' },
      { key: 'b', text: 'Investigate customer feedback and reassess whether delivered outcomes align with customer expectations' },
      { key: 'c', text: 'Replace the product owner' },
      { key: 'd', text: 'Increase the number of features in the next increment' },
    ],
    correct: 'b',
    explanation:
      'Completing backlog items is an output measure; success requires validating that the delivered outcomes actually meet customer needs.',
  },
  {
    id: 31,
    domain: 'People',
    topic: 'Knowledge Transfer',
    prompt:
      "A subject-matter expert who designed a critical integration will leave the organization in three weeks. Very little of the expert's knowledge has been documented. What should the project manager do?",
    options: [
      { key: 'a', text: 'Ask the expert to write a complete technical manual before leaving' },
      { key: 'b', text: 'Identify critical knowledge and arrange knowledge-transfer activities such as pairing, demonstrations and documentation' },
      { key: 'c', text: 'Immediately recruit a replacement with identical experience' },
      { key: 'd', text: 'Add the departure to the lessons-learned register and continue' },
    ],
    correct: 'b',
    explanation:
      'A structured knowledge-transfer plan captures the highest-risk knowledge in the time available, more reliably than a single manual or a same-skill hire.',
  },
  {
    id: 32,
    domain: 'People',
    topic: 'Stakeholder Reporting & Tailoring',
    prompt:
      "Executives complain that the agile team's status reports contain velocity charts, technical metrics and backlog details but do not tell them whether the project is likely to achieve its business objectives. What should the project manager do?",
    options: [
      { key: 'a', text: "Send the executives the team's daily stand-up notes" },
      { key: 'b', text: 'Replace agile metrics with earned value calculations' },
      { key: 'c', text: 'Tailor reporting to stakeholder information needs and include appropriate outcome and value measures' },
      { key: 'd', text: 'Ask executives to attend sprint reviews instead of receiving reports' },
    ],
    correct: 'c',
    explanation:
      'Reporting should be tailored to each audience — executives need outcome and value indicators alongside (not instead of) delivery metrics.',
  },
  {
    id: 33,
    domain: 'Process',
    topic: 'Hybrid Delivery Approach Selection',
    prompt:
      'A project will develop a medical device. Hardware requirements are stable and heavily regulated, but the customer-facing software requires frequent experimentation and feedback. Which delivery approach is most appropriate?',
    options: [
      { key: 'a', text: 'Predictive for the entire project' },
      { key: 'b', text: 'Agile for the entire project' },
      { key: 'c', text: 'Hybrid, tailoring the approach to the characteristics of the different work' },
      { key: 'd', text: 'Kanban because regulated projects cannot use Scrum' },
    ],
    correct: 'c',
    explanation:
      'Stable, regulated hardware work suits predictive planning while the evolving software benefits from adaptive delivery — a tailored hybrid approach fits both.',
  },
  {
    id: 34,
    domain: 'Process',
    topic: 'Sprint Goal Protection',
    prompt:
      'During an active sprint, an important customer suggests a useful new feature. There is no urgent defect or regulatory reason to change the sprint goal. What should the project manager or agile leader encourage?',
    options: [
      { key: 'a', text: 'Add the feature immediately because the customer has high influence' },
      { key: 'b', text: 'Evaluate and prioritize the feature through the product backlog for future work' },
      { key: 'c', text: 'Extend the sprint so the team can complete the feature' },
      { key: 'd', text: 'Submit the request to a change control board' },
    ],
    correct: 'b',
    explanation:
      'Protect the current sprint goal — new ideas without urgency go through normal backlog refinement and prioritization, not mid-sprint injection or scope extension.',
  },
  {
    id: 35,
    domain: 'Process',
    topic: 'Data-Driven Reprioritization',
    prompt:
      'A product team releases an MVP. Usage data shows that a planned feature expected to require two months of development is unlikely to improve the customer outcome being targeted. What should the project manager recommend?',
    options: [
      { key: 'a', text: 'Deliver the feature because it appeared in the original roadmap' },
      { key: 'b', text: 'Reassess priorities using the new evidence and expected business value' },
      { key: 'c', text: 'Increase the project budget so the feature can be delivered faster' },
      { key: 'd', text: 'Record the finding as a risk and make no other change' },
    ],
    correct: 'b',
    explanation:
      'Value-driven delivery means re-prioritizing the backlog when real usage data contradicts the original assumption, rather than following the roadmap blindly.',
  },
  {
    id: 36,
    domain: 'Process',
    topic: 'Resource Optimization',
    prompt:
      "A project requires an AI specialist for several upcoming activities. Only one specialist is available and three project teams need that person's skills during the same month. What should the project manager do first?",
    options: [
      { key: 'a', text: 'Reserve the specialist for the highest-budget project' },
      { key: 'b', text: 'Analyze resource demand, dependencies and available alternatives across the affected work' },
      { key: 'c', text: 'Hire a consultant without reviewing the budget' },
      { key: 'd', text: 'Delay the project by one month' },
    ],
    correct: 'b',
    explanation:
      'Resolving a shared-resource conflict starts with analyzing demand, dependencies and alternatives across all affected work, not an arbitrary priority rule or an unbudgeted hire.',
  },
  {
    id: 37,
    domain: 'Process',
    topic: 'Contract Types',
    prompt:
      'A company is outsourcing development of an experimental prototype. Requirements will evolve as prototypes are reviewed, and the buyer wants flexibility to reprioritize work. Which contract type is generally most appropriate?',
    options: [
      { key: 'a', text: 'Firm-fixed-price' },
      { key: 'b', text: 'Cost-plus-fixed-fee with no oversight' },
      { key: 'c', text: 'Time and materials with appropriate controls and limits' },
      { key: 'd', text: 'Fixed-price economic price adjustment' },
    ],
    correct: 'c',
    explanation:
      "Evolving, hard-to-define scope is best matched to a time-and-materials contract with caps and oversight — fixed-price structures assume stable requirements this work doesn't have.",
  },
  {
    id: 38,
    domain: 'Process',
    topic: 'Cost Forecasting & Reserve Management',
    prompt:
      'A predictive project has spent 70% of its budget while completing only 55% of the planned work. The project manager also learns that an identified risk may require part of the contingency reserve. What should the project manager do next?',
    options: [
      { key: 'a', text: 'Immediately request additional funding' },
      { key: 'b', text: 'Analyze financial performance, forecast remaining needs and manage reserves according to governance rules' },
      { key: 'c', text: 'Use management reserve to eliminate the cost variance' },
      { key: 'd', text: 'Reduce quality requirements to protect the budget' },
    ],
    correct: 'b',
    explanation:
      'A negative cost variance calls for a proper forecast and reserve analysis under existing governance before requesting funds, tapping reserves outside their intended purpose, or cutting quality.',
  },
  {
    id: 39,
    domain: 'Process',
    topic: 'Quality & Compliance Trade-offs',
    prompt:
      'A supplier proposes a cheaper material that meets functional specifications. However, using it would cause the project to miss an approved sustainability requirement. What should the project manager do?',
    options: [
      { key: 'a', text: 'Accept the material because functional quality requirements are satisfied' },
      { key: 'b', text: 'Reject it immediately without further analysis' },
      { key: 'c', text: 'Evaluate the proposal against quality, sustainability, compliance and project-value requirements before deciding' },
      { key: 'd', text: 'Let the supplier make the decision' },
    ],
    correct: 'c',
    explanation:
      'A proposed substitution should be weighed against every approved requirement it touches — functional, sustainability and compliance — before a decision is made either way.',
  },
  {
    id: 40,
    domain: 'Process',
    topic: 'Agile Forecasting',
    prompt:
      'An agile team is asked to provide a six-month schedule. Detailed requirements for later iterations are not yet known, but the team has reliable historical velocity information. What is the best approach?',
    options: [
      { key: 'a', text: 'Create detailed task-level estimates for all six months' },
      { key: 'b', text: 'Forecast future work using available backlog information, historical performance and appropriate adaptive estimation' },
      { key: 'c', text: 'Refuse to provide any schedule because agile projects cannot be forecast' },
      { key: 'd', text: 'Convert story points directly into hours' },
    ],
    correct: 'b',
    explanation:
      "Agile long-range forecasting uses known backlog items plus historical velocity to produce a reliable range forecast — detailed task estimates for unknown future work aren't credible, and agile teams can and should still forecast.",
  },
  {
    id: 41,
    domain: 'People',
    topic: 'Performance Coaching',
    prompt:
      'A team member regularly submits deliverables late and under the expected quality standard. How should the project manager respond first?',
    options: [
      { key: 'a', text: 'Escalate the issue to their functional manager.' },
      { key: 'b', text: 'Reassign them to simpler tasks.' },
      { key: 'c', text: 'Meet with the team member privately to understand the underlying root cause.' },
      { key: 'd', text: 'Issue a formal written performance notice.' },
    ],
    correct: 'c',
    explanation:
      'A project manager should demonstrate emotional intelligence and direct leadership. Meeting privately first identifies root causes (training gaps, personal obstacles, or resource constraints) before escalating or taking formal disciplinary action.',
  },
  {
    id: 42,
    domain: 'People',
    topic: 'Stakeholder Engagement Tailoring',
    prompt:
      'During sprint execution, a high-power stakeholder regularly misses alignment meetings and fails to respond to critical decision requests. What is the best course of action?',
    options: [
      { key: 'a', text: 'Remove them from the stakeholder engagement plan.' },
      { key: 'b', text: 'Tailor the communication approach to align better with their preferences and schedule.' },
      { key: 'c', text: 'Escalate their lack of participation to the project sponsor.' },
      { key: 'd', text: 'Proceed with major decisions without their input and document the attempt.' },
    ],
    correct: 'b',
    explanation:
      'When stakeholder engagement drops, analyze communication channels first. Re-evaluating communication preferences ensures key stakeholders stay informed and engaged without unnecessary escalation.',
  },
  {
    id: 43,
    domain: 'People',
    topic: 'Unauthorized Change Handling',
    prompt:
      'A senior Subject Matter Expert (SME) who was not part of the project team suggests a fundamental change directly to a developer, who then implements it without approval. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Direct the developer to roll back the change immediately.' },
      { key: 'b', text: 'Facilitate a discussion between the product owner and developer to evaluate the gap and potential value.' },
      { key: 'c', text: 'Instruct the team to ignore future input from external SMEs.' },
      { key: 'd', text: 'Update the project plan to incorporate the change since it saves time.' },
    ],
    correct: 'b',
    explanation:
      'Assess the value and scope impact of unauthorized work collaboratively with the Product Owner/Change Board before taking coercive steps like rolling back or ignoring expert input.',
  },
  {
    id: 44,
    domain: 'Process',
    topic: 'Schedule Float',
    prompt:
      'A project is running behind schedule. A critical path review reveals that Activity D has 10 days of total float. What does this mean?',
    options: [
      { key: 'a', text: 'Activity D must finish 10 days earlier than planned.' },
      { key: 'b', text: 'Activity D can be delayed by up to 10 days without pushing back the project completion date.' },
      { key: 'c', text: 'Activity D is on the critical path.' },
      { key: 'd', text: 'Activity D is currently 10 days behind schedule.' },
    ],
    correct: 'b',
    explanation:
      'Total float (or slack) is the amount of time an activity can be delayed from its early start date without delaying the project finish date. Activities with positive float are not on the critical path.',
  },
  {
    id: 45,
    domain: 'Process',
    topic: 'Earned Value (CPI)',
    prompt:
      'A mid-project audit reveals an Earned Value Cost Performance Index (CPI) of 0.71. How should this result be interpreted?',
    options: [
      { key: 'a', text: 'The project is substantially over budget.' },
      { key: 'b', text: 'The project is slightly under budget.' },
      { key: 'c', text: 'The project is ahead of schedule.' },
      { key: 'd', text: 'The project is running on budget.' },
    ],
    correct: 'a',
    explanation:
      'CPI = EV / AC. A CPI less than 1.0 indicates that the project is spending more than planned for the value delivered (i.e., over budget). A CPI of 0.71 means you are receiving only 71 cents of value for every dollar spent.',
  },
  {
    id: 46,
    domain: 'Process',
    topic: 'Change Impact Analysis',
    prompt:
      'A client submits an urgent request to add a new AI feature prior to an upcoming product launch. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Reject the request because scope cannot be altered late in the lifecycle.' },
      { key: 'b', text: 'Implement the feature immediately to maintain customer satisfaction.' },
      { key: 'c', text: 'Work with the Product Owner and team to analyze the impact on time, cost, quality, and backlog prioritization.' },
      { key: 'd', text: 'Ask the sponsor for additional budget to crash the schedule.' },
    ],
    correct: 'c',
    explanation:
      'Whether predictive or adaptive, change requests must undergo impact analysis on schedule, cost, risk, and value prior to committing resources or adjusting scope baselines.',
  },
  {
    id: 47,
    domain: 'Process',
    topic: 'Root-Cause Analysis & Retrospectives',
    prompt:
      'During a sprint review, four deliverables fail the quality review due to repeated integration issues. What should the project manager do?',
    options: [
      { key: 'a', text: 'Facilitate a root-cause analysis (e.g., Fishbone diagram) with the team during the upcoming retrospective.' },
      { key: 'b', text: 'Revise the quality management plan to lower the inspection thresholds.' },
      { key: 'c', text: 'Escalate the issue to executive leadership immediately.' },
      { key: 'd', text: 'Replace the team members responsible for testing.' },
    ],
    correct: 'a',
    explanation:
      'Rather than lowering standards or shifting blame, agile/hybrid frameworks rely on continuous improvement through root-cause analysis and team retrospectives.',
  },
  {
    id: 48,
    domain: 'Process',
    topic: 'Hybrid Dependency Management',
    prompt:
      'A project uses a hybrid approach: the engineering design is predictive, but software features are delivered using Scrum. The software team is blocked because design documentation is delivered late. What should the project manager do?',
    options: [
      { key: 'a', text: 'Switch the entire project immediately to a 100% predictive model.' },
      { key: 'b', text: 'Work with the product owner and leads to establish clear interface milestones and buffer dependencies between frameworks.' },
      { key: 'c', text: 'Order the software team to start coding based on speculative assumptions.' },
      { key: 'd', text: 'Direct the design team to stop formal documentation.' },
    ],
    correct: 'b',
    explanation:
      'In hybrid deliveries, the primary failure mode is misalignment at the boundary between predictive and adaptive tracks. Defining explicit release gates and workflow dependencies resolves cross-framework bottlenecks.',
  },
  {
    id: 49,
    domain: 'Business Environment',
    topic: 'Regulatory Compliance Planning',
    prompt:
      'Your organization is deploying a digital transformation tool in a strictly regulated industry. What should be incorporated into the project planning documents to maintain compliance?',
    options: [
      { key: 'a', text: 'A compliance strategy and regulatory traceability matrix.' },
      { key: 'b', text: 'A standalone risk register containing only financial risks.' },
      { key: 'c', text: 'A standard stakeholder engagement plan focused exclusively on internal teams.' },
      { key: 'd', text: 'A quality plan that waives third-party audits.' },
    ],
    correct: 'a',
    explanation:
      'Meeting organizational and external compliance standards requires explicit mapping via a compliance strategy and regulatory matrix to track mandatory requirements throughout execution.',
  },
  {
    id: 50,
    domain: 'Business Environment',
    topic: 'Financial Selection Criteria (NPV)',
    prompt:
      'During project selection, senior executives must choose between two prospective investments using Net Present Value (NPV). Project Alpha has an NPV of $120,000, and Project Beta has an NPV of $95,000. Which option should be recommended?',
    options: [
      { key: 'a', text: 'Project Beta because it carries a lower financial baseline.' },
      { key: 'b', text: 'Project Alpha because a higher positive NPV yields greater economic value to the organization.' },
      { key: 'c', text: 'Neither project, as NPV alone cannot determine selection without internal rate of return (IRR).' },
      { key: 'd', text: 'Both projects simultaneously regardless of budget limits.' },
    ],
    correct: 'b',
    explanation:
      'When using financial selection criteria, the project with the highest positive Net Present Value (NPV) provides the maximum expected financial value to the enterprise.',
  },
]
