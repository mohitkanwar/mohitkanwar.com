# Project Guidelines

## Architecture
- This is a Hugo static site rooted at `webapp/`.
- Source of truth:
  - Site config: `hugo.toml`
  - Content: `content/`
  - Data files: `data/`
  - Templates and shortcodes: `layouts/`
  - Static assets: `static/` and `assets/`
- Theme is a git submodule at `themes/hugo-profile` (see `.gitmodules`). Prefer overriding via `layouts/` and `static/` before editing theme files directly.
- Generated output directories are `public/` and `docs/`. Do not manually edit generated HTML in those folders unless the task is explicitly about generated artifacts.

## Build and Test
- Prerequisite: Hugo extended (CI uses Hugo `0.147.2` in `.github/workflows/hugo.yaml`).
- Local dev server (from `webapp/`): `hugo serve`
- Production build (from `webapp/`): `hugo --gc --minify`
- There is no automated unit test suite in this repo. Validate changes by:
  - Running `hugo --gc --minify`
  - Spot-checking changed pages in local serve output

## Conventions
- Follow front matter shape used by existing content files.
  - Blog example: `content/blogs/cost-of-software.md`
  - Solution example: `content/solutions/channel-banking-project.md`
  - Archetype templates: `archetypes/blog.md`, `archetypes/solution.md`
- Keep markdown content under the correct section folder (`content/blogs/`, `content/solutions/`, `content/videos/`, `content/anecdotes/`).
- Preserve TOML formatting style in `hugo.toml` and front matter style in markdown files.
- Reuse existing shortcodes and patterns before introducing new ones:
  - Shortcodes: `layouts/shortcodes/`
  - Video template customizations: `layouts/videos/single.html`
  - Head/footer extensions: `layouts/partials/head/extensions.html`, `layouts/partials/sections/footer/build-meta.html`

## Visual Branding
- Whenever creating or updating diagrams, architecture visuals, infographics, blog cover images, or other shareable visual assets for this site, subtly include Mohit Kanwar's site icon or logo.
- Preferred source asset: `static/fav.png`.
- For SVG diagrams, embed or recreate a small logo mark inside the SVG so the branding travels with the diagram if it is copied independently.
- Keep branding understated: place it in a corner or side rail, avoid covering content, and pair it with `mohitkanwar.com` only when there is enough space.
- Do not add the logo to tiny UI icons, favicons, or decorative inline elements where it would reduce clarity.

## Pitfalls
- CI generates `data/build.json` during build for footer metadata; local builds may rely on fallback values.
- Avoid broad changes in `themes/hugo-profile/` unless requested, because upstream/theme updates can overwrite local theme edits.
- Keep edits focused on source files; do not treat `docs/` or `public/` as primary authoring locations.

## References
- Usage commands and author workflow: `README.md`
- CI/deploy behavior: `.github/workflows/hugo.yaml`, `.github/workflows/hugo2.yaml`
- Theme upstream docs: `themes/hugo-profile/README.md`
