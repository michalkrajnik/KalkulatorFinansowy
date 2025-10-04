"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const currencyFormatter = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  maximumFractionDigits: 2,
});

const percentFormatter = new Intl.NumberFormat("pl-PL", {
  style: "percent",
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("pl-PL");

type RateType = "stala" | "malejaca";

type DecliningInstallment = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
};

type CalculationResult =
  | {
      type: "stala";
      monthlyPayment: number;
    }
  | {
      type: "malejaca";
      monthlyPayment: number;
      schedule: DecliningInstallment[];
    };

function calculateAnnuityPayment(
  amount: number,
  annualInterest: number,
  years: number,
): number {
  const principal = Math.max(amount, 0);
  const totalMonths = Math.max(Math.round(years * 12), 1);
  const monthlyRate = annualInterest / 12 / 100;

  if (monthlyRate === 0) {
    return principal / totalMonths;
  }

  const factor = Math.pow(1 + monthlyRate, totalMonths);
  return principal * ((monthlyRate * factor) / (factor - 1));
}

function calculateDecliningSchedule(
  amount: number,
  annualInterest: number,
  years: number,
): { firstPayment: number; schedule: DecliningInstallment[] } {
  const principal = Math.max(amount, 0);
  const totalMonths = Math.max(Math.round(years * 12), 1);
  const monthlyRate = annualInterest / 12 / 100;
  const principalPart = principal / totalMonths;

  let remaining = principal;
  const schedule: DecliningInstallment[] = [];

  for (let month = 1; month <= totalMonths && month <= 10; month += 1) {
    const interest = remaining * monthlyRate;
    const payment = principalPart + interest;
    remaining = Math.max(remaining - principalPart, 0);

    schedule.push({
      month,
      payment,
      principal: principalPart,
      interest,
      balance: remaining,
    });
  }

  const firstPayment = schedule[0]?.payment ?? principalPart;

  return { firstPayment, schedule };
}

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(450000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [years, setYears] = useState(25);
  const [rateType, setRateType] = useState<RateType>("stala");

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sanitizedAmount = Number.isFinite(loanAmount) ? loanAmount : 0;
    const sanitizedRate = Number.isFinite(interestRate) ? interestRate : 0;
    const sanitizedYears = Number.isFinite(years) ? years : 0;

    if (sanitizedAmount <= 0 || sanitizedYears <= 0) {
      setResult(null);
      return;
    }

    if (rateType === "stala") {
      const monthlyPayment = calculateAnnuityPayment(
        sanitizedAmount,
        sanitizedRate,
        sanitizedYears,
      );

      setResult({
        type: "stala",
        monthlyPayment,
      });
      return;
    }

    const { firstPayment, schedule } = calculateDecliningSchedule(
      sanitizedAmount,
      sanitizedRate,
      sanitizedYears,
    );

    setResult({
      type: "malejaca",
      monthlyPayment: firstPayment,
      schedule,
    });
  };

  const totalMonths = Math.max(Math.round(years * 12), 1);
  const decliningResult = result?.type === "malejaca" ? result : null;

  return (
    <section className="grid grid-cols-1 gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:grid-cols-[1.05fr_0.95fr] sm:p-10">
      <div className="space-y-5">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">Kalkulator kredytowy</h2>
          <p className="text-sm text-muted">
            Wypełnij formularz, wybierz typ rat i kliknij „Oblicz ratę”, aby zobaczyć miesięczne koszty kredytu hipotecznego.
          </p>
        </header>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block space-y-2 text-sm">
            <span className="font-medium text-foreground">Kwota kredytu</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-inner">
              <span className="text-muted">PLN</span>
              <input
                type="number"
                inputMode="numeric"
                min={10000}
                step={1000}
                value={loanAmount}
                onChange={(event) => setLoanAmount(Number(event.target.value))}
                className="w-full bg-transparent text-base font-medium text-foreground outline-none"
                aria-describedby="loan-amount-hint"
                required
              />
            </div>
            <span id="loan-amount-hint" className="block text-xs text-muted">
              Podaj kwotę finansowania nieruchomości (np. 350 000 PLN).
            </span>
          </label>

          <label className="block space-y-2 text-sm">
            <span className="font-medium text-foreground">Oprocentowanie nominalne (w skali roku)</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-inner">
              <input
                type="number"
                inputMode="decimal"
                min={0}
                max={20}
                step={0.1}
                value={interestRate}
                onChange={(event) => setInterestRate(Number(event.target.value))}
                className="w-full bg-transparent text-base font-medium text-foreground outline-none"
                aria-describedby="interest-hint"
                required
              />
              <span className="text-muted">%</span>
            </div>
            <span id="interest-hint" className="block text-xs text-muted">
              Uwzględnij wskaźnik referencyjny (WIBOR/WIRON) oraz marżę banku.
            </span>
          </label>

          <label className="block space-y-2 text-sm">
            <span className="font-medium text-foreground">Okres spłaty</span>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-inner">
              <input
                type="number"
                inputMode="numeric"
                min={1}
                max={40}
                step={1}
                value={years}
                onChange={(event) => setYears(Number(event.target.value))}
                className="w-full bg-transparent text-base font-medium text-foreground outline-none"
                aria-describedby="years-hint"
                required
              />
              <span className="text-muted">lat</span>
            </div>
            <span id="years-hint" className="block text-xs text-muted">
              Wydłużenie okresu obniża miesięczną ratę, lecz zwiększa łączny koszt kredytu.
            </span>
          </label>

          <label className="block space-y-2 text-sm">
            <span className="font-medium text-foreground">Typ raty</span>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-inner">
              <select
                value={rateType}
                onChange={(event) => setRateType(event.target.value as RateType)}
                className="w-full bg-transparent text-base font-medium text-foreground outline-none"
                aria-label="Wybierz typ raty"
              >
                <option value="stala">Raty stałe (annuitetowe)</option>
                <option value="malejaca">Raty malejące</option>
              </select>
            </div>
            <span className="block text-xs text-muted">
              Raty stałe zapewniają niezmienną wysokość raty, malejące zaczynają się wyżej i spadają wraz ze spłatą kapitału.
            </span>
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-cta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
          >
            Oblicz ratę
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-6 rounded-3xl bg-accent-soft/60 p-6 sm:p-8">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Wynik kalkulacji
          </p>
          {result ? (
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-muted">Miesięczna rata</p>
                <p className="text-3xl font-semibold text-foreground">
                  {currencyFormatter.format(result.monthlyPayment)}
                </p>
                {result.type === "malejaca" ? (
                  <p className="text-xs text-muted">
                    Pierwsza rata w systemie malejącym (kolejne będą niższe).
                  </p>
                ) : null}
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted">
              Wprowadź dane kredytu i kliknij „Oblicz ratę”, aby zobaczyć wynik.
            </p>
          )}
        </div>

        <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-muted">
          <div className="flex items-center justify-between">
            <dt>Kwota kredytu</dt>
            <dd className="font-semibold text-foreground">
              {currencyFormatter.format(Math.max(loanAmount, 0))}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Oprocentowanie</dt>
            <dd className="font-semibold text-foreground">
              {percentFormatter.format(Math.max(interestRate, 0) / 100)}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Okres (miesiące)</dt>
            <dd className="font-semibold text-foreground">
              {numberFormatter.format(totalMonths)}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Typ raty</dt>
            <dd className="font-semibold text-foreground">
              {rateType === "stala" ? "Stała" : "Malejąca"}
            </dd>
          </div>
        </dl>

        {decliningResult ? (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90">
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-foreground">
              Harmonogram (pierwsze 10 rat)
            </div>
            <div className="max-h-80 overflow-auto">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs text-muted">
                <thead className="bg-slate-50/60 text-[11px] uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Miesiąc</th>
                    <th className="px-4 py-3 font-semibold">Rata</th>
                    <th className="px-4 py-3 font-semibold">Kapitał</th>
                    <th className="px-4 py-3 font-semibold">Odsetki</th>
                    <th className="px-4 py-3 font-semibold">Saldo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {decliningResult.schedule.map((installment) => (
                    <tr key={installment.month}>
                      <td className="px-4 py-2 text-foreground">{installment.month}</td>
                      <td className="px-4 py-2">
                        {currencyFormatter.format(installment.payment)}
                      </td>
                      <td className="px-4 py-2">
                        {currencyFormatter.format(installment.principal)}
                      </td>
                      <td className="px-4 py-2">
                        {currencyFormatter.format(installment.interest)}
                      </td>
                      <td className="px-4 py-2">
                        {currencyFormatter.format(installment.balance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default LoanCalculator;
