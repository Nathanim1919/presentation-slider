import type { Slide } from '@/lib/types';

export const slides: Slide[] = [
  // ──────────────────────────────────────────────────────────
  // PART 1 — CHANGE THEIR MENTAL MODEL
  // ──────────────────────────────────────────────────────────

  // SLIDE 01 ── HERO
  {
    id: 'intro',
    title: 'Introduction',
    type: 'hero',
    content: {
      meta: 'INTRODUCTION TO',
      headline: 'UI/UX & Product Design',
      subheadline: 'You are not here to learn how to make pretty screens.',
      footer: "You're here to learn why products work.",
    },
  },

  // ──────────────────────────────────────────────────────────
  // SPEAKER INTRO
  // ──────────────────────────────────────────────────────────

  // SLIDE 02 ── WHO I AM
  {
    id: 'who-i-am',
    title: 'Who I Am',
    type: 'hero',
    content: {
      meta: 'ABOUT THE SPEAKER',
      headline: 'WHO I AM',
      subheadline: 'Nathanim Tadele — Software Engineer & Interface Craftsman',
      footer: 'Building software where technical depth meets human experience.',
    },
    speakerNotes: [
      'Take a brief pause before diving into the core design curriculum.',
      'Introduce yourself briefly, authentically, and confidently.',
      'Establish credibility: you write production full-stack code, not just conceptual slide decks.',
    ],
  },

  // SLIDE 03 ── FULL STACK & FRONTEND FREEDOM
  {
    id: 'fullstack-frontend-freedom',
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
      'Highlight why you love frontend: it gives you the creative freedom to directly influence human behavior and emotional clarity.',
      'Emphasize: "Backend gives a product power. Frontend gives a product humanity."',
    ],
  },

  // SLIDE 04 ── WHY I CARE ABOUT DESIGN
  {
    id: 'why-design-matters',
    title: 'Why Design Matters to an Engineer',
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
      'Connect your engineering discipline to the workshop theme.',
      'Address the common developer pitfall: "If the API works and the tests pass, my job is done."',
      'Challenge the audience: true engineering craftsmanship means the product solves human problems seamlessly.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // TABLE OF CONTENTS ── THE ROADMAP
  // ──────────────────────────────────────────────────────────

  // SLIDE 05 ── TABLE OF CONTENTS
  {
    id: 'table-of-contents',
    title: 'Table of Contents',
    type: 'table_of_contents',
    content: {
      meta: 'THE ROADMAP',
      heading: 'What We’re Exploring Today',
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
      footnote: '6 Core Modules • Structured Theory • Hands-On Interactive Labs',
    },
    speakerNotes: [
      'Give the audience a high-level roadmap of what today covers.',
      'Highlight Module 05: this isn’t just lecture slides — we will run live interactive UX sandboxes together.',
      'Set expectations: by the end of this session, you will look at every interface with product-designer eyes.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // PART 1 — CHANGE THEIR MENTAL MODEL
  // ──────────────────────────────────────────────────────────

  // SLIDE 06 ── GOOD DESIGN IS INVISIBLE
  {
    id: 'invisible-design',
    title: 'Good Design Is Invisible',
    type: 'comparison',
    content: {
      heading: 'Good design is often invisible.',
      left: {
        label: 'Bad experience',
        items: [
          '"Where do I click?"',
          'Confusion. Frustration.',
          'You notice the design — because it failed.',
        ],
      },
      right: {
        label: 'Good experience',
        items: [
          '"Of course."',
          'Effortless. Invisible.',
          'You don\'t think about the design — because it worked.',
        ],
      },
    },
  },

  // SLIDE 03 ── BEFORE THE SCREEN
  {
    id: 'before-screen',
    title: 'Before the Screen',
    type: 'diagram',
    content: {
      nodes: [
        { label: 'PROBLEM', description: 'What hurts?' },
        { label: 'PERSON', description: 'Who feels it?' },
        { label: 'CONTEXT', description: 'When & where?' },
        { label: 'SOLUTION', description: 'How might we help?' },
        { label: 'INTERFACE', description: 'What do they see?' },
      ],
      direction: 'vertical',
      caption: 'The screen is not the beginning.',
    },
  },

  // ──────────────────────────────────────────────────────────
  // PART 2 — DESIGN THINKING
  // ──────────────────────────────────────────────────────────

  // SLIDE 04 ── WHAT IS DESIGN THINKING?
  {
    id: 'design-thinking',
    title: 'What Is Design Thinking?',
    type: 'explanation',
    content: {
      heading: 'Design lives at the intersection.',
      body: [
        'Great product design balances three forces:',
        'Desirable — Do people actually want this?',
        'Feasible — Can we actually build it?',
        'Viable — Can this product survive as a business or organization?',
        'When engineers optimize feasibility but ignore desirability, you build something nobody wants.',
        'When designers optimize desirability but ignore feasibility, you design something nobody can build.',
      ],
      visual: {
        type: 'list',
        items: ['People → Desirable', 'Technology → Feasible', 'Business → Viable'],
      },
    },
  },

  // SLIDE 05 ── DON'T FALL IN LOVE WITH YOUR IDEA
  {
    id: 'idea-vs-need',
    title: "Don't Fall in Love With Your Idea",
    type: 'statement',
    content: {
      text: "Your idea is not your user's problem.",
      emphasis: 'high',
      attribution:
        "A designer's job isn't to defend the solution. It's to discover the right solution.",
    },
  },

  // SLIDE 06 ── STOP GUESSING
  {
    id: 'stop-guessing',
    title: 'Stop Guessing. Start Observing.',
    type: 'comparison',
    content: {
      heading: 'Behavior is evidence.',
      left: {
        label: 'What people say',
        items: [
          '"I want more features."',
          '"I want an advanced dashboard."',
          '"I don\'t care about loading speed."',
        ],
      },
      right: {
        label: 'What people do',
        items: [
          'Uses only 2 features.',
          'Only checks: "Did my payment go through?"',
          'Refreshes the page repeatedly.',
        ],
      },
    },
  },

  // SLIDE 07 ── YOU ARE NOT YOUR USER
  {
    id: 'not-your-user',
    title: 'You Are Not Your User',
    type: 'statement',
    content: {
      text: 'You are not your user.',
      emphasis: 'high',
      attribution: "You know how your product works. They don't.",
    },
  },

  // ──────────────────────────────────────────────────────────
  // PART 3 — UX
  // ──────────────────────────────────────────────────────────

  // SLIDE 08 ── UX IS BIGGER THAN THE SCREEN
  {
    id: 'ux-bigger',
    title: 'UX Is Bigger Than the Screen',
    type: 'explanation',
    content: {
      heading: 'UX = the entire experience, not just the interface.',
      body: [
        'User experience is everything surrounding a person\'s interaction with a product or service.',
        'Consider ordering a ride. UX begins before you open the app: "I need to get somewhere."',
        'Then: open app → choose destination → see price → request ride → wait → find driver → ride → pay → rate.',
        'Every stage is part of the experience. If the app looks beautiful but "Where is my driver?" never updates — the UX is bad.',
      ],
      visual: {
        type: 'list',
        items: [
          'Expectations',
          'Emotions',
          'Speed',
          'Errors',
          'Trust',
          'Support',
          'Accessibility',
          'Context',
        ],
      },
    },
  },

  // SLIDE 09 ── UI ≠ UX
  {
    id: 'ui-vs-ux',
    title: 'UI ≠ UX',
    type: 'comparison',
    content: {
      heading: 'UI is the conversation. UX is the entire relationship.',
      left: {
        label: 'UX — How it works',
        items: [
          'Is it obvious what to do?',
          'Does the flow make sense?',
          'Can the user accomplish their goal?',
          'What happens when something goes wrong?',
        ],
      },
      right: {
        label: 'UI — How it looks + communicates',
        items: [
          'Typography, color, spacing, layout',
          'Visual hierarchy and contrast',
          'Component design and interaction states',
          'The visual language of the product',
        ],
      },
    },
  },

  // SLIDE 10 ── THINK IN FLOWS
  {
    id: 'think-flows',
    title: 'Think in Flows, Not Screens',
    type: 'diagram',
    content: {
      nodes: [
        { label: 'DISCOVER' },
        { label: 'SIGN UP' },
        { label: 'ONBOARD' },
        { label: 'USE' },
        { label: 'PAY' },
        { label: 'GET HELP' },
        { label: 'RETURN' },
      ],
      direction: 'horizontal',
      caption: "Users don't experience your screens. They experience the flow between them.",
    },
  },

  // ──────────────────────────────────────────────────────────
  // PART 4 — FINDING THE RIGHT PROBLEM
  // ──────────────────────────────────────────────────────────

  // SLIDE 11 ── THE DESIGN PROCESS IS A LOOP
  {
    id: 'design-loop',
    title: 'Design Is a Learning Loop',
    type: 'design_process',
    content: {
      heading: 'Design Is a Learning Loop',
      statement: "The goal isn't to be right on the first attempt. The goal is to learn quickly.",
      stages: [
        {
          id: 'understand',
          number: '01',
          label: 'UNDERSTAND',
          subtitle: 'Research the problem',
          question: 'What are we trying to understand?',
          definition:
            "Before designing a solution, understand the people, context, behaviors, and problem you're actually dealing with.",
          whatWeDo: [
            'Who is experiencing the problem?',
            'What are they trying to accomplish?',
            'What are they doing today (workarounds & habits)?',
            'Where does the current experience break down?',
          ],
          output: ['Research findings', 'User observations', 'Pain points'],
          keyIdea: "Good designers don't just collect requests. They investigate needs.",
          example: {
            title: 'University Registration Context',
            contrast: {
              insteadOf: 'How should we design university course registration?',
              askOrDefine:
                'How do students currently register? Where do they freeze or get confused? What are they trying to accomplish?',
            },
            description:
              'Instead of guessing how to design the interface, study the students current messy spreadsheet and note-taking habits.',
          },
          presenterNote: 'This is where assumptions start becoming evidence.',
        },
        {
          id: 'define',
          number: '02',
          label: 'DEFINE',
          subtitle: 'Frame the real problem',
          question: 'What problem are we actually solving?',
          definition:
            'Research gives us information. Definition turns that raw information into a problem worth solving.',
          whatWeDo: [
            'What is the root cause behind surface user symptoms?',
            'What is the core human need versus a feature wishlist?',
            'What technical and real-world constraints shape our scope?',
            'How can we frame this problem to open possibilities?',
          ],
          output: ['Validated user need', 'Problem statement', 'Design challenge'],
          keyIdea: 'Definition forces us to stay in the problem before jumping into solutions.',
          example: {
            title: 'Refining the Problem',
            contrast: {
              insteadOf: 'Students hate registration and want a faster portal.',
              askOrDefine:
                'Students struggle to understand which courses they need to register for and whether they have completed all prerequisites.',
            },
            description:
              'A well-defined problem gives your team a sharp target. Speed was a symptom; clarity of prerequisites was the true problem.',
          },
          presenterNote: 'This is the stage where we prevent ourselves from solving the wrong problem.',
        },
        {
          id: 'ideate',
          number: '03',
          label: 'IDEATE',
          subtitle: 'Explore possibilities',
          question: 'What are the different ways we could solve this?',
          definition:
            'Once the problem is clear, generate many possible ways to approach it before committing to one direction.',
          whatWeDo: [
            'What are wide divergent alternatives to our first obvious idea?',
            'What bold, non-obvious, or orthogonal approaches could work?',
            'What industry orthodoxies or team assumptions can we challenge?',
            'How can we combine separate ideas into stronger hybrid concepts?',
          ],
          output: ['Divergent ideas', 'Concept sketches', 'Possible directions'],
          keyIdea: "Don't fall in love with the first idea. Expand before converging.",
          example: {
            title: 'Divergent Solutions for Course Registration',
            list: [
              'Registration checklist',
              'Course recommendation system',
              'Visual progress tracker',
              'Advisor assistant',
              'Smart deadline reminders',
              'Course dependency map',
            ],
            description:
              'The obvious idea (make the submit button bigger) is rarely the breakthrough idea. Explore broadly before converging.',
          },
          presenterNote: 'Quantity first. Judgment later.',
        },
        {
          id: 'prototype',
          number: '04',
          label: 'PROTOTYPE',
          subtitle: 'Make ideas tangible',
          question: 'Can we make this tangible enough to test?',
          definition:
            'A prototype is a fast, cheap way to make an idea real enough to learn from.',
          whatWeDo: [
            'What specific question does this prototype need to answer?',
            'What is the fastest, cheapest fidelity to answer it?',
            'Paper sketch, clickable wireframe, or lightweight interactive frontend?',
            'Does the fidelity match mental models, visual hierarchy, or interaction?',
          ],
          output: ['Paper sketches', 'Clickable wireframes', 'Interactive prototypes'],
          keyIdea: 'A prototype is not a smaller final product. It is a question made tangible.',
          example: {
            title: 'Which prototype would you test?',
            tryIt: {
              question: 'Which prototype would you test with users first?',
              optionA: 'Option A: High-fidelity visual UI',
              optionB: 'Option B: Rough Wireframe',
              reveal:
                'Both can be useful! Wireframes test mental models and flow; high-fidelity tests visual trust and hierarchy. Match fidelity to the question you need answered.',
            },
            description:
              'Instead of spending two weeks writing backend code for a registration dashboard, create a clickable prototype in 60 minutes.',
          },
          presenterNote:
            "The fidelity of the prototype should match the question we're trying to answer.",
        },
        {
          id: 'test',
          number: '05',
          label: 'TEST',
          subtitle: 'Observe real behavior',
          question: 'Can people actually use this to reach their goal?',
          definition:
            'Put the prototype in front of real people and observe what happens without coaching them.',
          whatWeDo: [
            'What realistic, goal-oriented task can we assign users?',
            'Where do users hesitate, freeze, or experience friction in silence?',
            'What does observable behavior reveal that polite opinion misses?',
            'How do team assumptions hold up against actual uncoached usage?',
          ],
          output: ['Observed behaviors', 'Identified friction', 'Direct feedback', 'New questions'],
          keyIdea: "Don't ask users if they like your design. Give them a task and watch in silence.",
          example: {
            title: 'Live Task Testing',
            task: {
              instruction: 'Register for your next semester courses.',
              observationQuestions: [
                'Do they know where to start without explanation?',
                'Do they understand what to select and what is required?',
                'Do they feel confident when they finish the flow?',
              ],
            },
            description:
              'Sit on your hands and stay quiet. Watching a user struggle with an element you thought was obvious is the most humbling education in product design.',
          },
          presenterNote: 'This is where our assumptions meet reality.',
        },
        {
          id: 'learn',
          number: '06',
          label: 'LEARN',
          subtitle: 'Turn evidence into insight',
          question: 'What did the evidence teach us?',
          definition:
            'Testing is useful only if we turn what we observed into something we can act on.',
          whatWeDo: [
            "What is the user's mental model telling us?",
            'Was our problem definition, assumption, or target user wrong?',
            'What should we polish, what should we completely redesign, and what should we drop?',
            'How does this evidence change the next question we ask?',
          ],
          output: ['Actionable insights', 'Product decisions', 'Next iteration brief'],
          keyIdea: "We're not trying to prove we were right. We're trying to reduce uncertainty.",
          example: {
            title: 'Sensemaking Progression',
            description:
              'TEST → OBSERVATION → INSIGHT → CHANGE. When user testing reveals hesitation, we turn that symptom into architectural clarity for the next version.',
          },
          presenterNote:
            'Sometimes the answer is "improve the design." Sometimes "change the idea." Sometimes "we were solving the wrong problem entirely."',
        },
      ],
    },
    speakerNotes: [
      '1. Start by challenging the diagram: "At first glance, this looks like a process. That\'s misleading — real product design almost never happens this neatly. You think we do 1 to 6 and we\'re done? No. We go back."',
      '2. Explain the loop: "Every stage creates information that can change the previous stage." Food delivery example: testing revealed users understood the map but not the ETA — changing the mental model, not just moving a button.',
      '3. Crucial distinction: "Iteration doesn\'t always mean changing the UI. Sometimes it\'s a better interface; sometimes a completely different idea; sometimes realizing we were solving the wrong problem."',
      '4. Not a rigid methodology: "These stages are useful mental models, not laws. You might go PROTOTYPE → UNDERSTAND or TEST → DEFINE. Arrows show a common direction, but real design moves backward and forward."',
      '5. UNDERSTAND ≠ Ask users what they want: "Users describe their desired solution without understanding the underlying problem. Good designers don\'t just collect requests; they investigate needs."',
      '6. DEFINE as the anti-solution stage: "Definition forces us to stay in the problem for a little longer before jumping into solutions. Bad: \'We need an app.\' Better: \'Students struggle to know course eligibility.\'"',
      '7. IDEATE — Don\'t marry the first idea: "One of the biggest mistakes is defending the first solution. Expand the solution space before narrowing it."',
      '8. PROTOTYPE: "A prototype is not a smaller version of the final product. It is a question made tangible. Fidelity should match the question you need answered."',
      '9. TEST — Watch, don\'t just ask: "If you ask \'Do you like this?\', they\'ll be polite. Give them a task and shut up. Behavior is far more informative than opinions."',
      '10. LEARN — Don\'t confuse feedback with insight: "Our job isn\'t to collect feedback. Our job is to understand what the feedback is telling us."',
      '11. Closing punchline: "We\'re not trying to prove our idea is correct — we\'re trying to reduce uncertainty. The goal isn\'t to be right on the first attempt. The goal is to learn quickly."',
    ],
  },

  // SLIDE 12 ── THE PROBLEM BEHIND THE PROBLEM
  {
    id: 'problem-behind',
    title: 'The Problem Behind the Problem',
    type: 'case_study',
    content: {
      product: 'UniFlow Student Portal',
      context:
        'Students say: "I need faster checkout." But don\'t blindly build faster checkout.',
      steps: [
        { action: 'Why?', result: 'Too many fields in the registration form?' },
        { action: 'Why?', result: 'Required information appears late in the flow?' },
        { action: 'Why?', result: 'Students don\'t trust the system saved their data?' },
        { action: 'Why?', result: 'No confirmation that registration succeeded?' },
        { action: 'Root cause', result: 'The real problem is trust and feedback — not speed.' },
      ],
      insight:
        'Users often give you solutions disguised as problems. The problem statement matters more than the first solution.',
    },
  },

  // SLIDE 13 ── HOW MIGHT WE
  {
    id: 'how-might-we',
    title: 'How Might We?',
    type: 'before_after',
    content: {
      heading: 'Frame the problem to open — not close — possibilities.',
      before: {
        label: 'Bad framing',
        items: [
          '❌ "Students hate registration."',
          'This is a complaint, not a design brief.',
          'It doesn\'t suggest direction.',
        ],
      },
      after: {
        label: 'How Might We',
        items: [
          '✦ "How might we make university registration feel simple and confident?"',
          'This opens many possible solutions:',
          'Better information architecture, recommendations, reminders, progress indicators, advisor support, chatbot.',
        ],
      },
    },
  },

  // SLIDE 14 ── GENERATE 10 BAD IDEAS
  {
    id: 'ten-bad-ideas',
    title: 'Generate 10 Bad Ideas',
    type: 'exercise',
    content: {
      instruction:
        'How might we make waiting at a hospital less frustrating? You have 60 seconds. Write as many solutions as possible.',
      timeLimit: 60,
      prompt:
        'Your first idea is probably not your best idea. The obvious ideas come first — the interesting ones come after you exhaust the obvious.',
    },
  },

  // SLIDE 15 ── DON'T BUILD IT YET
  {
    id: 'dont-build',
    title: "Don't Build It Yet",
    type: 'diagram',
    content: {
      nodes: [
        { label: 'IDEA', description: 'Hypothesis' },
        { label: 'SKETCH', description: 'Paper & pen' },
        { label: 'WIREFRAME', description: 'Structure only' },
        { label: 'PROTOTYPE', description: 'Simulate the experience' },
        { label: 'TEST', description: 'Get real feedback' },
        { label: 'BUILD', description: 'Now write code' },
      ],
      direction: 'vertical',
      caption: 'Learn before you build. The prototype should be only as sophisticated as necessary to answer your question.',
    },
  },

  // ──────────────────────────────────────────────────────────
  // PART 5 — NOW WE TALK ABOUT UI
  // ──────────────────────────────────────────────────────────

  // SLIDE 16 ── NOW WE CAN TALK ABOUT UI
  {
    id: 'now-ui',
    title: 'Now We Can Talk About UI',
    type: 'statement',
    content: {
      text: "We haven't talked about colors yet.",
      emphasis: 'high',
      attribution:
        "And that's intentional. UI = how the product communicates through its interface. UI is not decoration. UI is communication.",
    },
  },

  // SLIDE 17 ── WHAT MAKES GOOD DESIGN?
  {
    id: 'good-design',
    title: 'What Makes Good Design?',
    type: 'principles',
    content: {
      eyebrow: 'GOOD DESIGN vs BAD DESIGN',
      heading: 'What Makes Good Design?',
      statement: 'Good design makes the right thing easier to do.',
      principles: [
        {
          title: 'USEFUL',
          description: 'Does it solve a real problem?',
        },
        {
          title: 'UNDERSTANDABLE',
          description: 'Can users figure out what to do?',
        },
        {
          title: 'EFFICIENT',
          description: 'Can they accomplish the goal without unnecessary work?',
        },
        {
          title: 'FORGIVING',
          description: 'Can they recover from mistakes?',
        },
        {
          title: 'CONSISTENT',
          description: 'Does the experience behave predictably?',
        },
        {
          title: 'ACCESSIBLE',
          description: 'Can different people actually use it?',
        },
      ],
      closingNote:
        'Good design isn’t simply beautiful UI. A beautiful interface can still be terrible to use.',
    },
    speakerNotes: [
      '"Good design makes the right thing easier to do."',
      'Explain: "Good design isn\'t simply beautiful UI. A beautiful interface can still be terrible to use."',
      'Walk through the six pillars: Useful, Understandable, Efficient, Forgiving, Consistent, Accessible.',
      'Transition: "Now let\'s look at the flip side: what makes bad design?"',
    ],
  },

  // SLIDE 18 ── WHAT MAKES BAD DESIGN?
  {
    id: 'bad-design',
    title: 'What Makes Bad Design?',
    type: 'principles',
    content: {
      eyebrow: 'GOOD DESIGN vs BAD DESIGN',
      heading: 'What Makes Bad Design?',
      statement:
        'Bad design creates unnecessary friction between the user and their goal.',
      principles: [
        {
          title: 'CONFUSING',
          description: 'Users don’t know what to do.',
        },
        {
          title: 'UNCLEAR',
          description: 'Users don’t understand what will happen.',
        },
        {
          title: 'ERROR-PRONE',
          description: 'The interface makes mistakes easy.',
        },
        {
          title: 'INCONSISTENT',
          description: 'Similar things behave differently.',
        },
        {
          title: 'UNFORGIVING',
          description: 'Mistakes are difficult to recover from.',
        },
        {
          title: 'FRICTION',
          description: 'Users have to work harder than necessary.',
        },
      ],
      closingNote:
        'Bad design makes users do the work the product should have done.',
    },
    speakerNotes: [
      '"Bad design creates unnecessary friction between the user and their goal."',
      'Emphasize: "Bad design makes users do the work the product should have done."',
      'Set up the interactive experiments: "Instead of just talking about this in theory, let\'s experience six real product scenarios together."',
    ],
  },

  // SLIDE 19 ── SCENARIO 01: BUTTONS & AFFORDANCE
  {
    id: 'scenario-buttons',
    title: 'Scenario 01: Buttons & Affordance',
    type: 'ux_scenario',
    content: {
      scenarioNumber: 'SCENARIO 01',
      scenarioTitle: 'BUTTONS & AFFORDANCE',
      scenarioId: 'buttons',
      question: 'What do you think this button does?',
      badPrompt:
        'Save? Submit? Confirm? Finish? An ambiguous icon forces users to guess.',
      reveal: {
        whatYouExperienced:
          "I clicked the button, but wasn't sure if my changes were saved, confirmed, or submitted.",
        theProblem:
          'Ambiguous action. The interface doesn’t communicate what it does or what will happen.',
        thePrinciple:
          'CLARITY + AFFORDANCE — Actions should clearly indicate what will happen before you click them.',
      },
      takeaway: 'The user shouldn’t have to interpret your interface.',
    },
    speakerNotes: [
      'Ask the audience: "What do you think this button does?"',
      'Discuss: Save? Submit? Confirm? Finish?',
      'Let them interact with the ambiguous icon-only action.',
      'Click REVEAL to highlight the problem and the principle (Clarity + Affordance).',
      'Switch to Good Design: Show explicit labeled action [Save changes] with instant feedback.',
      'Punchline: "The user shouldn\'t have to interpret your interface."',
    ],
  },

  // SLIDE 20 ── SCENARIO 02: DESTRUCTIVE ACTIONS
  {
    id: 'scenario-destructive',
    title: 'Scenario 02: Destructive Actions',
    type: 'ux_scenario',
    content: {
      scenarioNumber: 'SCENARIO 02',
      scenarioTitle: 'DESTRUCTIVE ACTIONS',
      scenarioId: 'destructive',
      question: 'Would you feel safe clicking this delete button?',
      badPrompt:
        'Delete project with no consequence explanation or undo clarity.',
      reveal: {
        whatYouExperienced:
          'I clicked delete without knowing what would actually be lost or if it could be undone.',
        theProblem:
          'Unclear consequence. The interface treated permanent deletion like a casual click.',
        thePrinciple:
          'ERROR PREVENTION — Good design doesn\'t just make actions possible. It helps users understand consequences.',
      },
      takeaway:
        'Good design doesn’t just make actions possible. It helps users understand consequences.',
    },
    speakerNotes: [
      'Show the Bad version: Delete Project with identical [Delete] and [Cancel] buttons.',
      'Ask: "What is about to be deleted? Can this be undone? Would you feel safe clicking this?"',
      'Reveal the problem: Unclear consequences and casual deletion.',
      'Show the Good version: Explicit project name, breakdown of 14 pages and 42 assets, confirmation check, distinct button hierarchy.',
      'Deliver takeaway: "Good design doesn\'t just make actions possible. It helps users understand consequences."',
    ],
  },

  // SLIDE 21 ── SCENARIO 03: FORMS & ERROR MESSAGES
  {
    id: 'scenario-forms',
    title: 'Scenario 03: Forms & Error Messages',
    type: 'ux_scenario',
    content: {
      scenarioNumber: 'SCENARIO 03',
      scenarioTitle: 'FORMS & ERROR MESSAGES',
      scenarioId: 'forms',
      question: 'Try submitting this signup form with invalid data. What happens?',
      badPrompt: 'Generic error with wiped inputs.',
      reveal: {
        whatYouExperienced:
          'The form wiped out my input and gave me a generic error without telling me what was wrong or how to fix it.',
        theProblem:
          'The interface detected the problem but didn\'t help the user recover from it.',
        thePrinciple:
          'FEEDBACK + RECOVERY — Good error messages don\'t just tell users that something is wrong. They help users fix it.',
      },
      takeaway:
        'Good error messages don’t just tell users that something is wrong. They help users fix it.',
    },
    speakerNotes: [
      'Submit the bad form with invalid passwords.',
      'Point out the generic "Something went wrong" banner and the fact that password inputs were wiped.',
      'Ask: "What should I do now? Which field failed? What are the password rules?"',
      'Reveal the principle: Feedback + Recovery.',
      'Show the good form: Real-time criteria checklist and field-level mismatch feedback.',
    ],
  },

  // SLIDE 22 ── SCENARIO 04: NAVIGATION & ARCHITECTURE
  {
    id: 'scenario-navigation',
    title: 'Scenario 04: Navigation & Architecture',
    type: 'ux_scenario',
    content: {
      scenarioNumber: 'SCENARIO 04',
      scenarioTitle: 'NAVIGATION & ARCHITECTURE',
      scenarioId: 'navigation',
      question: 'Where would you click if you wanted to contact this company?',
      badPrompt: '10 flat competing links with no hierarchy.',
      reveal: {
        whatYouExperienced:
          'I had to scan 10 competing words and guess which vague category might contain contact info.',
        theProblem:
          'The interface gives us too many choices without enough hierarchy.',
        thePrinciple:
          'INFORMATION HIERARCHY + RECOGNITION OVER RECALL — Users shouldn\'t have to remember where something lives.',
      },
      takeaway:
        'Navigation isn’t about putting everything on the screen. It is about helping people predict where things are.',
    },
    speakerNotes: [
      'Ask the audience: "Where would you click to contact this company?"',
      'Watch them scan the 10 competing words: Dashboard, Services, Products, Solutions, Resources, Company, More, Other, Explore, Discover.',
      'Reveal the principle: Information Hierarchy + Recognition over Recall.',
      'Switch to Good Design: 4 core categories and a clear [Contact Sales] primary button.',
      'Takeaway: "Users shouldn\'t have to remember where something lives."',
    ],
  },

  // SLIDE 23 ── SCENARIO 05: CHECKOUT & TRUST
  {
    id: 'scenario-checkout',
    title: 'Scenario 05: Checkout & Trust',
    type: 'ux_scenario',
    content: {
      scenarioNumber: 'SCENARIO 05',
      scenarioTitle: 'CHECKOUT & TRUST',
      scenarioId: 'checkout',
      question: 'Would you trust this checkout flow with your credit card?',
      badPrompt: 'Unclear progress, hidden fees, ambiguous submit action.',
      reveal: {
        whatYouExperienced:
          'I wasn\'t sure if clicking the button would charge me, and I couldn\'t see the final total cost.',
        theProblem:
          'Unclear progress, hidden costs, and uncertainty before committing payment.',
        thePrinciple:
          'VISIBILITY + PREDICTABILITY + TRUST — Good checkout design reduces uncertainty.',
      },
      takeaway:
        'Good checkout design reduces uncertainty. Users must know what they are buying, what they are paying, and what happens when they click.',
    },
    speakerNotes: [
      'Walk through the bad checkout: "Price says 1,500 ETB, but does that include delivery? Taxes? What happens when I click Continue?"',
      'Click Continue: reveal that card was charged an unexpected 1,725 ETB without review!',
      'Reveal the principles: Visibility, Predictability, Trust.',
      'Show the good checkout: 3 clear steps, itemized breakdown (1,500 + 150 = 1,650 ETB), and transparent button label [Place order — 1,650 ETB].',
    ],
  },

  // SLIDE 24 ── SCENARIO 06: EMPTY STATES
  {
    id: 'scenario-empty-states',
    title: 'Scenario 06: Empty States',
    type: 'ux_scenario',
    content: {
      scenarioNumber: 'SCENARIO 06',
      scenarioTitle: 'EMPTY STATES',
      scenarioId: 'empty_states',
      question: 'What is this product asking you to do?',
      badPrompt: 'Completely blank dead end.',
      reveal: {
        whatYouExperienced:
          'I stared at a blank screen wondering if the page was broken or still loading.',
        theProblem:
          'Empty space isn’t necessarily an empty state. The product gave no context and no next step.',
        thePrinciple:
          'CONTEXT + NEXT ACTION — Every empty state is still part of the user experience.',
      },
      takeaway: 'Every empty state is still part of the user experience.',
    },
    speakerNotes: [
      'Show the bad empty state: completely blank container.',
      'Ask: "Is it broken? Is it loading? Did it crash?"',
      'Reveal the problem: Empty space isn\'t an empty state.',
      'Show the good empty state: Explains that there are no projects yet and offers a working [+ Create project] button.',
      'Click [+ Create project] to demonstrate live momentum.',
    ],
  },

  // SLIDE 25 ── GOOD DESIGN IS NOT ONE THING (SYNTHESIS)
  {
    id: 'good-design-synthesis',
    title: 'Good Design Is Not One Thing',
    type: 'synthesis',
    content: {
      eyebrow: 'GOOD DESIGN vs BAD DESIGN',
      heading: 'Good Design Is Not One Thing.',
      points: [
        'Solves a real problem',
        'Makes the experience understandable',
        'Reduces unnecessary effort',
        'Prevents avoidable mistakes',
        'Provides useful feedback',
        'Helps users recover',
        'Respects the user\'s context',
      ],
      finalStatement: {
        line1: 'Good design isn’t about making interfaces look good.',
        line2: 'Good design is about making experiences make sense.',
      },
    },
    speakerNotes: [
      'Review the synthesis: Good design is not a single aesthetic coat of paint.',
      'Recap the 7 points: Solves real problems, understandable, reduces effort, prevents mistakes, provides feedback, helps recovery, respects context.',
      'Deliver the final statement: "Good design isn\'t about making interfaces look good. Good design is about making experiences make sense."',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // PART 6 — PRODUCT REALITY
  // ──────────────────────────────────────────────────────────

  // SLIDE 21 ── REAL USERS DON'T LIVE IN FIGMA
  {
    id: 'real-users',
    title: "Real Users Don't Live in Figma",
    type: 'explanation',
    content: {
      heading: 'Reality is part of the design.',
      body: [
        'We design on powerful laptops with fast Wi-Fi.',
        'But your user might be using a five-year-old Android phone, outside, on mobile data.',
        'Does your animation matter if the page takes 15 seconds to load?',
        'Does your perfect desktop layout matter on a 5-inch screen?',
      ],
      visual: {
        type: 'list',
        items: [
          'Cheap phone',
          'Slow internet',
          'Small screen',
          'Sunlight',
          'One hand',
          'Interruptions',
          'Low battery',
          'Accessibility needs',
        ],
      },
    },
  },

  // SLIDE 22 ── DESIGN FOR MORE PEOPLE
  {
    id: 'accessibility',
    title: 'Design for More People',
    type: 'interactive',
    content: {
      heading: 'Accessibility is not an extra.',
      description:
        'Never rely on color alone to communicate meaning. Use multiple signals — icons, labels, patterns. Design for difference, not an imaginary average user. Accessibility often improves the product for everyone.',
      exampleId: 'accessibility',
      exampleRoute: '/examples/accessibility',
    },
  },

  // SLIDE 23 ── YOU ARE NOT DONE WHEN YOU SHIP
  {
    id: 'not-done',
    title: "You're Not Done When You Ship",
    type: 'lifecycle',
    content: {
      heading: "You're Not Done When You Ship",
      caption: 'Ship ≠ Finished. Analytics tells you WHAT happened. Research helps you understand WHY.',
      stages: [
        {
          id: 'design',
          number: '01',
          label: 'DESIGN',
          subtitle: 'Define the experience',
          mainIdea: "Before we build, we decide what experience we're trying to create.",
          whyItMattersHeading: 'Design Defines',
          whyItMatters: [
            'The core user problem and unarticulated human need',
            "The user's ultimate job-to-be-done and desired outcome",
            'The interaction behavior, states, and clear feedback loops',
            'The holistic journey rather than isolated interface screens',
          ],
          keyStatement: 'Good design makes the intended behavior clear.',
          example: {
            title: 'Intentional Clarity',
            description:
              'A checkout screen shouldn\'t simply look polished. The user must immediately answer: "What happens next? Did my order go through?"',
          },
          talkingPoint:
            "We're not designing screens in isolation. We're designing the experience we want the user to have.",
        },
        {
          id: 'build',
          number: '02',
          label: 'BUILD',
          subtitle: 'Turn the idea into reality',
          mainIdea: 'Design becomes real when engineering turns the intended experience into a working product.',
          whyItMattersHeading: 'Engineering Realities',
          whyItMatters: [
            'Technical constraints, performance, latency, and device differences',
            'State machines: Loading, empty, error, offline, and partial states',
            'API contracts, latency degradation, and dynamic data edge-cases',
            'Deep accessibility, screen-reader parity, and keyboard focus flows',
          ],
          keyStatement: "A design that only works in Figma isn't a product.",
          example: {
            title: 'Design vs Production Reality',
            comparison: {
              labelA: 'Ideal Mockup',
              valueA: 'Loading → Instant Success',
              labelB: 'Engineering Truth',
              valueB: 'Loading → Timeout / Network Error → Idempotent Retry',
            },
            description:
              'Great products are built when designers and engineers partner early to design for realistic failure states.',
          },
          talkingPoint: 'This is where design and engineering stop being separate worlds.',
        },
        {
          id: 'ship',
          number: '03',
          label: 'SHIP',
          subtitle: 'Release to real users',
          mainIdea: "Shipping is not the finish line. It's the beginning of learning.",
          whyItMattersHeading: 'The Shift in Perspective',
          whyItMatters: [
            'Before launch: Most of our team beliefs are unverified assumptions',
            'After launch: We finally get to observe real human behavior in the wild',
            'Are users completing the task without assistance or workarounds?',
            'Where are drop-offs occurring, and are users returning for value?',
          ],
          keyStatement: 'Reality is the ultimate design test.',
          example: {
            title: 'Assumptions vs Reality',
            flow: ['ASSUMPTION', 'REAL USERS', 'REAL BEHAVIOR'],
            description:
              '"100 people signed up" does NOT mean "100 people found value." A product becomes real only when people incorporate it into their lives.',
          },
          talkingPoint:
            'A product isn\'t validated because we built it. It becomes real when people actually use it.',
        },
        {
          id: 'observe',
          number: '04',
          label: 'OBSERVE',
          subtitle: 'Watch what actually happens',
          mainIdea: 'Once users have the product, stop guessing.',
          whyItMattersHeading: 'Multimodal Observation',
          whyItMatters: [
            'Quantitative telemetry: Funnel conversion, retention cohorts, drop-offs',
            'Session replays: Confusion pauses, rage clicks, unexpected navigation',
            'Qualitative inquiries: Direct customer support tickets and live interviews',
            'Task usability tests with unmoderated recordings',
          ],
          keyStatement: 'Analytics tells us WHAT happened. Research helps us understand WHY.',
          example: {
            title: 'Quantitative vs Qualitative',
            comparison: {
              labelA: 'Analytics (The What)',
              valueA: '"40% of students abandon course registration on Step 3"',
              labelB: 'Research (The Why)',
              valueB: '"Students didn\'t understand the lab fee and feared unexpected charges"',
            },
            description:
              'Analytics spots the leak in the funnel; qualitative research tells you how to fix the pipeline.',
          },
          talkingPoint:
            'Never jump to conclusions using numbers alone. Numbers reveal symptoms; humans explain causes.',
        },
        {
          id: 'learn',
          number: '05',
          label: 'LEARN',
          subtitle: 'Turn behavior into understanding',
          mainIdea: 'Data is not automatically insight.',
          whyItMattersHeading: 'The Sensemaking Pyramid',
          whyItMatters: [
            'Data → Raw facts and metrics without contextual interpretation',
            'Observation → Noticing repeated friction patterns in user sessions',
            'Interpretation → Formulating testable hypotheses for why friction exists',
            'Actionable Insight → Clear understanding that directly guides iteration',
          ],
          keyStatement: "Don't jump from what happened to why it happened.",
          example: {
            title: 'Digging Beneath the Metric',
            flow: ['DATA: Button Unclicked', 'WEAK: "They hate it"', 'BETTER: "Did they notice / trust it?"'],
            description:
              'When users don\'t click a button, asking "Did they notice it? Did they understand what it does? Did they trust the outcome?" leads to real solutions.',
          },
          talkingPoint:
            'Data gives you clues, not answers. Great product teams test their interpretations before redesigning.',
        },
        {
          id: 'improve',
          number: '06',
          label: 'IMPROVE',
          subtitle: 'Iterate on evidence',
          mainIdea: 'Use what you learned to change the product.',
          whyItMattersHeading: 'Continuous Evolution',
          whyItMatters: [
            'Translate validated insights into focused design improvements',
            'Change the interface, streamline copy, eliminate redundant steps',
            'Test against the baseline metrics to confirm actual user relief',
            'Prepare the next release with clearer hypotheses and humility',
          ],
          keyStatement: 'Iteration isn\'t admitting the first design failed — it\'s how good products become great.',
          example: {
            title: 'The Continuous Loop',
            flow: ['LEARN', 'CHANGE', 'TEST', 'LEARN AGAIN'],
            description:
              'Products that lead their categories don\'t get everything right on Day 1. They iterate faster and listen closer than anyone else.',
          },
          talkingPoint:
            'Ship ≠ Finished. Every release is simply the start of the next cycle of learning.',
        },
      ],
    },
    speakerNotes: [
      'Present this slide as an interactive workshop moment: "Let\'s break this down."',
      'Click each card progressively: DESIGN → BUILD → SHIP → OBSERVE → LEARN → IMPROVE.',
      'Highlight the key transition: "Ship isn\'t the finish line. It is the starting line for learning."',
      'Finish by showing the loop back to Design: Build → Observe → Learn → Improve.',
    ],
  },

  // SLIDE 24 ── UI/UX → PRODUCT DESIGN
  {
    id: 'product-design',
    title: 'UI/UX → Product Design',
    type: 'explanation',
    content: {
      heading: 'Product design is the bigger question.',
      body: [
        'A UI designer asks: "Does this interface look good?"',
        'A UX designer asks: "Can users accomplish their goal?"',
        'A product designer also asks: "Should this exist? Who needs it? Why now? Does it create value? What should we NOT build?"',
        'Imagine someone says: "We need AI in our university portal." Don\'t start designing the AI chatbot. Ask: "Why?" Maybe the real solution is better navigation, a checklist, or reminders.',
        'AI is a technology. The user\'s problem is the product question.',
      ],
      visual: {
        type: 'list',
        items: [
          'Product → Should we build it?',
          'UX → Does the experience work?',
          'UI → Can people understand it?',
        ],
      },
    },
  },

  // SLIDE 25 ── CLOSING
  {
    id: 'closing',
    title: 'Design Outcomes',
    type: 'hero',
    content: {
      headline: "Don't design screens.",
      subheadline: 'Design outcomes.',
      footer:
        'Understand people → Find the real problem → Explore → Prototype → Test → Build → Learn → Improve',
      attribution:
        "You're here to learn how to solve the right problem for the right person.",
    },
  },

  // FINAL SLIDE: THANK YOU
  {
    id: 'final',
    title: 'Thank You',
    type: 'contact',
    content: {
      heading: 'Thank You.',
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
    },
    speakerNotes: [
      '"Thank you."',
      'Open Q&A session.',
    ],
  },
];
