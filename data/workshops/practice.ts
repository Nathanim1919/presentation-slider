import type { Slide } from '@/lib/types';

/* ==========================================================
   002 — PRACTICE & HANDS-ON EXERCISES SLIDES (5 Slides)
   ========================================================== */

export const practiceSlides: Slide[] = [
  // SLIDE 01 ── LET'S START TO SEE IN PRACTICE
  {
    id: 'lets-see-in-practice',
    title: "Let's See in Practice",
    type: 'hero',
    content: {
      meta: 'HANDS-ON LABS',
      headline: "Let's Start to See in Practice",
      subheadline: 'Theory is only as valuable as what you can build with it.',
      footer: 'Grab a notebook or paper. You are about to design.',
    },
    speakerNotes: [
      'Transition from lecture mode into active workshop participation.',
      '"We have covered mental models, UX principles, and real interactive scenarios. Now it\'s time to put product thinking to the test."',
    ],
  },

  // SLIDE 02 ── EXERCISE 01: GENERATE 10 BAD IDEAS
  {
    id: 'exercise-bad-ideas',
    title: 'Exercise 01: 10 Bad Ideas',
    type: 'exercise',
    content: {
      instruction:
        'How might we make waiting at a hospital less frustrating? You have 60 seconds. Write as many solutions as possible.',
      timeLimit: 60,
      steps: [
        'Do not filter: write down the absurd, impractical, and strange.',
        'Push past the first 3 obvious ideas (an app, TV screen, comfortable chairs).',
        'Pick the most provocative idea and extract the hidden insight.',
      ],
      prompt:
        'Your first idea is rarely your best. Breakthrough solutions only emerge after you exhaust the obvious.',
    },
    speakerNotes: [
      'Start the 60-second timer.',
      'Tell the audience: no editing, no judging. Speed over polish.',
      'After 60 seconds, have 2 people share their wildest idea and discuss the insight behind it.',
    ],
  },

  // SLIDE 03 ── EXERCISE 02: DECONSTRUCT THE FRICTION
  {
    id: 'exercise-deconstruct-friction',
    title: 'Exercise 02: Deconstruct Friction',
    type: 'exercise',
    content: {
      instruction:
        'Pick a digital product you used today that frustrated you. Diagnose the exact breakdown.',
      duration: '3 minutes',
      steps: [
        'Goal & Moment: What were you trying to accomplish, and when did you hesitate?',
        'Principle: Did it fail at Affordance, Error Recovery, Feedback, or Hierarchy?',
        'Redesign: How would you fix that single screen or interaction in 1 step?',
      ],
      prompt:
        'Engineers diagnose stack traces. Product designers diagnose cognitive friction.',
    },
    speakerNotes: [
      'Give the room 3 minutes to reflect and jot down notes.',
      'Encourage them to share their diagnosis with the person next to them.',
    ],
  },

  // SLIDE 04 ── EXERCISE 03: WIREFRAME THE HAPPY PATH
  {
    id: 'exercise-wireframe-flow',
    title: 'Exercise 03: The Happy Path',
    type: 'exercise',
    content: {
      instruction:
        'Sketch a 3-step checkout or signup flow prioritizing clarity, trust, and zero cognitive friction.',
      duration: '5 minutes',
      steps: [
        'Step 1 — Input & Intent: Zero unnecessary fields, clear affordances.',
        'Step 2 — Confirmation & Trust: Complete cost transparency, explicit action labels.',
        'Step 3 — Success & Feedback: Immediate confirmation with unambiguous next steps.',
      ],
      prompt: "Don't draw buttons. Draw the sequence of human confidence.",
    },
    speakerNotes: [
      'Encourage quick paper sketches or notepad wireframes.',
      'Remind them: UX is about the flow and certainty, not pixel decoration.',
    ],
  },

  // SLIDE 05 ── PRACTICE COMPLETE & QUESTIONS
  {
    id: 'practice-closing',
    title: 'Practice Complete',
    type: 'contact',
    content: {
      heading: 'Great Work.',
      name: 'Nathanim Tadele',
      website: 'https://nathanim.dev',
      links: [
        {
          label: 'Website',
          value: 'nathanim.dev',
          url: 'https://nathanim.dev',
          icon: 'globe',
        },
        {
          label: 'LinkedIn',
          value: 'Nathanim Tadele',
          url: 'https://www.linkedin.com/in/nathanim-tadele-762099247/',
          icon: 'linkedin',
        },
        {
          label: 'GitHub',
          value: 'nathanim1919',
          url: 'https://github.com/nathanim1919',
          icon: 'github',
        },
      ],
      backToWorkshops: true,
      backToWorkshopsLabel: 'BACK TO WORKSHOPS',
    },
    speakerNotes: [
      'Recap the practice session and open the floor for final questions.',
      'Click BACK TO WORKSHOPS or press Esc to return to the workshop menu.',
    ],
  },
];
