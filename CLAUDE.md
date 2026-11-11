# Lucent Labs website — project context

Marketing site for **Lucent Labs**, a Web3 development agency that builds DeFi applications and
blockchain-based financial protocols. Single-page Next.js site; all sections live on `/`.

- Repo: `github.com/TechMartins72/lucentlabs-website-new` (`origin`, branch `main`, pushed directly —
  no PR flow so far). Earlier history was pushed to `github.com/statera-protocol/lucent-labs-website`.
- Live contact: `lucentcodes@gmail.com` · X: https://x.com/_Lucentlabs · LinkedIn: https://www.linkedin.com/company/luccentlabs/
- Leader / founder: **Lawal Musa Agah** — Founder & Lead Architect

## What we're aiming for

A credible, brand-consistent agency site that:
1. Says clearly what Lucent Labs does (DeFi + financial protocols, multi-chain).
2. **Showcases the one current product — Orderbook on Nervos CKB** — as the flagship.
3. Shows the chains shipped on: **Cardano, Midnight, Nervos CKB, Ethereum, Solana, TRON**.
4. Builds trust without fabricated proof: real team, real leader, a clear process, honest FAQ.
5. Converts: every section funnels to "Start a project" (email) or the X account.

Explicit owner decisions (don't undo without asking):
- **No blog.** "Company" is called **About us**.
- Only **one product** (Orderbook). Old portfolio items (Cardano DeFi platform, DAO tools, Midnight
  dApps, NFT marketplace) were removed from the site.
- **Dark-first design, no light/dark toggle** (ThemeProvider was deleted). Sections alternate dark
  (`bg-ink`) and light (`bg-paper`).
- **No fake testimonials.** Owner has no real client reviews yet, so `Testimonials` is parked
  (component exists, not rendered) and **How we work** took its slot. When real comments arrive,
  fill `testimonials` in `utils/index.ts` and render `<Testimonials />` in `page.tsx` again.
- Smooth scroll + only **subtle** GSAP scroll effects — the owner asked for "very subtle".
- Owner commented out the cross pattern on the **Hero** and **Orderbook** sections — keep the
  pattern sparse (brand guide: "use minimally and selectively").

## Design references (inspiration only)

- **Content/structure** borrowed from https://4irelabs.com (hero → trusted-by strip → about + stats
  → core expertise tabs → product → leaders → reviews → FAQ). Copy the *ideas*, not the UI.
- **UI feel** from https://pci-website-three.vercel.app (the `/studio` path is a Sanity CMS login,
  the homepage is the reference): editorial layout, small uppercase accent eyebrows, generous
  whitespace, rounded image cards, "more →" text links. Unrelated industry — take the feel only.

## Brand guidelines (from "Lucent Labs Brand Details.pdf", Helevate Media 2026)

Source PDF (owner's machine): `Desktop/Workspace/HELEVATE_MEDIA/PROJECTS/LUCENT_LABS/Lucent Labs Brand Details.pdf`

- **Typeface: DM Sans** everywhere. Headlines **DM Sans Light**, **sentence case**; use Bold/Medium
  for emphasis. Body DM Sans Regular. (Loaded via `next/font/google` in `layout.tsx`.)
- **Primary colours:** Dark Gray `#201E1E` (dominant), Magenta `#E22C92`, Azure `#1E9ADB`.
- **Secondary:** Neon Pink `#A649A5`, Blue `#6B66B9`, Gray `#545454`, Light Gray `#E1DDDD`, White.
- Usage ratio: neutrals dominate (dark gray most), accents led by azure then magenta.
- **Logo symbol** = gradient "L" (azure → violet → magenta) → the site's `--brand-gradient`.
- **Wordmark** must not be altered/locked up with other marks. Files: `public/lucentlab_vector_dark.png`
  (symbol + white wordmark, used on dark), `public/lucentlab_vector_light.png`, `public/brand-symbol.png`.
- **Pattern:** aligned grid of crosses, subtle, used sparingly → `.bg-cross` / `.bg-cross-dark`.
- **Imagery:** grayscale for hero/overlay images; natural colour elsewhere. Team photos are grayscale,
  colour on hover.
- Approved boilerplate copy (25/50/75 words) is in the PDF; About us uses the 75-word version,
  extended to all six chains.

## Tech stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · **Tailwind CSS v4** (CSS-first config in
`globals.css`, no tailwind.config) · GSAP 3.14 + `@gsap/react` (ScrollTrigger, **ScrollSmoother** —
free since 3.13, already in `gsap`) · `lucide-react` (UI icons) · `react-icons` (brand icons: X,
LinkedIn, email). `swiper` is still in package.json but no longer used.

Commands: `npm run dev` · `npm run build` · `npm run lint` · `npx tsc --noEmit`.
`.claude/launch.json` defines a `dev` preview config for Claude's browser pane.
Code is formatted with Prettier defaults (80 cols) by the owner's editor.

## File map

```
src/app/
  layout.tsx            DM Sans font, metadata
  page.tsx              section order; Header sits OUTSIDE <SmoothScroll>
  globals.css           brand tokens, utilities, buttons, keyframes, reduced-motion rules
  utils/index.ts        ALL site copy & data (edit content here, not in components)
  utils/types.ts
  components/
    Header.tsx          fixed header, pill nav, mobile full-screen menu
    SmoothScroll.tsx    ScrollSmoother + every scroll effect + anchor-link handling
    Reveal.tsx          fade-up-on-view wrapper (IntersectionObserver) + <Eyebrow>
    Hero.tsx            hero + "Ecosystems we've built on" marquee
    AboutUs.tsx         #about — boilerplate, 4 stats, 4 values
    Orderbook.tsx       #orderbook — product showcase + animated order-book mock
    Expertise.tsx       #expertise — 4 tabs (client component)
    OurTeam.tsx         #team — Lawal feature, engineers grid, advisors
    HowWeWork.tsx       #process — 4 steps + engagement models
    Testimonials.tsx    PARKED (not rendered) — placeholder data
    Faq.tsx             #faq — accordion (client component)
    Contact.tsx         #contact — gradient CTA card
    Footer.tsx          links, chains, giant gradient "lucent labs" wordmark
```

