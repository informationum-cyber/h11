import type { PMPQuestion } from './pmp-quiz-types'

export const pmpMockExamSectionB: PMPQuestion[] = [
  {
    id: 1,
    domain: 'People',
    topic: 'Distributed Team Working Agreements',
    prompt:
      'A virtual project team spread across four time zones is missing critical deadlines due to delayed handoffs and misunderstandings regarding task ownership. The project manager has already republished the responsibility assignment matrix (RAM). What is the most effective next step?',
    options: [
      {
        key: 'a',
        text: 'Conduct individual performance reviews to enforce compliance with assignment matrices.',
      },
      {
        key: 'b',
        text: 'Require daily sync meetings at a unified time to monitor task handoffs closely.',
      },
      {
        key: 'c',
        text: 'Co-create working agreements with the team to establish clear communication protocols.',
      },
      {
        key: 'd',
        text: 'Replace underperforming team members with resources located in a single time zone.',
      },
    ],
    correct: 'c',
    explanation:
      "Republishing the RAM didn't fix the handoff problem, so the next step is co-creating working agreements with the team so ownership and communication protocols are actually agreed to, not just documented — performance reviews, forced meeting times, or reshuffling by location don't address the root cause.",
  },
  {
    id: 2,
    domain: 'People',
    topic: 'Matrix Reporting & Burnout',
    prompt:
      'During an execution phase, a high-performing team member informs the project manager that they are feeling overwhelmed by dual reporting lines between the project and their functional manager, leading to severe burnout. What action should the project manager take first?',
    options: [
      {
        key: 'a',
        text: "Reassign the team member's critical path tasks to lower the immediate workload.",
      },
      {
        key: 'b',
        text: 'Direct the team member to negotiate workload adjustments with their functional manager.',
      },
      {
        key: 'c',
        text: 'Meet with the functional manager to realign allocation and balance work commitments.',
      },
      {
        key: 'd',
        text: 'Submit a formal request to HR to transfer the team member to another initiative.',
      },
    ],
    correct: 'c',
    explanation:
      "Burnout from dual reporting lines is a matrix-structure problem, so the PM should engage directly with the functional manager to realign allocation — reassigning critical-path work (A) or expecting the team member to negotiate their own workload alone (B) doesn't address the structural cause, and HR (D) is premature.",
  },
  {
    id: 3,
    domain: 'People',
    topic: 'Team Complacency & Continuous Improvement',
    prompt:
      'An agile coach notices that a long-standing project team has become complacent. Iteration velocity has plateaued, and team members rarely participate in open discussions during retrospectives. What should the coach do to foster continuous improvement?',
    options: [
      {
        key: 'a',
        text: 'Increase sprint commitment targets to force the team out of their comfort zone.',
      },
      {
        key: 'b',
        text: 'Introduce new retrospective formats and encourage psychological safety.',
      },
      {
        key: 'c',
        text: 'Replace key team members to introduce fresh perspectives into the team dynamics.',
      },
      {
        key: 'd',
        text: 'Conduct performance appraisals focused on individual velocity and deliverable metrics.',
      },
    ],
    correct: 'b',
    explanation:
      'Plateaued velocity and disengaged retrospectives call for new formats and rebuilding psychological safety to re-energize participation — forcing higher commitments (A) or replacing people (C) treats symptoms, and individual performance appraisals (D) undermine the team-based nature of the problem.',
  },
  {
    id: 4,
    domain: 'People',
    topic: 'Cross-Team Conflict Resolution',
    prompt:
      'Following the compliance assessment, the predictive engineering leads blame the agile developers for moving too fast without proper architecture reviews, while the agile developers accuse the predictive leads of bureaucratic delay that threatens sprint commitments. Relationships have deteriorated significantly. How should the project manager resolve this inter-team conflict?',
    options: [
      {
        key: 'a',
        text: 'Reassign the integration touchpoints to a separate third-party vendor to eliminate internal interaction.',
      },
      {
        key: 'b',
        text: 'Facilitate collaborative alignment workshops to establish shared goals and joint integration milestones.',
      },
      {
        key: 'c',
        text: 'Instruct the functional managers of both departments to discipline the non-cooperative team leaders.',
      },
      {
        key: 'd',
        text: 'Transition the software team to a waterfall framework to match the operational cadence of the hardware team.',
      },
    ],
    correct: 'b',
    explanation:
      "Deteriorating inter-team relationships from mutual blame call for collaborative alignment workshops to rebuild shared goals and joint milestones — outsourcing the integration (A), disciplining leaders (C), or forcing one team's framework onto the other (D) don't repair the working relationship.",
  },
  {
    id: 5,
    domain: 'People',
    topic: 'Stakeholder Engagement',
    prompt:
      'During a hybrid project, a key stakeholder consistently misses sprint reviews and provides late feedback, impacting iterations. What is the best initial action?',
    options: [
      {
        key: 'a',
        text: 'Remove the stakeholder from the review invite list to streamline sessions.',
      },
      {
        key: 'b',
        text: 'Escalate to the steering committee to enforce stakeholder participation.',
      },
      {
        key: 'c',
        text: 'Meet with the stakeholder to understand constraints and adjust engagement.',
      },
      {
        key: 'd',
        text: 'Proceed without their input and document the risk in the risk register.',
      },
    ],
    correct: 'c',
    explanation:
      "A stakeholder missing reviews and giving late feedback needs direct engagement to understand their constraints and adjust how they're engaged — removing them (A), escalating to the steering committee (B), or proceeding without their input (D) don't address why they're disengaged.",
  },
  {
    id: 6,
    domain: 'People',
    topic: 'Team Member Burnout',
    prompt:
      'A high-performing team member is showing signs of burnout after multiple crunch periods. The project is still in a critical phase. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Immediately reduce their workload and redistribute tasks to others.',
      },
      {
        key: 'b',
        text: 'Acknowledge their contributions and discuss sustainable workload options.',
      },
      {
        key: 'c',
        text: 'Offer a bonus or recognition to motivate them through the critical phase.',
      },
      {
        key: 'd',
        text: 'Escalate to HR to explore formal wellness or leave-of-absence options.',
      },
    ],
    correct: 'b',
    explanation:
      "Acknowledging the person's contributions and discussing sustainable workload options addresses burnout directly and collaboratively — immediately reassigning tasks (A) may be part of the outcome but isn't the first step, incentives (C) don't address the root cause, and HR escalation (D) is premature before a direct conversation.",
  },
  {
    id: 7,
    domain: 'People',
    topic: 'Inclusive Facilitation Techniques',
    prompt:
      'A project manager is leading a culturally diverse team. Some members are hesitant to speak up in meetings, leading to incomplete risk identification. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Require all members to submit written input before each meeting occurs.',
      },
      {
        key: 'b',
        text: 'Use anonymous input channels and structured techniques to gather views.',
      },
      {
        key: 'c',
        text: 'Call on quiet members directly to ensure their perspectives are heard.',
      },
      {
        key: 'd',
        text: 'Limit meetings to core members who are more vocal and engaged.',
      },
    ],
    correct: 'b',
    explanation:
      'Quiet team members in a culturally diverse team are best drawn out with anonymous input channels and structured techniques — requiring written input from everyone (A) or calling people out directly (C) can backfire depending on cultural norms, and limiting meetings to vocal members (D) makes the problem worse.',
  },
  {
    id: 8,
    domain: 'People',
    topic: 'Tool Adoption & Change Management',
    prompt:
      'A project is adopting a new tool for backlog management, but adoption is inconsistent, causing visibility gaps in progress reporting. Some team members resist the change. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Mandate tool usage and track compliance through daily status reports.',
      },
      {
        key: 'b',
        text: "Address concerns, provide training, and reinforce the tool's benefits.",
      },
      {
        key: 'c',
        text: 'Allow teams to use their preferred tools and consolidate reports later.',
      },
      {
        key: 'd',
        text: 'Revert to the previous tool to avoid further resistance and disruption.',
      },
    ],
    correct: 'b',
    explanation:
      "Inconsistent adoption of a new tool is best resolved by addressing concerns, providing training, and reinforcing the tool's benefits — mandating usage without addressing concerns (A), letting people use whatever they want (C), or reverting entirely (D) don't build genuine adoption.",
  },
  {
    id: 9,
    domain: 'People',
    topic: 'Stakeholder Resistance Management',
    prompt:
      'During stakeholder analysis, a project manager discovers that an influential operations director strongly opposes a new digital platform. The director believes automation will reduce the importance of her department and has begun discouraging employees from participating in workshops. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Meet with the director to understand her concerns and adjust the engagement approach.',
      },
      {
        key: 'b',
        text: 'Ask the sponsor to reinforce that participation in project workshops is mandatory.',
      },
      {
        key: 'c',
        text: "Reduce the director's influence by engaging supportive operational employees instead.",
      },
      {
        key: 'd',
        text: 'Record the resistance as a project risk and continue with planned communications.',
      },
    ],
    correct: 'a',
    explanation:
      "An influential stakeholder actively discouraging participation needs a direct conversation to understand her concerns and adjust the engagement approach — mandating participation through the sponsor (B), working around her (C), or just logging the resistance as a risk (D) don't address why she's resisting.",
  },
  {
    id: 10,
    domain: 'People',
    topic: 'Team Capability Building',
    prompt:
      'An agile team has missed its sprint goal for three consecutive iterations. Retrospectives show that team members understand the business requirements but are unfamiliar with a newly adopted technology. What is the most appropriate action?',
    options: [
      {
        key: 'a',
        text: "Increase sprint duration until the team's productivity reaches the required level.",
      },
      {
        key: 'b',
        text: 'Arrange targeted learning and coaching while allowing the team to improve capability.',
      },
      {
        key: 'c',
        text: 'Ask management to replace less experienced members with specialists immediately.',
      },
      {
        key: 'd',
        text: 'Reduce retrospective time so the team can spend additional hours developing features.',
      },
    ],
    correct: 'b',
    explanation:
      "Missed sprint goals traced to unfamiliarity with new technology call for targeted learning and coaching while giving the team room to improve — extending sprint duration (A), replacing team members (C), or cutting retrospective time to grind out more hours (D) don't build the missing capability.",
  },
  {
    id: 11,
    domain: 'People',
    topic: 'Sponsor-Product Owner Alignment',
    prompt:
      'On an agile project, the executive sponsor frequently contacts developers directly and asks them to prioritize urgent features. The product owner subsequently discovers unfinished work and conflicting priorities. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Tell developers to reject every request that does not originate from the product owner.',
      },
      {
        key: 'b',
        text: 'Ask the product owner to accept sponsor requests because the sponsor funds the project.',
      },
      {
        key: 'c',
        text: 'Create a separate backlog containing executive requests and manage it independently.',
      },
      {
        key: 'd',
        text: 'Align the sponsor and product owner on roles and a consistent prioritization mechanism.',
      },
    ],
    correct: 'd',
    explanation:
      "A sponsor bypassing the product owner needs the PM to align both parties on roles and a consistent prioritization mechanism — telling developers to unilaterally reject sponsor requests (A), deferring to the sponsor because they fund the project (B), or creating a shadow backlog (C) don't fix the governance gap.",
  },
  {
    id: 12,
    domain: 'People',
    topic: 'Role Clarity & Decision Authority',
    prompt:
      'A product owner on an agile team is also a functional manager for half the team members. This dual role is creating confusion around decision authority and prioritization. Team members report uncertainty about whose directives to follow. What should the project manager address first?',
    options: [
      {
        key: 'a',
        text: 'Ask the functional manager to recuse themselves from product owner ceremonies to eliminate ambiguity.',
      },
      {
        key: 'b',
        text: 'Clarify decision-making boundaries and escalation paths through explicit working agreements.',
      },
      {
        key: 'c',
        text: 'Recommend that the organization reassign either the product owner or functional manager role.',
      },
      {
        key: 'd',
        text: 'Document the structural conflict and escalate to the program office for organizational redesign.',
      },
    ],
    correct: 'b',
    explanation:
      'A dual product-owner/functional-manager role creating confusion needs explicit decision-making boundaries and escalation paths set through working agreements — recusal from ceremonies (A), reassigning the role (C), or just documenting and escalating for a redesign (D) are heavier-handed than clarifying boundaries first.',
  },
  {
    id: 13,
    domain: 'People',
    topic: 'Knowledge Transfer on Departure',
    prompt:
      'Key technical lead receives competitor job offer and announces departure in two weeks. Replacement takes six weeks to onboard. What should project manager do immediately?',
    options: [
      {
        key: 'a',
        text: 'Request emergency budget increase to retain with counter-offer.',
      },
      {
        key: 'b',
        text: 'Engage departing lead in knowledge transfer while recruiting replacement.',
      },
      {
        key: 'c',
        text: 'Reassign critical work to other team members.',
      },
      {
        key: 'd',
        text: 'Escalate to sponsor for decision on timeline delay.',
      },
    ],
    correct: 'b',
    explanation:
      'With a key technical lead departing in two weeks and a six-week replacement ramp, the PM should immediately engage the departing lead in knowledge transfer while recruiting — a counter-offer (A) is not guaranteed to work and delays the real fix, reassigning work cold (C) risks quality, and escalating without acting (D) wastes the two weeks available.',
  },
  {
    id: 14,
    domain: 'People',
    topic: 'Psychological Safety Recovery',
    prompt:
      "Sprint retrospective reveals team's psychological safety eroded after quality failure was publicly blamed on specific members. Velocity declining, participation dropping. What should scrum master do first?",
    options: [
      {
        key: 'a',
        text: 'Address breach of psychological safety directly; establish norms against public blame.',
      },
      {
        key: 'b',
        text: 'Skip next retrospective to allow tensions to cool.',
      },
      {
        key: 'c',
        text: 'Document concerns and escalate to HR.',
      },
      {
        key: 'd',
        text: 'Reassign blamed members to less visible work.',
      },
    ],
    correct: 'a',
    explanation:
      "After a public-blame incident eroded psychological safety, the scrum master should address the breach directly and establish norms against public blame — skipping the retrospective (B), escalating to HR (C), or sidelining the blamed members (D) don't repair the team's trust.",
  },
  {
    id: 15,
    domain: 'People',
    topic: 'Cross-Organizational Communication Styles',
    prompt:
      "Vendor's project lead and internal project manager have fundamentally different communication styles—detailed/process-oriented vs. direct/outcome-focused. Causing friction and slow decisions. What should you do?",
    options: [
      {
        key: 'a',
        text: 'Request vendor replace their lead with better style match.',
      },
      {
        key: 'b',
        text: 'Facilitate discussion on communication preferences; establish bridge protocol.',
      },
      {
        key: 'c',
        text: 'Route all vendor communication through single liaison.',
      },
      {
        key: 'd',
        text: 'Document delays and escalate through vendor management.',
      },
    ],
    correct: 'b',
    explanation:
      "A style clash between a vendor lead and the PM is best resolved by facilitating a discussion on communication preferences and establishing a bridge protocol — requesting a different vendor lead (A), routing everything through a single liaison (C), or just documenting delays for escalation (D) don't fix the actual communication mismatch.",
  },
  {
    id: 16,
    domain: 'People',
    topic: 'Multi-Party Coordination & Facilitation',
    prompt:
      'Integration requires coordinated changes across streams. Vendor resistant to acceleration; agile team concerned freezing features damages momentum. Hospital finance questions contract renegotiation impacts. How should you resolve?',
    options: [
      {
        key: 'a',
        text: 'Prioritize vendor compliance; formally direct agile team to freeze features.',
      },
      {
        key: 'b',
        text: 'Facilitate joint planning for sequencing, dependencies, shared criteria.',
      },
      {
        key: 'c',
        text: 'Escalate to each sponsor for governance-level resolution.',
      },
      {
        key: 'd',
        text: 'Split FHIR work proportionally between streams.',
      },
    ],
    correct: 'b',
    explanation:
      "With a resistant vendor, a concerned agile team, and finance questioning contract impacts, the PM should facilitate joint planning across all three to align sequencing, dependencies, and shared criteria — favoring the vendor unilaterally (A), escalating straight to each sponsor (C), or arbitrarily splitting the work (D) don't bring the parties to actual alignment.",
  },
  {
    id: 17,
    domain: 'People',
    topic: 'Stakeholder Engagement',
    prompt:
      'A stakeholder is unhappy with project progress. How should you handle the situation?',
    options: [
      {
        key: 'a',
        text: 'Ignore concerns until delivery',
      },
      {
        key: 'b',
        text: 'Schedule a meeting to understand their expectations',
      },
      {
        key: 'c',
        text: 'Ask the sponsor to intervene',
      },
      {
        key: 'd',
        text: 'Add more resources without approval',
      },
    ],
    correct: 'b',
    explanation: 'Direct engagement clarifies concerns and builds trust.',
  },
  {
    id: 18,
    domain: 'People',
    topic: 'Team Onboarding',
    prompt:
      'A new team member joins mid-project. What is the most important first step?',
    options: [
      {
        key: 'a',
        text: 'Assign tasks right away',
      },
      {
        key: 'b',
        text: 'Introduce them to stakeholders',
      },
      {
        key: 'c',
        text: 'Provide project onboarding and explain roles/responsibilities',
      },
      {
        key: 'd',
        text: 'Ask them to shadow another team member',
      },
    ],
    correct: 'c',
    explanation:
      'Proper onboarding ensures context and accelerates integration.',
  },
  {
    id: 19,
    domain: 'People',
    topic: 'Servant Leadership',
    prompt: 'Which leadership style is most effective in Agile environments?',
    options: [
      {
        key: 'a',
        text: 'Autocratic',
      },
      {
        key: 'b',
        text: 'Servant leadership',
      },
      {
        key: 'c',
        text: 'Directive',
      },
      {
        key: 'd',
        text: 'Transactional',
      },
    ],
    correct: 'b',
    explanation: 'Servant leadership empowers teams and removes obstacles.',
  },
  {
    id: 20,
    domain: 'People',
    topic: 'Distributed Team Collaboration',
    prompt:
      "Your distributed team struggles with miscommunication across time zones. What's the best action?",
    options: [
      {
        key: 'a',
        text: 'Reduce meetings altogether',
      },
      {
        key: 'b',
        text: 'Implement overlapping work hours and better collaboration tools',
      },
      {
        key: 'c',
        text: 'Assign all communication to one lead',
      },
      {
        key: 'd',
        text: 'Extend project deadlines',
      },
    ],
    correct: 'b',
    explanation:
      'Overlapping hours and tools enhance distributed collaboration.',
  },
  {
    id: 21,
    domain: 'People',
    topic: 'Conflict Resolution',
    prompt:
      'Two senior developers repeatedly disagree during sprint planning. One wants to prioritize technical-debt reduction while the other argues that only customer-facing functionality should be selected. Their arguments are beginning to affect the rest of the team. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Escalate the disagreement to their functional managers',
      },
      {
        key: 'b',
        text: 'Decide which developer has the stronger technical argument',
      },
      {
        key: 'c',
        text: 'Understand the source and context of the conflict before selecting a resolution approach',
      },
      {
        key: 'd',
        text: 'Ask the product owner to remove both developers from sprint planning',
      },
    ],
    correct: 'c',
    explanation:
      'Effective conflict management starts with diagnosing the root cause and context; jumping to escalation, a ruling, or removal skips that step.',
  },
  {
    id: 22,
    domain: 'People',
    topic: 'Stakeholder Reassessment',
    prompt:
      "Halfway through a project, a government regulator who previously had little involvement begins requesting detailed evidence about the project's data-management practices. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Provide the regulator with the existing weekly status report',
      },
      {
        key: 'b',
        text: 'Ask the sponsor to manage all communication with the regulator',
      },
      {
        key: 'c',
        text: 'Reassess the stakeholder and tailor the engagement and communication approach',
      },
      {
        key: 'd',
        text: 'Add the regulator to the project team',
      },
    ],
    correct: 'c',
    explanation:
      "A stakeholder's influence and needs can shift during the project; reassess the stakeholder register and tailor engagement rather than reusing a generic report or offloading the relationship.",
  },
  {
    id: 23,
    domain: 'Process',
    topic: 'Stakeholder Conflict Resolution',
    prompt:
      'During a complex cross-functional project, two key senior stakeholders are deadlocked on the functional requirements of a core component. The project manager needs to reach a resolution without damaging the long-term strategic relationship between their respective business units. Which approach should the project manager take?',
    options: [
      {
        key: 'a',
        text: 'Require both stakeholders to compromise on key functions to ensure rapid schedule adherence.',
      },
      {
        key: 'b',
        text: 'Facilitate a structured session to integrate the core priorities of both business units.',
      },
      {
        key: 'c',
        text: 'Escalate the conflict immediately to the project sponsor for a final decision.',
      },
      {
        key: 'd',
        text: 'Implement the requirements of the higher-ranking executive to mitigate corporate risk.',
      },
    ],
    correct: 'b',
    explanation:
      "Facilitating a structured session that integrates both business units' core priorities resolves the deadlock collaboratively — forcing compromise (A), escalating without first attempting resolution (C), or picking a side by rank (D) all bypass the PM's role in building consensus.",
  },
  {
    id: 24,
    domain: 'Process',
    topic: 'Vendor Performance Management',
    prompt:
      "A external vendor critical to the project schedule consistently delivers sub-standard work during sprints. The project manager learns that the vendor's lead developer lacks key technical competencies required for the scope. How should the project manager handle this situation?",
    options: [
      {
        key: 'a',
        text: 'Review the contract terms and work with procurement to enforce vendor compliance.',
      },
      {
        key: 'b',
        text: 'Terminate the vendor contract immediately and onboard a replacement supplier.',
      },
      {
        key: 'c',
        text: "Provide direct technical training to the vendor's lead developer to bridge the gap.",
      },
      {
        key: 'd',
        text: "Reallocate internal technical resources to complete the vendor's assigned deliverables.",
      },
    ],
    correct: 'a',
    explanation:
      "A vendor underperformance issue should be handled through the contract — reviewing terms and working with procurement to enforce compliance is the structured path, rather than immediately terminating (B, drastic before other options are exhausted), training the vendor's staff directly (C, not the PM's role), or quietly absorbing the work internally (D).",
  },
  {
    id: 25,
    domain: 'Process',
    topic: 'Quality Control & Corrective Action',
    prompt:
      "During quality control testing of a critical deliverable, the defect rate exceeds the established threshold outlined in the quality management plan. The root cause analysis reveals a systemic flaw in the assembly process. What is the project manager's best course of action?",
    options: [
      {
        key: 'a',
        text: 'Revise the quality baseline tolerance limits to accommodate the defect rate.',
      },
      {
        key: 'b',
        text: 'Submit a change request to implement corrective actions on the assembly process.',
      },
      {
        key: 'c',
        text: 'Instruct the quality team to re-test the failing units until they pass standards.',
      },
      {
        key: 'd',
        text: 'Accept the current defect rate and document it as a project risk in the register.',
      },
    ],
    correct: 'b',
    explanation:
      'A systemic root cause behind a defect-threshold breach calls for a change request to fix the actual assembly process — loosening the quality baseline (A), re-testing until units pass (C), or simply accepting and logging the defect rate (D) all leave the root cause in place.',
  },
  {
    id: 26,
    domain: 'Process',
    topic: 'Emergent Risk Identification',
    prompt:
      'A global enterprise rollout project faces unexpected regulatory compliance delays in a key international region. This risk was not identified in the risk register during the planning phase. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Issue an immediate change request to extend the total project timeline.',
      },
      {
        key: 'b',
        text: 'Perform a risk impact assessment and record the new risk in the register.',
      },
      {
        key: 'c',
        text: 'Allocate funds from the management reserve to resolve the compliance issue.',
      },
      {
        key: 'd',
        text: 'Request legal counsel to draft an exemption waiver for the regulatory body.',
      },
    ],
    correct: 'b',
    explanation:
      "A newly surfaced risk that wasn't in the register needs a proper impact assessment and formal recording first — jumping straight to a timeline change request (A), tapping management reserve (C), or seeking a legal exemption (D) all skip that foundational step.",
  },
  {
    id: 27,
    domain: 'Process',
    topic: 'Earned Value Interpretation',
    prompt:
      'A project manager is monitoring project progress using Earned Value Management (EVM). The current status reports an Schedule Performance Index (SPI) of 1.25 and a Cost Performance Index (CPI) of 0.78. What does this data indicate about the project, and what action is required?',
    options: [
      {
        key: 'a',
        text: 'The project is ahead of schedule and under budget; no corrective action is necessary.',
      },
      {
        key: 'b',
        text: 'The project is behind schedule and over budget; fast-track critical path activities.',
      },
      {
        key: 'c',
        text: 'The project is ahead of schedule and over budget; evaluate resource spending patterns.',
      },
      {
        key: 'd',
        text: 'The project is behind schedule and under budget; crash non-critical path activities.',
      },
    ],
    correct: 'c',
    explanation:
      'SPI 1.25 (> 1) means ahead of schedule; CPI 0.78 (< 1) means over budget — the data calls for evaluating resource spending patterns given the cost overrun, not assuming no action is needed (A) or misreading the indices as behind schedule (B, D).',
  },
  {
    id: 28,
    domain: 'Process',
    topic: 'Scope Validation & Acceptance',
    prompt:
      'At the conclusion of a project phase, the deliverables have passed all quality inspections, but the business customer refuses to sign the formal acceptance certificate, citing changing internal priorities. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Close the project phase unilaterally since deliverables met all verified quality criteria.',
      },
      {
        key: 'b',
        text: 'Review the project scope baseline and acceptance criteria with the customer.',
      },
      {
        key: 'c',
        text: 'Threaten legal action against the customer for breach of contractual agreement terms.',
      },
      {
        key: 'd',
        text: 'Re-engineer the phase deliverables free of charge to match new business priorities.',
      },
    ],
    correct: 'b',
    explanation:
      'When a customer withholds formal acceptance despite passing quality checks, the PM should review the scope baseline and acceptance criteria together with the customer — unilateral closure (A), legal threats (C), or free rework against undefined new priorities (D) all skip that clarifying conversation.',
  },
  {
    id: 29,
    domain: 'Process',
    topic: 'Change Control Discipline',
    prompt:
      'A stakeholder insists on adding "just one more small feature" during execution, claiming it will greatly increase user satisfaction. The change is not in scope. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Reject the request to protect the baseline and avoid scope creep.',
      },
      {
        key: 'b',
        text: 'Log the request and initiate the formal change control process.',
      },
      {
        key: 'c',
        text: 'Accept the feature if the team says it can be done quickly and easily.',
      },
      {
        key: 'd',
        text: 'Ask the sponsor to decide whether the feature should be added now.',
      },
    ],
    correct: 'b',
    explanation:
      "An out-of-scope feature request — even a well-intentioned one — should be logged and run through formal change control, rather than rejected outright without evaluation (A), accepted informally because it 'seems easy' (C), or left to the sponsor to unilaterally decide (D).",
  },
  {
    id: 30,
    domain: 'Process',
    topic: 'Hybrid Tailoring',
    prompt:
      'A project using a hybrid approach finds that predictive planning artifacts are becoming outdated due to frequent scope adjustments. The team is frustrated with maintaining them. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Stop maintaining predictive artifacts and switch fully to agile planning.',
      },
      {
        key: 'b',
        text: 'Tailor the planning approach to balance agility with necessary governance.',
      },
      {
        key: 'c',
        text: 'Enforce strict change control to minimize updates to baseline artifacts.',
      },
      {
        key: 'd',
        text: 'Delegate artifact maintenance to a junior team member to save time.',
      },
    ],
    correct: 'b',
    explanation:
      "Outdated predictive artifacts under frequent scope change call for tailoring the planning approach to balance agility with necessary governance — abandoning predictive planning entirely (A) or rigidly enforcing change control (C) both over-correct, and delegating the problem away (D) doesn't fix it.",
  },
  {
    id: 31,
    domain: 'Process',
    topic: 'Earned Value Interpretation',
    prompt:
      "A project's earned value metrics show CPI = 0.85 and SPI = 0.95. The sponsor asks if the project can still meet the original completion date. What is the most appropriate response?",
    options: [
      {
        key: 'a',
        text: 'Yes, because SPI is close to 1 and schedule can be recovered easily.',
      },
      {
        key: 'b',
        text: 'No, because both cost and schedule performance indicate likely slippage.',
      },
      {
        key: 'c',
        text: 'Yes, if additional funding is approved to improve cost performance.',
      },
      {
        key: 'd',
        text: 'No, unless the scope is reduced or the schedule is formally rebaselined.',
      },
    ],
    correct: 'b',
    explanation:
      'With CPI 0.85 and SPI 0.95 — both below 1 — the honest answer is that both cost and schedule performance indicate likely slippage, not that recovery is easy (A) or guaranteed with more funding (C) or automatically requires scope cuts (D).',
  },
  {
    id: 32,
    domain: 'Process',
    topic: 'Change Request Discipline',
    prompt:
      'A project manager discovers that a critical requirement was misunderstood during planning, leading to rework in multiple components. The change will impact cost and schedule. What should be done first?',
    options: [
      {
        key: 'a',
        text: 'Submit a change request and assess impacts before implementing fixes.',
      },
      {
        key: 'b',
        text: 'Direct the team to fix the requirement immediately to minimize delay.',
      },
      {
        key: 'c',
        text: 'Update the requirements documentation and inform stakeholders later.',
      },
      {
        key: 'd',
        text: 'Escalate to the change control board for an emergency decision only.',
      },
    ],
    correct: 'a',
    explanation:
      'A misunderstood requirement causing rework should go through a change request with impact assessment before fixes are implemented — jumping straight to fixing it (B), updating docs and informing stakeholders after the fact (C), or reserving this only for emergency CCB action (D) skip proper impact evaluation.',
  },
  {
    id: 33,
    domain: 'Process',
    topic: 'AI Estimation Validation',
    prompt:
      'A project team proposes using an AI-based scheduling tool that predicts task durations using historical data. The predictions look optimistic compared to expert judgment. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Adopt the AI predictions fully to leverage advanced analytics and speed.',
      },
      {
        key: 'b',
        text: 'Validate AI outputs against expert judgment and historical performance.',
      },
      {
        key: 'c',
        text: 'Reject the AI tool entirely as it may introduce bias and inaccuracies.',
      },
      {
        key: 'd',
        text: 'Use AI predictions only for internal planning and hide them from stakeholders.',
      },
    ],
    correct: 'b',
    explanation:
      'Optimistic AI schedule predictions should be validated against expert judgment and historical performance before being trusted — adopting them fully (A) or rejecting the tool outright (C) are both overcorrections, and hiding predictions from stakeholders (D) undermines transparency.',
  },
  {
    id: 34,
    domain: 'Process',
    topic: 'Program Performance Reassessment',
    prompt:
      'Midway through the program, a critical predictive project is consistently behind schedule (SPI = 0.80) while an agile project in the same program is delivering value early but consuming more budget than planned due to frequent scope exploration. The portfolio office is concerned about overall program performance and strategic alignment. What should you do?',
    options: [
      {
        key: 'a',
        text: 'Reallocate budget from the agile project to rescue the predictive project.',
      },
      {
        key: 'b',
        text: "Reassess both projects' approaches, align them to value delivery, and adjust.",
      },
      {
        key: 'c',
        text: 'Freeze scope on the agile project and enforce strict change control immediately.',
      },
      {
        key: 'd',
        text: 'Escalate to the portfolio office to decide which project to prioritize or cut.',
      },
    ],
    correct: 'b',
    explanation:
      "A struggling predictive project alongside an agile project delivering value but over budget calls for reassessing both approaches against value delivery and adjusting — simply moving budget from one to the other (A), freezing the agile project's scope (C), or pushing the decision entirely to the portfolio office (D) don't address the underlying performance issues.",
  },
  {
    id: 35,
    domain: 'Process',
    topic: 'Earned Value Interpretation',
    prompt:
      'A project has the following performance information: BAC = $1,000,000 | PV = $400,000 | EV = $350,000 | AC = $300,000. Which statement best describes project performance?',
    options: [
      {
        key: 'a',
        text: 'The project is over budget and ahead of the planned schedule.',
      },
      {
        key: 'b',
        text: 'The project is over budget and behind the planned schedule.',
      },
      {
        key: 'c',
        text: 'The project is under budget and ahead of the planned schedule.',
      },
      {
        key: 'd',
        text: 'The project is under budget and behind the planned schedule.',
      },
    ],
    correct: 'd',
    explanation:
      'With BAC $1M, PV $400K, EV $350K, AC $300K: CV = EV − AC = +$50K (under budget), SV = EV − PV = −$50K (behind schedule) — so the project is under budget and behind schedule.',
  },
  {
    id: 36,
    domain: 'Process',
    topic: 'Backlog Sequencing & Dependencies',
    prompt:
      'An agile product backlog contains three high-value features. Feature X provides the greatest immediate value but depends upon a technical capability created through Feature Y. How should the team approach prioritization?',
    options: [
      {
        key: 'a',
        text: 'Prioritize Feature X because business value should override technical dependency considerations.',
      },
      {
        key: 'b',
        text: 'Sequence the backlog around dependencies while preserving the highest feasible value delivery.',
      },
      {
        key: 'c',
        text: 'Develop all three features concurrently so dependency constraints have less schedule impact.',
      },
      {
        key: 'd',
        text: 'Postpone prioritization until the product owner can eliminate dependencies among the features.',
      },
    ],
    correct: 'b',
    explanation:
      "When a high-value feature depends on another, the backlog should be sequenced around that dependency while still preserving the highest feasible value delivery — ignoring the dependency for value alone (A), developing everything concurrently to sidestep sequencing (C), or postponing prioritization until dependencies vanish (D) aren't realistic.",
  },
  {
    id: 37,
    domain: 'Process',
    topic: 'Statistical Process Control',
    prompt:
      'A manufacturing project uses a control chart to monitor defect levels. No measurement exceeds the control limits, but the last seven measurements show a continuous upward trend. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Continue monitoring because every measurement remains within established control limits.',
      },
      {
        key: 'b',
        text: 'Expand the control limits because the existing thresholds may be excessively restrictive.',
      },
      {
        key: 'c',
        text: 'Investigate the trend for a non-random cause before unacceptable defects occur.',
      },
      {
        key: 'd',
        text: 'Wait until a measurement breaches a control limit before initiating corrective action.',
      },
    ],
    correct: 'c',
    explanation:
      'Seven consecutive measurements trending upward — even within control limits — is a signal of a non-random cause worth investigating before a limit is actually breached, rather than waiting for a breach (A, D) or loosening the limits to accommodate the trend (B).',
  },
  {
    id: 38,
    domain: 'Process',
    topic: 'AI Estimation Validation',
    prompt:
      'A team uses an AI-enabled estimation tool to forecast effort for a complex implementation. The tool recommends an estimate 40% lower than comparable projects, but several historical data fields used by the model are incomplete. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Validate the data and assumptions using historical evidence and knowledgeable expert judgment.',
      },
      {
        key: 'b',
        text: 'Accept the estimate because algorithmic analysis normally reduces subjective estimation bias.',
      },
      {
        key: 'c',
        text: "Average the AI estimate with the team's estimate and use the combined figure.",
      },
      {
        key: 'd',
        text: 'Reject AI-generated estimates until all organizational historical data has been fully completed.',
      },
    ],
    correct: 'a',
    explanation:
      "An AI estimate built on incomplete data fields needs its data and assumptions validated against historical evidence and expert judgment before being trusted — accepting it at face value (B), averaging it with the team's own estimate (C), or rejecting AI estimates entirely until the org's historical data is complete (D) are all shortcuts around real validation.",
  },
  {
    id: 39,
    domain: 'Process',
    topic: 'AI-Assisted Testing Validation',
    prompt:
      'Team using AI-generated test suggestions based on historical bug patterns. AI sometimes recommends unnecessary tests; team spending extra time validating. What should project manager recommend?',
    options: [
      {
        key: 'a',
        text: 'Disable AI tool; return to manual test creation.',
      },
      {
        key: 'b',
        text: 'Validate AI recommendations against bug data; define acceptance thresholds.',
      },
      {
        key: 'c',
        text: 'Accept all AI suggestions without review.',
      },
      {
        key: 'd',
        text: 'Use AI only for brainstorming; override all recommendations.',
      },
    ],
    correct: 'b',
    explanation:
      'AI test suggestions that are sometimes unnecessary should be validated against actual bug data with defined acceptance thresholds — disabling the tool (A) throws away its value, accepting everything blindly (C) wastes effort, and using it only for brainstorming while overriding all output (D) discards its usefulness entirely.',
  },
  {
    id: 40,
    domain: 'Process',
    topic: 'Statistical Process Control',
    prompt:
      'Control chart for defect escape rate shows seven consecutive measurements within control limits but trending upward. No measurement exceeded limit yet. What is appropriate action?',
    options: [
      {
        key: 'a',
        text: 'Investigate upward trend for assignable causes before escape rate becomes unacceptable.',
      },
      {
        key: 'b',
        text: 'Wait until measurement exceeds limit before corrective action.',
      },
      {
        key: 'c',
        text: 'Expand control limits to accommodate natural variation.',
      },
      {
        key: 'd',
        text: 'Continue monitoring; document trend for lessons learned.',
      },
    ],
    correct: 'a',
    explanation:
      'Seven consecutive measurements trending upward — even within control limits — should be investigated for assignable causes before the escape rate becomes unacceptable, rather than waiting for a breach (B), widening the limits (C), or just documenting for later (D).',
  },
  {
    id: 41,
    domain: 'Process',
    topic: 'Backlog Refinement Strategy',
    prompt:
      'Agile backlog contains 150 stories with varying estimates (1-40 points). Team velocity 45 points/sprint. No clear prioritization. What should product owner do first?',
    options: [
      {
        key: 'a',
        text: 'Implement MoSCoW framework to order all 150 immediately.',
      },
      {
        key: 'b',
        text: 'Refine and prioritize subset for next 3-4 sprints based on value and dependencies.',
      },
      {
        key: 'c',
        text: 'Use weighted scoring to rank all 150 objectively.',
      },
      {
        key: 'd',
        text: 'Execute sprints on existing order; refine based on feedback.',
      },
    ],
    correct: 'b',
    explanation:
      "A 150-story backlog with no prioritization is best handled by refining and prioritizing just the next few sprints' worth based on value and dependencies — trying to fully order all 150 upfront (A, C) is wasted effort on stories that will change, and executing in arbitrary existing order (D) ignores value entirely.",
  },
  {
    id: 42,
    domain: 'Process',
    topic: 'Quality Metric Root-Cause Analysis',
    prompt:
      'Software using CI finds automated test coverage declined to 65% despite 80% goal. Team cites time pressure and scope changes. What should project manager do?',
    options: [
      {
        key: 'a',
        text: 'Mandate coverage increase; penalties for non-compliance.',
      },
      {
        key: 'b',
        text: 'Investigate root causes; address systematically.',
      },
      {
        key: 'c',
        text: 'Accept lower coverage as delivery speed trade-off.',
      },
      {
        key: 'd',
        text: 'Hire dedicated QA staff to increase coverage independently.',
      },
    ],
    correct: 'b',
    explanation:
      "Declining test coverage against a stated goal calls for investigating the root causes (time pressure, scope changes) and addressing them systematically — mandating higher coverage with penalties (A) doesn't fix the cause, accepting the trade-off silently (C) abandons the goal, and hiring dedicated QA (D) treats a symptom without fixing process.",
  },
  {
    id: 43,
    domain: 'Process',
    topic: 'Go-Live Decision Analysis',
    prompt:
      'Following successful FHIR integration, system acceptance testing finds critical defects in legacy/mobile app integration. Rework estimated at 4 weeks. Go-Live in 6 weeks. Recommended course of action?',
    options: [
      {
        key: 'a',
        text: 'Approve early Go-Live at other two hospitals; third completes rework in parallel.',
      },
      {
        key: 'b',
        text: 'Analyze defect severity; present Go-Live alternatives (delay, phased, scope reduction).',
      },
      {
        key: 'c',
        text: 'Compress testing; allow rework within 6-week window.',
      },
      {
        key: 'd',
        text: 'Escalate to steering committee; declare exception; extend schedule.',
      },
    ],
    correct: 'b',
    explanation:
      'Critical defects found close to go-live call for analyzing defect severity and presenting real go-live alternatives — delay, phased rollout, or scope reduction — rather than proceeding at some sites while leaving one behind without that analysis (A), compressing testing to force the original date (C), or jumping straight to an exception/schedule extension without analysis (D).',
  },
  {
    id: 44,
    domain: 'Process',
    topic: 'Critical Path Method',
    prompt:
      'A project is behind schedule. Which tool reveals the schedule impact?',
    options: [
      {
        key: 'a',
        text: 'Monte Carlo simulation',
      },
      {
        key: 'b',
        text: 'Critical Path Method (CPM)',
      },
      {
        key: 'c',
        text: 'Earned Value Management (EVM)',
      },
      {
        key: 'd',
        text: 'Ishikawa diagram',
      },
    ],
    correct: 'b',
    explanation: 'CPM identifies task dependencies and delays.',
  },
  {
    id: 45,
    domain: 'Process',
    topic: 'Earned Value (CPI)',
    prompt: 'The cost performance index (CPI) is 0.8. What does this indicate?',
    options: [
      {
        key: 'a',
        text: 'Project is under budget',
      },
      {
        key: 'b',
        text: 'Project is over budget',
      },
      {
        key: 'c',
        text: 'Project is ahead of schedule',
      },
      {
        key: 'd',
        text: 'Project is on track',
      },
    ],
    correct: 'b',
    explanation: 'CPI < 1 means overspending relative to planned efficiency.',
  },
  {
    id: 46,
    domain: 'Process',
    topic: 'Schedule Compression',
    prompt:
      'A project sponsor requests completion earlier than planned. What should you do?',
    options: [
      {
        key: 'a',
        text: 'Crash or fast-track the schedule after analyzing trade-offs',
      },
      {
        key: 'b',
        text: 'Agree immediately',
      },
      {
        key: 'c',
        text: 'Add unapproved resources',
      },
      {
        key: 'd',
        text: 'Ignore the request',
      },
    ],
    correct: 'a',
    explanation:
      'Crashing/fast-tracking are valid methods with trade-off analysis.',
  },
  {
    id: 47,
    domain: 'Process',
    topic: 'Earned Value (SPI)',
    prompt: 'What does SPI < 1 indicate in Earned Value Management?',
    options: [
      {
        key: 'a',
        text: 'Ahead of schedule',
      },
      {
        key: 'b',
        text: 'Behind schedule',
      },
      {
        key: 'c',
        text: 'On track',
      },
      {
        key: 'd',
        text: 'Over budget',
      },
    ],
    correct: 'b',
    explanation: 'SPI < 1 signals work progressing slower than planned.',
  },
  {
    id: 48,
    domain: 'Process',
    topic: 'Agile Velocity & Capacity',
    prompt: 'In Agile, velocity is used for:',
    options: [
      {
        key: 'a',
        text: 'Tracking costs',
      },
      {
        key: 'b',
        text: 'Measuring stakeholder satisfaction',
      },
      {
        key: 'c',
        text: 'Estimating team capacity for future sprints',
      },
      {
        key: 'd',
        text: 'Assigning resources',
      },
    ],
    correct: 'c',
    explanation:
      'Velocity forecasts how much work teams can complete in future sprints.',
  },
  {
    id: 49,
    domain: 'Process',
    topic: 'Hybrid Delivery Approach Selection',
    prompt:
      'A project will develop a medical device. Hardware requirements are stable and heavily regulated, but the customer-facing software requires frequent experimentation and feedback. Which delivery approach is most appropriate?',
    options: [
      {
        key: 'a',
        text: 'Predictive for the entire project',
      },
      {
        key: 'b',
        text: 'Agile for the entire project',
      },
      {
        key: 'c',
        text: 'Hybrid, tailoring the approach to the characteristics of the different work',
      },
      {
        key: 'd',
        text: 'Kanban because regulated projects cannot use Scrum',
      },
    ],
    correct: 'c',
    explanation:
      'Stable, regulated hardware work suits predictive planning while the evolving software benefits from adaptive delivery — a tailored hybrid approach fits both.',
  },
  {
    id: 50,
    domain: 'Process',
    topic: 'Data-Driven Reprioritization',
    prompt:
      'A product team releases an MVP. Usage data shows that a planned feature expected to require two months of development is unlikely to improve the customer outcome being targeted. What should the project manager recommend?',
    options: [
      {
        key: 'a',
        text: 'Deliver the feature because it appeared in the original roadmap',
      },
      {
        key: 'b',
        text: 'Reassess priorities using the new evidence and expected business value',
      },
      {
        key: 'c',
        text: 'Increase the project budget so the feature can be delivered faster',
      },
      {
        key: 'd',
        text: 'Record the finding as a risk and make no other change',
      },
    ],
    correct: 'b',
    explanation:
      'Value-driven delivery means re-prioritizing the backlog when real usage data contradicts the original assumption, rather than following the roadmap blindly.',
  },
  {
    id: 51,
    domain: 'Process',
    topic: 'Contract Types',
    prompt:
      'A company is outsourcing development of an experimental prototype. Requirements will evolve as prototypes are reviewed, and the buyer wants flexibility to reprioritize work. Which contract type is generally most appropriate?',
    options: [
      {
        key: 'a',
        text: 'Firm-fixed-price',
      },
      {
        key: 'b',
        text: 'Cost-plus-fixed-fee with no oversight',
      },
      {
        key: 'c',
        text: 'Time and materials with appropriate controls and limits',
      },
      {
        key: 'd',
        text: 'Fixed-price economic price adjustment',
      },
    ],
    correct: 'c',
    explanation:
      "Evolving, hard-to-define scope is best matched to a time-and-materials contract with caps and oversight — fixed-price structures assume stable requirements this work doesn't have.",
  },
  {
    id: 52,
    domain: 'Process',
    topic: 'Quality & Compliance Trade-offs',
    prompt:
      'A supplier proposes a cheaper material that meets functional specifications. However, using it would cause the project to miss an approved sustainability requirement. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Accept the material because functional quality requirements are satisfied',
      },
      {
        key: 'b',
        text: 'Reject it immediately without further analysis',
      },
      {
        key: 'c',
        text: 'Evaluate the proposal against quality, sustainability, compliance and project-value requirements before deciding',
      },
      {
        key: 'd',
        text: 'Let the supplier make the decision',
      },
    ],
    correct: 'c',
    explanation:
      'A proposed substitution should be weighed against every approved requirement it touches — functional, sustainability and compliance — before a decision is made either way.',
  },
  {
    id: 53,
    domain: 'Process',
    topic: 'Schedule Float',
    prompt:
      'A project is running behind schedule. A critical path review reveals that Activity D has 10 days of total float. What does this mean?',
    options: [
      {
        key: 'a',
        text: 'Activity D must finish 10 days earlier than planned.',
      },
      {
        key: 'b',
        text: 'Activity D can be delayed by up to 10 days without pushing back the project completion date.',
      },
      {
        key: 'c',
        text: 'Activity D is on the critical path.',
      },
      {
        key: 'd',
        text: 'Activity D is currently 10 days behind schedule.',
      },
    ],
    correct: 'b',
    explanation:
      'Total float (or slack) is the amount of time an activity can be delayed from its early start date without delaying the project finish date. Activities with positive float are not on the critical path.',
  },
  {
    id: 54,
    domain: 'Business Environment',
    topic: 'Regulatory Compliance Response',
    prompt:
      "An international infrastructure initiative is operating in a country where local business compliance laws change unexpectedly mid-execution. Non-compliance could lead to immediate project shutdown. What is the project manager's priority?",
    options: [
      {
        key: 'a',
        text: 'Pause all project execution activities until the legal environment stabilizes long-term.',
      },
      {
        key: 'b',
        text: 'Engage local compliance experts to analyze the regulations and adapt controls.',
      },
      {
        key: 'c',
        text: 'Lobby government regulators to grant a grand-fathered exemption for the project.',
      },
      {
        key: 'd',
        text: 'Proceed with planned operations while creating a contingency fund for potential fines.',
      },
    ],
    correct: 'b',
    explanation:
      "A mid-execution compliance law change with shutdown risk calls for engaging local compliance experts to interpret and adapt controls — pausing indefinitely (A), lobbying for exemptions (C), or proceeding while just budgeting for fines (D) don't actually resolve the compliance exposure.",
  },
  {
    id: 55,
    domain: 'Business Environment',
    topic: 'Cross-Functional Regulatory Compliance',
    prompt:
      'Scenario Context: You are the Lead Project Manager for "Project Titan," a high-stakes, multi-year hybrid initiative at a global logistics firm. The core hardware automation (conveyor robotics) follows a predictive lifecycle, while the inventory management software engine is developed using 2-week agile iterations. The project is currently 6 months into execution. | A new international data privacy regulation is passed that restricts how logistics metadata can be transferred across borders. The agile software team identifies that their planned architecture violates this regulation, while the predictive hardware team\'s embedded firmware requires cross-border telemetry data to function properly. What must the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Halt all hardware and software development until the regulatory body provides an explicit project exemption.',
      },
      {
        key: 'b',
        text: 'Direct the software team to implement local data encryption while allowing hardware telemetry to proceed unchanged.',
      },
      {
        key: 'c',
        text: 'Convene a cross-functional compliance review to assess impacts across both hardware and software streams.',
      },
      {
        key: 'd',
        text: 'Submit a formal change request to increase the budget for external legal fees and compliance software tools.',
      },
    ],
    correct: 'c',
    explanation:
      'A regulation that affects both the predictive and agile streams differently needs a cross-functional compliance review to assess impacts across both before deciding a path — halting everything (A) or unilaterally changing only one stream (B) skip that joint assessment, and a budget change request (D) is premature.',
  },
  {
    id: 56,
    domain: 'Business Environment',
    topic: 'Regulatory Impact Assessment',
    prompt:
      'A project intended to deliver a new digital service is midway when a new data privacy regulation is announced, affecting design and data handling. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Continue as planned and address compliance during post-launch patches.',
      },
      {
        key: 'b',
        text: 'Assess regulatory impacts and initiate change requests as needed.',
      },
      {
        key: 'c',
        text: 'Halt all work until legal provides a complete interpretation of the law.',
      },
      {
        key: 'd',
        text: 'Shift the project to an internal pilot to avoid external regulatory scope.',
      },
    ],
    correct: 'b',
    explanation:
      "A new regulation affecting an in-flight project calls for assessing its impact and initiating change requests as needed — deferring compliance to post-launch patches (A), halting all work pending a full legal interpretation (C), or dodging the regulation via a pilot scope (D) don't properly manage the exposure.",
  },
  {
    id: 57,
    domain: 'Business Environment',
    topic: 'Sustainability Trade-offs',
    prompt:
      "A project is expected to deliver significant cost savings but may increase energy consumption, conflicting with the organization's sustainability commitments. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Prioritize cost savings since financial benefits are the primary goal.',
      },
      {
        key: 'b',
        text: 'Evaluate alternatives that balance cost and sustainability objectives.',
      },
      {
        key: 'c',
        text: 'Proceed as planned and address sustainability concerns after delivery.',
      },
      {
        key: 'd',
        text: 'Escalate to the CEO to decide between cost and sustainability goals.',
      },
    ],
    correct: 'b',
    explanation:
      'A conflict between cost savings and sustainability commitments calls for evaluating alternatives that balance both — prioritizing cost alone (A) or deferring sustainability concerns until after delivery (C) ignore the organizational commitment, and escalating to the CEO without first doing that analysis (D) is premature.',
  },
  {
    id: 58,
    domain: 'Business Environment',
    topic: 'Sustainability vs Delivery Trade-off',
    prompt:
      'The program is expected to deliver substantial cost efficiencies, but the initial design relies heavily on a cloud provider whose data centers have a high carbon footprint. The organization has public sustainability commitments and is under pressure from investors. Some business units argue that switching to a greener provider will delay delivery and increase costs. What should you do?',
    options: [
      {
        key: 'a',
        text: 'Prioritize delivery speed and cost, deferring sustainability to a later phase.',
      },
      {
        key: 'b',
        text: 'Evaluate alternative providers and architectures balancing cost, time, and carbon.',
      },
      {
        key: 'c',
        text: 'Adopt the greener provider immediately regardless of cost and schedule impact.',
      },
      {
        key: 'd',
        text: 'Ask the steering committee to choose between sustainability and efficiency.',
      },
    ],
    correct: 'b',
    explanation:
      'A conflict between cost/schedule and a public sustainability commitment calls for evaluating alternative providers and architectures that balance cost, time, and carbon impact — prioritizing delivery alone (A) or switching providers immediately without evaluation (C) are both one-sided, and pushing the decision to the steering committee without analysis (D) is premature.',
  },
  {
    id: 59,
    domain: 'Business Environment',
    topic: 'Policy Impact Assessment',
    prompt:
      'An organization introduces a new sustainability policy while a major infrastructure project is underway. The approved project plan does not currently meet several provisions in the policy. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: "Determine the policy's applicability and evaluate its impact on project objectives and governance.",
      },
      {
        key: 'b',
        text: 'Modify the project immediately because new organizational policies automatically override project baselines.',
      },
      {
        key: 'c',
        text: 'Continue under the original plan because the policy was approved after project authorization.',
      },
      {
        key: 'd',
        text: 'Ask the sustainability department to assume accountability for all required project modifications.',
      },
    ],
    correct: 'a',
    explanation:
      "A new sustainability policy that the current plan doesn't meet needs its applicability and impact on objectives and governance determined first — assuming automatic override (B), continuing unchanged because the policy came later (C), or handing accountability entirely to another department (D) skip that assessment.",
  },
  {
    id: 60,
    domain: 'Business Environment',
    topic: 'Business Value Reassessment',
    prompt:
      "A two-year project is halfway through execution when a major competitor launches a technology that substantially changes the market. The project's original deliverable can still be completed within budget, but its expected commercial benefit has fallen dramatically. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Complete the project because cost and schedule performance remain within approved tolerances.',
      },
      {
        key: 'b',
        text: 'Reduce quality requirements so the remaining investment can be recovered more quickly.',
      },
      {
        key: 'c',
        text: 'Reassess expected business value and present continuation, adaptation, or termination options.',
      },
      {
        key: 'd',
        text: 'Accelerate the schedule because entering the market sooner will automatically restore benefits.',
      },
    ],
    correct: 'c',
    explanation:
      'A major market shift that weakens expected commercial benefit calls for reassessing business value and presenting continuation, adaptation, or termination options — completing regardless (A), cutting quality to save cost (B), or accelerating on the unproven assumption that speed alone restores benefit (D) all skip the reassessment.',
  },
  {
    id: 61,
    domain: 'Business Environment',
    topic: 'Adoption & Benefits Realization',
    prompt:
      "Project deployed successfully but adoption lower than expected three months post-launch. Solution misaligns with how end users actually work. Expected $2M annual benefits won't materialize. What should project manager prioritize?",
    options: [
      {
        key: 'a',
        text: 'Declare project closed since deliverables completed and accepted.',
      },
      {
        key: 'b',
        text: 'Partner with business/ops to investigate adoption barriers and adjust.',
      },
      {
        key: 'c',
        text: 'Allocate responsibility entirely to operations.',
      },
      {
        key: 'd',
        text: 'Launch training campaign to force compliance.',
      },
    ],
    correct: 'b',
    explanation:
      "Low adoption threatening $2M in expected annual benefits calls for partnering with business and operations to investigate adoption barriers and adjust — declaring the project closed regardless (A), fully offloading responsibility to operations (C), or forcing compliance through training (D) don't address why users aren't adopting the solution.",
  },
  {
    id: 62,
    domain: 'Business Environment',
    topic: 'Business Case Reassessment',
    prompt:
      "Merger-integration project executing while acquired company's product strategy in flux due to market disruption. Project's intended synergies may no longer align. What should project manager do?",
    options: [
      {
        key: 'a',
        text: 'Maintain original business case; complete as planned.',
      },
      {
        key: 'b',
        text: 'Reassess business drivers, market context, synergy assumptions; present go/no-go.',
      },
      {
        key: 'c',
        text: 'Delay execution until market/strategy stabilizes.',
      },
      {
        key: 'd',
        text: 'Escalate to integration office; defer decisions to leadership.',
      },
    ],
    correct: 'b',
    explanation:
      "An acquired company's shifting strategy calls for reassessing the business drivers, market context, and synergy assumptions, then presenting a go/no-go decision — maintaining the original business case unchanged (A), delaying execution indefinitely (C), or deferring the whole decision to leadership without doing the reassessment first (D) don't give decision-makers what they need.",
  },
  {
    id: 63,
    domain: 'Business Environment',
    topic: 'Benefits Realization & Phase Closure',
    prompt:
      'Program delivers all regulatory compliance, integration complete. System throughput only 80% of cost-benefit baseline. Operations business lead questions phase closure. What should project manager do?',
    options: [
      {
        key: 'a',
        text: 'Delay sign-off; re-engineer hardware until 100% achieved.',
      },
      {
        key: 'b',
        text: 'Close phase after documenting actual metrics; transition operational risks to business.',
      },
      {
        key: 'c',
        text: 'Modify business case metrics to match current performance.',
      },
      {
        key: 'd',
        text: 'Refuse closure; request budget for re-baseline.',
      },
    ],
    correct: 'b',
    explanation:
      'Same pattern as the other closure scenarios in this set: close the phase after documenting the actual throughput/benefit metrics and transitioning the shortfall to business owners, rather than blocking closure to chase the original target (A), rewriting the business case to match reality (C), or demanding a full re-baseline (D).',
  },
  {
    id: 64,
    domain: 'Business Environment',
    topic: 'Strategic Alignment',
    prompt:
      "A project is not aligned with organizational strategy. What's the best action?",
    options: [
      {
        key: 'a',
        text: 'Continue as planned',
      },
      {
        key: 'b',
        text: 'Recommend termination to leadership',
      },
      {
        key: 'c',
        text: 'Ignore misalignment',
      },
      {
        key: 'd',
        text: 'Add extra resources',
      },
    ],
    correct: 'b',
    explanation:
      'Misaligned projects waste resources; termination is best practice.',
  },
  {
    id: 65,
    domain: 'Business Environment',
    topic: 'Benefits Management Plan',
    prompt:
      'Which document defines how project benefits will be measured after delivery?',
    options: [
      {
        key: 'a',
        text: 'Benefits Management Plan',
      },
      {
        key: 'b',
        text: 'Scope Statement',
      },
      {
        key: 'c',
        text: 'Stakeholder Register',
      },
      {
        key: 'd',
        text: 'Charter',
      },
    ],
    correct: 'a',
    explanation:
      'Benefits Management Plan ensures benefits are tracked and realized.',
  },
  {
    id: 66,
    domain: 'Business Environment',
    topic: 'Regulatory Compliance Planning',
    prompt:
      'Your organization is deploying a digital transformation tool in a strictly regulated industry. What should be incorporated into the project planning documents to maintain compliance?',
    options: [
      {
        key: 'a',
        text: 'A compliance strategy and regulatory traceability matrix.',
      },
      {
        key: 'b',
        text: 'A standalone risk register containing only financial risks.',
      },
      {
        key: 'c',
        text: 'A standard stakeholder engagement plan focused exclusively on internal teams.',
      },
      {
        key: 'd',
        text: 'A quality plan that waives third-party audits.',
      },
    ],
    correct: 'a',
    explanation:
      'Meeting organizational and external compliance standards requires explicit mapping via a compliance strategy and regulatory matrix to track mandatory requirements throughout execution.',
  },
  {
    id: 67,
    domain: 'Business Environment',
    topic: 'Regulatory Risk Re-Rating',
    prompt:
      'A project manager has just received news that a new regulation has been adopted and the expectation is that the project will be delivered compliant with this new regulation. This was previously documented as a risk item with a low probability and a moderate impact. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Revisit the risk register and update the rating and response.',
      },
      {
        key: 'b',
        text: 'Update the issue log and apply corrective action.',
      },
      {
        key: 'c',
        text: 'Revise the project management plan.',
      },
      {
        key: 'd',
        text: 'Initiate a change request for the updated regulation.',
      },
    ],
    correct: 'a',
    explanation:
      "The risk's probability just became 100% now that the regulation is adopted, and its impact may have changed too — the risk register needs to be updated first to reflect that before anything else. Updating the issue log, revising the project management plan, or initiating a change request may all become necessary, but only after the risk register assessment clarifies the actual impact on the project.",
  },
  {
    id: 68,
    domain: 'Business Environment',
    topic: 'Following the Bidding Procedure',
    prompt:
      'In order to reduce procurement time during a bidding process, a project manager decided to contract the additional work to a current contractor. The other bidders are complaining about this decision because they think that the process lacked transparency and fairness. What should the project manager have done to prevent this?',
    options: [
      {
        key: 'a',
        text: 'Invited all potential bidders to a meeting.',
      },
      {
        key: 'b',
        text: 'Awarded the contract without negotiation.',
      },
      {
        key: 'c',
        text: "Followed the company's bidding procedure.",
      },
      {
        key: 'd',
        text: 'Shared the project objectives with all bidders.',
      },
    ],
    correct: 'c',
    explanation:
      "Following the company's established bidding procedure is what guarantees a fair, consistent process with equal opportunity for all bidders. Inviting bidders to a meeting or sharing objectives could be part of the process, but neither alone addresses the fairness/transparency complaint, and awarding without negotiation may itself deviate from the proper procedure.",
  },
  {
    id: 69,
    domain: 'Business Environment',
    topic: 'AI Data Privacy Risk',
    prompt:
      'Your team uses an AI tool to analyze team performance data, including personal work patterns and communication logs, without informing team members or securing consent. After learning about this, one of your team members raises concerns. What does this scenario show?',
    options: [
      {
        key: 'a',
        text: 'Unclear accountability for AI decisions.',
      },
      {
        key: 'b',
        text: 'Lack of proper data privacy safeguards.',
      },
      {
        key: 'c',
        text: 'Missing bias testing on the model.',
      },
      {
        key: 'd',
        text: 'Nothing - your team is completely justified in using the data.',
      },
    ],
    correct: 'b',
    explanation:
      'Analyzing personal work patterns and communication logs without informing people or securing consent is a data privacy and consent failure — not an accountability gap (A), a bias issue (C), and certainly not something the team was justified in doing (D).',
  },
  {
    id: 70,
    domain: 'Business Environment',
    topic: 'Budget Structure',
    prompt:
      'A team lead reviews a completed budget and notices the sponsor has questioned why the total authorized funds exceed the cost baseline by a fixed amount held at the enterprise level. The lead must classify what portion causes this difference. Which element accounts for the gap between the cost baseline and the total project budget?',
    options: [
      {
        key: 'a',
        text: 'Management reserve set aside for unforeseen scope changes.',
      },
      {
        key: 'b',
        text: 'Aggregated work package estimates carried up to the summary level.',
      },
      {
        key: 'c',
        text: 'Activity cost estimates combined across all project control accounts and phases.',
      },
      {
        key: 'd',
        text: 'Contingency reserve rolled into each control account estimate.',
      },
    ],
    correct: 'a',
    explanation:
      'The management reserve is the difference between the cost baseline and the total project budget.',
  },
]
