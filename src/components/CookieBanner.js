'use client';

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-slate-900/95 px-4 py-4 text-sm text-white shadow-xl">
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
        <p className="leading-relaxed text-slate-100">
          Ta strona korzysta z plików cookies w celach technicznych, analitycznych (Google
          Analytics) oraz afiliacyjnych (m.in. MyLead, Awin). Kontynuując korzystanie z serwisu,
          wyrażasz zgodę na ich użycie.
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-md bg-cta px-4 py-2 text-sm font-semibold text-white transition hover:bg-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
          >
            Akceptuję
          </button>
          <a
            href="/polityka-prywatnosci"
            className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:text-white"
          >
            Więcej informacji
          </a>
        </div>
      </div>
    </div>
  );
}
