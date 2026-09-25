import type { PMPQuestion } from './pmp-quiz-types'

export const anastasiaBizEnvQuestions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'Business Environment',
    topic: 'Regulatory Compliance',
    prompt:
      'A project operates in a heavily regulated industry. Midway through execution, a new regulation is issued that affects one deliverable. What should the project manager do FIRST?',
    options: [
      {
        key: 'a',
        text: 'Ignore it until the enforcement date arrives, since project baselines take priority over pending regulations.',
      },
      {
        key: 'b',
        text: "Assess the regulation's impact and route the change through the appropriate governance/change control process.",
      },
      {
        key: 'c',
        text: 'Unilaterally redesign the deliverable without informing stakeholders or assessing the actual impact.',
      },
      {
        key: 'd',
        text: 'Escalate to legal and take no further action, leaving the assessment and change process to someone else.',
      },
    ],
    correct: 'b',
    explanation:
      'A new regulatory requirement should be assessed for impact and processed through the appropriate change/governance path before action is taken.',
  },
  {
    id: 2,
    domain: 'Business Environment',
    topic: 'Compliance Audits',
    prompt:
      'An internal audit finds the project team has been skipping a mandatory compliance checkpoint to save time, though no incidents have occurred yet. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Reinstate the mandatory checkpoint immediately and explain its purpose and importance to the team.',
      },
      {
        key: 'b',
        text: 'Ignore the finding since no incident has occurred as a result of skipping the checkpoint so far.',
      },
      {
        key: 'c',
        text: 'Wait for the next scheduled audit cycle before taking any corrective action on the checkpoint.',
      },
      {
        key: 'd',
        text: 'Ask the sponsor to informally waive the requirement so the team can keep moving quickly.',
      },
    ],
    correct: 'a',
    explanation:
      'Mandatory compliance controls must be restored regardless of whether an incident has occurred; the absence of harm so far does not reduce the obligation.',
  },
  {
    id: 3,
    domain: 'Business Environment',
    topic: 'Data Privacy Regulations',
    prompt:
      'A project will collect customer data across multiple countries. What should the project manager confirm before data collection begins?',
    options: [
      {
        key: 'a',
        text: 'That collection will speed up delivery timelines across all of the participating regional teams.',
      },
      {
        key: 'b',
        text: 'That the development team prefers the chosen data collection and storage tooling over alternatives.',
      },
      {
        key: 'c',
        text: 'That the sponsor has personally approved the visual design of the resulting data dashboard.',
      },
      {
        key: 'd',
        text: 'That data handling complies with the privacy regulations of every applicable jurisdiction before collection begins.',
      },
    ],
    correct: 'd',
    explanation:
      'Cross-border data collection must comply with the privacy/data-protection regulations of every applicable jurisdiction, verified before collection starts.',
  },
  {
    id: 4,
    domain: 'Business Environment',
    topic: 'Benefits Realization',
    prompt:
      "A project delivers all outputs on schedule, but six months later the expected cost savings haven't materialized. What was most likely missing from the plan?",
    options: [
      {
        key: 'a',
        text: "Nothing; benefits tracking is entirely operations' responsibility once the project formally closes.",
      },
      {
        key: 'b',
        text: 'A larger contingency reserve set aside specifically to cover unexpected cost overruns.',
      },
      {
        key: 'c',
        text: 'A benefits realization plan defining post-launch measurement, ownership, and tracking of the expected savings.',
      },
      {
        key: 'd',
        text: 'A stricter change control process applied to future scope requests after go-live.',
      },
    ],
    correct: 'c',
    explanation:
      'Delivering outputs does not guarantee benefits. A benefits realization plan defines how and by whom value will be measured after go-live.',
  },
  {
    id: 5,
    domain: 'Business Environment',
    topic: 'Value vs. Output',
    prompt:
      'A team is proud that they delivered 100% of planned scope on budget, but the sponsor asks whether the project actually achieved its intended outcome. What best reflects the project manager’s role here?',
    options: [
      {
        key: 'a',
        text: 'Track and report progress toward the intended business outcome/value achieved, not merely output completion.',
      },
      {
        key: 'b',
        text: 'Deliverables completed on time and on budget are the only meaningful measure of project success.',
      },
      {
        key: 'c',
        text: "Refer the sponsor's question to operations and take no further action on it directly.",
      },
      {
        key: 'd',
        text: 'Consider the project complete once scope is delivered, and close it without any further outcome reporting.',
      },
    ],
    correct: 'a',
    explanation:
      'The 2026 ECO emphasizes outcomes and value over output completion; the project manager should connect delivery to intended business results.',
  },
  {
    id: 6,
    domain: 'Business Environment',
    topic: 'Cost-Benefit Analysis',
    prompt:
      'A proposed scope addition would cost $150,000 and is expected to increase annual benefit by $40,000. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Approve it immediately, since additional scope generally improves the final product.',
      },
      {
        key: 'b',
        text: 'Reject it unilaterally without analysis, since the cost figure alone looks too high.',
      },
      {
        key: 'c',
        text: 'Approve it quietly without informing the sponsor or documenting the rationale.',
      },
      {
        key: 'd',
        text: 'Present the cost-benefit analysis to the appropriate governance body for a value-based funding decision.',
      },
    ],
    correct: 'd',
    explanation:
      'Scope decisions with a weak cost-benefit ratio should be surfaced with data to governance/business stakeholders rather than decided unilaterally.',
  },
  {
    id: 7,
    domain: 'Business Environment',
    topic: 'External Environment Monitoring',
    prompt:
      "A long-running project's business case was approved two years ago. The industry has since changed significantly. What should the project manager do periodically?",
    options: [
      {
        key: 'a',
        text: 'Nothing; an approved business case does not need revisiting once the project is underway.',
      },
      {
        key: 'b',
        text: 'Reassess the business case against current external conditions together with the sponsor.',
      },
      {
        key: 'c',
        text: 'Wait until the project ends to check whether the business case is still relevant.',
      },
      {
        key: 'd',
        text: 'Ask the team to vote informally on whether the project should continue as planned.',
      },
    ],
    correct: 'b',
    explanation:
      'Long-running projects should periodically revalidate the business case against a changing external environment, in partnership with the sponsor.',
  },
  {
    id: 8,
    domain: 'Business Environment',
    topic: 'Competitive Landscape',
    prompt:
      'During execution, a competitor releases a similar product ahead of schedule. What is the MOST appropriate immediate step?',
    options: [
      {
        key: 'a',
        text: 'Continue exactly as planned with no reassessment of the competitive shift.',
      },
      {
        key: 'b',
        text: 'Rush the project to completion regardless of any resulting quality or cost impact.',
      },
      {
        key: 'c',
        text: "Notify business stakeholders and evaluate whether the project's approach or priorities need adjustment.",
      },
      {
        key: 'd',
        text: 'Cancel the project immediately without consulting the sponsor or business stakeholders.',
      },
    ],
    correct: 'c',
    explanation:
      'A material competitive shift warrants evaluation with business stakeholders before deciding whether or how to adjust course.',
  },
  {
    id: 9,
    domain: 'Business Environment',
    topic: 'Economic & Market Factors',
    prompt:
      "A project's cost estimates were based on stable material prices. A sudden market shift causes significant price volatility. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Reassess cost and risk exposure, then communicate the impact through the appropriate change/governance process.',
      },
      {
        key: 'b',
        text: 'Absorb any resulting cost overruns quietly, without reporting them to the sponsor.',
      },
      {
        key: 'c',
        text: 'Cancel all procurement activity immediately, regardless of what is already committed.',
      },
      {
        key: 'd',
        text: 'Ignore the volatility, since price movements are an external factor outside the plan.',
      },
    ],
    correct: 'a',
    explanation:
      'External economic shifts that affect cost still require impact assessment and transparent communication through governance.',
  },
  {
    id: 10,
    domain: 'Business Environment',
    topic: 'Organizational Change Management',
    prompt:
      'A project will change how several departments operate day-to-day. What should be planned alongside the technical delivery?',
    options: [
      {
        key: 'a',
        text: 'Nothing beyond the standard technical training material already planned for the rollout.',
      },
      {
        key: 'b',
        text: 'A stricter production deadline set to force faster adoption of the new process.',
      },
      {
        key: 'c',
        text: 'Reduced stakeholder communication, to avoid provoking early resistance to the change.',
      },
      {
        key: 'd',
        text: 'An organizational change management plan addressing readiness, communication, and adoption.',
      },
    ],
    correct: 'd',
    explanation:
      'Operational change requires a deliberate change management plan covering readiness, communication, and adoption, not just technical training.',
  },
  {
    id: 11,
    domain: 'Business Environment',
    topic: 'Change Readiness',
    prompt:
      'Pre-launch surveys show that a significant portion of end users do not feel prepared for an upcoming system change. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Launch anyway, since the system itself is already technically ready for production use.',
      },
      {
        key: 'b',
        text: 'Postpone the project indefinitely until every user reports feeling fully prepared.',
      },
      {
        key: 'c',
        text: 'Address the readiness gap with targeted communication and training before or during rollout.',
      },
      {
        key: 'd',
        text: "Report only the system's technical readiness to the sponsor, omitting user feedback.",
      },
    ],
    correct: 'c',
    explanation:
      'Technical readiness is not sufficient; organizational/user readiness gaps should be closed with targeted support before or during rollout.',
  },
  {
    id: 12,
    domain: 'Business Environment',
    topic: 'Contract & Procurement Considerations',
    prompt:
      'A vendor proposes a change that would reduce contract cost but may violate a data-residency clause in the agreement. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Approve the change immediately, since it reduces overall contract cost.',
      },
      {
        key: 'b',
        text: 'Review the proposal against contractual and legal obligations before deciding.',
      },
      {
        key: 'c',
        text: "Approve it without review, trusting the vendor's judgment on data residency.",
      },
      {
        key: 'd',
        text: 'Ignore the clause entirely, since legal, not the project team, originally wrote it.',
      },
    ],
    correct: 'b',
    explanation:
      'Any vendor change must be checked against contractual and legal obligations, including data-residency terms, before approval.',
  },
  {
    id: 13,
    domain: 'Business Environment',
    topic: 'Procurement Strategy',
    prompt:
      'A project requires specialized expertise the organization does not have internally, and the work is well-defined with clear deliverables. What should be considered?',
    options: [
      {
        key: 'a',
        text: 'A make-or-buy analysis, weighing external procurement against internal staffing for the defined work.',
      },
      {
        key: 'b',
        text: 'Hiring permanent staff for the role, regardless of how long the project actually runs.',
      },
      {
        key: 'c',
        text: 'Delaying the project until internal staff can be trained to fill the specialized gap.',
      },
      {
        key: 'd',
        text: 'Ignoring the resource gap entirely and proceeding on the current plan and schedule.',
      },
    ],
    correct: 'a',
    explanation:
      'A make-or-buy analysis helps decide whether well-defined, specialized work is better sourced externally than staffed internally.',
  },
  {
    id: 14,
    domain: 'Business Environment',
    topic: 'Sustainability Considerations',
    prompt:
      "A project's chosen materials and technology have a significant environmental footprint. Consistent with the July 2026 ECO's expanded business-environment emphasis, what should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Address only the cost and schedule impacts, leaving sustainability for a later phase.',
      },
      {
        key: 'b',
        text: 'Ignore sustainability entirely, since it falls outside the traditional triple constraint.',
      },
      {
        key: 'c',
        text: 'Delegate the sustainability decision entirely to the vendor without further review.',
      },
      {
        key: 'd',
        text: 'Assess sustainability implications alongside cost, schedule, and risk, involving the relevant stakeholders.',
      },
    ],
    correct: 'd',
    explanation:
      'Sustainability is part of current business-environment judgment and should be weighed alongside cost, schedule, and risk with the relevant stakeholders.',
  },
  {
    id: 15,
    domain: 'Business Environment',
    topic: 'ESG Reporting',
    prompt:
      "A sponsor asks whether the project's outcomes align with the organization's published ESG commitments. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'State plainly that ESG considerations are not part of project management.',
      },
      {
        key: 'b',
        text: "Evaluate and report on the project's alignment, or gaps, with the relevant ESG commitments.",
      },
      {
        key: 'c',
        text: "Refer the sponsor's question directly to the marketing department instead.",
      },
      {
        key: 'd',
        text: 'Avoid answering, since ESG was never explicitly mentioned in the original charter.',
      },
    ],
    correct: 'b',
    explanation:
      'Project managers are expected to connect project outcomes to organizational commitments, including ESG, when relevant and asked.',
  },
  {
    id: 16,
    domain: 'Business Environment',
    topic: 'Strategic Alignment',
    prompt:
      "A project is technically successful but no longer supports the organization's updated strategic priorities. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Continue exactly as planned, since the project charter was already formally approved.',
      },
      {
        key: 'b',
        text: 'Continue silently and hope that no one notices the strategic shift has occurred.',
      },
      {
        key: 'c',
        text: 'Raise the misalignment with the sponsor/governance body for a decision on continuation, adjustment, or closure.',
      },
      {
        key: 'd',
        text: "Unilaterally change the project's scope in an attempt to realign it with strategy.",
      },
    ],
    correct: 'c',
    explanation:
      'A project that no longer aligns with strategy should be surfaced to governance for a deliberate decision, not adjusted or ignored unilaterally.',
  },
  {
    id: 17,
    domain: 'Business Environment',
    topic: 'Business Case Validity',
    prompt:
      'Midway through a long project, a key assumption underlying the original business case turns out to be inaccurate. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Reassess the business case using updated assumptions and inform governance of any resulting impact.',
      },
      {
        key: 'b',
        text: 'Ignore it, since the original business case was already formally approved.',
      },
      {
        key: 'c',
        text: 'Keep executing exactly as planned, without informing anyone of the discrepancy.',
      },
      {
        key: 'd',
        text: 'Cancel the project unilaterally, without consulting the sponsor or governance.',
      },
    ],
    correct: 'a',
    explanation:
      'An invalidated assumption should trigger reassessment of the business case and transparent communication with governance.',
  },
  {
    id: 18,
    domain: 'Business Environment',
    topic: 'Governance Structures',
    prompt:
      'A project spans multiple departments with unclear decision-making authority, causing delays. What should the project manager establish?',
    options: [
      {
        key: 'a',
        text: 'Nothing; the departments should be left entirely to self-organize on decisions.',
      },
      {
        key: 'b',
        text: 'A single department owning all decisions, regardless of its actual area of expertise.',
      },
      {
        key: 'c',
        text: 'No formal governance structure at all, in order to preserve maximum flexibility.',
      },
      {
        key: 'd',
        text: 'A clear governance structure defining roles, decision rights, and escalation paths.',
      },
    ],
    correct: 'd',
    explanation:
      'Cross-departmental ambiguity is resolved by establishing clear governance: who decides what, and how issues escalate.',
  },
  {
    id: 19,
    domain: 'Business Environment',
    topic: 'Steering Committee Reporting',
    prompt:
      'A steering committee meets quarterly, but a significant risk has emerged that could affect the next milestone. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Wait for the next scheduled quarterly steering committee meeting to raise it.',
      },
      {
        key: 'b',
        text: 'Escalate the risk to the steering committee or sponsor outside the normal cadence, given its urgency.',
      },
      {
        key: 'c',
        text: 'Handle the risk alone, without informing governance of what has emerged.',
      },
      {
        key: 'd',
        text: 'Document it only in the risk register, and take no other action for now.',
      },
    ],
    correct: 'b',
    explanation:
      'Urgent, milestone-threatening risks warrant out-of-cycle escalation rather than waiting for the next scheduled governance meeting.',
  },
  {
    id: 20,
    domain: 'Business Environment',
    topic: 'Enterprise Environmental Factors',
    prompt:
      'A project team is working across two organizational cultures with different norms around hierarchy and decision-making. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: "Impose one culture's hierarchy and decision-making norms on the entire team.",
      },
      {
        key: 'b',
        text: 'Ignore the cultural differences entirely, treating them as irrelevant to delivery.',
      },
      {
        key: 'c',
        text: 'Understand and adapt facilitation and communication approaches to bridge the cultural differences.',
      },
      {
        key: 'd',
        text: 'Split the team permanently into two groups, along the existing cultural lines.',
      },
    ],
    correct: 'c',
    explanation:
      'Enterprise environmental factors like organizational culture should be understood and adapted to, not imposed over or ignored.',
  },
  {
    id: 21,
    domain: 'Business Environment',
    topic: 'Organizational Process Assets',
    prompt:
      'A project manager is starting a new initiative similar to past projects. What should be reviewed FIRST to leverage prior experience?',
    options: [
      {
        key: 'a',
        text: 'Organizational process assets such as lessons learned, templates, and historical data from similar past projects.',
      },
      {
        key: 'b',
        text: 'Nothing; starting entirely from scratch is thought to preserve objectivity and avoid old biases.',
      },
      {
        key: 'c',
        text: "Only the current team's personal opinions about what worked well on their last assignment.",
      },
      {
        key: 'd',
        text: 'Public competitor websites describing their own similar initiatives and marketing claims.',
      },
    ],
    correct: 'a',
    explanation:
      'Organizational process assets — lessons learned, templates, historical data — should inform planning for a similar new initiative.',
  },
  {
    id: 22,
    domain: 'Business Environment',
    topic: 'Customer & Market Awareness',
    prompt:
      'A project team is deep in technical execution and has lost touch with evolving customer needs. What should the project manager encourage?',
    options: [
      {
        key: 'a',
        text: 'Continuing to build strictly to the original requirements, without revisiting customer input.',
      },
      {
        key: 'b',
        text: 'Avoiding further customer contact entirely, in order to prevent scope creep.',
      },
      {
        key: 'c',
        text: 'Relying solely on the original requirements document for the rest of the project.',
      },
      {
        key: 'd',
        text: 'Periodic customer and market feedback loops to validate the product still meets evolving needs.',
      },
    ],
    correct: 'd',
    explanation:
      'Ongoing customer/market feedback keeps delivery aligned with real, evolving needs rather than a static original requirements set.',
  },
  {
    id: 23,
    domain: 'Business Environment',
    topic: 'Market Timing',
    prompt:
      'Market research indicates that delaying a product launch by one month would significantly increase adoption due to a seasonal buying pattern. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Launch on the original date regardless of what the market research indicates.',
      },
      {
        key: 'b',
        text: 'Present the market timing data to business stakeholders for a value-based launch-date decision.',
      },
      {
        key: 'c',
        text: 'Decide unilaterally to delay the launch, without consulting business stakeholders.',
      },
      {
        key: 'd',
        text: "Ignore the market research entirely, since it wasn't part of the original project plan.",
      },
    ],
    correct: 'b',
    explanation:
      'Market timing insights that affect value should be brought to business stakeholders for a joint, informed decision.',
  },
  {
    id: 24,
    domain: 'Business Environment',
    topic: 'Responsible AI & Business Ethics',
    prompt:
      'A project is deploying an AI-assisted decision tool that affects customers. What business-environment consideration is MOST important before go-live?',
    options: [
      {
        key: 'a',
        text: 'Only whether the underlying model is technically accurate in its predictions and outputs.',
      },
      {
        key: 'b',
        text: 'Whether the tool reduces headcount by the largest amount possible across the department.',
      },
      {
        key: 'c',
        text: "Whether the tool's use complies with ethical, regulatory, and governance expectations, beyond just technical accuracy.",
      },
      {
        key: 'd',
        text: 'Whether competing organizations are already using similar AI-assisted tools in production.',
      },
    ],
    correct: 'c',
    explanation:
      'Responsible AI use requires ethical, regulatory, and governance considerations alongside technical performance.',
  },
  {
    id: 25,
    domain: 'Business Environment',
    topic: 'Data Governance',
    prompt:
      'A project will use customer data from multiple existing systems to train an internal analytics tool. What should the project manager verify FIRST?',
    options: [
      {
        key: 'a',
        text: 'That the data is technically accessible across all of the source systems involved.',
      },
      {
        key: 'b',
        text: 'That the data looks reasonably clean and complete at a first glance.',
      },
      {
        key: 'c',
        text: 'That the software vendor recommends this particular approach to training.',
      },
      {
        key: 'd',
        text: 'That data usage complies with applicable data governance, consent, and privacy requirements.',
      },
    ],
    correct: 'd',
    explanation:
      'Before repurposing customer data, compliance with data governance, consent, and privacy requirements must be verified.',
  },
  {
    id: 26,
    domain: 'Business Environment',
    topic: 'Continuous Process Improvement',
    prompt:
      'At project closeout, the team identifies several process inefficiencies that slowed delivery. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Document the lessons learned and feed them into organizational process assets for future projects.',
      },
      {
        key: 'b',
        text: 'Discard the findings entirely, since the project is already formally complete.',
      },
      {
        key: 'c',
        text: 'Keep the findings private, sharing them with no one outside the immediate team.',
      },
      {
        key: 'd',
        text: 'Blame individual team members by name in the official closeout report.',
      },
    ],
    correct: 'a',
    explanation:
      'Closeout inefficiencies should become documented lessons learned that improve future projects via organizational process assets.',
  },
  {
    id: 27,
    domain: 'Business Environment',
    topic: 'Portfolio Alignment',
    prompt:
      "An organization must choose between funding this project's next phase or a competing initiative; both are technically sound. What information is MOST relevant to the decision?",
    options: [
      {
        key: 'a',
        text: 'Which project the team happens to personally prefer working on this quarter.',
      },
      {
        key: 'b',
        text: 'Which of the two projects happened to start first, chronologically speaking.',
      },
      {
        key: 'c',
        text: "Each initiative's expected value, cost, risk, and strategic alignment against organizational priorities.",
      },
      {
        key: 'd',
        text: "The relative seniority of the people currently staffed on each project's team.",
      },
    ],
    correct: 'c',
    explanation:
      'Portfolio-level funding decisions should be driven by comparative value, cost, risk, and strategic alignment, not preference or precedence.',
  },
  {
    id: 28,
    domain: 'Business Environment',
    topic: 'Intellectual Property',
    prompt:
      'A project will use a third-party algorithm in the final product. What should the project manager confirm before deployment?',
    options: [
      {
        key: 'a',
        text: 'That the third-party algorithm works correctly in technical testing.',
      },
      {
        key: 'b',
        text: 'That licensing/IP rights permit the intended commercial use of the algorithm.',
      },
      {
        key: 'c',
        text: 'That the algorithm is broadly popular and well-regarded among developers.',
      },
      {
        key: 'd',
        text: 'That the algorithm was free to download from its original source.',
      },
    ],
    correct: 'b',
    explanation:
      'Using third-party IP requires confirming that licensing terms actually permit the intended commercial use before deployment.',
  },
  {
    id: 29,
    domain: 'Business Environment',
    topic: 'Vendor Relationship Management',
    prompt:
      "A long-term strategic vendor's performance has recently declined, risking multiple future projects, not just this one. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Handle the vendor issue in isolation, without informing anyone else in the organization.',
      },
      {
        key: 'b',
        text: "Terminate the vendor's contract unilaterally, without consulting procurement or other affected teams.",
      },
      {
        key: 'c',
        text: "Ignore it for now, since the decline hasn't caused a missed milestone on this project yet.",
      },
      {
        key: 'd',
        text: 'Escalate the pattern of vendor performance to the business/procurement stakeholders managing the broader relationship.',
      },
    ],
    correct: 'd',
    explanation:
      'A vendor issue with implications beyond one project should be escalated to those managing the broader strategic relationship.',
  },
  {
    id: 30,
    domain: 'Business Environment',
    topic: 'Knowledge Transfer & Transition to Operations',
    prompt:
      'A project is nearing completion and will hand off to an operations team unfamiliar with the solution. What should the project manager prioritize before closeout?',
    options: [
      {
        key: 'a',
        text: 'A structured knowledge transfer and transition plan, prepared in advance for the operations team.',
      },
      {
        key: 'b',
        text: 'Nothing further; the operations team will figure out the solution on their own.',
      },
      {
        key: 'c',
        text: 'A faster closeout process, mainly aimed at reducing remaining project cost.',
      },
      {
        key: 'd',
        text: "Keeping the solution's documentation with the project team, rather than sharing it.",
      },
    ],
    correct: 'a',
    explanation:
      'A structured transition/knowledge-transfer plan protects the solution and its benefits once operations takes over.',
  },
  {
    id: 31,
    domain: 'Business Environment',
    topic: 'Benefits Sustainment',
    prompt:
      'Shortly after a successful launch, the project team disbands. Three months later, no one is tracking whether the expected benefits are being realized. What was missing from the plan?',
    options: [
      {
        key: 'a',
        text: 'A larger contingency budget set aside for unexpected costs during execution.',
      },
      {
        key: 'b',
        text: 'A longer project schedule, giving the team more time to finish each deliverable.',
      },
      {
        key: 'c',
        text: 'A benefits sustainment and ownership plan defining who tracks realized value after project closure.',
      },
      {
        key: 'd',
        text: 'More detailed Gantt charts, tracking each task at a finer level of granularity.',
      },
    ],
    correct: 'c',
    explanation:
      'Without a defined owner and plan for tracking benefits post-closure, realized value often goes unmeasured after the team disbands.',
  },
  {
    id: 32,
    domain: 'Business Environment',
    topic: 'Legal & Regulatory Risk',
    prompt:
      "A new industry standard is expected to become mandatory next year, and the project's current design does not meet it. Adoption is optional today. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: "Ignore it entirely for now, since the new standard isn't legally mandatory yet.",
      },
      {
        key: 'b',
        text: 'Assess the cost/benefit of designing for the upcoming standard now versus retrofitting later, and inform governance.',
      },
      {
        key: 'c',
        text: 'Redesign the project immediately, without doing any cost/benefit analysis first.',
      },
      {
        key: 'd',
        text: 'Wait until the standard actually becomes mandatory before discussing it with anyone at all.',
      },
    ],
    correct: 'b',
    explanation:
      'A known future regulatory change should be proactively evaluated (design-now vs. retrofit-later) and shared with governance for a decision.',
  },
  {
    id: 33,
    domain: 'Business Environment',
    topic: 'Stakeholder Value Perception',
    prompt:
      'Two key stakeholder groups define project "success" differently — one values speed, the other values thoroughness. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Facilitate alignment between the two groups on shared success criteria that reflect the intended value.',
      },
      {
        key: 'b',
        text: "Pick one group's definition of success arbitrarily, without further discussion.",
      },
      {
        key: 'c',
        text: 'Ignore both definitions and fall back on only the original project schedule.',
      },
      {
        key: 'd',
        text: 'Let the disagreement between the two groups resolve itself naturally over time.',
      },
    ],
    correct: 'a',
    explanation:
      'Conflicting definitions of success should be resolved through facilitated alignment on shared, value-based criteria.',
  },
  {
    id: 34,
    domain: 'Business Environment',
    topic: 'Organizational Readiness',
    prompt:
      'A project introduces a capability the organization has never operated before (e.g., a new service line). What should the project manager assess in addition to technical delivery?',
    options: [
      {
        key: 'a',
        text: "Nothing beyond the technical build itself, since the rest is operations' concern.",
      },
      {
        key: 'b',
        text: 'Only the logistics of the initial launch event, not what happens afterward.',
      },
      {
        key: 'c',
        text: 'The marketing budget alone, set aside to promote the new capability.',
      },
      {
        key: 'd',
        text: "The organization's operational readiness and capability to sustain the new function after go-live.",
      },
    ],
    correct: 'd',
    explanation:
      'Introducing a genuinely new organizational capability requires assessing operational readiness to sustain it, not just building it.',
  },
  {
    id: 35,
    domain: 'Business Environment',
    topic: 'Global & Cross-Border Considerations',
    prompt:
      'A project spans multiple countries with different labor laws and holidays. What should the project manager do when building the schedule and resourcing plan?',
    options: [
      {
        key: 'a',
        text: "Use a single country's calendar and labor rules across the entire project for simplicity.",
      },
      {
        key: 'b',
        text: 'Ignore the regional differences entirely, since the overall deadline is already fixed.',
      },
      {
        key: 'c',
        text: "Incorporate each region's applicable labor laws, holidays, and working norms into the schedule.",
      },
      {
        key: 'd',
        text: 'Assign all of the work to a single region, in order to avoid the added complexity.',
      },
    ],
    correct: 'c',
    explanation:
      "Multi-country delivery requires the schedule and resourcing plan to reflect each region's actual labor laws, holidays, and norms.",
  },
]
