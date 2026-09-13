import type { PMPQuestion } from './pmp-quiz-types'

export const pmpProcessDrillQuestions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'Process',
    topic: 'Earned Value (CPI)',
    prompt:
      'A mid-project audit reveals an Earned Value Cost Performance Index (CPI) of 0.71. How should this result be interpreted?',
    options: [
      {
        key: 'a',
        text: 'The project is substantially over budget.',
      },
      {
        key: 'b',
        text: 'The project is slightly under budget.',
      },
      {
        key: 'c',
        text: 'The project is ahead of schedule.',
      },
      {
        key: 'd',
        text: 'The project is running on budget.',
      },
    ],
    correct: 'a',
    explanation:
      'CPI = EV / AC. A CPI less than 1.0 indicates that the project is spending more than planned for the value delivered (i.e., over budget). A CPI of 0.71 means you are receiving only 71 cents of value for every dollar spent.',
  },
  {
    id: 2,
    domain: 'Process',
    topic: 'Change Impact Analysis',
    prompt:
      'A client submits an urgent request to add a new AI feature prior to an upcoming product launch. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Reject the request because scope cannot be altered late in the lifecycle.',
      },
      {
        key: 'b',
        text: 'Implement the feature immediately to maintain customer satisfaction.',
      },
      {
        key: 'c',
        text: 'Work with the Product Owner and team to analyze the impact on time, cost, quality, and backlog prioritization.',
      },
      {
        key: 'd',
        text: 'Ask the sponsor for additional budget to crash the schedule.',
      },
    ],
    correct: 'c',
    explanation:
      'Whether predictive or adaptive, change requests must undergo impact analysis on schedule, cost, risk, and value prior to committing resources or adjusting scope baselines.',
  },
  {
    id: 3,
    domain: 'Process',
    topic: 'Root-Cause Analysis & Retrospectives',
    prompt:
      'During a sprint review, four deliverables fail the quality review due to repeated integration issues. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Facilitate a root-cause analysis (e.g., Fishbone diagram) with the team during the upcoming retrospective.',
      },
      {
        key: 'b',
        text: 'Revise the quality management plan to lower the inspection thresholds.',
      },
      {
        key: 'c',
        text: 'Escalate the issue to executive leadership immediately.',
      },
      {
        key: 'd',
        text: 'Replace the team members responsible for testing.',
      },
    ],
    correct: 'a',
    explanation:
      'Rather than lowering standards or shifting blame, agile/hybrid frameworks rely on continuous improvement through root-cause analysis and team retrospectives.',
  },
  {
    id: 4,
    domain: 'Process',
    topic: 'Hybrid Dependency Management',
    prompt:
      'A project uses a hybrid approach: the engineering design is predictive, but software features are delivered using Scrum. The software team is blocked because design documentation is delivered late. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Switch the entire project immediately to a 100% predictive model.',
      },
      {
        key: 'b',
        text: 'Work with the product owner and leads to establish clear interface milestones and buffer dependencies between frameworks.',
      },
      {
        key: 'c',
        text: 'Order the software team to start coding based on speculative assumptions.',
      },
      {
        key: 'd',
        text: 'Direct the design team to stop formal documentation.',
      },
    ],
    correct: 'b',
    explanation:
      'In hybrid deliveries, the primary failure mode is misalignment at the boundary between predictive and adaptive tracks. Defining explicit release gates and workflow dependencies resolves cross-framework bottlenecks.',
  },
  {
    id: 5,
    domain: 'Process',
    topic: 'Resource Leveling',
    prompt:
      'During project execution, a project manager is informed that some resources will soon be removed from the project. What should the project manager do to address this situation?',
    options: [
      {
        key: 'a',
        text: 'Schedule a meeting to keep the stakeholders informed.',
      },
      {
        key: 'b',
        text: 'Inform the stakeholders at the next scheduled review meeting.',
      },
      {
        key: 'c',
        text: 'Update the risk register with this risk to project resources.',
      },
      {
        key: 'd',
        text: 'Request resource leveling.',
      },
    ],
    correct: 'd',
    explanation:
      'Resource leveling adjusts the project schedule so resources are available when needed and utilization is optimized — when resources are removed, it helps identify alternatives or adjust the schedule to minimize impact and keep the project on track. Scheduling a meeting or waiting for the next review may delay action, and updating the risk register may be premature without more information and does not directly address resource availability.',
  },
  {
    id: 6,
    domain: 'Process',
    topic: 'Stakeholder Identification via Project Charter',
    prompt:
      'During the planning phase of a project, the project manager is having trouble identifying stakeholders. Without input from the correct stakeholders, getting user feedback will be challenging. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Review the stakeholder engagement plan.',
      },
      {
        key: 'b',
        text: 'Inform the project sponsors.',
      },
      {
        key: 'c',
        text: 'Refer to the project charter to identify stakeholders.',
      },
      {
        key: 'd',
        text: 'Review the project scope document.',
      },
    ],
    correct: 'c',
    explanation:
      "The project charter typically includes the project's purpose, objectives, and stakeholders, making it the most direct and effective way to identify stakeholders during planning. The stakeholder engagement plan isn't created until stakeholders are already identified, informing sponsors alone isn't comprehensive, and the scope document isn't typically used to identify stakeholders.",
  },
  {
    id: 7,
    domain: 'Process',
    topic: 'Agile Late-Stage Scope Change',
    prompt:
      'A project team is in sprint 13 of a fourteen-sprint project. The project team placed a game-changing feature on the backlog for the next release. The product owner is informed that a competitor is launching a new product with a feature that closely resembles the feature placed on the backlog. The product owner is demanding this game-changing feature be incorporated in the current release. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Organize a review meeting with the development team to get an understanding of the extent of work required.',
      },
      {
        key: 'b',
        text: 'Meet with the product owner and relevant stakeholders to discuss the change and analyze the impact.',
      },
      {
        key: 'c',
        text: 'Perform the required assessments and raise a change request with the Change Control Board (CCB).',
      },
      {
        key: 'd',
        text: 'Inform the product owner that this game-changing feature will be added to the next release of the product.',
      },
    ],
    correct: 'b',
    explanation:
      "The product owner is demanding a significant late-project change with real scope, schedule, and resource impact. The PM should meet with the product owner and relevant stakeholders to discuss the change, analyze impact, and decide collaboratively — the heart of agile methodology. A dev-team-only review skips the key decision-makers, agile projects don't typically use a formal CCB, and refusing outright skips the impact analysis agile embraces for late changes that maximize customer value.",
  },
  {
    id: 8,
    domain: 'Process',
    topic: 'Risk Response Funding via Change Control',
    prompt:
      'During a progress meeting, the project team learns that an identified risk materialized. The project manager decides to execute the risk response plan, but the contingency reserve does not cover the total budget for that plan. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Ask the project sponsor to apply the management reserve to cover the remaining cost of the response.',
      },
      {
        key: 'b',
        text: 'Ask the project sponsor to provide an additional budget to compensate for the cost overage.',
      },
      {
        key: 'c',
        text: 'Issue a change request to modify the scope, cost, and schedule baselines to support the new plan.',
      },
      {
        key: 'd',
        text: 'Use the contingency reserve and assess options to reduce the budget to cover the remaining work.',
      },
    ],
    correct: 'c',
    explanation:
      'Executing a risk response plan requires a change to the current project management plan — issuing a change request is the appropriate way to request the necessary budget, reschedule, and incorporate the new activities into scope. Management reserve is reserved for unidentified risks, not ones already identified; asking the sponsor directly for budget would still require a change request; and unilaterally cutting scope to fit the reserve is not the correct path.',
  },
  {
    id: 9,
    domain: 'Process',
    topic: 'Communications Management Plan Maintenance',
    prompt:
      'After emailing a recent project status report, the project manager learns that a number of recipients are no longer involved with the project. The project manager needs to verify the distribution list for future status reports. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Review and update the communications management plan.',
      },
      {
        key: 'b',
        text: 'Review and update the schedule management plan.',
      },
      {
        key: 'c',
        text: 'Review and update the responsibility assignment matrix.',
      },
      {
        key: 'd',
        text: 'Review and update the resource management plan.',
      },
    ],
    correct: 'a',
    explanation:
      "The communications management plan is the document that identifies who should receive project status reports, so it's the first one to review and update to fix the distribution list. The schedule management plan, responsibility assignment matrix, and resource management plan don't define who receives status reports.",
  },
  {
    id: 10,
    domain: 'Process',
    topic: 'Tailoring Communication for Distributed Teams',
    prompt:
      'An adaptive project team is globally distributed and the team members speak different primary languages. Daily meetings are conducted virtually in a common language. The project manager is made aware that there are some communication issues. Differences in pronunciation, accent, and vocabulary make it extremely difficult for some members to understand each other. What should the project manager tailor to improve the daily meeting and avoid misunderstanding?',
    options: [
      {
        key: 'a',
        text: 'Use the call to verbally summarize the work status as reported by the team members.',
      },
      {
        key: 'b',
        text: 'Use an electronic task board to give a visual representation of work status and progress.',
      },
      {
        key: 'c',
        text: "Ask for a change in the project's budget to provide access to a translation service.",
      },
      {
        key: 'd',
        text: 'Ask all team members to report on work completed, upcoming work, and blockers.',
      },
    ],
    correct: 'b',
    explanation:
      'A visual electronic task board helps the team absorb and make sense of status information despite language and accent differences, promoting clear communication independent of spoken word. Verbally summarizing status or having everyone report verbally does not address the comprehension issue itself, and a translation service may not be feasible and can introduce further distortion and delay.',
  },
  {
    id: 11,
    domain: 'Process',
    topic: 'Stakeholder Analysis',
    prompt:
      'An experienced project manager is mentoring a new project manager assigned to their first project. As the new project manager prepares for the project, they are overwhelmed by the number of stakeholders identified by the team. What should the experienced project manager tell the new project manager to do next?',
    options: [
      {
        key: 'a',
        text: 'Perform a stakeholder analysis to determine the relative importance.',
      },
      {
        key: 'b',
        text: 'Categorize key stakeholders using a workbook register.',
      },
      {
        key: 'c',
        text: 'Update the communications management plan with stakeholder preferences.',
      },
      {
        key: 'd',
        text: 'Prioritize stakeholders based on the stakeholder register.',
      },
    ],
    correct: 'a',
    explanation:
      'Once stakeholders are identified, the team should analyze them — systematically gathering and analyzing quantitative and qualitative information to determine whose interests should be accounted for. Categorizing stakeholders, updating the communications plan, and prioritizing from the register all rely on the insight a stakeholder analysis produces, so they should follow it, not substitute for it.',
  },
  {
    id: 12,
    domain: 'Process',
    topic: 'Agile Quality Assessment Techniques',
    prompt:
      'A developer has completed the deliverable for a feature. The product owner is not sure how to assess the quality of the deliverable. Considering that the project is using an agile approach, what kind of tool or technique should the product owner use?',
    options: [
      {
        key: 'a',
        text: 'Expert judgment',
      },
      {
        key: 'b',
        text: 'Decision making',
      },
      {
        key: 'c',
        text: 'Demonstrations/reviews',
      },
      {
        key: 'd',
        text: 'Checklists',
      },
    ],
    correct: 'c',
    explanation:
      "Demos or reviews are part of every agile sprint, giving the product owner or customer visibility into progress and feedback that lets the team adjust early. Expert judgment, decision making, and checklists are techniques more associated with predictive approaches and don't fit this agile context as well.",
  },
  {
    id: 13,
    domain: 'Process',
    topic: 'Risk Register Response Execution',
    prompt:
      "Some of the project's materials have been ordered from overseas. The supplier notifies the project team that the materials will not reach the site on time due to a customs clearance delay that will affect the critical path. What should the project manager do first?",
    options: [
      {
        key: 'a',
        text: 'Ask the logistics team to arrange an expedited clearance.',
      },
      {
        key: 'b',
        text: 'Revisit the risk register and implement the respective risk response.',
      },
      {
        key: 'c',
        text: 'Identify the root cause of the delay and add it to the bid documents.',
      },
      {
        key: 'd',
        text: 'Ensure the suppliers cover any additional costs due to the delay.',
      },
    ],
    correct: 'b',
    explanation:
      'The PM should first revisit the risk register, since this kind of delay was very likely identified and planned for at the start of the project — the register holds the planned response to execute. Expediting clearance may not even be possible since customs is controlled by regional/governmental bodies; the root cause is already known here, and bid documents are for soliciting new suppliers, not an already-chosen one; and cost-sharing terms are typically fixed by the existing contract, not decided reactively.',
  },
  {
    id: 14,
    domain: 'Process',
    topic: 'Logging Emerging Cross-Location Conflict',
    prompt:
      'A new project has a team divided between onsite and offshore locations. The project manager observed a rising conflict between the two parts of the team during project initiation. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Communicate the project scope to all team members.',
      },
      {
        key: 'b',
        text: 'Organize a face-to-face meeting during project kick-off.',
      },
      {
        key: 'c',
        text: 'Identify this conflict in the risk register log.',
      },
      {
        key: 'd',
        text: 'Record this conflict in the project issue log.',
      },
    ],
    correct: 'c',
    explanation:
      'A rising conflict that has not yet caused a concrete problem is still a risk — logging it in the risk register lets the PM track it and develop mitigation strategies before it escalates. Communicating scope or holding a kickoff meeting may help generally but do not directly track or address this specific conflict, and the issue log is for problems that have already materialized, not emerging risks.',
  },
  {
    id: 15,
    domain: 'Process',
    topic: 'Reviewing the Stakeholder Engagement Plan',
    prompt:
      'A project manager is concerned about delivering the planned business value because the product owner is not engaged. What should the project manager do to address the concern?',
    options: [
      {
        key: 'a',
        text: 'Review and update the communications management plan.',
      },
      {
        key: 'b',
        text: 'Review and update the stakeholder engagement plan.',
      },
      {
        key: 'c',
        text: 'Review and update the resource management plan.',
      },
      {
        key: 'd',
        text: 'Review and update the risk management plan.',
      },
    ],
    correct: 'b',
    explanation:
      'A disengaged product owner is a stakeholder-engagement problem, and the stakeholder engagement plan is where the PM assesses whether the current engagement strategy is effective or needs adjusting to find the root cause. The communications, resource, and risk management plans are not built to address the effectiveness of stakeholder engagement.',
  },
  {
    id: 16,
    domain: 'Process',
    topic: 'Closing Out Contingency Reserve',
    prompt:
      "After the transition and completion of a large equipment installation project, the project manager receives a request from the customer to add some operational cost to the project budget for team-building activities. The project was completed under budget, project contingency reserves were not spent, and the team-building activities will ensure the operational team's optimal performance. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Reject the request and close the project financials.',
      },
      {
        key: 'b',
        text: 'Perform the integrated change control process.',
      },
      {
        key: 'c',
        text: 'Approve the expenditure to ensure customer satisfaction.',
      },
      {
        key: 'd',
        text: 'Document the request in the lessons learned repository.',
      },
    ],
    correct: 'a',
    explanation:
      "The project has already been completed and transitioned to the customer, so the request should be declined — contingency reserves aren't for operational items unrelated to the project's own success, and financials should be closed and the budget released. Change control no longer applies to a project that's already closed, approving it undermines proper cost control, and simply logging it doesn't resolve the actual request.",
  },
  {
    id: 17,
    domain: 'Process',
    topic: 'Risk-Adjusted Backlog Prioritization',
    prompt:
      'The tables show the requirements for an agile project with the anticipated return on investment (ROI) and identified project risks, along with the analysis details. Requirements (priority 1 each): Requirement 1 = $10,000 ROI, Requirement 2 = $8,000 ROI, Requirement 3 = $25,000 ROI. Risks: Risk 1 = $5,000 impact / 75% probability, Risk 2 = $4,000 impact / 50% probability, Risk 3 = $20,000 impact / 45% probability. What should the priority order be in the risk-adjusted product backlog?',
    options: [
      {
        key: 'a',
        text: 'Requirement 3, Requirement 1, Requirement 2, Risk 3',
      },
      {
        key: 'b',
        text: 'Risk 3, Risk 1, Risk 2, Requirement 3, Requirement 1, Requirement 2',
      },
      {
        key: 'c',
        text: 'Requirement 3, Risk 3, Requirement 1, Requirement 2, Risk 2',
      },
      {
        key: 'd',
        text: 'Requirement 3, Requirement 1, Risk 3, Requirement 2, Risk 1, Risk 2',
      },
    ],
    correct: 'd',
    explanation:
      'Ranking requirements by ROI gives Requirement 3 ($25,000) > Requirement 1 ($10,000) > Requirement 2 ($8,000). Ranking risks by expected monetary value (probability x impact) gives Risk 3 ($20,000 x 45% = $9,000) > Risk 1 ($5,000 x 75% = $3,750) > Risk 2 ($4,000 x 50% = $2,000). Interleaving the two rankings by relative value produces Requirement 3, Requirement 1, Risk 3, Requirement 2, Risk 1, Risk 2.',
  },
  {
    id: 18,
    domain: 'Process',
    topic: 'Training as a Project Deliverable',
    prompt:
      'A project manager is preparing for an organization-wide software system replacement project that will have a significant impact on business operations. It is crucial to provide training to ensure that everyone within the organization can effectively use the new software system, but training resources are limited. What is the most effective action the project manager should take to ensure successful training for all organization members?',
    options: [
      {
        key: 'a',
        text: 'Incorporate a detailed training and coaching component as a project deliverable.',
      },
      {
        key: 'b',
        text: 'Determine the specific needs and requirements of different user functions.',
      },
      {
        key: 'c',
        text: 'Recruit additional trainers to ensure adequate training coverage throughout the organization.',
      },
      {
        key: 'd',
        text: 'Prioritize training efforts by identifying which features are most essential.',
      },
    ],
    correct: 'a',
    explanation:
      "Making training and coaching a formal project deliverable ensures it's treated as an integral, well-resourced part of the plan rather than an afterthought — the system itself is only the output, but training and coaching enable the productivity outcome the project is actually meant to achieve. Determining user needs, recruiting more trainers, or prioritizing by feature are all useful sub-steps, but none of them alone ensures training gets delivered effectively.",
  },
  {
    id: 19,
    domain: 'Process',
    topic: 'Choosing an Approach for Unclear Requirements',
    prompt:
      'A project manager is beginning a new financial software project in a very competitive environment. The regulations for compliance are clear, but the requirements are not clear. The customer stresses that they need results as soon as possible. Which implementation approach should the project manager choose for this project?',
    options: [
      {
        key: 'a',
        text: 'Repeating and refining project phases in multiple iterations.',
      },
      {
        key: 'b',
        text: 'Progressing through a linear sequence of stages.',
      },
      {
        key: 'c',
        text: 'Embracing change and focusing on delivering value.',
      },
      {
        key: 'd',
        text: 'Focusing on delivering the project in multiple increments.',
      },
    ],
    correct: 'd',
    explanation:
      "Delivering the project in multiple increments gets usable, valuable functionality to the customer early, matching their need for quick results while unclear requirements get refined through real feedback — reducing rework and promoting an early ROI in a competitive environment. Iterative refinement alone isn't as cost-effective as clarifying requirements with the customer before building, a linear sequence assumes requirements can be fully defined upfront (which they can't here), and 'embracing change and value' is a valuable mindset but not a concrete implementation approach on its own.",
  },
  {
    id: 20,
    domain: 'Process',
    topic: 'Interactive Communication to Confirm a Specified Format',
    prompt:
      'In preparation for a meeting with the CEO of an organization, a project manager asks a team member to prepare a monthly report for the CEO. The CEO provided a specific format for these reports at the start of the project. The day before the meeting, the project manager reviews the report and discovers that it is not formatted as specified by the CEO. What should the project manager have done to avoid this situation?',
    options: [
      {
        key: 'a',
        text: 'Asked for the report from the team member earlier to ensure it was in the requested format.',
      },
      {
        key: 'b',
        text: 'Requested that the CEO provide more detailed format requirements for creating monthly status reports.',
      },
      {
        key: 'c',
        text: 'Used interactive communication to confirm that the team member acknowledges the specified format.',
      },
      {
        key: 'd',
        text: 'Modified the communications management plan to include the new report format requirements.',
      },
    ],
    correct: 'c',
    explanation:
      'Interactive, two-way communication is what confirms information was correctly received and understood — the PM should have used it to confirm the team member actually understood the specified format. Asking for the report earlier does not address the root misunderstanding, the format requirements were already clear from the CEO, and there is no indication the format itself changed, so the communications plan does not need updating.',
  },
  {
    id: 21,
    domain: 'Process',
    topic: 'Including Stakeholders in Sprint Planning',
    prompt:
      'A company is creating a new application for its users. The agile team completed the initiating stage and is performing iterations to complete planning and execution. However, a stakeholder wants to change the order of the deliverables to demonstrate new aspects of the app to stakeholders. How should the project manager address this situation?',
    options: [
      {
        key: 'a',
        text: 'Include the stakeholder in sprint planning to ensure the right priorities are assigned.',
      },
      {
        key: 'b',
        text: 'Use key performance indicators (KPIs) to verify that the project is progressing on schedule.',
      },
      {
        key: 'c',
        text: 'Ask the stakeholder for a change request and submit it to the change control board (CCB).',
      },
      {
        key: 'd',
        text: 'Explain to the stakeholder that modifying the schedule now will increase the delivery risk.',
      },
    ],
    correct: 'a',
    explanation:
      "Agile projects expect work to evolve and adapt — including the stakeholder in sprint planning ensures the right priorities are assigned and addresses the request directly. Verifying progress with KPIs doesn't address the actual request, agile projects don't typically route reprioritization through a formal CCB, and simply warning about delivery risk skips working with the stakeholder to find a solution.",
  },
  {
    id: 22,
    domain: 'Process',
    topic: 'Scope Management Plan as the First Planning Step',
    prompt:
      'The research and development team is planning to build a new facility that will focus on improving existing products the organization has developed. It will be a multi-year initiative. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Develop a scope management plan that will focus on the expected objectives of the initiative.',
      },
      {
        key: 'b',
        text: 'Develop a business case document that covers the return on investment (ROI) of the initiative.',
      },
      {
        key: 'c',
        text: 'Develop a resource management plan to cover resources and contingency planning.',
      },
      {
        key: 'd',
        text: 'Develop a communications management plan to address stakeholder needs.',
      },
    ],
    correct: 'a',
    explanation:
      "The first step in planning any project is a scope management plan, which defines the project's goals, objectives, deliverables, boundaries, and constraints. The business case is important for justifying and funding the project, the resource management plan for ensuring adequate resources, and the communications plan for stakeholder engagement, but none of them are the first planning step — a well-defined scope comes first.",
  },
  {
    id: 23,
    domain: 'Process',
    topic: 'Aligning Artifacts to a New Estimation Technique',
    prompt:
      'A new program manager checks the status of a project. The forecast shows the project is slightly behind schedule. However, in reporting, the project manager stated that the project is on track. The program manager asks the project manager to explain the discrepancy. The project manager explains that the forecast discrepancy is due to a new estimation technique. What should the project manager have done to avoid this discrepancy?',
    options: [
      {
        key: 'a',
        text: 'Asked the program manager to use the old forecasting technique',
      },
      {
        key: 'b',
        text: 'Educated the program manager on the new forecasting technique',
      },
      {
        key: 'c',
        text: 'Aligned the project artifacts with the new estimation technique and provided them to the program manager',
      },
      {
        key: 'd',
        text: 'Ensured that the program manager has the necessary knowledge to understand estimation techniques',
      },
    ],
    correct: 'c',
    explanation:
      "The discrepancy arose because the project's own artifacts were never updated to reflect the new estimation technique. Aligning the artifacts and proactively sharing them with the program manager would have given accurate, consistent information from the start. Asking the program manager to revert, educating them after the fact, or just ensuring general knowledge doesn't fix the actual root cause: outdated project artifacts.",
  },
  {
    id: 24,
    domain: 'Process',
    topic: 'Consensus-Building with a Steering Committee',
    prompt:
      'A project can gain downstream marketing benefits if additional equipment is included in the project scope. However, this equipment is still in an early development phase and will not be ready to meet the project timelines. A member of the project steering committee is in favor of its inclusion. How should the project manager proceed?',
    options: [
      {
        key: 'a',
        text: 'Prepare a scope change request to include the additional equipment because it is beneficial to the marketing team.',
      },
      {
        key: 'b',
        text: 'Provide a clear rationale for its exclusion based on the business case and its impact on the project timelines.',
      },
      {
        key: 'c',
        text: 'Conduct a survey among steering committee members to assess their individual project requirements for a consensus decision.',
      },
      {
        key: 'd',
        text: 'Request the project sponsor to escalate the issue to the steering committee member to avoid delaying project approval.',
      },
    ],
    correct: 'c',
    explanation:
      "Since the project is overseen by a steering committee, decisions like this need committee consensus rather than the project team acting unilaterally. Surveying the committee surfaces potential conflicts and identifies impacts before proceeding. Preparing a scope change request or unilaterally excluding the equipment both skip that consensus step, and escalating to the sponsor isn't appropriate before the committee has even weighed in.",
  },
  {
    id: 25,
    domain: 'Process',
    topic: 'Centralized Repository for Split Design/Execution Teams',
    prompt:
      'A hybrid project is using an iterative design process for product development. However, there are separate teams for design and execution, which is causing concerns. What should the project manager do to address these concerns?',
    options: [
      {
        key: 'a',
        text: 'Establish a centralized repository for project documentation and product validation.',
      },
      {
        key: 'b',
        text: 'Request that the design team be made responsible for project execution as well.',
      },
      {
        key: 'c',
        text: 'Communicate to the project management office (PMO) that a hybrid approach is too risky.',
      },
      {
        key: 'd',
        text: 'Enhance team skills by providing training on an adaptive project management framework.',
      },
    ],
    correct: 'a',
    explanation:
      'A centralized repository for documentation and product validation gives both the design and execution teams shared visibility, enabling knowledge transfer and a collaborative working environment despite being separate teams. Merging the teams under one may not be feasible, telling the PMO hybrid is too risky is an unfounded overreaction, and training on an adaptive framework assumes a skills gap the scenario never actually indicates.',
  },
  {
    id: 26,
    domain: 'Process',
    topic: 'Revising a Change Request to Reflect New Information',
    prompt:
      'A project is facing a one-month delay, and the project manager realizes that a change request is necessary. The change control board (CCB) will review the change request at their next meeting in two weeks. However, if the implementation of this change is delayed by two weeks, upcoming supply chain disruptions will cause a two-month delay to the project schedule. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Implement the change immediately to avoid the upcoming supply chain disruptions and the two-month delay.',
      },
      {
        key: 'b',
        text: 'Revise the change request to incorporate the additional two-month delay due to upcoming supply chain disruptions.',
      },
      {
        key: 'c',
        text: 'Meet with the sponsor and ask them to contact the CCB and request their immediate approval.',
      },
      {
        key: 'd',
        text: 'Request that the CEO approve and implement the change to avoid the potential two-month delay.',
      },
    ],
    correct: 'b',
    explanation:
      'Updating the change request with the fuller picture — including the looming supply chain risk — ensures the CCB has everything it needs to make an informed decision at its scheduled review. Implementing the change without CCB approval bypasses the established process, and routing around the CCB through the sponsor or CEO undermines the governance process rather than following it.',
  },
  {
    id: 27,
    domain: 'Process',
    topic: "Assessing a Stakeholder's Suggestion Against Acceptance Criteria",
    prompt:
      "During product demonstration, a stakeholder suggests that the product does not meet expectations. What artifact should the project manager use to assess the stakeholder's suggestion?",
    options: [
      {
        key: 'a',
        text: 'Minimum viable product (MVP) description',
      },
      {
        key: 'b',
        text: 'Definition of done (DoD)',
      },
      {
        key: 'c',
        text: 'Definition of ready (DoR)',
      },
      {
        key: 'd',
        text: 'Acceptance criteria on the user story',
      },
    ],
    correct: 'd',
    explanation:
      "The acceptance criteria on the user story spell out the specific requirements the product must meet to be considered acceptable — the right yardstick for assessing a stakeholder's expectation gap. The DoD and DoR are more general artifacts (what counts as 'done' or 'ready' to start), and the MVP description defines the minimum feature set for viability, not whether a specific piece of work meets expectations.",
  },
  {
    id: 28,
    domain: 'Process',
    topic: 'Sizing Non-Backlog Work Before Adopting Story Points',
    prompt:
      'An experienced project manager joins an ongoing project and wants to estimate the amount of time required to tackle several complex tasks. The team uses a kanban board but is open to new approaches. The project manager suggests using story points. What is the first thing the team should do before implementing this new approach?',
    options: [
      {
        key: 'a',
        text: 'Calculate the story points only for new backlog items.',
      },
      {
        key: 'b',
        text: 'Estimate the story points required for the entire task board.',
      },
      {
        key: 'c',
        text: 'Convert all work in progress (WIP) items to story points.',
      },
      {
        key: 'd',
        text: 'Measure and track story points over several sprints.',
      },
    ],
    correct: 'c',
    explanation:
      'Converting existing work-in-progress items to story points first lets the team understand the scale being used to quantify effort before applying it to new work — a foundation for estimating how many sprints the remaining work will take. Sizing only new backlog items ignores in-progress work, sizing the entire board includes already-completed work, and tracking points over several sprints is a later step, not the first one.',
  },
  {
    id: 29,
    domain: 'Process',
    topic: 'Reviewing Blocked Items in Standups',
    prompt:
      'An agile project manager is overseeing a Kanban project and wants to assess task completion roadblocks for an upcoming major milestone. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Create a performance metric using the work in progress limit.',
      },
      {
        key: 'b',
        text: 'Ask a trusted team member about the issues the team is facing.',
      },
      {
        key: 'c',
        text: 'Review the blocked items with the team during standup meetings.',
      },
      {
        key: 'd',
        text: 'Host a stakeholder meeting to discuss task completion roadblocks.',
      },
    ],
    correct: 'c',
    explanation:
      "A Kanban board shows work in progress and helps identify bottlenecks — reviewing blocked items with the whole team during standups is how the PM surfaces obstacles that could threaten the milestone. A WIP-based performance metric won't reveal specific roadblocks or their causes, asking just one team member excludes the rest of the team's input, and a stakeholder meeting is less effective than starting fact-finding with the team itself.",
  },
  {
    id: 30,
    domain: 'Process',
    topic: 'Integrated Change Control for a Co-Sponsor Request',
    prompt:
      'Halfway through implementation, the project co-sponsor, who is contributing a significant amount of capital to the project, informs the project team of an additional feature to the project deliverable. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Assess the impact of the new requirement and update the risk register.',
      },
      {
        key: 'b',
        text: 'Complete the current project as planned and update it later with the new requirements.',
      },
      {
        key: 'c',
        text: "Collect the co-sponsor's requirements and perform the integrated change control process.",
      },
      {
        key: 'd',
        text: 'Convince the co-sponsor to maintain the current scope and complete the project as planned.',
      },
    ],
    correct: 'c',
    explanation:
      "The co-sponsor is a key stakeholder whose requirements should be taken seriously — the PM should collect the requirements and run them through the integrated change control process. Updating the risk register alone isn't the right first step for a scope addition, deferring the requirement until after project completion ignores a legitimate stakeholder request, and trying to talk the co-sponsor out of it isn't worthwhile if it works against project success.",
  },
  {
    id: 31,
    domain: 'Process',
    topic: 'AI Strategy Types (Automation vs Augmentation)',
    prompt:
      'You are managing a project to deliver a new battery type for electric vehicles. The project sponsor suggests that you use AI to auto-generate weekly status reports, and use AI for pattern recognition to adjust the ROI for new risks and their responses. What AI strategies are these, respectively?',
    options: [
      {
        key: 'a',
        text: 'Automation; Augmentation.',
      },
      {
        key: 'b',
        text: 'Assistance; Automation.',
      },
      {
        key: 'c',
        text: 'Augmentation; Assistance.',
      },
      {
        key: 'd',
        text: 'Automation; Assistance.',
      },
    ],
    correct: 'a',
    explanation:
      "Auto-generating the status reports replaces a manual task outright — that's automation. Using AI pattern recognition to help adjust ROI for risks and responses supports and enhances the PM's own judgment rather than replacing it — that's augmentation.",
  },
  {
    id: 32,
    domain: 'Process',
    topic: 'AI Risk Mitigation (Bias)',
    prompt:
      'A project manager wants to reduce the risk of bias in an AI tool used for resource allocation decisions across multiple departments. Which of the following actions best mitigates this risk?',
    options: [
      {
        key: 'a',
        text: 'Increase the frequency of AI-generated reviews.',
      },
      {
        key: 'b',
        text: 'Diversify the data sets used to train the AI system.',
      },
      {
        key: 'c',
        text: 'Restrict AI use to cost-related calculations.',
      },
      {
        key: 'd',
        text: 'Require executive approval for every AI query.',
      },
    ],
    correct: 'b',
    explanation:
      "Bias mitigation for an AI system centers on diversifying the training data sets, periodic bias testing, and involving different teams in the AI system's development. Increasing review frequency, restricting AI to cost calculations, or requiring sign-off on every query don't touch the root cause of bias.",
  },
  {
    id: 33,
    domain: 'Process',
    topic: 'AI Risk Categorization (IP Ownership)',
    prompt:
      'You are leading a project where the team uses an AI tool to summarize contractual obligations. During a risk workshop the legal department flags that portions of the training data may have been sourced without proper licensing of the information. How will you raise this in the Risk Register?',
    options: [
      {
        key: 'a',
        text: 'Bias in the training data set.',
      },
      {
        key: 'b',
        text: 'Reliability of the summarization accuracy.',
      },
      {
        key: 'c',
        text: 'Ownership rights over AI-generated content.',
      },
      {
        key: 'd',
        text: 'Transparency in how the model was trained.',
      },
    ],
    correct: 'c',
    explanation:
      "Improperly licensed training data is fundamentally an IP and usage-rights exposure — it's a question of whether the organization actually owns or has rights to the content the model produces, not a data-quality issue like bias (A), an accuracy concern (B), or a documentation gap about training methodology (D).",
  },
  {
    id: 34,
    domain: 'Process',
    topic: 'AI Deployment Risk Controls',
    prompt:
      'You are leading a project that deploys an AI system to monitor equipment in a manufacturing plant. During testing, the AI occasionally recommends actions that could create unsafe operating conditions. What should you do before approving deployment?',
    options: [
      {
        key: 'a',
        text: 'Validate safety controls and require human oversight.',
      },
      {
        key: 'b',
        text: 'Increase AI training data before deployment.',
      },
      {
        key: 'c',
        text: 'Only allow experienced operators to ignore unsafe recommendations.',
      },
      {
        key: 'd',
        text: 'Reduce the AI confidence threshold to improve responsiveness.',
      },
    ],
    correct: 'a',
    explanation:
      "Occasional unsafe recommendations are a safety risk that must be controlled directly — validating safety controls and requiring human oversight addresses that head-on. More training data doesn't guarantee safety, letting operators selectively ignore unsafe output still lets unsafe recommendations occur, and lowering the confidence threshold would likely surface more, not fewer, questionable recommendations.",
  },
  {
    id: 35,
    domain: 'Process',
    topic: 'Work Breakdown Structure (WBS) Creation',
    prompt:
      'Jonah is managing a product development project at RLM. The team needs to clearly organize all deliverables and decompose the work into manageable components to support planning and execution. What should Jonah do next?',
    options: [
      {
        key: 'a',
        text: 'Organize deliverables into a work breakdown structure.',
      },
      {
        key: 'b',
        text: 'Capture requirements as user stories and refine them iteratively.',
      },
      {
        key: 'c',
        text: 'Prioritize features in a backlog for incremental delivery.',
      },
      {
        key: 'd',
        text: 'Validate the completed deliverables with stakeholders.',
      },
    ],
    correct: 'a',
    explanation:
      'Decomposing deliverables into manageable components to support planning and execution is exactly what a work breakdown structure does. User stories and backlog prioritization (B, C) are adaptive techniques not indicated by this predictive-style decomposition task, and validating completed deliverables (D) is a later monitoring activity, not part of this planning step.',
  },
  {
    id: 36,
    domain: 'Process',
    topic: 'WBS Dictionary',
    prompt:
      'Nate is managing a manufacturing facility upgrade using a predictive approach. Nate has elicited the requirements from project stakeholders and turned them into project scope. Nate wants to add more details to the work packages to ensure clarity and alignment across the team. What will he do next?',
    options: [
      {
        key: 'a',
        text: 'Create a responsibility assignment matrix (RAM) to define roles and responsibilities.',
      },
      {
        key: 'b',
        text: 'Perform quality control and verify the work packages.',
      },
      {
        key: 'c',
        text: 'Develop a clear requirements traceability matrix.',
      },
      {
        key: 'd',
        text: 'Develop a detailed WBS dictionary.',
      },
    ],
    correct: 'd',
    explanation:
      'The WBS dictionary is what adds the missing detail to each work package — deliverables, acceptance criteria, resources, assumptions — for clarity and team alignment. A RAM (A) defines roles, not work package detail; quality control (B) is an execution-phase activity, too early here; and a requirements traceability matrix (C) links requirements to deliverables rather than detailing the work packages themselves.',
  },
  {
    id: 37,
    domain: 'Process',
    topic: 'Validate Scope Inputs (Verified vs Validated Deliverables)',
    prompt:
      'Marcus is overseeing a bridge construction project at BEL. Several completed components have passed internal quality checks. The client is now reviewing these outputs against agreed criteria to determine formal approval. What should Marcus obtain as an input to help the client with their decision?',
    options: [
      {
        key: 'a',
        text: 'Work performance reports summarizing project progress and quality metrics.',
      },
      {
        key: 'b',
        text: 'Validated deliverables.',
      },
      {
        key: 'c',
        text: 'Verified deliverables.',
      },
      {
        key: 'd',
        text: 'Change requests addressing gaps identified during stakeholder review.',
      },
    ],
    correct: 'c',
    explanation:
      "Components that have already passed internal quality checks are verified deliverables — the output of Control Quality, and the correct input to Validate Scope. Validated deliverables (B) are the output of Validate Scope, not an input to it — that's what the client's review is about to produce. Work performance reports (A) summarize status rather than provide the deliverables themselves, and change requests (D) only apply once gaps are actually found.",
  },
  {
    id: 38,
    domain: 'Process',
    topic: 'Control Quality Outputs (Quality Reports)',
    prompt:
      'At Redwood Biologics, Diane is managing a pharmaceutical product development project. During monitoring, inconsistencies in deliverable quality are identified. Stakeholders request additional information on these issues to support improvements. What should Diane produce?',
    options: [
      {
        key: 'a',
        text: 'Work performance data.',
      },
      {
        key: 'b',
        text: 'The scope baseline.',
      },
      {
        key: 'c',
        text: 'Change requests in the change log.',
      },
      {
        key: 'd',
        text: 'The quality report.',
      },
    ],
    correct: 'd',
    explanation:
      "The quality report is the Control Quality output built specifically to communicate quality issues, summarize findings, and recommend corrective actions to stakeholders — exactly what's being asked for. Work performance data (A) is raw, unprocessed observation rather than the digested information stakeholders requested; the scope baseline (B) is unrelated; and change requests (C) address specific approved changes, not a general summary of the issues.",
  },
  {
    id: 39,
    domain: 'Process',
    topic: 'Hybrid Alignment',
    prompt:
      "During a hybrid construction project, fixed infrastructure milestones are set, but the software application layer uses adaptive development cycles. During execution, a senior stakeholder expresses concerns that the completed software modules do not align with the organization's evolving operational needs. What should the project manager do first?",
    options: [
      {
        key: 'a',
        text: 'Submit a formal change request immediately to modify the software scope.',
      },
      {
        key: 'b',
        text: 'Facilitate an open dialogue with the stakeholder to clarify specific concerns and validate alignment.',
      },
      {
        key: 'c',
        text: 'Instruct the Product Owner to revise and reprioritize the product backlog.',
      },
      {
        key: 'd',
        text: 'Pause all development cycles to prevent further misalignment and protect funding.',
      },
    ],
    correct: 'b',
    explanation:
      'In hybrid environments, you must assess and collaborate before acting or escalating. Option B establishes communication to evaluate whether a true misalignment exists or if it is simply a perception gap. Options A and C jump straight to solutions without full analysis, and Option D is an overreaction that negatively impacts schedule and morale.',
  },
  {
    id: 40,
    domain: 'Process',
    topic: 'Earned Value & Risk',
    prompt:
      "While reviewing performance metrics, the project manager notices that the project's Cost Performance Index (CPI) is 0.82 and the Schedule Performance Index (SPI) is 1.15. How should the project manager interpret and report these results to the steering committee?",
    options: [
      {
        key: 'a',
        text: 'The project is under budget and behind schedule.',
      },
      {
        key: 'b',
        text: 'The project is over budget and ahead of schedule.',
      },
      {
        key: 'c',
        text: 'The project is under budget and ahead of schedule.',
      },
      {
        key: 'd',
        text: 'The project is over budget and behind schedule.',
      },
    ],
    correct: 'b',
    explanation:
      'A CPI of less than 1.0 indicates over-budget. An SPI greater than 1.0 means ahead of schedule.',
  },
  {
    id: 41,
    domain: 'Process',
    topic: 'Regulatory Compliance & Scope',
    prompt:
      'A Scrum team is delivering a 240 MW solar photovoltaic plant in two-week sprints, and inverter installation work packages are currently being pulled from the product backlog. During sprint planning, the project manager learns that the national grid operator has published an updated interconnection standard requiring third-party firmware certification for every inverter before the plant can be energized. The regulation applies to units the team has already installed and to those planned for the next three sprints. What should the project manager do next?',
    options: [
      {
        key: 'a',
        text: 'Halt inverter installation and re-baseline the release plan until the legal department completes a full compliance audit of the inverter design documentation.',
      },
      {
        key: 'b',
        text: 'Ask the sponsor to request a formal waiver from the grid operator so the installation iterations can proceed without change.',
      },
      {
        key: 'c',
        text: 'Collaborate with the product owner to add the firmware certification requirement to the product backlog and prioritize it for an upcoming sprint.',
      },
      {
        key: 'd',
        text: "Defer the new interconnection standard to the commissioning phase, since certification sits outside the team's control.",
      },
    ],
    correct: 'c',
    explanation:
      'In an agile/Scrum context, when a new mandatory requirement lands mid-delivery, the PM and PO add it to the backlog and prioritize it for the next sprint(s).',
  },
  {
    id: 42,
    domain: 'Process',
    topic: 'Hybrid Scheduling',
    prompt:
      'A project manager leads a hospital records modernization program. The data center migration is planned predictively with a WBS, a baselined milestone schedule, and a fixed regulatory cutover date, while the clinician-facing portal is built by a team working in two-week iterations from an evolving, prioritized backlog. The steering committee wants one integrated schedule showing how portal readiness affects the cutover milestone, and the portal team objects that detailed long-range task planning will invalidate backlog refinement. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Decompose the full portal backlog into fixed-duration work packages now and baseline them so the committee receives one detailed predictive schedule.',
      },
      {
        key: 'b',
        text: 'Shift the migration work packages into two-week iterations matching the portal cadence so both components share one backlog and velocity-based forecast.',
      },
      {
        key: 'c',
        text: 'Keep separate schedules for each component and report portal progress with burndown charts, resolving the cutover dependency later during integrated system testing once both teams stabilize their own plans.',
      },
      {
        key: 'd',
        text: 'Model the portal work in the master schedule as rolling-wave summary blocks tied to release milestones, elaborating just the next two iterations and preserving the cutover dependency.',
      },
    ],
    correct: 'd',
    explanation:
      "Rolling-wave summary blocks let the committee see the integration risk while protecting the portal team's backlog refinement autonomy.",
  },
  {
    id: 43,
    domain: 'Process',
    topic: 'Definition of Done',
    prompt:
      'A Scrum team is rolling out 5G small cells across a dense urban borough, delivering roughly eight sites per two-week sprint. Stories are marked complete once the radio unit is mounted and powered, but the RF signal verification test is performed weeks later by a separate field crew. In the last review, the product owner reported that six previously accepted sites failed verification and required crews to return to the poles. What is the most appropriate action for the team to take?',
    options: [
      {
        key: 'a',
        text: "Expand the team's definition of done so each small cell site passes RF signal verification before the story is accepted as complete.",
      },
      {
        key: 'b',
        text: 'Add a separate quality control iteration at the end of the release so the installed small cell sites can be inspected in one pass.',
      },
      {
        key: 'c',
        text: 'Record each failing site as a defect story and batch the rework into a dedicated hardening sprint after the rollout finishes.',
      },
      {
        key: 'd',
        text: 'Increase the sampling rate used by the field verification crew so that fewer defective sites reach the network operations acceptance review at closeout.',
      },
    ],
    correct: 'a',
    explanation:
      'Quality must be built in, not inspected later. Expanding DoD to include RF verification prevents rework.',
  },
  {
    id: 44,
    domain: 'Process',
    topic: 'Quality Measurement',
    prompt:
      'A quality analyst is investigating why a completed inspection report shows all measurements passing individual limits, yet customer complaints about fit continue to rise. The analyst suspects the sampling frequency may be masking short-term shifts during production runs. Which measurement approach would help reveal these hidden shifts across the run?',
    options: [
      {
        key: 'a',
        text: 'Rely on a single end-of-run capability study to confirm the process still meets the customer requirements.',
      },
      {
        key: 'b',
        text: 'Replace variable measurements with attribute pass/fail counts to simplify the ongoing inspection reporting effort.',
      },
      {
        key: 'c',
        text: 'Increase subgroup sampling frequency and plot X-bar and R charts to expose within-run variation over time.',
      },
      {
        key: 'd',
        text: 'Widen the specification limits so that borderline measurements are recorded as conforming during each run.',
      },
    ],
    correct: 'c',
    explanation:
      'X-bar and R charts with higher sampling frequency reveal within-run process shifts and trends that infrequent sampling masks.',
  },
  {
    id: 45,
    domain: 'Process',
    topic: 'Resource Management',
    prompt:
      "A project manager assigns a specialist to a task modeled with a back-loaded resource contour, but the team member reports feeling underused early and overwhelmed near the task's end. The manager wants effort spread evenly across the task duration to stabilize daily workload. Which resource contour should be applied to this assignment?",
    options: [
      {
        key: 'a',
        text: "A bell-shaped contour that peaks the specialist's effort at the midpoint of the task period.",
      },
      {
        key: 'b',
        text: "A front-loaded contour that concentrates the specialist's heaviest effort during the opening days.",
      },
      {
        key: 'c',
        text: "A flat contour that keeps the specialist's daily effort constant across the whole task.",
      },
      {
        key: 'd',
        text: 'A trapezoidal contour that ramps effort up and then holds it steady before tapering near the finish.',
      },
    ],
    correct: 'c',
    explanation:
      'A flat contour keeps daily effort constant, avoiding the early underutilization and late overwhelm.',
  },
  {
    id: 46,
    domain: 'Process',
    topic: 'Agile Risk Management',
    prompt:
      "A Scrum team at an electric utility is delivering distribution automation software in two-week sprints to control feeder reclosers on a rural circuit. During the daily standup, a developer mentions that the new controller firmware planned for the next iteration may need regional reliability coordinator certification, which historically takes several weeks and could delay field cutover. The item is not reflected anywhere in the team's artifacts. Acting as a servant leader, how should the Scrum Master handle this newly identified risk?",
    options: [
      {
        key: 'a',
        text: "Hold the current sprint's remaining work until the regulator confirms that the relay testing window is open.",
      },
      {
        key: 'b',
        text: "Escalate the risk directly to the utility's program steering committee so that executives can decide on the response for the team.",
      },
      {
        key: 'c',
        text: 'Note the risk in the sprint retrospective notes and revisit it after the increment is demonstrated at the upcoming sprint review meeting.',
      },
      {
        key: 'd',
        text: 'Record the risk so it is visible to the team, then work with the product owner to prioritize a response item in the backlog.',
      },
    ],
    correct: 'd',
    explanation:
      'A servant-leader Scrum Master captures emerging risks, makes them visible, and facilitates team/PO collaboration to build response into the backlog.',
  },
  {
    id: 47,
    domain: 'Process',
    topic: 'Critical Chain & Resource Constraints',
    prompt:
      'A team runs two CCM projects that share one specialist. Leadership reviews a dashboard where Project A shows its project buffer at 45% consumed with 30% of the critical chain complete, while Project B shows its buffer at 20% consumed with 55% complete. Both request the specialist next week. Which project should receive the specialist first?',
    options: [
      {
        key: 'a',
        text: 'Project B, because its higher completion percentage means finishing it will free the shared specialist sooner.',
      },
      {
        key: 'b',
        text: 'Project A, because the project with fewer completed critical chain tasks always holds priority for scarce resources.',
      },
      {
        key: 'c',
        text: 'Project B, since its lower buffer consumption rate confirms it is the constrained project needing protection first.',
      },
      {
        key: 'd',
        text: 'Project A, since its buffer consumption is outpacing its progress and signals higher schedule risk.',
      },
    ],
    correct: 'd',
    explanation:
      'In CCM, buffer consumption ratio signals urgency. Project A: 45% buffer for only 30% progress = 1.5x rate (unhealthy). Prioritize the at-risk project.',
  },
  {
    id: 48,
    domain: 'Process',
    topic: 'Communications Management Plan Review',
    prompt:
      'Your project team is distributed across different countries, and communication issues are causing misunderstandings. What should you do FIRST?',
    options: [
      {
        key: 'a',
        text: 'Replace the remote team with local members',
      },
      {
        key: 'b',
        text: 'Conduct a team-building workshop to improve trust',
      },
      {
        key: 'c',
        text: 'Review and update the communications management plan',
      },
      {
        key: 'd',
        text: 'Escalate the issue to HR',
      },
    ],
    correct: 'c',
    explanation:
      'Recurring misunderstandings across a distributed team point to a gap in how communication is planned — reviewing and updating the communications management plan addresses the root cause. Replacing team members is drastic and does not fix the communication approach itself, a team-building workshop may help morale but does not directly fix the planning gap, and escalating to HR is not the right channel for a communications-process issue.',
  },
  {
    id: 49,
    domain: 'Process',
    topic: 'Communication Channels Formula',
    prompt:
      'A project currently has 8 stakeholders. Following an expansion, 4 additional stakeholders join. How many additional communication channels are created?',
    options: [
      {
        key: 'a',
        text: 'Channels rise from 28 to 55, adding 27 new channels',
      },
      {
        key: 'b',
        text: 'Channels rise from 28 to 66, adding 38 new channels',
      },
      {
        key: 'c',
        text: 'Channels rise from 36 to 66, adding 30 new channels',
      },
      {
        key: 'd',
        text: 'Channels rise from 28 to 78, adding 50 new channels',
      },
    ],
    correct: 'b',
    explanation:
      'Using n(n-1)/2: with 8 stakeholders, channels = 8x7/2 = 28. After adding 4 more (12 total), channels = 12x11/2 = 66. The increase is 66 - 28 = 38 new channels.',
  },
  {
    id: 50,
    domain: 'Process',
    topic: 'Interactive Communication for Sensitive Issues',
    prompt:
      'A complex, sensitive misunderstanding has arisen between two team leads, and the PM must confirm both fully understand the resolution. Which communication method is MOST appropriate?',
    options: [
      {
        key: 'a',
        text: 'Interactive communication, such as a facilitated live meeting',
      },
      {
        key: 'b',
        text: 'Push communication, such as a detailed email summary sent out',
      },
      {
        key: 'c',
        text: 'Pull communication, such as a posted knowledge-base article',
      },
      {
        key: 'd',
        text: 'Formal written communication, such as a signed record memo',
      },
    ],
    correct: 'a',
    explanation:
      'Interactive communication is the only method that lets the PM confirm in real time that both parties actually understand the resolution, since it allows for immediate two-way exchange and clarification. Push and pull communication are one-directional and cannot confirm mutual understanding, and a formal written memo documents an outcome but does not itself verify comprehension the way a live, facilitated conversation does.',
  },
  {
    id: 51,
    domain: 'Process',
    topic: 'External Communication',
    prompt:
      'A project manager corresponds with government regulators outside the organisation regarding compliance obligations. This is BEST classified as which type of communication?',
    options: [
      {
        key: 'a',
        text: 'Internal communication within the performing organisation',
      },
      {
        key: 'b',
        text: 'External communication with parties outside the organisation',
      },
      {
        key: 'c',
        text: 'Vertical communication flowing upward through governance levels',
      },
      {
        key: 'd',
        text: 'Formal communication documented for regulatory audit purposes',
      },
    ],
    correct: 'b',
    explanation:
      'Government regulators sit outside the performing organization, so this correspondence is external communication by definition. It is not internal (the regulator is not part of the organization), not vertical (that describes communication flowing up or down within an organizational hierarchy), and while it may also happen to be documented formally, the defining characteristic being tested here is that the audience is external.',
  },
]
