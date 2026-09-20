import type { PMPQuestion } from './pmp-quiz-types'

export const pmpPeopleDrillQuestions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'People',
    topic: 'Outcome Validation',
    prompt:
      'Customer satisfaction with a recently released increment has fallen sharply. The team delivered everything contained in the approved backlog, and the product owner believes the project is therefore successful. What should the project manager do next?',
    options: [
      {
        key: 'a',
        text: 'Close the increment because all backlog items were completed',
      },
      {
        key: 'b',
        text: 'Investigate customer feedback and reassess whether delivered outcomes align with customer expectations',
      },
      {
        key: 'c',
        text: 'Replace the product owner',
      },
      {
        key: 'd',
        text: 'Increase the number of features in the next increment',
      },
    ],
    correct: 'b',
    explanation:
      'Completing backlog items is an output measure; success requires validating that the delivered outcomes actually meet customer needs.',
  },
  {
    id: 2,
    domain: 'People',
    topic: 'Knowledge Transfer',
    prompt:
      "A subject-matter expert who designed a critical integration will leave the organization in three weeks. Very little of the expert's knowledge has been documented. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: 'Ask the expert to write a complete technical manual before leaving',
      },
      {
        key: 'b',
        text: 'Identify critical knowledge and arrange knowledge-transfer activities such as pairing, demonstrations and documentation',
      },
      {
        key: 'c',
        text: 'Immediately recruit a replacement with identical experience',
      },
      {
        key: 'd',
        text: 'Add the departure to the lessons-learned register and continue',
      },
    ],
    correct: 'b',
    explanation:
      'A structured knowledge-transfer plan captures the highest-risk knowledge in the time available, more reliably than a single manual or a same-skill hire.',
  },
  {
    id: 3,
    domain: 'People',
    topic: 'Stakeholder Reporting & Tailoring',
    prompt:
      "Executives complain that the agile team's status reports contain velocity charts, technical metrics and backlog details but do not tell them whether the project is likely to achieve its business objectives. What should the project manager do?",
    options: [
      {
        key: 'a',
        text: "Send the executives the team's daily stand-up notes",
      },
      {
        key: 'b',
        text: 'Replace agile metrics with earned value calculations',
      },
      {
        key: 'c',
        text: 'Tailor reporting to stakeholder information needs and include appropriate outcome and value measures',
      },
      {
        key: 'd',
        text: 'Ask executives to attend sprint reviews instead of receiving reports',
      },
    ],
    correct: 'c',
    explanation:
      'Reporting should be tailored to each audience — executives need outcome and value indicators alongside (not instead of) delivery metrics.',
  },
  {
    id: 4,
    domain: 'People',
    topic: 'Performance Coaching',
    prompt:
      'A team member regularly submits deliverables late and under the expected quality standard. How should the project manager respond first?',
    options: [
      {
        key: 'a',
        text: 'Escalate the issue to their functional manager.',
      },
      {
        key: 'b',
        text: 'Reassign them to simpler tasks.',
      },
      {
        key: 'c',
        text: 'Meet with the team member privately to understand the underlying root cause.',
      },
      {
        key: 'd',
        text: 'Issue a formal written performance notice.',
      },
    ],
    correct: 'c',
    explanation:
      'A project manager should demonstrate emotional intelligence and direct leadership. Meeting privately first identifies root causes (training gaps, personal obstacles, or resource constraints) before escalating or taking formal disciplinary action.',
  },
  {
    id: 5,
    domain: 'People',
    topic: 'Stakeholder Engagement Tailoring',
    prompt:
      'During sprint execution, a high-power stakeholder regularly misses alignment meetings and fails to respond to critical decision requests. What is the best course of action?',
    options: [
      {
        key: 'a',
        text: 'Remove them from the stakeholder engagement plan.',
      },
      {
        key: 'b',
        text: 'Tailor the communication approach to align better with their preferences and schedule.',
      },
      {
        key: 'c',
        text: 'Escalate their lack of participation to the project sponsor.',
      },
      {
        key: 'd',
        text: 'Proceed with major decisions without their input and document the attempt.',
      },
    ],
    correct: 'b',
    explanation:
      'When stakeholder engagement drops, analyze communication channels first. Re-evaluating communication preferences ensures key stakeholders stay informed and engaged without unnecessary escalation.',
  },
  {
    id: 6,
    domain: 'People',
    topic: 'Unauthorized Change Handling',
    prompt:
      'A senior Subject Matter Expert (SME) who was not part of the project team suggests a fundamental change directly to a developer, who then implements it without approval. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Direct the developer to roll back the change immediately.',
      },
      {
        key: 'b',
        text: 'Facilitate a discussion between the product owner and developer to evaluate the gap and potential value.',
      },
      {
        key: 'c',
        text: 'Instruct the team to ignore future input from external SMEs.',
      },
      {
        key: 'd',
        text: 'Update the project plan to incorporate the change since it saves time.',
      },
    ],
    correct: 'b',
    explanation:
      'Assess the value and scope impact of unauthorized work collaboratively with the Product Owner/Change Board before taking coercive steps like rolling back or ignoring expert input.',
  },
  {
    id: 7,
    domain: 'People',
    topic: 'Retrospective Facilitation',
    prompt:
      'A dispersed project team just finished a sprint with complex tasks ahead of schedule. During the retrospective, a new member of the team interrupts and asks everyone to explain their roles and what they are planning on working on for the next sprint. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Address the situation immediately and answer the new team member directly.',
      },
      {
        key: 'b',
        text: 'Inform the team members that this would be best handled in another meeting.',
      },
      {
        key: 'c',
        text: 'Ask each team member to explain their role and what they will work on for the next sprint.',
      },
      {
        key: 'd',
        text: 'Set up one-on-one meetings with each team member and the new team member.',
      },
    ],
    correct: 'b',
    explanation:
      "The PM should politely redirect the new member — a retrospective isn't the time to cover other members' roles, and protecting the meeting's focus keeps it effective. Addressing it immediately or going around the room derails the retrospective into an off-topic conversation, and setting up individual one-on-ones is time-consuming and inefficient compared to a quick redirect to a better-suited time.",
  },
  {
    id: 8,
    domain: 'People',
    topic: 'SME Knowledge Transfer',
    prompt:
      'During project execution, the project sponsor decides to replace a subject matter expert (SME) on the project. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Negotiate with the project sponsor to retain the SME on the project.',
      },
      {
        key: 'b',
        text: 'Ensure there is sufficient knowledge transfer between the SME and their replacement.',
      },
      {
        key: 'c',
        text: 'Indicate to the new SME that the project knowledge base has all needed information.',
      },
      {
        key: 'd',
        text: 'Meet with the project sponsor to explain the conflicts among the project team.',
      },
    ],
    correct: 'b',
    explanation:
      "Whenever an SME changes, the PM should ensure sufficient knowledge transfer between the outgoing and incoming SME. Relying only on a knowledge base may not capture everything, and regardless of why the sponsor made the swap, the PM's job is to protect continuity through a proper handover, not renegotiate the decision or raise unrelated team conflicts.",
  },
  {
    id: 9,
    domain: 'People',
    topic: 'Resolving a Skills Gap Mid-Sprint',
    prompt:
      'During a standup meeting, the project manager discovers that one of the software developers is struggling to complete work because they lack experience with automation testing, potentially affecting the sprint goal. A quality assurance engineer on the team has automation testing experience but is busy preparing a presentation for new employees. What action would increase the chances of achieving the sprint goal?',
    options: [
      {
        key: 'a',
        text: 'Reassign the automation work to the engineer as soon as the presentation is finished.',
      },
      {
        key: 'b',
        text: 'Immediately train the software developer on automation testing and then proceed with testing.',
      },
      {
        key: 'c',
        text: 'Ask the quality assurance engineer to assist the software developer as soon as possible.',
      },
      {
        key: 'd',
        text: 'Reschedule the automation testing for when the quality assurance engineer is available.',
      },
    ],
    correct: 'c',
    explanation:
      "Pairing the developer with the QA engineer as soon as possible leverages existing expertise for efficient problem-solving and task completion, protecting the sprint goal. Reassigning the work or rescheduling it introduces delay and may cause resentment, and training the developer from scratch takes time and doesn't guarantee immediate proficiency on a complex skill under sprint pressure.",
  },
  {
    id: 10,
    domain: 'People',
    topic: 'Team Conflict Root-Cause Investigation',
    prompt:
      'During a retrospective meeting, some team members expressed that they strongly disagree with how the product owner and scrum master handled some issues related to the scope of the last cycle. What should the project manager do first?',
    options: [
      {
        key: 'a',
        text: 'Review the backlog with the product owner to ensure the scope is appropriate.',
      },
      {
        key: 'b',
        text: 'Collect all available information from the team and address the problem.',
      },
      {
        key: 'c',
        text: 'Schedule a meeting with the specific team members to discuss the issue.',
      },
      {
        key: 'd',
        text: "Discuss the team's concerns with the product owner and the scrum master.",
      },
    ],
    correct: 'b',
    explanation:
      'Once a conflict surfaces, the PM should first collect all available information from the team to understand the root cause before developing a resolution approach. Reviewing the backlog, scheduling a separate meeting with select members, or going straight to the product owner and scrum master all skip gathering the full picture first, and risk making people involved in the conflict feel excluded from a fair, open process.',
  },
  {
    id: 11,
    domain: 'People',
    topic: 'Proactive Sponsor Communication',
    prompt:
      'Although a project is performing within its time, scope, and budget constraints, the project manager learns that the project sponsor is unhappy with its progress. What should the project manager have done to avoid this situation?',
    options: [
      {
        key: 'a',
        text: 'Conducted frequent reviews and assessments to identify and address any potential risks.',
      },
      {
        key: 'b',
        text: 'Aligned project objectives with the expectations and requirements of the project sponsor.',
      },
      {
        key: 'c',
        text: 'Communicated regularly with the project sponsor to provide updates and address any concerns.',
      },
      {
        key: 'd',
        text: 'Implemented strict control measures to ensure that project milestones and deliverables are met.',
      },
    ],
    correct: 'c',
    explanation:
      "Since the project is objectively on track, the sponsor's dissatisfaction signals a communication gap, not a delivery gap — regular communication is what surfaces and addresses a sponsor's concerns before they build up. Frequent risk reviews and strict milestone control don't address the actual disconnect here, and aligning objectives with sponsor expectations only works if ongoing communication makes that alignment possible in the first place.",
  },
  {
    id: 12,
    domain: 'People',
    topic: 'Team Norms for After-Hours Conduct',
    prompt:
      'The execution of a construction project in a remote area requires team members to live together in corporate dormitories when they are required to be on-site. Several team members approach the project manager to complain about the way one team member behaves after work. They have expressed concerns that the behavior is negatively impacting team morale and cohesion. What should the project manager do to address this issue?',
    options: [
      {
        key: 'a',
        text: 'Call a meeting to discuss the problem with the team.',
      },
      {
        key: 'b',
        text: 'Plan a team-building session to discuss the problem.',
      },
      {
        key: 'c',
        text: 'Move the team member in question to a new dormitory.',
      },
      {
        key: 'd',
        text: 'Review the team norms and discuss this with the team.',
      },
    ],
    correct: 'd',
    explanation:
      'Team norms are the behavioral parameters the team itself committed to, and even after-hours behavior can affect the project when members live together — reviewing and discussing norms with the whole team sets clear expectations proactively. Calling a meeting to discuss the complaint directly is reactive rather than norm-setting, a team-building session addresses it only indirectly, and moving the team member sidesteps the actual behavior issue.',
  },
  {
    id: 13,
    domain: 'People',
    topic: 'Escalating an Unresponsive Functional Manager',
    prompt:
      'A project manager is experiencing issues with the functional manager of a project team member. The functional manager has given the team member another assignment and has told the team member that the previous project should be a lower priority. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Escalate the issue to senior management.',
      },
      {
        key: 'b',
        text: 'Communicate the importance of the project to the team.',
      },
      {
        key: 'c',
        text: 'Refer the functional manager to the project charter.',
      },
      {
        key: 'd',
        text: 'Request additional resources for your project.',
      },
    ],
    correct: 'a',
    explanation:
      "Escalating to senior management is the most direct and effective way to resolve a priority conflict imposed by a functional manager, ensuring the team member has the time and resources needed. Communicating importance to the team doesn't reach the functional manager, referring them to the charter is unlikely to change their behavior, and requesting more resources doesn't address the underlying priority conflict.",
  },
  {
    id: 14,
    domain: 'People',
    topic: 'Stakeholder Requirements by Influence',
    prompt:
      'A project manager has been assigned to an important project with stakeholders who have different expectations for the project. Some stakeholders also have a high degree of influence on the project. How should the project manager handle this situation?',
    options: [
      {
        key: 'a',
        text: 'Control the degree of stakeholder influence to better align with the project objectives.',
      },
      {
        key: 'b',
        text: "Include the influential stakeholders' requirements and ensure other stakeholders are aligned with the project goals.",
      },
      {
        key: 'c',
        text: "Elicit and negotiate stakeholder requirements according to each stakeholder's influence.",
      },
      {
        key: 'd',
        text: 'Manage the stakeholders carefully and apply stakeholder expectations without impacting the project objectives.',
      },
    ],
    correct: 'c',
    explanation:
      "The PM first needs to thoroughly understand each stakeholder's influence and interest, then negotiate and align their needs with the project goals based on those two factors. A PM cannot control the degree of stakeholder influence itself, cannot simply favor influential stakeholders while forcing others to align, and cannot apply everyone's expectations without first accessing each stakeholder's actual influence and requirements.",
  },
  {
    id: 15,
    domain: 'People',
    topic: 'Knowledge Transfer Before Handoff Testing',
    prompt:
      'A project manager is working on a new healthcare management application. One of the team members will be leaving the organization and a new team member is taking over their tasks. The new team member is concerned that several parts of the new application cannot be tested yet, despite sign-off by the outgoing team member. How should the project manager address this situation?',
    options: [
      {
        key: 'a',
        text: 'Trust the sign-off from the outgoing team member and proceed with the project as planned.',
      },
      {
        key: 'b',
        text: 'Conduct a thorough review of the untested parts of the application before proceeding.',
      },
      {
        key: 'c',
        text: 'Inform the new team member that testing will happen in a later phase of the project.',
      },
      {
        key: 'd',
        text: 'Ensure that the outgoing team member creates a knowledge transfer document for the new team member.',
      },
    ],
    correct: 'd',
    explanation:
      "A knowledge transfer document from the outgoing team member is the most comprehensive and reliable way to give the new team member what they need to understand and test the untested parts of the application, mitigating the risk of relying solely on someone else's sign-off. Trusting the sign-off blindly is risky, a thorough review before proceeding could delay the project, and deferring testing to a later phase puts the project at risk.",
  },
  {
    id: 16,
    domain: 'People',
    topic: 'Creating an Information Radiator After Training',
    prompt:
      'A group of agile team members have just completed in-person training for a number of critical and complex organizational processes. The next day, several team members voiced concerns and said they were having trouble remembering what they learned. Another training session is available next week, but the team is already behind schedule on some critical tasks, and the training takes a full workday. What should the project manager do to address this concern?',
    options: [
      {
        key: 'a',
        text: 'Ask team members to partner with one another to share the information they learned.',
      },
      {
        key: 'b',
        text: 'Create an information radiator with the key takeaways from the training.',
      },
      {
        key: 'c',
        text: 'Invite team members to reattend the training if they need a refresher.',
      },
      {
        key: 'd',
        text: 'Refer team members to training review notes to find the information they need.',
      },
    ],
    correct: 'b',
    explanation:
      'An information radiator (big visible chart) is a visible, always-accessible display that reinforces learning without costing the team another day of schedule. Partnering members up risks inconsistent or incomplete recall of what was learned, re-attending training is not viable given the schedule pressure, and static review notes are less visible and less likely to actually get used than a radiator.',
  },
  {
    id: 17,
    domain: 'People',
    topic: 'Leveraging Team Ideas via Retrospectives',
    prompt:
      'A company is transitioning from a predictive to an agile project management approach. The project manager has noticed that team members have valuable ideas on how to improve productivity. How can the project manager leverage these ideas?',
    options: [
      {
        key: 'a',
        text: 'Make use of project retrospective sessions for discussions and learning.',
      },
      {
        key: 'b',
        text: 'Use iteration planning to discuss and adopt new ways of working.',
      },
      {
        key: 'c',
        text: 'Develop and share guidelines for team training and mentoring.',
      },
      {
        key: 'd',
        text: 'Engage with the product owner to facilitate fast-tracking of the transition.',
      },
    ],
    correct: 'a',
    explanation:
      "Retrospectives are the built-in tool for continuous improvement — they let the team reflect, surface improvement ideas, and turn them into a concrete plan for the next sprint. Iteration planning is meant for planning the upcoming work, not adopting new ways of working; training/mentoring guidelines don't directly capture the team's own ideas in the near term; and the product owner isn't responsible for facilitating the transition to agile.",
  },
  {
    id: 18,
    domain: 'People',
    topic: 'Root-Causing Low Team Morale',
    prompt:
      'Regular check-ins with the delivery team reveal low morale and a lack of efficiency. What should the project manager do to address these concerns?',
    options: [
      {
        key: 'a',
        text: 'Perform a skill assessment.',
      },
      {
        key: 'b',
        text: 'Conduct teambuilding exercises.',
      },
      {
        key: 'c',
        text: 'Remove all project roadblocks.',
      },
      {
        key: 'd',
        text: 'Conduct a satisfaction evaluation.',
      },
    ],
    correct: 'd',
    explanation:
      'With no clear indication of the source of the low morale, the PM must first identify the root cause before choosing a fix — a satisfaction evaluation (survey) helps surface that source. A skills assessment should have already happened when the team was formed, team-building exercises may not address the actual source, and removing roadblocks assumes roadblocks are the cause without confirming it first.',
  },
  {
    id: 19,
    domain: 'People',
    topic: 'Resource Reassignment in a Matrix Organization',
    prompt:
      'A project manager works in a matrix organization. Following a reorganization, several key project resources are reassigned to another project. The project no longer has the resources needed to successfully deliver the project. What should the project manager do?',
    options: [
      {
        key: 'a',
        text: 'Refuse to release the newly reassigned resources.',
      },
      {
        key: 'b',
        text: 'Review the communications management plan.',
      },
      {
        key: 'c',
        text: 'Review resource allocation and utilization plans.',
      },
      {
        key: 'd',
        text: 'Review resource needs with the functional manager.',
      },
    ],
    correct: 'd',
    explanation:
      "In a matrix environment, resources report to and are shared through their functional managers — reviewing resource needs directly with them, and explaining the impact of the reassignment, is the way to work toward minimizing it. Refusing to release resources is not within the PM's authority, and reviewing the communications plan or internal allocation/utilization plans doesn't address the actual shortage or engage the people who control it.",
  },
  {
    id: 20,
    domain: 'People',
    topic: 'Coordinating Meetings Across a Global Team',
    prompt:
      'A project manager is working on a virtual project with a global team for the first time and encounters an issue with stakeholder participation in team meetings. Some stakeholders do not participate, others complain about scheduling, and others do not acknowledge meeting invitations. What should the project manager do to address these issues and ensure smoother meetings?',
    options: [
      {
        key: 'a',
        text: 'Allow the stakeholders to participate in asynchronous meetings using written communication.',
      },
      {
        key: 'b',
        text: 'Inform the project sponsor of the situation and ask for support in enforcing meeting attendance.',
      },
      {
        key: 'c',
        text: 'Review the organizational culture and structure to properly coordinate meetings.',
      },
      {
        key: 'd',
        text: 'Reschedule meetings for different times and dates according to time zones.',
      },
    ],
    correct: 'c',
    explanation:
      "Reviewing the organization's culture and structure lets the PM understand the actual needs and expectations behind the varied complaints and design a meeting schedule and format that genuinely works for everyone. Async written meetings alone don't solve scheduling complaints or unacknowledged invitations, asking the sponsor to enforce attendance should be a last resort, and simply rescheduling by time zone doesn't guarantee attendance and can be disruptive on its own.",
  },
  {
    id: 21,
    domain: 'People',
    topic: 'Reviewing Meeting-Attendance Guidelines',
    prompt:
      'The night before a standup meeting, a project manager realizes that they will be unable to attend the daily standup meeting in person but will join via phone. The project manager sent an email to the project team letting them know. One of the team members is upset that, despite having the longest commute, they are expected to attend the meeting in person. How should the project manager address this situation?',
    options: [
      {
        key: 'a',
        text: 'Amend the current attendance policy to allow all team members to attend standup meetings remotely.',
      },
      {
        key: 'b',
        text: 'Rotate the location of the standup meetings to ensure that everyone has an equal opportunity to attend in person.',
      },
      {
        key: 'c',
        text: 'Review the guidelines for meeting attendance including when remote attendance is allowed and under what circumstances.',
      },
      {
        key: 'd',
        text: 'Communicate the reasons for attending standup meetings in person and the benefits of doing so.',
      },
    ],
    correct: 'c',
    explanation:
      "Reviewing and clarifying the meeting-attendance guidelines addresses the team member's concern directly and ensures everyone feels valued and included by understanding what's actually expected and why. Amending the policy to allow remote attendance for everyone or rotating meeting locations may not be feasible, and communicating the benefits of in-person attendance alone doesn't resolve the underlying fairness concern without first reviewing the guidelines.",
  },
  {
    id: 22,
    domain: 'People',
    topic: 'Building Support Through Training, Not Escalation',
    prompt:
      "A project manager has been engaged by a managing director to transform the project management office (PMO) from a waterfall structure focused on software development to an agile PMO. The manager of the PMO has been particularly resistant to the change. Upon investigation, the project manager realizes that the manager's resistance is due to a lack of agile knowledge that may make them seem incompetent. How should the project manager proceed?",
    options: [
      {
        key: 'a',
        text: 'Ask the managing director to intervene with the PMO manager to explain why this is necessary.',
      },
      {
        key: 'b',
        text: "Ask the project team to support the transformation regardless of the PMO manager's negativity.",
      },
      {
        key: 'c',
        text: 'Implement a change management strategy to ensure that the process meets governance requirements.',
      },
      {
        key: 'd',
        text: 'Implement a training program on agile for all staff to ensure there is congruency of learning for everyone.',
      },
    ],
    correct: 'd',
    explanation:
      "Since the resistance stems from a fear of appearing incompetent due to a genuine skills gap, a training program for all staff — including the PMO manager — directly addresses that fear and builds support for the change. Escalating to the managing director sidelines a key stakeholder, asking the team to push through the manager's negativity ignores the root cause, and a change management/governance strategy alone doesn't fix the underlying skills gap driving the resistance.",
  },
  {
    id: 23,
    domain: 'People',
    topic: 'AI Decision Accountability',
    prompt:
      'You are managing a project that uses AI to prioritize vendor selections. After implementation, stakeholders discover the AI recommended a supplier with significant compliance issues. Senior management asks who is responsible for the decision. What is the best response?',
    options: [
      {
        key: 'a',
        text: 'Raise a legal claim against the AI vendor to ensure accountability.',
      },
      {
        key: 'b',
        text: 'Assign accountability to the AI development team.',
      },
      {
        key: 'c',
        text: 'Accept AI recommendations as objective project decisions.',
      },
      {
        key: 'd',
        text: 'Project leaders remain accountable, even for AI-supported decisions.',
      },
    ],
    correct: 'd',
    explanation:
      "Accountability for a decision can't be outsourced to a tool or its vendor — project leaders remain accountable for decisions made with AI support, which is why pursuing the AI vendor (A), shifting blame to the AI development team (B), and treating AI output as inherently objective (C) all misplace responsibility.",
  },
  {
    id: 24,
    domain: 'People',
    topic: 'Stakeholder Engagement',
    prompt:
      'An agile software development team is delivering functionality sprint-by-sprint. However, the clinical director, who acts as the primary Product Owner, consistently misses the scheduled sprint reviews, resulting in a severe backlog of unapproved work and high rework rates. What is the best way for the project manager to handle this?',
    options: [
      {
        key: 'a',
        text: 'Invite the clinical director to the daily stand-up meetings to closely monitor their availability.',
      },
      {
        key: 'b',
        text: 'Proactively collaborate with the director to plan an alternative engagement strategy, such as recorded demos with feedback forms or designating a trusted delegate.',
      },
      {
        key: 'c',
        text: 'Request that the director lock and freeze all requirements at the start of each sprint to prevent rework.',
      },
      {
        key: 'd',
        text: 'Allow the team to proceed based on assumptions and let the director review deliverables whenever they become available.',
      },
    ],
    correct: 'b',
    explanation:
      'Stakeholder engagement must be structured and proactive, adapting to constraints rather than remaining rigid. Option B provides flexible, modern solutions to unblock the team.',
  },
  {
    id: 25,
    domain: 'People',
    topic: 'Stakeholder Alignment',
    prompt:
      "A program spans three business units, each having endorsed a shared objective statement. A project manager notices that alignment appears strong in every unit's own reviews, yet cross-unit integration checkpoints repeatedly surface conflicting interpretations of what the objective delivers. The project manager must decide how to gauge whether the program's stakeholders are genuinely aligned. Which basis offers the most trustworthy verdict on true alignment across the program?",
    options: [
      {
        key: 'a',
        text: "Positive alignment ratings within each unit's own reviews, since local confidence reflects how well each group understands the objective.",
      },
      {
        key: 'b',
        text: 'Consistency of interpretation observed at shared cross-unit checkpoints, since integration touchpoints expose divergent meanings that isolated reviews conceal.',
      },
      {
        key: 'c',
        text: 'Endorsement of the shared objective statement by each unit, since formal sign-off confirms that all parties accepted the same stated intent.',
      },
      {
        key: 'd',
        text: 'Absence of escalated conflicts between the units, since a lack of raised disputes signals that shared understanding has been maintained over time.',
      },
    ],
    correct: 'b',
    explanation:
      'Siloed confidence (A) masks misalignment. Integration touchpoints force people to compare and expose the gaps. Option B is the reality check.',
  },
  {
    id: 26,
    domain: 'People',
    topic: 'Organizational Readiness',
    prompt:
      "A project manager is conducting a readiness assessment for a process improvement initiative. She finds that frontline employees are enthusiastic about the change, senior leaders have endorsed the initiative publicly, but middle managers express concerns about losing authority over their teams. The project manager needs to determine what this pattern of responses reveals about the organization's readiness. What does this mixed-level response pattern most likely suggest about the overall organizational readiness?",
    options: [
      {
        key: 'a',
        text: 'Readiness is primarily determined by senior leadership support, so the middle management concerns will naturally resolve once the initiative gains momentum through executive sponsorship.',
      },
      {
        key: 'b',
        text: 'Readiness varies across organizational layers, and the middle management layer represents a potential adoption bottleneck that must be addressed through targeted engagement.',
      },
      {
        key: 'c',
        text: 'Readiness should be measured by aggregating all responses into a single score, and the positive responses from two levels indicate the organization meets the threshold for proceeding with implementation.',
      },
      {
        key: 'd',
        text: 'Readiness is strong overall because both senior leadership endorsement and frontline enthusiasm together outweigh concerns raised by a single management layer.',
      },
    ],
    correct: 'b',
    explanation:
      "Middle-management resistance is real and won't self-resolve. They are the implementation layer — if they feel threatened, adoption stalls.",
  },
  {
    id: 27,
    domain: 'People',
    topic: 'Organizational Culture & Leadership',
    prompt:
      "In digital transformation leadership, what does a 'culture of psychological safety' primarily enable within a team?",
    options: [
      {
        key: 'a',
        text: 'Members gain unrestricted authority to approve budgets and select vendors for digital tools.',
      },
      {
        key: 'b',
        text: 'Members receive guaranteed job protection regardless of how the transformation performs over time.',
      },
      {
        key: 'c',
        text: 'Members follow standardized procedures that reduce variation across all technology rollouts.',
      },
      {
        key: 'd',
        text: 'Members feel secure to experiment, raise concerns, and admit mistakes as they adopt new technologies.',
      },
    ],
    correct: 'd',
    explanation:
      'Psychological safety enables experimentation, voicing concerns, and admitting errors — all critical during transformation when people are uncertain and learning.',
  },
  {
    id: 28,
    domain: 'People',
    topic: 'Professional Conduct & Ethics',
    prompt:
      'A project manager estimates that a task will take three weeks based on rough assumptions. A stakeholder asks for the number during a meeting, and the PM presents it as a firm commitment to appear confident. Later the estimate proves unrealistic. Which aspect of professional conduct did the PM most clearly compromise?',
    options: [
      {
        key: 'a',
        text: 'Truthfully conveying the level of uncertainty tied to preliminary figures shared with others.',
      },
      {
        key: 'b',
        text: 'Protecting confidential planning data from being shared too early with external stakeholders.',
      },
      {
        key: 'c',
        text: 'Maintaining fairness by giving all stakeholders equal access to the same estimation details.',
      },
      {
        key: 'd',
        text: 'Respecting cultural differences in how various stakeholders interpret schedule commitments and dates.',
      },
    ],
    correct: 'a',
    explanation:
      'The PM masked uncertainty and presented a rough estimate as a firm commitment. Transparency about uncertainty is a core professional duty.',
  },
  {
    id: 29,
    domain: 'People',
    topic: 'Resource & Role Management',
    prompt:
      'A project manager designs a new resource management approach for a hybrid team blending permanent members with rotating specialists. Turnover among specialists is high, and each departure leaves gaps in who covers which deliverables. The manager wants a sustainable structure that keeps accountability stable even as individuals cycle in and out. What should the manager build to achieve this?',
    options: [
      {
        key: 'a',
        text: 'A responsibility framework tied to defined roles rather than named individuals, so incoming specialists inherit clear duties.',
      },
      {
        key: 'b',
        text: 'A rotating RACI matrix updated each time a specialist leaves, listing every current person against each project task.',
      },
      {
        key: 'c',
        text: 'A charter section that assigns accountability to whichever senior member has the longest remaining tenure on the team.',
      },
      {
        key: 'd',
        text: 'A detailed competency register mapping each named specialist to their skills and past deliverable contributions.',
      },
    ],
    correct: 'a',
    explanation:
      'Role-based accountability decouples duties from individuals, making transitions seamless. In high-turnover environments, roles outlast people.',
  },
  {
    id: 30,
    domain: 'People',
    topic: 'Cultural Awareness & Stakeholder Engagement',
    prompt:
      "A project manager is onboarding a new team member from Thailand into a global agile team. During the first sprint planning, the new member agrees to all task estimates proposed by others and does not raise concerns, even when timelines seem aggressive. The project manager suspects the member may have reservations but is deferring to the group. What should the project manager do to gather the member's genuine input?",
    options: [
      {
        key: 'a',
        text: 'Send a team-wide anonymous survey after each sprint planning session to collect honest feedback on estimates.',
      },
      {
        key: 'b',
        text: 'Pair the new member with a senior teammate from a similar cultural background to encourage open discussion during planning.',
      },
      {
        key: 'c',
        text: 'Ask the member to share their concerns during the next sprint planning by calling on them individually in the meeting.',
      },
      {
        key: 'd',
        text: 'Follow up with the member in a private one-on-one conversation to ask about their comfort level with the estimates.',
      },
    ],
    correct: 'd',
    explanation:
      'A private one-on-one conversation creates a safe space where the member can express genuine concerns without social pressure — this aligns with collectivist cultural norms common in many Asian cultures.',
  },
  {
    id: 31,
    domain: 'People',
    topic: 'Stakeholder Register (Impact & Influence)',
    prompt:
      "Your project has been in progress for six months. Someone you haven't met approaches you and says he hasn't been engaged sufficiently, even though he believes his team is highly impacted by the change. He warns he may block the project. What will you do next?",
    options: [
      {
        key: 'a',
        text: 'Perform a stakeholder engagement assessment with the stakeholder',
      },
      {
        key: 'b',
        text: 'Add him to the stakeholder register, including his salary and interests',
      },
      {
        key: 'c',
        text: 'Add him to the stakeholder register, including his impact and influence',
      },
      {
        key: 'd',
        text: 'Raise a risk to project delivery due to the nature of his actions',
      },
    ],
    correct: 'c',
    explanation:
      "A previously unidentified stakeholder needs to be captured in the stakeholder register first, recording their impact and influence — that's the foundational step before any engagement assessment, risk escalation, or planning can happen. Salary isn't relevant stakeholder register data, and jumping to a risk or an assessment before the stakeholder is even properly registered skips the basic first step.",
  },
  {
    id: 32,
    domain: 'People',
    topic: 'Stakeholder Engagement Planning',
    prompt:
      "A project manager realizes stakeholder interests will conflict and decides to use a stakeholder engagement assessment matrix. It pinpoints an influential stakeholder who is resistant. The PM needs to align this stakeholder's expectations. What should the PM do?",
    options: [
      {
        key: 'a',
        text: 'Produce a stakeholder engagement plan',
      },
      {
        key: 'b',
        text: 'Convey the stakeholder engagement plan',
      },
      {
        key: 'c',
        text: 'Gain consensus on the objectives by meeting with all stakeholders',
      },
      {
        key: 'd',
        text: 'Ensure the stakeholder register is complete and updated',
      },
    ],
    correct: 'a',
    explanation:
      'With a resistant, influential stakeholder identified via the assessment matrix, the next step is to produce a stakeholder engagement plan — the document that defines the strategies to move that stakeholder toward the desired engagement level. Conveying a plan that does not yet exist is premature, a full consensus-building meeting with everyone skips targeted planning for this specific stakeholder, and the register is already complete at this stage (the assessment matrix was built from it).',
  },
  {
    id: 33,
    domain: 'People',
    topic: 'Facilitating Technical Conflict',
    prompt:
      'Two senior developers disagree over the technical architecture. The dispute is now hurting team morale and sprint velocity, and both viewpoints have merit. What should the project manager do FIRST?',
    options: [
      {
        key: 'a',
        text: 'Escalate to the functional manager and have one developer reassigned',
      },
      {
        key: 'b',
        text: 'Decide the architecture yourself and direct both to follow it now',
      },
      {
        key: 'c',
        text: 'Let the disagreement run its course, as skilled peers resolve it',
      },
      {
        key: 'd',
        text: 'Facilitate a joint discussion to combine both views into a solution',
      },
    ],
    correct: 'd',
    explanation:
      "With both viewpoints having genuine merit, facilitating a joint discussion to collaborate toward a combined solution is the appropriate first move — this is the collaborate/problem-solve conflict resolution mode PMI favors when a durable, high-quality outcome matters. Escalating to reassign a developer is heavy-handed and premature, unilaterally deciding the architecture yourself bypasses the team's expertise, and letting it run its course ignores the real damage already being done to morale and velocity.",
  },
  {
    id: 34,
    domain: 'People',
    topic: 'Expert Power',
    prompt:
      'A project manager operates in a weak matrix organisation and has no formal authority over team members. Team members consistently deliver because they trust her technical depth and judgment. Which type of power is she exercising?',
    options: [
      {
        key: 'a',
        text: 'Formal/positional power derived from her role title in the organisation',
      },
      {
        key: 'b',
        text: 'Coercive power backed by consequences for non-performance',
      },
      {
        key: 'c',
        text: 'Reward power tied to performance bonuses and recognition systems',
      },
      {
        key: 'd',
        text: 'Expert power built on knowledge, skill, and demonstrated competence',
      },
    ],
    correct: 'd',
    explanation:
      'Since she has no formal authority in a weak matrix and the team follows her because they trust her technical depth and judgment, this is expert power — influence earned through demonstrated knowledge and competence rather than positional authority, consequences, or rewards.',
  },
  {
    id: 35,
    domain: 'People',
    topic: 'Cultural Awareness in Stakeholder Engagement',
    prompt:
      "A project manager is onboarding a new team member from Thailand into a global Agile team. During the first sprint planning, the new member agrees to all task estimates proposed by others and does not raise concerns, even when timelines seem aggressive. What should the project manager do to gather the member's genuine input?",
    options: [
      {
        key: 'a',
        text: 'Send a team-wide anonymous survey after each sprint planning session to collect honest feedback on estimates',
      },
      {
        key: 'b',
        text: 'Pair the new member with a senior teammate from a similar cultural background to encourage open discussion during planning',
      },
      {
        key: 'c',
        text: 'Ask the member to share their concerns during the next sprint planning by calling on them individually in the meeting',
      },
      {
        key: 'd',
        text: 'Follow up with the member in a private one-on-one conversation to ask about their comfort level with the estimates',
      },
    ],
    correct: 'd',
    explanation:
      'A private one-on-one conversation creates a safe space where the member can express genuine concerns without social pressure — this aligns with collectivist cultural norms common in many Asian cultures where open disagreement in a group setting is avoided. A team-wide anonymous survey is less targeted and slower, pairing with a similar-background teammate does not guarantee openness during the actual planning meeting, and calling on the member individually in the group setting recreates the exact social pressure that caused the silence in the first place.',
  },
  {
    id: 36,
    domain: 'People',
    topic: 'Role-Based Accountability for High-Turnover Teams',
    prompt:
      'A project manager designs a new resource management approach for a hybrid team blending permanent members with rotating specialists. Turnover is high and each departure leaves gaps in accountability. What should the manager build to achieve stability?',
    options: [
      {
        key: 'a',
        text: 'A responsibility framework tied to defined roles rather than named individuals, so incoming specialists inherit clear duties',
      },
      {
        key: 'b',
        text: 'A rotating RACI matrix updated each time a specialist leaves, listing every current person against each project task',
      },
      {
        key: 'c',
        text: 'A charter section that assigns accountability to whichever senior member has the longest remaining tenure on the team',
      },
      {
        key: 'd',
        text: 'A detailed competency register mapping each named specialist to their skills and past deliverable contributions',
      },
    ],
    correct: 'a',
    explanation:
      'Role-based accountability decouples duties from specific individuals, so incoming specialists inherit clear responsibilities automatically when someone leaves — in a high-turnover environment, roles outlast people. A RACI matrix that must be manually rebuilt every departure does not scale and is prone to gaps, tying accountability to whoever has the longest tenure creates an arbitrary and unstable rule, and a competency register tied to named individuals suffers the same turnover problem it is meant to solve.',
  },
]
