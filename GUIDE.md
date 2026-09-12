# Complete Portfolio Setup & Customization Guide

**Priyansh Namdeo — Photographer & Videographer Portfolio**

This is your complete, step-by-step guide to understanding, customizing, and
deploying your portfolio. Everything is free. No payments, no signups, no
paid services required.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Preview Locally](#preview-locally)
4. [Adding Your Real Work](#adding-your-real-work)
5. [Customizing Text & About](#customizing-text--about)
6. [Customizing Colors](#customizing-colors)
7. [Customizing Design Elements](#customizing-design-elements)
8. [Deploying to GitHub Pages](#deploying-to-github-pages)
9. [FAQ & Troubleshooting](#faq--troubleshooting)

---

## Project Overview

This portfolio is a **single-page, scrollable website** with three sections:

1. **Hero / Intro** — Your name, tagline, about section, and character illustration
2. **Work Gallery** — Featured, Creations (by type), and Archive (by year) tabs with
   masonry gallery
3. **Thank You & Socials** — Closing message and links to Instagram + LinkedIn

**Key features:**
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark + light theme toggle
- ✅ Anime.js animations (smooth, subtle, not distracting)
- ✅ Inline photo/video lightbox (no external redirects)
- ✅ Videos autoplay once when clicked
- ✅ Free forever (GitHub Pages hosting)
- ✅ No build step, no dependencies, just edit and deploy

**Design direction:**
- **Burgundy Noir** color system (deep burgundy, warm ivory, near-black tones)
- Editorial, sophisticated aesthetic
- Cinematic anime character illustrations
- Minimal, intentional layout

---

## File Structure

```
portfolio/
│
├── index.html              The page structure (DO NOT EDIT unless customizing layout)
├── style.css               All colors, fonts, spacing (EDIT for design tweaks)
├── script.js               Animations, tabs, lightbox logic (rarely need to edit)
├── gallery-data.js         YOUR WORK GOES HERE (edit this file to add photos/videos)
├── README.md               Quick reference
├── GUIDE.md                This file
│
└── assets/
    ├── 01-mine_cutout.png     Hero character (intro pose)
    ├── 02-mine_cutout.png     Camera character (work pose)
    ├── 03-mine_cutout.png     Walking-away character (goodbye pose)
    │
    └── gallery/               FOLDER FOR YOUR PHOTOS & VIDEOS
        ├── placeholder-sunset.jpg      (sample — delete and replace)
        ├── placeholder-clouds.jpg      (sample — delete and replace)
        └── ...
```

---

## Preview Locally

Open your terminal (in Zed or any terminal) and run:

```bash
cd portfolio
python3 -m http.server 8000
```

Then open your browser and go to:

```
http://localhost:8000
```

You'll see your portfolio live. Every time you edit a file and save,
refresh the browser to see changes immediately.

**To stop the server:** Press `Ctrl+C` in the terminal.

**Port already in use?** Try a different port:
```bash
python3 -m http.server 9000
```
Then visit `http://localhost:9000`

---

## Adding Your Real Work

This is the main thing you'll do. Here's the workflow:

### Step 1: Add Your Files to the Gallery Folder

1. Open `assets/gallery/` folder
2. Drop your photo and video files there:
   - Photos: `.jpg` or `.png` (any size, but smaller loads faster)
   - Videos: `.mp4` (keep under ~15MB each for fast loading)

**Video compression tip:** If your videos are large, download
[HandBrake](https://handbrake.fr/) (free, open-source), open your video,
set quality to "High Profile", and export. Typically compresses 500MB down
to 30–50MB with no visible quality loss.

### Step 2: Edit `gallery-data.js`

This is the ONLY file you edit to add/remove work.

Open `gallery-data.js`. You'll see this structure:

```javascript
const GALLERY_ITEMS = [
  {
    type: "photo",
    src: "assets/gallery/my-sunset.jpg",
    title: "Sunset over campus",
    date: "2025-06",
    category: "photography",
    year: "2025",
    featured: true
  },
  // more items...
];
```

**Each item has these fields:**

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| `type` | string | `"photo"` or `"video"` | Determines how it displays |
| `src` | string | `"assets/gallery/photo.jpg"` | Path to your file |
| `title` | string | `"Sunset over the lake"` | Shows in gallery + lightbox |
| `date` | string | `"2025-06"` (YYYY-MM) | Used for sorting & display |
| `category` | string | `"photography"` | Must be one of: `"photography"`, `"video"`, `"design"`, `"other"` |
| `year` | string | `"2025"` | Used in Archive tab year grouping |
| `featured` | boolean | `true` or `false` | If `true`, also shows in Featured tab (keep ~10-15 total) |

### Step 3: Add New Entries

**To add a photo:**

```javascript
{
  type: "photo",
  src: "assets/gallery/my-photo.jpg",
  title: "Golden hour at the hostel",
  date: "2025-09",
  category: "photography",
  year: "2025",
  featured: true
}
```

**To add a video:**

```javascript
{
  type: "video",
  src: "assets/gallery/acm-reel.mp4",
  title: "ACM Recruitment Reel 2025",
  date: "2025-08",
  category: "video",
  year: "2025",
  featured: true
}
```

**To add a design/edit:**

```javascript
{
  type: "photo",
  src: "assets/gallery/quote-graphic.jpg",
  title: "Quote graphic — 'Stay Curious'",
  date: "2025-07",
  category: "design",
  year: "2025",
  featured: false
}
```

### Step 4: Save and Refresh

1. Save `gallery-data.js`
2. Refresh your browser (at `http://localhost:8000`)
3. Your new piece appears in the gallery automatically

**Featured tab:** Shows only items with `featured: true` (your best work)
**Creations tab:** Grouped by category (photography, video, design, other)
**Archive tab:** Grouped by year

### Removing Placeholder Items

The portfolio comes with 9 placeholder items. Delete them as you add real
work. Simply remove the entire `{ ... }` object and the comma after it.

**Before:**
```javascript
const GALLERY_ITEMS = [
  { type: "photo", src: "assets/gallery/placeholder-sunset.jpg", ... },
  { type: "photo", src: "assets/gallery/placeholder-clouds.jpg", ... },
];
```

**After (deleted first one):**
```javascript
const GALLERY_ITEMS = [
  { type: "photo", src: "assets/gallery/placeholder-clouds.jpg", ... },
];
```

---

## Customizing Text & About

### Hero Section (Page 1)

Open `index.html` and find the `<section id="hero">` block:

```html
<div class="hero-content">
  <p class="hero-tagline">Photographer &middot; Videographer &middot; Self&#8209;Taught Creator</p>
  <p class="hero-about">
    I'm Priyansh — a self-taught photographer and videographer...
  </p>
</div>
```

**To change the tagline:** Replace the text in `<p class="hero-tagline">...</p>`

**To change the about section:** Replace the text in `<p class="hero-about">...</p>`

Examples:

```html
<!-- Shorter tagline -->
<p class="hero-tagline">Visual Storyteller</p>

<!-- Custom about -->
<p class="hero-about">
  I capture moments through photography and craft them into stories through video.
  Currently exploring light, motion, and the spaces between.
</p>
```

### Work Section (Page 2)

Find `<section id="work">` → `<div class="work-header">`:

```html
<h2 class="work-title">The Work</h2>
<p class="work-subtitle">A collection of frames, edits, and stories...</p>
```

Edit these to customize the section heading.

### Thank You Section (Page 3)

Find `<section id="thanks">`:

```html
<h2 class="thanks-title">Thank You<br>for Stopping By</h2>
<p class="thanks-body">
  That's the work, so far. New frames and edits get added as I make them...
</p>
```

Edit the title and message. The `<br>` tag forces a line break.

### Social Links

Still in the `<section id="thanks">`, find the social links:

```html
<a href="https://www.instagram.com/pnx.cam._/?hl=en" target="_blank" rel="noopener" class="social-link">
  <svg>...</svg>
  <span>Instagram</span>
</a>
```

Only two are included (Instagram & LinkedIn). The URLs are already set to yours.
If you want to add more (Twitter, YouTube, etc.), copy-paste one link block and
update the `href` attribute and `<span>` text.

---

## Customizing Colors

All colors are defined in `style.css` at the very top. They're CSS variables,
so changing one number updates the entire site.

### Dark Mode (Default)

Look for the `:root` block:

```css
:root {
  --bg: #0D080A;                    /* Page background */
  --surface: #170D10;               /* Cards, surfaces */
  --deep-burgundy: #2A0D14;         /* Deep accents */
  --burgundy: #641A27;              /* Primary burgundy */
  --accent: #9B2F3D;                /* Highlights, active states */
  --text-muted: #BBA9A0;            /* Secondary text */
  --text-secondary: #806D67;        /* Tertiary text */
  --text: #F4EDE4;                  /* Primary text */
  --border: rgba(74, 37, 44, 0.7);  /* Borders */
}
```

### Light Mode

Scroll down to find:

```css
body.theme-light {
  --bg: #F4EFE8;
  --surface: #E8DED3;
  --deep-burgundy: #53161D;
  --burgundy: #6E1E2A;
  --accent: #8A2532;
  --text-muted: #725F59;
  --text-secondary: #88756E;
  --text: #1A0D10;
  --border: rgba(203, 186, 176, 0.9);
}
```

### Changing a Color

To change any color, just replace the hex value:

**Example: Make the accent brighter**
```css
--accent: #FF6B6B;  /* was #9B2F3D */
```

Refresh the page — everything using that color updates instantly.

**Example: Change the background to a warmer tone**
```css
--bg: #0F0A08;  /* slightly warmer near-black */
```

### Color Palette Reference

The portfolio uses a **Burgundy Noir** palette:

- **Background tones:** Near-black, warm near-black
- **Burgundy tones:** Deep wine, rich burgundy, refined red
- **Text tones:** Warm ivory, muted beige
- **Accent:** Refined burgundy-red for highlights

To keep the aesthetic cohesive, don't introduce bright neons or blues.
The beauty is in restraint.

---

## Customizing Design Elements

### Hero Name Position

The name ("PRIYANSH NAMDEO") appears behind the character's head. This is
positioned with absolute positioning in CSS. To adjust:

1. Open `style.css`
2. Find `.hero-nametag { ... }`
3. Adjust `margin-bottom` (negative value moves it down under the character):

```css
.hero-nametag {
  margin-bottom: -6.5rem;  /* change this number */
}
```

Smaller (more negative) = name appears lower/behind character more.
Larger (less negative) = name appears higher.

### Character Sizes

Each character image can be sized independently:

```css
.hero-character { max-height: 56vh; }     /* Hero character */
.work-character { max-height: 62vh; }     /* Camera character */
.thanks-character { max-height: 60vh; }   /* Walking character */
```

`vh` = viewport height. `56vh` means 56% of the browser window height.

### Gallery Columns

The masonry gallery layout uses CSS columns:

```css
.masonry { columns: 3 180px; }  /* 3 columns, min width 180px each */
```

Change `3` to `2` or `4` for fewer/more columns:
```css
.masonry { columns: 2 200px; }  /* 2 wider columns */
```

### Animation Speed

Anime.js animations are controlled in `script.js`. To make them faster/slower:

Look for `duration: 900` (milliseconds):

```javascript
anime.timeline({ easing: 'easeOutExpo' })
  .add({
    targets: '.hero-nametag .hero-name-line',
    opacity: [0, 1],
    duration: 900  /* change this */
  })
```

- `900` = 0.9 seconds
- `600` = 0.6 seconds (faster)
- `1200` = 1.2 seconds (slower)

### Lens Lines Animation

The camera lens lines in the work section animate continuously:

```javascript
anime({
  targets: '.lens-line',
  strokeDashoffset: [0, -400],
  duration: 6000,  /* animation speed */
  loop: true
});
```

Change `6000` to make lines move faster (`4000`) or slower (`8000`).

---

## Deploying to GitHub Pages

Once you're happy with your portfolio, deploy it for FREE using GitHub Pages.

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Sign up (free forever)
3. Verify your email

### Step 2: Create a New Repository

1. Click the `+` icon in the top right → "New repository"
2. Name it: `portfolio` (or any name you want)
3. Description: (optional) "My photography & videography portfolio"
4. Choose "Public" (required for free pages)
5. Click "Create repository"

### Step 3: Upload Your Portfolio Files

You have two options:

#### Option A: Drag & Drop (Easiest)

1. In your new repository, click "Add file" → "Upload files"
2. Drag your `portfolio` folder contents into the browser:
   - `index.html`
   - `style.css`
   - `script.js`
   - `gallery-data.js`
   - `README.md`
   - `GUIDE.md`
   - `assets/` (folder with characters + gallery)
3. Click "Commit changes"

#### Option B: Using Git (Command Line)

If you're comfortable with git:

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: portfolio site"
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

(Replace `YOUR-USERNAME` with your actual GitHub username)

### Step 4: Enable GitHub Pages

1. In your repository, go to **Settings** (top menu)
2. Left sidebar: Click **"Pages"**
3. Under "Build and deployment":
   - Source: **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
4. Click **Save**

GitHub will build your site. Wait ~1–2 minutes.

### Step 5: Get Your URL

Once it's done (you'll see a green checkmark), your site will be live at:

```
https://YOUR-USERNAME.github.io/portfolio/
```

**Example:** `https://priyansh-namdeo.github.io/portfolio/`

This link is **permanent, free, and shareable**. Send it to anyone.

### Step 6: Update Content in the Future

1. Edit `gallery-data.js` locally (add new photos/videos)
2. Upload the updated file to GitHub:
   - Open the file on github.com
   - Click the pencil icon (edit)
   - Make changes
   - Click "Commit changes"
3. Refresh your portfolio URL — changes appear within a minute

---

## FAQ & Troubleshooting

### Q: Videos aren't showing up, or they're loading slowly

**A:** Videos take time to load. A few fixes:

1. **Compress your videos** — Use HandBrake (free) to reduce file size.
   Most videos can go from 500MB → 30MB with no visible quality loss.
   
2. **Check the file path** — Make sure `src` in `gallery-data.js` matches
   the actual filename:
   ```javascript
   src: "assets/gallery/my-video.mp4"  // exact filename, correct case
   ```
   Filenames are case-sensitive on GitHub.

3. **Check file format** — Only `.mp4` works reliably. If you have `.mov`
   or `.mkv`, convert using HandBrake.

4. **On GitHub**, large videos (>50MB) may fail or timeout. Keep videos
   under 15MB each.

### Q: My photos/videos aren't showing after I uploaded them

**A:** Common causes:

1. **Wrong file path** — Check `src` in `gallery-data.js`:
   ```javascript
   src: "assets/gallery/my-photo.jpg"  // must be exact
   ```
   Not `"my-photo.jpg"` or `"gallery/my-photo.jpg"`

2. **Didn't save `gallery-data.js`** — Make sure you actually saved the file.

3. **File hasn't uploaded to GitHub yet** — If you're deploying to GitHub
   Pages, wait a few minutes and refresh the page.

### Q: The dark/light toggle isn't working

**A:** It should work by default. If not:

1. Clear your browser cache (Ctrl+Shift+Delete in most browsers)
2. Hard refresh the page (Ctrl+F5)
3. Check browser console for errors (F12 → Console tab)

### Q: I want to change the font

**A:** Fonts are loaded from Google Fonts at the top of `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@...&family=Inter:wght=...&display=swap" rel="stylesheet">
```

To change:

1. Go to [fonts.google.com](https://fonts.google.com)
2. Pick fonts you like
3. Copy the `<link>` tag Google gives you
4. Replace the one in `index.html`
5. Update the font-family names in `style.css`:
   ```css
   --font-display: 'Your Font Name', serif;
   --font-body: 'Your Font Name', sans-serif;
   ```

### Q: I want to add more sections or change the layout completely

**A:** This requires editing `index.html` and `style.css`. The structure is
pretty straightforward:

- Each section is a `<section class="panel">` block
- CSS class names match the JS selectors (changing names breaks functionality)
- Keep the IDs (`id="hero"`, `id="work"`, `id="thanks"`) — animations depend
  on them

For major layout changes, you'll need to:
1. Edit the HTML structure
2. Update corresponding CSS rules
3. Potentially update JS selectors in `script.js`

This gets complex. If you want a simpler customization, stick to text/color/size changes.

### Q: How do I add more social links?

**A:** In `index.html`, find the `<div class="social-row">` inside
`<section id="thanks">`:

```html
<div class="social-row">
  <a href="https://instagram.com/..." class="social-link">...</a>
  <a href="https://linkedin.com/..." class="social-link">...</a>
</div>
```

Copy one of the `<a>` blocks and add it:

```html
<a href="https://youtube.com/@yourname" target="_blank" rel="noopener" class="social-link">
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
  <span>YouTube</span>
</a>
```

Update `href` to your actual profile and the `<span>` text.

### Q: My portfolio is live but my domain name isn't pretty

**A:** Right now you have a GitHub Pages URL:
```
https://username.github.io/portfolio/
```

To get a custom domain (e.g., `priyansh-photography.com`):

1. Buy a domain (~$10/year from Namecheap, GoDaddy, etc.)
2. Point it to GitHub Pages (GitHub has docs: [github.com/pages/custom-domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

For now, the `github.io` link works perfectly and is free forever.

### Q: I want to backup my portfolio

**A:** Just download your folder:

1. On GitHub, click **Code** → **Download ZIP**
2. Save it somewhere safe

Or use git to clone:
```bash
git clone https://github.com/YOUR-USERNAME/portfolio.git
```

### Q: Can I use this for commercial work / client portfolios?

**A:** Yes! This is a template. Feel free to modify it for clients, friends,
or multiple portfolios. Just keep the structure and it works beautifully.

---

## Final Checklist

Before you consider your portfolio "done":

- [ ] Added all your real photos/videos to `gallery-data.js`
- [ ] Deleted placeholder entries
- [ ] Customized hero tagline and about text
- [ ] Set social links (Instagram & LinkedIn)
- [ ] Previewed locally and checked all three sections
- [ ] Checked dark/light mode toggle
- [ ] Tested gallery tabs (Featured, Creations, Archive)
- [ ] Tested lightbox (click photos/videos)
- [ ] Deployed to GitHub Pages
- [ ] Shared link with friends/collaborators

---

## Support & Questions

If you get stuck:

1. **Check the code comments** — Most files have comments explaining sections
2. **Check this GUIDE.md** — It covers 99% of customizations
3. **Look at the structure** — HTML/CSS/JS are standard web technologies;
   lots of tutorials exist for each
4. **Keep it simple first** — Get it working with placeholder content, then
   customize gradually

---

**That's it. Your portfolio is complete, free, and ready to showcase your work.**

Go capture something beautiful. 📸🎥

