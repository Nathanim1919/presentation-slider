'use client';

import type { Slide } from '@/lib/types';
import HeroSlide from '@/components/slides/HeroSlide';
import StatementSlide from '@/components/slides/StatementSlide';
import ExplanationSlide from '@/components/slides/ExplanationSlide';
import ComparisonSlide from '@/components/slides/ComparisonSlide';
import DiagramSlide from '@/components/slides/DiagramSlide';
import QuestionSlide from '@/components/slides/QuestionSlide';
import ExerciseSlide from '@/components/slides/ExerciseSlide';
import CaseStudySlide from '@/components/slides/CaseStudySlide';
import InteractiveSlide from '@/components/slides/InteractiveSlide';
import PrototypeSlide from '@/components/slides/PrototypeSlide';
import BeforeAfterSlide from '@/components/slides/BeforeAfterSlide';
import ProductTeardownSlide from '@/components/slides/ProductTeardownSlide';
import ContactSlide from '@/components/slides/ContactSlide';
import ShipCycleSlide from '@/components/slides/ShipCycleSlide';
import DesignProcessSlide from '@/components/slides/DesignProcessSlide';
import PrinciplesSlide from '@/components/slides/PrinciplesSlide';
import UxScenarioSlide from '@/components/slides/UxScenarioSlide';
import SynthesisSlide from '@/components/slides/SynthesisSlide';
import TableOfContentsSlide from '@/components/slides/TableOfContentsSlide';
import RevealSlide from '@/components/slides/RevealSlide';
import UiTransformSlide from '@/components/slides/UiTransformSlide';
import ButtonStorySlide from '@/components/slides/ButtonStorySlide';
import JourneySlide from '@/components/slides/JourneySlide';
import ChallengeSlide from '@/components/slides/ChallengeSlide';
import ThreeLayerSlide from '@/components/slides/ThreeLayerSlide';
import ButtonStatesSlide from '@/components/slides/ButtonStatesSlide';
import DesignMasterySlide from '@/components/slides/DesignMasterySlide';
import DesignInternetSlide from '@/components/slides/DesignInternetSlide';
import IntroJourneySlide from '@/components/slides/IntroJourneySlide';
import IntroBuildSlide from '@/components/slides/IntroBuildSlide';
import IntroProjectsSlide from '@/components/slides/IntroProjectsSlide';
import IntroBridgeSlide from '@/components/slides/IntroBridgeSlide';

interface SlideRendererProps {
  slide: Slide;
}

export default function SlideRenderer({ slide }: SlideRendererProps) {
  switch (slide.type) {
    case 'hero':
      return <HeroSlide content={slide.content} />;
    case 'statement':
      return <StatementSlide content={slide.content} />;
    case 'explanation':
      return <ExplanationSlide content={slide.content} />;
    case 'comparison':
      return <ComparisonSlide content={slide.content} />;
    case 'before_after':
      return <BeforeAfterSlide content={slide.content} />;
    case 'diagram':
      return <DiagramSlide content={slide.content} />;
    case 'case_study':
      return <CaseStudySlide content={slide.content} />;
    case 'question':
      return <QuestionSlide content={slide.content} />;
    case 'exercise':
      return <ExerciseSlide content={slide.content} />;
    case 'interactive':
      return <InteractiveSlide content={slide.content} />;
    case 'product_teardown':
      return <ProductTeardownSlide content={slide.content} />;
    case 'prototype':
      return <PrototypeSlide content={slide.content} />;
    case 'contact':
      return <ContactSlide content={slide.content} />;
    case 'lifecycle':
      return <ShipCycleSlide content={slide.content} />;
    case 'design_process':
      return <DesignProcessSlide content={slide.content} />;
    case 'principles':
      return <PrinciplesSlide content={slide.content} />;
    case 'ux_scenario':
      return <UxScenarioSlide content={slide.content} />;
    case 'synthesis':
      return <SynthesisSlide content={slide.content} />;
    case 'table_of_contents':
      return <TableOfContentsSlide content={slide.content} />;
    case 'reveal':
      return <RevealSlide content={slide.content} />;
    case 'ui_transform':
      return <UiTransformSlide content={slide.content} />;
    case 'button_story':
      return <ButtonStorySlide content={slide.content} />;
    case 'journey':
      return <JourneySlide content={slide.content} />;
    case 'challenge':
      return <ChallengeSlide content={slide.content} />;
    case 'three_layer':
      return <ThreeLayerSlide content={slide.content} />;
    case 'button_states':
      return <ButtonStatesSlide content={slide.content} />;
    case 'design_mastery':
      return <DesignMasterySlide content={slide.content} />;
    case 'design_internet':
      return <DesignInternetSlide content={slide.content} />;
    case 'intro_journey':
      return <IntroJourneySlide content={slide.content} />;
    case 'intro_build':
      return <IntroBuildSlide content={slide.content} />;
    case 'intro_projects':
      return <IntroProjectsSlide content={slide.content} />;
    case 'intro_bridge':
      return <IntroBridgeSlide content={slide.content} />;
    default:
      return (
        <div className="flex flex-1 items-center justify-center">
          <p style={{ color: 'var(--text-tertiary)' }}>Unknown slide type</p>
        </div>
      );
  }
}
