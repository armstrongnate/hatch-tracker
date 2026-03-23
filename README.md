# Hatch Tracker

A full-stack app for tracking insect hatches on rivers. Built with Express, React, Vite, and Tailwind.

## Setup

### API

```bash
cd api
npm install
npm run dev
```

The API runs on [http://localhost:3001](http://localhost:3001).

### Web

```bash
cd web
npm install
npm run dev
```

The web app runs on [http://localhost:5173](http://localhost:5173) and proxies `/api` requests to the API server.

## Data

Seed data lives in `api/src/data/hatches.ts`. You'll find typed arrays of `Insect` and `River` objects. Take a minute to read through the types and data before coding.

## API

| Endpoint | Status |
|---|---|
| `GET /api/rivers` | Pre-built (returns `{ id, name }[]`) |
| `GET /api/rivers/:id/hatches` | You build this |
| `GET /api/rivers/:id` | You build this |

---

## Interviewer Guide

### Part 1 — No AI Assistance (~12 min)

**Design discussion (~3 min):**

> "A user is standing on the bank of the South Platte at 4pm in October. The water is 52°F. Build an endpoint that tells them what's hatching and what fly to tie on. How would you design this?"

**Implementation (~10 min):**

Build `GET /api/rivers/:id/hatches` with optional query params: `month`, `timeOfDay`, `waterTemp`. Filter the river's insects by month, time of day, and water temperature range.

### Part 2 — With AI Assistance (~15 min)

> "Now use your preferred AI coding tool to build a React component that displays the hatch data for a selected river. We want to see how you collaborate with AI — how you prompt, iterate, and validate. The design is up to you."

Expected work: add `GET /api/rivers/:id` (full river + insect data), build a React component with a river selector and hatch data visualization.
