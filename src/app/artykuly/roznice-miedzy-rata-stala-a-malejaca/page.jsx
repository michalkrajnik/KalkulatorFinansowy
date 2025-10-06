const article = {
  title: "Roznice miedzy rata stala a malejaca",
  lead: "Poznaj proste wyjasnienie typow rat i wybierz rozwiazanie dopasowane do Twojego budzetu.",
  description:
    "Przewodnik wyjasnia roznice miedzy rata stala a malejaca, omawia koszty i pomagaja wybrac optymalny model splaty.",
  canonical:
    "https://kalkulatorfinansowy.com.pl/artykuly/roznice-miedzy-rata-stala-a-malejaca",
  author: "Kalkulator Finansowy",
  datePublished: "2024-05-20",
  content: `
    <p>Rata stala daje spokoj, bo kazda platnosc ma jedna wysokosc i nie zaskakuje domowego budzetu.</p>
    <p>Rata malejaca zaczyna sie wyzej, lecz z czasem spada, dzieki czemu calkowity koszt kredytu jest nizszy.</p>
    <h2>Jak dziala rata stala</h2>
    <p>Rata stala laczy odsetki i kapital w jednej kwocie, ktora zostaje niezmienna przez caly okres splaty.</p>
    <p>Wieksza czesc kazdej platnosci to odsetki na starcie, ale z biegiem lat rola kapitalu rosnie.</p>
    <ul>
      <li>Staly koszt miesieczny.</li>
      <li>Latwiejsze planowanie budzetu.</li>
      <li>Wyrazna przewidywalnosc wydatkow.</li>
    </ul>
    <h2>Jak dziala rata malejaca</h2>
    <p>Rata malejaca opiera sie na rownym kapitale oraz malejacych odsetkach, poniewaz saldo zadluzenia szybko spada.</p>
    <p>Pierwsze miesiace sa kosztowniejsze, za to szybciej redukujesz dlug i platnosc w dolnych miesiacach jest znacznie nizsza.</p>
    <ul>
      <li>Laczny koszt kredytu jest mniejszy.</li>
      <li>Szybszy spadek odsetek.</li>
      <li>Lepsza ochrona na wypadek wzrostu stop procentowych.</li>
    </ul>
    <h3>Kiedy wybrac rate stala</h3>
    <p>Rata stala pasuje, gdy dochody sa stabilne i priorytetem jest spokojny plan budzetowy.</p>
    <p>Sprawdza sie takze, gdy kredyt bierze rodzina, dla ktorej przewidywalnosc jest wazniejsza niz minimalna oszczednosc.</p>
    <h3>Kiedy wybrac rate malejaca</h3>
    <p>Rata malejaca sluzy osobom, ktore moga udzwignac wyzsze obciazenie na poczatku i chca placic mniej w dalszych latach.</p>
    <p>Doceni ja kredytobiorca planujacy wczesniejsze nadplaty, poniewaz szybciej zmniejsza kapital.</p>
    <h2>Jak podjac decyzje</h2>
    <p>Porownaj miesieczne mozliwosci oraz laczny koszt kredytu z kalkulatorem finansowym i wybierz model zgodny z komfortem psychologicznym.</p>
    <p>Jesli budzet ma margines, rata malejaca przyniesie wiecej oszczednosci, natomiast rata stala sprawdzi sie, gdy potrzebujesz pelnej pewnosci wydatkow.</p>
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
          className="mt-8 [&>*]:leading-relaxed [&>h2]:mt-10 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-accent [&>h2]:tracking-tight [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-accent [&>p]:mt-6 [&>p:first-child]:mt-0 [&>ul]:mt-6 [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mt-2"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </>
  );
}
