import Link from "next/link";
import Script from "next/script";
import FadeInSection from "@/components/FadeInSection";
import Footer from "@/components/Footer";
import LoanCalculator from "@/components/loan-calculator";
import { articles as articleCollection } from "@/data/articles";

const siteUrl = "https://www.kalkulatorfinansowy.com.pl";

const creditOffers = [
  {
    id: "alior",
    title: "Alior Bank – kredyt hipoteczny i gotówkowy",
    description:
      "Sprawdź aktualną ofertę kredytów Alior Banku. Kalkulator Finansowy uczestniczy w oficjalnym programie partnerskim tej instytucji.",
    href: "https://savebig.pro/a/qxMXDuXRROsQloE",
    cta: "Zobacz ofertę Alior Banku",
    active: true,
  },
  {
    id: "partners-1",
    title: "Nowe współprace w przygotowaniu",
    description:
      "Trwają rozmowy z kolejnymi bankami i partnerami finansowymi. Wkrótce pojawią się tu aktualne oferty kredytów i leasingów.",
    cta: "Wkrótce dostępne",
    active: false,
  },
  {
    id: "partners-2",
    title: "Nowe współprace w przygotowaniu",
    description:
      "Trwają rozmowy z kolejnymi bankami i partnerami finansowymi. Wkrótce pojawią się tu aktualne oferty kredytów i leasingów.",
    cta: "Wkrótce dostępne",
    active: false,
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
  image: `${siteUrl}/og-image.jpg`,
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
      <main className="mx-auto max-w-6xl space-y-16 px-4 pb-16 pt-32 sm:px-6 md:px-8">
        <FadeInSection>
          <section
            id="start"
            className="scroll-mt-24 rounded-3xl bg-white py-20 text-center shadow-lg shadow-slate-900/10"
          >
            <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-10">
              <h1 className="sr-only">
                Kalkulator kredytowy 2025 – oblicz ratę kredytu hipotecznego
              </h1>
              <h2 className="text-4xl font-semibold text-foreground sm:text-5xl">
                Kalkulator Finansowy – oblicz raty i porównaj oferty banków
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Oblicz swoją zdolność kredytową, sprawdź aktualne oferty banków i znajdź
                najlepsze rozwiązanie finansowe dopasowane do Twoich potrzeb.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#kalkulator"
                  className="inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
                >
                  Uruchom kalkulator
                </a>
                <a
                  href="#oferty"
                  className="inline-flex items-center justify-center rounded-full border border-accent/20 px-6 py-3 text-sm font-semibold text-accent transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Zobacz oferty
                </a>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section
            id="kalkulator"
            className="scroll-mt-24 rounded-3xl bg-gray-50 py-20 text-center shadow-lg shadow-slate-900/5"
          >
            <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-10">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Kalkulator kredytowy
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Tutaj umieść kalkulator kredytowy – użytkownik wprowadza kwotę, okres i oprocentowanie,
                a skrypt oblicza ratę na podstawie wprowadzonych parametrów.
              </p>
              <div className="mt-10">
                <LoanCalculator />
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section
            id="oferty"
            className="scroll-mt-24 rounded-3xl bg-white py-20 text-center shadow-lg shadow-slate-900/10"
          >
            <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-10">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Oferty banków
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Sekcja prezentuje oferty, które przygotowujemy z partnerami bankowymi. Lista rośnie wraz z
                pozyskaniem kolejnych potwierdzonych współprac.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 px-4 sm:px-10 md:grid-cols-3">
              {creditOffers.map((offer) => (
                <article
                  key={offer.id}
                  className="flex h-full flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-foreground">{offer.title}</p>
                    <p className="text-sm leading-relaxed text-muted">{offer.description}</p>
                  </div>
                  {offer.active ? (
                    <a
                      href={offer.href}
                      className="inline-flex items-center justify-center rounded-full bg-cta px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
                    >
                      {offer.cta}
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-cta/50 px-4 py-3 text-sm font-semibold text-white/80 shadow-md opacity-75">
                      {offer.cta}
                    </span>
                  )}
                </article>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section
            id="artykuly"
            className="scroll-mt-24 rounded-3xl bg-gray-50 py-20 text-center shadow-lg shadow-slate-900/5"
          >
            <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-10">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Artykuły i poradniki
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Przeczytaj szczegółowe analizy o kredycie hipotecznym, wykorzystaniu kalkulatora kredytowego,
                interpretacji RRSO oraz pracy z porównywarką kredytów.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 px-4 sm:px-10 md:grid-cols-3">
              {articleCollection.map((article) => (
                <article
                  key={article.slug}
                  className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {article.readingTime} • {article.publishedAt}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">{article.title}</h3>
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
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section
            id="kontakt"
            className="scroll-mt-24 rounded-3xl bg-white py-20 text-center shadow-lg shadow-slate-900/10"
          >
            <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-10">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Kontakt</h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Masz pytania? Napisz do nas na:{" "}
                <a
                  href="mailto:kalkulatorfinansowy.com.pl@gmail.com"
                  className="text-accent underline-offset-2 transition hover:underline"
                >
                  kalkulatorfinansowy.com.pl@gmail.com
                </a>
                . Chętnie doradzimy i odpowiemy na Twoje wątpliwości związane z finansami.
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="mailto:kalkulatorfinansowy.com.pl@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
                >
                  Napisz do nas
                </a>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section
            id="faq"
            aria-labelledby="faq-title"
            className="scroll-mt-24 rounded-3xl bg-gray-50 py-20 text-center shadow-lg shadow-slate-900/5"
          >
            <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-10">
              <h2 id="faq-title" className="text-3xl font-semibold text-foreground sm:text-4xl">
                FAQ: kredyty hipoteczne
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Najczęściej zadawane pytania i praktyczne porady, które pomogą Ci przygotować
                się do rozmowy z bankiem.
              </p>
            </div>
            <div className="mt-12 space-y-4 px-4 sm:px-10">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition open:shadow-md"
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
        </FadeInSection>
      </main>
      <FadeInSection>
        <section className="mx-auto mt-16 max-w-4xl rounded-3xl bg-white py-12 text-center shadow-lg shadow-slate-900/10">
          <div className="space-y-4 px-6 sm:px-12">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Aktualne współprace i informacje partnerskie
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Serwis Kalkulator Finansowy współpracuje z wybranymi instytucjami finansowymi w ramach programów
              partnerskich.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Niektóre linki na stronie są linkami afiliacyjnymi. Klikając w nie możesz zostać przekierowany na
              stronę partnera, a my możemy otrzymać prowizję za polecenie. Nie wpływa to na koszt usługi dla
              użytkownika.
            </p>
            <p className="text-base font-semibold text-foreground">Aktywna współpraca</p>
            <p className="text-base leading-relaxed text-muted">
              Alior Bank prowadzi aktualną kampanię partnerską. Sprawdź szczegóły oferty kredytu:{" "}
              <a
                href="https://savebig.pro/a/qxMXDuXRROsQloE"
                className="font-semibold text-cta hover:underline"
              >
                Zobacz ofertę Alior Banku
              </a>
              .
            </p>
            <p className="text-base leading-relaxed text-muted">
              Wkrótce pojawią się kolejne współprace z instytucjami finansowymi, bankami, firmami leasingowymi i
              pożyczkowymi.
            </p>
          </div>
        </section>
      </FadeInSection>
      <Footer />
    </>
  );
}
