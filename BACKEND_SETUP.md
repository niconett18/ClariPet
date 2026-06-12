# ClariPet — Backend Setup Guide

This project now has a full serverless ecommerce backend built with **Next.js API Routes** + **Supabase** (PostgreSQL + Auth). This guide walks you through getting it running.

## What was built

| Area | Details |
|---|---|
| **Auth** | Supabase Auth (email/password), signup/login/logout, session middleware, role-based access (customer/admin) |
| **Products & Categories** | Public read APIs + admin CRUD, backed by the database |
| **Cart** | Server-side cart that syncs across devices; guest carts (localStorage) merge into the DB on login |
| **Orders** | Atomic order creation from cart, stock validation, order history |
| **Inventory** | Per-size stock tracking, low-stock reports, manual adjustments |
| **Addresses** | Saved shipping addresses with default selection |
| **Shipping** | Free shipping over Rp 250.000, else flat Rp 20.000 (matches existing frontend logic) |
| **Payments** | Placeholder routes ready for Midtrans/Xendit integration |
| **Admin Dashboard** | Full UI at `/admin` — products, categories, orders, inventory |
| **Account Pages** | `/account` — profile, orders, addresses |

The static data in `data/` is kept as a **fallback**: if Supabase isn't configured, the storefront still renders from the original mock data.

## Step 1 — Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a free project.
2. Once created, open **Project Settings → API**.
3. Copy these three values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## Step 2 — Configure environment variables

Edit `.env.local` in the project root (it's already gitignored) and replace the placeholders:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-real-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-real-service-role-key
RAJAONGKIR_API_KEY=your-rajaongkir-komerce-api-key
RAJAONGKIR_ORIGIN_ID=your-jakarta-origin-id
```

RajaOngkir origin id: use Jakarta store pickup/district id from RajaOngkir domestic destination search. Shipping API uses `https://rajaongkir.komerce.id/api/v1` and no payment gateway is required.

> The app detects placeholder values and falls back to static data, so the site keeps working until you add real keys.

## Step 3 — Run the database migrations

In the Supabase dashboard, open the **SQL Editor** and run each file in order. The files are in `supabase/migrations/`:

1. **`001_schema.sql`** — tables, enums, indexes
2. **`002_rls.sql`** — Row-Level Security policies + the trigger that auto-creates a profile on signup
3. **`003_functions.sql`** — atomic order creation, stock restore, `updated_at` triggers
4. **`004_seed.sql`** — seeds all 6 categories, 8 products (with sizes + 100 stock each), and 6 journal articles

Copy the contents of each file into the SQL Editor and click **Run**, one at a time.

## Step 4 — Create your admin user

1. In Supabase: **Authentication → Users → Add user** (set email + password, mark email confirmed).
2. Copy the new user's **UUID**.
3. In the SQL Editor, run:

   ```sql
   UPDATE profiles SET role = 'admin' WHERE id = '<paste-uuid-here>';
   ```

4. Log in at `/login` with that account. You'll now see **Admin Dashboard** in the account menu and can visit `/admin`.

## Step 5 — Run the app

```bash
npm run dev
```

Open http://localhost:3000. Sign up, browse products (now from the DB), add to cart, and place an order. As an admin, manage everything from `/admin`.

## API Reference

### Public
- `GET /api/products` — list (`?category`, `?search`, `?sort`, `?page`, `?limit`)
- `GET /api/products/[slug]` — product detail
- `GET /api/categories` — list categories
- `GET /api/categories/[slug]` — category + its products

### Auth
- `POST /api/auth/signup` — `{ email, password, full_name }`
- `POST /api/auth/login` — `{ email, password }`
- `POST /api/auth/logout`
- `GET /api/auth/me` — current user + profile
- `GET /api/auth/callback` — email confirmation / OAuth

### Cart (auth required)
- `GET /api/cart` — list items
- `POST /api/cart` — `{ product_slug, size_label, qty }`
- `DELETE /api/cart` — clear cart
- `PATCH /api/cart/[id]` — `{ qty }`
- `DELETE /api/cart/[id]` — remove item
- `POST /api/cart/merge` — merge guest cart `{ items: [{ slug, size, qty }] }`

### Orders (auth required)
- `GET /api/orders` — order history (`?status`, `?page`, `?limit`)
- `POST /api/orders` — create order from cart
- `GET /api/orders/[id]` — order detail

### Addresses (auth required)
- `GET /api/addresses` / `POST /api/addresses`
- `GET|PUT|DELETE /api/addresses/[id]`

### Payments (placeholder)
- `POST /api/payments/create` — returns mock payment intent
- `POST /api/payments/webhook` — gateway callback handler skeleton

### Admin (admin role required)
- `GET|POST /api/admin/products`, `PUT|DELETE /api/admin/products/[id]`
- `POST /api/admin/categories`, `PUT|DELETE /api/admin/categories/[id]`
- `GET /api/admin/orders`, `GET|PATCH /api/admin/orders/[id]`
- `GET /api/admin/inventory` (`?threshold`), `PATCH /api/admin/inventory/[sizeId]`

## Integrating a payment gateway later

The order model already has `payment_method` and `payment_ref` columns. To wire up a real gateway (Midtrans or Xendit recommended for IDR):

1. Install the SDK and add credentials to `.env.local`.
2. In `app/api/payments/create/route.ts`, create a transaction and return the `payment_url`.
3. In `app/api/payments/webhook/route.ts`, verify the signature and map gateway statuses to order statuses (the skeleton already updates the order and restores stock on cancellation).

## Security notes

- All customer data (cart, orders, addresses, profile) is protected by **Row-Level Security** — users can only access their own rows, even if API code has a bug.
- Admin write access is enforced both in the API (`requireAdmin`) and at the database level (RLS `is_admin()`).
- The `service_role` key bypasses RLS and is only used server-side (`lib/supabase/admin.ts`) — never expose it to the browser.
- Auth routes and protected pages (`/account`, `/admin`) are guarded by `middleware.ts`.

## Architecture files

```
lib/supabase/
  client.ts        Browser Supabase client
  server.ts        Server client (cookies-based auth)
  admin.ts         Service-role client (server-only, bypasses RLS)
lib/helpers/
  auth.ts          getUser / requireUser / requireAdmin
  response.ts      Standardized JSON responses
  handler.ts       withErrorHandling wrapper (Zod + auth errors)
lib/validators/    Zod schemas for every endpoint
lib/data/          Data service layer (DB with static fallback)
middleware.ts      Session refresh + route protection
supabase/migrations/  SQL: schema, RLS, functions, seed
```
