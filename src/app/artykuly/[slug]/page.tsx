import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import { articles, articlesBySlug } from "@/data/articles";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = articlesBySlug.get(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: article.canonical,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: article.canonical,
      publishedTime: article.publishedAtIso,
      authors: ["Kalkulator Finansowy"],
      siteName: "Kalkulator Finansowy",
      images: [
        {
          url: `${new URL("/og-image.jpg", article.canonical).toString()}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og-image.jpg"],
    },
    keywords: article.keywords,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articlesBySlug.get(params.slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAtIso,
    dateModified: article.publishedAtIso,
    author: {
      "@type": "Organization",
      name: "Kalkulator Finansowy",
      url: "https://kalkulatorfinansowy.com.pl",
    },
    publisher: {
      "@type": "Organization",
      name: "Kalkulator Finansowy",
      logo: {
        "@type": "ImageObject",
        url: "https://kalkulatorfinansowy.com.pl/og-image.jpg",
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
