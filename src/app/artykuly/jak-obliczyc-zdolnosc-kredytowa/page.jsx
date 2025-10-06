const article = {
  title: "Jak obliczyc zdolnosc kredytowa krok po kroku",
  lead: "Dowiedz sie jak przygotowac budzet, dokumenty i symulacje, aby poznac bezpieczna kwote kredytu hipotecznego.",
  description:
    "Przewodnik pokazuje jak policzyc zdolnosc kredytowa, uporzadkowac wydatki i przygotowac sie do rozmowy z bankiem.",
  canonical:
    "https://kalkulatorfinansowy.com.pl/artykuly/jak-obliczyc-zdolnosc-kredytowa",
  author: "Kalkulator Finansowy",
  datePublished: "2025-03-12",
  content: `
    <p>Prosta ocena zdolnosci kredytowej daje spokoj przed rozmowa z bankiem.</p>
    <p>Wiesz jaka kwote mozesz bezpiecznie pozyczyc i lepiej planujesz domowy budzet.</p>
    <p>Krok po kroku przejdziesz przez dane finansowe i przygotujesz potrzebne dokumenty.</p>
    <h2>Co oznacza zdolnosc kredytowa</h2>
    <p>Zdolnosc kredytowa to ocena czy udzwigniesz raty przez caly okres umowy.</p>
    <p>Bank patrzy na dochody, koszty zycia oraz dotychczasowe zobowiazania.</p>
    <p>Liczy sie rowniez historia splat i stabilnosc zatrudnienia.</p>
    <h2>Jak przygotowac dane finansowe</h2>
    <p>Na start spisz wszystkie zrodla dochodu w skali miesiaca.</p>
    <ul>
      <li>Wynagrodzenie podstawowe.</li>
      <li>Premie i dodatki.</li>
      <li>Dochody z najmu lub dzialalnosci.</li>
    </ul>
    <p>Potem zbierz koszty, ktore powtarzaja sie co miesiac.</p>
    <ul>
      <li>Rachunki za mieszkanie.</li>
      <li>Wydatki na zywnosc i transport.</li>
      <li>Abonamenty, opieka medyczna, edukacja.</li>
    </ul>
    <h3>Dlaczego warto posprzatac budzet</h3>
    <p>Czysta lista wydatkow pokazuje czy masz zapas na rate i poduszke finansowa.</p>
    <p>Dzieki temu latwiej oceniasz, ktore koszty mozna zmniejszyc przed wnioskiem.</p>
    <h2>Analiza zobowiazan</h2>
    <p>Wpisz kazdy kredyt, karte oraz umowe ratalna.</p>
    <p>Sprawdz limity na kartach, nawet jesli ich nie wykorzystujesz.</p>
    <p>Bank wezmie je pod uwage przy liczeniu obciazenia.</p>
    <h3>Raport z BIK</h3>
    <p>Pobierz aktualny raport z BIK, aby zobaczyc czy historia splat jest bez zarzutu.</p>
    <p>Jesli znajdziesz bledy, zglos korekte zanim zlozysz wniosek.</p>
    <h2>Symulacje z kalkulatorem</h2>
    <p>W kalkulatorze wpisz kwote kredytu, oprocentowanie i czas splaty.</p>
    <p>Porownaj wynik dla raty stalej oraz malejacej.</p>
    <p>Dodaj koszt ubezpieczen i prowizji, aby poznac realna rate.</p>
    <h3>Jak interpretowac wyniki</h3>
    <p>Sprawdz czy rata nie przekracza trzydziestu pieciu procent dochodu netto.</p>
    <p>Upewnij sie, ze po splacie raty zostaje budzet na nieprzewidziane wydatki.</p>
    <p>Zapisz kilka wariantow, aby porownac scenariusze z doradca.</p>
    <h2>Dokumenty dla banku</h2>
    <p>Przygotuj zaswiadczenie o dochodach oraz umowe o prace.</p>
    <p>Jesli prowadzisz firme, zbierz ksiege przychodow i rozchodow.</p>
    <p>Wartosc nieruchomosci potwierdzisz operatem lub wycena dewelopera.</p>
    <h3>Rezerwa finansowa</h3>
    <p>Nawet przy wysokiej zdolnosci warto zbudowac rezerwe na trzy miesiace rat.</p>
    <p>Dzieki temu latwiej przejdziesz przez nieprzewidziane sytuacje zyciowe.</p>
    <h2>Rozmowa z doradca</h2>
    <p>Z gotowymi danymi trafniej odpowiadasz na pytania doradcy.</p>
    <p>Pokazujesz, ze kontrolujesz budzet i rozumiesz konsekwencje kredytu.</p>
    <p>To buduje zaufanie i moze pomoc w negocjacjach marzy oraz prowizji.</p>
    <h2>Co dalej</h2>
    <p>Po zebraniu informacji wybierz dwa lub trzy banki i porownaj oferty.</p>
    <p>Sprawdz RRSO, wysokosc oprocentowania i dodatkowe uslugi.</p>
    <p>Wybierz propozycje, ktora zapewnia bezpieczenstwo i miesci sie w budzecie.</p>
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
