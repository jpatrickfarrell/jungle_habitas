# Barefoot Luxury | Tulum

A luxury villa showcase website for Jungle Habitas in Tulum. Built with React, Express, and Vite.

## Tech Stack

- **Frontend:** React 19, Tailwind CSS v4, Radix UI, Framer Motion
- **Backend:** Express (Node.js), in-memory storage
- **Build:** Vite 7, esbuild, TypeScript
- **Routing:** Wouter (client-side)

## Local Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
npm install
npm run dev
```

The app starts at **http://localhost:5000**. This runs the Express server which serves both the API and the Vite dev server (with HMR).

### Available Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server (API + Vite HMR) on port 5000 |
| `npm run dev:client` | Start Vite only (no API) on port 5000 |
| `npm run build` | Build client + server for production |
| `npm start` | Run the production build |
| `npm run check` | TypeScript type checking |
| `npm run db:push` | Push Drizzle schema to database (requires DATABASE_URL) |

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default: 5000) |
| `DATABASE_URL` | No | PostgreSQL connection string (only if using DB features) |
| `SITE_URL` | No | Your deployed URL, e.g. `https://yourdomain.com` (used for og:image meta tags) |

## Deploy to Vercel

### Option A: Static Export (simplest, if you don't need the API)

The API routes are currently empty, so you can deploy just the frontend:

1. Push this repo to GitHub
2. Import it in [Vercel](https://vercel.com/new)
3. Configure the build settings:
   - **Framework Preset:** Vite
   - **Root Directory:** (leave blank, or set to the project folder if it's in a monorepo)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
4. Add environment variables if needed:
   - `SITE_URL` = your Vercel domain (e.g. `https://your-project.vercel.app`)
5. Deploy

### Option B: Full-Stack (if you add API routes later)

If you use the Express API routes, deploy as a Node.js serverless project:

1. Create a `vercel.json` in the project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

2. Move your API routes into a `api/` directory as serverless functions (see [Vercel Serverless Functions docs](https://vercel.com/docs/functions/serverless-functions))

## Project Structure

```
.
├── client/              # React frontend
│   ├── index.html       # Entry HTML
│   ├── public/          # Static assets (favicon, opengraph images)
│   └── src/             # React source code
│       ├── components/  # UI components (shadcn/ui based)
│       ├── hooks/       # Custom React hooks
│       ├── lib/         # Utilities
│       └── pages/       # Route pages
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Data storage layer
│   ├── static.ts        # Production static file serving
│   └── vite.ts          # Vite dev middleware setup
├── shared/              # Shared types/schemas (frontend + backend)
│   └── schema.ts        # Drizzle schema + Zod types
├── script/
│   └── build.ts         # Production build script
├── vite.config.ts       # Vite configuration
├── drizzle.config.ts    # Drizzle ORM config
└── tsconfig.json        # TypeScript config
```
