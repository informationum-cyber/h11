import type { PMPQuestion } from './pmp-quiz-types'

export const eric96Questions: PMPQuestion[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    domain: 'People',
    topic: 'Team Complacency & Continuous Improvement',
    prompt:
      'An agile coach notices that a long-standing project team has become complacent. Iteration velocity has plateaued, and team members rarely participate in open discussions during retrospectives. What should the coach do to foster continuous improvement?',
    options: [
      {
        key: 'a',
        text: 'Increase sprint commitment targets to force the team out of their comfort zone.',
      },
      { key: 'b', text: 'Introduce new retrospective formats and encourage psychological safety.' },
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
    domain: 'Process',
    topic: 'Emergent Risk Identification',
    prompt:
      'A global enterprise rollout project faces unexpected regulatory compliance delays in a key international region. This risk was not identified in the risk register during the planning phase. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Issue an immediate change request to extend the total project timeline.' },
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
      { key: 'c', text: 'Reassign one of the members to another workstream to reduce friction.' },
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
    id: 26,
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
      { key: 'd', text: 'Proceed without their input and document the risk in the risk register.' },
    ],
    correct: 'c',
    explanation:
      "A stakeholder missing reviews and giving late feedback needs direct engagement to understand their constraints and adjust how they're engaged — removing them (A), escalating to the steering committee (B), or proceeding without their input (D) don't address why they're disengaged.",
  },
  {
    id: 27,
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
      { key: 'd', text: 'Ask the team member to adjust their schedule to align with core hours.' },
    ],
    correct: 'b',
    explanation:
      "A remote team member excluded from informal chat decisions needs inclusive communication norms and documented decision logs so decisions aren't made invisibly — mandating only synchronous meetings (A), rotating meeting times (C), or asking the individual to change their schedule (D) don't fix the structural exclusion.",
  },
  {
    id: 28,
    domain: 'People',
    topic: 'Team Member Burnout',
    prompt:
      'A high-performing team member is showing signs of burnout after multiple crunch periods. The project is still in a critical phase. What should the project manager do?',
    options: [
      { key: 'a', text: 'Immediately reduce their workload and redistribute tasks to others.' },
      {
        key: 'b',
        text: 'Acknowledge their contributions and discuss sustainable workload options.',
      },
      {
        key: 'c',
        text: 'Offer a bonus or recognition to motivate them through the critical phase.',
      },
      { key: 'd', text: 'Escalate to HR to explore formal wellness or leave-of-absence options.' },
    ],
    correct: 'b',
    explanation:
      "Acknowledging the person's contributions and discussing sustainable workload options addresses burnout directly and collaboratively — immediately reassigning tasks (A) may be part of the outcome but isn't the first step, incentives (C) don't address the root cause, and HR escalation (D) is premature before a direct conversation.",
  },
  {
    id: 29,
    domain: 'People',
    topic: 'Onboarding & Coaching',
    prompt:
      "A new team member joins mid-project and struggles to understand the team's hybrid agile practices, slowing down delivery. What is the most effective response?",
    options: [
      { key: 'a', text: 'Assign a mentor and provide targeted coaching on team norms and tools.' },
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
    id: 30,
    domain: 'Process',
    topic: 'Change Control Discipline',
    prompt:
      'A stakeholder insists on adding "just one more small feature" during execution, claiming it will greatly increase user satisfaction. The change is not in scope. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Reject the request to protect the baseline and avoid scope creep.' },
      { key: 'b', text: 'Log the request and initiate the formal change control process.' },
      { key: 'c', text: 'Accept the feature if the team says it can be done quickly and easily.' },
      { key: 'd', text: 'Ask the sponsor to decide whether the feature should be added now.' },
    ],
    correct: 'b',
    explanation:
      "An out-of-scope feature request — even a well-intentioned one — should be logged and run through formal change control, rather than rejected outright without evaluation (A), accepted informally because it 'seems easy' (C), or left to the sponsor to unilaterally decide (D).",
  },
  {
    id: 31,
    domain: 'People',
    topic: 'Inclusive Facilitation Techniques',
    prompt:
      'A project manager is leading a culturally diverse team. Some members are hesitant to speak up in meetings, leading to incomplete risk identification. What should the project manager do?',
    options: [
      { key: 'a', text: 'Require all members to submit written input before each meeting occurs.' },
      { key: 'b', text: 'Use anonymous input channels and structured techniques to gather views.' },
      { key: 'c', text: 'Call on quiet members directly to ensure their perspectives are heard.' },
      { key: 'd', text: 'Limit meetings to core members who are more vocal and engaged.' },
    ],
    correct: 'b',
    explanation:
      'Quiet team members in a culturally diverse team are best drawn out with anonymous input channels and structured techniques — requiring written input from everyone (A) or calling people out directly (C) can backfire depending on cultural norms, and limiting meetings to vocal members (D) makes the problem worse.',
  },
  {
    id: 32,
    domain: 'People',
    topic: 'Team Norms & Accountability',
    prompt:
      'A team member consistently delivers high-quality work but frequently misses daily stand-ups, citing "more important work." Morale is beginning to suffer. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Excuse the absences since their output remains consistently high quality.',
      },
      { key: 'b', text: 'Reinforce the purpose of stand-ups and agree on a sustainable approach.' },
      { key: 'c', text: 'Replace them in stand-ups with a proxy who can report their progress.' },
      { key: 'd', text: 'Escalate to their functional manager to enforce meeting attendance.' },
    ],
    correct: 'b',
    explanation:
      "Reinforcing why stand-ups matter and agreeing on a sustainable approach with the team member addresses the norm violation without dismissing quality output — excusing the behavior (A) undermines team norms, using a proxy (C) doesn't solve engagement, and escalating to a functional manager (D) is premature.",
  },
  {
    id: 33,
    domain: 'Process',
    topic: 'Schedule Impact Analysis',
    prompt:
      'Midway through execution, a critical vendor informs the project manager of a potential two-week delay due to supply chain issues. The schedule has minimal float. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Update the schedule baseline to reflect the anticipated vendor delay.' },
      { key: 'b', text: 'Analyze schedule impacts and evaluate options such as fast-tracking.' },
      { key: 'c', text: 'Escalate to the sponsor to request additional budget for alternatives.' },
      { key: 'd', text: 'Instruct the vendor to absorb the delay to avoid impacting the project.' },
    ],
    correct: 'b',
    explanation:
      "A vendor delay against minimal float calls for analyzing the schedule impact and evaluating options like fast-tracking before committing to any specific fix — updating the baseline (A) is premature, escalating for budget (C) assumes a solution before analysis, and unilaterally instructing the vendor to absorb the delay (D) isn't realistic.",
  },
  {
    id: 34,
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
      { key: 'd', text: 'Delegate artifact maintenance to a junior team member to save time.' },
    ],
    correct: 'b',
    explanation:
      "Outdated predictive artifacts under frequent scope change call for tailoring the planning approach to balance agility with necessary governance — abandoning predictive planning entirely (A) or rigidly enforcing change control (C) both over-correct, and delegating the problem away (D) doesn't fix it.",
  },
  {
    id: 35,
    domain: 'Process',
    topic: 'Qualitative Risk Analysis',
    prompt:
      'During risk identification, the team uncovers a high-impact, low-probability regulatory risk that could halt the project. There is no historical data to quantify it reliably. What should the project manager do?',
    options: [
      { key: 'a', text: 'Accept the risk since its probability is low and data is insufficient.' },
      { key: 'b', text: 'Perform qualitative analysis and plan a contingency response strategy.' },
      { key: 'c', text: 'Escalate the risk immediately to the board for strategic direction.' },
      { key: 'd', text: 'Ignore the risk until more data becomes available in later phases.' },
    ],
    correct: 'b',
    explanation:
      'A high-impact, low-probability risk with no historical data still needs a qualitative analysis and a contingency response plan — accepting it outright (A) or ignoring it (D) leave the project exposed, and escalating to the board before any analysis (C) is premature.',
  },
  {
    id: 36,
    domain: 'Process',
    topic: 'Earned Value Interpretation',
    prompt:
      "A project's earned value metrics show CPI = 0.85 and SPI = 0.95. The sponsor asks if the project can still meet the original completion date. What is the most appropriate response?",
    options: [
      { key: 'a', text: 'Yes, because SPI is close to 1 and schedule can be recovered easily.' },
      {
        key: 'b',
        text: 'No, because both cost and schedule performance indicate likely slippage.',
      },
      { key: 'c', text: 'Yes, if additional funding is approved to improve cost performance.' },
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
    id: 37,
    domain: 'Process',
    topic: 'Estimate Refinement',
    prompt:
      'A key deliverable requires integration with a legacy system that has limited documentation. The team is underestimating the effort, and early spikes show higher complexity. What should the project manager do?',
    options: [
      { key: 'a', text: 'Lock the estimates to maintain stakeholder confidence in the plan.' },
      { key: 'b', text: 'Re-estimate using data from spikes and adjust plans and expectations.' },
      { key: 'c', text: 'Add a large management reserve to cover unknown integration issues.' },
      { key: 'd', text: 'Proceed with original estimates and address overruns as they occur.' },
    ],
    correct: 'b',
    explanation:
      "Once spikes reveal higher-than-expected complexity, the estimates should be revised using that new data and expectations reset accordingly — locking the original estimate (A) or proceeding unchanged (D) ignore new evidence, and just padding reserve (C) doesn't correct the underlying estimate.",
  },
  {
    id: 38,
    domain: 'Process',
    topic: 'Change Request Discipline',
    prompt:
      'A project manager discovers that a critical requirement was misunderstood during planning, leading to rework in multiple components. The change will impact cost and schedule. What should be done first?',
    options: [
      { key: 'a', text: 'Submit a change request and assess impacts before implementing fixes.' },
      { key: 'b', text: 'Direct the team to fix the requirement immediately to minimize delay.' },
      { key: 'c', text: 'Update the requirements documentation and inform stakeholders later.' },
      { key: 'd', text: 'Escalate to the change control board for an emergency decision only.' },
    ],
    correct: 'a',
    explanation:
      'A misunderstood requirement causing rework should go through a change request with impact assessment before fixes are implemented — jumping straight to fixing it (B), updating docs and informing stakeholders after the fact (C), or reserving this only for emergency CCB action (D) skip proper impact evaluation.',
  },
  {
    id: 39,
    domain: 'Process',
    topic: 'Phase Gate Governance',
    prompt:
      'In a multi-phase project, phase gate reviews are becoming ceremonial, with issues consistently deferred to "the next phase." Quality is slipping. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Strengthen exit criteria and enforce objective evidence for phase gates.',
      },
      { key: 'b', text: 'Reduce the number of phase gates to streamline delivery and momentum.' },
      { key: 'c', text: 'Allow teams to self-certify phase completion to increase ownership.' },
      { key: 'd', text: 'Move all quality checks to the final phase to avoid repeated reviews.' },
    ],
    correct: 'a',
    explanation:
      'Ceremonial phase gates that defer issues need strengthened exit criteria and objective evidence requirements — reducing the number of gates (B), allowing self-certification (C), or pushing all quality checks to the end (D) would make the underlying problem worse.',
  },
  {
    id: 40,
    domain: 'People',
    topic: 'Tool Adoption & Change Management',
    prompt:
      'A project is adopting a new tool for backlog management, but adoption is inconsistent, causing visibility gaps in progress reporting. Some team members resist the change. What should the project manager do?',
    options: [
      { key: 'a', text: 'Mandate tool usage and track compliance through daily status reports.' },
      { key: 'b', text: "Address concerns, provide training, and reinforce the tool's benefits." },
      { key: 'c', text: 'Allow teams to use their preferred tools and consolidate reports later.' },
      { key: 'd', text: 'Revert to the previous tool to avoid further resistance and disruption.' },
    ],
    correct: 'b',
    explanation:
      "Inconsistent adoption of a new tool is best resolved by addressing concerns, providing training, and reinforcing the tool's benefits — mandating usage without addressing concerns (A), letting people use whatever they want (C), or reverting entirely (D) don't build genuine adoption.",
  },
  {
    id: 41,
    domain: 'Business Environment',
    topic: 'Regulatory Impact Assessment',
    prompt:
      'A project intended to deliver a new digital service is midway when a new data privacy regulation is announced, affecting design and data handling. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Continue as planned and address compliance during post-launch patches.' },
      { key: 'b', text: 'Assess regulatory impacts and initiate change requests as needed.' },
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
    id: 42,
    domain: 'Business Environment',
    topic: 'Benefits Realization Mapping',
    prompt:
      'Senior leadership asks the project manager to demonstrate how the project contributes to organizational strategic goals, as part of a portfolio review. What should the project manager prepare?',
    options: [
      { key: 'a', text: 'A detailed Gantt chart showing all tasks and dependencies in the plan.' },
      { key: 'b', text: 'A benefits realization map linking deliverables to strategic outcomes.' },
      { key: 'c', text: 'A cost performance report showing variance against the cost baseline.' },
      { key: 'd', text: 'A risk register highlighting all high-priority risks and responses.' },
    ],
    correct: 'b',
    explanation:
      "To show how a project contributes to strategic goals, a benefits realization map linking deliverables to outcomes is the right artifact — a Gantt chart (A), cost report (C), or risk register (D) don't speak to strategic value.",
  },
  {
    id: 43,
    domain: 'Process',
    topic: 'AI Estimation Validation',
    prompt:
      'A project team proposes using an AI-based scheduling tool that predicts task durations using historical data. The predictions look optimistic compared to expert judgment. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Adopt the AI predictions fully to leverage advanced analytics and speed.',
      },
      { key: 'b', text: 'Validate AI outputs against expert judgment and historical performance.' },
      { key: 'c', text: 'Reject the AI tool entirely as it may introduce bias and inaccuracies.' },
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
    id: 44,
    domain: 'Business Environment',
    topic: 'Sustainability Trade-offs',
    prompt:
      "A project is expected to deliver significant cost savings but may increase energy consumption, conflicting with the organization's sustainability commitments. What should the project manager do?",
    options: [
      { key: 'a', text: 'Prioritize cost savings since financial benefits are the primary goal.' },
      { key: 'b', text: 'Evaluate alternatives that balance cost and sustainability objectives.' },
      { key: 'c', text: 'Proceed as planned and address sustainability concerns after delivery.' },
      { key: 'd', text: 'Escalate to the CEO to decide between cost and sustainability goals.' },
    ],
    correct: 'b',
    explanation:
      'A conflict between cost savings and sustainability commitments calls for evaluating alternatives that balance both — prioritizing cost alone (A) or deferring sustainability concerns until after delivery (C) ignore the organizational commitment, and escalating to the CEO without first doing that analysis (D) is premature.',
  },
  {
    id: 45,
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
    id: 46,
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
      { key: 'c', text: 'Limit AI use to senior managers only to reduce exposure and complaints.' },
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
    id: 47,
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
    id: 48,
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
    id: 49,
    domain: 'People',
    topic: 'Technical Conflict Facilitation',
    prompt:
      'A hybrid project is entering a critical integration phase. The solution architect believes the developers are ignoring technical standards, while developers say the architect keeps introducing requirements that were never agreed upon. Their disagreement is beginning to affect sprint commitments. What should the project manager do?',
    options: [
      { key: 'a', text: 'Ask the sponsor to determine which party has final decision authority.' },
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
    id: 50,
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
    id: 51,
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
    id: 52,
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
    id: 53,
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
    id: 54,
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
    id: 55,
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
    id: 56,
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
    id: 57,
    domain: 'Process',
    topic: 'Earned Value Interpretation',
    prompt:
      'A project has the following performance information: BAC = $1,000,000 | PV = $400,000 | EV = $350,000 | AC = $300,000. Which statement best describes project performance?',
    options: [
      { key: 'a', text: 'The project is over budget and ahead of the planned schedule.' },
      { key: 'b', text: 'The project is over budget and behind the planned schedule.' },
      { key: 'c', text: 'The project is under budget and ahead of the planned schedule.' },
      { key: 'd', text: 'The project is under budget and behind the planned schedule.' },
    ],
    correct: 'd',
    explanation:
      'With BAC $1M, PV $400K, EV $350K, AC $300K: CV = EV − AC = +$50K (under budget), SV = EV − PV = −$50K (behind schedule) — so the project is under budget and behind schedule.',
  },
  {
    id: 58,
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
    id: 59,
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
    id: 60,
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
    id: 61,
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
    id: 62,
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
    id: 63,
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
    id: 64,
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
    id: 65,
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
    id: 66,
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
    id: 67,
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
    id: 68,
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
    id: 69,
    domain: 'Business Environment',
    topic: 'Cross-Functional Regulatory Compliance',
    prompt:
      'Scenario Context: You are the Lead Project Manager for "Project Titan" at a global logistics firm. Hybrid initiative with hardware (predictive) and software (agile). Currently 6 months into execution. | A new international data privacy regulation is passed that restricts how logistics metadata can be transferred across borders. The agile software team identifies that their planned architecture violates this regulation, while the predictive hardware team\'s embedded firmware requires cross-border telemetry data to function properly. What must the project manager do first?',
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
      'Same as the Project Titan compliance conflict elsewhere in this set: a cross-functional compliance review across both hardware and software streams comes before halting work, changing one stream unilaterally, or requesting more budget.',
  },
  {
    id: 70,
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
      "Same as the Project Titan conflict elsewhere in this set: collaborative alignment workshops rebuild shared goals and joint milestones better than outsourcing integration, disciplining leaders, or forcing one team's framework onto the other.",
  },
  {
    id: 71,
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
      'Same as the Project Titan sponsor-mandate scenario elsewhere in this set: a trade-off analysis with delivery scenarios presented to the sponsor beats silent overtime, refusing mandatory regulatory work, or escalating instead of solving the problem.',
  },
  {
    id: 72,
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
      'Same as the Project Titan closure scenario elsewhere in this set: close the phase after documenting actual benefit metrics and transitioning the shortfall to business owners, rather than blocking closure, rewriting the business case, or demanding a full re-baseline.',
  },
  {
    id: 73,
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
    id: 74,
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
      { key: 'd', text: 'Require all team members to adopt single communication standard.' },
    ],
    correct: 'b',
    explanation:
      'Members from a high-context culture staying silent in group refinement are better reached through structured input techniques and one-on-one interviews — separating groups by culture (A) segregates rather than includes, an external facilitator (C) is a bigger intervention than needed, and forcing one communication standard (D) ignores the cultural dynamic entirely.',
  },
  {
    id: 75,
    domain: 'People',
    topic: 'Knowledge Transfer on Departure',
    prompt:
      'Key technical lead receives competitor job offer and announces departure in two weeks. Replacement takes six weeks to onboard. What should project manager do immediately?',
    options: [
      { key: 'a', text: 'Request emergency budget increase to retain with counter-offer.' },
      {
        key: 'b',
        text: 'Engage departing lead in knowledge transfer while recruiting replacement.',
      },
      { key: 'c', text: 'Reassign critical work to other team members.' },
      { key: 'd', text: 'Escalate to sponsor for decision on timeline delay.' },
    ],
    correct: 'b',
    explanation:
      'With a key technical lead departing in two weeks and a six-week replacement ramp, the PM should immediately engage the departing lead in knowledge transfer while recruiting — a counter-offer (A) is not guaranteed to work and delays the real fix, reassigning work cold (C) risks quality, and escalating without acting (D) wastes the two weeks available.',
  },
  {
    id: 76,
    domain: 'People',
    topic: 'Matrix Team Formation',
    prompt:
      'Newly formed matrix team includes specialists from six departments, each with competing priorities and different terminology. Early collaboration is inefficient. What is most effective intervention?',
    options: [
      {
        key: 'a',
        text: 'Establish shared glossary, working norms, cross-functional accountability early.',
      },
      { key: 'b', text: 'Assign full-time coordinator to translate between functional groups.' },
      { key: 'c', text: 'Implement hierarchical structure with single functional lead.' },
      { key: 'd', text: 'Require all specialists report to project manager.' },
    ],
    correct: 'a',
    explanation:
      'A newly formed cross-departmental team with competing priorities and terminology needs an early shared glossary, working norms, and cross-functional accountability — a full-time translator (B), imposing a hierarchy (C), or requiring everyone to report to the PM (D) are heavier structural changes than the situation calls for.',
  },
  {
    id: 77,
    domain: 'People',
    topic: 'Psychological Safety Recovery',
    prompt:
      "Sprint retrospective reveals team's psychological safety eroded after quality failure was publicly blamed on specific members. Velocity declining, participation dropping. What should scrum master do first?",
    options: [
      {
        key: 'a',
        text: 'Address breach of psychological safety directly; establish norms against public blame.',
      },
      { key: 'b', text: 'Skip next retrospective to allow tensions to cool.' },
      { key: 'c', text: 'Document concerns and escalate to HR.' },
      { key: 'd', text: 'Reassign blamed members to less visible work.' },
    ],
    correct: 'a',
    explanation:
      "After a public-blame incident eroded psychological safety, the scrum master should address the breach directly and establish norms against public blame — skipping the retrospective (B), escalating to HR (C), or sidelining the blamed members (D) don't repair the team's trust.",
  },
  {
    id: 78,
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
      { key: 'c', text: 'Escalate to management to formally remove informal authority.' },
      { key: 'd', text: 'Work around architect with parallel technical review board.' },
    ],
    correct: 'b',
    explanation:
      'An architect whose informal influence overrides governance is best handled by recognizing their expertise while clarifying formal roles and redirecting that influence through governance channels — abruptly imposing strict change control (A), escalating to remove their informal authority (C), or building a parallel review board around them (D) are more disruptive than necessary.',
  },
  {
    id: 79,
    domain: 'People',
    topic: 'Cross-Organizational Communication Styles',
    prompt:
      "Vendor's project lead and internal project manager have fundamentally different communication styles—detailed/process-oriented vs. direct/outcome-focused. Causing friction and slow decisions. What should you do?",
    options: [
      { key: 'a', text: 'Request vendor replace their lead with better style match.' },
      {
        key: 'b',
        text: 'Facilitate discussion on communication preferences; establish bridge protocol.',
      },
      { key: 'c', text: 'Route all vendor communication through single liaison.' },
      { key: 'd', text: 'Document delays and escalate through vendor management.' },
    ],
    correct: 'b',
    explanation:
      "A style clash between a vendor lead and the PM is best resolved by facilitating a discussion on communication preferences and establishing a bridge protocol — requesting a different vendor lead (A), routing everything through a single liaison (C), or just documenting delays for escalation (D) don't fix the actual communication mismatch.",
  },
  {
    id: 80,
    domain: 'People',
    topic: 'Standard Adoption & Buy-in',
    prompt:
      'High-performing independent engineer resists organization-wide quality standard, argues it will slow innovation. Past record supports confidence but team cohesion requires consistency. What should project manager do?',
    options: [
      { key: 'a', text: 'Make exception to maintain productivity.' },
      {
        key: 'b',
        text: 'Engage engineer in designing how standard adapts without sacrificing innovation.',
      },
      { key: 'c', text: 'Enforce standard uniformly; document non-compliance.' },
      { key: 'd', text: 'Escalate to quality office on standard necessity.' },
    ],
    correct: 'b',
    explanation:
      'An engineer resisting a quality standard is better engaged by involving them in designing how the standard adapts without sacrificing innovation — granting an exception (A) undermines consistency, blanket enforcement (C) ignores their legitimate concern, and escalating to the quality office (D) skips direct engagement first.',
  },
  {
    id: 81,
    domain: 'Process',
    topic: 'AI-Assisted Testing Validation',
    prompt:
      'Team using AI-generated test suggestions based on historical bug patterns. AI sometimes recommends unnecessary tests; team spending extra time validating. What should project manager recommend?',
    options: [
      { key: 'a', text: 'Disable AI tool; return to manual test creation.' },
      {
        key: 'b',
        text: 'Validate AI recommendations against bug data; define acceptance thresholds.',
      },
      { key: 'c', text: 'Accept all AI suggestions without review.' },
      { key: 'd', text: 'Use AI only for brainstorming; override all recommendations.' },
    ],
    correct: 'b',
    explanation:
      'AI test suggestions that are sometimes unnecessary should be validated against actual bug data with defined acceptance thresholds — disabling the tool (A) throws away its value, accepting everything blindly (C) wastes effort, and using it only for brainstorming while overriding all output (D) discards its usefulness entirely.',
  },
  {
    id: 82,
    domain: 'Process',
    topic: 'Schedule Compression Strategy',
    prompt:
      'Originally 18-month project faces hard external deadline six months earlier. Removing float insufficient. Which approach should project manager recommend?',
    options: [
      {
        key: 'a',
        text: 'Crash critical path by adding resources equally to predictive and agile.',
      },
      { key: 'b', text: 'Analyze dependencies and value; restructure into concurrent increments.' },
      { key: 'c', text: 'Reduce scope uniformly across all deliverables.' },
      { key: 'd', text: 'Request waiver from external deadline.' },
    ],
    correct: 'b',
    explanation:
      "A hard deadline six months earlier with insufficient float calls for analyzing dependencies and value to restructure delivery into concurrent increments — crashing everything equally (A) is blunt and costly, uniform scope cuts (C) ignore value differences, and requesting a waiver (D) doesn't solve the delivery problem.",
  },
  {
    id: 83,
    domain: 'Process',
    topic: 'Statistical Process Control',
    prompt:
      'Control chart for defect escape rate shows seven consecutive measurements within control limits but trending upward. No measurement exceeded limit yet. What is appropriate action?',
    options: [
      {
        key: 'a',
        text: 'Investigate upward trend for assignable causes before escape rate becomes unacceptable.',
      },
      { key: 'b', text: 'Wait until measurement exceeds limit before corrective action.' },
      { key: 'c', text: 'Expand control limits to accommodate natural variation.' },
      { key: 'd', text: 'Continue monitoring; document trend for lessons learned.' },
    ],
    correct: 'a',
    explanation:
      'Seven consecutive measurements trending upward — even within control limits — should be investigated for assignable causes before the escape rate becomes unacceptable, rather than waiting for a breach (B), widening the limits (C), or just documenting for later (D).',
  },
  {
    id: 84,
    domain: 'Process',
    topic: 'Vendor Invoice Validation',
    prompt:
      'Vendor under time-and-materials submits invoices showing 20% more hours than independent estimate. Work appears complete but hour discrepancy concerning. What should project manager do first?',
    options: [
      { key: 'a', text: 'Approve invoice; investigate discrepancy at next reconciliation.' },
      { key: 'b', text: 'Reject invoice entirely; demand revised submission.' },
      { key: 'c', text: 'Review contractual terms, scope, detailed timesheets to validate.' },
      { key: 'd', text: 'Escalate to procurement for formal audit.' },
    ],
    correct: 'c',
    explanation:
      'A 20%-hours discrepancy on a time-and-materials invoice should be checked against the contract terms, scope, and detailed timesheets before any decision — approving now and investigating later (A), outright rejecting the invoice (B), or escalating straight to a formal audit (D) skip the direct verification step.',
  },
  {
    id: 85,
    domain: 'Process',
    topic: 'Backlog Refinement Strategy',
    prompt:
      'Agile backlog contains 150 stories with varying estimates (1-40 points). Team velocity 45 points/sprint. No clear prioritization. What should product owner do first?',
    options: [
      { key: 'a', text: 'Implement MoSCoW framework to order all 150 immediately.' },
      {
        key: 'b',
        text: 'Refine and prioritize subset for next 3-4 sprints based on value and dependencies.',
      },
      { key: 'c', text: 'Use weighted scoring to rank all 150 objectively.' },
      { key: 'd', text: 'Execute sprints on existing order; refine based on feedback.' },
    ],
    correct: 'b',
    explanation:
      "A 150-story backlog with no prioritization is best handled by refining and prioritizing just the next few sprints' worth based on value and dependencies — trying to fully order all 150 upfront (A, C) is wasted effort on stories that will change, and executing in arbitrary existing order (D) ignores value entirely.",
  },
  {
    id: 86,
    domain: 'Process',
    topic: 'Earned Value Forecasting (EAC)',
    prompt:
      'Predictive project: EV = $500K, PV = $550K, AC = $520K at 50% completion. Original budget $1M. Will project complete within budget?',
    options: [
      { key: 'a', text: 'Yes, current spending below budget; halfway through.' },
      { key: 'b', text: 'Likely no; trends suggest final cost near $1.04M.' },
      { key: 'c', text: 'Yes; cost variance minimal; schedule can be recovered.' },
      { key: 'd', text: 'Uncertain; additional risk analysis needed.' },
    ],
    correct: 'b',
    explanation:
      "CPI = EV/AC = 500/520 ≈ 0.96, so EAC = BAC/CPI ≈ $1,000,000/0.96 ≈ $1.04M — trending over the $1M budget, so the honest answer is likely no, not that spending is fine (A) or that cost variance is minimal and schedule recoverable (C), and there's enough data here to say more than 'uncertain' (D).",
  },
  {
    id: 87,
    domain: 'Process',
    topic: 'Quality Metric Root-Cause Analysis',
    prompt:
      'Software using CI finds automated test coverage declined to 65% despite 80% goal. Team cites time pressure and scope changes. What should project manager do?',
    options: [
      { key: 'a', text: 'Mandate coverage increase; penalties for non-compliance.' },
      { key: 'b', text: 'Investigate root causes; address systematically.' },
      { key: 'c', text: 'Accept lower coverage as delivery speed trade-off.' },
      { key: 'd', text: 'Hire dedicated QA staff to increase coverage independently.' },
    ],
    correct: 'b',
    explanation:
      "Declining test coverage against a stated goal calls for investigating the root causes (time pressure, scope changes) and addressing them systematically — mandating higher coverage with penalties (A) doesn't fix the cause, accepting the trade-off silently (C) abandons the goal, and hiring dedicated QA (D) treats a symptom without fixing process.",
  },
  {
    id: 88,
    domain: 'Process',
    topic: 'Unauthorized Baseline Deviation',
    prompt:
      'Critical dependency in network diagram informally removed during execution without baseline update. Creates schedule risk. What should be done immediately?',
    options: [
      { key: 'a', text: 'Retroactively update baseline to reflect actual dependency structure.' },
      {
        key: 'b',
        text: 'Analyze impacts, submit change request, restore dependency or mitigate risk.',
      },
      {
        key: 'c',
        text: 'Document informal change in lessons learned; continue with current schedule.',
      },
      { key: 'd', text: 'Escalate to CCB on original dependency validity.' },
    ],
    correct: 'b',
    explanation:
      "An informally removed dependency creating schedule risk needs its impacts analyzed and a proper change request to restore the dependency or mitigate the risk — retroactively updating the baseline to match reality (A) legitimizes an unauthorized change, just logging it for lessons learned (C) leaves the risk live, and escalating to question the dependency's original validity (D) doesn't address the current risk.",
  },
  {
    id: 89,
    domain: 'Business Environment',
    topic: 'Total Cost of Ownership & Sustainability',
    prompt:
      'New environmental policy mandates carbon-neutral operations by 2030. Capital project operates 15 years with significant emissions. Sustainability retrofit adds 18 months, $5M. What should project manager do first?',
    options: [
      { key: 'a', text: 'Proceed with original plan; address sustainability post-launch.' },
      { key: 'b', text: 'Evaluate total cost of ownership including long-term carbon impact.' },
      { key: 'c', text: 'Automatically apply retrofit for policy compliance.' },
      { key: 'd', text: 'Escalate to CFO on cost justification by policy.' },
    ],
    correct: 'b',
    explanation:
      'A long-lived capital project facing a future carbon-neutral mandate should have its total cost of ownership evaluated, including long-term carbon impact — proceeding and addressing this post-launch (A) defers a cost that only grows, automatically retrofitting without evaluation (C) may be more than necessary, and escalating to the CFO before any evaluation (D) is premature.',
  },
  {
    id: 90,
    domain: 'Business Environment',
    topic: 'Adoption & Benefits Realization',
    prompt:
      "Project deployed successfully but adoption lower than expected three months post-launch. Solution misaligns with how end users actually work. Expected $2M annual benefits won't materialize. What should project manager prioritize?",
    options: [
      { key: 'a', text: 'Declare project closed since deliverables completed and accepted.' },
      { key: 'b', text: 'Partner with business/ops to investigate adoption barriers and adjust.' },
      { key: 'c', text: 'Allocate responsibility entirely to operations.' },
      { key: 'd', text: 'Launch training campaign to force compliance.' },
    ],
    correct: 'b',
    explanation:
      "Low adoption threatening $2M in expected annual benefits calls for partnering with business and operations to investigate adoption barriers and adjust — declaring the project closed regardless (A), fully offloading responsibility to operations (C), or forcing compliance through training (D) don't address why users aren't adopting the solution.",
  },
  {
    id: 91,
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
      { key: 'c', text: 'Halt project until regulatory environment stabilizes.' },
      { key: 'd', text: 'Request regulatory waiver for exemption.' },
    ],
    correct: 'b',
    explanation:
      'A future regulation requiring rework of already-completed work, with 18 months of lead time, calls for assessing timing and evaluating whether proactive rework is more cost-effective than waiting — continuing and doing reactive rework later (A), halting the project now (C), or seeking a waiver (D) all skip that cost-effectiveness evaluation.',
  },
  {
    id: 92,
    domain: 'Business Environment',
    topic: 'Business Case Reassessment',
    prompt:
      "Merger-integration project executing while acquired company's product strategy in flux due to market disruption. Project's intended synergies may no longer align. What should project manager do?",
    options: [
      { key: 'a', text: 'Maintain original business case; complete as planned.' },
      {
        key: 'b',
        text: 'Reassess business drivers, market context, synergy assumptions; present go/no-go.',
      },
      { key: 'c', text: 'Delay execution until market/strategy stabilizes.' },
      { key: 'd', text: 'Escalate to integration office; defer decisions to leadership.' },
    ],
    correct: 'b',
    explanation:
      "An acquired company's shifting strategy calls for reassessing the business drivers, market context, and synergy assumptions, then presenting a go/no-go decision — maintaining the original business case unchanged (A), delaying execution indefinitely (C), or deferring the whole decision to leadership without doing the reassessment first (D) don't give decision-makers what they need.",
  },
  {
    id: 93,
    domain: 'Business Environment',
    topic: 'Cross-Stream Regulatory Impact Assessment',
    prompt:
      'Multi-year healthcare technology program: modernization (waterfall) on schedule; mobile app (agile) delivering well. New FHIR 2.0 data interoperability regulation requires compliance by Month 20—four months before completion. Vendor estimates $400K, 8 weeks. Agile team can do two sprints with current resources. Initial step to address gap?',
    options: [
      { key: 'a', text: 'Immediately halt modernization; redirect budget to retrofitting.' },
      {
        key: 'b',
        text: 'Convene cross-stream assessment to quantify impacts and evaluate options.',
      },
      { key: 'c', text: 'Ask vendor for quote; route through procurement.' },
      { key: 'd', text: "Inform hospitals deadline can't be met; adjust expectations." },
    ],
    correct: 'b',
    explanation:
      "A new interoperability regulation landing four months before completion, spanning both a waterfall and an agile stream, calls for a cross-stream assessment to quantify impacts and evaluate options before committing to any one path — immediately halting one stream (A), getting a vendor quote before assessing scope (C), or telling stakeholders the deadline can't be met before even assessing options (D) are all premature.",
  },
  {
    id: 94,
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
      { key: 'c', text: 'Escalate to each sponsor for governance-level resolution.' },
      { key: 'd', text: 'Split FHIR work proportionally between streams.' },
    ],
    correct: 'b',
    explanation:
      "With a resistant vendor, a concerned agile team, and finance questioning contract impacts, the PM should facilitate joint planning across all three to align sequencing, dependencies, and shared criteria — favoring the vendor unilaterally (A), escalating straight to each sponsor (C), or arbitrarily splitting the work (D) don't bring the parties to actual alignment.",
  },
  {
    id: 95,
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
      { key: 'c', text: 'Compress testing; allow rework within 6-week window.' },
      { key: 'd', text: 'Escalate to steering committee; declare exception; extend schedule.' },
    ],
    correct: 'b',
    explanation:
      'Critical defects found close to go-live call for analyzing defect severity and presenting real go-live alternatives — delay, phased rollout, or scope reduction — rather than proceeding at some sites while leaving one behind without that analysis (A), compressing testing to force the original date (C), or jumping straight to an exception/schedule extension without analysis (D).',
  },
  {
    id: 96,
    domain: 'Business Environment',
    topic: 'Benefits Realization & Phase Closure',
    prompt:
      'Program delivers all regulatory compliance, integration complete. System throughput only 80% of cost-benefit baseline. Operations business lead questions phase closure. What should project manager do?',
    options: [
      { key: 'a', text: 'Delay sign-off; re-engineer hardware until 100% achieved.' },
      {
        key: 'b',
        text: 'Close phase after documenting actual metrics; transition operational risks to business.',
      },
      { key: 'c', text: 'Modify business case metrics to match current performance.' },
      { key: 'd', text: 'Refuse closure; request budget for re-baseline.' },
    ],
    correct: 'b',
    explanation:
      'Same pattern as the other closure scenarios in this set: close the phase after documenting the actual throughput/benefit metrics and transitioning the shortfall to business owners, rather than blocking closure to chase the original target (A), rewriting the business case to match reality (C), or demanding a full re-baseline (D).',
  },
]
