import type { PMPQuestion } from './pmp-quiz-types'

export const people10Questions: PMPQuestion[] = [
  {
    id: 1,
    domain: 'People',
    topic: 'Stakeholder Register (Impact & Influence)',
    prompt:
      "Your project has been in progress for six months. Someone you haven't met approaches you and says he hasn't been engaged sufficiently, even though he believes his team is highly impacted by the change. He warns he may block the project. What will you do next?",
    options: [
      { key: 'a', text: 'Perform a stakeholder engagement assessment with the stakeholder' },
      { key: 'b', text: 'Add him to the stakeholder register, including his salary and interests' },
      { key: 'c', text: 'Add him to the stakeholder register, including his impact and influence' },
      { key: 'd', text: 'Raise a risk to project delivery due to the nature of his actions' },
    ],
    correct: 'c',
    explanation:
      "A previously unidentified stakeholder needs to be captured in the stakeholder register first, recording their impact and influence — that's the foundational step before any engagement assessment, risk escalation, or planning can happen. Salary isn't relevant stakeholder register data, and jumping to a risk or an assessment before the stakeholder is even properly registered skips the basic first step.",
  },
  {
    id: 2,
    domain: 'People',
    topic: 'Stakeholder Engagement Planning',
    prompt:
      "A project manager realizes stakeholder interests will conflict and decides to use a stakeholder engagement assessment matrix. It pinpoints an influential stakeholder who is resistant. The PM needs to align this stakeholder's expectations. What should the PM do?",
    options: [
      { key: 'a', text: 'Produce a stakeholder engagement plan' },
      { key: 'b', text: 'Convey the stakeholder engagement plan' },
      { key: 'c', text: 'Gain consensus on the objectives by meeting with all stakeholders' },
      { key: 'd', text: 'Ensure the stakeholder register is complete and updated' },
    ],
    correct: 'a',
    explanation:
      'With a resistant, influential stakeholder identified via the assessment matrix, the next step is to produce a stakeholder engagement plan — the document that defines the strategies to move that stakeholder toward the desired engagement level. Conveying a plan that does not yet exist is premature, a full consensus-building meeting with everyone skips targeted planning for this specific stakeholder, and the register is already complete at this stage (the assessment matrix was built from it).',
  },
  {
    id: 3,
    domain: 'Process',
    topic: 'Communications Management Plan Review',
    prompt:
      'Your project team is distributed across different countries, and communication issues are causing misunderstandings. What should you do FIRST?',
    options: [
      { key: 'a', text: 'Replace the remote team with local members' },
      { key: 'b', text: 'Conduct a team-building workshop to improve trust' },
      { key: 'c', text: 'Review and update the communications management plan' },
      { key: 'd', text: 'Escalate the issue to HR' },
    ],
    correct: 'c',
    explanation:
      'Recurring misunderstandings across a distributed team point to a gap in how communication is planned — reviewing and updating the communications management plan addresses the root cause. Replacing team members is drastic and does not fix the communication approach itself, a team-building workshop may help morale but does not directly fix the planning gap, and escalating to HR is not the right channel for a communications-process issue.',
  },
  {
    id: 4,
    domain: 'Process',
    topic: 'Communication Channels Formula',
    prompt:
      'A project currently has 8 stakeholders. Following an expansion, 4 additional stakeholders join. How many additional communication channels are created?',
    options: [
      { key: 'a', text: 'Channels rise from 28 to 55, adding 27 new channels' },
      { key: 'b', text: 'Channels rise from 28 to 66, adding 38 new channels' },
      { key: 'c', text: 'Channels rise from 36 to 66, adding 30 new channels' },
      { key: 'd', text: 'Channels rise from 28 to 78, adding 50 new channels' },
    ],
    correct: 'b',
    explanation:
      'Using n(n-1)/2: with 8 stakeholders, channels = 8x7/2 = 28. After adding 4 more (12 total), channels = 12x11/2 = 66. The increase is 66 - 28 = 38 new channels.',
  },
  {
    id: 5,
    domain: 'People',
    topic: 'Facilitating Technical Conflict',
    prompt:
      'Two senior developers disagree over the technical architecture. The dispute is now hurting team morale and sprint velocity, and both viewpoints have merit. What should the project manager do FIRST?',
    options: [
      { key: 'a', text: 'Escalate to the functional manager and have one developer reassigned' },
      { key: 'b', text: 'Decide the architecture yourself and direct both to follow it now' },
      { key: 'c', text: 'Let the disagreement run its course, as skilled peers resolve it' },
      { key: 'd', text: 'Facilitate a joint discussion to combine both views into a solution' },
    ],
    correct: 'd',
    explanation:
      'With both viewpoints having genuine merit, facilitating a joint discussion to collaborate toward a combined solution is the appropriate first move — this is the collaborate/problem-solve conflict resolution mode PMI favors when a durable, high-quality outcome matters. Escalating to reassign a developer is heavy-handed and premature, unilaterally deciding the architecture yourself bypasses the team\'s expertise, and letting it run its course ignores the real damage already being done to morale and velocity.',
  },
  {
    id: 6,
    domain: 'Process',
    topic: 'Interactive Communication for Sensitive Issues',
    prompt:
      'A complex, sensitive misunderstanding has arisen between two team leads, and the PM must confirm both fully understand the resolution. Which communication method is MOST appropriate?',
    options: [
      { key: 'a', text: 'Interactive communication, such as a facilitated live meeting' },
      { key: 'b', text: 'Push communication, such as a detailed email summary sent out' },
      { key: 'c', text: 'Pull communication, such as a posted knowledge-base article' },
      { key: 'd', text: 'Formal written communication, such as a signed record memo' },
    ],
    correct: 'a',
    explanation:
      'Interactive communication is the only method that lets the PM confirm in real time that both parties actually understand the resolution, since it allows for immediate two-way exchange and clarification. Push and pull communication are one-directional and cannot confirm mutual understanding, and a formal written memo documents an outcome but does not itself verify comprehension the way a live, facilitated conversation does.',
  },
  {
    id: 7,
    domain: 'Process',
    topic: 'External Communication',
    prompt:
      'A project manager corresponds with government regulators outside the organisation regarding compliance obligations. This is BEST classified as which type of communication?',
    options: [
      { key: 'a', text: 'Internal communication within the performing organisation' },
      { key: 'b', text: 'External communication with parties outside the organisation' },
      { key: 'c', text: 'Vertical communication flowing upward through governance levels' },
      { key: 'd', text: 'Formal communication documented for regulatory audit purposes' },
    ],
    correct: 'b',
    explanation:
      'Government regulators sit outside the performing organization, so this correspondence is external communication by definition. It is not internal (the regulator is not part of the organization), not vertical (that describes communication flowing up or down within an organizational hierarchy), and while it may also happen to be documented formally, the defining characteristic being tested here is that the audience is external.',
  },
  {
    id: 8,
    domain: 'People',
    topic: 'Expert Power',
    prompt:
      'A project manager operates in a weak matrix organisation and has no formal authority over team members. Team members consistently deliver because they trust her technical depth and judgment. Which type of power is she exercising?',
    options: [
      { key: 'a', text: "Formal/positional power derived from her role title in the organisation" },
      { key: 'b', text: 'Coercive power backed by consequences for non-performance' },
      { key: 'c', text: 'Reward power tied to performance bonuses and recognition systems' },
      { key: 'd', text: 'Expert power built on knowledge, skill, and demonstrated competence' },
    ],
    correct: 'd',
    explanation:
      "Since she has no formal authority in a weak matrix and the team follows her because they trust her technical depth and judgment, this is expert power — influence earned through demonstrated knowledge and competence rather than positional authority, consequences, or rewards.",
  },
  {
    id: 9,
    domain: 'People',
    topic: 'Cultural Awareness in Stakeholder Engagement',
    prompt:
      'A project manager is onboarding a new team member from Thailand into a global Agile team. During the first sprint planning, the new member agrees to all task estimates proposed by others and does not raise concerns, even when timelines seem aggressive. What should the project manager do to gather the member\'s genuine input?',
    options: [
      { key: 'a', text: 'Send a team-wide anonymous survey after each sprint planning session to collect honest feedback on estimates' },
      { key: 'b', text: 'Pair the new member with a senior teammate from a similar cultural background to encourage open discussion during planning' },
      { key: 'c', text: 'Ask the member to share their concerns during the next sprint planning by calling on them individually in the meeting' },
      { key: 'd', text: 'Follow up with the member in a private one-on-one conversation to ask about their comfort level with the estimates' },
    ],
    correct: 'd',
    explanation:
      'A private one-on-one conversation creates a safe space where the member can express genuine concerns without social pressure — this aligns with collectivist cultural norms common in many Asian cultures where open disagreement in a group setting is avoided. A team-wide anonymous survey is less targeted and slower, pairing with a similar-background teammate does not guarantee openness during the actual planning meeting, and calling on the member individually in the group setting recreates the exact social pressure that caused the silence in the first place.',
  },
  {
    id: 10,
    domain: 'People',
    topic: 'Role-Based Accountability for High-Turnover Teams',
    prompt:
      'A project manager designs a new resource management approach for a hybrid team blending permanent members with rotating specialists. Turnover is high and each departure leaves gaps in accountability. What should the manager build to achieve stability?',
    options: [
      { key: 'a', text: 'A responsibility framework tied to defined roles rather than named individuals, so incoming specialists inherit clear duties' },
      { key: 'b', text: 'A rotating RACI matrix updated each time a specialist leaves, listing every current person against each project task' },
      { key: 'c', text: 'A charter section that assigns accountability to whichever senior member has the longest remaining tenure on the team' },
      { key: 'd', text: 'A detailed competency register mapping each named specialist to their skills and past deliverable contributions' },
    ],
    correct: 'a',
    explanation:
      'Role-based accountability decouples duties from specific individuals, so incoming specialists inherit clear responsibilities automatically when someone leaves — in a high-turnover environment, roles outlast people. A RACI matrix that must be manually rebuilt every departure does not scale and is prone to gaps, tying accountability to whoever has the longest tenure creates an arbitrary and unstable rule, and a competency register tied to named individuals suffers the same turnover problem it is meant to solve.',
  },
]
