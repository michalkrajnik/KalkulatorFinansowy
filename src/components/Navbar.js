'use client';

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#start", label: "Start", type: "anchor" },
  { href: "#kalkulator", label: "Kalkulator", type: "anchor" },
  { href: "#oferty", label: "Oferty", type: "anchor" },
  { href: "/artykuly", label: "Artykuły", type: "route" },
  { href: "#kontakt", label: "Kontakt", type: "anchor" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
        <a
          href="#start"
          className="text-base font-semibold tracking-tight text-foreground transition hover:text-cta sm:text-lg"
        >
          Kalkulator Finansowy
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            item.type === "route" ? (
              <Link key={item.href} href={item.href} className="transition hover:text-cta">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="transition hover:text-cta">
                {item.label}
              </a>
            )
          ))}
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta md:hidden"
          aria-expanded={open}
          aria-label="Otwórz menu"
        >
          <span className="sr-only">Menu</span>
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-foreground">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="rounded-md px-2 py-2 transition hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="rounded-md px-2 py-2 transition hover:bg-slate-100"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
