import type { Workshop, Slide } from '@/lib/types';
import { slides as allUiUxSlides } from '@/data/slides';

/* ==========================================================
   00 — INTRODUCTION SLIDES (4 Slides)
   ========================================================== */

export const introductionSlides: Slide[] = [
  // SLIDE 01 ── WHO I AM
  {
    id: 'intro-who-i-am',
    title: 'Who I Am',
    type: 'hero',
    content: {
      meta: 'ABOUT THE SPEAKER',
      headline: 'WHO I AM',
      subheadline: 'Nathanim Tadele — Software Engineer & Interface Craftsman',
      footer: 'Building software where technical depth meets human experience.',
    },
    speakerNotes: [
      'Take a brief pause before introducing the workshop series.',
      'Introduce yourself briefly, authentically, and confidently.',
      'Establish credibility: you write production full-stack code and build end-to-end products.',
    ],
  },

  // SLIDE 02 ── FULL STACK & FRONTEND FREEDOM
  {
    id: 'intro-fullstack-frontend-freedom',
    title: 'Full Stack & Frontend Freedom',
    type: 'comparison',
    content: {
      heading: 'Full-stack by foundation. Frontend by obsession.',
      connectorLabel: 'BRIDGED BY INTENT',
      left: {
        label: 'THE FULL STACK',
        heading: 'Architecture & Logic',
        points: [
          'Designing scalable APIs, schemas, databases, and business rules.',
          'Ensuring reliability, performance, security, and state integrity.',
          'Solving complex algorithmic and infrastructural challenges.',
          'The engine that gives a product stability and computing power.',
        ],
        tone: 'neutral',
      },
      right: {
        label: 'THE FRONTEND',
        heading: 'Freedom & Human Touch',
        points: [
          'Where cold code meets warm human psychology and perception.',
          'The creative freedom to shape how someone feels in every millisecond.',
          'Crafting micro-interactions, layout rhythm, and kinetic fluidity.',
          'No matter how strong the backend is, the user experiences the frontend.',
        ],
        tone: 'positive',
      },
    },
    speakerNotes: [
      'Explain your perspective as a full-stack engineer.',
      'Highlight why you love frontend: it gives you the creative freedom to directly influence human behavior.',
      'Emphasize: "Backend gives a product power. Frontend gives a product humanity."',
    ],
  },

  // SLIDE 03 ── HOW I WORK & THINK
  {
    id: 'intro-why-design-matters',
    title: 'How I Work & Think',
    type: 'explanation',
    content: {
      heading: 'Why I treat interface as an engineering discipline.',
      body: [
        'Too often, software is built strictly from the inside out — starting from database schemas and ending with screens hastily glued on top.',
        'I build from the outside in — obsessing over the human sitting on the other side of the glass, then architecting every layer of the system to serve that experience.',
        'Great frontend isn’t decorative styling. It is cognitive clarity, respect for the user’s time, and the reason software feels effortless instead of exhausting.',
      ],
      visual: {
        type: 'list',
        items: [
          'Logic makes it functional',
          'Architecture makes it scale',
          'Design makes it intuitive',
          'Craft makes it memorable',
        ],
      },
    },
    speakerNotes: [
      'Connect your engineering discipline to this workshop series.',
      'Address the common developer pitfall: "If the API works and the tests pass, my job is done."',
      'Challenge the audience: true engineering craftsmanship means the product solves human problems seamlessly.',
    ],
  },

  // SLIDE 04 ── WORKSHOP ROADMAP / OVERVIEW
  {
    id: 'intro-table-of-contents',
    title: 'Workshop Overview',
    type: 'table_of_contents',
    content: {
      meta: 'THE ROADMAP',
      heading: 'What We’re Exploring',
      statement: 'From engineering logic and mental models to live interactive design sandboxes.',
      items: [
        {
          number: '01',
          title: 'Mental Models',
          description: 'Why good design is invisible & why the screen is never the beginning.',
          tag: 'FOUNDATION',
        },
        {
          number: '02',
          title: 'Design Thinking',
          description: 'Balancing desirability, feasibility & viability in a continuous learning loop.',
          tag: 'FRAMEWORK',
        },
        {
          number: '03',
          title: 'UX vs UI',
          description: 'Why UX is bigger than pixels — thinking in flows, friction & human context.',
          tag: 'PERSPECTIVE',
        },
        {
          number: '04',
          title: 'Problem Framing',
          description: 'Finding the problem behind the problem with "How Might We" & rapid tests.',
          tag: 'DISCOVERY',
        },
        {
          number: '05',
          title: 'Good vs Bad UX',
          description: '6 live interactive sandboxes breaking down affordance, errors & trust.',
          tag: 'INTERACTIVE LAB',
        },
        {
          number: '06',
          title: 'Product Reality',
          description: 'Accessibility, cognitive load, and why you are not done when you ship.',
          tag: 'SCALE & CRAFT',
        },
      ],
      footnote: 'Select UI/UX & Product Design from the menu or header to begin.',
    },
    speakerNotes: [
      'Give the audience a roadmap of what this workshop curriculum represents.',
      'Use the BACK TO WORKSHOPS button or header to select Workshop 01.',
    ],
  },
];

/* ==========================================================
   01 — UI/UX & PRODUCT DESIGN SLIDES (29 Slides)
   ========================================================== */

export const uiUxSlides: Slide[] = allUiUxSlides.filter(
  (s) =>
    s.id !== 'who-i-am' &&
    s.id !== 'fullstack-frontend-freedom' &&
    s.id !== 'why-design-matters' &&
    s.id !== 'table-of-contents',
);

/* ==========================================================
   WORKSHOP REGISTRY (Only Active Workshops)
   ========================================================== */

export const workshops: Workshop[] = [
  {
    id: 'introduction',
    number: '00',
    title: 'INTRODUCTION',
    subtitle: 'Who I am · How I work · Workshop overview',
    status: 'available',
    slides: introductionSlides,
  },
  {
    id: 'ui-ux',
    number: '01',
    title: 'UI/UX & PRODUCT DESIGN',
    subtitle: 'Designing interfaces by building',
    status: 'available',
    slides: uiUxSlides,
  },
];

export function getAllWorkshops(): Workshop[] {
  return workshops;
}

export function getWorkshopById(id: string): Workshop | undefined {
  return workshops.find((w) => w.id === id);
}
