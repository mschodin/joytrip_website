# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Bootstrapped with Create React App (react-scripts 5):

- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build to `build/`
- `npm test` — Jest in interactive watch mode (no test files currently exist in the repo)
- `npm test -- --watchAll=false <pattern>` — run a single test non-interactively

There is no separate lint script; ESLint runs through `react-scripts` (`react-app` + `react-app/jest` configs in `package.json`).

## Architecture

Single-page marketing/landing site for the musician "JoyTrip." It is intentionally a flat React SPA — no router, no state management, no backend.

- `src/App.js` is the whole page composition. It renders `NavBar` plus five stacked `Section` wrappers (`section0`–`section4`), each given a fixed background class (`section0-background` … `section4-background` defined in `App.css`) and containing one feature component: `Home`, `Content`, `AboutUs`, `Tour`, `Contact`.
- `src/Components/Section.js` is a thin layout shell that just wraps its `content` prop in `.section` / `.section-content` divs and assigns the `id` used for in-page scroll navigation.
- `src/Components/Nav.js` uses `react-scroll` to jump between those `section0`–`section4` IDs. When adding or reordering sections, the IDs in `App.js`, the background classes in `App.css`, and the nav targets in `Nav.js` must stay in sync.
- Per-component CSS lives next to each component (`Home.css`, `Tour.css`, etc.). `Palette.css` holds shared color tokens. Custom fonts (`SergiotrendyRegular`, `Nahista`) are imported from `src/fonts/` directly in `App.js`.
- Content like tour dates is hard-coded in the component itself — see the `gigs` array at the top of `src/Components/Tour.js`. Updating tour dates means editing that array (the recent commit history is almost entirely tour/show updates).
- `src/Assets/` holds all images, cover art, and the resume PDF; `src/Music/` holds audio. Both are imported directly by components — no asset pipeline beyond CRA's defaults.

## Stack notes

- React 17 + react-bootstrap 2 / bootstrap 5. Stick with React 17 patterns (no React 18 concurrent APIs) unless deliberately upgrading.
- No TypeScript, no Tailwind, no test suite, no CI config in-repo.
