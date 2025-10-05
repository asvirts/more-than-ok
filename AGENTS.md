# Repository Guidelines

## Project Structure & Module Organization
- Core routes and UI live in `app/`, using the App Router; shared UI sits under `app/components`, while page-level data loaders sit beside their route (`app/actions.ts`, `app/posts`).
- MDX content is stored in `content/posts`; each post ships with front matter parsed through `lib/mdx.ts` and rendered via `next-mdx-remote` helpers.
- Global configuration lives at the root (`next.config.ts`, `tailwind.config.ts`, `tsconfig.json`); static assets and icons belong in `public/`.
- Styling combines Tailwind utilities (see `app/globals.css`) with occasional `styled-components` usage for bespoke layouts.

## Build, Test, and Development Commands
- `npm run dev` starts the Next.js dev server with Turbopack for fast reloads; point your browser at `http://localhost:3000`.
- `npm run build` performs a production build and validates routing/MDX hydration.
- `npm run start` boots the compiled output; use it to reproduce Vercel behavior locally.
- `npm run lint` runs `next lint` with the repo's ESLint rules, including Tailwind class ordering checks.
- `npm run type-check` ensures the TypeScript surface stays sound without emitting build artifacts.

## Coding Style & Naming Conventions
- TypeScript and React function components are the default; favor async server components unless client-side interactivity is required.
- Use two-space indentation, single quotes, and trailing commas on multiline literals to match the existing code style.
- Tailwind classes should read from layout → color → state (e.g. `px-4 py-2 bg-slate-900 hover:bg-slate-800`).
- Co-locate helper modules beside their consumers when they are route-specific; otherwise place them under `lib/` with descriptive, kebab-cased filenames.

## Testing Guidelines
- There is no Jest or Playwright suite yet; treat `npm run lint` and `npm run type-check` as the minimum gate before any PR.
- When adding automated tests, prefer colocated `*.test.ts` files alongside the module under test and keep fixtures in `content/` when they must mirror MDX input.
- Manual verification should include checking that new posts render correctly in `app/posts` and that generated pages pass dark/light mode review.

## Commit & Pull Request Guidelines
- Follow the concise, lower-case commit style visible in `git log` (e.g. `blog`, `vercel.json`); keep the summary under ~50 characters and favor imperative verbs when possible.
- Each PR should describe the motivation, enumerate key changes, and link tracking issues; attach screenshots or loom recordings for visual updates.
- Re-run `npm run build` before requesting review, and note any deviations from the standard deployment path (custom env vars, content migrations, etc.).
