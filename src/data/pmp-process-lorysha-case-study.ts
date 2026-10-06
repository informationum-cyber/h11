import type { PMPScenario } from './pmp-quiz-types'

export const pmpProcessLoryshaCaseStudy: PMPScenario[] = [
  {
    id: 1,
    title: 'Meridian Freight — Warehouse Automation Rollout',
    scenarioText:
      "Meridian Freight is automating its largest distribution center, installing robotic sorting arms and a new warehouse management system (WMS). The physical installation — electrical work, conveyor reinforcement, and robotic arm mounting — follows a predictive approach with a fixed go-live date tied to the holiday peak season. The WMS software is being built by an in-house team using two-week sprints, since the exact picking-and-routing logic is still being refined based on warehouse layout tests.\n\nThree months into the ten-month project, the following has occurred:\n• The project's Earned Value report shows a Cost Performance Index (CPI) of 0.88 and a Schedule Performance Index (SPI) of 0.95.\n• A new fire-safety code was published requiring additional emergency-stop wiring on all robotic arms — work that was not in the original scope.\n• The contingency reserve included a planned response for 'conveyor vendor delivery delay,' and that exact delay has now occurred.\n• During a sprint review, warehouse supervisors flagged that the WMS's pick-path logic does not account for a narrow aisle recently added to the layout.\n• A single electrical subcontractor has fallen behind on three different work packages, each on a different part of the critical path.\n• Leadership has asked for a go/no-go confidence update ahead of a board meeting next week.",
    questions: [
      {
        domain: 'Process',
        topic: 'Earned Value Interpretation',
        prompt:
          "Given the project's CPI of 0.88 and SPI of 0.95, how should the project manager characterize current performance to the team?",
        options: [
          {
            key: 'a',
            text: 'The project is both over budget and behind schedule, and both trends need active management attention.',
          },
          {
            key: 'b',
            text: 'The project is over budget but ahead of schedule, so the two issues are expected to offset each other.',
          },
          {
            key: 'c',
            text: 'The project is under budget and behind schedule, which is typical for predictive civil work.',
          },
          {
            key: 'd',
            text: 'The project is under budget and ahead of schedule, so no further cost or schedule action is needed.',
          },
        ],
        correct: 'a',
        explanation:
          "A CPI below 1.0 (0.88) means the project is spending more than planned for the value delivered — over budget. An SPI below 1.0 (0.95) means less work has been completed than planned — behind schedule. Both indicators point the same direction and both deserve attention; they don't offset each other, and neither is a 'no action needed' situation.",
        id: 1,
      },
      {
        domain: 'Process',
        topic: 'Change Control for a Regulatory Requirement',
        prompt:
          'Regarding the new fire-safety code requiring additional emergency-stop wiring, what should the project manager do first?',
        options: [
          {
            key: 'a',
            text: 'Instruct the electrical subcontractor to install the wiring immediately, since safety codes override normal change control.',
          },
          {
            key: 'b',
            text: 'Wait for the holiday go-live date to pass, then retrofit the emergency-stop wiring afterward.',
          },
          {
            key: 'c',
            text: "Assess the wiring requirement's impact on scope, cost, and schedule, then submit it through change control.",
          },
          {
            key: 'd',
            text: 'Deny the requirement as out of scope, since it was not included in the original project charter.',
          },
        ],
        correct: 'c',
        explanation:
          "Even a mandatory external requirement still needs its impact on scope, cost, and schedule assessed and processed through the project's change control process before work proceeds — skipping that step bypasses governance even though the work itself is necessary. Delaying it past go-live risks non-compliance at launch, and simply denying a legally mandated requirement isn't an option available to the project manager.",
        id: 2,
      },
      {
        domain: 'Process',
        topic: 'Executing a Planned Risk Response',
        prompt:
          'The conveyor vendor delivery delay that has now occurred was already identified in the risk register with a planned response. What should the project manager do?',
        options: [
          {
            key: 'a',
            text: 'Treat the delay as a brand-new risk and run it through risk identification and qualitative analysis from scratch.',
          },
          {
            key: 'b',
            text: 'Revisit the risk register and execute the already-planned response for this specific, previously identified risk.',
          },
          {
            key: 'c',
            text: 'Escalate the matter directly to the board ahead of schedule, bypassing the normal risk response process.',
          },
          {
            key: 'd',
            text: 'Absorb the delay into the schedule without executing any response, since it was already anticipated.',
          },
        ],
        correct: 'b',
        explanation:
          "Since this exact risk was already identified with a planned response sitting in the risk register, the correct move is to go back to that register and execute the existing response — there's no need to re-identify or re-analyze a risk that's already been planned for. Escalating directly to the board skips the team's own established process, and simply absorbing the delay without acting ignores the work already done to prepare for it.",
        id: 3,
      },
      {
        domain: 'Process',
        topic: 'Agile Backlog Response to a New Requirement Gap',
        prompt:
          "Regarding the WMS pick-path logic that doesn't account for the newly added narrow aisle, what should the project manager do?",
        options: [
          {
            key: 'a',
            text: 'Work with the product owner to add the aisle-routing fix to the backlog and prioritize it for an upcoming sprint.',
          },
          {
            key: 'b',
            text: 'Halt all sprints until the entire pick-path algorithm has been redesigned from the ground up.',
          },
          {
            key: 'c',
            text: 'Instruct the warehouse supervisors to manually route pickers around the narrow aisle indefinitely.',
          },
          {
            key: 'd',
            text: 'Defer the fix until final user acceptance testing, since it was only raised informally during a sprint review.',
          },
        ],
        correct: 'a',
        explanation:
          "In an agile context, a newly surfaced requirement gap like this belongs on the backlog, prioritized collaboratively with the product owner for an upcoming sprint — exactly how the team is meant to respond to new information. Halting all sprints is a drastic overreaction to one layout issue, relying on a permanent manual workaround doesn't fix the underlying system, and deferring a known issue to final UAT risks discovering it too late to fix cheaply.",
        id: 4,
      },
      {
        domain: 'Process',
        topic: 'Diagnosing a Shared Root Cause Across Work Packages',
        prompt:
          'The electrical subcontractor has fallen behind on three different work packages, each on a different part of the critical path. What should the project manager do FIRST?',
        options: [
          {
            key: 'a',
            text: "Terminate the subcontractor's contract immediately and issue an emergency procurement request for a replacement crew.",
          },
          {
            key: 'b',
            text: 'Add schedule contingency to each of the three affected work packages and continue monitoring without taking further action.',
          },
          {
            key: 'c',
            text: "Report the delays to leadership as three separate, unrelated schedule risks in the team's next scheduled status update.",
          },
          {
            key: 'd',
            text: "Meet with the subcontractor to understand the root cause behind all three delays and assess whether it's a single, shared constraint.",
          },
        ],
        correct: 'd',
        explanation:
          "Since all three delays trace back to the same subcontractor, the most effective first step is understanding whether there's one shared root cause (e.g., a staffing shortage) before deciding how to respond — that insight shapes everything else. Terminating the contract outright is a drastic step without first understanding the cause, adding contingency without investigating doesn't address the actual problem, and reporting the delays as unrelated risks misses the pattern connecting them.",
        id: 5,
      },
      {
        domain: 'Process',
        topic: 'Reporting Go-Live Confidence to Leadership',
        prompt:
          "Ahead of the board meeting, leadership wants a go/no-go confidence update. Given everything happening on the project, what should the project manager's update emphasize?",
        options: [
          {
            key: 'a',
            text: 'Only the original go-live date, since that is the single commitment the board originally approved at kickoff.',
          },
          {
            key: 'b',
            text: 'An honest picture of cost, schedule, the new regulatory requirement, and the subcontractor risk, connected to the go-live confidence level.',
          },
          {
            key: 'c',
            text: 'Only the current CPI and SPI figures, since cost and schedule indices are considered the most objective data available.',
          },
          {
            key: 'd',
            text: 'A simple green/yellow/red status color with no further explanation at all, to keep the update brief for the board.',
          },
        ],
        correct: 'b',
        explanation:
          'A credible go/no-go update needs to connect the real drivers — cost and schedule performance, the new regulatory scope addition, and the subcontractor risk — to an honest assessment of go-live confidence, so the board can make an informed decision. Reporting only the original date, only the EVM indices, or a bare color status all withhold context the board actually needs to assess risk to the holiday launch.',
        id: 6,
      },
    ],
  },
]
