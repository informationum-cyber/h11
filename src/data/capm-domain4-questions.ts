import type { PMPQuestion } from './pmp-quiz-types'

const DOMAIN = 'Business Analysis Frameworks'

export const capmDomain4Questions: PMPQuestion[] = [
  {
    id: 1,
    domain: DOMAIN,
    topic: 'Invensis Learning Q46',
    prompt: 'What is the Primary Purpose of Stakeholder Analysis?',
    options: [
      { key: 'a', text: 'To identify project risks' },
      { key: 'b', text: 'To allocate project resources' },
      { key: 'c', text: 'To determine stakeholder needs and expectations' },
      { key: 'd', text: 'To develop the project schedule' },
    ],
    correct: 'c',
    explanation:
      'Stakeholder analysis identifies stakeholders and assesses their needs, expectations, interest, and influence on the project, which shapes how the team engages each one.',
  },
  {
    id: 2,
    domain: DOMAIN,
    topic: 'Invensis Learning Q47',
    prompt: 'A Project Team is Struggling to Define the Scope Because Stakeholder Requirements Are Ambiguous. Which Technique Could Clarify the Requirements?',
    options: [
      { key: 'a', text: 'Mind mapping' },
      { key: 'b', text: 'Pareto chart' },
      { key: 'c', text: 'Cause-and-effect diagram' },
      { key: 'd', text: 'Requirements elicitation' },
    ],
    correct: 'd',
    explanation:
      'Requirements elicitation gathers, documents, and validates stakeholder requirements through interviews, workshops, surveys, observation, and prototypes. It turns vague requests into a shared understanding of what the project must deliver.',
  },
  {
    id: 3,
    domain: DOMAIN,
    topic: 'Invensis Learning Q48 (also PMI official CAPM sample)',
    prompt: 'During a Requirements Workshop, Every Elicited Requirement is Labeled a "Must Have." Which Tool Can Help Prioritize Them?',
    options: [
      { key: 'a', text: 'Use case' },
      { key: 'b', text: 'Multivoting' },
      { key: 'c', text: 'Peer review' },
      { key: 'd', text: 'Wireframe' },
    ],
    correct: 'b',
    explanation:
      'Multivoting lets a group narrow and rank a list by giving each participant a limited number of votes. It works well when everyone insists all requirements are essential.',
  },
  {
    id: 4,
    domain: DOMAIN,
    topic: 'Invensis Learning Q49',
    prompt: 'Which Tool Links Each Requirement to Its Business Objective and Tracks It Through Delivery?',
    options: [
      { key: 'a', text: 'Requirements traceability matrix' },
      { key: 'b', text: 'Risk register' },
      { key: 'c', text: 'Issue log' },
      { key: 'd', text: 'Resource calendar' },
    ],
    correct: 'a',
    explanation:
      'A requirements traceability matrix connects each requirement to its source and business objective and follows it through design, development, testing, and acceptance. It confirms that every requirement adds value and that none are lost or added without approval.',
  },
  {
    id: 5,
    domain: DOMAIN,
    topic: 'Invensis Learning Q50 (also PMI official CAPM sample)',
    prompt: 'The Project Team, Working With the Product Owner, Will Develop a Hierarchical Description of the Work Needed to Deliver the Expected Business Value. What Artifact Will Be Created?',
    options: [
      { key: 'a', text: 'Risk breakdown structure (RBS)' },
      { key: 'b', text: 'Definition of Done (DoD)' },
      { key: 'c', text: 'Return on investment (ROI)' },
      { key: 'd', text: 'Work breakdown structure (WBS)' },
    ],
    correct: 'd',
    explanation:
      'A WBS is a hierarchical breakdown of the total scope of work needed to deliver the expected value. On agile teams, the same idea often shows up as a hierarchy of epics, features, and user stories. A risk breakdown structure organizes risks, not requirements.',
  },
  {
    id: 6,
    domain: DOMAIN,
    topic: 'CertSafari Q25 · Subdomain 4.1',
    prompt: 'Which role is responsible for defining and documenting business requirements?',
    options: [
      { key: 'a', text: 'Process Manager' },
      { key: 'b', text: 'Process Owner' },
      { key: 'c', text: 'Product Owner' },
      { key: 'd', text: 'Business Analyst' },
    ],
    correct: 'd',
    explanation:
      'A Business Analyst is responsible for eliciting, analyzing, and documenting business requirements, analyzing processes, and ensuring solutions align with stakeholder needs.',
  },
  {
    id: 7,
    domain: DOMAIN,
    topic: 'CertSafari Q26 · Subdomain 4.1',
    prompt: 'Which role is responsible for defining the product vision and prioritizing the product backlog in an Agile environment?',
    options: [
      { key: 'a', text: 'Process Owner' },
      { key: 'b', text: 'Subject Matter Expert (SME)' },
      { key: 'c', text: 'Product Owner' },
      { key: 'd', text: 'External Stakeholder' },
    ],
    correct: 'c',
    explanation:
      'The Product Owner is accountable for defining the product vision, managing the product backlog, and prioritizing features or user stories to maximize value in an Agile environment. This role represents the customer and ensures the team works on the highest-value items.',
  },
  {
    id: 8,
    domain: DOMAIN,
    topic: 'CertSafari Q27 · Subdomain 4.5',
    prompt: 'In predictive (waterfall) project management, when are business analysis activities primarily conducted?',
    options: [
      { key: 'a', text: 'Conducted incrementally throughout all phases' },
      { key: 'b', text: 'Performed primarily during upfront project planning' },
      { key: 'c', text: 'Limited to the final testing and deployment stages' },
      { key: 'd', text: 'Omitted; development proceeds directly from ideas' },
    ],
    correct: 'b',
    explanation:
      'In predictive methodologies, business analysis activities are primarily performed during the upfront planning phase. The goal is to gather, analyze, and baseline requirements early so that later phases can follow a defined plan.',
  },
  {
    id: 9,
    domain: DOMAIN,
    topic: 'CertSafari Q28 · Subdomain 4.5',
    prompt: 'A project team is using an agile methodology. The product owner wants to understand the high-level scope. What should the BA do?',
    options: [
      { key: 'a', text: 'Write a detailed BRD and get formal sign-off before any development' },
      { key: 'b', text: 'Create a product roadmap and facilitate user story mapping sessions' },
      { key: 'c', text: 'Explain that scope evolves and is not fixed upfront in agile' },
      { key: 'd', text: 'Ask the development team to estimate the entire project upfront' },
    ],
    correct: 'b',
    explanation:
      'A product roadmap provides high-level scope and direction, while user story mapping helps visualize and break down work in an agile context. This aligns with agile principles of collaboration and iterative planning, giving the product owner the needed clarity.',
  },
  {
    id: 10,
    domain: DOMAIN,
    topic: 'CertSafari Q29 · Subdomain 4.5',
    prompt: 'In an agile project, the development team is struggling to understand the details of a user story. What should the BA do?',
    options: [
      { key: 'a', text: 'Produce a comprehensive specification document for every story' },
      { key: 'b', text: 'Meet with the team to clarify and elaborate on the user story' },
      { key: 'c', text: 'Instruct the team to implement their own interpretation' },
      { key: 'd', text: 'Escalate to management to mandate story adherence' },
    ],
    correct: 'b',
    explanation:
      'The BA should facilitate collaboration with the team to clarify the user story and provide just-in-time elaboration as needed. In agile, ongoing conversation and iterative refinement are preferred to ensure shared understanding and alignment with stakeholder needs.',
  },
  {
    id: 11,
    domain: DOMAIN,
    topic: 'CertSafari Q30 · Subdomain 4.2',
    prompt: 'A project team is distributed across multiple time zones. Which communication approach is most effective for ensuring all stakeholders are informed and engaged?',
    options: [
      { key: 'a', text: 'Insist that all team members adjust their schedules to work overlapping hours.' },
      { key: 'b', text: 'Send all messages with high priority flags to obtain faster responses.' },
      { key: 'c', text: 'Host regular video meetings at a convenient global time and use online tools for updates.' },
      { key: 'd', text: 'Provide each team member with a personalized daily email summary.' },
    ],
    correct: 'c',
    explanation:
      'Hosting regular video meetings at a convenient global time ensures real-time collaboration while respecting time zones. Using online tools supports asynchronous updates, keeping everyone informed and engaged.',
  },
  {
    id: 12,
    domain: DOMAIN,
    topic: 'CertSafari Q31 · Subdomain 4.2',
    prompt: 'During a high-level presentation to an executive, the executive asks a very technical question about a specific implementation detail. What is the best way for the business analyst to handle this situation?',
    options: [
      { key: 'a', text: 'Give a complete technical response immediately to the executive.' },
      { key: 'b', text: 'Suggest discussing the technical details in a dedicated follow-up meeting.' },
      { key: 'c', text: 'Continue with the presentation without acknowledging the question.' },
      { key: 'd', text: 'Tell the executive that the question is off-topic for the presentation.' },
    ],
    correct: 'b',
    explanation:
      "Suggesting a dedicated follow-up meeting allows the technical question to be addressed in the appropriate level of detail without disrupting the presentation. This respects the executive's interest while maintaining focus on the broader audience and keeping the meeting on track.",
  },
  {
    id: 13,
    domain: DOMAIN,
    topic: 'CertSafari Q32 · Subdomain 4.2',
    prompt: 'Which communication method is most appropriate for conveying sensitive project details to authorized stakeholders?',
    options: [
      { key: 'a', text: 'Meetings open to all employees, such as town hall gatherings.' },
      { key: 'b', text: 'Mass communications sent to the entire organization without restriction.' },
      { key: 'c', text: 'Encrypted email or a secure project management platform.' },
      { key: 'd', text: 'Casual chat apps used by the team for quick updates.' },
    ],
    correct: 'c',
    explanation:
      'Encrypted email or a secure project management platform provides confidentiality and restricts access to authorized stakeholders, making it appropriate for sensitive information.',
  },
  {
    id: 14,
    domain: DOMAIN,
    topic: 'CertSafari Q33 · Subdomain 4.4',
    prompt: 'What is the primary purpose of a product roadmap?',
    options: [
      { key: 'a', text: 'To provide a detailed project schedule and task assignments.' },
      { key: 'b', text: 'To communicate strategic direction and planned product evolution.' },
      { key: 'c', text: 'To list all customer-reported support issues and bugs.' },
      { key: 'd', text: 'To document the technical architecture and system design.' },
    ],
    correct: 'b',
    explanation:
      'A product roadmap communicates the strategic direction and planned evolution of a product over time. It aligns stakeholders on the vision, goals, and major initiatives.',
  },
  {
    id: 15,
    domain: DOMAIN,
    topic: 'CertSafari Q34 · Subdomain 4.4',
    prompt: 'Which features should be prioritized when developing a product roadmap?',
    options: [
      { key: 'a', text: 'All features that require the least effort to build, regardless of value.' },
      { key: 'b', text: 'Features that align with the product vision and provide high value with reasonable effort.' },
      { key: 'c', text: 'All features requested by the most important customer, no matter the cost.' },
      { key: 'd', text: 'Features that the development team wants to build based on technical interest.' },
    ],
    correct: 'b',
    explanation:
      'Product roadmaps prioritize features that align with the product vision, deliver high value, and are feasible with reasonable effort. This ensures the team focuses on the most beneficial work first while keeping delivery realistic and strategic goals met.',
  },
  {
    id: 16,
    domain: DOMAIN,
    topic: 'CertSafari Q35 · Subdomain 4.4',
    prompt: 'A product manager has identified three strategic themes for the product roadmap. The CEO directs the team to focus on a specific theme, but the product manager believes another theme would reduce customer churn. What should the product manager do?',
    options: [
      { key: 'a', text: "Follow the CEO's directive without question, as executives always have final authority." },
      { key: 'b', text: 'Prioritize based on strategic alignment and customer impact, and present to the CEO.' },
      { key: 'c', text: 'Let the development team vote to decide which theme should be implemented first.' },
      { key: 'd', text: 'Attempt to complete all three themes simultaneously within the next quarter.' },
    ],
    correct: 'b',
    explanation:
      'Prioritizing based on strategic alignment and customer impact ensures the roadmap delivers the most value. Framing the recommendation around outcomes such as reducing churn and presenting it to the CEO demonstrates leadership and informed decision-making.',
  },
]
