import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { getWorkshopById, getAllWorkshops } from '@/data/workshops';
import PresentationShell from '@/components/shell/PresentationShell';

export function generateStaticParams() {
  return getAllWorkshops().map((workshop) => ({
    slug: workshop.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const workshop = getWorkshopById(slug);

  if (!workshop) {
    return {
      title: 'Workshop · Nathanim Tadele',
    };
  }

  return {
    title: `${workshop.title} · Nathanim Tadele`,
    description: workshop.subtitle,
  };
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workshop = getWorkshopById(slug);

  if (!workshop) {
    redirect('/');
  }

  return <PresentationShell workshop={workshop} />;
}
