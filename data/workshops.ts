import type { Workshop, WorkshopSubItem, Slide } from '@/lib/types';
import { introductionSlides } from './workshops/introduction';
import { uiUxSlides } from './workshops/ui-ux';
import { practiceSlides } from './workshops/practice';

export { introductionSlides, uiUxSlides, practiceSlides };

export interface ResolvedWorkshopItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  slides: Slide[];
}

/* ==========================================================
   CENTRAL WORKSHOP DIRECTORY REGISTRY
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

export function getAllWorkshopSlugs(): string[] {
  const slugs: string[] = [];
  for (const w of workshops) {
    if (w.subItems && w.subItems.length > 0) {
      for (const item of w.subItems) {
        slugs.push(item.id);
      }
    } else if (w.slides) {
      slugs.push(w.id);
    }
  }
  return slugs;
}

export function getWorkshopItemBySlug(slug: string): ResolvedWorkshopItem | undefined {
  for (const w of workshops) {
    if (w.id === slug && w.slides) {
      return {
        id: w.id,
        number: w.number,
        title: w.title,
        subtitle: w.subtitle,
        slides: w.slides,
      };
    }
    if (w.subItems) {
      const match = w.subItems.find((item) => item.id === slug);
      if (match) {
        return {
          id: match.id,
          number: match.number,
          title: match.title,
          subtitle: match.subtitle,
          slides: match.slides,
        };
      }
    }
  }
  return undefined;
}
