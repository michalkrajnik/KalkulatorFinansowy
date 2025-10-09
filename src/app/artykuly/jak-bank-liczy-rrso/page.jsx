const article = {
  title: "Jak bank liczy RRSO i co to oznacza?",
  lead:
    "RRSO pokazuje pelny koszt kredytu i pomaga porownac oferty bez domyslow.",
  description:
    "Poznaj prosty opis tego jak bank liczy rrso i dlaczego ten wskaznik pomaga porownac kredyty i wybrac bezpieczna oferte.",
  canonical: "https://www.kalkulatorfinansowy.com.pl/artykuly/jak-bank-liczy-rrso",
  author: "Kalkulator Finansowy",
  datePublished: "2025-10-10",
  content: `
    <p>RRSO to rzeczywista roczna stopa oprocentowania.</p>
    <p>Pokazuje ile kosztuje kredyt w skali roku gdy doliczysz prowizje i oplaty.</p>
    <p>Dzieki temu wiesz ktora oferta jest faktycznie tansza nawet przy tej samej racie.</p>
    <h2>Co wchodzi w sklad RRSO</h2>
    <p>Wskaznik uwzglednia oprocentowanie nominalne oraz prowizje przygotowawcze.</p>
    <p>Zawiera koszt ubezpieczen i dodatkowych uslug wymaganych przez bank.</p>
    <p>Sumuje oplaty jednorazowe oraz cykliczne aby pokazac realny koszt.</p>
    <h2>Jak porownywac kredyty</h2>
    <p>Zawsze patrz na RRSO gdy masz dwie podobne oferty.</p>
    <p>Nizsze RRSO oznacza, ze laczny koszt jest mniejszy nawet gdy rata jest podobna.</p>
    <p>Skorzystaj z kalkulatora kredytowego aby sprawdzic rate przy roznych parametrach.</p>
    <h2>Powiazanie z innymi decyzjami</h2>
    <p>Gdy chcesz obnizyc koszt zobacz jak na RRSO wplywa wklad wlasny albo zmiana okresu splaty.</p>
    <p>Jesli planujesz refinansowanie spojrz na artykul <a href="/artykuly/refinansowanie-kredytu">Refinansowanie kredytu – kiedy sie oplaca?</a>.</p>
    <p>Wynik kalkulatora pomoze ci przygotowac pytania do doradcy przed podpisaniem umowy.</p>
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
