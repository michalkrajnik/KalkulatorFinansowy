# Kalkulator Kredytowy 2025

Responsywny kalkulator kredytowy zbudowany w Next.js 15 (App Router) i Tailwind CSS 4. Projekt jest gotowy do wdrożenia na Vercel i zoptymalizowany pod SEO.

## Wymagania
- Node.js 18+ (zalecana najnowsza LTS)
- npm 10+ (instalowany wraz z Node.js)

## Instalacja i uruchomienie lokalne
```bash
npm install
npm run dev
```
Aplikacja będzie dostępna na `http://localhost:3000`.

## Budowa produkcyjna
```bash
npm run build
npm start
```

## Deploy na Vercel
1. Zaloguj się do [Vercel](https://vercel.com/) i połącz repozytorium GitHub/GitLab/Bitbucket z projektem.
2. W ustawieniach projektu ustaw:
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
   - **Output Directory:** `.next`
3. Zainicjuj wdrożenie z terminala (opcjonalnie):
   ```bash
   vercel deploy
   ```
   Pierwsze uruchomienie poprosi o wybór organizacji/projektu i zapisze konfigurację w `.vercel`.

Po każdym pushu na główną gałąź repozytorium Vercel wykona automatyczny deploy.

## Podpięcie własnej domeny (kalkulatorfinansowy.com.pl)
1. W panelu Vercel otwórz projekt → **Settings → Domains** → `Add`.
2. Dodaj domenę `kalkulatorfinansowy.com.pl`.
3. W panelu DNS rejestratora ustaw rekordy:
   - `A` dla `@` (root) kierujący na `76.76.21.21` (adres Vercel).
   - Opcjonalnie rekord `CNAME` dla `www` wskazujący na `cname.vercel-dns.com`.
4. Po propagacji DNS (zwykle do 24 h) kliknij „Verify” w Vercel, aby potwierdzić konfigurację.
5. (Opcjonalnie) W sekcji **Settings → Domains** ustaw `kalkulatorfinansowy.com.pl` jako Primary Domain.

Vercel automatycznie wygeneruje certyfikat SSL (Let's Encrypt) dla domeny po poprawnej weryfikacji rekordów DNS.

## Przydatne skrypty
- `npm run lint` – analiza ESLint.
- `npm run build` – build produkcyjny.
- `npm run start` – uruchomienie buildu lokalnie.

## Struktura katalogów
- `src/app/` – widoki i layout (App Router).
- `src/components/` – komponenty współdzielone.
- `public/` – statyczne zasoby (favicon, og-image).

## Licencja
Projekt dostępny do dalszej adaptacji. Zadbaj o aktualizację treści prawnych (RODO, polityka prywatności) przed publikacją.
