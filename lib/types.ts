/* ============================================
   SLIDE DATA MODEL
   ============================================ */

export type SlideType =
  | 'hero'
  | 'statement'
  | 'explanation'
  | 'comparison'
  | 'before_after'
  | 'diagram'
  | 'case_study'
  | 'question'
  | 'exercise'
  | 'interactive'
  | 'product_teardown'
  | 'prototype'
  | 'contact'
  | 'lifecycle'
  | 'design_process'
  | 'principles'
  | 'ux_scenario'
  | 'synthesis'
  | 'table_of_contents';

/* ---- Content shapes per slide type ---- */

export interface HeroContent {
  headline: string;
  subheadline: string;
  meta?: string;
  footer?: string;
  attribution?: string;
}

export interface StatementContent {
  statement?: string;
  text?: string;
  emphasis?: 'low' | 'medium' | 'high';
  attribution?: string;
  footnote?: string;
}

export interface ExplanationContent {
  heading: string;
  body: string[];          // paragraphs or bullet items
  visual?: {
    type: 'list' | 'image' | 'code';
    items?: string[];
    src?: string;
    alt?: string;
    code?: string;
  };
}

export interface ComparisonSide {
  label: string;
  heading?: string;
  points?: string[];
  items?: string[];
  tone?: 'neutral' | 'positive' | 'negative';
}

export interface ComparisonContent {
  heading?: string;
  connectorLabel?: string;
  left: ComparisonSide;
  right: ComparisonSide;
}

export interface BeforeAfterSide {
  label: string;
  description?: string;
  items?: string[];
  issues?: string[];
  improvements?: string[];
}

export interface BeforeAfterContent {
  heading?: string;
  before: BeforeAfterSide;
  after: BeforeAfterSide;
}

export interface DiagramNode {
  id?: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface DiagramContent {
  nodes: DiagramNode[];
  direction: 'horizontal' | 'vertical';
  caption?: string;
  loop?: boolean;
}

export interface CaseStudyStep {
  action: string;
  result: string;
}

export interface CaseStudyContent {
  product?: string;
  scenario?: string;
  context: string;
  problem?: string;
  steps?: CaseStudyStep[];
  insight: string;
  takeaway?: string;
}

export interface QuestionContent {
  question: string;
  subtitle?: string;
  prompt?: string;         // e.g. "Discuss with your neighbor"
}

export interface ExerciseContent {
  instruction: string;
  duration?: string;
  timeLimit?: number;      // seconds
  steps?: string[];
  prompt?: string;
}

export interface InteractiveContent {
  heading: string;
  description: string;
  exampleId: string;       // identifies which inline example to render
  exampleRoute?: string;   // optional full-page route
  toggleLabels?: [string, string]; // custom labels for the toggle
}

export interface ProductTeardownContent {
  heading: string;
  description: string;
  observations: string[];
  exampleId?: string;
}

export interface PrototypeContent {
  heading: string;
  description: string;
  cta?: string;
  ctaLabel?: string;
  url?: string;
  ctaRoute?: string;       // /examples/... route
  principle?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  url: string;
  icon?: 'globe' | 'mail' | 'github' | 'twitter' | 'linkedin';
}

export interface ContactContent {
  badge?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  prompt?: string;
  name: string;
  role?: string;
  bio?: string;
  website?: string;
  email?: string;
  links?: ContactLink[];
  closingQuote?: string;
}

export interface LifecycleStage {
  id: string;
  number: string;
  label: string;
  subtitle: string;
  mainIdea: string;
  whyItMattersHeading?: string;
  whyItMatters: string[];
  keyStatement: string;
  example: {
    title: string;
    description: string;
    flow?: string[];
    comparison?: {
      labelA: string;
      valueA: string;
      labelB: string;
      valueB: string;
    };
  };
  talkingPoint?: string;
}

export interface LifecycleContent {
  heading?: string;
  caption?: string;
  stages: LifecycleStage[];
}

export interface DesignProcessStage {
  id: string;
  number: string;
  label: string;
  subtitle: string;
  question: string;
  definition: string;
  whatWeDo: string[];
  output: string[];
  keyIdea: string;
  example: {
    title: string;
    description: string;
    contrast?: {
      insteadOf: string;
      askOrDefine: string;
    };
    list?: string[];
    task?: {
      instruction: string;
      observationQuestions: string[];
    };
    tryIt?: {
      question: string;
      optionA: string;
      optionB: string;
      reveal: string;
    };
  };
  visualFlow?: string[];
  presenterNote?: string;
}

export interface DesignProcessContent {
  heading: string;
  statement: string;
  stages: DesignProcessStage[];
}

export interface PrincipleItem {
  title: string;
  description: string;
}

export interface PrinciplesContent {
  eyebrow?: string;
  heading: string;
  statement: string;
  substatement?: string;
  principles: PrincipleItem[];
  closingNote?: string;
}

export interface UxScenarioContent {
  scenarioNumber: string;
  scenarioTitle: string;
  scenarioId: 'buttons' | 'destructive' | 'forms' | 'navigation' | 'checkout' | 'empty_states';
  question: string;
  badPrompt?: string;
  reveal: {
    whatYouExperienced: string;
    theProblem: string;
    thePrinciple: string;
  };
  goodTitle?: string;
  takeaway: string;
}

export interface TableOfContentsItem {
  number: string;
  title: string;
  description: string;
  tag?: string;
}

export interface TableOfContentsContent {
  meta?: string;
  heading: string;
  statement?: string;
  items: TableOfContentsItem[];
  footnote?: string;
}

export interface SynthesisContent {
  eyebrow?: string;
  heading: string;
  points: string[];
  finalStatement: {
    line1: string;
    line2: string;
  };
}

/* ---- Discriminated union: Slide ---- */

export interface SlideBase {
  id: string;
  title: string;
  subtitle?: string;
  speakerNotes?: string[];
}

export type Slide =
  | (SlideBase & { type: 'hero';              content: HeroContent })
  | (SlideBase & { type: 'statement';         content: StatementContent })
  | (SlideBase & { type: 'explanation';       content: ExplanationContent })
  | (SlideBase & { type: 'comparison';        content: ComparisonContent })
  | (SlideBase & { type: 'before_after';      content: BeforeAfterContent })
  | (SlideBase & { type: 'diagram';           content: DiagramContent })
  | (SlideBase & { type: 'case_study';        content: CaseStudyContent })
  | (SlideBase & { type: 'question';          content: QuestionContent })
  | (SlideBase & { type: 'exercise';          content: ExerciseContent })
  | (SlideBase & { type: 'interactive';       content: InteractiveContent })
  | (SlideBase & { type: 'product_teardown';  content: ProductTeardownContent })
  | (SlideBase & { type: 'prototype';         content: PrototypeContent })
  | (SlideBase & { type: 'contact';           content: ContactContent })
  | (SlideBase & { type: 'lifecycle';         content: LifecycleContent })
  | (SlideBase & { type: 'design_process';    content: DesignProcessContent })
  | (SlideBase & { type: 'principles';        content: PrinciplesContent })
  | (SlideBase & { type: 'ux_scenario';       content: UxScenarioContent })
  | (SlideBase & { type: 'synthesis';         content: SynthesisContent })
  | (SlideBase & { type: 'table_of_contents'; content: TableOfContentsContent });
