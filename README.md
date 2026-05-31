# ClariPet® — Premium Pet Care Storefront

A soft, premium, pastel pet-care e-commerce site built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Everything works: client routing, cart with `localStorage` persistence, a multi-step product quiz, shop filters & sorting, product accordions, size/quantity selectors, and a search overlay.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm run start   # production build
npm run lint                     # eslint
```

> Requires Node 18.17+ (Next.js 14).

## Tech stack

- **Next.js 14** App Router + **TypeScript**
- **Tailwind CSS** — design tokens in `tailwind.config.ts`; shared component classes in `app/globals.css`
- **next/font/google** — Poppins (300/400/500/600/700), exposed as `--font-poppins`
- **lucide-react** — all icons (registry in `components/icons.tsx`)
- **React Context** — global cart (`context/CartContext.tsx`) with `localStorage` persistence

## Project structure

```
app/
  layout.tsx              Root layout: fonts, Providers, Navbar, Footer, Toast
  Providers.tsx           Client wrapper around CartProvider
  globals.css             Tailwind layers + ClariPet design-system classes
  page.tsx                Home (/)
  shop/page.tsx           Shop (/shop?category=…)  — wrapped in <Suspense>
  product/[slug]/page.tsx Product detail
  journal/page.tsx        Pet Care Journal
  journal/[slug]/page.tsx Article detail
  about/page.tsx          About Us
  quiz/page.tsx           Product quiz
  cart/page.tsx           Cart
  not-found.tsx           404
components/
  Navbar, Footer, SearchOverlay, ProductCard, CategoryCard,
  Mascot, PageHead, Breadcrumb, Toast, Placeholder, icons
  ui/                     PrimaryButton, SecondaryButton, StarRating,
                          QuantityStepper, Accordion
  home/                   Hero, TrustBadges, ShopByCategory, BestSellers,
                          WhyChoose, QuizCTA
  shop/ product/ journal/ about/ quiz/ cart/   page-level views
context/
  CartContext.tsx         Cart state, totals, toast, persistence
data/
  products.ts categories.ts articles.ts   typed mock data + helpers
lib/
  types.ts format.ts      shared types + formatPrice (Rupiah)
```

## Design tokens

Defined in `tailwind.config.ts` (`theme.extend.colors`) and mirrored as CSS variables in `globals.css`:

| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| sky | `#AECBEB` | | navy | `#1B2A4A` |
| sage | `#C5D6C8` | | ink | `#2D3142` |
| pink | `#F5CDD3` | | mist | `#EAF2FB` |
| lavender | `#E0CBE8` | | offwhite | `#FBFCFE` |
| cream | `#F5DBA8` | | peach | `#F7D2BE` |

Cards use `rounded-2xl/3xl`, buttons are `rounded-full`, shadows are soft and low-opacity, the base background is `#FBFCFE`, and headings use Poppins 600–700.

## Images

There is no bundled photography. Every image slot renders the **`<Placeholder>`** component (`components/Placeholder.tsx`) — a soft pastel gradient block with a paw mark and a label. To use real images:

1. Drop assets into `public/`.
2. Swap the internals of `Placeholder` for `next/image`, or replace individual `<Placeholder>` usages with `<Image>`.

The corgi-vet **mascot** (product & quiz pages) is the `<Mascot>` component — also placeholder-backed and ready for a real illustration.

## What's interactive

- **Cart** — add/remove/update qty, persists across reloads, badge in navbar, toast on add, free-shipping threshold, demo checkout modal.
- **Quiz** (`/quiz`) — 4 steps with progress bar + back/next; recommends matching products and can add all to cart.
- **Shop** — category pills sync with the `?category=` query param; client-side sorting.
- **Product** — thumbnail gallery, size toggle, quantity stepper, benefit list, feature row, accordions (Description / Ingredients / How to Use / FAQ / Reviews), related products.
- **Journal** — working category filter, featured + sidebar articles, detail pages.
- **Search overlay** — opens from the navbar, live product filtering, Esc to close.
- **Navbar** — sticky, active states, mobile hamburger slide-in menu.

## Notes

- Mock data lives entirely in `data/`. Replace with API/CMS calls as needed.
- Prices are Indonesian Rupiah via `formatPrice()` in `lib/format.ts`.
- The cart, search, quiz, and accordions are client components; pages and static sections are server components where possible.
