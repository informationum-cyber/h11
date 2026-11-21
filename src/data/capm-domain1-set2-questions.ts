import type { PMPQuestion } from './pmp-quiz-types'

const DOMAIN = 'Project Management Fundamentals and Core Concepts'

export const capmDomain1Set2Questions: PMPQuestion[] = [
  {
    id: 1,
    domain: DOMAIN,
    topic: 'Invensis Learning Q1',
    prompt: 'Which of the Following is the First Step in the Project Management Process?',
    options: [
      { key: 'a', text: 'Planning' },
      { key: 'b', text: 'Initiating' },
      { key: 'c', text: 'Executing' },
      { key: 'd', text: 'Monitoring and Controlling' },
    ],
    correct: 'b',
    explanation:
      'Initiating comes first. In this process group, the project is formally authorized, the project charter is developed, and stakeholders are identified.',
  },
  {
    id: 2,
    domain: DOMAIN,
    topic: 'Invensis Learning Q2',
    prompt: 'What is the Primary Purpose of the Project Charter?',
    options: [
      { key: 'a', text: 'To detail the project schedule' },
      { key: 'b', text: 'To formally authorize the project' },
      { key: 'c', text: 'To assign tasks to team members' },
      { key: 'd', text: 'To estimate project costs' },
    ],
    correct: 'b',
    explanation:
      'The project charter formally authorizes the project and gives the project manager the authority to apply organizational resources to project activities.',
  },
  {
    id: 3,
    domain: DOMAIN,
    topic: 'Invensis Learning Q3 (also PMI official CAPM sample)',
    prompt:
      'The Project Manager Has Drafted the Project Charter, but the Sponsor Says Two Items Are Missing for Approval. Which Two Should Be Included? (Choose Two)',
    options: [
      { key: 'a', text: 'High-level requirements' },
      { key: 'b', text: 'Stakeholder register' },
      { key: 'c', text: 'Assigned team members' },
      { key: 'd', text: 'High-level risks' },
      { key: 'e', text: 'Assumption log' },
    ],
    correct: ['a', 'd'],
    explanation:
      'The project charter documents high-level requirements and overall project risk, along with objectives, milestones, and the assigned project manager. The stakeholder register and assumption log are separate project documents, and detailed team assignments come later.',
  },
  {
    id: 4,
    domain: DOMAIN,
    topic: 'Invensis Learning Q4',
    prompt: 'Which Process Group Involves Tracking, Reviewing, and Regulating the Progress and Performance of a Project?',
    options: [
      { key: 'a', text: 'Executing' },
      { key: 'b', text: 'Monitoring and Controlling' },
      { key: 'c', text: 'Planning' },
      { key: 'd', text: 'Initiating' },
    ],
    correct: 'b',
    explanation:
      'The Monitoring and Controlling process group tracks, reviews, and regulates progress and performance, identifies needed changes, and starts those changes so the project stays on track.',
  },
  {
    id: 5,
    domain: DOMAIN,
    topic: 'Invensis Learning Q5',
    prompt: 'Which Process is Responsible for Formally Closing a Project or Phase?',
    options: [
      { key: 'a', text: 'Close Project or Phase' },
      { key: 'b', text: 'Control Scope' },
      { key: 'c', text: 'Perform Integrated Change Control' },
      { key: 'd', text: 'Control Procurements' },
    ],
    correct: 'a',
    explanation:
      'Close Project or Phase finalizes all activities, transfers the final deliverables, archives project information, and captures lessons learned for future projects.',
  },
  {
    id: 6,
    domain: DOMAIN,
    topic: 'Invensis Learning Q6 (also PMI official CAPM sample)',
    prompt: 'Which Technique Helps Identify Roles and Determine Levels of Responsibility for Each Task?',
    options: [
      { key: 'a', text: 'Capability table' },
      { key: 'b', text: 'Dependency and responsibility tracker' },
      { key: 'c', text: 'Responsible, Accountable, Consulted, and Informed (RACI) matrix' },
      { key: 'd', text: 'Affinity diagram' },
    ],
    correct: 'c',
    explanation:
      'A RACI matrix shows who is Responsible, Accountable, Consulted, and Informed for each task or deliverable. It removes confusion about ownership, and each task should have exactly one Accountable person.',
  },
  {
    id: 7,
    domain: DOMAIN,
    topic: 'Invensis Learning Q7',
    prompt:
      'The Process of Identifying the Skills and Expertise Needed for the Project, and Defining How Resources Will Be Managed, is Called:',
    options: [
      { key: 'a', text: 'Plan Resource Management' },
      { key: 'b', text: 'Manage Team' },
      { key: 'c', text: 'Acquire Resources' },
      { key: 'd', text: 'Develop Team' },
    ],
    correct: 'a',
    explanation:
      'Plan Resource Management defines how team and physical resources will be estimated, acquired, managed, and used. Its output documents roles, required competencies, and the staffing approach. Acquire Resources, Develop Team, and Manage Team happen later, during execution.',
  },
  {
    id: 8,
    domain: DOMAIN,
    topic: 'Invensis Learning Q8',
    prompt: 'What is the Main Purpose of the Resource Management Plan?',
    options: [
      { key: 'a', text: 'To identify risks' },
      { key: 'b', text: 'To allocate and manage project resources' },
      { key: 'c', text: 'To define the project scope' },
      { key: 'd', text: 'To develop the project schedule' },
    ],
    correct: 'b',
    explanation:
      'The resource management plan describes how team and physical resources will be categorized, allocated, managed, and released throughout the project.',
  },
  {
    id: 9,
    domain: DOMAIN,
    topic: 'Invensis Learning Q9',
    prompt: 'Which of the Following is a Technique Used to Identify Risks in a Project?',
    options: [
      { key: 'a', text: 'SWOT analysis' },
      { key: 'b', text: 'Monte Carlo simulation' },
      { key: 'c', text: 'Control chart' },
      { key: 'd', text: 'Pareto chart' },
    ],
    correct: 'a',
    explanation:
      'SWOT analysis (Strengths, Weaknesses, Opportunities, and Threats) widens the range of risks the team identifies by looking at the project from several angles. Monte Carlo simulation is a quantitative analysis tool, and control and Pareto charts are quality tools.',
  },
  {
    id: 10,
    domain: DOMAIN,
    topic: 'Invensis Learning Q10',
    prompt:
      'Which Risk Management Process Prioritizes Risks for Further Analysis or Action by Assessing Their Probability and Impact?',
    options: [
      { key: 'a', text: 'Identify Risks' },
      { key: 'b', text: 'Plan Risk Responses' },
      { key: 'c', text: 'Perform Qualitative Risk Analysis' },
      { key: 'd', text: 'Monitor Risks' },
    ],
    correct: 'c',
    explanation:
      "Perform Qualitative Risk Analysis assesses each risk's probability of occurrence and potential impact on objectives. The result is a prioritized list that shows which risks need more attention.",
  },
  {
    id: 11,
    domain: DOMAIN,
    topic: 'Invensis Learning Q11',
    prompt: 'Which Tool Rates Identified Risks by Their Likelihood and Impact on Project Objectives?',
    options: [
      { key: 'a', text: 'Brainstorming' },
      { key: 'b', text: 'Probability and impact matrix' },
      { key: 'c', text: 'SWOT analysis' },
      { key: 'd', text: 'Monte Carlo simulation' },
    ],
    correct: 'b',
    explanation:
      "A probability and impact matrix, often called a risk assessment matrix, plots each risk's likelihood against its impact. Teams use it to rank risks as high, medium, or low priority during qualitative analysis.",
  },
  {
    id: 12,
    domain: DOMAIN,
    topic: 'Invensis Learning Q12',
    prompt:
      'A Project Manager is Developing a Risk Response Plan. A High-Impact Risk With a Low Probability of Occurrence Has Been Identified. Which Risk Response Strategy Would Be Most Appropriate?',
    options: [
      { key: 'a', text: 'Risk avoidance' },
      { key: 'b', text: 'Risk transfer' },
      { key: 'c', text: 'Risk mitigation' },
      { key: 'd', text: 'Risk acceptance' },
    ],
    correct: 'b',
    explanation:
      'Risk transfer shifts ownership of a threat and its financial impact to a third party, for example through insurance, warranties, or outsourcing. It suits high-impact, low-probability threats because the cost of transfer is usually small compared with the potential loss. Transfer moves responsibility for the risk; it does not eliminate it.',
  },
  {
    id: 13,
    domain: DOMAIN,
    topic: 'Invensis Learning Q13',
    prompt: 'What is the Purpose of the Risk Register?',
    options: [
      { key: 'a', text: 'To identify risks' },
      { key: 'b', text: 'To document and track identified risks' },
      { key: 'c', text: 'To assign risk owners' },
      { key: 'd', text: 'To prioritize risks' },
    ],
    correct: 'b',
    explanation:
      'The risk register records each identified risk along with its assessment, owner, potential impact, and planned response, and it is updated throughout the project.',
  },
  {
    id: 14,
    domain: DOMAIN,
    topic: 'Invensis Learning Q14',
    prompt: 'Which Quality Management Tool is Used to Identify Potential Causes of a Problem?',
    options: [
      { key: 'a', text: 'Flowchart' },
      { key: 'b', text: 'Cause-and-effect diagram (fishbone diagram)' },
      { key: 'c', text: 'Control chart' },
      { key: 'd', text: 'Pareto chart' },
    ],
    correct: 'b',
    explanation:
      'A cause-and-effect diagram, also called a fishbone or Ishikawa diagram, helps teams brainstorm possible root causes of a problem under categories such as people, processes, equipment, materials, environment, and measurement. Fixing root causes keeps the problem from recurring.',
  },
  {
    id: 15,
    domain: DOMAIN,
    topic: 'Invensis Learning Q15',
    prompt:
      'The Process of Ensuring Timely and Appropriate Collection, Distribution, and Management of Project Information is Called:',
    options: [
      { key: 'a', text: 'Manage Communications' },
      { key: 'b', text: 'Plan Communications Management' },
      { key: 'c', text: 'Manage Stakeholder Engagement' },
      { key: 'd', text: 'Monitor Communications' },
    ],
    correct: 'a',
    explanation:
      'Manage Communications covers the collection, creation, distribution, storage, and retrieval of project information so stakeholders get the right information at the right time. Older PMBOK Guide editions called this activity Information Distribution, so you may still see that name in some prep materials.',
  },
  {
    id: 16,
    domain: DOMAIN,
    topic: 'Invensis Learning Q16',
    prompt: 'Which Document Serves as a Formal Record of Project Meeting Discussions and Decisions?',
    options: [
      { key: 'a', text: 'Project management plan' },
      { key: 'b', text: 'Meeting minutes' },
      { key: 'c', text: 'Risk register' },
      { key: 'd', text: 'Stakeholder register' },
    ],
    correct: 'b',
    explanation: 'Meeting minutes formally record the decisions, action items, owners, and key discussion points from project meetings.',
  },
  {
    id: 17,
    domain: DOMAIN,
    topic: 'Invensis Learning Q17',
    prompt: 'Which Skill is Most Important for Effective Stakeholder Communication in a Project?',
    options: [
      { key: 'a', text: 'Technical writing' },
      { key: 'b', text: 'Active listening' },
      { key: 'c', text: 'Risk assessment' },
      { key: 'd', text: 'Cost estimation' },
    ],
    correct: 'b',
    explanation:
      "Active listening helps the project manager understand stakeholders' needs, concerns, and feedback. That understanding builds trust and makes expectations easier to manage.",
  },
  {
    id: 18,
    domain: DOMAIN,
    topic: 'Invensis Learning Q18',
    prompt: 'What is the Primary Focus of Quality Assurance (Manage Quality) in Project Management?',
    options: [
      { key: 'a', text: 'Inspecting finished deliverables for defects' },
      { key: 'b', text: 'Making sure quality processes are followed so deliverables will meet requirements' },
      { key: 'c', text: 'Developing the project schedule' },
      { key: 'd', text: 'Managing project costs' },
    ],
    correct: 'b',
    explanation:
      'Quality assurance happens in the Manage Quality process. It looks at the processes used to create deliverables and uses audits and process analysis to build confidence that quality requirements will be met. Inspecting finished deliverables for defects belongs to Control Quality.',
  },
  {
    id: 19,
    domain: DOMAIN,
    topic: 'Invensis Learning Q19',
    prompt: 'Which Process Monitors and Records the Results of Quality Activities to Assess Performance and Recommend Necessary Changes?',
    options: [
      { key: 'a', text: 'Quality assurance' },
      { key: 'b', text: 'Control Quality' },
      { key: 'c', text: 'Manage Quality' },
      { key: 'd', text: 'Plan Quality Management' },
    ],
    correct: 'b',
    explanation:
      'Control Quality monitors and records the results of quality activities, verifies that deliverables meet requirements, and recommends changes where performance falls short.',
  },
  {
    id: 20,
    domain: DOMAIN,
    topic: 'Invensis Learning Q20',
    prompt: 'Which of the Following is NOT a Project Quality Management Process?',
    options: [
      { key: 'a', text: 'Plan Quality Management' },
      { key: 'b', text: 'Manage Quality' },
      { key: 'c', text: 'Control Quality' },
      { key: 'd', text: 'Validate Scope' },
    ],
    correct: 'd',
    explanation:
      'Validate Scope belongs to Project Scope Management. The three Project Quality Management processes are Plan Quality Management, Manage Quality, and Control Quality.',
  },
  {
    id: 21,
    domain: DOMAIN,
    topic: 'Invensis Learning Q21',
    prompt: 'Which Process Involves Obtaining Seller Responses, Selecting a Seller, and Awarding a Contract?',
    options: [
      { key: 'a', text: 'Plan Procurement Management' },
      { key: 'b', text: 'Conduct Procurements' },
      { key: 'c', text: 'Control Procurements' },
      { key: 'd', text: 'Acquire Resources' },
    ],
    correct: 'b',
    explanation:
      'Conduct Procurements is where the team obtains responses from vendors, evaluates them against the selection criteria, and awards the contract to the chosen seller.',
  },
  {
    id: 22,
    domain: DOMAIN,
    topic: 'Invensis Learning Q22',
    prompt: 'What is a Key Characteristic of a Fixed-Price Contract?',
    options: [
      { key: 'a', text: 'The buyer bears most of the cost-related risk' },
      { key: 'b', text: 'The seller bears most of the cost-related risk' },
      { key: 'c', text: 'The contract allows unlimited budget increases' },
      { key: 'd', text: 'The contract can be modified easily at any time' },
    ],
    correct: 'b',
    explanation:
      "In a fixed-price contract, the seller agrees to deliver the defined work for a set price. If costs run over, the seller absorbs the difference, so the buyer's cost risk is low as long as the scope is well defined.",
  },
  {
    id: 23,
    domain: DOMAIN,
    topic: 'CertSafari Q1 · Subdomain 1.5',
    prompt: 'What is the primary purpose of a focus group in project management?',
    options: [
      { key: 'a', text: 'To gather detailed requirements from stakeholders in structured one-on-one interviews' },
      { key: 'b', text: 'To bring together prequalified stakeholders to discuss expectations and attitudes toward a proposed product' },
      { key: 'c', text: 'To resolve conflicts between team members through facilitated discussion sessions' },
      { key: 'd', text: 'To prioritize project risks using a quantitative risk analysis approach' },
    ],
    correct: 'b',
    explanation:
      'A focus group brings together prequalified stakeholders to collectively discuss and provide insights about their expectations, perceptions, and attitudes toward a proposed product, service, or project. It is a qualitative technique commonly used to gather feedback and validate ideas early in the project.',
  },
  {
    id: 24,
    domain: DOMAIN,
    topic: 'CertSafari Q2 · Subdomain 1.5',
    prompt:
      'A project team is facing a complex problem with many interrelated causes. They want to visually display the relationships between various factors. Which tool would be most useful?',
    options: [
      { key: 'a', text: 'Histogram, which shows frequency distribution' },
      { key: 'b', text: 'Control chart, which tracks process stability over time' },
      { key: 'c', text: 'Cause-and-effect diagram, which maps causes to a problem' },
      { key: 'd', text: 'Scatter diagram, which displays correlation between two variables' },
    ],
    correct: 'c',
    explanation:
      'A cause-and-effect diagram, also known as a fishbone or Ishikawa diagram, visually organizes potential causes of a problem and their relationships, making it ideal for understanding how multiple factors contribute to an issue.',
  },
  {
    id: 25,
    domain: DOMAIN,
    topic: 'CertSafari Q3 · Subdomain 1.5',
    prompt: 'What is the main goal of a retrospective meeting in Agile projects?',
    options: [
      { key: 'a', text: 'To update the product backlog with additional new user stories' },
      { key: 'b', text: 'To demonstrate working software to all stakeholders' },
      { key: 'c', text: 'To inspect and adapt team processes for continuous improvement' },
      { key: 'd', text: 'To resolve conflicts between product owner and development team' },
    ],
    correct: 'c',
    explanation:
      "The primary goal of a retrospective is to inspect the team's processes, identify what went well and what could be improved, and adapt for future sprints to foster continuous improvement. It is a key practice for the team to reflect and adjust their workflow, tools, and interactions.",
  },
  {
    id: 26,
    domain: DOMAIN,
    topic: 'CertSafari Q4 · Subdomain 1.4',
    prompt: 'Which document defines how to engage stakeholders throughout the project?',
    options: [
      { key: 'a', text: 'Project charter' },
      { key: 'b', text: 'Benefits management plan' },
      { key: 'c', text: 'Scope management plan' },
      { key: 'd', text: 'Stakeholder engagement plan' },
    ],
    correct: 'd',
    explanation:
      "The stakeholder engagement plan is a subsidiary plan of the project management plan that identifies strategies and actions to effectively engage stakeholders based on their needs, interests, and impact. It includes communication methods, frequency, and approaches to manage expectations and influence.",
  },
  {
    id: 27,
    domain: DOMAIN,
    topic: 'CertSafari Q5 · Subdomain 1.4',
    prompt: 'Which of the following best describes the contents of a risk register?',
    options: [
      { key: 'a', text: 'Identified risk events, probability, impact, and planned responses.' },
      { key: 'b', text: 'Project cost estimates and the approved budget baseline.' },
      { key: 'c', text: 'Task assignments with resource names and availability dates.' },
      { key: 'd', text: 'A timeline with project milestones and deliverable dates.' },
    ],
    correct: 'a',
    explanation:
      'The risk register is the primary document for recording identified risks, their probability, impact, and planned responses. It is a key component of the risk management strategy and is used to track and manage risks throughout the project.',
  },
  {
    id: 28,
    domain: DOMAIN,
    topic: 'CertSafari Q6 · Subdomain 1.4',
    prompt: 'What is the primary benefit of a communication management plan?',
    options: [
      { key: 'a', text: 'It ensures stakeholders get the right information when needed.' },
      { key: 'b', text: 'It removes all project risks caused by poor communication.' },
      { key: 'c', text: 'It secures full support from every stakeholder on the project.' },
      { key: 'd', text: 'It lowers the budget by restricting communication channels.' },
    ],
    correct: 'a',
    explanation:
      'A communication management plan ensures that stakeholders receive the right information at the right time through appropriate channels, which is its primary purpose. It outlines how, when, and by whom information will be shared, keeping the project aligned and supporting timely decision-making.',
  },
  {
    id: 29,
    domain: DOMAIN,
    topic: 'CertSafari Q7 · Subdomain 1.2',
    prompt:
      'A team is planning a software project. They identify that if a key developer leaves, the project could be delayed. Where should they document this and the planned response?',
    options: [
      { key: 'a', text: 'Stakeholder register' },
      { key: 'b', text: 'Issue log' },
      { key: 'c', text: 'Risk register' },
      { key: 'd', text: 'Change request' },
    ],
    correct: 'c',
    explanation:
      'The risk register is the official document for recording identified risks, their analysis, response plans, and owners. A key developer leaving is a potential schedule risk and should be documented there with the planned response.',
  },
  {
    id: 30,
    domain: DOMAIN,
    topic: 'CertSafari Q8 · Subdomain 1.2',
    prompt: 'The project team has completed all deliverables and obtained formal acceptance. What should the project manager do next?',
    options: [
      { key: 'a', text: 'Transition to the next project phase after closure.' },
      { key: 'b', text: 'Conduct lessons learned and archive project documents.' },
      { key: 'c', text: 'Assign any unfinished work to the team for completion.' },
      { key: 'd', text: 'Update the risk register with final risk outcomes.' },
    ],
    correct: 'b',
    explanation:
      'After formal acceptance, the project manager must perform project closure activities. Conducting lessons learned and archiving project documents are critical steps to capture knowledge and officially close the project, ensuring organizational process assets are updated.',
  },
  {
    id: 31,
    domain: DOMAIN,
    topic: 'CertSafari Q9 · Subdomain 1.2',
    prompt:
      'A project manager is developing the project management plan. She needs to decide how quality will be measured and evaluated. Which subsidiary plan should she create?',
    options: [
      { key: 'a', text: 'Quality management plan' },
      { key: 'b', text: 'Risk management plan' },
      { key: 'c', text: 'Procurement management plan' },
      { key: 'd', text: 'Resource management plan' },
    ],
    correct: 'a',
    explanation:
      'The quality management plan is the subsidiary plan that defines how quality policies will be implemented and how quality will be measured, monitored, evaluated, and controlled throughout the project.',
  },
  {
    id: 32,
    domain: DOMAIN,
    topic: 'CertSafari Q10 · Subdomain 1.3',
    prompt:
      "During a project kick-off meeting, a stakeholder asks who is accountable for the project's overall success. The project manager should indicate that this accountability lies with:",
    options: [
      { key: 'a', text: 'The project manager' },
      { key: 'b', text: 'The project sponsor' },
      { key: 'c', text: 'The functional manager' },
      { key: 'd', text: 'The project team' },
    ],
    correct: 'b',
    explanation:
      "The project sponsor is the individual or group who provides resources and support, champions the project, and is ultimately accountable for its overall success, including alignment with business objectives and high-level decision-making.",
  },
  {
    id: 33,
    domain: DOMAIN,
    topic: 'CertSafari Q11 · Subdomain 1.3',
    prompt: 'Which of the following best distinguishes leadership from management in a project context?',
    options: [
      { key: 'a', text: 'Leadership sets the project vision and inspires the team; management executes plans and monitors progress.' },
      { key: 'b', text: 'Leadership establishes the strategic direction for the project; management coordinates daily activities and resources.' },
      { key: 'c', text: 'Leadership motivates and aligns people toward goals; management focuses on tasks and schedules.' },
      { key: 'd', text: 'Leadership is visionary and seeks opportunities; management is administrative and maintains status quo.' },
    ],
    correct: 'a',
    explanation:
      'This option captures the core distinction: leadership focuses on setting a vision and inspiring the team, while management focuses on executing plans and monitoring progress. According to the PMBOK Guide, leadership involves guiding and motivating the team toward project objectives, whereas management involves planning, organizing, and controlling work to achieve those objectives. This is the most comprehensive and accurate characterization.',
  },
  {
    id: 34,
    domain: DOMAIN,
    topic: 'CertSafari Q12 · Subdomain 1.3',
    prompt:
      "A project is experiencing scope creep due to numerous small changes requested by stakeholders. The project manager needs to control changes effectively. Who should the project manager primarily involve to authorize these changes if they go beyond the project manager's threshold?",
    options: [
      { key: 'a', text: 'Change control board' },
      { key: 'b', text: 'Project team' },
      { key: 'c', text: 'Project sponsor' },
      { key: 'd', text: 'Quality assurance team' },
    ],
    correct: 'a',
    explanation:
      "The Change Control Board (CCB) is a formally chartered group responsible for reviewing, evaluating, approving, deferring, or rejecting changes that exceed the project manager's authority. Involving the CCB ensures changes are handled through formal change control processes, preventing uncontrolled scope creep.",
  },
]