Page order: Hero → About us → Orderbook → Expertise → Team → How we work → FAQ → Contact → Footer.
Nav links: About us, Orderbook, Expertise, Team, FAQ (+ "Start a project" button → `#contact`).

## Styling conventions

- Tokens on `:root` + `@theme inline` → classes like `bg-ink`, `bg-ink-2`, `bg-paper`, `text-azure`,
  `text-magenta`, `bg-brand-gradient`, `text-gradient`.
- Layout helpers: `.container-x` (max-w-7xl + gutters), `.section-y` (vertical section padding),
  `.heading`, `.display`, `.eyebrow`.
- Buttons are Tailwind v4 `@utility` blocks: `btn`, `btn-primary` (gradient), `btn-ghost`, `link-arrow`.
- Light sections use `text-ink` with `/60` style opacities; dark sections use `text-white/55–70`.

## Scroll / animation system

`SmoothScroll.tsx` creates ScrollSmoother (smooth 1.1, effects on, no touch smoothing) inside
`gsap.matchMedia`, so **prefers-reduced-motion users get native scroll and no effects**. It also
intercepts `a[href^="#"]` clicks and scrolls with a 72px header offset (`HEADER_OFFSET`).

Elements opt into effects with attributes:

| Attribute | Effect | Used on |
|---|---|---|
| `data-speed="clamp(x)"` | parallax (ScrollSmoother) | hero glow, hero symbol |
| `data-fx="hero-fade"` | drifts up/fades leaving hero | hero copy column |
| `data-fx="count"` | number counts up once | About stats |
| `data-fx="tilt"` | settles from slight 3D tilt | Orderbook mock |
| `data-fx="parallax-img"` | image drifts in frame | Lawal's photo |
| `data-fx="draw"` | line draws left→right | How we work progress line |
| `data-fx="scale-in"` | 94% → 100% | Contact card |
| `data-fx="rise"` | rises into place | footer wordmark |
| `data-fx="pin"` | pinned on desktop | FAQ heading column |

`Reveal` (CSS transition, `.reveal` → `.is-visible`) handles the per-element fade-ins separately.

## Gotchas learned the hard way

- **Tailwind v4 can't `@apply` a plain CSS class.** Reusable classes that other rules `@apply`
  must be declared with `@utility` (that's why the buttons are `@utility`).
- **`.section-y` beats Tailwind padding overrides** (`pb-0`, `pt-0` lost to it). Don't combine
  `section-y` with padding overrides — use explicit `py-/pt-/pb-` classes instead (HowWeWork and
  FAQ do this).
- **ScrollSmoother rules:** fixed elements (Header) must live outside `#smooth-wrapper`; CSS
  `position: sticky` doesn't work inside it (use the `data-fx="pin"` ScrollTrigger instead); never put
  `data-speed`/`data-fx` on an element that already has a CSS transform (e.g. a `.reveal`, or
  anything with `hover:scale-*`) — wrap it in an inner element. Scrubbed effects trigger on the
  element's **parent** so the tween doesn't move its own trigger (this fixed the footer wordmark
  stopping short). Native `scroll-behavior: smooth` was removed — it fights ScrollSmoother.
- **Dev server Tailwind cache** sometimes misses newly added class names (seen with `md:pb-28`).
  Production build is correct; restart `npm run dev` if a new class seems ignored.
- Next dev lock: only one `next dev` can run per checkout (`.next/dev/lock`).

## Content status & open items

Content to verify / replace before launch:
- [ ] **Testimonials**: real client comments needed (currently parked placeholders in `utils/index.ts`).
- [ ] **Orderbook copy** is based on one public X post (native Nervos DEX, proof-of-concept,
      building in the open). The mock's `CKB / xUDT` pair and figures are illustrative and labelled
      as such. Confirm feature claims (on-chain limit orders, self-custody until fill, Cell model).
- [ ] **FAQ answers** (existing-codebase work, audits, pricing) and **How we work** promises
      ("regular demos", "ongoing support option") — confirm they match what Lucent Labs offers.
- [ ] **Stats** (6 chains, 1 product, 8+ years, 5 engineers) are derived from existing site data.
- [ ] Elliot Lucky's LinkedIn URL looks malformed (`linkedin.com/elliot-lucky`, missing `/in/`).
- [ ] Gap between How we work and FAQ is ~225px on desktop (owner restored How we work's bottom
      padding); trim FAQ's inner `pt-20 md:pt-24` if it feels too large.

Possible next steps (not started): real Orderbook screenshots/link once public, a "Selected work"
section if past projects can be shown, removing the unused `swiper` dependency, an OG image /
SEO metadata pass.

## Working with the owner

- Owner reviews visually in the browser; check desktop (1440) and mobile (375) after UI changes and
  confirm no horizontal overflow.
- Keep changes subtle and on-brand; ask before adding new sections or claims about the business.
- Don't invent testimonials, metrics, clients or partnerships.
- Commit/push only when asked; commits go straight to `main`.
