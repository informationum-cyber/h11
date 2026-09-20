import type { PMPScenario } from './pmp-quiz-types'

export const pmpMockExamSectionA: PMPScenario[] = [
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
          {
            key: 'a',
            text: 'Meet with the functional manager to align time requirements.',
          },
          {
            key: 'b',
            text: 'Meet with your team to set a team charter and define roles & responsibilities.',
          },
          {
            key: 'c',
            text: 'Meet with the project sponsor to gain additional resources.',
          },
          {
            key: 'd',
            text: 'Escalate the issue to the steering committee as a project risk.',
          },
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
          {
            key: 'a',
            text: 'Make steps to update her pay to match others, and solicit her opinion and advice specifically during each meeting.',
          },
          {
            key: 'b',
            text: 'Take the lower pay as a cost saving for your project budget.',
          },
          {
            key: 'c',
            text: 'Ask Jane to document her knowledge in case she leaves.',
          },
          {
            key: 'd',
            text: 'This is normal in your industry—do nothing.',
          },
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
          {
            key: 'a',
            text: 'Go directly to the people you need, avoiding the stakeholders.',
          },
          {
            key: 'b',
            text: 'Raise a risk in your risk register about lack of resources.',
          },
          {
            key: 'c',
            text: 'Communicate more often with stakeholders and gain deeper awareness of their concerns and ideas.',
          },
          {
            key: 'd',
            text: 'Show stakeholders the Resource Assignment Matrix and roles/responsibilities.',
          },
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
          {
            key: 'a',
            text: "Keep the project going as it is—product discontinuation isn't your responsibility.",
          },
          {
            key: 'b',
            text: 'Set a meeting with your project sponsor to share the information and recommend project termination.',
          },
          {
            key: 'c',
            text: 'Change the project scope to build a different product instead.',
          },
          {
            key: 'd',
            text: 'Ask for additional funding to improve the product before discontinuation.',
          },
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
          'While creating the scope statement, you discover that the core data model for FinVision would benefit the Wealth Management Platform (another project). What will you do next?',
        options: [
          {
            key: 'a',
            text: "Place the feature in the other project's backlog and ask them to prioritize it.",
          },
          {
            key: 'b',
            text: 'Raise this functionality in your risk register as a threat with a "mitigate" response.',
          },
          {
            key: 'c',
            text: 'Add the scope to your project and complete it as soon as possible.',
          },
          {
            key: 'd',
            text: 'Raise this functionality in your risk register as an opportunity with an "exploit" response, and meet with the other project team and sponsor to discuss.',
          },
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
          'Three senior executives are competing for credit over FinVision: the CDO wants it under Digital Transformation, the CTO wants it in his product portfolio, and the CRO wants governance control. This has led to conflicts and scope ambiguity. What will you do next?',
        options: [
          {
            key: 'a',
            text: 'Create a scope statement yourself to avoid further conflict.',
          },
          {
            key: 'b',
            text: 'Limit resources to the executives until they can agree on a way forward.',
          },
          {
            key: 'c',
            text: 'Facilitate a discussion with the executives as a neutral third party, focusing on agreed project goals.',
          },
          {
            key: 'd',
            text: 'Escalate the issue to the project steering committee and ask them to resolve it.',
          },
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
          {
            key: 'a',
            text: 'Retain as many current project staff as possible to continue work on the product.',
          },
          {
            key: 'b',
            text: 'Secure funding for a stable team, then use current research to form a suite of projects to sustain the product.',
          },
          {
            key: 'c',
            text: 'Raise a change request on your current project to add scope and continue making improvements.',
          },
          {
            key: 'd',
            text: 'Ask for additional funding to see if you can improve the product instead.',
          },
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
          {
            key: 'a',
            text: 'Work with the PMO to unlock project management reserves for the extra work.',
          },
          {
            key: 'b',
            text: 'Ask the Product Owner to reprioritise the backlog and see if the new work will fit.',
          },
          {
            key: 'c',
            text: 'Perform the work within your normal budget as your project is on track.',
          },
          {
            key: 'd',
            text: 'Raise a change request for the changes and gain approval from the Change Control Board.',
          },
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
          {
            key: 'a',
            text: 'Select project members from each city to ensure diversity of knowledge within the team.',
          },
          {
            key: 'b',
            text: 'Put together a resource management plan outlining the resources required.',
          },
          {
            key: 'c',
            text: 'Ask your PMO for current available resources and assign them to the work.',
          },
          {
            key: 'd',
            text: 'Select a small team that can work in the same area so they can solve problems as they arise.',
          },
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
          {
            key: 'a',
            text: 'Select a small team that can work in the same area so they can solve problems as they arise.',
          },
          {
            key: 'b',
            text: 'Use a predictive project approach and source part of your team externally if they have skillsets in the new system.',
          },
          {
            key: 'c',
            text: 'Train existing internal staff in the new system then have them work on the project.',
          },
          {
            key: 'd',
            text: 'Perform a make or buy analysis on the different software options.',
          },
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
          'You are putting together a communication plan for 10,000+ stakeholders across all regions who will be impacted by EnterpriseNow. You have identified affected stakeholders, analysed and prioritised them, and are creating a communication strategy. What will you NOT include in your plan?',
        options: [
          {
            key: 'a',
            text: 'Why should information be shared with stakeholders?',
          },
          {
            key: 'b',
            text: 'What is the best way to provide information?',
          },
          {
            key: 'c',
            text: 'How can they make changes to the communication plan?',
          },
          {
            key: 'd',
            text: 'When and how often is information needed?',
          },
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
          {
            key: 'a',
            text: 'Hired a resource manager to take care of the resource tasks on your project.',
          },
          {
            key: 'b',
            text: 'Planned strategically about the timing from order to delivery to usage, managing resource risks and their responses.',
          },
          {
            key: 'c',
            text: 'Ensured a means to track the inventory from arrival on site to the delivery of an integrated product.',
          },
          {
            key: 'd',
            text: 'Sourced the inventory locally to reduce the impact of global supply chains.',
          },
        ],
        correct: 'b',
        explanation:
          'The gap was upfront risk planning, not execution — proactively identifying supply-chain risk across the full order-to-usage timeline and building response plans for it addresses the root cause, where adding headcount, better inventory tracking after arrival, or a specific local-sourcing fix only treat symptoms or assume one narrow response in hindsight.',
      },
    ],
  },
  {
    id: 3,
    title: 'Nimbus Health Scenario',
    scenarioText:
      'You are the PM leading the rollout of a new Electronic Health Record (EHR) system across six hospital sites for Nimbus Health, over nine months with a $4M budget. The system must pass an external security audit and demonstrate full compliance with health data privacy regulations before any site can go live. Clinical staff across all six sites are accustomed to paper-based charting and are resistant to the new workflow. Midway through the project, the nursing union raises concerns that mandatory training sessions are cutting directly into paid patient-care hours. Separately, your EHR vendor notifies you of a two-week delay in configuring the system for one hospital (Site 4) due to a staffing shortage on their side. Your sponsor, the Chief Medical Officer, is now asking whether all six sites should go live simultaneously or in phases.',
    questions: [
      {
        id: 1,
        domain: 'People',
        topic: 'Clinical Workflow Change Resistance',
        prompt:
          'Clinical staff across all six sites are resistant to abandoning paper-based charting for the new EHR system. What should you do?',
        options: [
          {
            key: 'a',
            text: 'Mandate adoption by a fixed date and escalate non-compliance to department heads.',
          },
          {
            key: 'b',
            text: 'Engage clinical staff directly to understand their concerns and tailor training and support to address them.',
          },
          {
            key: 'c',
            text: 'Delay the rollout until staff independently become comfortable with the idea.',
          },
          {
            key: 'd',
            text: 'Ask the vendor to simplify the system so less training is required.',
          },
        ],
        correct: 'b',
        explanation:
          'Resistance to a significant workflow change is best addressed by engaging the people affected, understanding the specific source of their concerns, and tailoring training and support accordingly — that builds genuine buy-in. Mandating compliance without addressing the underlying concerns breeds resentment and workarounds, indefinitely delaying the rollout abandons the project timeline without solving anything, and simplifying the system is a technical response to what is fundamentally a change-management problem.',
      },
      {
        id: 2,
        domain: 'Business Environment',
        topic: 'Regulatory Audit as a Go-Live Gate',
        prompt:
          "With the CMO pushing for an aggressive timeline, one site's project lead suggests going live before the external security audit is complete, planning to remediate any findings afterward. What should you do?",
        options: [
          {
            key: 'a',
            text: 'Agree, since the timeline pressure from the sponsor takes priority.',
          },
          {
            key: 'b',
            text: 'Go live at that one site only, keeping the others on hold for the audit.',
          },
          {
            key: 'c',
            text: 'Hold firm that no site goes live until the audit and compliance requirements are satisfied, and communicate this constraint clearly to the sponsor.',
          },
          {
            key: 'd',
            text: 'Ask the audit firm to expedite their review without changing its scope.',
          },
        ],
        correct: 'c',
        explanation:
          "A security audit and regulatory compliance sign-off for a system handling protected health data is a hard gate, not a negotiable milestone — going live before it is complete exposes the organization to real legal and patient-safety risk regardless of sponsor pressure. The project manager's role is to hold that line and make the constraint clear to the sponsor, not to quietly bypass it for one site or treat schedule pressure as license to skip it.",
      },
      {
        id: 3,
        domain: 'People',
        topic: 'Balancing Training Time Against Patient Care',
        prompt:
          'The nursing union raises concerns that mandatory EHR training is cutting into paid patient-care hours. What should you do?',
        options: [
          {
            key: 'a',
            text: 'Cancel the training requirement to avoid the conflict entirely.',
          },
          {
            key: 'b',
            text: 'Work with nursing leadership and the union to redesign the training schedule in a way that addresses both training needs and patient-care coverage.',
          },
          {
            key: 'c',
            text: 'Require staff to complete training on their own unpaid time.',
          },
          {
            key: 'd',
            text: 'Proceed with the original schedule since training is a project requirement.',
          },
        ],
        correct: 'b',
        explanation:
          'A legitimate scheduling conflict between two real needs — adequate training and adequate patient-care coverage — calls for collaborative problem-solving with the people directly affected, not a unilateral decision that sacrifices one for the other. Canceling training undermines the entire rollout, pushing it onto unpaid time is both unfair and likely to breed resentment, and proceeding unchanged ignores a legitimate concern raised through a proper channel.',
      },
      {
        id: 4,
        domain: 'Process',
        topic: 'Vendor Delay Impact on One Site',
        prompt:
          'Your EHR vendor notifies you of a two-week configuration delay affecting only Site 4. What should you do FIRST?',
        options: [
          {
            key: 'a',
            text: 'Delay the go-live date for all six sites by two weeks to keep them synchronized.',
          },
          {
            key: 'b',
            text: "Assess the impact of the delay specifically on Site 4's schedule and determine whether it affects the other sites or the overall plan.",
          },
          {
            key: 'c',
            text: 'Remove Site 4 from the project scope until the vendor is ready.',
          },
          {
            key: 'd',
            text: "Escalate the vendor's performance to procurement immediately without further analysis.",
          },
        ],
        correct: 'b',
        explanation:
          "A delay affecting one site should first be assessed for its actual impact on that site's schedule and whether it has any knock-on effect on the other five sites or the project as a whole, since the sites are not necessarily on a shared critical path. Delaying all sites assumes an impact that may not exist, dropping Site 4 from scope is a disproportionate response to a two-week delay, and escalating before understanding the actual impact is premature.",
      },
      {
        id: 5,
        domain: 'Business Environment',
        topic: 'Phased vs. Simultaneous Go-Live',
        prompt:
          'The CMO asks whether all six sites should go live simultaneously or in phases. What should you recommend?',
        options: [
          {
            key: 'a',
            text: 'Simultaneous go-live, since it completes the rollout fastest.',
          },
          {
            key: 'b',
            text: 'A phased go-live, since it reduces the risk of a system-wide failure affecting patient care across all sites at once and allows lessons from early sites to improve later ones.',
          },
          {
            key: 'c',
            text: 'Whichever approach the vendor recommends, since they understand the system best.',
          },
          {
            key: 'd',
            text: "Simultaneous go-live, since a phased approach would extend the schedule beyond the sponsor's expectations.",
          },
        ],
        correct: 'b',
        explanation:
          "For a clinical system this critical, a phased go-live is the lower-risk choice: it limits the blast radius of any unforeseen issue to one site instead of all six simultaneously, and lets the team apply lessons learned from earlier sites to later ones. Recommending simultaneous go-live purely for speed, deferring entirely to the vendor's preference, or prioritizing the sponsor's schedule expectations over patient-safety risk all miss that risk exposure — not just speed — is the deciding factor here.",
      },
      {
        id: 6,
        domain: 'Process',
        topic: 'Risk Response for Clinical Transition',
        prompt:
          'Given the risk of clinical documentation errors during the transition from paper charts to the new EHR system, what should you ensure is in place before each site goes live?',
        options: [
          {
            key: 'a',
            text: 'A fallback plan, such as a temporary parallel paper/EHR run, to catch and correct errors immediately after go-live.',
          },
          {
            key: 'b',
            text: 'A memo instructing staff to be extra careful during the transition period.',
          },
          {
            key: 'c',
            text: 'No additional measures, since staff have already been trained.',
          },
          {
            key: 'd',
            text: 'A requirement that all documentation be double-checked by IT staff before use.',
          },
        ],
        correct: 'a',
        explanation:
          'A known, high-consequence risk like clinical documentation errors during a system transition warrants a concrete risk response — a temporary parallel run is a standard mitigation that catches errors while the new system beds in, without relying on hope or informal caution. A memo asking for extra care is not a real control, assuming training alone eliminates the risk ignores how transitions actually go wrong, and routing all documentation through IT staff for double-checking is impractical and outside their clinical competence.',
      },
      {
        id: 7,
        domain: 'People',
        topic: 'Using Change Champions',
        prompt:
          'To improve adoption across the six sites, what is the MOST effective approach to accelerate staff buy-in?',
        options: [
          {
            key: 'a',
            text: 'Have hospital administrators mandate usage in writing.',
          },
          {
            key: 'b',
            text: 'Identify respected clinical staff at each site to act as champions who support and encourage their peers through the transition.',
          },
          {
            key: 'c',
            text: 'Wait for adoption to happen naturally as staff get used to the new system.',
          },
          {
            key: 'd',
            text: 'Offer a one-time financial bonus to staff who use the system correctly.',
          },
        ],
        correct: 'b',
        explanation:
          'Peer-based change champions who are already respected within their clinical teams are consistently more effective at driving genuine adoption than top-down mandates, because they translate the change into terms their peers trust and can influence day-to-day behavior directly. A written mandate addresses compliance but not genuine adoption, passively waiting risks a prolonged rocky transition, and a one-time bonus incentivizes short-term compliance rather than sustained behavior change.',
      },
    ],
  },
  {
    id: 4,
    title: 'GreenPort Logistics Scenario',
    scenarioText:
      'You are the PM leading a 14-month, $18M automation project at GreenPort Logistics, replacing manual container-handling cranes at a shipping port with automated, electric equipment. The business case targets a 25% reduction in port emissions alongside a throughput increase. The outgoing equipment vendor has offered to buy back and recycle the retired cranes. Dock workers are anxious that automation will eliminate their jobs. A local environmental community group has raised concerns about noise and dust during the construction phase. Separately, the local government has offered a green-infrastructure tax incentive to the port, contingent on the project meeting and independently documenting specific emissions-reduction targets.',
    questions: [
      {
        id: 1,
        domain: 'Business Environment',
        topic: 'Meeting Incentive-Linked Emissions Targets',
        prompt:
          'The local government has offered a tax incentive contingent on meeting specific, independently documented emissions targets. What should you ensure is built into the project plan?',
        options: [
          {
            key: 'a',
            text: 'A general commitment to sustainability in the project charter, with no further tracking.',
          },
          {
            key: 'b',
            text: 'A defined process for measuring, documenting, and independently verifying emissions performance against the specific targets required for the incentive.',
          },
          {
            key: 'c',
            text: 'A plan to pursue the incentive only after the project is fully complete and operating.',
          },
          {
            key: 'd',
            text: 'Delegation of the entire emissions tracking responsibility to the equipment vendor.',
          },
        ],
        correct: 'b',
        explanation:
          "An incentive that depends on meeting and independently verifying specific targets requires the project to build in a defined measurement, documentation, and verification process from the start — otherwise there's no way to substantiate the claim when it matters. A vague charter-level commitment doesn't produce evidence, waiting until after completion risks missing data needed throughout the project, and delegating tracking entirely to the vendor removes the project's own accountability for a benefit it is responsible for delivering.",
      },
      {
        id: 2,
        domain: 'People',
        topic: 'Addressing Job Displacement Fears',
        prompt:
          'Dock workers are anxious that the new automated cranes will eliminate their jobs. What should you do?',
        options: [
          {
            key: 'a',
            text: 'Avoid discussing the topic to prevent unnecessary alarm.',
          },
          {
            key: 'b',
            text: 'Communicate transparently about the workforce impact and work with the organization to define a retraining or transition path for affected workers.',
          },
          {
            key: 'c',
            text: 'Assure workers that no jobs will change, regardless of the actual plan.',
          },
          {
            key: 'd',
            text: 'Leave workforce communication entirely to the human resources department with no project involvement.',
          },
        ],
        correct: 'b',
        explanation:
          "Workforce impact from automation is a legitimate and predictable concern that deserves transparent, honest communication paired with a concrete transition or retraining path — that respects the people affected and reduces resistance grounded in fear of the unknown. Avoiding the topic lets rumors fill the vacuum, promising no impact when that may not be true is dishonest and will backfire, and treating it as entirely HR's problem ignores the project manager's role in managing this stakeholder group through the change.",
      },
      {
        id: 3,
        domain: 'Business Environment',
        topic: 'External Community Stakeholder Concerns',
        prompt:
          'A local environmental community group has raised concerns about noise and dust during construction. What is the BEST way to address this?',
        options: [
          {
            key: 'a',
            text: "Refer the group to the local government, since community relations are not the project's responsibility.",
          },
          {
            key: 'b',
            text: 'Engage the group directly, share the construction mitigation plan, and keep them informed of progress throughout the build.',
          },
          {
            key: 'c',
            text: 'Proceed with construction as planned, since the group has no formal authority over the project.',
          },
          {
            key: 'd',
            text: 'Pause construction indefinitely until the group formally withdraws its concerns.',
          },
        ],
        correct: 'b',
        explanation:
          "External community stakeholders, even without formal authority, are still stakeholders whose concerns can affect the project's reputation and local relationships — direct engagement, transparency about mitigation measures, and ongoing communication is the appropriate response. Deflecting to the local government abdicates the project's own stakeholder management responsibility, proceeding without engagement risks escalation, and pausing indefinitely is a disproportionate response when a reasonable mitigation and communication plan can address the concern.",
      },
      {
        id: 4,
        domain: 'Process',
        topic: 'Risk Management (Opportunities)',
        prompt:
          'The outgoing equipment vendor has offered to buy back and recycle the retired cranes. How should this be handled?',
        options: [
          {
            key: 'a',
            text: 'Ignore the offer, since disposal was not part of the original project scope.',
          },
          {
            key: 'b',
            text: 'Record it in the risk register as an opportunity and pursue an "exploit" or "share" response to capture the value.',
          },
          {
            key: 'c',
            text: 'Accept the offer informally without documenting it, to keep the transaction simple.',
          },
          {
            key: 'd',
            text: 'Decline the offer and dispose of the old cranes as scrap through standard channels.',
          },
        ],
        correct: 'b',
        explanation:
          'An unplanned, value-generating offer like a vendor buy-back is a positive risk (opportunity) and should be formally captured in the risk register with an appropriate response — exploiting or sharing it to actually realize the value, consistent with how positive risks are meant to be managed. Ignoring the offer or declining it in favor of standard scrap disposal leaves value on the table, and handling it informally without documentation bypasses the governance an $18M project should apply to a financial transaction of this kind.',
      },
      {
        id: 5,
        domain: 'Process',
        topic: 'Delivery Approach for Physical Infrastructure',
        prompt:
          'Given that this project involves large-scale physical crane replacement and civil construction work, which delivery approach is MOST appropriate?',
        options: [
          {
            key: 'a',
            text: 'A purely adaptive/agile approach with short iterative sprints.',
          },
          {
            key: 'b',
            text: 'A predictive approach with detailed upfront planning and sequencing for the physical construction and installation work.',
          },
          {
            key: 'c',
            text: 'No formal approach, allowing the construction crew to self-organize daily.',
          },
          {
            key: 'd',
            text: "An approach determined entirely by the equipment vendor's internal preferences.",
          },
        ],
        correct: 'b',
        explanation:
          "Large-scale physical infrastructure work — civil construction, crane installation, equipment commissioning — has fixed physical dependencies and low tolerance for late-stage rework, which is exactly the profile predictive, upfront-planned delivery is suited for. A purely adaptive approach fits well-understood, iterative software-style work far better than physical construction, having no formal approach at all is not a viable choice for work at this scale and risk, and deferring the delivery approach entirely to a vendor's preference bypasses the project manager's responsibility to tailor the approach to the actual work.",
      },
      {
        id: 6,
        domain: 'Business Environment',
        topic: 'Balancing Incentive Deadlines Against Compliance',
        prompt:
          'Partway through construction, it becomes clear that documenting emissions data to the standard the incentive program requires will take longer than planned, risking the incentive deadline. What should you do?',
        options: [
          {
            key: 'a',
            text: 'Submit estimated emissions figures instead of the required independently verified data to meet the deadline.',
          },
          {
            key: 'b',
            text: 'Communicate the documentation timeline realistically to the sponsor and the incentive program, and negotiate the deadline or scope of evidence if needed.',
          },
          {
            key: 'c',
            text: 'Abandon pursuit of the incentive without informing the sponsor.',
          },
          {
            key: 'd',
            text: 'Delay the entire construction schedule to prioritize documentation.',
          },
        ],
        correct: 'b',
        explanation:
          "When a compliance or reporting deadline is at genuine risk, the right response is transparent communication with the sponsor and the counterparty (here, the incentive program) so a realistic path forward — an adjusted deadline or scope — can be negotiated. Submitting figures that don't meet the required verification standard risks the integrity of the whole claim, abandoning the incentive unilaterally denies the sponsor a decision that is rightfully theirs, and delaying construction itself conflates two separate workstreams that don't need to move in lockstep.",
      },
      {
        id: 7,
        domain: 'People',
        topic: 'Supporting Role Transitions',
        prompt:
          'As part of the retraining plan, some dock workers are being transitioned into supervisory roles monitoring the new automated equipment. What is the BEST way to support this transition?',
        options: [
          {
            key: 'a',
            text: 'Assume the workers will adapt naturally given their years of hands-on experience.',
          },
          {
            key: 'b',
            text: 'Provide structured training for the new monitoring role and check in regularly on their confidence and comfort with the change.',
          },
          {
            key: 'c',
            text: 'Assign the new roles without discussion, since the decision has already been made.',
          },
          {
            key: 'd',
            text: 'Require workers to reapply competitively for the new positions.',
          },
        ],
        correct: 'b',
        explanation:
          "Moving from hands-on crane operation to supervisory monitoring of automated equipment is a substantively different role, and supporting that transition well means providing structured training plus ongoing check-ins on how the person is actually adjusting — a servant-leadership approach to a real change. Assuming experience alone will translate is not a safe bet for a fundamentally different job, imposing the new role without discussion ignores the person's own adjustment needs, and turning an internal transition into a competitive reapplication adds unnecessary anxiety to a workforce already worried about job security.",
      },
    ],
  },
  {
    id: 5,
    title: 'Meridian Merger Scenario',
    scenarioText:
      "You are the PM leading the post-merger integration of Meridian Bank and Coastal Trust, consolidating both banks' core banking systems within 10 months. Meridian's culture is formal and process-heavy; Coastal's is informal and fast-moving. The two banks operate under different banking regulators due to differing jurisdictions, and both regulators require separate compliance sign-off before the combined system can go live. Executive leadership wants an aggressive timeline to realize a projected $12M in annual synergy savings. A senior Coastal engineer, key to the integration, has told you privately he is considering resigning over what he calls a loss of autonomy under Meridian's processes. The customer data migration between the two systems also carries privacy and compliance exposure across both jurisdictions.",
    questions: [
      {
        id: 1,
        domain: 'People',
        topic: 'Merging Two Team Cultures',
        prompt:
          "Meridian's formal, process-heavy culture and Coastal's informal, fast-moving culture are creating friction on the combined integration team. What should you do?",
        options: [
          {
            key: 'a',
            text: "Require the Coastal team to fully adopt Meridian's processes, since Meridian is the acquiring bank.",
          },
          {
            key: 'b',
            text: 'Facilitate the combined team in establishing a shared team charter and working agreements that draw from both cultures.',
          },
          {
            key: 'c',
            text: 'Let each subteam continue operating under its own original culture and processes indefinitely.',
          },
          {
            key: 'd',
            text: "Escalate the cultural friction to both banks' HR departments to resolve.",
          },
        ],
        correct: 'b',
        explanation:
          'A newly merged team benefits from establishing its own shared working agreements rather than one culture simply overriding the other — a jointly developed team charter builds genuine buy-in from both sides and directly addresses the friction at its source. Forcing one culture onto the other breeds resentment and loses whatever was working well on the other side, letting each subteam persist separately undermines the entire point of integrating the teams, and escalating to HR hands off a team-dynamics problem the project manager is well positioned to resolve directly.',
      },
      {
        id: 2,
        domain: 'Business Environment',
        topic: 'Dual Regulatory Jurisdiction Compliance',
        prompt:
          'Both banking regulators require separate compliance sign-off before the combined system can go live. How should this be reflected in the project plan?',
        options: [
          {
            key: 'a',
            text: "Assume that satisfying one regulator's requirements will be sufficient for both.",
          },
          {
            key: 'b',
            text: "Build both regulators' distinct compliance requirements and sign-off processes explicitly into the project scope, schedule, and risk plan.",
          },
          {
            key: 'c',
            text: 'Prioritize the regulator overseeing the acquiring bank and address the other only if it becomes an issue.',
          },
          {
            key: 'd',
            text: 'Delegate all regulatory compliance work entirely to the legal department outside the project plan.',
          },
        ],
        correct: 'b',
        explanation:
          "Two regulators in two jurisdictions almost certainly have distinct requirements, and both must be explicitly planned for in scope, schedule, and risk — treating them as interchangeable or deprioritizing one risks a real compliance failure. Assuming equivalence between the two regulators is a dangerous shortcut, deprioritizing either regulator until it becomes urgent invites late surprises, and pushing compliance work entirely outside the project plan removes the project's visibility into a critical path dependency for go-live.",
      },
      {
        id: 3,
        domain: 'People',
        topic: 'Retaining a Key Team Member',
        prompt:
          'A senior Coastal engineer critical to the integration privately tells you he is considering resigning over a perceived loss of autonomy. What should you do?',
        options: [
          {
            key: 'a',
            text: "Take no action, since personnel retention is a functional manager's responsibility, not the project manager's.",
          },
          {
            key: 'b',
            text: 'Have a direct conversation with him to understand his specific concerns and explore ways to address them within the integration approach.',
          },
          {
            key: 'c',
            text: 'Report the conversation to senior leadership immediately without speaking further with the engineer.',
          },
          {
            key: 'd',
            text: 'Assign him additional autonomy over an unrelated, lower-priority workstream as a distraction.',
          },
        ],
        correct: 'b',
        explanation:
          "Losing a senior engineer critical to a time-pressured integration is a real project risk, and the appropriate first step is a direct, honest conversation to understand his specific concerns and see what can genuinely be addressed — this is squarely within the project manager's stakeholder and team management responsibility. Treating it as purely a functional manager's problem ignores the direct project impact, escalating immediately without first talking to him skips a reasonable and respectful first step, and distracting him with unrelated work sidesteps the actual concern rather than addressing it.",
      },
      {
        id: 4,
        domain: 'Business Environment',
        topic: 'Benefits Realization Under Schedule Pressure',
        prompt:
          'Executive leadership is pushing an aggressive timeline to realize the projected $12M in annual synergy savings. How should you respond to this pressure?',
        options: [
          {
            key: 'a',
            text: 'Compress compliance and testing activities to meet the aggressive date, since the savings target is the priority.',
          },
          {
            key: 'b',
            text: 'Present leadership with a realistic schedule that reflects the actual regulatory and integration constraints, framed against the savings timeline and risk of compromising compliance.',
          },
          {
            key: 'c',
            text: 'Commit to the aggressive date as requested without raising any concerns.',
          },
          {
            key: 'd',
            text: "Ignore the savings target entirely, since it is a finance function's concern, not the project's.",
          },
        ],
        correct: 'b',
        explanation:
          "Benefits realization targets are a legitimate business driver, but the project manager's job is to give leadership an honest, evidence-based view of what the actual constraints allow — not to silently absorb schedule pressure by cutting corners, nor to ignore the business driver altogether. Compressing compliance and testing to hit a date risks the exact regulatory failure the dual sign-off requirement exists to prevent, blind agreement without pushback abdicates the project manager's advisory role, and dismissing the savings target ignores the business justification the whole merger integration serves.",
      },
      {
        id: 5,
        domain: 'Process',
        topic: 'Cross-Border Data Privacy Risk',
        prompt:
          "The customer data migration between the two banks' systems carries privacy and compliance exposure across both jurisdictions. What should you ensure is in place before migration begins?",
        options: [
          {
            key: 'a',
            text: 'A general assurance from both IT teams that the migration "should be fine."',
          },
          {
            key: 'b',
            text: "A documented data privacy and compliance review, covering both jurisdictions' requirements, with specific safeguards built into the migration plan.",
          },
          {
            key: 'c',
            text: 'A decision to migrate the data first and address any privacy issues that surface afterward.',
          },
          {
            key: 'd',
            text: "Reliance solely on the data migration vendor's standard privacy practices, without independent review.",
          },
        ],
        correct: 'b',
        explanation:
          "Cross-jurisdictional customer data migration for a bank is a high-consequence compliance activity that requires a documented review addressing both jurisdictions' specific requirements, with concrete safeguards built into the plan before any data moves. An informal assurance is not a real control, migrating first and fixing privacy issues afterward inverts the correct order for a compliance-sensitive activity, and relying solely on a vendor's standard practices without independent review leaves the bank's own compliance obligations unverified.",
      },
      {
        id: 6,
        domain: 'Process',
        topic: 'Core System Cutover Strategy',
        prompt:
          'What is the MOST appropriate approach for cutting over from the two separate core banking systems to the combined system?',
        options: [
          {
            key: 'a',
            text: 'A single "big bang" cutover for all customers and accounts on one date, to minimize the duration of running two systems.',
          },
          {
            key: 'b',
            text: 'A phased cutover strategy, migrating customer segments or account types in planned stages with validation at each stage.',
          },
          {
            key: 'c',
            text: 'No defined cutover strategy, allowing each branch to migrate on its own schedule.',
          },
          {
            key: 'd',
            text: 'A cutover date chosen solely to align with the executive-mandated timeline, regardless of readiness.',
          },
        ],
        correct: 'b',
        explanation:
          'For a core banking system merger carrying real financial and compliance risk, a phased cutover with validation at each stage limits the blast radius of any single failure and allows issues to be caught and corrected before they affect the entire customer base. A single big-bang cutover maximizes risk exposure if anything goes wrong, leaving each branch to migrate independently with no coordinated strategy invites inconsistency and unmanaged risk, and picking the date purely to satisfy an executive timeline regardless of actual readiness repeats the same risk this whole domain is meant to avoid.',
      },
      {
        id: 7,
        domain: 'People',
        topic: 'Communicating Through Merger Uncertainty',
        prompt:
          'Beyond the one engineer who raised concerns directly, morale across the combined team is low due to general uncertainty about job security following the merger. What should you do?',
        options: [
          {
            key: 'a',
            text: "Avoid discussing the merger's broader implications, since job security decisions are outside the project's control.",
          },
          {
            key: 'b',
            text: 'Establish regular, honest communication about what is and is not yet known, creating space for the team to raise concerns.',
          },
          {
            key: 'c',
            text: 'Reassure the team that no jobs will be affected, even though that has not been confirmed.',
          },
          {
            key: 'd',
            text: 'Focus only on project deliverables and treat morale as a separate concern for another time.',
          },
        ],
        correct: 'b',
        explanation:
          "Uncertainty is unavoidable during a merger, but regular, honest communication about what is and isn't yet known — paired with genuine space for the team to raise concerns — is what actually protects psychological safety and morale under those conditions. Staying silent lets anxiety and rumor fill the gap, promising an outcome that hasn't been confirmed is dishonest and will damage trust when reality differs, and deferring morale entirely ignores its direct effect on the integration's ability to deliver on time.",
      },
    ],
  },
  {
    id: 6,
    title: 'HopeBridge Community Health Scenario',
    scenarioText:
      "You are the PM leading an 18-month maternal health program for HopeBridge, an NGO, funded jointly by a government health agency, a private foundation, and a corporate CSR fund — each with different reporting requirements and restrictions on how their portion of funding may be used. The program operates across three rural regions, staffed largely by local community health workers who volunteer their time alongside a small paid core team. Midway through the program, an internal audit reveals inconsistent outcome reporting across the three regions, prompting one donor to threaten withdrawal of funding. Separately, a respected community leader in one region has raised concerns that the program's educational materials do not reflect local cultural practices. The HopeBridge board has also asked whether the program can expand into a fourth region, without any additional funding yet secured.",
    questions: [
      {
        id: 1,
        domain: 'Business Environment',
        topic: 'Reconciling Multiple Donor Reporting Requirements',
        prompt:
          "The three donors each have different reporting requirements and restrictions on fund use. How should the project's reporting process be structured?",
        options: [
          {
            key: 'a',
            text: 'Produce one standardized report and send the same version to all three donors regardless of their individual requirements.',
          },
          {
            key: 'b',
            text: "Design a reporting process that captures the underlying program data once, but tailors outputs to satisfy each donor's specific requirements and fund-use restrictions.",
          },
          {
            key: 'c',
            text: 'Report only to the donor providing the largest share of funding, and share informal updates with the others.',
          },
          {
            key: 'd',
            text: 'Let each of the three regional teams develop and send their own reports independently to all donors.',
          },
        ],
        correct: 'b',
        explanation:
          "Each donor's distinct requirements need to actually be satisfied, not smoothed over with a one-size-fits-all report — the efficient way to do that is to capture the underlying program data consistently once, then tailor the output format and content to each donor's specific needs. Sending an identical report to all three ignores real differences in what each requires, favoring the largest donor neglects legitimate obligations to the others, and letting each region report independently and inconsistently is exactly the failure mode that caused the audit finding in the first place.",
      },
      {
        id: 2,
        domain: 'Business Environment',
        topic: 'Responding to a Donor Funding Threat',
        prompt:
          'An audit reveals inconsistent outcome reporting across the three regions, and one donor threatens to withdraw funding. What should you do?',
        options: [
          {
            key: 'a',
            text: 'Reassure the donor verbally that the issue is minor and will not happen again, without a documented plan.',
          },
          {
            key: 'b',
            text: 'Investigate the root cause of the inconsistent reporting, implement a corrective action plan, and communicate it transparently to the donor.',
          },
          {
            key: 'c',
            text: 'Avoid further communication with the donor until the funding decision is made.',
          },
          {
            key: 'd',
            text: 'Shift blame to the regional teams responsible for the inconsistent data in your response to the donor.',
          },
        ],
        correct: 'b',
        explanation:
          "Rebuilding a donor's trust after a legitimate audit finding requires actually understanding why the reporting was inconsistent, fixing that root cause, and communicating the corrective plan transparently — that's what demonstrates the program is being managed responsibly. A verbal reassurance with no substance behind it won't hold up, going silent looks evasive at exactly the wrong moment, and shifting blame to the regional teams is both unproductive and undermines the very people the program depends on.",
      },
      {
        id: 3,
        domain: 'People',
        topic: 'Managing Volunteer Community Health Workers',
        prompt:
          'The program relies heavily on local community health workers who volunteer their time. What is the MOST effective way to manage and motivate this part of the team?',
        options: [
          {
            key: 'a',
            text: 'Apply the same performance management approach used for the paid core team, including formal performance reviews.',
          },
          {
            key: 'b',
            text: 'Recognize their contributions meaningfully, involve them in decisions that affect their communities, and provide the support and training that helps them succeed.',
          },
          {
            key: 'c',
            text: 'Minimize engagement with volunteers since they are not formally accountable to the project.',
          },
          {
            key: 'd',
            text: 'Replace volunteers with paid staff as soon as budget allows, since volunteers are inherently less reliable.',
          },
        ],
        correct: 'b',
        explanation:
          "Volunteers are motivated differently than paid staff — meaningful recognition, genuine involvement in decisions affecting their own communities, and real support tend to sustain volunteer engagement far better than formal, employment-style performance management. Applying the paid team's formal review process to volunteers misreads what motivates them, minimizing engagement wastes a critical part of the delivery model, and assuming volunteers are inherently less reliable is an unfounded generalization that ignores their central role in the program's actual delivery.",
      },
      {
        id: 4,
        domain: 'People',
        topic: 'Cultural Sensitivity in Program Materials',
        prompt:
          "A respected community leader raises concerns that the program's educational materials do not reflect local cultural practices. What should you do?",
        options: [
          {
            key: 'a',
            text: 'Keep the materials unchanged, since they were already approved by the donors before rollout.',
          },
          {
            key: 'b',
            text: 'Engage the community leader and other local stakeholders to understand the specific concerns and adapt the materials to be culturally appropriate.',
          },
          {
            key: 'c',
            text: 'Discontinue use of educational materials in that region entirely until a new global standard is developed.',
          },
          {
            key: 'd',
            text: 'Delegate the decision entirely to the regional health worker team without further stakeholder input.',
          },
        ],
        correct: 'b',
        explanation:
          "Community-facing health materials that don't reflect local cultural context can undermine trust and effectiveness regardless of donor approval — the right response is direct engagement with the community leader and other local stakeholders to understand the concern and adapt the materials accordingly. Leaving materials unchanged because they were already approved ignores that donor sign-off does not guarantee cultural fit on the ground, discontinuing materials entirely disrupts the program without addressing the actual concern, and delegating the decision without broader stakeholder input risks missing the full picture the community leader raised.",
      },
      {
        id: 5,
        domain: 'Business Environment',
        topic: 'Evaluating Scope Expansion Without Secured Funding',
        prompt:
          'The HopeBridge board asks whether the program can expand into a fourth region without additional funding yet secured. What should you do?',
        options: [
          {
            key: 'a',
            text: 'Begin planning the expansion immediately, assuming funding will be secured before it is needed.',
          },
          {
            key: 'b',
            text: 'Present the board with the funding gap and resource implications of expansion, and recommend that expansion proceed only once funding is secured.',
          },
          {
            key: 'c',
            text: "Redirect a portion of the current three regions' restricted funds to begin the fourth region.",
          },
          {
            key: 'd',
            text: 'Decline to discuss the request, since it falls outside the current approved scope.',
          },
        ],
        correct: 'b',
        explanation:
          "Expanding scope without secured funding is a real business-justification gap that the board needs to see clearly before making a decision — presenting the funding and resource implications honestly, and recommending expansion wait until funding is in place, gives them what they need to decide responsibly. Assuming funding will simply appear is a risky bet with the program's stability, redirecting other donors' restricted funds likely violates the fund-use restrictions those donors imposed, and refusing to even discuss the request isn't a constructive way to engage with the board's legitimate strategic question.",
      },
      {
        id: 6,
        domain: 'Process',
        topic: 'Planning Within Donor Fund Restrictions',
        prompt:
          'Each donor places restrictions on how their portion of the funding may be used. How should this be reflected in project cost planning?',
        options: [
          {
            key: 'a',
            text: 'Pool all funding together and allocate it across activities based on operational convenience.',
          },
          {
            key: 'b',
            text: "Structure the cost baseline and work packages so that each activity's funding source and associated restrictions are clearly tracked and respected.",
          },
          {
            key: 'c',
            text: "Use the least-restricted donor's funds first and address the more restricted funds' compliance later.",
          },
          {
            key: 'd',
            text: 'Ask each regional team to independently manage compliance with fund restrictions without central coordination.',
          },
        ],
        correct: 'b',
        explanation:
          "Donor-restricted funding needs to be explicitly reflected in how costs are planned and tracked — structuring the cost baseline and work packages so each activity's funding source and restrictions are clear keeps the program compliant with every donor's terms. Pooling funds and allocating by convenience risks spending restricted money on ineligible activities, using unrestricted funds first while deferring restricted-fund compliance just postpones the same risk, and leaving each region to manage this independently is exactly the kind of inconsistency that triggered the earlier audit finding.",
      },
      {
        id: 7,
        domain: 'Process',
        topic: 'Contingency Planning for Funding Risk',
        prompt:
          'Given that a major donor has already threatened withdrawal once, what should you do to prepare for the possibility of losing a funding source mid-program?',
        options: [
          {
            key: 'a',
            text: 'Take no additional action, since the donor has not yet formally withdrawn.',
          },
          {
            key: 'b',
            text: 'Develop a contingency plan identifying which activities would be affected by a funding loss and how the program would respond.',
          },
          {
            key: 'c',
            text: 'Immediately scale back all program activities in the affected region as a precaution.',
          },
          {
            key: 'd',
            text: 'Ask the other two donors to informally guarantee they will cover any shortfall.',
          },
        ],
        correct: 'b',
        explanation:
          'A funding source that has already been explicitly threatened is a known risk that warrants a real contingency plan — mapping which activities depend on it and how the program would respond if it materializes — rather than waiting until it actually happens. Taking no action leaves the program unprepared for a risk that has already been flagged, scaling back activities preemptively causes real harm before the risk has even occurred, and asking other donors for an informal guarantee is not a reliable or appropriate way to manage this exposure.',
      },
    ],
  },
]
