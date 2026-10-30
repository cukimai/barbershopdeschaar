import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { getLandingPage, landingPages } from "@/data/pages";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  const url = `/${page.slug}/`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: `${page.metaTitle} | ${site.name}`,
      description: page.metaDescription,
      images: [{ url: page.image, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | ${site.name}`,
      description: page.metaDescription,
      images: [page.image],
    },
  };
}

export default async function LandingRoute({ params }: Props) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  return <LandingPage page={page} />;
}
