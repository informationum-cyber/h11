import type { PMPQuestion } from './pmp-quiz-types'

export const anastasiaBizEnvQuestions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'Business Environment',
    topic: 'Regulatory Compliance',
    prompt:
      'A project operates in a heavily regulated industry. Midway through execution, a new regulation is issued that affects one deliverable. What should the project manager do FIRST?',
    options: [
      { key: 'a', text: 'Ignore it until the enforcement date arrives.' },
      {
        key: 'b',
        text: "Assess the regulation's impact and route the change through governance/change control.",
      },
      {
        key: 'c',
        text: 'Unilaterally redesign the deliverable without informing stakeholders.',
      },
      { key: 'd', text: 'Escalate to legal and take no further action.' },
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
        text: 'Reinstate the checkpoint and explain its purpose to the team.',
      },
      { key: 'b', text: 'Ignore the finding since no incident has occurred.' },
      { key: 'c', text: 'Wait for the next audit cycle before acting.' },
      {
        key: 'd',
        text: 'Ask the sponsor to informally waive the requirement.',
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
      { key: 'a', text: 'That collection will speed up delivery.' },
      {
        key: 'b',
        text: 'That data handling complies with the privacy regulations of each applicable jurisdiction.',
      },
      {
        key: 'c',
        text: 'That the development team prefers the chosen data tool.',
      },
      {
        key: 'd',
        text: 'That the sponsor approves the data dashboard design.',
      },
    ],
    correct: 'b',
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
        text: 'Nothing; benefits tracking is entirely operations’ responsibility.',
      },
      {
        key: 'b',
        text: 'A benefits realization plan with post-launch measurement and ownership.',
      },
      { key: 'c', text: 'A larger contingency reserve.' },
      { key: 'd', text: 'A stricter change control process.' },
    ],
    correct: 'b',
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
        text: 'Deliverables completed are the only meaningful measure of success.',
      },
      {
        key: 'b',
        text: 'Track and report progress toward the intended business outcome/value, not just output completion.',
      },
      {
        key: 'c',
        text: 'Refer the sponsor’s question to operations and take no further action.',
      },
      {
        key: 'd',
        text: 'Consider the project complete once scope is delivered and close it without further reporting.',
      },
    ],
    correct: 'b',
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
        text: 'Approve it, since additional scope generally improves the product.',
      },
      {
        key: 'b',
        text: 'Present the cost-benefit analysis to the appropriate governance body for a value-based decision.',
      },
      { key: 'c', text: 'Reject it unilaterally without analysis.' },
      { key: 'd', text: 'Approve it without informing the sponsor.' },
    ],
    correct: 'b',
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
        text: 'Nothing; an approved business case does not need revisiting.',
      },
      {
        key: 'b',
        text: 'Reassess the business case against current external conditions with the sponsor.',
      },
      {
        key: 'c',
        text: 'Wait until the project ends to check whether it is still relevant.',
      },
      { key: 'd', text: 'Ask the team to vote on whether to continue.' },
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
      { key: 'a', text: 'Continue exactly as planned with no reassessment.' },
      {
        key: 'b',
        text: "Notify business stakeholders and evaluate whether the project's approach or priorities need adjustment.",
      },
      {
        key: 'c',
        text: 'Rush the project to completion regardless of quality or cost impact.',
      },
      { key: 'd', text: 'Cancel the project immediately.' },
    ],
    correct: 'b',
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
      { key: 'a', text: 'Absorb any cost overruns without reporting them.' },
      {
        key: 'b',
        text: 'Reassess cost and risk exposure and communicate the impact through the appropriate change/governance process.',
      },
      { key: 'c', text: 'Cancel all procurement activity immediately.' },
      {
        key: 'd',
        text: 'Ignore the volatility since it is an external factor.',
      },
    ],
    correct: 'b',
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
      { key: 'a', text: 'Nothing beyond standard training material.' },
      {
        key: 'b',
        text: 'An organizational change management plan addressing readiness, communication, and adoption.',
      },
      { key: 'c', text: 'A stricter production deadline.' },
      {
        key: 'd',
        text: 'Reduced stakeholder communication, to avoid provoking resistance.',
      },
    ],
    correct: 'b',
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
        text: 'Launch anyway, since the system itself is technically ready.',
      },
      {
        key: 'b',
        text: 'Address the readiness gap with targeted communication and training before or during rollout.',
      },
      { key: 'c', text: 'Postpone the project indefinitely.' },
      { key: 'd', text: 'Report only technical readiness to the sponsor.' },
    ],
    correct: 'b',
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
        text: 'Approve the change immediately, since it reduces cost.',
      },
      {
        key: 'b',
        text: 'Review the proposal against contractual and legal obligations before deciding.',
      },
      {
        key: 'c',
        text: 'Approve it without review, trusting the vendor’s judgment.',
      },
      {
        key: 'd',
        text: 'Ignore the clause since legal, not the project team, wrote it.',
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
        text: 'Hiring permanent staff regardless of the project’s duration.',
      },
      {
        key: 'b',
        text: 'A make-or-buy analysis, considering external procurement for the defined, specialized work.',
      },
      {
        key: 'c',
        text: 'Delaying the project until staff can be trained internally.',
      },
      {
        key: 'd',
        text: 'Ignoring the resource gap and proceeding as planned.',
      },
    ],
    correct: 'b',
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
      { key: 'a', text: 'Address only cost and schedule impacts.' },
      {
        key: 'b',
        text: 'Assess sustainability implications alongside cost, schedule, and risk, and involve relevant stakeholders.',
      },
      {
        key: 'c',
        text: 'Ignore sustainability since it falls outside the triple constraint.',
      },
      { key: 'd', text: 'Delegate the decision entirely to the vendor.' },
    ],
    correct: 'b',
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
      { key: 'a', text: 'State that ESG is not part of project management.' },
      {
        key: 'b',
        text: 'Evaluate and report on the project’s alignment (or gaps) with the relevant ESG commitments.',
      },
      { key: 'c', text: 'Refer the question to the marketing department.' },
      {
        key: 'd',
        text: 'Avoid answering since ESG was not mentioned in the original charter.',
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
        text: 'Continue, since the project charter was already approved.',
      },
      {
        key: 'b',
        text: 'Raise the misalignment with the sponsor/governance body for a decision on continuation, adjustment, or closure.',
      },
      {
        key: 'c',
        text: 'Continue silently and hope no one notices the shift.',
      },
      {
        key: 'd',
        text: 'Unilaterally change the project scope to realign it.',
      },
    ],
    correct: 'b',
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
        text: 'Ignore it, since the business case was already approved.',
      },
      {
        key: 'b',
        text: 'Reassess the business case with updated assumptions and inform governance of any impact.',
      },
      { key: 'c', text: 'Keep executing without informing anyone.' },
      { key: 'd', text: 'Cancel the project unilaterally.' },
    ],
    correct: 'b',
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
        text: 'Nothing; departments should be left to self-organize.',
      },
      {
        key: 'b',
        text: 'A clear governance structure defining roles, decision rights, and escalation paths.',
      },
      {
        key: 'c',
        text: 'A single department owning all decisions, regardless of expertise.',
      },
      {
        key: 'd',
        text: 'No formal structure, to preserve maximum flexibility.',
      },
    ],
    correct: 'b',
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
      { key: 'a', text: 'Wait for the next scheduled quarterly meeting.' },
      {
        key: 'b',
        text: 'Escalate the risk to the steering committee/sponsor outside the normal cadence, given its urgency.',
      },
      { key: 'c', text: 'Handle it alone without informing governance.' },
      {
        key: 'd',
        text: 'Document it only in the risk register and take no other action.',
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
      { key: 'a', text: "Impose one culture's norms on the entire team." },
      {
        key: 'b',
        text: 'Understand and adapt facilitation/communication approaches to bridge the cultural differences.',
      },
      {
        key: 'c',
        text: 'Ignore cultural differences as irrelevant to delivery.',
      },
      { key: 'd', text: 'Split the team permanently along cultural lines.' },
    ],
    correct: 'b',
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
        text: 'Nothing; starting from scratch preserves objectivity.',
      },
      {
        key: 'b',
        text: 'Organizational process assets such as lessons learned, templates, and historical data from similar projects.',
      },
      { key: 'c', text: "Only the current team's personal opinions." },
      { key: 'd', text: 'Competitor websites.' },
    ],
    correct: 'b',
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
        text: 'Continue building to the original requirements without revisiting customer input.',
      },
      {
        key: 'b',
        text: 'Periodic customer/market feedback loops to validate the product still meets evolving needs.',
      },
      { key: 'c', text: 'Avoiding customer contact, to prevent scope creep.' },
      {
        key: 'd',
        text: 'Relying solely on the original requirements document.',
      },
    ],
    correct: 'b',
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
        text: 'Launch on the original date regardless of the research.',
      },
      {
        key: 'b',
        text: 'Present the market timing data to business stakeholders for a value-based launch-date decision.',
      },
      { key: 'c', text: 'Decide unilaterally to delay the launch.' },
      {
        key: 'd',
        text: "Ignore market research since it wasn't in the project plan.",
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
      { key: 'a', text: 'Only whether the model is technically accurate.' },
      {
        key: 'b',
        text: "Whether the tool's use complies with ethical, regulatory, and governance expectations, in addition to technical accuracy.",
      },
      { key: 'c', text: 'Whether it reduces headcount the most.' },
      { key: 'd', text: 'Whether competitors use similar tools.' },
    ],
    correct: 'b',
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
      { key: 'a', text: 'That the data is technically accessible.' },
      {
        key: 'b',
        text: 'That data usage complies with applicable data governance, consent, and privacy requirements.',
      },
      { key: 'c', text: 'That the data looks clean at a glance.' },
      { key: 'd', text: 'That the vendor recommends this approach.' },
    ],
    correct: 'b',
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
        text: 'Discard the findings, since the project is already complete.',
      },
      {
        key: 'b',
        text: 'Document lessons learned and feed them into organizational process assets for future projects.',
      },
      { key: 'c', text: 'Keep the findings private.' },
      {
        key: 'd',
        text: 'Blame individual team members in the closeout report.',
      },
    ],
    correct: 'b',
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
      { key: 'a', text: 'Which project the team personally prefers.' },
      {
        key: 'b',
        text: 'Each initiative’s expected value, cost, risk, and strategic alignment relative to organizational priorities.',
      },
      { key: 'c', text: 'Which project started first.' },
      { key: 'd', text: 'Relative seniority of each project’s team.' },
    ],
    correct: 'b',
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
      { key: 'a', text: 'That the algorithm works technically.' },
      {
        key: 'b',
        text: 'That licensing/IP rights permit the intended commercial use.',
      },
      { key: 'c', text: 'That the algorithm is popular among developers.' },
      { key: 'd', text: 'That it was free to download.' },
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
        text: 'Handle the vendor issue in isolation without informing others.',
      },
      {
        key: 'b',
        text: 'Escalate the pattern of vendor performance to the business/procurement stakeholders who manage the broader relationship.',
      },
      { key: 'c', text: 'Terminate the contract unilaterally.' },
      {
        key: 'd',
        text: "Ignore it, since it hasn't caused a milestone miss yet.",
      },
    ],
    correct: 'b',
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
      { key: 'a', text: 'Nothing; operations will figure it out.' },
      {
        key: 'b',
        text: 'A structured knowledge transfer and transition plan to operations.',
      },
      { key: 'c', text: 'A faster closeout to reduce cost.' },
      { key: 'd', text: 'Keeping documentation with the project team only.' },
    ],
    correct: 'b',
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
      { key: 'a', text: 'A larger contingency budget.' },
      {
        key: 'b',
        text: 'A benefits sustainment/ownership plan defining who tracks value after project closure.',
      },
      { key: 'c', text: 'A longer project schedule.' },
      { key: 'd', text: 'More detailed Gantt charts.' },
    ],
    correct: 'b',
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
      { key: 'a', text: "Ignore it, since it isn't yet mandatory." },
      {
        key: 'b',
        text: 'Assess the cost/benefit of designing for the upcoming standard now versus retrofitting later, and inform governance.',
      },
      { key: 'c', text: 'Redesign immediately without any analysis.' },
      { key: 'd', text: 'Wait until it becomes mandatory to even discuss it.' },
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
      { key: 'a', text: "Pick one group's definition arbitrarily." },
      {
        key: 'b',
        text: 'Facilitate alignment on shared success criteria that reflect the intended business value.',
      },
      { key: 'c', text: 'Ignore both and use only the original schedule.' },
      { key: 'd', text: 'Let the disagreement resolve itself over time.' },
    ],
    correct: 'b',
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
      { key: 'a', text: 'Nothing beyond the technical build.' },
      {
        key: 'b',
        text: "The organization's operational readiness and capability to sustain the new function after go-live.",
      },
      { key: 'c', text: 'Only the initial launch event logistics.' },
      { key: 'd', text: 'The marketing budget alone.' },
    ],
    correct: 'b',
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
        text: 'Use one country’s calendar and labor rules for simplicity.',
      },
      {
        key: 'b',
        text: "Incorporate each region's applicable labor laws, holidays, and working norms into planning.",
      },
      {
        key: 'c',
        text: 'Ignore regional differences since the deadline is fixed.',
      },
      {
        key: 'd',
        text: 'Assign all work to a single region to avoid complexity.',
      },
    ],
    correct: 'b',
    explanation:
      'Multi-country delivery requires the schedule and resourcing plan to reflect each region’s actual labor laws, holidays, and norms.',
  },
]
