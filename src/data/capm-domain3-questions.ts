import type { PMPQuestion } from './pmp-quiz-types'

const DOMAIN = 'Agile Frameworks/Methodologies'

export const capmDomain3Questions: PMPQuestion[] = [
  {
    id: 1,
    domain: DOMAIN,
    topic: 'Invensis Learning Q41 (also PMI official CAPM sample)',
    prompt: 'In an Agile Project, Which Chart Shows the Amount of Work Remaining Over Time?',
    options: [
      { key: 'a', text: 'Burnup chart' },
      { key: 'b', text: 'Product backlog' },
      { key: 'c', text: 'Burndown chart' },
      { key: 'd', text: 'Kanban board' },
    ],
    correct: 'c',
    explanation:
      'A burndown chart plots the work remaining, often in story points, against time in an iteration or release, so the team can see whether it is on track. A burnup chart shows work completed over time, usually with a separate line for total scope.',
  },
  {
    id: 2,
    domain: DOMAIN,
    topic: 'Invensis Learning Q42',
    prompt: 'In Scrum, Who is Accountable for Ordering the Product Backlog to Maximize Value?',
    options: [
      { key: 'a', text: 'Scrum Master' },
      { key: 'b', text: 'Product Owner' },
      { key: 'c', text: 'Developers' },
      { key: 'd', text: 'Project sponsor' },
    ],
    correct: 'b',
    explanation:
      'The Product Owner is accountable for maximizing the value of the product, which includes ordering the product backlog. The Scrum Master coaches the team and removes impediments, and the developers decide how to build the work.',
  },
  {
    id: 3,
    domain: DOMAIN,
    topic: 'Invensis Learning Q43',
    prompt: 'What is the Main Purpose of the Sprint Retrospective?',
    options: [
      { key: 'a', text: 'To demonstrate the completed increment to stakeholders' },
      { key: 'b', text: 'To plan the work for the next sprint' },
      { key: 'c', text: 'To inspect how the last sprint went and agree on improvements' },
      { key: 'd', text: 'To update the burndown chart' },
    ],
    correct: 'c',
    explanation:
      'The sprint retrospective closes each sprint. The Scrum Team reviews its people, processes, and tools and commits to improvements for the next sprint. Showing the increment to stakeholders happens in the sprint review.',
  },
  {
    id: 4,
    domain: DOMAIN,
    topic: 'Invensis Learning Q44',
    prompt: 'What is the Main Purpose of Work-in-Progress (WIP) Limits on a Kanban Board?',
    options: [
      { key: 'a', text: 'To maximize the number of tasks started' },
      { key: 'b', text: 'To limit work in flight so flow improves and bottlenecks become visible' },
      { key: 'c', text: 'To assign tasks to specific team members' },
      { key: 'd', text: 'To fix the length of each iteration' },
    ],
    correct: 'b',
    explanation:
      'WIP limits cap how many items can sit in each column of a Kanban board. Limiting work in progress shortens cycle time and exposes bottlenecks, because work cannot pile up unnoticed.',
  },
  {
    id: 5,
    domain: DOMAIN,
    topic: 'Invensis Learning Q45',
    prompt: 'When is an Adaptive (Agile) Approach Most Appropriate for a Project?',
    options: [
      { key: 'a', text: 'When requirements are stable and fully known upfront' },
      { key: 'b', text: 'When requirements are uncertain and expected to evolve through frequent feedback' },
      { key: 'c', text: 'When regulations mandate fixed, sequential phases' },
      { key: 'd', text: 'When the contract fixes the scope with no changes allowed' },
    ],
    correct: 'b',
    explanation:
      'Adaptive approaches suit projects with high uncertainty or changing requirements, because short iterations and regular stakeholder feedback let the team adjust as it learns. Predictive approaches fit better when requirements are stable and well understood at the start.',
  },
  {
    id: 6,
    domain: DOMAIN,
    topic: 'CertSafari Q16 · Subdomain 3.3',
    prompt: 'Which of the following artifacts is used to document project controls in an adaptive project?',
    options: [
      { key: 'a', text: 'Sprint Backlog' },
      { key: 'b', text: 'Product Backlog' },
      { key: 'c', text: 'Definition of Done' },
      { key: 'd', text: 'Burndown Chart' },
    ],
    correct: 'b',
    explanation:
      'The Product Backlog is the ordered, evolving list of all work items for the product and is the main artifact used to document and manage scope in an adaptive project. It supports continuous reprioritization and serves as a key control mechanism.',
  },
  {
    id: 7,
    domain: DOMAIN,
    topic: 'CertSafari Q17 · Subdomain 3.3',
    prompt: 'Which of the following is a key documented control for an adaptive project?',
    options: [
      { key: 'a', text: 'Acceptance criteria' },
      { key: 'b', text: 'Sprint Goal' },
      { key: 'c', text: 'Definition of Done' },
      { key: 'd', text: 'Product Backlog item' },
    ],
    correct: 'c',
    explanation:
      'The Definition of Done (DoD) is a critical control artifact in agile projects. It establishes the criteria that must be met for work to be considered complete, ensuring consistency and quality across all deliverables.',
  },
  {
    id: 8,
    domain: DOMAIN,
    topic: 'CertSafari Q18 · Subdomain 3.3',
    prompt: 'Which artifact is the primary tool for documenting and controlling all work for an adaptive project?',
    options: [
      { key: 'a', text: 'Sprint backlog' },
      { key: 'b', text: 'Product backlog' },
      { key: 'c', text: 'Burndown chart' },
      { key: 'd', text: 'Velocity chart' },
      { key: 'e', text: 'Cumulative flow diagram' },
    ],
    correct: 'b',
    explanation:
      'The Product backlog is the ordered list of all desired work for the product, prioritized and continuously refined. It serves as the central artifact for documenting and controlling scope over time in adaptive projects.',
  },
  {
    id: 9,
    domain: DOMAIN,
    topic: 'CertSafari Q19 · Subdomain 3.2',
    prompt: 'Which of the following is the primary unit used to plan iterations in Agile?',
    options: [
      { key: 'a', text: 'Phase' },
      { key: 'b', text: 'Deliverable' },
      { key: 'c', text: 'User story' },
      { key: 'd', text: 'Work package' },
    ],
    correct: 'c',
    explanation:
      "A user story is a common Agile planning item used to describe a small, valuable piece of functionality from the user's perspective. User stories are prioritized and selected into iterations for delivery.",
  },
  {
    id: 10,
    domain: DOMAIN,
    topic: 'CertSafari Q20 · Subdomain 3.2',
    prompt: 'Which artifact is used to plan project iterations in Agile?',
    options: [
      { key: 'a', text: 'Project charter' },
      { key: 'b', text: 'Work breakdown structure' },
      { key: 'c', text: 'Product backlog' },
      { key: 'd', text: 'Risk register' },
    ],
    correct: 'c',
    explanation:
      'The product backlog is a prioritized list of features, enhancements, and fixes. In Agile, it is the key artifact used to plan iterations (sprints) as teams select items from it based on value and capacity.',
  },
  {
    id: 11,
    domain: DOMAIN,
    topic: 'CertSafari Q21 · Subdomain 3.2',
    prompt: 'Which of the following best describes how iterations help manage changes in an agile project?',
    options: [
      { key: 'a', text: 'Detailed upfront planning prevents any changes.' },
      { key: 'b', text: 'Fixed scope per iteration allows controlled changes.' },
      { key: 'c', text: 'Iterations enable the team to inspect and adapt.' },
      { key: 'd', text: 'Changes are deferred until the end of the project.' },
    ],
    correct: 'c',
    explanation:
      'Iterations give the team regular opportunities to inspect progress, gather feedback, and adapt the plan based on changing needs. This is a core agile practice for managing change effectively.',
  },
  {
    id: 12,
    domain: DOMAIN,
    topic: 'CertSafari Q22 · Subdomain 3.5',
    prompt:
      'A scrum team has two user stories for the upcoming sprint. Story X has a high business value but requires a large effort, while Story Y has a lower business value but a much higher value-to-effort ratio. Which approach should the team take to prioritize the stories?',
    options: [
      { key: 'a', text: 'Select Story X because it has the highest absolute business value.' },
      { key: 'b', text: 'Select Story Y because it has a higher value-to-effort ratio.' },
      { key: 'c', text: 'Select both stories and adjust the sprint length accordingly.' },
      { key: 'd', text: 'Select neither and ask the product owner for more information.' },
    ],
    correct: 'b',
    explanation:
      'The value-to-effort ratio is a key Agile prioritization metric, balancing benefit against cost. It helps the team maximize delivered value for the least relative effort, ensuring optimal use of capacity.',
  },
  {
    id: 13,
    domain: DOMAIN,
    topic: 'CertSafari Q23 · Subdomain 3.5',
    prompt: 'Which of the following is a standard prioritization category in agile frameworks?',
    options: [
      { key: 'a', text: 'Critical' },
      { key: 'b', text: 'Could have' },
      { key: 'c', text: 'Complex' },
      { key: 'd', text: 'Costly' },
    ],
    correct: 'b',
    explanation:
      "'Could have' is a common prioritization label in agile frameworks such as MoSCoW, where it identifies lower-priority items that are desirable but not essential.",
  },
  {
    id: 14,
    domain: DOMAIN,
    topic: 'CertSafari Q24 · Subdomain 3.5',
    prompt: "In the Kano Model, what is the appropriate priority level for an 'attractive' quality feature?",
    options: [
      { key: 'a', text: 'Highest priority, because it will delight customers the most' },
      { key: 'b', text: 'After the "must-be" feature but before the "one-dimensional" feature' },
      { key: 'c', text: 'Lowest priority, because it is not required for basic functionality' },
      { key: 'd', text: 'Same priority as the "one-dimensional" feature, as both add value' },
    ],
    correct: 'b',
    explanation:
      "In the Kano Model, features are prioritized in this order: 'must-be' (basic expectations) first, then 'one-dimensional' (linear satisfaction), followed by 'attractive' (delighters). This ensures essential functionality is delivered before enhancements that exceed expectations.",
  },
  {
    id: 15,
    domain: DOMAIN,
    topic: 'Quibank Q1',
    prompt: 'An agile team is deciding how much project documentation to produce. Which statement best reflects the values behind the agile mindset?',
    options: [
      { key: 'a', text: 'Documentation should replace conversation, because a written record is more reliable than a discussion.' },
      { key: 'b', text: 'Documentation still has value, but the team values delivering working product more highly.' },
      { key: 'c', text: 'Documentation should be eliminated, because only working product has any value to a customer.' },
      { key: 'd', text: 'All documentation should be completed and approved in full before any product is built.' },
    ],
    correct: 'b',
    explanation:
      'The agile values place working product above comprehensive documentation, yet they state explicitly that the items on the right still have value. The rule is one of relative priority, not of elimination, so the team produces the documentation that genuinely serves the product and stops there.',
  },
  {
    id: 16,
    domain: DOMAIN,
    topic: 'Quibank Q2',
    prompt: 'Which project characteristic most strongly indicates that an adaptive approach is a better fit than a predictive one?',
    options: [
      { key: 'a', text: 'The project must produce one single handover at the end because partial deliveries cannot be used.' },
      { key: 'b', text: 'The project has a fixed scope defined in detail and a customer who is unavailable during the work.' },
      { key: 'c', text: 'The project delivers a well-understood product using procedures the organization has repeated many times.' },
      { key: 'd', text: 'The project has requirements that are expected to emerge and change as stakeholders see early results.' },
    ],
    correct: 'd',
    explanation:
      'Adaptive approaches fit work with high uncertainty, because emerging requirements would generate heavy rework against a detailed plan fixed at the start. Delivering in small increments and re-planning from feedback converts that uncertainty into learning, while definable, repeatable work is handled more efficiently by a predictive plan.',
  },
  {
    id: 17,
    domain: DOMAIN,
    topic: 'Quibank Q3',
    prompt: 'How does progress tracking on an adaptive project differ from tracking on a predictive, plan-based project?',
    options: [
      { key: 'a', text: 'Adaptive teams measure progress by working product completed and accepted, counting partial work as none.' },
      { key: 'b', text: 'Adaptive teams measure progress by the variance from the cost and schedule baseline that was set at the start.' },
      { key: 'c', text: 'Adaptive teams measure progress by the percentage of each task reported complete by the person doing it.' },
      { key: 'd', text: 'Adaptive teams measure progress by the hours the team has consumed against its original estimate.' },
    ],
    correct: 'a',
    explanation:
      'Adaptive tracking is empirical: an item counts only once it meets the definition of done and is accepted, so half-finished work contributes nothing. Predictive tracking instead compares performance against a baseline, which is why percent-complete and variance measures belong to the plan-based side.',
  },
  {
    id: 18,
    domain: DOMAIN,
    topic: 'Quibank Q4',
    prompt: 'What distinguishes an incremental life cycle from an iterative life cycle?',
    options: [
      { key: 'a', text: 'Incremental delivery repeats the same work until it is correct, while iterative delivery ships usable pieces.' },
      { key: 'b', text: 'Incremental delivery hands over successive usable pieces, while iterative delivery reworks one solution.' },
      { key: 'c', text: 'Incremental delivery uses timeboxes of equal length, while iterative delivery uses timeboxes of varying length.' },
      { key: 'd', text: 'Incremental delivery fixes all requirements up front, while iterative delivery lets requirements change freely.' },
    ],
    correct: 'b',
    explanation:
      'Incremental delivery aims at speed: each increment is a usable slice handed over as it is finished. Iterative delivery aims at correctness: the same solution is reworked through successive passes until it is right, and an agile life cycle combines both by delivering refined increments frequently.',
  },
  {
    id: 19,
    domain: DOMAIN,
    topic: 'Quibank Q5',
    prompt: 'At the end of a two-week iteration, one user story is nearly finished but does not meet the definition of done. What should the team do?',
    options: [
      { key: 'a', text: 'Return the unfinished story to the product backlog so it can be reordered and planned again.' },
      { key: 'b', text: "Count the story as partly complete and record the proportion of its points in this iteration's velocity." },
      { key: 'c', text: 'Extend the iteration by a few days so the story can be finished and demonstrated as complete.' },
      { key: 'd', text: 'Move the story silently into the next iteration backlog without letting the product owner reorder it.' },
    ],
    correct: 'a',
    explanation:
      'The length of a timebox is fixed and never stretches to accommodate unfinished work, because a consistent iteration length is what makes measured throughput meaningful. Work that does not meet the definition of done returns to the product backlog, where the product owner decides its position against everything else.',
  },
  {
    id: 20,
    domain: DOMAIN,
    topic: 'Quibank Q6',
    prompt: 'During iteration planning, who decides how much work the team will take on for the iteration?',
    options: [
      { key: 'a', text: 'The product owner decides, since ordering the backlog also sets the amount of work to be pulled.' },
      { key: 'b', text: 'The scrum master decides, assigning items to individuals so that the iteration goal can be met.' },
      { key: 'c', text: 'The development team decides, based on its capacity and its record of recently completed work.' },
      { key: 'd', text: "The functional manager decides, allocating each team member's hours across the iteration's items." },
    ],
    correct: 'c',
    explanation:
      "A self-managing team forecasts its own capacity, so only the team can say how many items it can finish inside the timebox. The product owner decides the order in which items are offered and the facilitator supports the event, but neither sets the quantity the team pulls.",
  },
  {
    id: 21,
    domain: DOMAIN,
    topic: 'Quibank Q7',
    prompt: 'Which responsibility belongs to the product owner on an agile team?',
    options: [
      { key: 'a', text: 'Deciding the technical design of each backlog item and how the team will build it.' },
      { key: 'b', text: "Tracking each member's hours and reporting individual performance to senior management." },
      { key: 'c', text: "Facilitating the team's events and removing the impediments the team reports each day." },
      { key: 'd', text: 'Ordering the product backlog so that the items of greatest value and risk go first.' },
    ],
    correct: 'd',
    explanation:
      'The product owner is accountable for maximizing the value the team delivers, and the lever for that is the order of the product backlog. Pulling high-value and high-risk items forward earns benefit sooner and retires uncertainty early, while technical design stays with the team.',
  },
  {
    id: 22,
    domain: DOMAIN,
    topic: 'Quibank Q8',
    prompt: 'A team reports at its daily coordination meeting that access to a test environment owned by another department is blocking two stories. What should the scrum master do?',
    options: [
      { key: 'a', text: 'Reassign the two blocked stories to other team members so that the iteration goal is protected.' },
      { key: 'b', text: 'Report the delay to senior management and ask that the other department be formally instructed.' },
      { key: 'c', text: 'Work with the other department to get access restored, so the team can continue its own work.' },
      { key: 'd', text: 'Record the block as a risk and wait for the next iteration review to raise it with stakeholders.' },
    ],
    correct: 'c',
    explanation:
      'Removing impediments that the team cannot clear on its own is the defining service of a servant leader, and the daily meeting exists precisely to surface them. Escalating first, or reassigning work on the team\'s behalf, substitutes command-and-control for the facilitation the role is meant to provide.',
  },
  {
    id: 23,
    domain: DOMAIN,
    topic: 'Quibank Q9',
    prompt: 'What is the purpose of the daily coordination meeting on an agile team?',
    options: [
      { key: 'a', text: 'To reflect on how the team is working together and agree on process improvements.' },
      { key: 'b', text: "To give the project manager a status update on each person's tasks and hours worked this week." },
      { key: 'c', text: 'To review the completed increment with stakeholders and gather their feedback on it.' },
      { key: 'd', text: 'To let the team synchronize its plan for the day and raise anything blocking progress.' },
    ],
    correct: 'd',
    explanation:
      'The daily meeting is a short timeboxed event held by and for the team, so its output is a shared plan for the next day and a list of impediments to clear. Turning it into a status report to a manager destroys its purpose, because the team stops planning together and starts reporting upward.',
  },
  {
    id: 24,
    domain: DOMAIN,
    topic: 'Quibank Q10',
    prompt: 'An agile team wants to examine how well its own working practices are functioning and choose improvements. Which event serves that purpose?',
    options: [
      { key: 'a', text: 'The iteration planning session, in which the team selects the items it will work on next.' },
      { key: 'b', text: 'The daily coordination meeting, in which the team synchronizes its plan for the coming day.' },
      { key: 'c', text: 'The iteration review, in which stakeholders inspect the increment and the backlog is adapted.' },
      { key: 'd', text: 'The retrospective, in which the team inspects its process and selects improvements to try.' },
    ],
    correct: 'd',
    explanation:
      'The retrospective inspects the process and the team, while the review inspects the product and adapts the backlog with stakeholders; that pairing is the distinction most often confused. A retrospective is only effective when a small number of improvements are prioritized and carried into the next iteration rather than merely discussed.',
  },
  {
    id: 25,
    domain: DOMAIN,
    topic: 'Quibank Q11',
    prompt: 'How does the iteration backlog differ from the product backlog?',
    options: [
      { key: 'a', text: 'The iteration backlog holds the items the product owner has not yet estimated or refined.' },
      { key: 'b', text: 'The iteration backlog holds the defects found after release, kept apart from planned work.' },
      { key: 'c', text: 'The iteration backlog holds the items the team selected for the current timebox and its plan to deliver them.' },
      { key: 'd', text: 'The iteration backlog holds every item ever identified for the product, ordered by the value each one carries.' },
    ],
    correct: 'c',
    explanation:
      "The product backlog is the single ordered list of everything that might be built, kept in order by the product owner. The iteration backlog is the subset the team pulled for the current timebox together with the team's own plan for delivering it, which is why the team owns and updates it daily.",
  },
  {
    id: 26,
    domain: DOMAIN,
    topic: 'Quibank Q12',
    prompt: 'What is the purpose of ongoing backlog refinement?',
    options: [
      { key: 'a', text: 'Splitting, clarifying and sizing upcoming items so the top of the backlog is ready to pull.' },
      { key: 'b', text: 'Converting the remaining backlog items into a detailed schedule with dates for each one.' },
      { key: 'c', text: 'Fixing the wording of every backlog item so that its scope cannot change later.' },
      { key: 'd', text: 'Having the scrum master assign the upcoming items to the team members best suited to them.' },
    ],
    correct: 'a',
    explanation:
      'Refinement is a continuing activity, not an event, and it applies progressive elaboration to the backlog: near-term items are detailed while distant items stay coarse. Keeping the top of the list small, clear and estimated is what allows the team to plan an iteration quickly and confidently.',
  },
  {
    id: 27,
    domain: DOMAIN,
    topic: 'Quibank Q13',
    prompt: 'How do acceptance criteria differ from the definition of done?',
    options: [
      { key: 'a', text: 'Acceptance criteria state what one specific item must satisfy, while the definition of done applies to all work.' },
      { key: 'b', text: 'Acceptance criteria are set by the team for its own internal use, while the definition of done is set by the customer.' },
      { key: 'c', text: 'Acceptance criteria apply to a whole product release, while the definition of done applies to a single iteration only.' },
      { key: 'd', text: 'Acceptance criteria are written after an item is built, while the definition of done is written beforehand.' },
    ],
    correct: 'a',
    explanation:
      'Acceptance criteria are attached to an individual backlog item and describe the conditions that make that item acceptable to the product owner. The definition of done is a single shared standard the team applies to every item, so an item is finished only when it satisfies both.',
  },
  {
    id: 28,
    domain: DOMAIN,
    topic: 'Quibank Q14',
    prompt: 'Why do agile teams size backlog items in story points rather than in hours?',
    options: [
      { key: 'a', text: 'Relative sizing converts into a fixed number of hours per point once the team has settled.' },
      { key: 'b', text: 'Relative sizing produces a figure that can be compared directly with the figures of other teams.' },
      { key: 'c', text: 'Relative sizing compares items with one another, which teams do faster and more reliably.' },
      { key: 'd', text: 'Relative sizing removes any need for the team to forecast how much work it can deliver.' },
    ],
    correct: 'c',
    explanation:
      "People judge whether one item is bigger than another far more consistently than they judge absolute durations, so relative sizing produces useful estimates with less effort. Points reflect one team's own scale of size, effort and uncertainty, which is exactly why they must never be compared between teams or treated as a fixed hour conversion.",
  },
  {
    id: 29,
    domain: DOMAIN,
    topic: 'Quibank Q15',
    prompt: 'What may a team legitimately do with its velocity?',
    options: [
      { key: 'a', text: 'Use it to forecast roughly how many iterations the remaining backlog is likely to need.' },
      { key: 'b', text: 'Use it to set an individual performance target for each member of the development team.' },
      { key: 'c', text: "Use it to compare this team's productivity with that of another team on the same product." },
      { key: 'd', text: 'Use it to claim partial credit for items that are nearly finished but not yet accepted.' },
    ],
    correct: 'a',
    explanation:
      "Velocity is an empirical record of the points a team completed and had accepted, so its legitimate use is forecasting that same team's future capacity over the remaining backlog. Because the point scale is local to one team and only fully done work counts, velocity cannot rank teams or individuals.",
  },
  {
    id: 30,
    domain: DOMAIN,
    topic: 'Quibank Q16',
    prompt: 'An iteration burndown chart shows remaining work holding at the same level for several days in the middle of the iteration. What does that most likely indicate?',
    options: [
      { key: 'a', text: 'The team has work in progress that is not yet finished, so no remaining work has come off.' },
      { key: 'b', text: 'The team has reduced its estimates so that the remaining figure no longer needs updating.' },
      { key: 'c', text: 'The team has added new items to the iteration and has therefore raised the remaining total.' },
      { key: 'd', text: 'The team has completed all of its planned work early and has nothing left to burn down.' },
    ],
    correct: 'a',
    explanation:
      'A burndown line only falls when an item is finished to the definition of done, because partially completed work counts as zero. A flat stretch therefore signals work in progress piling up rather than idleness, and it warns the team early that too much has been started at once.',
  },
  {
    id: 31,
    domain: DOMAIN,
    topic: 'Quibank Q17',
    prompt: 'A stakeholder wants a chart that shows both how much work is finished and whether the total amount of work has grown. Which chart shows this?',
    options: [
      { key: 'a', text: 'The iteration burndown chart, which plots the remaining work falling toward zero across the timebox.' },
      { key: 'b', text: 'The burnup chart, which plots the completed work against a separate line showing total scope.' },
      { key: 'c', text: 'The cumulative flow diagram, which plots the quantity of work sitting in each workflow state.' },
      { key: 'd', text: "The velocity chart, which plots the points accepted in each of the team's past iterations." },
    ],
    correct: 'b',
    explanation:
      'A burnup chart draws completed work as a rising line and total scope as a second line, so a rise in the scope line makes added work visible instead of hiding it. A burndown shows only a single remaining-work line, in which added scope and slow progress look the same.',
  },
  {
    id: 32,
    domain: DOMAIN,
    topic: 'Quibank Q18',
    prompt: 'On a kanban board, items are piling up in the testing column while the columns before it keep filling. Which practice most directly addresses this?',
    options: [
      { key: 'a', text: 'Move the finished development items straight to done and test them after they are released.' },
      { key: 'b', text: 'Limit the work in progress allowed in each column so the team stops starting and helps finish.' },
      { key: 'c', text: 'Assign every remaining tester an individual quota of items to clear before the day ends.' },
      { key: 'd', text: 'Add a fixed two-week timebox to the board so that testing must finish within each period.' },
    ],
    correct: 'b',
    explanation:
      'A queue growing in front of one column is the visual signature of a bottleneck, and a work-in-progress limit is the kanban mechanism that responds to it. Once the limit is reached nothing new is pulled in, so people move to help clear the constrained step and flow through the board improves.',
  },
  {
    id: 33,
    domain: DOMAIN,
    topic: 'Quibank Q19',
    prompt: 'How does lead time differ from cycle time?',
    options: [
      { key: 'a', text: 'Lead time counts the whole span from when an item is requested until it is finished.' },
      { key: 'b', text: 'Lead time counts only the hours a person was actively working on the item, ignoring waiting.' },
      { key: 'c', text: 'Lead time counts the number of items the team finishes in a given period of time.' },
      { key: 'd', text: 'Lead time counts the days an item waits in a queue before anyone begins working on it.' },
    ],
    correct: 'a',
    explanation:
      "Lead time is measured from the customer's point of view and therefore includes every queue the item sat in, while cycle time measures only the processing once work actually begins. Comparing the two exposes how much of the customer's wait is caused by queueing rather than by the work itself.",
  },
  {
    id: 34,
    domain: DOMAIN,
    topic: 'Quibank Q20',
    prompt: 'Which statement describes a difference between the kanban method and a scrum-style framework?',
    options: [
      { key: 'a', text: 'Kanban forbids any change to the work in progress once the current timebox has started.' },
      { key: 'b', text: 'Kanban manages a continuous pull-based flow of work rather than committing to fixed timeboxes.' },
      { key: 'c', text: 'Kanban requires every item to be estimated in story points before the team may pull it.' },
      { key: 'd', text: 'Kanban prescribes three accountabilities and a fixed set of events, while scrum prescribes none of them.' },
    ],
    correct: 'b',
    explanation:
      'Kanban prescribes no roles and no timeboxes; it visualizes the workflow, limits work in progress and pulls the next item whenever capacity frees up, so new work can enter at any moment. Scrum instead uses fixed-length iterations with prescribed accountabilities and events. Neither framework requires story points; that is an optional estimating practice.',
  },
  {
    id: 35,
    domain: DOMAIN,
    topic: 'Quibank Q21',
    prompt: 'A team keeps deferring cleanup of code shortcuts in order to finish more items each iteration. What is the likely consequence?',
    options: [
      { key: 'a', text: "The team's definition of done will expand on its own to absorb the deferred cleanup work." },
      { key: 'b', text: "The team's velocity will rise permanently, because less time is spent on non-delivery work." },
      { key: 'c', text: "The team's product owner becomes responsible for scheduling the cleanup as separate projects." },
      { key: 'd', text: "The team's later iterations will slow, because accumulated shortcuts make each change costlier." },
    ],
    correct: 'd',
    explanation:
      'Deferred shortcuts are technical debt: they buy speed now and charge interest on every later change made to that part of the product. Continuous attention to technical excellence, together with improvements chosen at the retrospective, is what keeps a team able to deliver at a steady pace over time.',
  },
  {
    id: 36,
    domain: DOMAIN,
    topic: 'Quibank Q22',
    prompt: 'A team adopting Extreme Programming (XP) will have two developers share one workstation while writing production code. How does XP describe this practice?',
    options: [
      { key: 'a', text: 'A senior developer teaches a junior who watches and takes notes.' },
      { key: 'b', text: 'Two developers split a story and code separate halves in parallel.' },
      { key: 'c', text: 'Two equals jointly write code at one computer to raise quality.' },
      { key: 'd', text: 'One developer writes code while the other later reviews it alone.' },
    ],
    correct: 'c',
    explanation:
      'In XP pair programming, two people sit at one computer, pass the keyboard back and forth and both concentrate on the code being written, which yields much higher quality. XP states explicitly that pairing is not mentoring: it is two people working as equals, so a teacher-and-observer setup, a later solo review, or splitting the work in parallel all miss the practice.',
  },
  {
    id: 37,
    domain: DOMAIN,
    topic: 'Quibank Q23',
    prompt: "A developer on an XP team is about to build a new function that calculates shipping fees. Under XP's test-first rule, what should the developer do first?",
    options: [
      { key: 'a', text: 'Write a unit test that the new code must pass.' },
      { key: 'b', text: 'Write the full function, then add tests for it.' },
      { key: 'c', text: 'Ask the tester to draft a manual test script.' },
      { key: 'd', text: 'Wait for the iteration review to define tests.' },
    ],
    correct: 'a',
    explanation:
      "XP's rule is to code the unit test first, before the production code, and then write just enough code to make it pass. Writing the test first forces the developer to pin down what the code must do, turns the requirement into an executable specification and gives immediate feedback on when the work is finished; adding tests afterward, handing testing to someone else, or deferring it loses those benefits.",
  },
  {
    id: 38,
    domain: DOMAIN,
    topic: 'Quibank Q24',
    prompt: 'Two pairs on an XP team are each working on separate changes to the same system. How often does XP advise them to integrate and commit their code to the shared repository?',
    options: [
      { key: 'a', text: 'Once per iteration, just before the iteration review begins' },
      { key: 'b', text: 'Only after the whole feature is finished and fully tested' },
      { key: 'c', text: 'At each release, after a separate integration phase ends' },
      { key: 'd', text: 'Every few hours, never holding changes longer than a day' },
    ],
    correct: 'd',
    explanation:
      "XP's continuous integration rule says developers should integrate and commit every few hours whenever possible and never hold onto changes for more than a day. Integrating in small, frequent steps keeps everyone on the latest version and shrinks the area where a problem can hide, so compatibility issues surface early instead of piling up for an end-of-iteration or end-of-release integration.",
  },
  {
    id: 39,
    domain: DOMAIN,
    topic: 'Quibank Q25',
    prompt: "An XP team finds that the same validation logic has been copied into three modules and that an old feature is no longer used. What does XP's refactoring practice call for?",
    options: [
      { key: 'a', text: 'Leave working code alone until a separate cleanup release' },
      { key: 'b', text: 'Remove the redundancy and unused code as part of ongoing work' },
      { key: 'c', text: 'Log the duplication as a defect for the next project phase' },
      { key: 'd', text: 'Rewrite the three modules from scratch in a new iteration' },
    ],
    correct: 'b',
    explanation:
      'XP defines refactoring as removing redundancy, eliminating unused functionality and rejuvenating obsolete designs, and it says to refactor mercilessly throughout the whole life cycle so the design stays simple. XP rejects the idea that working code should be left untouched, because clean, concise code is easier to understand and change; deferring cleanup to a later release or phase, or rewriting from scratch, is not the practice.',
  },
  {
    id: 40,
    domain: DOMAIN,
    topic: 'Quibank Q26',
    prompt: "A kanban team's throughput fell from about 10 items per week to 5, while its WIP stayed the same. Using the Kanban Guide's definitions, what has changed?",
    options: [
      { key: 'a', text: 'Each item now takes less time from start to finish' },
      { key: 'b', text: 'Fewer work items have been started but not finished' },
      { key: 'c', text: 'Fewer work items are being finished per unit of time' },
      { key: 'd', text: 'Items are waiting longer before anyone starts them' },
    ],
    correct: 'c',
    explanation:
      'The Kanban Guide defines throughput as the number of work items finished per unit of time, so a drop from 10 to 5 per week means fewer items are being completed. WIP (items started but not finished) is stated to be unchanged, and finishing fewer items with the same WIP means items are taking longer, not shorter, from start to finish; time spent waiting before work starts is not what throughput measures.',
  },
  {
    id: 41,
    domain: DOMAIN,
    topic: 'Quibank Q27',
    prompt: 'On a kanban board, one item started 14 days ago and is still in the In Review column, while most items finish within 5 days. Which measure lets the team spot items like this before they are finished?',
    options: [
      { key: 'a', text: 'Time elapsed since each unfinished item started (work item age)' },
      { key: 'b', text: 'Time elapsed from start to finish of completed items (cycle time)' },
      { key: 'c', text: 'Number of items the system finishes per unit of time (throughput)' },
      { key: 'd', text: 'Number of items started but not yet finished on the board (WIP)' },
    ],
    correct: 'a',
    explanation:
      'The Kanban Guide defines work item age as the elapsed time between when an item started and the current date, so it can be read for items that are still in progress and flags one that has aged well beyond the usual 5 days. Cycle time is only known once an item finishes, throughput counts completed items, and WIP is a count of items rather than how long any one of them has been open.',
  },
  {
    id: 42,
    domain: DOMAIN,
    topic: 'Quibank Q28',
    prompt: "A team's cumulative flow diagram shows the band for the Testing state growing steadily wider over three weeks, while the Done band rises only slowly. What does this most likely indicate?",
    options: [
      { key: 'a', text: 'The team is finishing work faster than it starts it' },
      { key: 'b', text: 'Total project scope has been cut by the product owner' },
      { key: 'c', text: 'Velocity has risen and the team can take on more work' },
      { key: 'd', text: 'Work is accumulating in testing faster than it leaves' },
    ],
    correct: 'd',
    explanation:
      'A cumulative flow diagram is an area graph showing the quantity of work in each state over time, including arrivals, quantity in queue and departures. A band that keeps widening means more work is sitting in that state, because items enter it faster than they leave, which points to a bottleneck in testing; a slowly rising Done band confirms that work is not finishing quickly, and the chart says nothing about higher velocity or reduced scope.',
  },
  {
    id: 43,
    domain: DOMAIN,
    topic: 'Quibank Q29',
    prompt: 'Midway through a sprint, a senior stakeholder asks a developer to add a new report that is not part of the Sprint Goal. Under the Scrum Guide 2020, what should happen?',
    options: [
      { key: 'a', text: 'Add it to the Sprint Backlog now, since the stakeholder is senior' },
      { key: 'b', text: 'Bring the request to the Product Owner for the Product Backlog' },
      { key: 'c', text: 'Have the Scrum Master approve it and assign it to a developer' },
      { key: 'd', text: 'Cancel the sprint so that a new one can include the report' },
    ],
    correct: 'b',
    explanation:
      'The Scrum Guide says that during the Sprint no changes are made that would endanger the Sprint Goal, and that anyone wanting to change the Product Backlog does so by convincing the Product Owner, who is accountable for ordering it. The new report therefore goes to the Product Owner to be ordered in the Product Backlog for a future sprint; seniority does not override this, the Scrum Master does not assign work, and only the Product Owner can cancel a sprint, and only when the Sprint Goal becomes obsolete.',
  },
]
