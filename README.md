# My Rare Store

Custom eCommerce storefront for **My Rare Store** — *Ordinary ends here.*

Built with a **React + Vite** frontend and a **Node.js + Express** API.

## Project structure

```text
myrarestore/
├── web/          React storefront (Vite + TypeScript)
│   ├── src/
│   │   ├── pages/        Home + product detail pages
│   │   ├── components/   Header, footer, product card
│   │   ├── data/         Static product data (for now)
│   │   └── styles/
│   └── public/images/    Product & category images
└── api/          Node.js Express API
    └── src/index.js
```

## Requirements

- Node.js **20.19+** or **22.12+**
- npm

## Setup

### Frontend

```bash
cd web
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Backend

```bash
cd api
npm install
npm start
```

API runs at [http://localhost:4000](http://localhost:4000)

In development, Vite proxies `/api` requests to the Node server.

## Current features (static)

- Homepage matching the client design
- Product detail pages (`/product/:slug`)
- Cart count, wishlist toggles, and toast messages (UI only)
- Shared header / footer navigation

## Next steps

- PostgreSQL for products, cart, and orders
- Auth (customers + admin)
- Razorpay / Stripe payment integration
- Admin panel for product management

## Scripts

| Location | Command | Description |
|---|---|---|
| `web/` | `npm run dev` | Start React dev server |
| `web/` | `npm run build` | Production build |
| `api/` | `npm start` | Start API |
| `api/` | `npm run dev` | Start API with nodemon |

## License

Private project — all rights reserved.
