import type { Slide } from '@/lib/types';

/**
 * UI/UX & Product Design — 31 slides across 8 Acts
 *
 * Content grounded in the "UI/UX Design vs Product Design" transcript:
 * UI    = user interface  → fonts, layout, colors, interaction, prototyping,
 *                           design systems, motion, responsive, accessibility
 * UX    = user experience → personas, journeys, flows, IA, usability, writing
 * PROD  = product design  → UI + UX + adoption, conversion, retention,
 *                           advocacy, growth, cost-effectiveness, scale
 */

const ACT = {
  I:    'ACT I · BREAK MENTAL MODELS',
  II:   'ACT II · UI',
  III:  'ACT III · UX',
  IV:   'ACT IV · PRODUCT DESIGN',
  V:    'ACT V · REAL PRODUCTS',
  VI:   'ACT VI · INTERACTION STATES',
  VII:  'ACT VII · DESIGN CHALLENGE',
  VIII: 'ACT VIII · THE FINAL MODEL',
} as const;

export const uiUxSlides: Slide[] = [

  /* ============================================================
     ACT I — BREAK THEIR MENTAL MODEL  (slides 01-04)
  ============================================================ */

  {
    id: 'act1-opening',
    type: 'hero',
    title: 'What is design?',
    act: ACT.I,
    content: {
      headline: 'What is design?',
      subheadline: 'Before we talk about titles and tools — let\'s start with something harder.',
      footer: 'Press → to begin',
    },
  },

  {
    id: 'act1-first-question',
    type: 'question',
    title: 'When you hear "UI/UX designer"…',
    act: ACT.I,
    content: {
      question: 'When you hear "UI/UX designer," what do you picture?',
      subtitle: 'Beautiful screens in Figma? Colors and buttons? Someone who makes apps look good? All true — and none of the full picture.',
    },
  },

  {
    id: 'act1-uber-question',
    type: 'statement',
    title: 'Why does Uber feel easy?',
    act: ACT.I,
    content: {
      statement:
        'You open Uber, tap once, watch a car move toward you, and arrive exactly where you said you would. Why does that feel effortless?',
      emphasis: 'low',
      attribution: 'Is it the app? The design? The engineering? Or something else entirely?',
    },
  },

  {
    id: 'act1-screen-not-product',
    type: 'reveal',
    title: 'A screen is not a product',
    act: ACT.I,
    content: {
      lines: [
        { text: 'A screen', size: 'large' as const, color: 'muted' as const },
        { text: 'is not', size: 'large' as const, color: 'muted' as const },
        { text: 'a product.', size: 'display' as const, color: 'primary' as const, emphasis: true },
      ],
      caption:
        'Design is the full experience — from the moment someone feels a need to the moment that need is resolved.',
    },
  },

  /* ============================================================
     ACT II — USER INTERFACE  (slides 05-07)
  ============================================================ */

  {
    id: 'act2-ui-transform',
    type: 'ui_transform',
    title: 'What UI actually controls',
    act: ACT.II,
    content: {
      heading: 'What does a UI designer actually control?',
      description:
        'Toggle each pillar to see what UI design is responsible for. Every change transforms the same login form.',
    },
  },

  {
    id: 'act2-beautiful-trap',
    type: 'statement',
    title: 'Beautiful isn\'t enough',
    act: ACT.II,
    content: {
      statement: 'Beautiful isn\'t enough.',
      emphasis: 'high' as const,
      attribution:
        'You can build the most gorgeous form in the world. If clicking the button produces no feedback — no loading state, no error, no success — the experience fails. UI without intent is decoration.',
    },
  },

  {
    id: 'act2-button-story',
    type: 'button_story',
    title: 'UI communicates',
    act: ACT.II,
    content: {
      heading: 'UI communicates — even without words.',
      narrative:
        'Hover it. Click it. Every state of this button is a design decision.',
    },
  },

  /* ============================================================
     ACT III — USER EXPERIENCE  (slides 08-12)
  ============================================================ */

  {
    id: 'act3-ux-begins',
    type: 'reveal',
    title: 'UX begins where the button ends',
    act: ACT.III,
    content: {
      lines: [
        { text: 'UX begins', size: 'large' as const, color: 'muted' as const },
        { text: 'where the button', size: 'large' as const, color: 'muted' as const },
        { text: 'ends.', size: 'display' as const, color: 'primary' as const, emphasis: true },
      ],
      caption:
        'UX stands for user experience — not just screens. It\'s about understanding who the user is, what they\'re trying to do, and removing every obstacle in their way.',
    },
  },

  {
    id: 'act3-uber-journey',
    type: 'journey',
    title: 'The Uber journey',
    act: ACT.III,
    content: {
      heading: 'One ride. Eight moments of truth.',
      product: 'Uber — Customer App',
      context:
        'The user experience isn\'t the button. It\'s the entire journey from need to destination.',
      mode: 'story',
      steps: [
        { id: 's1', label: 'Feel the need',       question: 'I need to get somewhere.' },
        { id: 's2', label: 'Open the app',         question: 'Where do I go first?' },
        { id: 's3', label: 'Enter destination',    question: 'Where am I going?' },
        { id: 's4', label: 'See the price',        question: 'How much will this cost?' },
        { id: 's5', label: 'Request a ride',       question: 'Did it work?' },
        { id: 's6', label: 'Find the driver',      question: 'Who is coming for me?' },
        { id: 's7', label: 'Watch them arrive',    question: 'Are they actually moving?' },
        { id: 's8', label: 'Reach destination',    question: 'Am I in the right place?' },
      ],
      insight:
        'Every step is a question the user is asking. UX design is the art of answering those questions before they have to be asked.',
      insightLabel: 'UX insight',
    },
  },

  {
    id: 'act3-uber-friction',
    type: 'journey',
    title: 'Where the experience breaks',
    act: ACT.III,
    content: {
      heading: 'Now: where does friction hide?',
      product: 'Uber — Friction Mode',
      context: 'Click the orange steps to reveal what breaks the experience.',
      mode: 'friction',
      steps: [
        { id: 's1', label: 'Feel the need',    question: 'I need to get somewhere.' },
        { id: 's2', label: 'Open the app',      question: 'Where do I go first?' },
        {
          id: 's3',
          label: 'Enter destination',
          question: 'Where am I going?',
          isFriction: true,
          frictionDetail: 'Autocomplete fails for new addresses',
        },
        {
          id: 's4',
          label: 'See the price',
          question: 'How much will this cost?',
          isFriction: true,
          frictionDetail: 'Surge multiplier is buried — user doesn\'t notice',
        },
        { id: 's5', label: 'Request a ride',    question: 'Did it work?' },
        {
          id: 's6',
          label: 'Find the driver',
          question: 'Who is coming for me?',
          isFriction: true,
          frictionDetail: 'Driver photo too small to identify from the street',
        },
        {
          id: 's7',
          label: 'Watch them arrive',
          question: 'Are they actually moving?',
          isFriction: true,
          frictionDetail: 'Map lags — driver appears stuck, user panics',
        },
        { id: 's8', label: 'Reach destination',  question: 'Am I in the right place?' },
      ],
      insight:
        'UX designers find friction. Then they remove it. That\'s the job.',
      insightLabel: 'UX role',
    },
  },

  {
    id: 'act3-ux-disciplines',
    type: 'principles',
    title: 'UX is more than screens',
    act: ACT.III,
    content: {
      heading: 'UX design — the full toolkit',
      statement:
        'UX expands well beyond how something looks. These are the disciplines a UX designer works across every day.',
      principles: [
        {
          title: 'Personas',
          description:
            'Who is the user? What are their goals, fears, and context? A UX designer puts themselves in the user\'s shoes.',
        },
        {
          title: 'User Journeys',
          description:
            'Every product has a before, during, and after. Journey mapping visualises the entire path — not just the screens.',
        },
        {
          title: 'User Flows',
          description:
            'How do users move through the system? Flows expose dead ends, unnecessary steps, and hidden complexity.',
        },
        {
          title: 'Information Architecture',
          description:
            'Where does content live? How is it named and grouped? IA makes sure users can find what they need.',
        },
        {
          title: 'Usability Testing',
          description:
            'A/B tests, user interviews, usability sessions. Real behaviour tells you what assumptions you got wrong.',
        },
        {
          title: 'UX Writing',
          description:
            'It\'s not just visuals. The words you choose — tone, language, voice — shape the experience as much as any colour.',
        },
      ],
    },
  },

  {
    id: 'act3-language-matters',
    type: 'before_after',
    title: 'The language matters',
    act: ACT.III,
    content: {
      heading: 'The same error. Two very different experiences.',
      before: {
        label: 'Bad UX writing',
        issues: ['Error 500', 'Something went wrong.', 'Try again.'],
      },
      after: {
        label: 'Good UX writing',
        improvements: [
          'We couldn\'t complete your payment.',
          'Your card wasn\'t charged.',
          'Check your details below and try again — or use a different card.',
        ],
      },
    },
  },

  /* ============================================================
     ACT IV — PRODUCT DESIGN  (slides 13-16)
  ============================================================ */

  {
    id: 'act4-who-are-we-designing-for',
    type: 'diagram',
    title: 'Who are we designing for?',
    act: ACT.IV,
    content: {
      direction: 'horizontal',
      caption:
        'A product designer thinks beyond the user. They sit at the intersection of user needs, business goals, and product metrics.',
      nodes: [
        { id: 'user',     label: 'The User',          description: 'Needs, goals, behaviours', icon: '👤' },
        { id: 'designer', label: 'Product Designer',   description: 'The centre of gravity',    icon: '⬡' },
        { id: 'business', label: 'The Business',       description: 'Revenue, scale, strategy', icon: '📈' },
      ],
    },
  },

  {
    id: 'act4-uber-products',
    type: 'comparison',
    title: 'Uber has multiple products',
    act: ACT.IV,
    content: {
      heading: 'One company. Multiple products. Multiple product designers.',
      left: {
        label: 'UI/UX Designer',
        points: [
          'Works across multiple projects',
          'May design 3–5 products at once',
          'Does it look good and work well?',
          'Moves across brands and industries',
        ],
        tone: 'neutral',
      },
      right: {
        label: 'Product Designer at Uber',
        points: [
          'Embedded in one product team',
          'Driver\'s App, Customer App, or Website',
          'Focused on adoption, retention, growth',
          'Part of the product lifecycle long-term',
        ],
        tone: 'positive',
      },
    },
  },

  {
    id: 'act4-product-questions',
    type: 'comparison',
    title: 'The product designer\'s questions',
    act: ACT.IV,
    content: {
      heading: 'Same product. Different questions.',
      connectorLabel: 'plus',
      left: {
        label: 'UI/UX asks…',
        points: [
          'Is this easy to use?',
          'How can I make it more user-friendly?',
          'How can I reduce friction?',
          'Is the information clear?',
          'Does it match the brand?',
        ],
        tone: 'neutral',
      },
      right: {
        label: 'Product Design adds…',
        points: [
          'Is this a right fit for the market?',
          'Does it align with business goals?',
          'How do we drive adoption?',
          'How do we improve conversion?',
          'How do we increase retention?',
          'How do we encourage advocacy?',
          'Is it consistent, flexible, scalable?',
          'Is it cost-effective?',
        ],
        tone: 'positive',
      },
    },
  },

  {
    id: 'act4-retention-loop',
    type: 'journey',
    title: 'The retention loop',
    act: ACT.IV,
    content: {
      heading: 'Product design is a lifecycle, not a project.',
      product: 'Growth mindset',
      context:
        'Product designers aren\'t handed a brief and done. They iterate on a living product over months and years.',
      mode: 'story',
      steps: [
        { id: 'r1', label: 'Discover',   question: 'Can users find the product?' },
        { id: 'r2', label: 'Adopt',      question: 'Do they sign up or download?' },
        { id: 'r3', label: 'Use',        question: 'Can they do the core task?' },
        { id: 'r4', label: 'Value',      question: 'Do they get real value?' },
        { id: 'r5', label: 'Return',     question: 'Do they come back again?' },
        { id: 'r6', label: 'Advocate',   question: 'Do they tell others?' },
        { id: 'r7', label: 'Expand',     question: 'Do they use more features?' },
        { id: 'r8', label: 'Optimise',   question: 'What do we improve next?' },
      ],
      insight:
        'Growth is a loop, not a line. Product designers are responsible for every stage.',
      insightLabel: 'Product mindset',
    },
  },

  /* ============================================================
     ACT V — DESIGN THROUGH REAL PRODUCTS  (slides 17-19)
  ============================================================ */

  {
    id: 'act5-airbnb',
    type: 'case_study',
    title: 'Airbnb: reducing uncertainty',
    act: ACT.V,
    content: {
      product: 'Airbnb',
      context:
        'The biggest barrier to booking wasn\'t price — it was uncertainty. Would strangers take care of your home? Would the listing match the photos?',
      problem: 'Trust was the product problem. Design had to solve it.',
      steps: [
        {
          action: 'UI decision',
          result:
            'Large, high-quality photography as the primary element. You\'re not booking a room — you\'re picturing yourself there.',
        },
        {
          action: 'UX decision',
          result:
            'Verified reviews from real guests. Social proof is part of the journey, not a footer footnote.',
        },
        {
          action: 'Product decision',
          result:
            'AirCover — every booking guaranteed. Turned the biggest business risk (distrust) into a growth driver (confidence).',
        },
      ],
      insight: 'Design solved a trust problem. That\'s not a UI problem. That\'s a product problem.',
    },
  },

  {
    id: 'act5-google-maps',
    type: 'case_study',
    title: 'Google Maps: system state',
    act: ACT.V,
    content: {
      product: 'Google Maps',
      context:
        'Google Maps always tells you what\'s happening — even when it doesn\'t know. It\'s a masterclass in communicating system state.',
      problem: 'How do you make GPS feel human, not robotic?',
      steps: [
        {
          action: 'UI decision',
          result:
            'The pulsing blue dot. Real-time animation makes GPS feel alive, not a static pin.',
        },
        {
          action: 'UX decision',
          result:
            '"Recalculating…" — acknowledges the mistake gracefully, removes blame, immediately shows a path forward.',
        },
        {
          action: 'Product decision',
          result:
            'Offline maps. Solves a real user problem (data on the road) while keeping users inside the Google ecosystem — retention through utility.',
        },
      ],
      insight: 'Every loading state, error state, and empty state is a design decision. Maps makes all of them feel intentional.',
    },
  },

  {
    id: 'act5-youtube',
    type: 'case_study',
    title: 'YouTube: helping decisions',
    act: ACT.V,
    content: {
      product: 'YouTube',
      context:
        'YouTube has billions of videos. The product design challenge is reducing infinite choice to a handful of perfect-feeling suggestions.',
      problem: 'How do you help someone decide what to watch in under 3 seconds?',
      steps: [
        {
          action: 'UI decision',
          result:
            'Thumbnail design is a discipline. The right thumbnail communicates value in under 0.1 seconds.',
        },
        {
          action: 'UX decision',
          result:
            'Progress bars on thumbnails. One small element that turns "I should watch this" into "I need to finish this."',
        },
        {
          action: 'Product decision',
          result:
            'Autoplay with a 5-second delay. Controversial UX — but a huge driver of watch time. A product decision that overrode pure UX logic.',
        },
      ],
      insight: 'The product goal (watch time) sometimes conflicts with the user goal (control). Product design navigates that tension.',
    },
  },

  /* ============================================================
     ACT VI — INTERACTION STATES  (slides 20-23)
  ============================================================ */

  {
    id: 'act6-seven-realities',
    type: 'button_states',
    title: 'One screen, seven realities',
    act: ACT.VI,
    content: {
      caption:
        'Developers build one button. Designers must define every state it can be in. Each state communicates something different.',
      states: [
        {
          id: 'default',
          label: 'Default',
          description: 'The baseline state',
          icon: '○',
          cssSelector: ':default',
          badge: 'RESTING',
          uxPrinciple: 'Clear visual affordance and baseline resting contrast.',
        },
        {
          id: 'hover',
          label: 'Hover',
          description: 'Feedback before commitment',
          icon: '◎',
          cssSelector: ':hover',
          badge: 'HOVER ME',
          uxPrinciple: 'Interactive affordance and elevation before the user commits.',
        },
        {
          id: 'focus',
          label: 'Focus',
          description: 'Keyboard / screen reader',
          icon: '◉',
          cssSelector: ':focus-visible',
          badge: 'TAB / CLICK',
          uxPrinciple: 'High-contrast accessible focus ring for keyboard & screen readers.',
        },
        {
          id: 'pressed',
          label: 'Pressed',
          description: 'Active / tap state',
          icon: '●',
          cssSelector: ':active',
          badge: 'PRESS & HOLD',
          uxPrinciple: 'Physical, tactile sink feedback confirming touch/click receipt.',
        },
        {
          id: 'loading',
          label: 'Loading',
          description: 'The system is working',
          icon: '⟳',
          cssSelector: '[aria-busy="true"]',
          badge: 'IN PROGRESS',
          uxPrinciple: 'Prevents double clicks and reassures the user that the request is running.',
        },
        {
          id: 'success',
          label: 'Success',
          description: 'It worked. Confirm it.',
          icon: '✓',
          cssSelector: '.is-success',
          badge: 'CONFIRMED',
          uxPrinciple: 'Clear positive completion signal before transitioning.',
        },
        {
          id: 'disabled',
          label: 'Disabled',
          description: 'Not available — explain why',
          icon: '⊘',
          cssSelector: ':disabled',
          badge: 'TRY HOVERING',
          uxPrinciple: 'Never disable without clear guidance on what is missing to proceed.',
        },
      ],
    },
  },

  {
    id: 'act6-loading-state',
    type: 'before_after',
    title: 'The loading state',
    act: ACT.VI,
    content: {
      heading: 'What happens between the click and the result?',
      before: {
        label: 'No loading state',
        issues: [
          'User clicks "Submit"',
          'Nothing changes',
          'Did it work? Did it break?',
          'User clicks again',
          'Duplicate form submission',
        ],
      },
      after: {
        label: 'With a loading state',
        improvements: [
          'User clicks "Submit"',
          '"Processing…" spinner appears',
          'Button becomes disabled',
          'User knows the system heard them',
          'One clean submission',
        ],
      },
    },
  },

  {
    id: 'act6-empty-state',
    type: 'before_after',
    title: 'The empty state',
    act: ACT.VI,
    content: {
      heading: 'What does the user see when there\'s nothing there yet?',
      before: {
        label: 'No empty state',
        issues: [
          '[ blank white space ]',
          'No message, no direction',
          'User assumes the app is broken',
          'User leaves',
        ],
      },
      after: {
        label: 'Designed empty state',
        improvements: [
          '"You don\'t have any projects yet."',
          'A brief explanation of what goes here',
          '"Create your first project →" CTA',
          'User understands and takes action',
        ],
      },
    },
  },

  {
    id: 'act6-error-state',
    type: 'before_after',
    title: 'The error state',
    act: ACT.VI,
    content: {
      heading: 'An error is a design moment. Handle it like one.',
      before: {
        label: 'Bad error',
        issues: [
          '"Error 500"',
          '"Something went wrong."',
          'No explanation. No action.',
          'User feels blamed and lost.',
        ],
      },
      after: {
        label: 'Good error',
        improvements: [
          '"We couldn\'t load your projects."',
          '"Your data is safe — nothing was lost."',
          '"This usually fixes itself in a moment."',
          '[Try again] button — clear next step.',
        ],
      },
    },
  },

  /* ============================================================
     ACT VII — DESIGN CHALLENGE  (slides 24-26)
  ============================================================ */

  {
    id: 'act7-challenge',
    type: 'challenge',
    title: 'Your turn',
    act: ACT.VII,
    content: {
      badge: 'Live challenge',
      scenario:
        'A user opens a food delivery app at 7pm, hungry, in a hurry. How do you design for them?',
      rule: 'Think like a designer. You have 90 seconds.',
      questions: [
        {
          label: 'WHO',
          prompt: 'Who is this user right now? What emotional state are they in?',
        },
        {
          label: 'GOAL',
          prompt: 'What is the one thing they need to accomplish?',
        },
        {
          label: 'FRICTION',
          prompt: 'What could go wrong? What will make them abandon the app?',
        },
        {
          label: 'UI',
          prompt: 'What visual decisions help them get there faster?',
        },
        {
          label: 'UX',
          prompt: 'What journey decisions make the whole experience feel effortless?',
        },
        {
          label: 'PRODUCT',
          prompt: 'How does a good experience here drive retention and advocacy?',
        },
      ],
      reveal: {
        title: 'What a designer would do first:',
        steps: [
          'Identify the dominant emotion: hunger + urgency',
          'Prioritise the fastest path: past orders, reorder button',
          'Remove any step that isn\'t necessary right now',
          'Surface estimated delivery time immediately (reduces anxiety)',
          'Make the confirmation instant and clear',
          'Follow up with "Order again?" — that\'s the retention loop.',
        ],
      },
    },
  },

  {
    id: 'act7-audience-solutions',
    type: 'question',
    title: 'What did you come up with?',
    act: ACT.VII,
    content: {
      question: 'What did you decide to prioritise?',
      subtitle:
        'There\'s no single right answer — but there are better and worse reasons. The best designers can explain why they made every decision.',
    },
  },

  {
    id: 'act7-design-process',
    type: 'explanation',
    title: 'The process behind every decision',
    act: ACT.VII,
    content: {
      heading: 'Good design isn\'t intuition — it\'s a process.',
      body: [
        '1 · UNDERSTAND — User research, personas, journey maps, competitive analysis',
        '2 · DEFINE — Problem statements, success metrics, constraints',
        '3 · IDEATE — Sketches, wireframes, crazy 8s — diverge before you converge',
        '4 · PROTOTYPE — Interactive mockups, clickable flows, micro-interactions',
        '5 · TEST — Usability testing, A/B experiments, real user data',
        '6 · SHIP & LEARN — Launch, measure, iterate — the product is never done',
      ],
    },
  },

  /* ============================================================
     ACT VIII — THE FINAL MODEL  (slides 27-31)
  ============================================================ */

  {
    id: 'act8-three-layers',
    type: 'three_layer',
    title: 'Three levels of design',
    act: ACT.VIII,
    content: {
      heading: 'Three levels. One discipline.',
      layers: [
        {
          label: 'UI',
          sublabel: 'User Interface',
          questions: [
            'Does it look right?',
            'Does it match the brand?',
            'Are the interactions clear?',
            'Is it accessible?',
            'Is the motion intentional?',
          ],
        },
        {
          label: 'UX',
          sublabel: 'User Experience',
          questions: [
            'Is it easy to use?',
            'Can users find what they need?',
            'Where is the friction?',
            'What does the journey feel like?',
            'Does the writing help or confuse?',
          ],
        },
        {
          label: 'PRODUCT',
          sublabel: 'Product Design',
          questions: [
            'Does it align with business goals?',
            'Does it drive adoption?',
            'How do we retain users?',
            'Is it scalable?',
            'Is it cost-effective?',
          ],
        },
      ],
      closing:
        'UI/UX designers ask the first two rows. Product designers ask all three.',
    },
  },

  {
    id: 'act8-not-separate',
    type: 'three_layer',
    title: 'They\'re not separate worlds',
    act: ACT.VIII,
    content: {
      heading: 'Same skill sets — at different scales.',
      overlap: true,
      layers: [
        {
          label: 'UI',
          sublabel: 'The surface',
          questions: [
            'Visual design',
            'Interaction design',
            'Prototyping',
            'Design systems',
            'Motion',
            'Responsive',
            'Accessibility',
          ],
        },
        {
          label: 'UX',
          sublabel: 'The experience',
          questions: [
            'Personas',
            'User journeys',
            'User flows',
            'Information architecture',
            'Usability testing',
            'UX writing',
          ],
        },
        {
          label: 'PRODUCT',
          sublabel: 'The strategy',
          questions: [
            'Adoption',
            'Conversion',
            'Retention',
            'Advocacy',
            'Growth',
            'Cost-effectiveness',
            'Scalability',
          ],
        },
      ],
      closing:
        '"They actually complement each other — and they come from the same background and the same skill sets."',
    },
  },

  {
    id: 'act8-design-x-engineering',
    type: 'diagram',
    title: 'Design × Engineering',
    act: ACT.VIII,
    content: {
      direction: 'horizontal',
      caption:
        'As developers, you already think in states, edge cases, and systems. That is design thinking. The vocabulary is different — the mindset is the same.',
      nodes: [
        { label: 'Design',       description: 'States · Flows · Feedback · Hierarchy',         icon: '◈' },
        { label: 'You',          description: 'Already here — you think in systems',             icon: '⬡' },
        { label: 'Engineering',  description: 'Components · Data · Logic · Performance',        icon: '⌥' },
      ],
    },
  },

  {
    id: 'act8-final-thought',
    type: 'reveal',
    title: 'The final thought',
    act: ACT.VIII,
    content: {
      lines: [
        { text: 'Don\'t design screens.', size: 'large' as const, color: 'muted' as const },
        { text: 'Design experiences.', size: 'large' as const, color: 'muted' as const },
        { text: 'Design products', size: 'large' as const, color: 'muted' as const },
        { text: 'people need.', size: 'display' as const, color: 'primary' as const, emphasis: true },
      ],
      caption:
        'Whether you\'re a UI designer, a UX designer, a product designer, or an engineer — the goal is the same: solve real problems for real people.',
    },
  },

  {
    id: 'act8-become-great-at-design',
    type: 'design_mastery',
    title: 'How Do You Become Great at Design?',
    act: ACT.VIII,
    content: {
      heading: 'How Do You Become Great at Design?',
      subtitle:
        'Great designers don\'t simply learn design tools. They learn to observe, question, build, test, and develop judgment.',
      loop: ['OBSERVE', 'QUESTION', 'BUILD', 'TEST', 'LEARN', 'REPEAT'],
      principles: [
        {
          id: 'p1',
          number: '01',
          title: 'Become curious',
          subtitle: 'Shift from a passive observer to an analytical investigator.',
          contrast: {
            insteadOf: 'Does this look good?',
            ask: 'Why was it designed this way?',
          },
        },
        {
          id: 'p2',
          number: '02',
          title: 'Study real products',
          subtitle: 'Study the actual products people use every day — not just isolated portfolio mockups.',
          items: [
            'Onboarding',
            'Search',
            'Checkout',
            'Navigation',
            'Loading states',
            'Empty states',
            'Error states',
            'Accessibility',
            'Mobile vs Desktop',
          ],
        },
        {
          id: 'p3',
          number: '03',
          title: 'Design for people, not assumptions',
          subtitle: 'Do not assume you know what users need. Step outside your own mental model.',
          items: [
            'Talk directly to users',
            'Watch people use the product without intervening',
            'Test rough ideas early and often',
            'Validate real behaviors over personal opinions',
          ],
        },
        {
          id: 'p4',
          number: '04',
          title: 'Master the fundamentals',
          subtitle: 'Learning Figma is not the same as learning design. Tools change — principles endure.',
          items: [
            'Visual Hierarchy',
            'Typography',
            'Spacing & Rhythm',
            'Color & Contrast',
            'Layout Systems',
            'Interaction Design',
            'Accessibility (a11y)',
            'Information Architecture',
            'Cognitive Psychology',
          ],
        },
        {
          id: 'p5',
          number: '05',
          title: 'Build, test, iterate',
          subtitle: 'Design is not a single brilliant breakthrough — it is an active continuous loop.',
          iterationSteps: [
            'Idea',
            'Prototype',
            'Test',
            'Learn',
            'Change',
            'Test again',
          ],
        },
        {
          id: 'p6',
          number: '06',
          title: 'Develop taste and judgment',
          subtitle: 'Anyone can recognize aesthetics. Great designers understand systemic fitness.',
          quote: {
            text: 'Taste is knowing what looks good. Judgment is knowing what works.',
            subtext: 'Taste evaluates the surface visual. Judgment evaluates the full product reality.',
          },
        },
      ],
      closing: 'Don\'t copy designs. Study decisions.',
    },
  },

  {
    id: 'act8-your-design-internet',
    type: 'design_internet',
    title: 'Your Design Internet',
    act: ACT.VIII,
    content: {
      heading: 'Your Design Internet',
      subtitle:
        'Organize resources according to the question you are trying to answer — not a giant list of bookmarks.',
      categories: [
        {
          id: 'c1',
          number: '01',
          question: 'I need visual inspiration',
          resources: [
            {
              name: 'Dribbble',
              url: 'https://dribbble.com',
              description: 'Visual UI inspiration and aesthetic treatments.',
              highlights: [
                'Visual UI inspiration',
                'Typography',
                'Color palette ideas',
                'Visual treatments',
                'Interaction concepts',
              ],
            },
            {
              name: 'Behance',
              url: 'https://behance.net',
              description: 'End-to-end case studies and brand systems.',
              highlights: [
                'Full case studies',
                'Branding systems',
                'Design process',
                'End-to-end presentation',
              ],
            },
            {
              name: 'Awwwards',
              url: 'https://awwwards.com',
              description: 'Ambitious web experiences and creative motion.',
              highlights: [
                'Ambitious web experiences',
                'Interaction ideas',
                'Visual & motion inspiration',
              ],
            },
          ],
        },
        {
          id: 'c2',
          number: '02',
          question: 'I need real product references',
          resources: [
            {
              name: 'Mobbin',
              url: 'https://mobbin.com',
              description: 'Real production screens from top iOS, Android, and Web apps.',
              highlights: [
                'Real product UI',
                'Mobile and web screens',
                'UI patterns',
                'Onboarding · Checkout · Settings · Navigation',
              ],
            },
            {
              name: 'Page Flows',
              url: 'https://pageflows.com',
              description: 'Recorded complete user journeys and multi-step transitions.',
              highlights: [
                'Complete user flows',
                'Screen connections',
                'Real user interaction videos',
              ],
            },
          ],
          directStudy: ['Uber', 'Airbnb', 'Spotify', 'Google Maps', 'YouTube'],
        },
        {
          id: 'c3',
          number: '03',
          question: 'I want to actually learn UX',
          resources: [
            {
              name: 'Nielsen Norman Group',
              url: 'https://nngroup.com',
              description: 'The world authority in evidence-based user experience research.',
              highlights: [
                'Usability heuristics',
                'UX research methods',
                'Interaction design',
                'Information architecture',
                'Psychology & cognition',
                'User testing protocols',
                'Customer journeys',
              ],
            },
          ],
          recommendedGuide: {
            name: 'NN/g\'s UX Basics Study Guide',
            url: 'https://www.nngroup.com/articles/ux-basics-study-guide/',
            note: 'A curated, step-by-step curriculum for beginners and developers.',
          },
        },
        {
          id: 'c4',
          number: '04',
          question: 'I want to learn platform design',
          resources: [
            {
              name: 'Apple Human Interface Guidelines',
              url: 'https://developer.apple.com/design/human-interface-guidelines',
              description: 'System design conventions for iOS, macOS, watchOS, and visionOS.',
              highlights: [
                'Platform conventions',
                'Accessibility',
                'Typography scales',
                'Standard components',
                'Touch inputs',
              ],
            },
            {
              name: 'Material Design',
              url: 'https://m3.material.io',
              description: 'Google\'s open-source design system and motion specifications.',
              highlights: [
                'Component architecture',
                'Dynamic color tokens',
                'Adaptive layout grid',
                'Interaction states',
              ],
            },
            {
              name: 'Figma Community',
              url: 'https://figma.com/community',
              description: 'Inspect production UI kits, design systems, and component specs.',
              highlights: [
                'Community UI kits',
                'Design system files',
                'Interactive prototypes',
                'Inspectable component architecture',
              ],
            },
          ],
        },
      ],
      investigation: {
        heading: '“Don\'t browse. Investigate.”',
        insteadOf: 'This button looks cool.',
        questions: [
          'Why is it here?',
          'What happens when I click it?',
          'What states does it have?',
          'What happens when something fails?',
          'Why did they choose this interaction?',
        ],
        takeaway:
          '“Use inspiration to learn how other designers think — not to stop thinking.”',
      },
    },
  },

  {
    id: 'act8-contact',
    type: 'contact',
    title: 'Thank you',
    act: ACT.VIII,
    content: {
      heading: 'UI/UX & Product Design',
      name: 'Nathanim Tadele',
      role: 'Workshop',
      closingQuote:
        'UI is what it looks like. UX is how it works. Product design is why it exists.',
      links: [
        {
          label: 'Nathanim Tadele',
          value: 'nathanim.dev',
          url: 'https://nathanim.dev',
          icon: 'globe' as const,
        },
        {
          label: 'GitHub',
          value: 'github.com/Nathanim1919',
          url: 'https://github.com/Nathanim1919',
          icon: 'github' as const,
        },
      ],
    },
  },
];