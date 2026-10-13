# Code Guidelines

## Structure

- `src/App.tsx` is the application entry view; `src/pages/portfolio/` composes the single-page portfolio sections.
- `src/pages/portfolio/content.ts` is the source for profile links, project URLs, stack lists, and technology chips.
- `src/components/graphics/` contains decorative SVG illustrations used by the portfolio.
- `src/components/language-switcher.tsx` controls the PT-BR/EN locale through i18next.
- `src/i18n.ts` configures locale loading; `public/locales/` contains the flat translation dictionaries.
- `src/index.css` owns design tokens, responsive styles, focus states, and reduced-motion behavior.

## Conventions

- Keep translated copy in both locale files with matching keys; `pt-BR` is the fallback language.
- Keep project destinations and other non-translated portfolio data in `src/pages/portfolio/content.ts`.
- Use lucide-react for interface icons and keep SVG illustrations accessible with descriptive labels.
- Preserve semantic landmarks, keyboard focus visibility, and mobile horizontal-overflow checks.