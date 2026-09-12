# Priyansh Namdeo — Portfolio

A free, self-hosted, single-page scrollable portfolio. Everything lives in
this folder — no build tools, no frameworks, no paid services.

## Folder structure

```
portfolio/
├── index.html          → page structure (3 sections)
├── style.css            → Burgundy Noir design system, dark/light theme
├── script.js             → animations, tabs, lightbox
├── gallery-data.js       → EDIT THIS to add/remove your photos & videos
└── assets/
    ├── 01-mine_cutout.png   → hero character (transparent bg)
    ├── 02-mine_cutout.png   → camera character (transparent bg)
    ├── 03-mine_cutout.png   → walking-away character (transparent bg)
    └── gallery/              → put your real photos & videos here
```

## Adding your real work

1. Drop your photo/video files into `assets/gallery/`.
   - Photos: `.jpg` or `.png`
   - Videos: `.mp4` (keep them reasonably compressed — under ~15MB each
     loads much faster; HandBrake, free, can compress these easily)
2. Open `gallery-data.js`.
3. Copy one of the existing entries, update the fields:
   - `type`: `"photo"` or `"video"`
   - `src`: path to your file, e.g. `"assets/gallery/my-photo.jpg"`
   - `title`: short caption
   - `date`: `"YYYY-MM"`
   - `category`: `"photography"`, `"video"`, `"design"`, or `"other"`
   - `year`: for the Archive tab
   - `featured`: `true` to also show it in the Featured tab (keep this to
     your best 10–15 pieces total)
4. Save. Refresh the page — done. No rebuild step.

Remove the placeholder entries once you've added enough real work.

## Previewing locally

You need a local server (opening the HTML file directly in a browser will
block video loading in some browsers). Easiest option — if you have Python:

```bash
cd portfolio
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Deploying for free (GitHub Pages)

1. Create a free GitHub account if you don't have one.
2. Create a new repository, e.g. `portfolio`.
3. Upload everything inside this `portfolio/` folder to the repository
   (drag-and-drop works on github.com, or use `git push` if you're
   comfortable with git).
4. In the repo, go to **Settings → Pages**.
5. Under "Build and deployment", set **Source: Deploy from a branch**,
   branch: `main`, folder: `/ (root)`. Save.
6. Wait ~1 minute. Your site will be live at:
   `https://<your-username>.github.io/portfolio/`

That link is free, permanent, and shareable — no hosting cost, ever.

### Video file size note
GitHub has a 100MB per-file limit and works best with a repo under ~1GB
total. If your videos are large, compress them first (HandBrake, free) or
consider hosting large videos on Cloudinary's free tier and pointing
`src` at the Cloudinary URL instead of a local file — everything else
about the gallery works the same either way.

## Customizing colors

All colors are CSS variables at the top of `style.css` (`:root` for dark
mode, `.theme-light` for light mode). Change a hex value there and it
updates everywhere.

## Customizing text

- Hero name, tagline, about → `index.html`, inside `<section id="hero">`
- Work section heading/subheading → `index.html`, inside `<section id="work">`
- Thank-you message → `index.html`, inside `<section id="thanks">`
- Social links → same section, the two `<a>` tags already point to your
  Instagram and LinkedIn.
