import type { PMPQuestion } from './pmp-quiz-types'

export const pmpMockExamSectionC: PMPQuestion[] = [
  {
    id: 1,
    domain: 'People',
    topic: 'Servant Leadership & Psychological Safety',
    prompt:
      'A newly assigned agile project team is struggling during iterations. Team members frequently work in silos, refuse to cross-train, and express frustration when peer reviews identify defects. How should the servant leader address this team dynamic?',
    options: [
      {
        key: 'a',
        text: 'Direct team members to pair program and mandate cross-training during the next sprint.',
      },
      {
        key: 'b',
        text: 'Frame mistakes as learning opportunities and facilitate collaborative retrospectives.',
      },
      {
        key: 'c',
        text: 'Reassign quality assurance responsibilities exclusively to dedicated testing staff.',
      },
      {
        key: 'd',
        text: 'Report the lack of cohesion to functional managers to initiate corrective action.',
      },
    ],
    correct: 'b',
    explanation:
      'Silos and defensiveness around defects signal a psychological-safety problem — framing mistakes as learning opportunities and facilitating collaborative retrospectives addresses that directly, rather than mandating behavior (A), removing ownership from the team (C), or escalating (D).',
  },
  {
    id: 2,
    domain: 'People',
    topic: 'Sponsor Engagement & Change Control',
    prompt:
      'A project sponsor repeatedly contacts project team members directly to add small feature requests without notifying the project manager. This is causing confusion and team overload. What is the most appropriate action for the project manager?',
    options: [
      {
        key: 'a',
        text: 'Instruct team members to ignore all direct requests coming from the sponsor.',
      },
      {
        key: 'b',
        text: "Update the scope baseline immediately to account for the sponsor's new features.",
      },
      {
        key: 'c',
        text: 'Meet with the sponsor to review the change control process and communication plan.',
      },
      {
        key: 'd',
        text: 'Request that the steering committee remove the sponsor from direct project oversight.',
      },
    ],
    correct: 'c',
    explanation:
      'Sponsor requests bypassing the PM need to be addressed by re-establishing the change control process and communication plan directly with the sponsor — instructing the team to ignore the sponsor (A) or unilaterally updating the baseline (B) both sidestep the actual governance conversation needed.',
  },
  {
    id: 3,
    domain: 'People',
    topic: 'Organizational Change Management',
    prompt:
      'An enterprise digital transformation project is intended to streamline operational handoffs. However, internal business units are resisting adoption of the new operating model due to legacy culture. How should the project manager address this organizational challenge?',
    options: [
      {
        key: 'a',
        text: 'Request that executive leadership mandate tool usage across all resistant units.',
      },
      {
        key: 'b',
        text: 'Partner with organizational change managers to execute a structured transition strategy.',
      },
      {
        key: 'c',
        text: 'Focus solely on technical delivery and leave user adoption to functional managers.',
      },
      {
        key: 'd',
        text: 'Extend the testing phase to delay business unit onboarding until resistance stops.',
      },
    ],
    correct: 'b',
    explanation:
      "Cultural resistance to a new operating model is best addressed by partnering with organizational change managers on a structured transition — executive mandates (A) address compliance but not adoption, ignoring adoption entirely (C) guarantees failure, and delaying onboarding (D) doesn't reduce resistance.",
  },
  {
    id: 4,
    domain: 'People',
    topic: 'Team Conflict Resolution',
    prompt:
      'A project manager notices two senior team members are in recurring conflict over technical approaches, causing delays. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Escalate the issue to the sponsor for immediate resolution and direction.',
      },
      {
        key: 'b',
        text: "Facilitate a private discussion to understand each person's underlying concerns.",
      },
      {
        key: 'c',
        text: 'Reassign one of the members to another workstream to reduce friction.',
      },
      {
        key: 'd',
        text: 'Document the conflict in the issue log and monitor for further escalation.',
      },
    ],
    correct: 'b',
    explanation:
      "A recurring technical conflict between two team members starts with a private discussion to understand each person's underlying concerns — escalating immediately (A), reassigning someone (C), or just logging and monitoring it (D) skip direct resolution.",
  },
  {
    id: 5,
    domain: 'People',
    topic: 'Inclusive Communication Norms',
    prompt:
      'A virtual team member from a different time zone feels excluded from informal decision-making happening in chat channels during their offline hours. What should the project manager prioritize?',
    options: [
      {
        key: 'a',
        text: 'Mandate that all decisions be made only in scheduled synchronous meetings.',
      },
      {
        key: 'b',
        text: 'Establish norms for inclusive communication and documented decision logs.',
      },
      {
        key: 'c',
        text: 'Rotate meeting times so everyone occasionally attends outside their hours.',
      },
      {
        key: 'd',
        text: 'Ask the team member to adjust their schedule to align with core hours.',
      },
    ],
    correct: 'b',
    explanation:
      "A remote team member excluded from informal chat decisions needs inclusive communication norms and documented decision logs so decisions aren't made invisibly — mandating only synchronous meetings (A), rotating meeting times (C), or asking the individual to change their schedule (D) don't fix the structural exclusion.",
  },
  {
    id: 6,
    domain: 'People',
    topic: 'Onboarding & Coaching',
    prompt:
      "A new team member joins mid-project and struggles to understand the team's hybrid agile practices, slowing down delivery. What is the most effective response?",
    options: [
      {
        key: 'a',
        text: 'Assign a mentor and provide targeted coaching on team norms and tools.',
      },
      {
        key: 'b',
        text: 'Ask them to study the project charter and process documents independently.',
      },
      {
        key: 'c',
        text: 'Move them to less critical tasks until they become familiar with the workflow.',
      },
      {
        key: 'd',
        text: 'Schedule a formal training session for the entire team on agile practices.',
      },
    ],
    correct: 'a',
    explanation:
      'A new team member unfamiliar with hybrid agile practices benefits most from a mentor and targeted coaching — expecting independent study (B), sidelining them to less critical work (C), or a one-off training session for the whole team (D) are all slower or less targeted.',
  },
  {
    id: 7,
    domain: 'People',
    topic: 'Team Norms & Accountability',
    prompt:
      'A team member consistently delivers high-quality work but frequently misses daily stand-ups, citing "more important work." Morale is beginning to suffer. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Excuse the absences since their output remains consistently high quality.',
      },
      {
        key: 'b',
        text: 'Reinforce the purpose of stand-ups and agree on a sustainable approach.',
      },
      {
        key: 'c',
        text: 'Replace them in stand-ups with a proxy who can report their progress.',
      },
      {
        key: 'd',
        text: 'Escalate to their functional manager to enforce meeting attendance.',
      },
    ],
    correct: 'b',
    explanation:
      "Reinforcing why stand-ups matter and agreeing on a sustainable approach with the team member addresses the norm violation without dismissing quality output — excusing the behavior (A) undermines team norms, using a proxy (C) doesn't solve engagement, and escalating to a functional manager (D) is premature.",
  },
  {
    id: 8,
    domain: 'People',
    topic: 'Technical Conflict Facilitation',
    prompt:
      'A hybrid project is entering a critical integration phase. The solution architect believes the developers are ignoring technical standards, while developers say the architect keeps introducing requirements that were never agreed upon. Their disagreement is beginning to affect sprint commitments. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Ask the sponsor to determine which party has final decision authority.',
      },
      {
        key: 'b',
        text: 'Document both positions and escalate the disagreement through project governance.',
      },
      {
        key: 'c',
        text: 'Facilitate a discussion to identify the conflict source and agree on working boundaries.',
      },
      {
        key: 'd',
        text: 'Allow the team to continue while monitoring whether delivery performance actually deteriorates.',
      },
    ],
    correct: 'c',
    explanation:
      'A standards disagreement between an architect and developers threatening sprint commitments needs facilitated discussion to identify the actual conflict source and agree on working boundaries — deferring to the sponsor for authority (A), documenting and escalating (B), or waiting to see if delivery suffers (D) all avoid direct resolution.',
  },
  {
    id: 9,
    domain: 'People',
    topic: 'Knowledge Transfer & Bus Factor',
    prompt:
      'A highly experienced engineer is the only team member who understands a critical integration component. The engineer consistently meets deadlines but refuses pairing sessions because they believe knowledge transfer will slow development. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Accept the arrangement because the engineer continues meeting project commitments.',
      },
      {
        key: 'b',
        text: 'Require the engineer to prepare detailed documentation before completing further development.',
      },
      {
        key: 'c',
        text: 'Assign another specialist to independently recreate knowledge of the integration component.',
      },
      {
        key: 'd',
        text: 'Establish structured knowledge-sharing activities while protecting essential delivery commitments.',
      },
    ],
    correct: 'd',
    explanation:
      'A single point of failure on a critical component needs structured knowledge-sharing activities built in while still protecting delivery commitments — accepting the risk as-is (A), demanding documentation alone (B), or duplicating the work independently (C) are weaker or more disruptive fixes.',
  },
  {
    id: 10,
    domain: 'People',
    topic: 'Cross-Cultural Communication Norms',
    prompt:
      'Members of a globally distributed project team frequently misunderstand messages sent through group chat. Several people believe colleagues are being dismissive, although interviews suggest differences in communication styles rather than intentional conflict. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Require all important communication to occur through formal written project correspondence.',
      },
      {
        key: 'b',
        text: 'Ask functional managers to resolve communication concerns within their respective locations.',
      },
      {
        key: 'c',
        text: 'Revisit team working agreements and establish communication practices acceptable across cultures.',
      },
      {
        key: 'd',
        text: 'Schedule additional status meetings so misunderstandings can be corrected by the project manager.',
      },
    ],
    correct: 'c',
    explanation:
      "Misread chat messages rooted in differing communication styles call for revisiting team working agreements and establishing communication practices that work across cultures — forcing all communication into formal channels (A), pushing the problem to local managers (B), or adding more meetings (D) don't address the actual style mismatch.",
  },
  {
    id: 11,
    domain: 'People',
    topic: 'Stakeholder Vision Alignment',
    prompt:
      'A new project manager inherits a project midway through delivery. Interviews reveal that the sponsor, product owner, and technical team each describe the intended project outcome differently. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: "Facilitate alignment around the project's desired outcomes and establish a shared vision.",
      },
      {
        key: 'b',
        text: 'Review the schedule baseline and determine which stakeholder interpretation is already reflected.',
      },
      {
        key: 'c',
        text: "Ask the sponsor to issue a formal statement defining the project's expected outcome.",
      },
      {
        key: 'd',
        text: 'Continue delivery until measurable differences among stakeholder expectations become apparent.',
      },
    ],
    correct: 'a',
    explanation:
      "Inheriting a project where sponsor, product owner, and technical team each describe a different outcome calls for facilitating alignment around a shared vision first — reviewing what's already baked into the schedule (B), asking the sponsor to unilaterally declare an outcome (C), or waiting for divergence to become visible in delivery (D) don't resolve the misalignment at its source.",
  },
  {
    id: 12,
    domain: 'People',
    topic: 'Cross-Cultural Facilitation',
    prompt:
      'Distributed team includes members from high-context culture where direct disagreement in groups is disrespectful. During refinement, these members remain silent while others dominate, leading to incomplete requirements. What should project manager do?',
    options: [
      {
        key: 'a',
        text: 'Conduct refinement sessions separately by cultural group to ensure equal voices.',
      },
      {
        key: 'b',
        text: 'Implement structured input techniques and one-on-one interviews to gather perspectives.',
      },
      {
        key: 'c',
        text: 'Appoint external facilitator to manage cross-cultural communication norms.',
      },
      {
        key: 'd',
        text: 'Require all team members to adopt single communication standard.',
      },
    ],
    correct: 'b',
    explanation:
      'Members from a high-context culture staying silent in group refinement are better reached through structured input techniques and one-on-one interviews — separating groups by culture (A) segregates rather than includes, an external facilitator (C) is a bigger intervention than needed, and forcing one communication standard (D) ignores the cultural dynamic entirely.',
  },
  {
    id: 13,
    domain: 'People',
    topic: 'Matrix Team Formation',
    prompt:
      'Newly formed matrix team includes specialists from six departments, each with competing priorities and different terminology. Early collaboration is inefficient. What is most effective intervention?',
    options: [
      {
        key: 'a',
        text: 'Establish shared glossary, working norms, cross-functional accountability early.',
      },
      {
        key: 'b',
        text: 'Assign full-time coordinator to translate between functional groups.',
      },
      {
        key: 'c',
        text: 'Implement hierarchical structure with single functional lead.',
      },
      {
        key: 'd',
        text: 'Require all specialists report to project manager.',
      },
    ],
    correct: 'a',
    explanation:
      'A newly formed cross-departmental team with competing priorities and terminology needs an early shared glossary, working norms, and cross-functional accountability — a full-time translator (B), imposing a hierarchy (C), or requiring everyone to report to the PM (D) are heavier structural changes than the situation calls for.',
  },
  {
    id: 14,
    domain: 'People',
    topic: 'Informal Authority & Governance',
    prompt:
      'Long-tenured technical architect has significant informal influence, often overriding formal governance. Respected but creates bottlenecks. How should project manager address?',
    options: [
      {
        key: 'a',
        text: 'Immediately implement strict change control to eliminate informal authority.',
      },
      {
        key: 'b',
        text: 'Recognize expertise, clarify formal roles, redirect influence through governance.',
      },
      {
        key: 'c',
        text: 'Escalate to management to formally remove informal authority.',
      },
      {
        key: 'd',
        text: 'Work around architect with parallel technical review board.',
      },
    ],
    correct: 'b',
    explanation:
      'An architect whose informal influence overrides governance is best handled by recognizing their expertise while clarifying formal roles and redirecting that influence through governance channels — abruptly imposing strict change control (A), escalating to remove their informal authority (C), or building a parallel review board around them (D) are more disruptive than necessary.',
  },
  {
    id: 15,
    domain: 'People',
    topic: 'Standard Adoption & Buy-in',
    prompt:
      'High-performing independent engineer resists organization-wide quality standard, argues it will slow innovation. Past record supports confidence but team cohesion requires consistency. What should project manager do?',
    options: [
      {
        key: 'a',
        text: 'Make exception to maintain productivity.',
      },
      {
        key: 'b',
        text: 'Engage engineer in designing how standard adapts without sacrificing innovation.',
      },
      {
        key: 'c',
        text: 'Enforce standard uniformly; document non-compliance.',
      },
      {
        key: 'd',
        text: 'Escalate to quality office on standard necessity.',
      },
    ],
    correct: 'b',
    explanation:
      'An engineer resisting a quality standard is better engaged by involving them in designing how the standard adapts without sacrificing innovation — granting an exception (A) undermines consistency, blanket enforcement (C) ignores their legitimate concern, and escalating to the quality office (D) skips direct engagement first.',
  },
  {
    id: 16,
    domain: 'People',
    topic: 'Performance Coaching',
    prompt:
      'A team member frequently misses deadlines. As a project manager, what should you do first?',
    options: [
      {
        key: 'a',
        text: 'Escalate to the sponsor',
      },
      {
        key: 'b',
        text: 'Address the issue privately with the team member',
      },
      {
        key: 'c',
        text: 'Reassign the tasks',
      },
      {
        key: 'd',
        text: 'Document the issue in lessons learned',
      },
    ],
    correct: 'b',
    explanation:
      'Private dialogue identifies root causes and preserves morale.',
  },
  {
    id: 17,
    domain: 'People',
    topic: 'Conflict Resolution',
    prompt:
      'You notice conflict between two team members during a sprint. What is your best response?',
    options: [
      {
        key: 'a',
        text: 'Replace one team member',
      },
      {
        key: 'b',
        text: 'Facilitate a discussion to resolve the conflict',
      },
      {
        key: 'c',
        text: 'Escalate to HR immediately',
      },
      {
        key: 'd',
        text: 'Ignore unless it impacts work',
      },
    ],
    correct: 'b',
    explanation: 'Mediation preserves teamwork and resolves root issues.',
  },
  {
    id: 18,
    domain: 'People',
    topic: 'Psychological Safety',
    prompt:
      'During a team retrospective, members hesitate to share issues. What should you do?',
    options: [
      {
        key: 'a',
        text: 'Skip the session',
      },
      {
        key: 'b',
        text: 'Encourage open discussion by setting a safe environment',
      },
      {
        key: 'c',
        text: 'Report non-participation to HR',
      },
      {
        key: 'd',
        text: 'Extend the project schedule',
      },
    ],
    correct: 'b',
    explanation:
      'Psychological safety enables honest feedback for improvement.',
  },
  {
    id: 19,
    domain: 'People',
    topic: 'Change Control Discipline',
    prompt:
      'A senior stakeholder asks for major scope change without following change control. How should you respond?',
    options: [
      {
        key: 'a',
        text: 'Accept to maintain stakeholder satisfaction',
      },
      {
        key: 'b',
        text: 'Add it to the backlog and review formally',
      },
      {
        key: 'c',
        text: 'Escalate immediately to the sponsor',
      },
      {
        key: 'd',
        text: 'Reject without explanation',
      },
    ],
    correct: 'b',
    explanation: 'Formal change control maintains project stability.',
  },
  {
    id: 20,
    domain: 'People',
    topic: 'Stakeholder Vision Alignment',
    prompt:
      'A hybrid project is six weeks into execution. The sponsor believes success means launching all planned features by December, while the product owner believes success means achieving a 20% increase in customer adoption even if several features are deferred. Team members are receiving conflicting priorities. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: "Ask the sponsor to define the project's success criteria",
      },
      {
        key: 'b',
        text: 'Facilitate a discussion between key stakeholders to establish a shared project vision',
      },
      {
        key: 'c',
        text: "Tell the team to follow the product owner's priorities because value is more important than scope",
      },
      {
        key: 'd',
        text: 'Document both definitions of success in the stakeholder register',
      },
    ],
    correct: 'b',
    explanation:
      'Conflicting stakeholder definitions of success must be reconciled through facilitated alignment before the team can execute confidently — unilaterally picking a side or merely documenting the conflict leaves it unresolved.',
  },
  {
    id: 21,
    domain: 'People',
    topic: 'Team Empowerment',
    prompt:
      'An agile team relies heavily on one senior engineer who makes nearly every technical decision. The engineer is becoming overloaded, and team members wait for approval rather than solving problems themselves. What is the best action for the project manager?',
    options: [
      {
        key: 'a',
        text: 'Request another senior engineer',
      },
      {
        key: 'b',
        text: 'Empower the team to make appropriate decisions and distribute knowledge and responsibility',
      },
      {
        key: 'c',
        text: 'Give the engineer formal authority over the entire technical team',
      },
      {
        key: 'd',
        text: "Escalate the engineer's workload to the sponsor",
      },
    ],
    correct: 'b',
    explanation:
      'Servant leadership means building team self-sufficiency and distributing decision-making, not adding headcount or further centralizing authority.',
  },
  {
    id: 22,
    domain: 'People',
    topic: 'Value-Based Prioritization',
    prompt:
      'A sponsor expects a digital product to contain twelve major capabilities at launch. Customer research now shows that four capabilities would generate most of the expected business value and could be released three months earlier. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Continue delivering all twelve because the sponsor originally approved them',
      },
      {
        key: 'b',
        text: 'Facilitate a discussion about expectations, value and desired outcomes with the stakeholders',
      },
      {
        key: 'c',
        text: 'Remove the lower-value capabilities from scope immediately',
      },
      {
        key: 'd',
        text: 'Ask the development team to work overtime and deliver all twelve earlier',
      },
    ],
    correct: 'b',
    explanation:
      'New value data should prompt a stakeholder conversation to realign expectations, not a unilateral scope cut or a blind commitment to the original plan.',
  },
  {
    id: 23,
    domain: 'Process',
    topic: 'AI-Assisted Forecasting Validation',
    prompt:
      "A project manager is leveraging a predictive AI tool to analyze historical sprint data and forecast team velocity for an upcoming initiative. However, several senior team members distrust the AI model's output and refuse to commit to the projected iteration targets. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Override team estimates and enforce the AI projections to ensure data-driven delivery.',
      },
      {
        key: 'b',
        text: 'Disable the AI forecasting model to maintain high team morale and trust.',
      },
      {
        key: 'c',
        text: "Facilitate a session to review the AI model's training data alongside team metrics.",
      },
      {
        key: 'd',
        text: 'Request that the project sponsor mandate adherence to the new AI planning framework.',
      },
    ],
    correct: 'c',
    explanation:
      "When the team distrusts an AI forecast, the resolution is transparency — reviewing the model's training data alongside the team's own metrics builds trust and surfaces whether the distrust is warranted, rather than overriding the team (A), abandoning the tool (B), or forcing compliance via the sponsor (D).",
  },
  {
    id: 24,
    domain: 'Process',
    topic: 'Hybrid Dependency Management',
    prompt:
      'A project delivered under a hybrid framework is experiencing significant delays. The hardware component follows a predictive waterfall lifecycle, while the software integration follows user stories in 2-week iterations. Hardware delays are now blocking software deployments. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Transition the software component entirely to a waterfall schedule to align dates.',
      },
      {
        key: 'b',
        text: 'Re-baseline the hardware milestone dates without consulting the software engineers.',
      },
      {
        key: 'c',
        text: 'Analyze interdependencies and establish joint release planning sessions across streams.',
      },
      {
        key: 'd',
        text: 'Fast-track the hardware testing phase by skipping non-essential safety checks.',
      },
    ],
    correct: 'c',
    explanation:
      "When a predictive hardware stream blocks an agile software stream, the fix is analyzing the interdependencies and establishing joint release planning across both — forcing one side to adopt the other's cadence (A) or skipping safety checks (D) misapplies tailoring, and silently re-baselining one team's dates (B) ignores the cross-team dependency.",
  },
  {
    id: 25,
    domain: 'Process',
    topic: 'Change Impact Evaluation',
    prompt:
      "A key stakeholder requests a major scope modification during the execution phase of a predictive project. The stakeholder claims this feature is essential for business viability. What is the project manager's immediate step?",
    options: [
      {
        key: 'a',
        text: 'Implement the change immediately to maintain strong stakeholder alignment.',
      },
      {
        key: 'b',
        text: 'Reject the change request because the project scope baseline has already been approved.',
      },
      {
        key: 'c',
        text: 'Evaluate the potential impact of the proposed change across all project constraints.',
      },
      {
        key: 'd',
        text: 'Escalate the request directly to the change control board without prior evaluation.',
      },
    ],
    correct: 'c',
    explanation:
      'Any scope change request — even one framed as business-critical — needs impact evaluation across all constraints before a decision is made, rather than approving it outright (A), rejecting it on baseline grounds alone (B), or escalating without first doing that analysis (D).',
  },
  {
    id: 26,
    domain: 'Process',
    topic: 'Technical Debt Backlog Management',
    prompt:
      'During sprint execution, the development team identifies an architectural technical debt issue that, if left unaddressed, will severely slow down future feature releases. How should the product owner and team handle this issue?',
    options: [
      {
        key: 'a',
        text: 'Refactor the architecture immediately, pushing all sprint committed user stories to next sprint.',
      },
      {
        key: 'b',
        text: 'Add the technical debt item to the product backlog for refinement and prioritization.',
      },
      {
        key: 'c',
        text: 'Request additional budget to hire external specialists to fix the technical debt.',
      },
      {
        key: 'd',
        text: 'Ignore the debt issue until all functional business features have been fully delivered.',
      },
    ],
    correct: 'b',
    explanation:
      'Mid-sprint technical debt discoveries go into the backlog for refinement and prioritization rather than disrupting the current sprint commitment (A), requesting unplanned budget (C), or deferring indefinitely (D).',
  },
  {
    id: 27,
    domain: 'Process',
    topic: 'Proactive Risk Response Planning',
    prompt:
      'A multi-million dollar construction project requires long-lead raw materials. The vendor baseline schedule indicates potential shipping bottlenecks due to geopolitical tensions. How should the project manager proactively manage this exposure?',
    options: [
      {
        key: 'a',
        text: 'Purchase all raw materials immediately using emergency management reserve funds.',
      },
      {
        key: 'b',
        text: 'Update the risk register and develop response strategies with key procurement staff.',
      },
      {
        key: 'c',
        text: 'Cancel the contract with the primary vendor and re-tender the procurement package.',
      },
      {
        key: 'd',
        text: 'Transfer the entire supply chain risk to the end customer via a contract addendum.',
      },
    ],
    correct: 'b',
    explanation:
      'A geopolitical shipping risk should be formally captured in the risk register with response strategies developed alongside procurement — buying everything immediately (A), canceling the vendor relationship (C), or fully offloading the risk contractually (D) are all premature, disproportionate reactions.',
  },
  {
    id: 28,
    domain: 'Process',
    topic: 'Scope-Schedule-Cost Trade-off Analysis',
    prompt:
      "To meet the data privacy regulations, the agile product owner adds several complex compliance features to the product backlog. The executive sponsor, concerned about potential delivery delays, demands that the project team incorporate these compliance stories without altering the final target release date or increasing funding. What is the project manager's correct approach?",
    options: [
      {
        key: 'a',
        text: "Accept the sponsor's mandate and instruct the team to work overtime to deliver the complete scope on time.",
      },
      {
        key: 'b',
        text: 'Perform a trade-off analysis on existing backlog items and present delivery scenarios to the sponsor.',
      },
      {
        key: 'c',
        text: 'Refuse to add the regulatory stories and proceed with the original baseline schedule and scope targets.',
      },
      {
        key: 'd',
        text: "Escalate the sponsor's behavior to the governance board for violating agile principles and sponsor standards.",
      },
    ],
    correct: 'b',
    explanation:
      "A sponsor demanding new compliance scope with no schedule or budget change calls for a trade-off analysis on the existing backlog and presenting delivery scenarios — silently absorbing it via overtime (A), refusing the mandatory regulatory work (C), or escalating the sponsor's behavior instead of solving the problem (D) don't give the sponsor the information needed to decide.",
  },
  {
    id: 29,
    domain: 'Process',
    topic: 'Schedule Impact Analysis',
    prompt:
      'Midway through execution, a critical vendor informs the project manager of a potential two-week delay due to supply chain issues. The schedule has minimal float. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Update the schedule baseline to reflect the anticipated vendor delay.',
      },
      {
        key: 'b',
        text: 'Analyze schedule impacts and evaluate options such as fast-tracking.',
      },
      {
        key: 'c',
        text: 'Escalate to the sponsor to request additional budget for alternatives.',
      },
      {
        key: 'd',
        text: 'Instruct the vendor to absorb the delay to avoid impacting the project.',
      },
    ],
    correct: 'b',
    explanation:
      "A vendor delay against minimal float calls for analyzing the schedule impact and evaluating options like fast-tracking before committing to any specific fix — updating the baseline (A) is premature, escalating for budget (C) assumes a solution before analysis, and unilaterally instructing the vendor to absorb the delay (D) isn't realistic.",
  },
  {
    id: 30,
    domain: 'Process',
    topic: 'Qualitative Risk Analysis',
    prompt:
      'During risk identification, the team uncovers a high-impact, low-probability regulatory risk that could halt the project. There is no historical data to quantify it reliably. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Accept the risk since its probability is low and data is insufficient.',
      },
      {
        key: 'b',
        text: 'Perform qualitative analysis and plan a contingency response strategy.',
      },
      {
        key: 'c',
        text: 'Escalate the risk immediately to the board for strategic direction.',
      },
      {
        key: 'd',
        text: 'Ignore the risk until more data becomes available in later phases.',
      },
    ],
    correct: 'b',
    explanation:
      'A high-impact, low-probability risk with no historical data still needs a qualitative analysis and a contingency response plan — accepting it outright (A) or ignoring it (D) leave the project exposed, and escalating to the board before any analysis (C) is premature.',
  },
  {
    id: 31,
    domain: 'Process',
    topic: 'Estimate Refinement',
    prompt:
      'A key deliverable requires integration with a legacy system that has limited documentation. The team is underestimating the effort, and early spikes show higher complexity. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Lock the estimates to maintain stakeholder confidence in the plan.',
      },
      {
        key: 'b',
        text: 'Re-estimate using data from spikes and adjust plans and expectations.',
      },
      {
        key: 'c',
        text: 'Add a large management reserve to cover unknown integration issues.',
      },
      {
        key: 'd',
        text: 'Proceed with original estimates and address overruns as they occur.',
      },
    ],
    correct: 'b',
    explanation:
      "Once spikes reveal higher-than-expected complexity, the estimates should be revised using that new data and expectations reset accordingly — locking the original estimate (A) or proceeding unchanged (D) ignore new evidence, and just padding reserve (C) doesn't correct the underlying estimate.",
  },
  {
    id: 32,
    domain: 'Process',
    topic: 'Phase Gate Governance',
    prompt:
      'In a multi-phase project, phase gate reviews are becoming ceremonial, with issues consistently deferred to "the next phase." Quality is slipping. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Strengthen exit criteria and enforce objective evidence for phase gates.',
      },
      {
        key: 'b',
        text: 'Reduce the number of phase gates to streamline delivery and momentum.',
      },
      {
        key: 'c',
        text: 'Allow teams to self-certify phase completion to increase ownership.',
      },
      {
        key: 'd',
        text: 'Move all quality checks to the final phase to avoid repeated reviews.',
      },
    ],
    correct: 'a',
    explanation:
      'Ceremonial phase gates that defer issues need strengthened exit criteria and objective evidence requirements — reducing the number of gates (B), allowing self-certification (C), or pushing all quality checks to the end (D) would make the underlying problem worse.',
  },
  {
    id: 33,
    domain: 'Process',
    topic: 'AI Bias Risk Management',
    prompt:
      'An AI-powered analytics platform is proposed to optimize resource allocation across projects in the program. Early pilots show improved utilization but also reveal biased recommendations against certain teams due to historical data patterns. Some team leads are concerned about fairness and transparency. What should you do?',
    options: [
      {
        key: 'a',
        text: 'Proceed with rollout but add a disclaimer that recommendations may be biased.',
      },
      {
        key: 'b',
        text: 'Pause rollout, investigate bias sources, and define guardrails before scaling.',
      },
      {
        key: 'c',
        text: 'Limit AI use to senior managers only to reduce exposure and complaints.',
      },
      {
        key: 'd',
        text: 'Abandon the AI platform and revert to manual resource allocation methods.',
      },
    ],
    correct: 'b',
    explanation:
      "Discovering biased recommendations in an AI resource-allocation tool calls for pausing rollout, investigating the bias sources, and defining guardrails before scaling further — proceeding with a disclaimer (A) or restricting use to managers (C) don't fix the bias, and abandoning the platform entirely (D) is an overcorrection before investigation.",
  },
  {
    id: 34,
    domain: 'Process',
    topic: 'Change Request Process',
    prompt:
      'A predictive project is six months into execution when a customer identifies a feature that could significantly improve operational efficiency. The feature is outside the approved scope baseline. What should the project manager do next?',
    options: [
      {
        key: 'a',
        text: 'Reject the feature because incorporating it would invalidate the approved scope baseline.',
      },
      {
        key: 'b',
        text: 'Assess its impacts and submit the request through the established change process.',
      },
      {
        key: 'c',
        text: 'Ask the delivery team to implement the feature using available schedule contingency.',
      },
      {
        key: 'd',
        text: 'Add the feature to the lessons learned register for consideration after project closure.',
      },
    ],
    correct: 'b',
    explanation:
      'An out-of-scope but valuable feature identified mid-execution should be assessed for impact and submitted through the established change process — rejecting it outright (A), implementing it opportunistically using contingency (C), or deferring it to a lessons-learned register after closure (D) all bypass proper change control.',
  },
  {
    id: 35,
    domain: 'Process',
    topic: 'Contract & Acceptance Criteria Review',
    prompt:
      "A vendor working under a fixed-price agreement misses a major milestone. The vendor argues that the customer's acceptance criteria were ambiguous, while the project team believes the criteria were sufficiently documented. What should the project manager do first?",
    options: [
      {
        key: 'a',
        text: 'Apply contractual penalties because the vendor failed to achieve the agreed milestone.',
      },
      {
        key: 'b',
        text: 'Replace the vendor if another supplier can meet the remaining delivery schedule.',
      },
      {
        key: 'c',
        text: 'Review the agreement and acceptance criteria before determining corrective contractual action.',
      },
      {
        key: 'd',
        text: 'Submit a change request extending the milestone because both parties share responsibility.',
      },
    ],
    correct: 'c',
    explanation:
      "A milestone dispute over ambiguous acceptance criteria should start with reviewing the agreement and criteria themselves before any corrective action — applying penalties (A) or replacing the vendor (B) presume fault prematurely, and extending the milestone by change request (D) sidesteps clarifying who's actually responsible.",
  },
  {
    id: 36,
    domain: 'Process',
    topic: 'Residual Risk Management',
    prompt:
      "A project team executes an approved response to a significant schedule risk. After the response is completed, the residual exposure remains above the organization's approved risk threshold. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Reassess the exposure, update risk information, and escalate according to governance thresholds.',
      },
      {
        key: 'b',
        text: 'Close the original risk because its approved response has already been fully implemented.',
      },
      {
        key: 'c',
        text: 'Transfer the remaining exposure immediately without evaluating feasibility or response cost.',
      },
      {
        key: 'd',
        text: 'Increase contingency reserves and continue execution without involving project governance.',
      },
    ],
    correct: 'a',
    explanation:
      'When a completed risk response still leaves exposure above the approved threshold, the PM should reassess the exposure, update the risk information, and escalate per governance thresholds — simply closing the risk because a response was executed (B), transferring exposure without evaluation (C), or just padding reserves without involving governance (D) leave the threshold breach unaddressed.',
  },
  {
    id: 37,
    domain: 'Process',
    topic: 'Incremental Delivery Restructuring',
    prompt:
      'A hybrid project originally planned to deliver its complete solution after twelve months. Customer feedback indicates that several capabilities could generate substantial benefits much earlier. What should the project manager recommend?',
    options: [
      {
        key: 'a',
        text: 'Maintain the original release because changing delivery cadence creates additional project risk.',
      },
      {
        key: 'b',
        text: 'Transfer unfinished capabilities to operations so benefits can begin before project completion.',
      },
      {
        key: 'c',
        text: 'Shorten the project schedule by adding resources to every remaining development activity.',
      },
      {
        key: 'd',
        text: 'Restructure delivery into useful increments while preserving necessary governance and integration controls.',
      },
    ],
    correct: 'd',
    explanation:
      "Customer feedback suggesting earlier value calls for restructuring delivery into useful increments while preserving necessary governance and integration controls — keeping the original single release (A), transferring unfinished work to operations prematurely (B), or just adding resources to every remaining activity (C) don't restructure delivery to capture that earlier value properly.",
  },
  {
    id: 38,
    domain: 'Process',
    topic: 'Contract Type Selection',
    prompt:
      'An organization is contracting a specialist vendor to build an experimental AI prototype. Requirements will evolve through experimentation, and neither party can reliably estimate the final amount of work. Which contracting approach is most appropriate?',
    options: [
      {
        key: 'a',
        text: 'Use a firm-fixed-price contract with complete delivery responsibility assigned to the vendor.',
      },
      {
        key: 'b',
        text: 'Use time-and-materials with a ceiling and frequent reviews of cost and progress.',
      },
      {
        key: 'c',
        text: 'Use a fixed-price-incentive contract tied primarily to the initial estimated delivery date.',
      },
      {
        key: 'd',
        text: 'Use a purchase order defining the entire prototype as a single predetermined deliverable.',
      },
    ],
    correct: 'b',
    explanation:
      "Evolving, hard-to-estimate experimental work is best matched to time-and-materials with a ceiling and frequent reviews — a firm-fixed-price (A) or fixed-price-incentive (C) contract assumes a well-defined scope this work doesn't have, and a single predetermined-deliverable purchase order (D) doesn't fit exploratory work either.",
  },
  {
    id: 39,
    domain: 'Process',
    topic: 'Schedule Compression Strategy',
    prompt:
      'Originally 18-month project faces hard external deadline six months earlier. Removing float insufficient. Which approach should project manager recommend?',
    options: [
      {
        key: 'a',
        text: 'Crash critical path by adding resources equally to predictive and agile.',
      },
      {
        key: 'b',
        text: 'Analyze dependencies and value; restructure into concurrent increments.',
      },
      {
        key: 'c',
        text: 'Reduce scope uniformly across all deliverables.',
      },
      {
        key: 'd',
        text: 'Request waiver from external deadline.',
      },
    ],
    correct: 'b',
    explanation:
      "A hard deadline six months earlier with insufficient float calls for analyzing dependencies and value to restructure delivery into concurrent increments — crashing everything equally (A) is blunt and costly, uniform scope cuts (C) ignore value differences, and requesting a waiver (D) doesn't solve the delivery problem.",
  },
  {
    id: 40,
    domain: 'Process',
    topic: 'Vendor Invoice Validation',
    prompt:
      'Vendor under time-and-materials submits invoices showing 20% more hours than independent estimate. Work appears complete but hour discrepancy concerning. What should project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Approve invoice; investigate discrepancy at next reconciliation.',
      },
      {
        key: 'b',
        text: 'Reject invoice entirely; demand revised submission.',
      },
      {
        key: 'c',
        text: 'Review contractual terms, scope, detailed timesheets to validate.',
      },
      {
        key: 'd',
        text: 'Escalate to procurement for formal audit.',
      },
    ],
    correct: 'c',
    explanation:
      'A 20%-hours discrepancy on a time-and-materials invoice should be checked against the contract terms, scope, and detailed timesheets before any decision — approving now and investigating later (A), outright rejecting the invoice (B), or escalating straight to a formal audit (D) skip the direct verification step.',
  },
  {
    id: 41,
    domain: 'Process',
    topic: 'Earned Value Forecasting (EAC)',
    prompt:
      'Predictive project: EV = $500K, PV = $550K, AC = $520K at 50% completion. Original budget $1M. Will project complete within budget?',
    options: [
      {
        key: 'a',
        text: 'Yes, current spending below budget; halfway through.',
      },
      {
        key: 'b',
        text: 'Likely no; trends suggest final cost near $1.04M.',
      },
      {
        key: 'c',
        text: 'Yes; cost variance minimal; schedule can be recovered.',
      },
      {
        key: 'd',
        text: 'Uncertain; additional risk analysis needed.',
      },
    ],
    correct: 'b',
    explanation:
      "CPI = EV/AC = 500/520 ≈ 0.96, so EAC = BAC/CPI ≈ $1,000,000/0.96 ≈ $1.04M — trending over the $1M budget, so the honest answer is likely no, not that spending is fine (A) or that cost variance is minimal and schedule recoverable (C), and there's enough data here to say more than 'uncertain' (D).",
  },
  {
    id: 42,
    domain: 'Process',
    topic: 'Unauthorized Baseline Deviation',
    prompt:
      'Critical dependency in network diagram informally removed during execution without baseline update. Creates schedule risk. What should be done immediately?',
    options: [
      {
        key: 'a',
        text: 'Retroactively update baseline to reflect actual dependency structure.',
      },
      {
        key: 'b',
        text: 'Analyze impacts, submit change request, restore dependency or mitigate risk.',
      },
      {
        key: 'c',
        text: 'Document informal change in lessons learned; continue with current schedule.',
      },
      {
        key: 'd',
        text: 'Escalate to CCB on original dependency validity.',
      },
    ],
    correct: 'b',
    explanation:
      "An informally removed dependency creating schedule risk needs its impacts analyzed and a proper change request to restore the dependency or mitigate the risk — retroactively updating the baseline to match reality (A) legitimizes an unauthorized change, just logging it for lessons learned (C) leaves the risk live, and escalating to question the dependency's original validity (D) doesn't address the current risk.",
  },
  {
    id: 43,
    domain: 'Process',
    topic: 'Scope Decomposition (WBS)',
    prompt: 'What is the primary purpose of a Work Breakdown Structure (WBS)?',
    options: [
      {
        key: 'a',
        text: 'Sequence project activities',
      },
      {
        key: 'b',
        text: 'Define deliverables and project scope',
      },
      {
        key: 'c',
        text: 'Estimate costs',
      },
      {
        key: 'd',
        text: 'Track risks',
      },
    ],
    correct: 'b',
    explanation: 'WBS decomposes scope into smaller, manageable tasks.',
  },
  {
    id: 44,
    domain: 'Process',
    topic: 'Risk Response Strategies',
    prompt:
      "You identify a risk with high probability and high impact. What's the best response?",
    options: [
      {
        key: 'a',
        text: 'Accept it',
      },
      {
        key: 'b',
        text: 'Mitigate it',
      },
      {
        key: 'c',
        text: 'Transfer it',
      },
      {
        key: 'd',
        text: 'Avoid it',
      },
    ],
    correct: 'b',
    explanation: 'Mitigation proactively reduces likelihood or impact.',
  },
  {
    id: 45,
    domain: 'Process',
    topic: 'Cost Estimating Techniques',
    prompt:
      'What is the best method for estimating project costs when historical data is available?',
    options: [
      {
        key: 'a',
        text: 'Parametric estimation',
      },
      {
        key: 'b',
        text: 'Bottom-up estimation',
      },
      {
        key: 'c',
        text: 'Three-point estimation',
      },
      {
        key: 'd',
        text: 'Reserve analysis',
      },
    ],
    correct: 'a',
    explanation: 'Parametric estimation leverages data-driven models.',
  },
  {
    id: 46,
    domain: 'Process',
    topic: 'Quality Root-Cause Analysis',
    prompt: 'What tool is best for identifying root causes of quality issues?',
    options: [
      {
        key: 'a',
        text: 'Pareto chart',
      },
      {
        key: 'b',
        text: 'Fishbone diagram',
      },
      {
        key: 'c',
        text: 'Gantt chart',
      },
      {
        key: 'd',
        text: 'Control chart',
      },
    ],
    correct: 'b',
    explanation: 'Fishbone diagrams systematically identify root causes.',
  },
  {
    id: 47,
    domain: 'Process',
    topic: 'Project Charter',
    prompt: 'Which document formally authorizes a project?',
    options: [
      {
        key: 'a',
        text: 'Project Charter',
      },
      {
        key: 'b',
        text: 'Statement of Work',
      },
      {
        key: 'c',
        text: 'Business Case',
      },
      {
        key: 'd',
        text: 'Scope Statement',
      },
    ],
    correct: 'a',
    explanation: 'The Project Charter officially authorizes a project.',
  },
  {
    id: 48,
    domain: 'Process',
    topic: 'Earned Value (Combined CPI/SPI)',
    prompt: 'A project has CPI = 1.2 and SPI = 0.9. What does this mean?',
    options: [
      {
        key: 'a',
        text: 'Under budget, ahead of schedule',
      },
      {
        key: 'b',
        text: 'Over budget, behind schedule',
      },
      {
        key: 'c',
        text: 'Under budget, behind schedule',
      },
      {
        key: 'd',
        text: 'Over budget, ahead of schedule',
      },
    ],
    correct: 'c',
    explanation:
      'CPI > 1 = cost efficiency (under budget); SPI < 1 = delays (behind).',
  },
  {
    id: 49,
    domain: 'Process',
    topic: 'Sprint Goal Protection',
    prompt:
      'During an active sprint, an important customer suggests a useful new feature. There is no urgent defect or regulatory reason to change the sprint goal. What should the project manager or agile leader encourage?',
    options: [
      {
        key: 'a',
        text: 'Add the feature immediately because the customer has high influence',
      },
      {
        key: 'b',
        text: 'Evaluate and prioritize the feature through the product backlog for future work',
      },
      {
        key: 'c',
        text: 'Extend the sprint so the team can complete the feature',
      },
      {
        key: 'd',
        text: 'Submit the request to a change control board',
      },
    ],
    correct: 'b',
    explanation:
      'Protect the current sprint goal — new ideas without urgency go through normal backlog refinement and prioritization, not mid-sprint injection or scope extension.',
  },
  {
    id: 50,
    domain: 'Process',
    topic: 'Resource Optimization',
    prompt:
      "A project requires an AI specialist for several upcoming activities. Only one specialist is available and three project teams need that person's skills during the same month. What should the project manager do first?",
    options: [
      {
        key: 'a',
        text: 'Reserve the specialist for the highest-budget project',
      },
      {
        key: 'b',
        text: 'Analyze resource demand, dependencies and available alternatives across the affected work',
      },
      {
        key: 'c',
        text: 'Hire a consultant without reviewing the budget',
      },
      {
        key: 'd',
        text: 'Delay the project by one month',
      },
    ],
    correct: 'b',
    explanation:
      'Resolving a shared-resource conflict starts with analyzing demand, dependencies and alternatives across all affected work, not an arbitrary priority rule or an unbudgeted hire.',
  },
  {
    id: 51,
    domain: 'Process',
    topic: 'Cost Forecasting & Reserve Management',
    prompt:
      'A predictive project has spent 70% of its budget while completing only 55% of the planned work. The project manager also learns that an identified risk may require part of the contingency reserve. What should the project manager do next?',
    options: [
      {
        key: 'a',
        text: 'Immediately request additional funding',
      },
      {
        key: 'b',
        text: 'Analyze financial performance, forecast remaining needs and manage reserves according to governance rules',
      },
      {
        key: 'c',
        text: 'Use management reserve to eliminate the cost variance',
      },
      {
        key: 'd',
        text: 'Reduce quality requirements to protect the budget',
      },
    ],
    correct: 'b',
    explanation:
      'A negative cost variance calls for a proper forecast and reserve analysis under existing governance before requesting funds, tapping reserves outside their intended purpose, or cutting quality.',
  },
  {
    id: 52,
    domain: 'Process',
    topic: 'Agile Forecasting',
    prompt:
      'An agile team is asked to provide a six-month schedule. Detailed requirements for later iterations are not yet known, but the team has reliable historical velocity information. What is the best approach?',
    options: [
      {
        key: 'a',
        text: 'Create detailed task-level estimates for all six months',
      },
      {
        key: 'b',
        text: 'Forecast future work using available backlog information, historical performance and appropriate adaptive estimation',
      },
      {
        key: 'c',
        text: 'Refuse to provide any schedule because agile projects cannot be forecast',
      },
      {
        key: 'd',
        text: 'Convert story points directly into hours',
      },
    ],
    correct: 'b',
    explanation:
      "Agile long-range forecasting uses known backlog items plus historical velocity to produce a reliable range forecast — detailed task estimates for unknown future work aren't credible, and agile teams can and should still forecast.",
  },
  {
    id: 53,
    domain: 'Business Environment',
    topic: 'Strategic Alignment Reassessment',
    prompt:
      'A corporate strategy update shifts organizational priority toward environmental sustainability. The project manager is leading an ongoing product development initiative that relies on non-recyclable materials. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Continue execution as planned since the project charter was approved before the shift.',
      },
      {
        key: 'b',
        text: 'Assess the alignment of project deliverables against the updated strategic goals.',
      },
      {
        key: 'c',
        text: 'Terminate the project immediately to prevent further non-sustainable expenditures.',
      },
      {
        key: 'd',
        text: 'Replace the material specs without conducting impact assessments or baseline changes.',
      },
    ],
    correct: 'b',
    explanation:
      'A shift in organizational strategy calls for assessing how current deliverables align with the new goals — continuing unchanged (A) ignores the shift, termination (C) is premature without an assessment, and changing specs without impact analysis (D) skips proper governance.',
  },
  {
    id: 54,
    domain: 'Business Environment',
    topic: 'Governance & Compliance Audit Response',
    prompt:
      "During an audit, an external governing body determines that a project's safety governance processes do not comply with recently updated national standards. What is the most appropriate initial response by the project manager?",
    options: [
      {
        key: 'a',
        text: "Challenge the audit findings based on the project's historical safety record.",
      },
      {
        key: 'b',
        text: 'Update the governance framework and submit a change request for compliance adjustments.',
      },
      {
        key: 'c',
        text: 'Request a waiver from the regulatory body to bypass updated safety standards.',
      },
      {
        key: 'd',
        text: 'Reallocate funds from contingency reserves to pay the audit compliance penalties.',
      },
    ],
    correct: 'b',
    explanation:
      "An audit finding of non-compliance calls for updating the governance framework and submitting a change request to close the gap — disputing the findings (A), seeking a waiver (C), or just paying penalties from reserves (D) don't fix the underlying non-compliance.",
  },
  {
    id: 55,
    domain: 'Business Environment',
    topic: 'Benefits Realization & Phase Closure',
    prompt:
      'Project Titan successfully navigates the regulatory changes and completes joint testing. The hardware and software components meet all technical specifications outlined in the scope baseline. However, during phase-gate review, the operations business lead notes that system throughput is only 80% of the operational cost-benefit baseline promised in the business case. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Delay phase sign-off and re-engineer the system hardware until 100% throughput target is achieved.',
      },
      {
        key: 'b',
        text: 'Close the phase after documenting actual benefit metrics and transitioning operational risks to business owners.',
      },
      {
        key: 'c',
        text: 'Modify the original business case metrics to match current system performance data prior to closing.',
      },
      {
        key: 'd',
        text: 'Refuse project closure and request budget approval to initiate a complete re-baseline of the initiative.',
      },
    ],
    correct: 'b',
    explanation:
      "Meeting the scope baseline's technical specs doesn't guarantee the business case's benefits — the PM should close the phase after documenting the actual benefit metrics and transitioning the operational shortfall to the business owners, rather than blocking closure to chase 100% throughput (A), rewriting the business case to match reality (C), or demanding a full re-baseline (D).",
  },
  {
    id: 56,
    domain: 'Business Environment',
    topic: 'Benefits Realization Mapping',
    prompt:
      'Senior leadership asks the project manager to demonstrate how the project contributes to organizational strategic goals, as part of a portfolio review. What should the project manager prepare?',
    options: [
      {
        key: 'a',
        text: 'A detailed Gantt chart showing all tasks and dependencies in the plan.',
      },
      {
        key: 'b',
        text: 'A benefits realization map linking deliverables to strategic outcomes.',
      },
      {
        key: 'c',
        text: 'A cost performance report showing variance against the cost baseline.',
      },
      {
        key: 'd',
        text: 'A risk register highlighting all high-priority risks and responses.',
      },
    ],
    correct: 'b',
    explanation:
      "To show how a project contributes to strategic goals, a benefits realization map linking deliverables to outcomes is the right artifact — a Gantt chart (A), cost report (C), or risk register (D) don't speak to strategic value.",
  },
  {
    id: 57,
    domain: 'Business Environment',
    topic: 'Program-Level Regulatory Compliance',
    prompt:
      'Six months into the program, a new regulation requires additional data retention and audit capabilities that were not in the original scope. Several agile teams have already built components that do not comply. The predictive workstreams are mid-execution with baselined designs. The steering committee is concerned about cost, schedule, and compliance risk. What should you do first?',
    options: [
      {
        key: 'a',
        text: 'Halt all development until legal finalizes a complete compliance blueprint.',
      },
      {
        key: 'b',
        text: 'Assess regulatory gaps, quantify impacts, and initiate integrated change control.',
      },
      {
        key: 'c',
        text: 'Instruct agile teams to retrofit compliance features while continuing delivery.',
      },
      {
        key: 'd',
        text: 'Escalate to the sponsor to request additional budget before taking action.',
      },
    ],
    correct: 'b',
    explanation:
      'A new regulation affecting both agile and predictive workstreams differently needs a proper gap assessment, impact quantification, and integrated change control — halting everything for a full blueprint (A) or retrofitting live without assessment (C) skip the analysis, and escalating for budget before assessment (D) is premature.',
  },
  {
    id: 58,
    domain: 'Business Environment',
    topic: 'Regulatory Compliance Timing',
    prompt:
      "Halfway through a project, a new privacy regulation is announced. It will become legally effective one month before the product's planned launch and may require changes to data storage. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Continue development until legal specialists confirm penalties for noncompliance are significant.',
      },
      {
        key: 'b',
        text: 'Treat the regulation as a future operational concern because it was not originally required.',
      },
      {
        key: 'c',
        text: 'Ask the sponsor whether the project can accept the additional regulatory exposure.',
      },
      {
        key: 'd',
        text: 'Assess compliance impacts and incorporate required actions through governance and change processes.',
      },
    ],
    correct: 'd',
    explanation:
      'A privacy regulation taking effect before launch should be assessed for compliance impact and addressed through governance and change processes — waiting for confirmation of penalty severity (A), treating it as a future concern (B), or deferring the decision to the sponsor (C) all risk missing the compliance deadline.',
  },
  {
    id: 59,
    domain: 'Business Environment',
    topic: 'Adoption & Benefits Realization',
    prompt:
      'A digital transformation project delivers every planned capability on time. Three months after deployment, however, only 25% of intended users have adopted the solution and expected productivity gains have not appeared. What should the project manager focus on?',
    options: [
      {
        key: 'a',
        text: 'Closing remaining project documentation because the approved deliverables were successfully completed.',
      },
      {
        key: 'b',
        text: 'Working with stakeholders to evaluate adoption barriers and improve realization of expected value.',
      },
      {
        key: 'c',
        text: 'Updating the schedule baseline to reflect the additional time needed for user adoption.',
      },
      {
        key: 'd',
        text: "Transferring responsibility entirely to operations because the project's deliverables were accepted.",
      },
    ],
    correct: 'b',
    explanation:
      "Low adoption and missing productivity gains after an on-time delivery call for working with stakeholders to understand adoption barriers and improve value realization — closing out documentation as if the project succeeded (A), updating the schedule baseline for a project that's already delivered (C), or fully transferring responsibility to operations (D) all ignore the actual benefits shortfall.",
  },
  {
    id: 60,
    domain: 'Business Environment',
    topic: 'Total Cost of Ownership & Sustainability',
    prompt:
      'New environmental policy mandates carbon-neutral operations by 2030. Capital project operates 15 years with significant emissions. Sustainability retrofit adds 18 months, $5M. What should project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Proceed with original plan; address sustainability post-launch.',
      },
      {
        key: 'b',
        text: 'Evaluate total cost of ownership including long-term carbon impact.',
      },
      {
        key: 'c',
        text: 'Automatically apply retrofit for policy compliance.',
      },
      {
        key: 'd',
        text: 'Escalate to CFO on cost justification by policy.',
      },
    ],
    correct: 'b',
    explanation:
      'A long-lived capital project facing a future carbon-neutral mandate should have its total cost of ownership evaluated, including long-term carbon impact — proceeding and addressing this post-launch (A) defers a cost that only grows, automatically retrofitting without evaluation (C) may be more than necessary, and escalating to the CFO before any evaluation (D) is premature.',
  },
  {
    id: 61,
    domain: 'Business Environment',
    topic: 'Proactive Regulatory Timing Decision',
    prompt:
      'Regulated industry project discovers mid-execution that upcoming regulation requires rework of 30% completed deliverables. Change not legally effective for 18 months. What should project manager do?',
    options: [
      {
        key: 'a',
        text: 'Continue original scope; plan reactive rework after regulation effective.',
      },
      {
        key: 'b',
        text: 'Assess timing and evaluate if proactive rework cost-effective before deadline.',
      },
      {
        key: 'c',
        text: 'Halt project until regulatory environment stabilizes.',
      },
      {
        key: 'd',
        text: 'Request regulatory waiver for exemption.',
      },
    ],
    correct: 'b',
    explanation:
      'A future regulation requiring rework of already-completed work, with 18 months of lead time, calls for assessing timing and evaluating whether proactive rework is more cost-effective than waiting — continuing and doing reactive rework later (A), halting the project now (C), or seeking a waiver (D) all skip that cost-effectiveness evaluation.',
  },
  {
    id: 62,
    domain: 'Business Environment',
    topic: 'Cross-Stream Regulatory Impact Assessment',
    prompt:
      'Multi-year healthcare technology program: modernization (waterfall) on schedule; mobile app (agile) delivering well. New FHIR 2.0 data interoperability regulation requires compliance by Month 20—four months before completion. Vendor estimates $400K, 8 weeks. Agile team can do two sprints with current resources. Initial step to address gap?',
    options: [
      {
        key: 'a',
        text: 'Immediately halt modernization; redirect budget to retrofitting.',
      },
      {
        key: 'b',
        text: 'Convene cross-stream assessment to quantify impacts and evaluate options.',
      },
      {
        key: 'c',
        text: 'Ask vendor for quote; route through procurement.',
      },
      {
        key: 'd',
        text: "Inform hospitals deadline can't be met; adjust expectations.",
      },
    ],
    correct: 'b',
    explanation:
      "A new interoperability regulation landing four months before completion, spanning both a waterfall and an agile stream, calls for a cross-stream assessment to quantify impacts and evaluate options before committing to any one path — immediately halting one stream (A), getting a vendor quote before assessing scope (C), or telling stakeholders the deadline can't be met before even assessing options (D) are all premature.",
  },
  {
    id: 63,
    domain: 'Business Environment',
    topic: 'Regulatory Compliance',
    prompt:
      'A project must comply with new government regulations. What should you do first?',
    options: [
      {
        key: 'a',
        text: 'Stop project execution until clarified',
      },
      {
        key: 'b',
        text: 'Review how compliance impacts project scope and costs',
      },
      {
        key: 'c',
        text: 'Escalate to stakeholders only',
      },
      {
        key: 'd',
        text: 'Ignore until an audit occurs',
      },
    ],
    correct: 'b',
    explanation: 'Assess impact before taking corrective action.',
  },
  {
    id: 64,
    domain: 'Business Environment',
    topic: 'Value Delivery & Benefits',
    prompt: 'Value delivery in projects is best measured by:',
    options: [
      {
        key: 'a',
        text: 'Earned Value',
      },
      {
        key: 'b',
        text: 'Business outcomes achieved',
      },
      {
        key: 'c',
        text: 'Budget adherence only',
      },
      {
        key: 'd',
        text: 'Stakeholder satisfaction only',
      },
    ],
    correct: 'b',
    explanation:
      'Real project success is delivering tangible business outcomes.',
  },
  {
    id: 65,
    domain: 'Business Environment',
    topic: 'Tailoring',
    prompt: 'Which best describes "tailoring" in project management?',
    options: [
      {
        key: 'a',
        text: 'Adjusting processes to fit project context',
      },
      {
        key: 'b',
        text: 'Customizing stakeholder expectations',
      },
      {
        key: 'c',
        text: 'Modifying PMBOK permanently',
      },
      {
        key: 'd',
        text: 'Skipping required processes',
      },
    ],
    correct: 'a',
    explanation: 'Tailoring adapts processes to project-specific needs.',
  },
  {
    id: 66,
    domain: 'Business Environment',
    topic: 'Financial Selection Criteria (NPV)',
    prompt:
      'During project selection, senior executives must choose between two prospective investments using Net Present Value (NPV). Project Alpha has an NPV of $120,000, and Project Beta has an NPV of $95,000. Which option should be recommended?',
    options: [
      {
        key: 'a',
        text: 'Project Beta because it carries a lower financial baseline.',
      },
      {
        key: 'b',
        text: 'Project Alpha because a higher positive NPV yields greater economic value to the organization.',
      },
      {
        key: 'c',
        text: 'Neither project, as NPV alone cannot determine selection without internal rate of return (IRR).',
      },
      {
        key: 'd',
        text: 'Both projects simultaneously regardless of budget limits.',
      },
    ],
    correct: 'b',
    explanation:
      'When using financial selection criteria, the project with the highest positive Net Present Value (NPV) provides the maximum expected financial value to the enterprise.',
  },
  {
    id: 67,
    domain: 'Business Environment',
    topic: 'Escalating an Unresolvable Authority Gap',
    prompt:
      "A project manager is delivering a complex project for a client who has their own project manager. The client's project manager is the sole decision maker for the project but is not the delegated financial authority. For every financial decision, the client's project manager must seek approval from a higher authority. This additional step has caused significant impacts on resource management, cost, and time of project delivery. How can the project manager resolve this problem?",
    options: [
      {
        key: 'a',
        text: 'Raise this problem in the quarterly project status report.',
      },
      {
        key: 'b',
        text: 'Add the problem to the lessons learned report.',
      },
      {
        key: 'c',
        text: 'Escalate the problem to the project steering committee.',
      },
      {
        key: 'd',
        text: "Discuss the problem with the client's project manager.",
      },
    ],
    correct: 'c',
    explanation:
      "An authority gap like this is outside what the project team can resolve on its own, so it should go to the steering committee — the body positioned to resolve governance and authority issues. Waiting for the quarterly report is too slow given the significant ongoing impact, logging it in lessons learned doesn't proactively fix anything, and the client's project manager is already the one constrained by the gap, so raising it with them again doesn't remove the blocker.",
  },
  {
    id: 68,
    domain: 'Business Environment',
    topic: 'Verifying Business Value via Charter and Business Case',
    prompt:
      'A newly hired project manager is assigned to a school construction project. The school serves students from surrounding neighborhoods and must be completely energy efficient. The project manager must provide a final report. How can the project manager determine whether the planned business value was delivered?',
    options: [
      {
        key: 'a',
        text: 'Inspect the approved technical specifications to confirm that they match the final product deliverables.',
      },
      {
        key: 'b',
        text: 'Consult with the team and confirm that the customer was satisfied with the construction of the school.',
      },
      {
        key: 'c',
        text: 'Review the project charter and business case to determine if the deliverables achieved the intended benefits.',
      },
      {
        key: 'd',
        text: 'Demonstrate that the school construction project was delivered on schedule and within budget.',
      },
    ],
    correct: 'c',
    explanation:
      'The project charter and business case define the intended benefits and value, so reviewing them against what was delivered is the only way to confirm whether the planned business value was actually achieved. Matching technical specs, team-confirmed customer satisfaction, and on-time/on-budget delivery are all valid measures of execution success, but none of them confirm that the intended benefits were actually realized.',
  },
  {
    id: 69,
    domain: 'Business Environment',
    topic: 'Compliance & Governance',
    prompt:
      'A key project sponsor requests the early deployment of a partially completed software feature to capitalize on a critical market window. The sponsor insists that final quality testing and regulatory compliance validation can be completed retroactively after deployment. What should the project manager do next?',
    options: [
      {
        key: 'a',
        text: "Document the sponsor's formal request in the project log and proceed with the early deployment.",
      },
      {
        key: 'b',
        text: "Escalate the request to the organization's compliance body and pause deployment until validation is complete.",
      },
      {
        key: 'c',
        text: "Bypass full quality testing but expedite a minimal legal review to meet the sponsor's timeline.",
      },
      {
        key: 'd',
        text: 'Request that the team work overtime to finish both deployment and testing simultaneously.',
      },
    ],
    correct: 'b',
    explanation:
      'Under PMI ethics and governance guidelines, regulatory and legal compliance always takes priority over schedule constraints or sponsor pressure. Bypassing mandatory checks poses massive organizational risks.',
  },
  {
    id: 70,
    domain: 'Business Environment',
    topic: 'Make-or-Buy',
    prompt:
      'A team completed a make-or-buy analysis showing that buying a module costs $80,000 while building it costs $75,000 in-house. Leadership still chose to buy. What is the most likely valid reason to justify selecting the higher-cost option here?',
    options: [
      {
        key: 'a',
        text: 'In-house builds should be avoided since they consistently produce weaker quality results overall.',
      },
      {
        key: 'b',
        text: 'The purchase price is always the single deciding element in any sourcing choice.',
      },
      {
        key: 'c',
        text: 'Buying options must be chosen whenever a qualified external vendor submits a proposal.',
      },
      {
        key: 'd',
        text: 'Freeing internal staff to focus on strategic work carries value beyond the quoted price gap.',
      },
    ],
    correct: 'd',
    explanation:
      'The $5,000 premium is justified by the strategic opportunity cost of keeping skilled resources on this module instead of higher-value work.',
  },
]
