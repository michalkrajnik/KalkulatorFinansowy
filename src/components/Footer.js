export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/90">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted sm:px-6 md:px-8">
        <p className="font-medium text-foreground">
          <strong>Kalkulator Finansowy</strong> © 2025 – Oblicz raty, porównaj oferty, wybierz najlepszy kredyt.
        </p>
        <p className="mt-1">
          Kontakt:{" "}
          <a
            href="mailto:kalkulatorfinansowy.com.pl@gmail.com"
            className="text-cta hover:underline"
          >
            kalkulatorfinansowy.com.pl@gmail.com
          </a>
        </p>
        <p className="mt-1 text-xs text-muted">
          Serwis informacyjny o finansach, kredytach i budżetowaniu. Aktualne narzędzia i porady pomagają w świadomych decyzjach finansowych.
        </p>
        <p className="mt-1">
          <a href="/polityka-prywatnosci" className="text-cta hover:underline">
            Polityka prywatności
          </a>
        </p>
      </div>
    </footer>
  );
}
