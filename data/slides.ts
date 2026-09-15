import type { Slide } from '@/lib/types';
import { introductionSlides } from './workshops/introduction';
import { uiUxSlides } from './workshops/ui-ux';
import { practiceSlides } from './workshops/practice';

export { introductionSlides, uiUxSlides, practiceSlides };

export const slides: Slide[] = [
  ...introductionSlides,
  ...uiUxSlides,
  ...practiceSlides,
];
