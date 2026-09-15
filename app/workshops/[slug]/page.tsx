import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { getWorkshopItemBySlug, getAllWorkshopSlugs } from '@/data/workshops';
import PresentationShell from '@/components/shell/PresentationShell';

export function generateStaticParams() {
  return getAllWorkshopSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkshopItemBySlug(slug);

  if (!item) {
    return {
      title: 'Workshop · Nathanim Tadele',
    };
  }

  return {
    title: `${item.title} · Nathanim Tadele`,
    description: item.subtitle,
  };
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkshopItemBySlug(slug);

  if (!item) {
    redirect('/');
  }

  return (
    <PresentationShell
      slides={item.slides}
      workshopTitle={item.title}
    />
  );
}
