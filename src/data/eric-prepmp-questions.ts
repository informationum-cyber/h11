import type { PMPQuestion } from './pmp-quiz-types'

export const ericPrePmpQuestions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'Process',
    topic: 'Resource Leveling',
    prompt:
      'During project execution, a project manager is informed that some resources will soon be removed from the project. What should the project manager do to address this situation?',
    options: [
      { key: 'a', text: 'Schedule a meeting to keep the stakeholders informed.' },
      { key: 'b', text: 'Inform the stakeholders at the next scheduled review meeting.' },
      { key: 'c', text: 'Update the risk register with this risk to project resources.' },
      { key: 'd', text: 'Request resource leveling.' },
    ],
    correct: 'd',
    explanation:
      'Resource leveling adjusts the project schedule so resources are available when needed and utilization is optimized — when resources are removed, it helps identify alternatives or adjust the schedule to minimize impact and keep the project on track. Scheduling a meeting or waiting for the next review may delay action, and updating the risk register may be premature without more information and does not directly address resource availability.',
  },
  {
    id: 2,
    domain: 'Process',
    topic: 'Stakeholder Identification via Project Charter',
    prompt:
      'During the planning phase of a project, the project manager is having trouble identifying stakeholders. Without input from the correct stakeholders, getting user feedback will be challenging. What should the project manager do?',
    options: [
      { key: 'a', text: 'Review the stakeholder engagement plan.' },
      { key: 'b', text: 'Inform the project sponsors.' },
      { key: 'c', text: 'Refer to the project charter to identify stakeholders.' },
      { key: 'd', text: 'Review the project scope document.' },
    ],
    correct: 'c',
    explanation:
      "The project charter typically includes the project's purpose, objectives, and stakeholders, making it the most direct and effective way to identify stakeholders during planning. The stakeholder engagement plan isn't created until stakeholders are already identified, informing sponsors alone isn't comprehensive, and the scope document isn't typically used to identify stakeholders.",
  },
  {
    id: 3,
    domain: 'Process',
    topic: 'Agile Late-Stage Scope Change',
    prompt:
      'A project team is in sprint 13 of a fourteen-sprint project. The project team placed a game-changing feature on the backlog for the next release. The product owner is informed that a competitor is launching a new product with a feature that closely resembles the feature placed on the backlog. The product owner is demanding this game-changing feature be incorporated in the current release. What should the project manager do?',
    options: [
      { key: 'a', text: 'Organize a review meeting with the development team to get an understanding of the extent of work required.' },
      { key: 'b', text: 'Meet with the product owner and relevant stakeholders to discuss the change and analyze the impact.' },
      { key: 'c', text: 'Perform the required assessments and raise a change request with the Change Control Board (CCB).' },
      { key: 'd', text: 'Inform the product owner that this game-changing feature will be added to the next release of the product.' },
    ],
    correct: 'b',
    explanation:
      "The product owner is demanding a significant late-project change with real scope, schedule, and resource impact. The PM should meet with the product owner and relevant stakeholders to discuss the change, analyze impact, and decide collaboratively — the heart of agile methodology. A dev-team-only review skips the key decision-makers, agile projects don't typically use a formal CCB, and refusing outright skips the impact analysis agile embraces for late changes that maximize customer value.",
  },
  {
    id: 4,
    domain: 'Process',
    topic: 'Risk Response Funding via Change Control',
    prompt:
      'During a progress meeting, the project team learns that an identified risk materialized. The project manager decides to execute the risk response plan, but the contingency reserve does not cover the total budget for that plan. What should the project manager do?',
    options: [
      { key: 'a', text: 'Ask the project sponsor to apply the management reserve to cover the remaining cost of the response.' },
      { key: 'b', text: 'Ask the project sponsor to provide an additional budget to compensate for the cost overage.' },
      { key: 'c', text: 'Issue a change request to modify the scope, cost, and schedule baselines to support the new plan.' },
      { key: 'd', text: 'Use the contingency reserve and assess options to reduce the budget to cover the remaining work.' },
    ],
    correct: 'c',
    explanation:
      'Executing a risk response plan requires a change to the current project management plan — issuing a change request is the appropriate way to request the necessary budget, reschedule, and incorporate the new activities into scope. Management reserve is reserved for unidentified risks, not ones already identified; asking the sponsor directly for budget would still require a change request; and unilaterally cutting scope to fit the reserve is not the correct path.',
  },
  {
    id: 5,
    domain: 'People',
    topic: 'Retrospective Facilitation',
    prompt:
      'A dispersed project team just finished a sprint with complex tasks ahead of schedule. During the retrospective, a new member of the team interrupts and asks everyone to explain their roles and what they are planning on working on for the next sprint. What should the project manager do?',
    options: [
      { key: 'a', text: 'Address the situation immediately and answer the new team member directly.' },
      { key: 'b', text: 'Inform the team members that this would be best handled in another meeting.' },
      { key: 'c', text: 'Ask each team member to explain their role and what they will work on for the next sprint.' },
      { key: 'd', text: 'Set up one-on-one meetings with each team member and the new team member.' },
    ],
    correct: 'b',
    explanation:
      "The PM should politely redirect the new member — a retrospective isn't the time to cover other members' roles, and protecting the meeting's focus keeps it effective. Addressing it immediately or going around the room derails the retrospective into an off-topic conversation, and setting up individual one-on-ones is time-consuming and inefficient compared to a quick redirect to a better-suited time.",
  },
  {
    id: 6,
    domain: 'People',
    topic: 'SME Knowledge Transfer',
    prompt:
      'During project execution, the project sponsor decides to replace a subject matter expert (SME) on the project. What should the project manager do?',
    options: [
      { key: 'a', text: 'Negotiate with the project sponsor to retain the SME on the project.' },
      { key: 'b', text: 'Ensure there is sufficient knowledge transfer between the SME and their replacement.' },
      { key: 'c', text: 'Indicate to the new SME that the project knowledge base has all needed information.' },
      { key: 'd', text: 'Meet with the project sponsor to explain the conflicts among the project team.' },
    ],
    correct: 'b',
    explanation:
      "Whenever an SME changes, the PM should ensure sufficient knowledge transfer between the outgoing and incoming SME. Relying only on a knowledge base may not capture everything, and regardless of why the sponsor made the swap, the PM's job is to protect continuity through a proper handover, not renegotiate the decision or raise unrelated team conflicts.",
  },
  {
    id: 7,
    domain: 'Process',
    topic: 'Communications Management Plan Maintenance',
    prompt:
      'After emailing a recent project status report, the project manager learns that a number of recipients are no longer involved with the project. The project manager needs to verify the distribution list for future status reports. What should the project manager do?',
    options: [
      { key: 'a', text: 'Review and update the communications management plan.' },
      { key: 'b', text: 'Review and update the schedule management plan.' },
      { key: 'c', text: 'Review and update the responsibility assignment matrix.' },
      { key: 'd', text: 'Review and update the resource management plan.' },
    ],
    correct: 'a',
    explanation:
      "The communications management plan is the document that identifies who should receive project status reports, so it's the first one to review and update to fix the distribution list. The schedule management plan, responsibility assignment matrix, and resource management plan don't define who receives status reports.",
  },
  {
    id: 8,
    domain: 'Process',
    topic: 'Tailoring Communication for Distributed Teams',
    prompt:
      'An adaptive project team is globally distributed and the team members speak different primary languages. Daily meetings are conducted virtually in a common language. The project manager is made aware that there are some communication issues. Differences in pronunciation, accent, and vocabulary make it extremely difficult for some members to understand each other. What should the project manager tailor to improve the daily meeting and avoid misunderstanding?',
    options: [
      { key: 'a', text: 'Use the call to verbally summarize the work status as reported by the team members.' },
      { key: 'b', text: 'Use an electronic task board to give a visual representation of work status and progress.' },
      { key: 'c', text: "Ask for a change in the project's budget to provide access to a translation service." },
      { key: 'd', text: 'Ask all team members to report on work completed, upcoming work, and blockers.' },
    ],
    correct: 'b',
    explanation:
      'A visual electronic task board helps the team absorb and make sense of status information despite language and accent differences, promoting clear communication independent of spoken word. Verbally summarizing status or having everyone report verbally does not address the comprehension issue itself, and a translation service may not be feasible and can introduce further distortion and delay.',
  },
  {
    id: 9,
    domain: 'Process',
    topic: 'Stakeholder Analysis',
    prompt:
      'An experienced project manager is mentoring a new project manager assigned to their first project. As the new project manager prepares for the project, they are overwhelmed by the number of stakeholders identified by the team. What should the experienced project manager tell the new project manager to do next?',
    options: [
      { key: 'a', text: 'Perform a stakeholder analysis to determine the relative importance.' },
      { key: 'b', text: 'Categorize key stakeholders using a workbook register.' },
      { key: 'c', text: 'Update the communications management plan with stakeholder preferences.' },
      { key: 'd', text: 'Prioritize stakeholders based on the stakeholder register.' },
    ],
    correct: 'a',
    explanation:
      "Once stakeholders are identified, the team should analyze them — systematically gathering and analyzing quantitative and qualitative information to determine whose interests should be accounted for. Categorizing stakeholders, updating the communications plan, and prioritizing from the register all rely on the insight a stakeholder analysis produces, so they should follow it, not substitute for it.",
  },
  {
    id: 10,
    domain: 'People',
    topic: 'Resolving a Skills Gap Mid-Sprint',
    prompt:
      'During a standup meeting, the project manager discovers that one of the software developers is struggling to complete work because they lack experience with automation testing, potentially affecting the sprint goal. A quality assurance engineer on the team has automation testing experience but is busy preparing a presentation for new employees. What action would increase the chances of achieving the sprint goal?',
    options: [
      { key: 'a', text: 'Reassign the automation work to the engineer as soon as the presentation is finished.' },
      { key: 'b', text: 'Immediately train the software developer on automation testing and then proceed with testing.' },
      { key: 'c', text: 'Ask the quality assurance engineer to assist the software developer as soon as possible.' },
      { key: 'd', text: 'Reschedule the automation testing for when the quality assurance engineer is available.' },
    ],
    correct: 'c',
    explanation:
      "Pairing the developer with the QA engineer as soon as possible leverages existing expertise for efficient problem-solving and task completion, protecting the sprint goal. Reassigning the work or rescheduling it introduces delay and may cause resentment, and training the developer from scratch takes time and doesn't guarantee immediate proficiency on a complex skill under sprint pressure.",
  },
  {
    id: 11,
    domain: 'Process',
    topic: 'Agile Quality Assessment Techniques',
    prompt:
      'A developer has completed the deliverable for a feature. The product owner is not sure how to assess the quality of the deliverable. Considering that the project is using an agile approach, what kind of tool or technique should the product owner use?',
    options: [
      { key: 'a', text: 'Expert judgment' },
      { key: 'b', text: 'Decision making' },
      { key: 'c', text: 'Demonstrations/reviews' },
      { key: 'd', text: 'Checklists' },
    ],
    correct: 'c',
    explanation:
      "Demos or reviews are part of every agile sprint, giving the product owner or customer visibility into progress and feedback that lets the team adjust early. Expert judgment, decision making, and checklists are techniques more associated with predictive approaches and don't fit this agile context as well.",
  },
  {
    id: 12,
    domain: 'Process',
    topic: 'Risk Register Response Execution',
    prompt:
      "Some of the project's materials have been ordered from overseas. The supplier notifies the project team that the materials will not reach the site on time due to a customs clearance delay that will affect the critical path. What should the project manager do first?",
    options: [
      { key: 'a', text: 'Ask the logistics team to arrange an expedited clearance.' },
      { key: 'b', text: 'Revisit the risk register and implement the respective risk response.' },
      { key: 'c', text: 'Identify the root cause of the delay and add it to the bid documents.' },
      { key: 'd', text: 'Ensure the suppliers cover any additional costs due to the delay.' },
    ],
    correct: 'b',
    explanation:
      "The PM should first revisit the risk register, since this kind of delay was very likely identified and planned for at the start of the project — the register holds the planned response to execute. Expediting clearance may not even be possible since customs is controlled by regional/governmental bodies; the root cause is already known here, and bid documents are for soliciting new suppliers, not an already-chosen one; and cost-sharing terms are typically fixed by the existing contract, not decided reactively.",
  },
  {
    id: 13,
    domain: 'Business Environment',
    topic: 'Regulatory Risk Re-Rating',
    prompt:
      'A project manager has just received news that a new regulation has been adopted and the expectation is that the project will be delivered compliant with this new regulation. This was previously documented as a risk item with a low probability and a moderate impact. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Revisit the risk register and update the rating and response.' },
      { key: 'b', text: 'Update the issue log and apply corrective action.' },
      { key: 'c', text: 'Revise the project management plan.' },
      { key: 'd', text: 'Initiate a change request for the updated regulation.' },
    ],
    correct: 'a',
    explanation:
      "The risk's probability just became 100% now that the regulation is adopted, and its impact may have changed too — the risk register needs to be updated first to reflect that before anything else. Updating the issue log, revising the project management plan, or initiating a change request may all become necessary, but only after the risk register assessment clarifies the actual impact on the project.",
  },
  {
    id: 14,
    domain: 'People',
    topic: 'Team Conflict Root-Cause Investigation',
    prompt:
      'During a retrospective meeting, some team members expressed that they strongly disagree with how the product owner and scrum master handled some issues related to the scope of the last cycle. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Review the backlog with the product owner to ensure the scope is appropriate.' },
      { key: 'b', text: 'Collect all available information from the team and address the problem.' },
      { key: 'c', text: 'Schedule a meeting with the specific team members to discuss the issue.' },
      { key: 'd', text: "Discuss the team's concerns with the product owner and the scrum master." },
    ],
    correct: 'b',
    explanation:
      "Once a conflict surfaces, the PM should first collect all available information from the team to understand the root cause before developing a resolution approach. Reviewing the backlog, scheduling a separate meeting with select members, or going straight to the product owner and scrum master all skip gathering the full picture first, and risk making people involved in the conflict feel excluded from a fair, open process.",
  },
  {
    id: 15,
    domain: 'People',
    topic: 'Proactive Sponsor Communication',
    prompt:
      'Although a project is performing within its time, scope, and budget constraints, the project manager learns that the project sponsor is unhappy with its progress. What should the project manager have done to avoid this situation?',
    options: [
      { key: 'a', text: 'Conducted frequent reviews and assessments to identify and address any potential risks.' },
      { key: 'b', text: 'Aligned project objectives with the expectations and requirements of the project sponsor.' },
      { key: 'c', text: 'Communicated regularly with the project sponsor to provide updates and address any concerns.' },
      { key: 'd', text: 'Implemented strict control measures to ensure that project milestones and deliverables are met.' },
    ],
    correct: 'c',
    explanation:
      "Since the project is objectively on track, the sponsor's dissatisfaction signals a communication gap, not a delivery gap — regular communication is what surfaces and addresses a sponsor's concerns before they build up. Frequent risk reviews and strict milestone control don't address the actual disconnect here, and aligning objectives with sponsor expectations only works if ongoing communication makes that alignment possible in the first place.",
  },
  {
    id: 16,
    domain: 'Business Environment',
    topic: 'Escalating an Unresolvable Authority Gap',
    prompt:
      "A project manager is delivering a complex project for a client who has their own project manager. The client's project manager is the sole decision maker for the project but is not the delegated financial authority. For every financial decision, the client's project manager must seek approval from a higher authority. This additional step has caused significant impacts on resource management, cost, and time of project delivery. How can the project manager resolve this problem?",
    options: [
      { key: 'a', text: 'Raise this problem in the quarterly project status report.' },
      { key: 'b', text: 'Add the problem to the lessons learned report.' },
      { key: 'c', text: 'Escalate the problem to the project steering committee.' },
      { key: 'd', text: "Discuss the problem with the client's project manager." },
    ],
    correct: 'c',
    explanation:
      "An authority gap like this is outside what the project team can resolve on its own, so it should go to the steering committee — the body positioned to resolve governance and authority issues. Waiting for the quarterly report is too slow given the significant ongoing impact, logging it in lessons learned doesn't proactively fix anything, and the client's project manager is already the one constrained by the gap, so raising it with them again doesn't remove the blocker.",
  },
  {
    id: 17,
    domain: 'People',
    topic: 'Team Norms for After-Hours Conduct',
    prompt:
      'The execution of a construction project in a remote area requires team members to live together in corporate dormitories when they are required to be on-site. Several team members approach the project manager to complain about the way one team member behaves after work. They have expressed concerns that the behavior is negatively impacting team morale and cohesion. What should the project manager do to address this issue?',
    options: [
      { key: 'a', text: 'Call a meeting to discuss the problem with the team.' },
      { key: 'b', text: 'Plan a team-building session to discuss the problem.' },
      { key: 'c', text: 'Move the team member in question to a new dormitory.' },
      { key: 'd', text: 'Review the team norms and discuss this with the team.' },
    ],
    correct: 'd',
    explanation:
      'Team norms are the behavioral parameters the team itself committed to, and even after-hours behavior can affect the project when members live together — reviewing and discussing norms with the whole team sets clear expectations proactively. Calling a meeting to discuss the complaint directly is reactive rather than norm-setting, a team-building session addresses it only indirectly, and moving the team member sidesteps the actual behavior issue.',
  },
  {
    id: 18,
    domain: 'People',
    topic: 'Escalating an Unresponsive Functional Manager',
    prompt:
      'A project manager is experiencing issues with the functional manager of a project team member. The functional manager has given the team member another assignment and has told the team member that the previous project should be a lower priority. What should the project manager do?',
    options: [
      { key: 'a', text: 'Escalate the issue to senior management.' },
      { key: 'b', text: 'Communicate the importance of the project to the team.' },
      { key: 'c', text: 'Refer the functional manager to the project charter.' },
      { key: 'd', text: 'Request additional resources for your project.' },
    ],
    correct: 'a',
    explanation:
      "Escalating to senior management is the most direct and effective way to resolve a priority conflict imposed by a functional manager, ensuring the team member has the time and resources needed. Communicating importance to the team doesn't reach the functional manager, referring them to the charter is unlikely to change their behavior, and requesting more resources doesn't address the underlying priority conflict.",
  },
  {
    id: 19,
    domain: 'Process',
    topic: 'Logging Emerging Cross-Location Conflict',
    prompt:
      'A new project has a team divided between onsite and offshore locations. The project manager observed a rising conflict between the two parts of the team during project initiation. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Communicate the project scope to all team members.' },
      { key: 'b', text: 'Organize a face-to-face meeting during project kick-off.' },
      { key: 'c', text: 'Identify this conflict in the risk register log.' },
      { key: 'd', text: 'Record this conflict in the project issue log.' },
    ],
    correct: 'c',
    explanation:
      'A rising conflict that has not yet caused a concrete problem is still a risk — logging it in the risk register lets the PM track it and develop mitigation strategies before it escalates. Communicating scope or holding a kickoff meeting may help generally but do not directly track or address this specific conflict, and the issue log is for problems that have already materialized, not emerging risks.',
  },
  {
    id: 20,
    domain: 'Process',
    topic: 'Reviewing the Stakeholder Engagement Plan',
    prompt:
      'A project manager is concerned about delivering the planned business value because the product owner is not engaged. What should the project manager do to address the concern?',
    options: [
      { key: 'a', text: 'Review and update the communications management plan.' },
      { key: 'b', text: 'Review and update the stakeholder engagement plan.' },
      { key: 'c', text: 'Review and update the resource management plan.' },
      { key: 'd', text: 'Review and update the risk management plan.' },
    ],
    correct: 'b',
    explanation:
      'A disengaged product owner is a stakeholder-engagement problem, and the stakeholder engagement plan is where the PM assesses whether the current engagement strategy is effective or needs adjusting to find the root cause. The communications, resource, and risk management plans are not built to address the effectiveness of stakeholder engagement.',
  },
  {
    id: 21,
    domain: 'Business Environment',
    topic: 'Following the Bidding Procedure',
    prompt:
      'In order to reduce procurement time during a bidding process, a project manager decided to contract the additional work to a current contractor. The other bidders are complaining about this decision because they think that the process lacked transparency and fairness. What should the project manager have done to prevent this?',
    options: [
      { key: 'a', text: 'Invited all potential bidders to a meeting.' },
      { key: 'b', text: 'Awarded the contract without negotiation.' },
      { key: 'c', text: "Followed the company's bidding procedure." },
      { key: 'd', text: 'Shared the project objectives with all bidders.' },
    ],
    correct: 'c',
    explanation:
      "Following the company's established bidding procedure is what guarantees a fair, consistent process with equal opportunity for all bidders. Inviting bidders to a meeting or sharing objectives could be part of the process, but neither alone addresses the fairness/transparency complaint, and awarding without negotiation may itself deviate from the proper procedure.",
  },
  {
    id: 22,
    domain: 'Process',
    topic: 'Closing Out Contingency Reserve',
    prompt:
      "After the transition and completion of a large equipment installation project, the project manager receives a request from the customer to add some operational cost to the project budget for team-building activities. The project was completed under budget, project contingency reserves were not spent, and the team-building activities will ensure the operational team's optimal performance. What should the project manager do?",
    options: [
      { key: 'a', text: 'Reject the request and close the project financials.' },
      { key: 'b', text: 'Perform the integrated change control process.' },
      { key: 'c', text: 'Approve the expenditure to ensure customer satisfaction.' },
      { key: 'd', text: 'Document the request in the lessons learned repository.' },
    ],
    correct: 'a',
    explanation:
      "The project has already been completed and transitioned to the customer, so the request should be declined — contingency reserves aren't for operational items unrelated to the project's own success, and financials should be closed and the budget released. Change control no longer applies to a project that's already closed, approving it undermines proper cost control, and simply logging it doesn't resolve the actual request.",
  },
  {
    id: 23,
    domain: 'Process',
    topic: 'Risk-Adjusted Backlog Prioritization',
    prompt:
      'The tables show the requirements for an agile project with the anticipated return on investment (ROI) and identified project risks, along with the analysis details. Requirements (priority 1 each): Requirement 1 = $10,000 ROI, Requirement 2 = $8,000 ROI, Requirement 3 = $25,000 ROI. Risks: Risk 1 = $5,000 impact / 75% probability, Risk 2 = $4,000 impact / 50% probability, Risk 3 = $20,000 impact / 45% probability. What should the priority order be in the risk-adjusted product backlog?',
    options: [
      { key: 'a', text: 'Requirement 3, Requirement 1, Requirement 2, Risk 3' },
      { key: 'b', text: 'Risk 3, Risk 1, Risk 2, Requirement 3, Requirement 1, Requirement 2' },
      { key: 'c', text: 'Requirement 3, Risk 3, Requirement 1, Requirement 2, Risk 2' },
      { key: 'd', text: 'Requirement 3, Requirement 1, Risk 3, Requirement 2, Risk 1, Risk 2' },
    ],
    correct: 'd',
    explanation:
      'Ranking requirements by ROI gives Requirement 3 ($25,000) > Requirement 1 ($10,000) > Requirement 2 ($8,000). Ranking risks by expected monetary value (probability x impact) gives Risk 3 ($20,000 x 45% = $9,000) > Risk 1 ($5,000 x 75% = $3,750) > Risk 2 ($4,000 x 50% = $2,000). Interleaving the two rankings by relative value produces Requirement 3, Requirement 1, Risk 3, Requirement 2, Risk 1, Risk 2.',
  },
  {
    id: 24,
    domain: 'Process',
    topic: 'Training as a Project Deliverable',
    prompt:
      'A project manager is preparing for an organization-wide software system replacement project that will have a significant impact on business operations. It is crucial to provide training to ensure that everyone within the organization can effectively use the new software system, but training resources are limited. What is the most effective action the project manager should take to ensure successful training for all organization members?',
    options: [
      { key: 'a', text: 'Incorporate a detailed training and coaching component as a project deliverable.' },
      { key: 'b', text: 'Determine the specific needs and requirements of different user functions.' },
      { key: 'c', text: 'Recruit additional trainers to ensure adequate training coverage throughout the organization.' },
      { key: 'd', text: 'Prioritize training efforts by identifying which features are most essential.' },
    ],
    correct: 'a',
    explanation:
      "Making training and coaching a formal project deliverable ensures it's treated as an integral, well-resourced part of the plan rather than an afterthought — the system itself is only the output, but training and coaching enable the productivity outcome the project is actually meant to achieve. Determining user needs, recruiting more trainers, or prioritizing by feature are all useful sub-steps, but none of them alone ensures training gets delivered effectively.",
  },
  {
    id: 25,
    domain: 'Process',
    topic: 'Choosing an Approach for Unclear Requirements',
    prompt:
      'A project manager is beginning a new financial software project in a very competitive environment. The regulations for compliance are clear, but the requirements are not clear. The customer stresses that they need results as soon as possible. Which implementation approach should the project manager choose for this project?',
    options: [
      { key: 'a', text: 'Repeating and refining project phases in multiple iterations.' },
      { key: 'b', text: 'Progressing through a linear sequence of stages.' },
      { key: 'c', text: 'Embracing change and focusing on delivering value.' },
      { key: 'd', text: 'Focusing on delivering the project in multiple increments.' },
    ],
    correct: 'd',
    explanation:
      "Delivering the project in multiple increments gets usable, valuable functionality to the customer early, matching their need for quick results while unclear requirements get refined through real feedback — reducing rework and promoting an early ROI in a competitive environment. Iterative refinement alone isn't as cost-effective as clarifying requirements with the customer before building, a linear sequence assumes requirements can be fully defined upfront (which they can't here), and 'embracing change and value' is a valuable mindset but not a concrete implementation approach on its own.",
  },
  {
    id: 26,
    domain: 'People',
    topic: 'Stakeholder Requirements by Influence',
    prompt:
      'A project manager has been assigned to an important project with stakeholders who have different expectations for the project. Some stakeholders also have a high degree of influence on the project. How should the project manager handle this situation?',
    options: [
      { key: 'a', text: 'Control the degree of stakeholder influence to better align with the project objectives.' },
      { key: 'b', text: "Include the influential stakeholders' requirements and ensure other stakeholders are aligned with the project goals." },
      { key: 'c', text: "Elicit and negotiate stakeholder requirements according to each stakeholder's influence." },
      { key: 'd', text: 'Manage the stakeholders carefully and apply stakeholder expectations without impacting the project objectives.' },
    ],
    correct: 'c',
    explanation:
      "The PM first needs to thoroughly understand each stakeholder's influence and interest, then negotiate and align their needs with the project goals based on those two factors. A PM cannot control the degree of stakeholder influence itself, cannot simply favor influential stakeholders while forcing others to align, and cannot apply everyone's expectations without first accessing each stakeholder's actual influence and requirements.",
  },
  {
    id: 27,
    domain: 'Process',
    topic: 'Interactive Communication to Confirm a Specified Format',
    prompt:
      'In preparation for a meeting with the CEO of an organization, a project manager asks a team member to prepare a monthly report for the CEO. The CEO provided a specific format for these reports at the start of the project. The day before the meeting, the project manager reviews the report and discovers that it is not formatted as specified by the CEO. What should the project manager have done to avoid this situation?',
    options: [
      { key: 'a', text: 'Asked for the report from the team member earlier to ensure it was in the requested format.' },
      { key: 'b', text: 'Requested that the CEO provide more detailed format requirements for creating monthly status reports.' },
      { key: 'c', text: 'Used interactive communication to confirm that the team member acknowledges the specified format.' },
      { key: 'd', text: 'Modified the communications management plan to include the new report format requirements.' },
    ],
    correct: 'c',
    explanation:
      'Interactive, two-way communication is what confirms information was correctly received and understood — the PM should have used it to confirm the team member actually understood the specified format. Asking for the report earlier does not address the root misunderstanding, the format requirements were already clear from the CEO, and there is no indication the format itself changed, so the communications plan does not need updating.',
  },
  {
    id: 28,
    domain: 'People',
    topic: 'Knowledge Transfer Before Handoff Testing',
    prompt:
      'A project manager is working on a new healthcare management application. One of the team members will be leaving the organization and a new team member is taking over their tasks. The new team member is concerned that several parts of the new application cannot be tested yet, despite sign-off by the outgoing team member. How should the project manager address this situation?',
    options: [
      { key: 'a', text: 'Trust the sign-off from the outgoing team member and proceed with the project as planned.' },
      { key: 'b', text: 'Conduct a thorough review of the untested parts of the application before proceeding.' },
      { key: 'c', text: 'Inform the new team member that testing will happen in a later phase of the project.' },
      { key: 'd', text: 'Ensure that the outgoing team member creates a knowledge transfer document for the new team member.' },
    ],
    correct: 'd',
    explanation:
      "A knowledge transfer document from the outgoing team member is the most comprehensive and reliable way to give the new team member what they need to understand and test the untested parts of the application, mitigating the risk of relying solely on someone else's sign-off. Trusting the sign-off blindly is risky, a thorough review before proceeding could delay the project, and deferring testing to a later phase puts the project at risk.",
  },
  {
    id: 29,
    domain: 'Process',
    topic: 'Including Stakeholders in Sprint Planning',
    prompt:
      'A company is creating a new application for its users. The agile team completed the initiating stage and is performing iterations to complete planning and execution. However, a stakeholder wants to change the order of the deliverables to demonstrate new aspects of the app to stakeholders. How should the project manager address this situation?',
    options: [
      { key: 'a', text: 'Include the stakeholder in sprint planning to ensure the right priorities are assigned.' },
      { key: 'b', text: 'Use key performance indicators (KPIs) to verify that the project is progressing on schedule.' },
      { key: 'c', text: 'Ask the stakeholder for a change request and submit it to the change control board (CCB).' },
      { key: 'd', text: 'Explain to the stakeholder that modifying the schedule now will increase the delivery risk.' },
    ],
    correct: 'a',
    explanation:
      "Agile projects expect work to evolve and adapt — including the stakeholder in sprint planning ensures the right priorities are assigned and addresses the request directly. Verifying progress with KPIs doesn't address the actual request, agile projects don't typically route reprioritization through a formal CCB, and simply warning about delivery risk skips working with the stakeholder to find a solution.",
  },
  {
    id: 30,
    domain: 'Process',
    topic: 'Scope Management Plan as the First Planning Step',
    prompt:
      'The research and development team is planning to build a new facility that will focus on improving existing products the organization has developed. It will be a multi-year initiative. What should the project manager do first?',
    options: [
      { key: 'a', text: 'Develop a scope management plan that will focus on the expected objectives of the initiative.' },
      { key: 'b', text: 'Develop a business case document that covers the return on investment (ROI) of the initiative.' },
      { key: 'c', text: 'Develop a resource management plan to cover resources and contingency planning.' },
      { key: 'd', text: 'Develop a communications management plan to address stakeholder needs.' },
    ],
    correct: 'a',
    explanation:
      "The first step in planning any project is a scope management plan, which defines the project's goals, objectives, deliverables, boundaries, and constraints. The business case is important for justifying and funding the project, the resource management plan for ensuring adequate resources, and the communications plan for stakeholder engagement, but none of them are the first planning step — a well-defined scope comes first.",
  },
  {
    id: 31,
    domain: 'Business Environment',
    topic: 'Verifying Business Value via Charter and Business Case',
    prompt:
      'A newly hired project manager is assigned to a school construction project. The school serves students from surrounding neighborhoods and must be completely energy efficient. The project manager must provide a final report. How can the project manager determine whether the planned business value was delivered?',
    options: [
      { key: 'a', text: 'Inspect the approved technical specifications to confirm that they match the final product deliverables.' },
      { key: 'b', text: 'Consult with the team and confirm that the customer was satisfied with the construction of the school.' },
      { key: 'c', text: 'Review the project charter and business case to determine if the deliverables achieved the intended benefits.' },
      { key: 'd', text: 'Demonstrate that the school construction project was delivered on schedule and within budget.' },
    ],
    correct: 'c',
    explanation:
      'The project charter and business case define the intended benefits and value, so reviewing them against what was delivered is the only way to confirm whether the planned business value was actually achieved. Matching technical specs, team-confirmed customer satisfaction, and on-time/on-budget delivery are all valid measures of execution success, but none of them confirm that the intended benefits were actually realized.',
  },
  {
    id: 32,
    domain: 'Process',
    topic: 'Aligning Artifacts to a New Estimation Technique',
    prompt:
      'A new program manager checks the status of a project. The forecast shows the project is slightly behind schedule. However, in reporting, the project manager stated that the project is on track. The program manager asks the project manager to explain the discrepancy. The project manager explains that the forecast discrepancy is due to a new estimation technique. What should the project manager have done to avoid this discrepancy?',
    options: [
      { key: 'a', text: 'Asked the program manager to use the old forecasting technique' },
      { key: 'b', text: 'Educated the program manager on the new forecasting technique' },
      { key: 'c', text: 'Aligned the project artifacts with the new estimation technique and provided them to the program manager' },
      { key: 'd', text: 'Ensured that the program manager has the necessary knowledge to understand estimation techniques' },
    ],
    correct: 'c',
    explanation:
      "The discrepancy arose because the project's own artifacts were never updated to reflect the new estimation technique. Aligning the artifacts and proactively sharing them with the program manager would have given accurate, consistent information from the start. Asking the program manager to revert, educating them after the fact, or just ensuring general knowledge doesn't fix the actual root cause: outdated project artifacts.",
  },
  {
    id: 33,
    domain: 'People',
    topic: 'Creating an Information Radiator After Training',
    prompt:
      'A group of agile team members have just completed in-person training for a number of critical and complex organizational processes. The next day, several team members voiced concerns and said they were having trouble remembering what they learned. Another training session is available next week, but the team is already behind schedule on some critical tasks, and the training takes a full workday. What should the project manager do to address this concern?',
    options: [
      { key: 'a', text: 'Ask team members to partner with one another to share the information they learned.' },
      { key: 'b', text: 'Create an information radiator with the key takeaways from the training.' },
      { key: 'c', text: 'Invite team members to reattend the training if they need a refresher.' },
      { key: 'd', text: 'Refer team members to training review notes to find the information they need.' },
    ],
    correct: 'b',
    explanation:
      'An information radiator (big visible chart) is a visible, always-accessible display that reinforces learning without costing the team another day of schedule. Partnering members up risks inconsistent or incomplete recall of what was learned, re-attending training is not viable given the schedule pressure, and static review notes are less visible and less likely to actually get used than a radiator.',
  },
  {
    id: 34,
    domain: 'Process',
    topic: 'Consensus-Building with a Steering Committee',
    prompt:
      'A project can gain downstream marketing benefits if additional equipment is included in the project scope. However, this equipment is still in an early development phase and will not be ready to meet the project timelines. A member of the project steering committee is in favor of its inclusion. How should the project manager proceed?',
    options: [
      { key: 'a', text: 'Prepare a scope change request to include the additional equipment because it is beneficial to the marketing team.' },
      { key: 'b', text: 'Provide a clear rationale for its exclusion based on the business case and its impact on the project timelines.' },
      { key: 'c', text: 'Conduct a survey among steering committee members to assess their individual project requirements for a consensus decision.' },
      { key: 'd', text: 'Request the project sponsor to escalate the issue to the steering committee member to avoid delaying project approval.' },
    ],
    correct: 'c',
    explanation:
      "Since the project is overseen by a steering committee, decisions like this need committee consensus rather than the project team acting unilaterally. Surveying the committee surfaces potential conflicts and identifies impacts before proceeding. Preparing a scope change request or unilaterally excluding the equipment both skip that consensus step, and escalating to the sponsor isn't appropriate before the committee has even weighed in.",
  },
  {
    id: 35,
    domain: 'Process',
    topic: 'Centralized Repository for Split Design/Execution Teams',
    prompt:
      'A hybrid project is using an iterative design process for product development. However, there are separate teams for design and execution, which is causing concerns. What should the project manager do to address these concerns?',
    options: [
      { key: 'a', text: 'Establish a centralized repository for project documentation and product validation.' },
      { key: 'b', text: 'Request that the design team be made responsible for project execution as well.' },
      { key: 'c', text: 'Communicate to the project management office (PMO) that a hybrid approach is too risky.' },
      { key: 'd', text: 'Enhance team skills by providing training on an adaptive project management framework.' },
    ],
    correct: 'a',
    explanation:
      'A centralized repository for documentation and product validation gives both the design and execution teams shared visibility, enabling knowledge transfer and a collaborative working environment despite being separate teams. Merging the teams under one may not be feasible, telling the PMO hybrid is too risky is an unfounded overreaction, and training on an adaptive framework assumes a skills gap the scenario never actually indicates.',
  },
  {
    id: 36,
    domain: 'Process',
    topic: 'Revising a Change Request to Reflect New Information',
    prompt:
      'A project is facing a one-month delay, and the project manager realizes that a change request is necessary. The change control board (CCB) will review the change request at their next meeting in two weeks. However, if the implementation of this change is delayed by two weeks, upcoming supply chain disruptions will cause a two-month delay to the project schedule. What should the project manager do?',
    options: [
      { key: 'a', text: 'Implement the change immediately to avoid the upcoming supply chain disruptions and the two-month delay.' },
      { key: 'b', text: 'Revise the change request to incorporate the additional two-month delay due to upcoming supply chain disruptions.' },
      { key: 'c', text: 'Meet with the sponsor and ask them to contact the CCB and request their immediate approval.' },
      { key: 'd', text: 'Request that the CEO approve and implement the change to avoid the potential two-month delay.' },
    ],
    correct: 'b',
    explanation:
      'Updating the change request with the fuller picture — including the looming supply chain risk — ensures the CCB has everything it needs to make an informed decision at its scheduled review. Implementing the change without CCB approval bypasses the established process, and routing around the CCB through the sponsor or CEO undermines the governance process rather than following it.',
  },
  {
    id: 37,
    domain: 'People',
    topic: 'Leveraging Team Ideas via Retrospectives',
    prompt:
      'A company is transitioning from a predictive to an agile project management approach. The project manager has noticed that team members have valuable ideas on how to improve productivity. How can the project manager leverage these ideas?',
    options: [
      { key: 'a', text: 'Make use of project retrospective sessions for discussions and learning.' },
      { key: 'b', text: 'Use iteration planning to discuss and adopt new ways of working.' },
      { key: 'c', text: 'Develop and share guidelines for team training and mentoring.' },
      { key: 'd', text: 'Engage with the product owner to facilitate fast-tracking of the transition.' },
    ],
    correct: 'a',
    explanation:
      "Retrospectives are the built-in tool for continuous improvement — they let the team reflect, surface improvement ideas, and turn them into a concrete plan for the next sprint. Iteration planning is meant for planning the upcoming work, not adopting new ways of working; training/mentoring guidelines don't directly capture the team's own ideas in the near term; and the product owner isn't responsible for facilitating the transition to agile.",
  },
  {
    id: 38,
    domain: 'Process',
    topic: "Assessing a Stakeholder's Suggestion Against Acceptance Criteria",
    prompt:
      "During product demonstration, a stakeholder suggests that the product does not meet expectations. What artifact should the project manager use to assess the stakeholder's suggestion?",
    options: [
      { key: 'a', text: 'Minimum viable product (MVP) description' },
      { key: 'b', text: 'Definition of done (DoD)' },
      { key: 'c', text: 'Definition of ready (DoR)' },
      { key: 'd', text: 'Acceptance criteria on the user story' },
    ],
    correct: 'd',
    explanation:
      "The acceptance criteria on the user story spell out the specific requirements the product must meet to be considered acceptable — the right yardstick for assessing a stakeholder's expectation gap. The DoD and DoR are more general artifacts (what counts as 'done' or 'ready' to start), and the MVP description defines the minimum feature set for viability, not whether a specific piece of work meets expectations.",
  },
  {
    id: 39,
    domain: 'People',
    topic: 'Root-Causing Low Team Morale',
    prompt:
      'Regular check-ins with the delivery team reveal low morale and a lack of efficiency. What should the project manager do to address these concerns?',
    options: [
      { key: 'a', text: 'Perform a skill assessment.' },
      { key: 'b', text: 'Conduct teambuilding exercises.' },
      { key: 'c', text: 'Remove all project roadblocks.' },
      { key: 'd', text: 'Conduct a satisfaction evaluation.' },
    ],
    correct: 'd',
    explanation:
      "With no clear indication of the source of the low morale, the PM must first identify the root cause before choosing a fix — a satisfaction evaluation (survey) helps surface that source. A skills assessment should have already happened when the team was formed, team-building exercises may not address the actual source, and removing roadblocks assumes roadblocks are the cause without confirming it first.",
  },
  {
    id: 40,
    domain: 'People',
    topic: 'Resource Reassignment in a Matrix Organization',
    prompt:
      'A project manager works in a matrix organization. Following a reorganization, several key project resources are reassigned to another project. The project no longer has the resources needed to successfully deliver the project. What should the project manager do?',
    options: [
      { key: 'a', text: 'Refuse to release the newly reassigned resources.' },
      { key: 'b', text: 'Review the communications management plan.' },
      { key: 'c', text: 'Review resource allocation and utilization plans.' },
      { key: 'd', text: 'Review resource needs with the functional manager.' },
    ],
    correct: 'd',
    explanation:
      'In a matrix environment, resources report to and are shared through their functional managers — reviewing resource needs directly with them, and explaining the impact of the reassignment, is the way to work toward minimizing it. Refusing to release resources is not within the PM\'s authority, and reviewing the communications plan or internal allocation/utilization plans doesn\'t address the actual shortage or engage the people who control it.',
  },
  {
    id: 41,
    domain: 'Process',
    topic: 'Sizing Non-Backlog Work Before Adopting Story Points',
    prompt:
      'An experienced project manager joins an ongoing project and wants to estimate the amount of time required to tackle several complex tasks. The team uses a kanban board but is open to new approaches. The project manager suggests using story points. What is the first thing the team should do before implementing this new approach?',
    options: [
      { key: 'a', text: 'Calculate the story points only for new backlog items.' },
      { key: 'b', text: 'Estimate the story points required for the entire task board.' },
      { key: 'c', text: 'Convert all work in progress (WIP) items to story points.' },
      { key: 'd', text: 'Measure and track story points over several sprints.' },
    ],
    correct: 'c',
    explanation:
      "Converting existing work-in-progress items to story points first lets the team understand the scale being used to quantify effort before applying it to new work — a foundation for estimating how many sprints the remaining work will take. Sizing only new backlog items ignores in-progress work, sizing the entire board includes already-completed work, and tracking points over several sprints is a later step, not the first one.",
  },
  {
    id: 42,
    domain: 'People',
    topic: 'Coordinating Meetings Across a Global Team',
    prompt:
      'A project manager is working on a virtual project with a global team for the first time and encounters an issue with stakeholder participation in team meetings. Some stakeholders do not participate, others complain about scheduling, and others do not acknowledge meeting invitations. What should the project manager do to address these issues and ensure smoother meetings?',
    options: [
      { key: 'a', text: 'Allow the stakeholders to participate in asynchronous meetings using written communication.' },
      { key: 'b', text: 'Inform the project sponsor of the situation and ask for support in enforcing meeting attendance.' },
      { key: 'c', text: 'Review the organizational culture and structure to properly coordinate meetings.' },
      { key: 'd', text: 'Reschedule meetings for different times and dates according to time zones.' },
    ],
    correct: 'c',
    explanation:
      "Reviewing the organization's culture and structure lets the PM understand the actual needs and expectations behind the varied complaints and design a meeting schedule and format that genuinely works for everyone. Async written meetings alone don't solve scheduling complaints or unacknowledged invitations, asking the sponsor to enforce attendance should be a last resort, and simply rescheduling by time zone doesn't guarantee attendance and can be disruptive on its own.",
  },
  {
    id: 43,
    domain: 'Process',
    topic: 'Reviewing Blocked Items in Standups',
    prompt:
      'An agile project manager is overseeing a Kanban project and wants to assess task completion roadblocks for an upcoming major milestone. What should the project manager do?',
    options: [
      { key: 'a', text: 'Create a performance metric using the work in progress limit.' },
      { key: 'b', text: 'Ask a trusted team member about the issues the team is facing.' },
      { key: 'c', text: 'Review the blocked items with the team during standup meetings.' },
      { key: 'd', text: 'Host a stakeholder meeting to discuss task completion roadblocks.' },
    ],
    correct: 'c',
    explanation:
      'A Kanban board shows work in progress and helps identify bottlenecks — reviewing blocked items with the whole team during standups is how the PM surfaces obstacles that could threaten the milestone. A WIP-based performance metric won\'t reveal specific roadblocks or their causes, asking just one team member excludes the rest of the team\'s input, and a stakeholder meeting is less effective than starting fact-finding with the team itself.',
  },
  {
    id: 44,
    domain: 'People',
    topic: 'Reviewing Meeting-Attendance Guidelines',
    prompt:
      'The night before a standup meeting, a project manager realizes that they will be unable to attend the daily standup meeting in person but will join via phone. The project manager sent an email to the project team letting them know. One of the team members is upset that, despite having the longest commute, they are expected to attend the meeting in person. How should the project manager address this situation?',
    options: [
      { key: 'a', text: 'Amend the current attendance policy to allow all team members to attend standup meetings remotely.' },
      { key: 'b', text: 'Rotate the location of the standup meetings to ensure that everyone has an equal opportunity to attend in person.' },
      { key: 'c', text: 'Review the guidelines for meeting attendance including when remote attendance is allowed and under what circumstances.' },
      { key: 'd', text: 'Communicate the reasons for attending standup meetings in person and the benefits of doing so.' },
    ],
    correct: 'c',
    explanation:
      "Reviewing and clarifying the meeting-attendance guidelines addresses the team member's concern directly and ensures everyone feels valued and included by understanding what's actually expected and why. Amending the policy to allow remote attendance for everyone or rotating meeting locations may not be feasible, and communicating the benefits of in-person attendance alone doesn't resolve the underlying fairness concern without first reviewing the guidelines.",
  },
  {
    id: 45,
    domain: 'Process',
    topic: 'Integrated Change Control for a Co-Sponsor Request',
    prompt:
      'Halfway through implementation, the project co-sponsor, who is contributing a significant amount of capital to the project, informs the project team of an additional feature to the project deliverable. What should the project manager do?',
    options: [
      { key: 'a', text: 'Assess the impact of the new requirement and update the risk register.' },
      { key: 'b', text: 'Complete the current project as planned and update it later with the new requirements.' },
      { key: 'c', text: "Collect the co-sponsor's requirements and perform the integrated change control process." },
      { key: 'd', text: 'Convince the co-sponsor to maintain the current scope and complete the project as planned.' },
    ],
    correct: 'c',
    explanation:
      "The co-sponsor is a key stakeholder whose requirements should be taken seriously — the PM should collect the requirements and run them through the integrated change control process. Updating the risk register alone isn't the right first step for a scope addition, deferring the requirement until after project completion ignores a legitimate stakeholder request, and trying to talk the co-sponsor out of it isn't worthwhile if it works against project success.",
  },
  {
    id: 46,
    domain: 'People',
    topic: 'Building Support Through Training, Not Escalation',
    prompt:
      'A project manager has been engaged by a managing director to transform the project management office (PMO) from a waterfall structure focused on software development to an agile PMO. The manager of the PMO has been particularly resistant to the change. Upon investigation, the project manager realizes that the manager\'s resistance is due to a lack of agile knowledge that may make them seem incompetent. How should the project manager proceed?',
    options: [
      { key: 'a', text: 'Ask the managing director to intervene with the PMO manager to explain why this is necessary.' },
      { key: 'b', text: "Ask the project team to support the transformation regardless of the PMO manager's negativity." },
      { key: 'c', text: 'Implement a change management strategy to ensure that the process meets governance requirements.' },
      { key: 'd', text: 'Implement a training program on agile for all staff to ensure there is congruency of learning for everyone.' },
    ],
    correct: 'd',
    explanation:
      "Since the resistance stems from a fear of appearing incompetent due to a genuine skills gap, a training program for all staff — including the PMO manager — directly addresses that fear and builds support for the change. Escalating to the managing director sidelines a key stakeholder, asking the team to push through the manager's negativity ignores the root cause, and a change management/governance strategy alone doesn't fix the underlying skills gap driving the resistance.",
  },
]
