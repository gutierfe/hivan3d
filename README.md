# hivan3d — Ivan F. Gutierrez Borjon, Character Rigging

Portfolio site built from the Claude Design handoff (direction **1a: poster index**, black page, highlighter-bar titles, tight project grid) with project detail pages and an about page.

Stack: Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS 4, TypeScript. Fonts: Archivo (variable, width axis) and JetBrains Mono via `next/font`.

## Run

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

## Where things live

| Path | What |
| --- | --- |
| `src/lib/data.ts` | All content: profile, projects, tools, skills, experience, nav. Edit this to change copy. |
| `src/app/page.tsx` | Home: hero, marquee, project grid, tools + reel, contact. |
| `src/app/work/[slug]/page.tsx` | Project detail pages, statically generated from `projects`. |
| `src/app/about/page.tsx` | Profile, experience, Python tools, skills, education. |
| `src/components/frame.tsx` | Striped placeholder frame. Pass children to replace it with real media. |
| `src/components/youtube.tsx` | Privacy-friendly YouTube embed. |
| `src/app/globals.css` | Design tokens (`--ink`, `--paper`, `--muted`, `--dim`, `--line`) and the `display`, `label`, `bar`, `frame` utilities. |
| `public/resume/` | Resume PDF linked from the hero and about page. |

## Adding real media

Every striped box is a `<Frame caption="…">`. To swap one for a turntable or screenshot, put the file in `public/` and pass it as children:

```tsx
<Frame caption="One Song turntable">
  <video src="/media/one-song-turntable.mp4" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
</Frame>
```

To give a project a YouTube hero, set `videoId` on it in `src/lib/data.ts`. Tankhead and the showcase biped already have one.

## Adding a project

Append an entry to `projects` in `src/lib/data.ts`. The home grid, the detail route, prev/next links, the rig counter and the sitemap all derive from that array. Set `NEXT_PUBLIC_SITE_URL` in production so the sitemap uses the real domain.
