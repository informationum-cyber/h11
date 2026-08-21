import type { PMPQuestion } from './pmp-quiz-types'

export const pmp24q40mQuestions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'Process',
    topic: 'Hybrid Alignment',
    prompt:
      "During a hybrid construction project, fixed infrastructure milestones are set, but the software application layer uses adaptive development cycles. During execution, a senior stakeholder expresses concerns that the completed software modules do not align with the organization's evolving operational needs. What should the project manager do first?",
    options: [
      { key: 'a', text: 'Submit a formal change request immediately to modify the software scope.' },
      { key: 'b', text: 'Facilitate an open dialogue with the stakeholder to clarify specific concerns and validate alignment.' },
      { key: 'c', text: 'Instruct the Product Owner to revise and reprioritize the product backlog.' },
      { key: 'd', text: 'Pause all development cycles to prevent further misalignment and protect funding.' },
    ],
    correct: 'b',
    explanation:
      'In hybrid environments, you must assess and collaborate before acting or escalating. Option B establishes communication to evaluate whether a true misalignment exists or if it is simply a perception gap. Options A and C jump straight to solutions without full analysis, and Option D is an overreaction that negatively impacts schedule and morale.',
  },
  {
    id: 2,
    domain: 'Business Environment',
    topic: 'Compliance & Governance',
    prompt:
      'A key project sponsor requests the early deployment of a partially completed software feature to capitalize on a critical market window. The sponsor insists that final quality testing and regulatory compliance validation can be completed retroactively after deployment. What should the project manager do next?',
    options: [
      { key: 'a', text: "Document the sponsor's formal request in the project log and proceed with the early deployment." },
      { key: 'b', text: "Escalate the request to the organization's compliance body and pause deployment until validation is complete." },
      { key: 'c', text: "Bypass full quality testing but expedite a minimal legal review to meet the sponsor's timeline." },
      { key: 'd', text: 'Request that the team work overtime to finish both deployment and testing simultaneously.' },
    ],
    correct: 'b',
    explanation:
      'Under PMI ethics and governance guidelines, regulatory and legal compliance always takes priority over schedule constraints or sponsor pressure. Bypassing mandatory checks poses massive organizational risks.',
  },
  {
    id: 3,
    domain: 'People',
    topic: 'Stakeholder Engagement',
    prompt:
      'An agile software development team is delivering functionality sprint-by-sprint. However, the clinical director, who acts as the primary Product Owner, consistently misses the scheduled sprint reviews, resulting in a severe backlog of unapproved work and high rework rates. What is the best way for the project manager to handle this?',
    options: [
      { key: 'a', text: "Invite the clinical director to the daily stand-up meetings to closely monitor their availability." },
      { key: 'b', text: 'Proactively collaborate with the director to plan an alternative engagement strategy, such as recorded demos with feedback forms or designating a trusted delegate.' },
      { key: 'c', text: 'Request that the director lock and freeze all requirements at the start of each sprint to prevent rework.' },
      { key: 'd', text: 'Allow the team to proceed based on assumptions and let the director review deliverables whenever they become available.' },
    ],
    correct: 'b',
    explanation:
      'Stakeholder engagement must be structured and proactive, adapting to constraints rather than remaining rigid. Option B provides flexible, modern solutions to unblock the team.',
  },
  {
    id: 4,
    domain: 'Process',
    topic: 'Earned Value & Risk',
    prompt:
      "While reviewing performance metrics, the project manager notices that the project's Cost Performance Index (CPI) is 0.82 and the Schedule Performance Index (SPI) is 1.15. How should the project manager interpret and report these results to the steering committee?",
    options: [
      { key: 'a', text: 'The project is under budget and behind schedule.' },
      { key: 'b', text: 'The project is over budget and ahead of schedule.' },
      { key: 'c', text: 'The project is under budget and ahead of schedule.' },
      { key: 'd', text: 'The project is over budget and behind schedule.' },
    ],
    correct: 'b',
    explanation: 'A CPI of less than 1.0 indicates over-budget. An SPI greater than 1.0 means ahead of schedule.',
  },
  {
    id: 5,
    domain: 'Process',
    topic: 'Regulatory Compliance & Scope',
    prompt:
      'A Scrum team is delivering a 240 MW solar photovoltaic plant in two-week sprints, and inverter installation work packages are currently being pulled from the product backlog. During sprint planning, the project manager learns that the national grid operator has published an updated interconnection standard requiring third-party firmware certification for every inverter before the plant can be energized. The regulation applies to units the team has already installed and to those planned for the next three sprints. What should the project manager do next?',
    options: [
      { key: 'a', text: 'Halt inverter installation and re-baseline the release plan until the legal department completes a full compliance audit of the inverter design documentation.' },
      { key: 'b', text: 'Ask the sponsor to request a formal waiver from the grid operator so the installation iterations can proceed without change.' },
      { key: 'c', text: 'Collaborate with the product owner to add the firmware certification requirement to the product backlog and prioritize it for an upcoming sprint.' },
      { key: 'd', text: "Defer the new interconnection standard to the commissioning phase, since certification sits outside the team's control." },
    ],
    correct: 'c',
    explanation:
      'In an agile/Scrum context, when a new mandatory requirement lands mid-delivery, the PM and PO add it to the backlog and prioritize it for the next sprint(s).',
  },
  {
    id: 6,
    domain: 'People',
    topic: 'Stakeholder Alignment',
    prompt:
      "A program spans three business units, each having endorsed a shared objective statement. A project manager notices that alignment appears strong in every unit's own reviews, yet cross-unit integration checkpoints repeatedly surface conflicting interpretations of what the objective delivers. The project manager must decide how to gauge whether the program's stakeholders are genuinely aligned. Which basis offers the most trustworthy verdict on true alignment across the program?",
    options: [
      { key: 'a', text: "Positive alignment ratings within each unit's own reviews, since local confidence reflects how well each group understands the objective." },
      { key: 'b', text: 'Consistency of interpretation observed at shared cross-unit checkpoints, since integration touchpoints expose divergent meanings that isolated reviews conceal.' },
      { key: 'c', text: 'Endorsement of the shared objective statement by each unit, since formal sign-off confirms that all parties accepted the same stated intent.' },
      { key: 'd', text: 'Absence of escalated conflicts between the units, since a lack of raised disputes signals that shared understanding has been maintained over time.' },
    ],
    correct: 'b',
    explanation:
      'Siloed confidence (A) masks misalignment. Integration touchpoints force people to compare and expose the gaps. Option B is the reality check.',
  },
  {
    id: 7,
    domain: 'Business Environment',
    topic: 'Budget Structure',
    prompt:
      'A team lead reviews a completed budget and notices the sponsor has questioned why the total authorized funds exceed the cost baseline by a fixed amount held at the enterprise level. The lead must classify what portion causes this difference. Which element accounts for the gap between the cost baseline and the total project budget?',
    options: [
      { key: 'a', text: 'Management reserve set aside for unforeseen scope changes.' },
      { key: 'b', text: 'Aggregated work package estimates carried up to the summary level.' },
      { key: 'c', text: 'Activity cost estimates combined across all project control accounts and phases.' },
      { key: 'd', text: 'Contingency reserve rolled into each control account estimate.' },
    ],
    correct: 'a',
    explanation: 'The management reserve is the difference between the cost baseline and the total project budget.',
  },
  {
    id: 8,
    domain: 'Process',
    topic: 'Hybrid Scheduling',
    prompt:
      'A project manager leads a hospital records modernization program. The data center migration is planned predictively with a WBS, a baselined milestone schedule, and a fixed regulatory cutover date, while the clinician-facing portal is built by a team working in two-week iterations from an evolving, prioritized backlog. The steering committee wants one integrated schedule showing how portal readiness affects the cutover milestone, and the portal team objects that detailed long-range task planning will invalidate backlog refinement. What should the project manager do?',
    options: [
      { key: 'a', text: 'Decompose the full portal backlog into fixed-duration work packages now and baseline them so the committee receives one detailed predictive schedule.' },
      { key: 'b', text: 'Shift the migration work packages into two-week iterations matching the portal cadence so both components share one backlog and velocity-based forecast.' },
      { key: 'c', text: 'Keep separate schedules for each component and report portal progress with burndown charts, resolving the cutover dependency later during integrated system testing once both teams stabilize their own plans.' },
      { key: 'd', text: 'Model the portal work in the master schedule as rolling-wave summary blocks tied to release milestones, elaborating just the next two iterations and preserving the cutover dependency.' },
    ],
    correct: 'd',
    explanation:
      "Rolling-wave summary blocks let the committee see the integration risk while protecting the portal team's backlog refinement autonomy.",
  },
  {
    id: 9,
    domain: 'Process',
    topic: 'Definition of Done',
    prompt:
      'A Scrum team is rolling out 5G small cells across a dense urban borough, delivering roughly eight sites per two-week sprint. Stories are marked complete once the radio unit is mounted and powered, but the RF signal verification test is performed weeks later by a separate field crew. In the last review, the product owner reported that six previously accepted sites failed verification and required crews to return to the poles. What is the most appropriate action for the team to take?',
    options: [
      { key: 'a', text: "Expand the team's definition of done so each small cell site passes RF signal verification before the story is accepted as complete." },
      { key: 'b', text: 'Add a separate quality control iteration at the end of the release so the installed small cell sites can be inspected in one pass.' },
      { key: 'c', text: 'Record each failing site as a defect story and batch the rework into a dedicated hardening sprint after the rollout finishes.' },
      { key: 'd', text: 'Increase the sampling rate used by the field verification crew so that fewer defective sites reach the network operations acceptance review at closeout.' },
    ],
    correct: 'a',
    explanation: 'Quality must be built in, not inspected later. Expanding DoD to include RF verification prevents rework.',
  },
  {
    id: 10,
    domain: 'Business Environment',
    topic: 'Make-or-Buy',
    prompt:
      'A team completed a make-or-buy analysis showing that buying a module costs $80,000 while building it costs $75,000 in-house. Leadership still chose to buy. What is the most likely valid reason to justify selecting the higher-cost option here?',
    options: [
      { key: 'a', text: 'In-house builds should be avoided since they consistently produce weaker quality results overall.' },
      { key: 'b', text: 'The purchase price is always the single deciding element in any sourcing choice.' },
      { key: 'c', text: 'Buying options must be chosen whenever a qualified external vendor submits a proposal.' },
      { key: 'd', text: 'Freeing internal staff to focus on strategic work carries value beyond the quoted price gap.' },
    ],
    correct: 'd',
    explanation:
      'The $5,000 premium is justified by the strategic opportunity cost of keeping skilled resources on this module instead of higher-value work.',
  },
  {
    id: 11,
    domain: 'Business Environment',
    topic: 'Project Inputs',
    prompt:
      "A project manager is preparing to initiate a new product development project. The team has identified and gathered the organization's centralized repository of past project schedules, budgets, cost performance indices, and documented lessons learned from similar completed projects. How should this item be classified in project management inputs?",
    options: [
      { key: 'a', text: 'An Organizational Process Asset because it represents documented knowledge and lessons learned from previous similar projects that can be reused to inform the current project.' },
      { key: 'b', text: "An Enterprise Environmental Factor because it reflects the organization's internal conditions and culture." },
      { key: 'c', text: 'An Enterprise Environmental Factor because it represents data that existed before the current project started.' },
      { key: 'd', text: "An Organizational Process Asset because it is a mandatory constraint imposed by the organization's governance structure." },
    ],
    correct: 'a',
    explanation:
      'OPA = internal institutional knowledge and lessons learned that can be reused. Past project data is reusable knowledge (OPA), not an external constraint (EEF).',
  },
  {
    id: 12,
    domain: 'Process',
    topic: 'Quality Measurement',
    prompt:
      'A quality analyst is investigating why a completed inspection report shows all measurements passing individual limits, yet customer complaints about fit continue to rise. The analyst suspects the sampling frequency may be masking short-term shifts during production runs. Which measurement approach would help reveal these hidden shifts across the run?',
    options: [
      { key: 'a', text: 'Rely on a single end-of-run capability study to confirm the process still meets the customer requirements.' },
      { key: 'b', text: 'Replace variable measurements with attribute pass/fail counts to simplify the ongoing inspection reporting effort.' },
      { key: 'c', text: 'Increase subgroup sampling frequency and plot X-bar and R charts to expose within-run variation over time.' },
      { key: 'd', text: 'Widen the specification limits so that borderline measurements are recorded as conforming during each run.' },
    ],
    correct: 'c',
    explanation: 'X-bar and R charts with higher sampling frequency reveal within-run process shifts and trends that infrequent sampling masks.',
  },
  {
    id: 13,
    domain: 'Process',
    topic: 'Resource Management',
    prompt:
      "A project manager assigns a specialist to a task modeled with a back-loaded resource contour, but the team member reports feeling underused early and overwhelmed near the task's end. The manager wants effort spread evenly across the task duration to stabilize daily workload. Which resource contour should be applied to this assignment?",
    options: [
      { key: 'a', text: "A bell-shaped contour that peaks the specialist's effort at the midpoint of the task period." },
      { key: 'b', text: "A front-loaded contour that concentrates the specialist's heaviest effort during the opening days." },
      { key: 'c', text: "A flat contour that keeps the specialist's daily effort constant across the whole task." },
      { key: 'd', text: 'A trapezoidal contour that ramps effort up and then holds it steady before tapering near the finish.' },
    ],
    correct: 'c',
    explanation: 'A flat contour keeps daily effort constant, avoiding the early underutilization and late overwhelm.',
  },
  {
    id: 14,
    domain: 'Business Environment',
    topic: 'Benefits Management',
    prompt:
      "Which characteristic best describes a 'sustained benefit' as opposed to a 'realized benefit' in benefits management?",
    options: [
      { key: 'a', text: 'A gain expressed as a target metric recorded within the benefits register document.' },
      { key: 'b', text: 'A projected gain forecast during the early planning stages of the initiative.' },
      { key: 'c', text: 'A gain that continues to deliver value well beyond its initial measurement point.' },
      { key: 'd', text: 'A gain that has been confirmed as achieved at a single measurement checkpoint.' },
    ],
    correct: 'c',
    explanation:
      'Realized benefit = value captured at a checkpoint. Sustained benefit = value persists and keeps flowing beyond that checkpoint.',
  },
  {
    id: 15,
    domain: 'People',
    topic: 'Organizational Readiness',
    prompt:
      'A project manager is conducting a readiness assessment for a process improvement initiative. She finds that frontline employees are enthusiastic about the change, senior leaders have endorsed the initiative publicly, but middle managers express concerns about losing authority over their teams. The project manager needs to determine what this pattern of responses reveals about the organization\'s readiness. What does this mixed-level response pattern most likely suggest about the overall organizational readiness?',
    options: [
      { key: 'a', text: 'Readiness is primarily determined by senior leadership support, so the middle management concerns will naturally resolve once the initiative gains momentum through executive sponsorship.' },
      { key: 'b', text: 'Readiness varies across organizational layers, and the middle management layer represents a potential adoption bottleneck that must be addressed through targeted engagement.' },
      { key: 'c', text: 'Readiness should be measured by aggregating all responses into a single score, and the positive responses from two levels indicate the organization meets the threshold for proceeding with implementation.' },
      { key: 'd', text: 'Readiness is strong overall because both senior leadership endorsement and frontline enthusiasm together outweigh concerns raised by a single management layer.' },
    ],
    correct: 'b',
    explanation:
      "Middle-management resistance is real and won't self-resolve. They are the implementation layer — if they feel threatened, adoption stalls.",
  },
  {
    id: 16,
    domain: 'Business Environment',
    topic: 'Change Control & Compliance',
    prompt:
      'SkyLink Regional is replacing its crew-pairing system with a cloud platform over 14 months in a hybrid approach. A threat (national aviation authority revises flight-time limitation rules) materializes in month 5 with eight months to implement. A vendor proposes a compliance module that would consume three times the remaining contingency reserve and add three sprints. The steering committee acts as the change control board. The vendor argues that because regulatory compliance is mandatory, the module should simply be added to the sprint backlog and built. What is the project manager\'s most appropriate response?',
    options: [
      { key: 'a', text: 'Let the product owner reprioritize the backlog for the next sprint and inform the committee afterward.' },
      { key: 'b', text: 'Submit a change request with the impact analysis and response options to the steering committee for a decision, even though compliance itself is non-negotiable.' },
      { key: 'c', text: 'Treat externally imposed regulatory work as exempt from change control and update the schedule directly.' },
      { key: 'd', text: 'Wait for the compliance officer to issue a directive before taking the item to governance.' },
    ],
    correct: 'b',
    explanation:
      'The regulatory requirement is mandatory, but how to meet it is a governance call. Distinguish between the requirement (non-negotiable) and the implementation approach (subject to change control).',
  },
  {
    id: 17,
    domain: 'Process',
    topic: 'Agile Risk Management',
    prompt:
      'A Scrum team at an electric utility is delivering distribution automation software in two-week sprints to control feeder reclosers on a rural circuit. During the daily standup, a developer mentions that the new controller firmware planned for the next iteration may need regional reliability coordinator certification, which historically takes several weeks and could delay field cutover. The item is not reflected anywhere in the team\'s artifacts. Acting as a servant leader, how should the Scrum Master handle this newly identified risk?',
    options: [
      { key: 'a', text: 'Hold the current sprint\'s remaining work until the regulator confirms that the relay testing window is open.' },
      { key: 'b', text: "Escalate the risk directly to the utility's program steering committee so that executives can decide on the response for the team." },
      { key: 'c', text: 'Note the risk in the sprint retrospective notes and revisit it after the increment is demonstrated at the upcoming sprint review meeting.' },
      { key: 'd', text: 'Record the risk so it is visible to the team, then work with the product owner to prioritize a response item in the backlog.' },
    ],
    correct: 'd',
    explanation:
      'A servant-leader Scrum Master captures emerging risks, makes them visible, and facilitates team/PO collaboration to build response into the backlog.',
  },
  {
    id: 18,
    domain: 'Business Environment',
    topic: 'Enterprise Environmental Factors',
    prompt:
      'A team is starting a new project to build a mobile app. During a planning meeting, a team member mentions that the local economy has recently entered a recession. The project manager wants to understand how this external factor might affect the project. What should the project manager do first?',
    options: [
      { key: 'a', text: "Review how the recession could impact competitor strategies and then update the project's risk register with financial assumptions." },
      { key: 'b', text: 'Conduct a stakeholder analysis to map internal team roles and responsibilities for the mobile app development.' },
      { key: 'c', text: 'Assess how the recession could influence project funding, resource availability, and market demand for the app.' },
      { key: 'd', text: 'Evaluate how the recession might change the project schedule by reviewing the critical path and float calculations.' },
    ],
    correct: 'c',
    explanation:
      "A recession is an EEF. The PM must first assess its direct impact on the project's key constraints: funding, resources, and demand.",
  },
  {
    id: 19,
    domain: 'Process',
    topic: 'Critical Chain & Resource Constraints',
    prompt:
      'A team runs two CCM projects that share one specialist. Leadership reviews a dashboard where Project A shows its project buffer at 45% consumed with 30% of the critical chain complete, while Project B shows its buffer at 20% consumed with 55% complete. Both request the specialist next week. Which project should receive the specialist first?',
    options: [
      { key: 'a', text: 'Project B, because its higher completion percentage means finishing it will free the shared specialist sooner.' },
      { key: 'b', text: 'Project A, because the project with fewer completed critical chain tasks always holds priority for scarce resources.' },
      { key: 'c', text: 'Project B, since its lower buffer consumption rate confirms it is the constrained project needing protection first.' },
      { key: 'd', text: 'Project A, since its buffer consumption is outpacing its progress and signals higher schedule risk.' },
    ],
    correct: 'd',
    explanation:
      'In CCM, buffer consumption ratio signals urgency. Project A: 45% buffer for only 30% progress = 1.5x rate (unhealthy). Prioritize the at-risk project.',
  },
  {
    id: 20,
    domain: 'Business Environment',
    topic: 'PESTLE Analysis',
    prompt:
      'In a PESTLE analysis, which specific macro-environmental factor is primarily classified within the Legal domain rather than the Political category?',
    options: [
      { key: 'a', text: 'Shifts in demographic purchasing power alongside changing population lifestyle preferences.' },
      { key: 'b', text: 'Trade tariffs, tax policy reforms, and government stability indices affecting international commerce.' },
      { key: 'c', text: 'Consumer protection mandates and employment safety statutes enforced by state agencies.' },
      { key: 'd', text: 'Fluctuations in foreign exchange rates and their subsequent impact on material supply chains.' },
    ],
    correct: 'c',
    explanation:
      'Legal = statutory and regulatory requirements (consumer protection laws, safety statutes, employment regulations). Political = government decisions and policy changes. Option C is Legal.',
  },
  {
    id: 21,
    domain: 'People',
    topic: 'Organizational Culture & Leadership',
    prompt:
      "In digital transformation leadership, what does a 'culture of psychological safety' primarily enable within a team?",
    options: [
      { key: 'a', text: 'Members gain unrestricted authority to approve budgets and select vendors for digital tools.' },
      { key: 'b', text: 'Members receive guaranteed job protection regardless of how the transformation performs over time.' },
      { key: 'c', text: 'Members follow standardized procedures that reduce variation across all technology rollouts.' },
      { key: 'd', text: 'Members feel secure to experiment, raise concerns, and admit mistakes as they adopt new technologies.' },
    ],
    correct: 'd',
    explanation:
      'Psychological safety enables experimentation, voicing concerns, and admitting errors — all critical during transformation when people are uncertain and learning.',
  },
  {
    id: 22,
    domain: 'People',
    topic: 'Professional Conduct & Ethics',
    prompt:
      'A project manager estimates that a task will take three weeks based on rough assumptions. A stakeholder asks for the number during a meeting, and the PM presents it as a firm commitment to appear confident. Later the estimate proves unrealistic. Which aspect of professional conduct did the PM most clearly compromise?',
    options: [
      { key: 'a', text: 'Truthfully conveying the level of uncertainty tied to preliminary figures shared with others.' },
      { key: 'b', text: 'Protecting confidential planning data from being shared too early with external stakeholders.' },
      { key: 'c', text: 'Maintaining fairness by giving all stakeholders equal access to the same estimation details.' },
      { key: 'd', text: 'Respecting cultural differences in how various stakeholders interpret schedule commitments and dates.' },
    ],
    correct: 'a',
    explanation:
      'The PM masked uncertainty and presented a rough estimate as a firm commitment. Transparency about uncertainty is a core professional duty.',
  },
  {
    id: 23,
    domain: 'People',
    topic: 'Resource & Role Management',
    prompt:
      'A project manager designs a new resource management approach for a hybrid team blending permanent members with rotating specialists. Turnover among specialists is high, and each departure leaves gaps in who covers which deliverables. The manager wants a sustainable structure that keeps accountability stable even as individuals cycle in and out. What should the manager build to achieve this?',
    options: [
      { key: 'a', text: 'A responsibility framework tied to defined roles rather than named individuals, so incoming specialists inherit clear duties.' },
      { key: 'b', text: 'A rotating RACI matrix updated each time a specialist leaves, listing every current person against each project task.' },
      { key: 'c', text: 'A charter section that assigns accountability to whichever senior member has the longest remaining tenure on the team.' },
      { key: 'd', text: 'A detailed competency register mapping each named specialist to their skills and past deliverable contributions.' },
    ],
    correct: 'a',
    explanation:
      'Role-based accountability decouples duties from individuals, making transitions seamless. In high-turnover environments, roles outlast people.',
  },
  {
    id: 24,
    domain: 'People',
    topic: 'Cultural Awareness & Stakeholder Engagement',
    prompt:
      'A project manager is onboarding a new team member from Thailand into a global agile team. During the first sprint planning, the new member agrees to all task estimates proposed by others and does not raise concerns, even when timelines seem aggressive. The project manager suspects the member may have reservations but is deferring to the group. What should the project manager do to gather the member\'s genuine input?',
    options: [
      { key: 'a', text: 'Send a team-wide anonymous survey after each sprint planning session to collect honest feedback on estimates.' },
      { key: 'b', text: 'Pair the new member with a senior teammate from a similar cultural background to encourage open discussion during planning.' },
      { key: 'c', text: 'Ask the member to share their concerns during the next sprint planning by calling on them individually in the meeting.' },
      { key: 'd', text: 'Follow up with the member in a private one-on-one conversation to ask about their comfort level with the estimates.' },
    ],
    correct: 'd',
    explanation:
      'A private one-on-one conversation creates a safe space where the member can express genuine concerns without social pressure — this aligns with collectivist cultural norms common in many Asian cultures.',
  },
]
