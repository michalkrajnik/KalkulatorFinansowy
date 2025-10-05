import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności – Kalkulator Finansowy",
  description:
    "Poznaj zasady przetwarzania danych w serwisie Kalkulator Finansowy. Informacje o cookies, współpracy afiliacyjnej i prawach użytkowników.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16 sm:px-6 md:px-8">
      <header className="space-y-3 text-center sm:text-left">
        <h1 className="text-3xl font-semibold text-foreground">
          Polityka prywatności – Kalkulator Finansowy
        </h1>
        <p className="text-sm text-muted">Ostatnia aktualizacja: Październik 2025</p>
      </header>

      <section className="space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-semibold text-foreground">1. Informacje ogólne</h2>
        <p>
          Niniejsza Polityka prywatności określa zasady przetwarzania i ochrony danych
          osobowych użytkowników serwisu <strong>Kalkulator Finansowy</strong>,
          dostępnego pod adresem{" "}
          <a
            href="https://kalkulatorfinansowy.com.pl"
            className="text-cta hover:underline"
          >
            https://kalkulatorfinansowy.com.pl
          </a>
          .
        </p>
        <p>
          Administratorem danych jest właściciel serwisu, kontakt:{" "}
          <a href="mailto:kalkulatorfinansowy.com.pl@gmail.com" className="text-cta hover:underline">
            kalkulatorfinansowy.com.pl@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-semibold text-foreground">2. Zakres zbieranych danych</h2>
        <p>
          Serwis nie gromadzi danych osobowych użytkowników w sposób bezpośredni, za
          wyjątkiem przypadków dobrowolnego podania danych kontaktowych w formularzach
          lub przy korzystaniu z ofert partnerów afiliacyjnych.
        </p>
        <p>
          Serwis może przetwarzać podstawowe dane takie jak adres IP, typ przeglądarki,
          dane o czasie wizyty i źródle wejścia – wyłącznie w celach statystycznych i
          poprawy jakości usług.
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-semibold text-foreground">3. Dane partnerów afiliacyjnych</h2>
        <p>
          Serwis Kalkulator Finansowy korzysta z programów partnerskich (m.in. MyLead,
          Awin, Bankier.pl, TradeDoubler) w celu prezentowania ofert finansowych.
          Kliknięcie w link afiliacyjny może skutkować przekierowaniem użytkownika na
          stronę partnera, który może przetwarzać dane zgodnie z własną polityką
          prywatności.
        </p>
        <p>
          Administrator nie ponosi odpowiedzialności za przetwarzanie danych przez
          strony partnerów zewnętrznych. Użytkownik każdorazowo powinien zapoznać się z
          polityką prywatności danego partnera.
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-semibold text-foreground">4. Pliki cookies</h2>
        <p>
          Serwis wykorzystuje pliki cookies w celach technicznych (zapamiętanie
          ustawień strony), analitycznych (Google Analytics, statystyki ruchu) oraz
          marketingowych (identyfikacja ruchu z linków afiliacyjnych).
        </p>
        <p>
          Użytkownik może w każdej chwili wyłączyć obsługę cookies w swojej
          przeglądarce, jednak może to ograniczyć funkcjonalność strony.
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-semibold text-foreground">5. Podstawa prawna przetwarzania danych</h2>
        <p>
          Dane przetwarzane są zgodnie z Rozporządzeniem Parlamentu Europejskiego i
          Rady (UE) 2016/679 (RODO) oraz ustawą o ochronie danych osobowych z dnia
          10 maja 2018 r.
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-semibold text-foreground">6. Prawa użytkownika</h2>
        <p>
          Każdy użytkownik ma prawo do dostępu do swoich danych, ich sprostowania,
          ograniczenia przetwarzania, przeniesienia, a także żądania ich usunięcia.
        </p>
        <p>
          W celu realizacji tych praw należy skontaktować się pod adresem e-mail:{" "}
          <a href="mailto:kalkulatorfinansowy.com.pl@gmail.com" className="text-cta hover:underline">
            kalkulatorfinansowy.com.pl@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-semibold text-foreground">7. Odpowiedzialność</h2>
        <p>
          Serwis Kalkulator Finansowy ma charakter informacyjny. Nie udziela porad
          finansowych, a prezentowane kalkulacje i oferty mają charakter orientacyjny.
          Decyzje finansowe użytkownik podejmuje samodzielnie, po zapoznaniu się z
          warunkami ofert u partnerów zewnętrznych.
        </p>
      </section>

      <section className="space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-semibold text-foreground">8. Zmiany w Polityce prywatności</h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzenia zmian w niniejszej
          Polityce prywatności. Aktualna wersja dokumentu jest zawsze dostępna na
          stronie{" "}
          <a
            href="https://kalkulatorfinansowy.com.pl/polityka-prywatnosci"
            className="text-cta hover:underline"
          >
            /polityka-prywatnosci
          </a>
          .
        </p>
      </section>
    </main>
  );
}
