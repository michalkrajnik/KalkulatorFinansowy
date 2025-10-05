import Link from "next/link";
import type { ReactNode } from "react";

type ArticleLayoutProps = {
  title: string;
  lead: string;
  publishedAt: string;
  readingTime: string;
  jsonLd: Record<string, unknown>;
  children: ReactNode;
};

export default function ArticleLayout({
  title,
  lead,
  publishedAt,
  readingTime,
  jsonLd,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-32 sm:px-6 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="space-y-4 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          {publishedAt} • {readingTime}
        </p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="text-base text-muted sm:text-lg">{lead}</p>
      </header>
      <div className="prose prose-slate max-w-none leading-7 text-foreground prose-headings:text-foreground prose-a:text-cta prose-a:no-underline hover:prose-a:underline dark:prose-invert">
        {children}
      </div>
      <footer className="pt-6">
        <Link
          href="/#artykuly"
          className="inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
        >
          Wróć do listy artykułów
        </Link>
      </footer>
    </article>
  );
}
