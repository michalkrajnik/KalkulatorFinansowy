import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import { articles, articlesBySlug } from "@/data/articles";

type ArticlePageParams = {
  slug: string;
};

type ArticlePageProps = {
  params: Promise<ArticlePageParams>;
};

const ogImageUrl = "https://www.kalkulatorfinansowy.com.pl/og-image.jpg";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesBySlug.get(slug);

  if (!article) {
    return {};
  }

  const metaTitle = article.metaTitle ?? article.title;
  const metaDescription = article.metaDescription ?? article.description;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: article.canonical,
    },
    openGraph: {
      type: "article",
      title: metaTitle,
      description: metaDescription,
      url: article.canonical,
      publishedTime: article.publishedAtIso,
      authors: ["Kalkulator Finansowy"],
      siteName: "Kalkulator Finansowy",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImageUrl],
    },
    keywords: article.keywords,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesBySlug.get(slug);

  if (!article) {
    notFound();
  }

  const metaDescription = article.metaDescription ?? article.description;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: metaDescription,
    datePublished: article.publishedAtIso,
    dateModified: article.publishedAtIso,
    author: {
      "@type": "Organization",
      name: "Kalkulator Finansowy",
      url: "https://www.kalkulatorfinansowy.com.pl",
    },
    publisher: {
      "@type": "Organization",
      name: "Kalkulator Finansowy",
      logo: {
        "@type": "ImageObject",
        url: ogImageUrl,
      },
    },
    mainEntityOfPage: article.canonical,
    keywords: article.keywords.join(", "),
    url: article.canonical,
  };

  return (
    <ArticleLayout
      title={article.title}
      lead={article.lead}
      publishedAt={article.publishedAt}
      readingTime={article.readingTime}
      jsonLd={jsonLd}
    >
      {article.content()}
    </ArticleLayout>
  );
}
