const article = {
  title: "Refinansowanie kredytu – kiedy sie oplaca?",
  lead:
    "Refinansowanie kredytu to prosty sposob na nizsza rate i wiekszy spokoj w domowym budzecie.",
  description:
    "Sprawdz kiedy refinansowanie kredytu pozwala zmniejszyc rate i jakie koszty musisz sprawdzic zanim przeniesiesz zobowiazanie do innego banku.",
  canonical: "https://www.kalkulatorfinansowy.com.pl/artykuly/refinansowanie-kredytu",
  author: "Kalkulator Finansowy",
  datePublished: "2025-10-10",
  content: `
    <p>Rata kredytu moze byc nizsza gdy wybierzesz refinansowanie.</p>
    <p>Nowy bank splaca stare zobowiazanie i proponuje swiezy harmonogram.</p>
    <p>Zyskujesz nizsza rate albo krotszy okres splaty w zaleznosci od negocjacji.</p>
    <h2>Kiedy warto myslec o refinansowaniu</h2>
    <p>Sprawdz czy oprocentowanie na rynku spadlo od podpisania twojej umowy.</p>
    <p>Zbierz oferty kilku bankow i porownaj laczny koszt kredytu.</p>
    <p>Ocen realny zysk po uwzglednieniu prowizji oraz oplat dodatkowych.</p>
    <h2>Jak przygotowac sie do rozmowy</h2>
    <p>Przed decyzja uzyj kalkulatora kredytowego aby przeliczyc raty.</p>
    <p>Porownaj warianty z roznym okresem splaty i sprawdz rezerwe w budzecie.</p>
    <p>Zapytaj o koszt ubezpieczenia i prowizje za wczesniejsza splate.</p>
    <h2>Na co uwazac przy podpisywaniu umowy</h2>
    <p>Popros o harmonogram w wersji pisemnej zanim zaakceptujesz oferte.</p>
    <p>Sprawdz oplaty administracyjne oraz warunki powiazanych produktow.</p>
    <p>Zawsze czytaj drobny druk dotyczacy mozliwego wzrostu marzy.</p>
    <p>Zajrzyj tez do artykulu <a href="/artykuly/jak-bank-liczy-rrso">Jak bank liczy RRSO i co to oznacza?</a> aby zrozumiec roznice w kosztach.</p>
    <p><a href="/#kalkulator">Oblicz rate kredytu</a></p>
  `,
};

export const metadata = {
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
    publishedTime: article.datePublished,
    authors: [article.author],
    siteName: "Kalkulator Finansowy",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    datePublished: article.datePublished,
    description: article.description,
    mainEntityOfPage: article.canonical,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-slate text-left leading-relaxed">
        <h1 className="not-prose text-4xl font-semibold text-foreground sm:text-5xl">
          {article.title}
        </h1>
        <p className="not-prose mt-4 text-lg text-muted sm:text-xl">
          {article.lead}
        </p>
        <div
          className="mt-8 [&>*]:leading-relaxed [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-accent [&>h2]:tracking-tight [&>p]:mt-6 [&>p:first-child]:mt-0 [&>ul]:mt-6 [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mt-2"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </>
  );
}
