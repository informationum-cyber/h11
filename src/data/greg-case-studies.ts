import type { PMPScenario } from './pmp-quiz-types'

export const gregCaseStudies: PMPScenario[] = [
  {
    id: 1,
    title: 'Digital Banking Transformation',
    scenarioText:
      'You are the project manager for a $4.5 million digital banking transformation initiative involving the implementation of a new AI-powered customer service platform. The project follows a hybrid approach, with predictive planning for regulatory milestones and infrastructure dependencies, while software development is managed through iterative delivery and a prioritized product backlog.\n\nThe current phase has a critical path of 90 days. The team is on day 83 and has already spent $4.2 million of the approved budget. Successful completion of this phase requires formal sign-off from the steering committee before the next $2 million in funding can be released.\n\nDuring a sprint review, a regulatory compliance officer, who was not involved in the initial planning workshops, identifies a new mandatory data retention requirement. The officer insists that the requirement must be implemented before the current phase can be approved.\n\nThe project sponsor disagrees, stating that the approved project charter does not include this requirement and that introducing additional work will jeopardize the delivery deadline and funding approval.\n\nThe product owner suggests removing two lower-priority customer experience features from the backlog to accommodate the compliance requirement. However, the sponsor argues that these features were part of the original business case and cannot be removed without authorization.\n\nMeanwhile, the development team reports that the new compliance requirement may require changes to the system architecture, potentially affecting previously completed work. Team velocity has started to decline because developers are uncertain about which deliverables should take priority.\n\nThe steering committee expects a status update within three business days.',
    questions: [
      {
        id: 1,
        domain: 'Process',
        topic: 'Change Management',
        prompt:
          'What should the project manager do FIRST to address the conflict between the regulatory compliance officer and the project sponsor?',
        options: [
          {
            key: 'a',
            text: 'Instruct the product owner to replace the lower-priority features with the mandatory compliance requirement.',
          },
          {
            key: 'b',
            text: 'Escalate the disagreement immediately to the steering committee for a final decision.',
          },
          {
            key: 'c',
            text: "Conduct an impact analysis to evaluate the requirement's effect on scope, schedule, cost, technical architecture, and regulatory obligations.",
          },
          {
            key: 'd',
            text: 'Ask the sponsor to approve an additional budget allocation so the original deliverables can remain unchanged.',
          },
        ],
        correct: 'c',
        explanation:
          'An impact analysis provides the facts needed for a decision. The project manager must understand the regulatory obligation and its consequences before proposing changes or escalating for approval. PMP principle: assess before acting.',
      },
      {
        id: 2,
        domain: 'People',
        topic: 'Stakeholder Engagement',
        prompt:
          'After completing the impact analysis, the project manager confirms that the regulatory requirement is mandatory and will affect the delivery timeline. The sponsor continues to oppose any changes to the approved scope.\n\nWhat should the project manager do NEXT?',
        options: [
          {
            key: 'a',
            text: 'Facilitate a discussion with the sponsor, regulatory officer, and product owner to review the findings and evaluate feasible delivery options.',
          },
          {
            key: 'b',
            text: 'Inform the sponsor that regulatory requirements automatically override all project governance decisions.',
          },
          {
            key: 'c',
            text: "Proceed with the regulatory changes because compliance is mandatory, regardless of the sponsor's objections.",
          },
          {
            key: 'd',
            text: 'Ask the development team to work overtime to accommodate the additional requirement without changing the schedule.',
          },
        ],
        correct: 'a',
        explanation:
          'Once the impact is understood, the project manager should facilitate collaboration among the decision-makers. Mandatory compliance must be addressed, but the delivery approach and trade-offs still require stakeholder engagement and appropriate authorization. PMP principle: collaborate before escalating unnecessarily.',
      },
      {
        id: 3,
        domain: 'Process',
        topic: 'Integrated Change Control',
        prompt:
          'The stakeholders agree that two lower-priority features can be deferred to a future phase. However, the proposed change will affect the approved schedule baseline and introduce additional architecture costs.\n\nWhat should the project manager do NEXT?',
        options: [
          {
            key: 'a',
            text: 'Allow the product owner to reorder the backlog and immediately instruct developers to implement the change.',
          },
          {
            key: 'b',
            text: 'Update the project management plan and notify the steering committee after implementation.',
          },
          {
            key: 'c',
            text: 'Ask the regulatory officer to authorize the revised budget and schedule.',
          },
          {
            key: 'd',
            text: "Submit a formal change request through the project's established change control process for evaluation and approval.",
          },
        ],
        correct: 'd',
        explanation:
          'Changes affecting approved baselines must follow the established change control process, even in a hybrid project. Backlog reprioritization alone does not authorize changes to the schedule or cost baseline. PMP principle: follow integrated change control.',
      },
      {
        id: 4,
        domain: 'People',
        topic: 'Team Leadership and Agile Delivery',
        prompt:
          "The change has been approved, but the development team's velocity continues to decline. Several developers are working on different assumptions about the priority of customer experience features versus regulatory functionality.\n\nWhat should the project manager do FIRST?",
        options: [
          {
            key: 'a',
            text: 'Replace the current sprint backlog with the regulatory tasks without consulting the team.',
          },
          {
            key: 'b',
            text: 'Facilitate a backlog refinement and planning discussion with the product owner and development team to establish shared priorities, clarify requirements, and agree on the delivery approach.',
          },
          {
            key: 'c',
            text: 'Request that the sponsor individually assign tasks to developers to eliminate confusion.',
          },
          {
            key: 'd',
            text: 'Postpone all agile ceremonies until the regulatory requirement has been completed.',
          },
        ],
        correct: 'b',
        explanation:
          'The immediate problem is lack of shared understanding. Collaborative refinement and planning restore clarity, alignment, and team ownership rather than relying on unilateral task assignments. PMP principle: enable the team through collaboration.',
      },
      {
        id: 5,
        domain: 'Business Environment',
        topic: 'Governance and Phase Closure',
        prompt:
          'The development team completes the mandatory compliance functionality, but the project is now approaching its revised phase deadline. The sponsor wants to declare the phase complete immediately to secure the next funding allocation.\n\nHowever, the regulatory officer has not yet confirmed that the implemented solution meets the required compliance criteria.\n\nWhat should the project manager do NEXT?',
        options: [
          {
            key: 'a',
            text: 'Close the phase because the sponsor has confirmed that all business objectives have been met.',
          },
          {
            key: 'b',
            text: 'Request the next funding allocation and complete the compliance verification during the following phase.',
          },
          {
            key: 'c',
            text: 'Coordinate formal validation against the regulatory acceptance criteria and obtain the required approvals before requesting phase closure.',
          },
          {
            key: 'd',
            text: 'Ask the product owner to confirm that the user stories are complete and treat this as sufficient authorization to close the phase.',
          },
        ],
        correct: 'c',
        explanation:
          'Completing development is not the same as satisfying acceptance criteria. Required compliance validation and formal approvals must be obtained before the phase can legitimately be closed and its funding gate passed. PMP principle: validate before obtaining formal acceptance.',
      },
    ],
  },
  {
    id: 2,
    title: 'Digital Healthcare Platform',
    scenarioText:
      "You are the project manager for a team developing a new digital healthcare platform that allows patients to book appointments, access medical records, and make online payments.\n\nThe team consists of business analysts, developers, testers, a UX designer, and a product owner. The project follows an Agile approach, with work organized into two-week iterations and prioritized through a product backlog.\n\nThe product backlog initially contains 320 story points. The team has completed three iterations, achieving velocities of 24, 30, and 27 story points, respectively.\n\nDuring the fourth iteration, a key stakeholder requests a significant change to the patient appointment booking feature, which is scheduled for release in four days. The proposed change introduces additional functionality and could affect other features and downstream testing activities. The stakeholder insists that the change is urgent, but the product owner is concerned about its impact on the sprint goal.\n\nAt the same time, the development team identifies a blocked user story involving integration with an external payment provider. The team cannot proceed because the vendor has not supplied the necessary API specifications. Three additional stories depend on this integration, putting the sprint goal at risk.\n\nThe developers have proposed different technical approaches to overcome the dependency, but they cannot agree on which solution to pursue. Meanwhile, testers complain that developers are handing over incomplete functionality, and developers argue that testing expectations were never clearly defined.\n\nThese disagreements have begun affecting team morale and productivity.\n\nThe project sponsor expects the platform to be delivered on schedule and has asked the project manager to address the team's challenges without compromising product quality.",
    questions: [
      {
        id: 1,
        domain: 'Process',
        topic: 'Agile Velocity and Forecasting',
        prompt:
          "Based on the team's average velocity, approximately how many additional iterations will be required to complete the remaining product backlog?",
        options: [
          { key: 'a', text: '12 additional iterations.' },
          { key: 'b', text: '9 additional iterations.' },
          { key: 'c', text: '10 additional iterations.' },
          { key: 'd', text: '8 additional iterations.' },
        ],
        correct: 'b',
        explanation:
          'Total completed = 24 + 30 + 27 = 81 points. Average velocity = 81 ÷ 3 = 27 points per iteration. Remaining work = 320 − 81 = 239 points. Iterations needed = 239 ÷ 27 = 8.85, rounded up to 9 full iterations. PMP principle: velocity-based forecasting — estimate remaining duration using average completed work.',
      },
      {
        id: 2,
        domain: 'People',
        topic: 'Self-Managing Teams',
        prompt:
          'The developers disagree about the most appropriate technical approach to address the blocked payment integration story.\n\nWho should be responsible for determining the technical solution?',
        options: [
          {
            key: 'a',
            text: 'The project manager, because the issue threatens the sprint goal.',
          },
          {
            key: 'b',
            text: 'The product owner, because the story belongs to the product backlog.',
          },
          {
            key: 'c',
            text: 'The development team, because it is responsible for determining how the work is performed.',
          },
          {
            key: 'd',
            text: 'The project sponsor, because the delay may affect the delivery timeline.',
          },
        ],
        correct: 'c',
        explanation:
          'In Agile, developers are self-managing and decide how to perform the technical work. The project manager facilitates collaboration and removes obstacles but should not dictate the technical solution. PMP principle: self-management and team empowerment.',
      },
      {
        id: 3,
        domain: 'People',
        topic: 'Impediment Management',
        prompt:
          'The payment integration story remains blocked because the external vendor has not provided the required API specifications. Several dependent stories are also at risk.\n\nWhat should the project manager do NEXT?',
        options: [
          {
            key: 'a',
            text: 'Facilitate the removal of the impediment by coordinating with the vendor and supporting the development team.',
          },
          {
            key: 'b',
            text: 'Move the blocked story and its dependent stories into the next iteration.',
          },
          {
            key: 'c',
            text: 'Direct the developers to implement a temporary solution without the API documentation.',
          },
          {
            key: 'd',
            text: 'Immediately recommend replacing the vendor to the project sponsor.',
          },
        ],
        correct: 'a',
        explanation:
          'The project manager should actively support resolution of external dependencies, including coordinating with the vendor. Postponing the work or changing vendors prematurely does not address the underlying impediment effectively. PMP principle: servant leadership and impediment removal.',
      },
      {
        id: 4,
        domain: 'Process',
        topic: 'Managing Changing Requirements',
        prompt:
          'A stakeholder requests significant changes to the appointment booking feature four days before its scheduled release. The changes could affect several dependent features and the sprint goal.\n\nWhat should the project manager do FIRST?',
        options: [
          {
            key: 'a',
            text: 'Instruct the development team to implement the requested changes because stakeholder satisfaction is the highest priority.',
          },
          {
            key: 'b',
            text: 'Reject the change because it was submitted too close to the release date.',
          },
          {
            key: 'c',
            text: 'Escalate the request to the sponsor for authorization before discussing it with the team.',
          },
          {
            key: 'd',
            text: 'Facilitate a discussion with the product owner and team to assess the impact, clarify priorities, and determine how the request should be managed.',
          },
        ],
        correct: 'd',
        explanation:
          "The project manager should help the product owner and team understand the change's effects on delivery and dependencies. The product owner manages backlog ordering; a stakeholder request does not automatically override the sprint goal. PMP principle: Agile change management and value-based prioritization.",
      },
      {
        id: 5,
        domain: 'People',
        topic: 'Conflict Resolution and Team Performance',
        prompt:
          'Developers and testers are experiencing frequent disagreements about incomplete functionality, unclear acceptance criteria, and responsibility for defects. These conflicts are beginning to affect team morale.\n\nWhat should the project manager do FIRST?',
        options: [
          {
            key: 'a',
            text: 'Assign responsibility for defects to the developers because they are accountable for writing the code.',
          },
          {
            key: 'b',
            text: 'Facilitate a collaborative discussion to identify the causes of conflict, clarify expectations, and establish shared working agreements.',
          },
          {
            key: 'c',
            text: 'Escalate the disagreements to the functional managers and request that they resolve the issues.',
          },
          {
            key: 'd',
            text: 'Introduce additional reporting requirements to monitor the performance of each team member.',
          },
        ],
        correct: 'b',
        explanation:
          'The underlying problem concerns unclear expectations, shared responsibilities, and team communication. Collaborative conflict resolution and clearer acceptance criteria are preferable to blame, excessive oversight, or immediate escalation. PMP principle: conflict resolution, servant leadership, and team effectiveness.',
      },
    ],
  },
  {
    id: 3,
    title: 'Financial Data Migration Project',
    scenarioText:
      'A regional financial services firm is migrating legacy transaction data from five separate systems into a unified enterprise data warehouse. The project has a budget of £750,000 and a 10-month schedule. The team includes a Project Manager, Data Lead, Systems Architect, QA Manager, and business stakeholders from operations and risk.\n\nAt the end of Month 5, the project status is:\nPlanned Value (PV): £375,000\nEarned Value (EV): £270,000\nActual Cost (AC): £345,000\n\nData reconciliation testing has revealed missing transaction records from two legacy systems, totalling approximately 45,000 records. This will require additional validation cycles and developer effort to trace and recover the missing data.\n\nAdditionally, the Risk team has requested that the data warehouse include real-time compliance reporting features not originally in scope. These features are critical for regulatory reporting but would require an additional £60,000 and 6 weeks of effort.',
    questions: [
      {
        id: 1,
        domain: 'Process',
        topic: 'Project Performance Diagnosis',
        prompt:
          'Based on the scenario, what is the most significant challenge currently facing the project?',
        options: [
          {
            key: 'a',
            text: 'Risk team requests for compliance reporting features.',
          },
          {
            key: 'b',
            text: 'Missing transaction records requiring additional validation.',
          },
          { key: 'c', text: 'Unfavourable cost and schedule performance.' },
          {
            key: 'd',
            text: 'The need to recover data from two legacy systems.',
          },
        ],
        correct: 'c',
        explanation:
          'While the data issues and the compliance feature request are real problems, the numbers show EV below PV and AC above EV — unfavorable cost and schedule performance — which is the issue with the broadest impact on overall project health.',
      },
      {
        id: 2,
        domain: 'Process',
        topic: 'Earned Value Management',
        prompt:
          "Based on the information provided, what is the project's Schedule Performance Index (SPI)?",
        options: [
          { key: 'a', text: '0.72' },
          { key: 'b', text: '0.92' },
          { key: 'c', text: '1.27' },
          { key: 'd', text: '1.38' },
        ],
        correct: 'a',
        explanation:
          'SPI = EV ÷ PV = £270,000 ÷ £375,000 = 0.72. The project is running about 28% behind schedule.',
      },
      {
        id: 3,
        domain: 'People',
        topic: 'Technical Ownership',
        prompt:
          'The Data Lead has reported the missing transaction records to the PM. Who should take the lead in determining the root cause and developing a recovery plan?',
        options: [
          { key: 'a', text: 'Project Manager' },
          { key: 'b', text: 'Systems Architect' },
          { key: 'c', text: 'Data Lead' },
          { key: 'd', text: 'QA Manager' },
        ],
        correct: 'c',
        explanation:
          'Data recovery is a technical domain issue that the Data Lead owns the expertise for. The PM coordinates and removes obstacles, but the Data Lead drives the investigation and recovery plan.',
      },
      {
        id: 4,
        domain: 'Process',
        topic: 'Integrated Change Control',
        prompt:
          'The PM determines that the compliance reporting request will impact scope, cost, and timeline. What should the PM do next?',
        options: [
          {
            key: 'a',
            text: 'Reject the request because testing is already underway.',
          },
          {
            key: 'b',
            text: 'Ask the Risk team to defer the feature request until Phase 2.',
          },
          {
            key: 'c',
            text: 'Perform impact analysis and submit the request to the Change Control Board.',
          },
          {
            key: 'd',
            text: 'Allocate additional budget and resources without stakeholder approval.',
          },
        ],
        correct: 'c',
        explanation:
          'This is formal change control: analyze the impact, present the options, and let the Change Control Board decide — not reject arbitrarily, defer without analysis, or approve unilaterally.',
      },
      {
        id: 5,
        domain: 'Process',
        topic: 'Corrective Action Before Escalation',
        prompt:
          'The project is running behind schedule and over budget. Before escalating to the sponsor, the PM should first:',
        options: [
          { key: 'a', text: 'Request additional budget from finance.' },
          {
            key: 'b',
            text: 'Develop corrective action options to get the project back on track.',
          },
          {
            key: 'c',
            text: 'Ask the team to work overtime to recover the schedule.',
          },
          {
            key: 'd',
            text: 'Reduce the project scope to align with current budget and timeline.',
          },
        ],
        correct: 'b',
        explanation:
          'PMs own diagnosing the problem and proposing solution options — such as fast-tracking, crashing, reducing scope, or extending the timeline — before escalating, rather than escalating with just a problem and no options, or jumping to one fix (overtime, budget, scope cut) without analysis.',
      },
    ],
  },
  {
    id: 4,
    title: 'COTS Customer Support Platform',
    scenarioText:
      "A company is implementing a commercial off-the-shelf (COTS) customer support platform that will be configured and white-labeled under the company's brand. The project has a $1,900,000 budget and a nine-month schedule. An external vendor will provide the software, configuration services, and technical support under a fixed-price contract.\n\nDuring user acceptance testing, the team discovers a missing capability that the reporting department considers essential. The functional manager says this was discussed, but you cannot find it in the approved scope baseline. The project sponsor has asked the project manager to maintain the original launch date while keeping the project within the approved budget.\n\nThe customer service manager is concerned about the impact the system will have on his staff. He is a low-influence and a high-impact on your stakeholder matrix.",
    questions: [
      {
        id: 1,
        domain: 'Business Environment',
        topic: 'Fixed-Price Contract Management',
        prompt:
          'The vendor states that the missing reporting capability requires additional work outside the agreed fixed-price contract. What should the project manager do FIRST?',
        options: [
          {
            key: 'a',
            text: 'Ask the vendor to absorb the extra work at no cost since the contract is fixed-price.',
          },
          {
            key: 'b',
            text: "Review the contract and statement of work (SOW) to determine whether the capability is within the vendor's agreed scope.",
          },
          {
            key: 'c',
            text: 'Tell the vendor they are responsible regardless of what the contract says.',
          },
          {
            key: 'd',
            text: 'Escalate to procurement to terminate the vendor for non-performance.',
          },
        ],
        correct: 'b',
        explanation:
          'A fixed-price contract fixes the price for the agreed scope, not for whatever work comes up later — the PM has to check the SOW itself to see whether this capability was actually included before deciding anything. Pressuring the vendor to eat the cost, declaring them responsible outright, or moving to terminate are all reactions that skip reading the contract first.',
      },
      {
        id: 2,
        domain: 'People',
        topic: 'Stakeholder Impact and Change Management',
        prompt:
          'The customer service manager — a low-influence, high-impact stakeholder — is concerned about how the new platform will affect his staff. What should the project manager do?',
        options: [
          {
            key: 'a',
            text: 'Extend the system testing cycle until the customer service manager feels comfortable.',
          },
          {
            key: 'b',
            text: 'Add extra features to the platform to ease staff adoption.',
          },
          {
            key: 'c',
            text: 'Develop and deliver user training to prepare his staff for the new system.',
          },
          {
            key: 'd',
            text: 'Request additional budget to hire temporary staff to offset the transition.',
          },
        ],
        correct: 'c',
        explanation:
          "A high-impact stakeholder's concern about staff readiness is addressed through user training and change management, not by stretching testing for comfort, growing scope with unrequested features, or throwing budget at temporary hires — none of which actually prepares his staff to use the system.",
      },
      {
        id: 3,
        domain: 'Process',
        topic: 'Scope Baseline Verification',
        prompt:
          'The functional manager insists the missing reporting capability was discussed during planning, but the project manager cannot locate it anywhere in the approved scope baseline. What should the project manager do FIRST?',
        options: [
          {
            key: 'a',
            text: "Add the capability immediately on the functional manager's word.",
          },
          {
            key: 'b',
            text: 'Review the requirements documentation and traceability matrix to verify whether the capability was ever formally approved.',
          },
          {
            key: 'c',
            text: 'Deny the request outright because it cannot be found in any document.',
          },
          {
            key: 'd',
            text: 'Ask the sponsor to decide without first checking the project records.',
          },
        ],
        correct: 'b',
        explanation:
          "A verbal claim that something 'was discussed' isn't the same as approved scope — the PM needs to check the requirements documentation and traceability matrix to establish the facts before deciding whether this is a missed requirement, a new request, or simply not in scope.",
      },
      {
        id: 4,
        domain: 'Process',
        topic: 'Integrated Change Control and Trade-offs',
        prompt:
          'The project manager confirms the reporting capability is new scope that will require vendor rework, additional cost, and schedule time. The sponsor insists on keeping both the original launch date and the approved budget unchanged. What should the project manager do NEXT?',
        options: [
          {
            key: 'a',
            text: 'Tell the sponsor this is impossible and refuse to proceed further.',
          },
          {
            key: 'b',
            text: 'Perform an impact analysis and present trade-off options (schedule, cost, or scope) through the change control process for a decision.',
          },
          {
            key: 'c',
            text: 'Quietly absorb the cost using management reserve without informing the sponsor.',
          },
          {
            key: 'd',
            text: 'Instruct the vendor to complete the work for free since the capability is "essential."',
          },
        ],
        correct: 'b',
        explanation:
          "Keeping scope, schedule, and budget all fixed at once usually isn't possible once new scope is confirmed — the PM's job is to lay out the real trade-offs and let the sponsor decide through change control, not refuse outright, spend reserve without telling anyone, or pressure the vendor into free work.",
      },
    ],
  },
  {
    id: 5,
    title: 'Warehouse Construction Project',
    scenarioText:
      "You are the project manager overseeing the construction of a new distribution warehouse. You lead a medium-sized, cross-functional team responsible for obtaining regulatory approvals and permits, architectural design, construction, plumbing, and electrical installations.\n\nConstruction is currently underway, and the installation of the building's structural framework and wall sheeting is a critical schedule dependency for several downstream activities.\n\nApproximately halfway through the project, the wall installation subcontractor informs you that their team is experiencing resource constraints and will arrive three weeks later than originally scheduled.\n\nThe procurement manager identifies an alternative subcontractor who may be able to begin work sooner. However, the equipment proposed by this supplier has not yet been verified against the project's approved technical specifications.\n\nThe project has incurred $4 million of its approved $9 million budget. Materials already delivered to the construction site are being stored at a cost of $300 per day.\n\nA review of the project schedule indicates that several activities scheduled before and after the wall installation can potentially be performed concurrently, although some adjustments to the sequencing of work may be necessary.\n\nThe project sponsor is concerned about the possible schedule delays, increased costs, and consequences of engaging an unverified supplier.",
    questions: [
      {
        id: 1,
        domain: 'Process',
        topic: 'Schedule Management',
        prompt:
          'The project manager identifies several activities that could be performed concurrently to recover the three-week delay.\n\nWhat should the project manager do NEXT?',
        options: [
          { key: 'a', text: 'Begin overlapping the selected activities.' },
          { key: 'b', text: 'Assess the risks of overlapping activities.' },
          { key: 'c', text: 'Assign more resources to delayed activities.' },
          { key: 'd', text: 'Remove dependencies from the project schedule.' },
        ],
        correct: 'b',
        explanation:
          'Assessing the risks of overlapping activities should precede fast tracking. Parallel work can introduce rework and coordination risks.',
      },
      {
        id: 2,
        domain: 'Business Environment',
        topic: 'Procurement Management',
        prompt:
          'The procurement manager recommends an alternative subcontractor, but the proposed equipment has not been verified.\n\nWhat should the project manager do to determine whether the alternative is suitable?',
        options: [
          { key: 'a', text: 'Compare its pricing with the original supplier.' },
          { key: 'b', text: 'Review its ability to begin work immediately.' },
          { key: 'c', text: 'Examine its experience with similar projects.' },
          { key: 'd', text: 'Verify its equipment against project specifications.' },
        ],
        correct: 'd',
        explanation:
          'The alternative equipment must meet the approved technical specifications before the supplier can be considered suitable.',
      },
      {
        id: 3,
        domain: 'People',
        topic: 'Responsibility and Accountability',
        prompt:
          'Wall sheeting is a critical-path activity, and the subcontractor has reported a three-week delay in arriving at the construction site.\n\nWho is directly responsible for the reported delay?',
        options: [
          { key: 'a', text: 'The project manager.' },
          { key: 'b', text: 'The project sponsor.' },
          { key: 'c', text: 'The procurement manager.' },
          { key: 'd', text: 'The wall subcontractor.' },
        ],
        correct: 'd',
        explanation:
          'The wall subcontractor is directly responsible for the reported late arrival. The project manager remains accountable for managing its overall project impact.',
      },
      {
        id: 4,
        domain: 'Process',
        topic: 'Schedule Compression',
        prompt:
          'To recover the delayed schedule, the project manager proposes performing activities in parallel that were originally planned in sequence.\n\nWhich schedule compression technique is being considered?',
        options: [
          { key: 'a', text: 'Resource leveling.' },
          { key: 'b', text: 'Schedule crashing.' },
          { key: 'c', text: 'Fast tracking.' },
          { key: 'd', text: 'Resource smoothing.' },
        ],
        correct: 'c',
        explanation:
          'Fast tracking overlaps activities originally planned in sequence. Crashing instead adds resources to shorten duration.',
      },
    ],
  },
]
