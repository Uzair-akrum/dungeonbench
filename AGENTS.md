## Continuity Ledger (compaction-safe)
Maintain a single Continuity Ledger for this workspace in `http://CONTINUITY.md`. The ledger is the canonical session briefing designed to survive context compaction; do not rely on earlier chat text unless it’s reflected in the ledger.

### How it works
- At the start of every assistant turn: read `http://CONTINUITY.md`, update it to reflect the latest goal/constraints/decisions/state, then proceed with the work.
- Update `http://CONTINUITY.md` again whenever any of these change: goal, constraints/assumptions, key decisions, progress state (Done/Now/Next), or important tool outcomes.
- Keep it short and stable: facts only, no transcripts. Prefer bullets. Mark uncertainty as `UNCONFIRMED` (never guess).
- If you notice missing recall or a compaction/summary event: refresh/rebuild the ledger from visible context, mark gaps `UNCONFIRMED`, ask up to 1–3 targeted questions, then continue.

### `functions.update_plan` vs the Ledger
- `functions.update_plan` is for short-term execution scaffolding while you work (a small 3–7 step plan with pending/in_progress/completed).
- `http://CONTINUITY.md` is for long-running continuity across compaction (the “what/why/current state”), not a step-by-step task list.
- Keep them consistent: when the plan or state changes, update the ledger at the intent/progress level (not every micro-step).

### In replies
- Begin with a brief “Ledger Snapshot” (Goal + Now/Next + Open Questions). Print the full ledger only when it materially changes or when the user asks.

### `http://CONTINUITY.md` format (keep headings)
- Goal (incl. success criteria):
- Constraints/Assumptions:
- Key decisions:
- State:
- Done:
- Now:
- Next:
- Open questions (UNCONFIRMED if needed):
- Working set (files/ids/commands):


# Repository Guidelines

## Project Structure & Module Organization
The app is a Vite + React + TypeScript frontend. Entry points live at `index.html` and `index.tsx`, with the main UI in `App.tsx`. Feature components are in `components/` (e.g., `components/BenchmarkDashboard.tsx`, `components/ScenarioVisualizer.tsx`) and shared UI primitives live in `components/ui/`. Static data is defined in `data/benchmark.ts`, and reusable helpers are in `lib/utils.ts`. An alias of `@/` points to the repo root (see `tsconfig.json` and `vite.config.ts`).

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server on `http://localhost:3000`.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: serve the production build locally for a quick smoke test.

## Coding Style & Naming Conventions
TypeScript/TSX is the primary language. Follow the existing 2-space indentation and JSX layout. Components use PascalCase file names (for example, `BenchmarkDashboard.tsx`), and hooks/utilities should use camelCase. Tailwind utility classes are used directly in JSX, with design tokens (CSS variables) defined in `index.html`.

## Testing Guidelines
There is no automated test setup or `npm test` script in this repo. If you add tests, document the runner in `package.json`, and prefer colocated test files such as `components/MyWidget.test.tsx` for UI logic.

## Commit & Pull Request Guidelines
This checkout does not include git history, so no existing commit convention is available. Use short, imperative messages and include an optional scope when helpful (example: `ui: tune leaderboard spacing`). For pull requests, include a concise description, link relevant issues, and add screenshots for UI-facing changes.

## Configuration & Secrets
Local configuration uses `.env.local` with `GEMINI_API_KEY` (see `README.md`). Do not commit secrets; keep API keys out of the repo and rotate them if exposed.
