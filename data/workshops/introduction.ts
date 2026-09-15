import type { Slide } from '@/lib/types';

/* ==========================================================
   00 — INTRODUCTION SLIDES (5 Slides)
   A human, authentic story of engineering & design by building.
   ========================================================== */

export const introductionSlides: Slide[] = [
  // SLIDE 01 ── WHO'S BEHIND THE WORKSHOP?
  {
    id: 'intro-who-behind-workshop',
    title: "Who's Behind the Workshop?",
    type: 'hero',
    content: {
      avatar: '/photo_2026-01-05_02-51-50.jpg',
      meta: "WHO'S BEHIND THE WORKSHOP?",
      headline: 'NATHANIM TADELE',
      subheadline: 'Full-Stack Software Engineer',
      footer: '3+ years building digital products',
    },
    speakerNotes: [
      'Take a brief pause before introducing yourself.',
      'Introduce yourself briefly, authentically, and confidently.',
      'Do not read a list of 15 technologies — let your projects and live craft speak for themselves.',
      'Key anchor: Full-stack engineer with 3+ years building digital products.',
    ],
  },

  // SLIDE 02 ── MY JOURNEY
  {
    id: 'intro-my-journey',
    title: 'My Journey',
    type: 'intro_journey',
    content: {
      heading: 'My Path Through Software',
      steps: [
        { label: 'CODE' },
        { label: 'FRONTEND' },
        { label: 'FULL-STACK' },
        { label: 'PRODUCTS' },
        { label: 'DESIGN BY BUILDING' },
      ],
      story: [
        '“I started with frontend.”',
        'I loved turning ideas into interfaces that people could actually interact with.',
        'Over time, I moved into full-stack engineering — but I never really left the frontend.',
      ],
    },
    speakerNotes: [
      'Share your personal origin story from frontend to full-stack.',
      'Explain that you never lost your obsession with interface and human interaction.',
      'Keep it conversational: "I loved turning ideas into something clickable."',
    ],
  },

  // SLIDE 03 ── THE UNEXPECTED PART
  {
    id: 'intro-unexpected-part',
    title: 'The Unexpected Part',
    type: 'intro_build',
    content: {
      unexpectedQuote: "I DON'T REALLY USE FIGMA.",
      subQuote: 'At least, not the way you might expect.',
      primaryHeading: 'I DESIGN BY BUILDING.',
      workflow: ['IDEA', 'CODE', 'SEE IT', 'USE IT', 'BREAK IT', 'CHANGE IT', 'REPEAT'],
      explanation: [
        'For me, the browser is part of my design tool.',
        "I think about spacing, hierarchy, interaction, animation, responsiveness, and edge-case states while I'm actually writing the code.",
      ],
      note: 'This is just the way I developed my own design process — Figma is great, but code gives me immediate tactile reality.',
    },
    speakerNotes: [
      'Deliver the punchline with confidence: "I don\'t really use Figma."',
      'Pause for a second before clicking to reveal "I design by building."',
      'Interact with the mini sandbox on the slide: switch spacing, toggle loading/error states.',
      'Emphasize: this is not saying Figma is bad — it is explaining your direct, code-first design philosophy.',
    ],
  },

  // SLIDE 04 ── WHAT I LOVE BUILDING
  {
    id: 'intro-what-i-build',
    title: 'What I Love Building',
    type: 'intro_projects',
    content: {
      heading: 'I LOVE BUILDING THINGS.',
      statements: [
        'When I’m not working, I’m usually building something.',
        'Most of my free time eventually turns into another project.',
        'Because the best way to understand how an interface feels is to build it.',
      ],
      quote: 'Software is learned by building software.',
    },
    speakerNotes: [
      'Keep it direct, authentic, and grounded.',
      'State simply: you just really love building products in your free time.',
      'That direct curiosity is how you learned to care deeply about design and craft.',
    ],
  },

  // SLIDE 05 ── WHY AM I GIVING THIS WORKSHOP?
  {
    id: 'intro-why-this-workshop',
    title: 'Why Am I Giving This Workshop?',
    type: 'intro_bridge',
    content: {
      question: 'So why am I talking to you about design?',
      reflections: [
        'Because I’ve spent the last few years on the other side of the screen.',
        'I’ve designed interfaces, built them, watched them break, redesigned them, and learned the hard truth about software…',
      ],
      climax: 'Good software isn’t just about making something work.',
      subclimax: 'It’s about making something make sense.',
      ctaText: 'Enter Workshop 01: UI/UX & Product Design',
      ctaUrl: '/workshops/ui-ux',
    },
    speakerNotes: [
      'Transition smoothly from your background into the core theme of the workshop.',
      'Deliver the climax: "Good software isn\'t just about making something work. It\'s about making something make sense."',
      'Click the button or navigate forward to enter the main UI/UX & Product Design workshop deck.',
    ],
  },
];
