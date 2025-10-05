import type { Metadata } from "next";
import Link from "next/link";

import FadeInSection from "@/components/FadeInSection";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Artykuły o kredycie hipotecznym i finansach",
  description:
    "Przegląd poradników o kredycie hipotecznym, kalkulatorze kredytowym, wskaźniku RRSO oraz porównywarkach kredytów przygotowanych przez Kalkulator Finansowy.",
  alternates: {
    canonical: "https://kalkulatorfinansowy.com.pl/artykuly",
  },
};

export default function ArticlesIndexPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 pb-16 pt-32 sm:px-6 md:px-8">
      <FadeInSection>
        <header className="space-y-6 text-center">
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Artykuły o kredytach i finansach domowych
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Zgromadziliśmy poradniki, które pomagają zrozumieć proces uzyskania kredytu hipotecznego,
            wykorzystanie kalkulatora kredytowego, analizę RRSO oraz porównanie ofert w porównywarce
            kredytów. Wybierz artykuł i poznaj szczegóły krok po kroku.
          </p>
        </header>
      </FadeInSection>

      <FadeInSection>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {article.readingTime} • {article.publishedAt}
                </p>
                <h2 className="text-lg font-semibold text-foreground">{article.title}</h2>
                <p className="text-sm text-muted">{article.lead}</p>
              </div>
              <Link
                href={`/artykuly/${article.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cta transition hover:text-cta-dark"
              >
                Czytaj więcej
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>
      </FadeInSection>
    </main>
  );
}
