import Script from "next/script";
import LoanCalculator from "@/components/loan-calculator";

const siteUrl = "https://kalkulator-kredytowy.vercel.app";

const creditOffers = [
  {
    name: "Bank A",
    description: "RRSO od 8,1%",
    logo: "A",
  },
  {
    name: "Bank B",
    description: "RRSO od 8,3%",
    logo: "B",
  },
  {
    name: "Bank C",
    description: "RRSO od 8,5%",
    logo: "C",
  },
];

const loanSchema = {
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  name: "Kalkulator kredytowy 2025 – oblicz ratę kredytu hipotecznego",
  description:
    "Darmowy kalkulator kredytowy online. Oblicz ratę kredytu hipotecznego lub gotówkowego. Sprawdź oferty banków.",
  loanType: "MortgageLoan",
  currency: "PLN",
  amount: {
    "@type": "MonetaryAmount",
    currency: "PLN",
    value: "450000",
  },
  interestRate: "6.5",
  loanTerm: "P25Y",
  provider: {
    "@type": "Organization",
    name: "Kalkulator Kredytowy",
    url: siteUrl,
  },
  url: siteUrl,
  image: `${siteUrl}/og-image.svg`,
};

const faqs = [
  {
    question: "Czym jest RRSO?",
    answer:
      "RRSO, czyli rzeczywista roczna stopa oprocentowania, uwzględnia nie tylko odsetki, ale również inne koszty kredytu – prowizje, ubezpieczenia czy opłaty przygotowawcze. Dzięki temu ułatwia porównanie ofert różnych banków.",
  },
  {
    question: "Jak liczone są raty stałe i malejące?",
    answer:
      "Raty stałe obliczane są wzorem annuitetowym i pozostają na podobnym poziomie przez cały okres spłaty. W ratach malejących część kapitałowa jest stała, natomiast odsetki maleją wraz z każdą spłatą, dlatego pierwsze raty są najwyższe.",
  },
  {
    question: "Czy kalkulator uwzględnia prowizje?",
    answer:
      "Nie, kalkulator skupia się na oprocentowaniu nominalnym i wysokości raty kredytowej. Aby oszacować pełny koszt, dolicz prowizje bankowe, ubezpieczenia oraz opłaty notarialne zgodnie z warunkami wybranej oferty.",
  },
  {
    question: "Czy wynik kalkulatora jest wiążący?",
    answer:
      "Wynik ma charakter orientacyjny i nie stanowi oferty bankowej. Ostateczne warunki ustala instytucja finansowa po analizie zdolności kredytowej, rodzaju nieruchomości i dokumentów klienta.",
  },
  {
    question: "Jak mogę uzyskać lepsze warunki kredytu?",
    answer:
      "Zadbaj o wysoką zdolność kredytową: regularnie spłacaj zobowiązania, ogranicz limity na kartach, zwiększ wkład własny oraz porównaj oferty wielu banków. Negocjacje z doradcą mogą dodatkowo obniżyć marżę lub prowizję.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Script
        id="loan-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(loanSchema) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-4 pb-16 pt-24 sm:px-6 md:px-8">
        <section className="grid grid-cols-1 gap-10 rounded-3xl bg-white/80 p-8 shadow-lg shadow-slate-900/5 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
              Gotowe do porównań
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Oblicz swoją ratę kredytu hipotecznego w mniej niż minutę
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Skorzystaj z naszego kalkulatora, aby zrozumieć miesięczne koszty kredytu mieszkaniowego, porównaj oferty banków i przygotuj się na rozmowę z doradcą.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
              >
                Oblicz swoją ratę kredytu
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-accent/20 px-6 py-3 text-sm font-semibold text-accent transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Zobacz odpowiedzi na pytania
              </a>
            </div>
            <ul className="grid gap-4 text-sm text-muted sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-cta/15 text-xs font-semibold text-cta">1</span>
                Symulacja rat stałych lub malejących na podstawie Twoich danych
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-cta/15 text-xs font-semibold text-cta">2</span>
                Harmonogram pierwszych rat dostępny przy wariancie malejącym
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-cta/15 text-xs font-semibold text-cta">3</span>
                FAQ z praktycznymi poradami dla kredytobiorców
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-cta/15 text-xs font-semibold text-cta">4</span>
                Trzy oferty kredytowe gotowe do porównania
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-accent/10 bg-accent-soft/70 p-8">
            <div className="absolute -right-12 -top-12 size-44 rounded-full border border-accent/20 bg-accent/10 blur-2xl" aria-hidden />
            <div className="absolute -bottom-10 -left-8 size-40 rounded-full border border-cta/10 bg-cta/10 blur-2xl" aria-hidden />
            <div className="relative space-y-5">
              <p className="text-sm font-medium uppercase tracking-wide text-accent">
                Podsumowanie hipotetyczne
              </p>
              <div className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white p-6 shadow-md">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">Kwota kredytu</p>
                  <p className="text-2xl font-semibold text-foreground">450 000 PLN</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">Oprocentowanie</p>
                    <p className="text-base font-semibold text-foreground">6,5% w skali roku</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">Okres</p>
                    <p className="text-base font-semibold text-foreground">25 lat</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-cta/10 p-4 text-sm">
                  <p className="text-xs uppercase tracking-wide text-muted">Szacowana rata</p>
                  <p className="text-2xl font-semibold text-cta">3 125 PLN / mies.</p>
                </div>
                <p className="text-xs text-muted">
                  Rzeczywiste warunki mogą się różnić w zależności od historii kredytowej, rodzaju nieruchomości oraz dodatkowych produktów bankowych.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="kalkulator">
          <LoanCalculator />
        </div>

        <section
          id="oferty-kredytowe"
          aria-labelledby="credit-offers-title"
          className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-900/5 sm:p-12"
        >
          <div className="space-y-2">
            <h2 id="credit-offers-title" className="text-2xl font-semibold text-foreground">
              Oferty kredytowe
            </h2>
            <p className="max-w-2xl text-sm text-muted">
              Poznaj wybrane propozycje kredytowe. Każda karta zawiera miejsce na link afiliacyjny do szczegółów oferty.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {creditOffers.map((offer) => (
              <article
                key={offer.name}
                className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-accent/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-base font-semibold text-accent">
                      {offer.logo}
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-foreground">{offer.name}</p>
                      <p className="text-sm text-muted">{offer.description}</p>
                    </div>
                  </div>
                </div>
                <a
                  href=""
                  className="inline-flex w-full items-center justify-center rounded-full bg-cta px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
                >
                  Sprawdź ofertę
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="faq"
          aria-labelledby="faq-title"
          className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-900/5 sm:p-12"
        >
          <div className="space-y-2">
            <h2 id="faq-title" className="text-2xl font-semibold text-foreground">
              FAQ: kredyty hipoteczne
            </h2>
            <p className="text-sm text-muted">
              Najczęściej zadawane pytania i praktyczne porady, które pomogą Ci przygotować się do rozmowy z bankiem.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-foreground">
                  {faq.question}
                  <span className="text-xl text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:px-6 md:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold text-foreground">Kalkulator Kredytowy</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:kontakt@kalkulatorkredytowy.pl" className="transition hover:text-accent">
              kontakt@kalkulatorkredytowy.pl
            </a>
            <a href="#polityka-prywatnosci" className="transition hover:text-accent">
              Polityka prywatności (w przygotowaniu)
            </a>
            <a href="#rodo" className="transition hover:text-accent">
              RODO (w przygotowaniu)
            </a>
            <span className="text-xs text-muted">© {currentYear} Wszystkie prawa zastrzeżone.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
