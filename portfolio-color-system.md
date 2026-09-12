# Portfolio Color System

## Design Direction

**Burgundy Noir × Ivory Editorial × Cinematic Anime × Minimal Luxury**

This color system is the finalized visual foundation for the three-page
scrollable portfolio.

The palette intentionally avoids the common AI/tech portfolio
combination of blue, purple, cyan, and neon gradients. Instead, it uses
deep burgundy, wine, near-black, warm ivory, and muted beige to create a
cinematic, editorial, high-end visual identity.

------------------------------------------------------------------------

# 1. Core Color Philosophy

The portfolio should feel:

-   Cinematic
-   Sophisticated
-   Editorial
-   Dark and atmospheric
-   Personal and distinctive
-   High-end rather than flashy
-   Anime-inspired without looking like an AI-generated template

The primary identity comes from **burgundy**, while near-black and ivory
provide the structural foundation.

Burgundy should generally behave like **ambient light or an accent**,
not like a large block of bright red.

------------------------------------------------------------------------

# 2. Dark Mode

Dark mode is the primary visual identity of the portfolio.

  Role                 Color                  Hex
  -------------------- ---------------------- -----------
  Primary Background   Almost Black           `#0D080A`
  Secondary Surface    Near-black Burgundy    `#170D10`
  Deep Burgundy        Dark Wine              `#2A0D14`
  Primary Burgundy     Burgundy               `#641A27`
  Accent Red           Refined Burgundy Red   `#9B2F3D`
  Muted Text           Warm Gray-Beige        `#BBA9A0`
  Primary Text         Warm Ivory             `#F4EDE4`

### Dark Mode Usage

**`#0D080A` --- Primary Background**

Use for the main page background.

Do not use pure black (`#000000`) as the main background. The warm
near-black gives the interface more depth and preserves the burgundy
character.

**`#170D10` --- Secondary Surface**

Use for:

-   Secondary sections
-   Cards
-   Navigation surfaces
-   Subtle panels
-   Layered backgrounds

**`#2A0D14` --- Deep Burgundy**

Use for:

-   Large atmospheric areas
-   Deep gradient regions
-   Section transitions
-   Decorative elements

**`#641A27` --- Primary Burgundy**

Use for:

-   Important UI accents
-   Selected navigation
-   Lines and dividers
-   Small graphic elements
-   Hover states
-   Accent typography

**`#9B2F3D` --- Accent Red**

Use sparingly.

Recommended for:

-   Small highlights
-   Active states
-   Important indicators
-   Tiny decorative details
-   Subtle lighting on artwork

It should never dominate the interface.

**`#BBA9A0` --- Muted Text**

Use for:

-   Descriptions
-   Metadata
-   Secondary navigation
-   Supporting text

**`#F4EDE4` --- Primary Text**

Use instead of pure white.

Use for:

-   Main headings
-   Important labels
-   Primary navigation
-   High-priority content

------------------------------------------------------------------------

# 3. Light Mode

Light mode should NOT simply be a white version of dark mode.

It should feel like a warm editorial magazine or luxury print layout.

  Role                 Color                  Hex
  -------------------- ---------------------- -----------
  Primary Background   Warm Ivory             `#F4EFE8`
  Secondary Surface    Beige                  `#E8DED3`
  Deep Burgundy        Bordeaux/Wine          `#53161D`
  Primary Burgundy     Rich Burgundy          `#6E1E2A`
  Accent Red           Refined Burgundy Red   `#8A2532`
  Muted Text           Warm Brown Gray        `#725F59`
  Primary Text         Dark Warm Black        `#1A0D10`

### Light Mode Usage

**`#F4EFE8` --- Primary Background**

Main page background.

Avoid pure white (`#FFFFFF`) as the default page background.

**`#E8DED3` --- Secondary Surface**

Use for:

-   Cards
-   Secondary sections
-   Navigation
-   Content blocks
-   Subtle contrast areas

**`#53161D` --- Deep Burgundy**

Use for:

-   Strong typography accents
-   Section headings
-   Decorative elements
-   Deep graphic areas

**`#6E1E2A` --- Primary Burgundy**

Use for:

-   Buttons
-   Navigation states
-   Accent lines
-   Interactive elements

**`#8A2532` --- Accent Red**

Use sparingly for:

-   Active states
-   Small highlights
-   Decorative details
-   Interactive feedback

**`#725F59` --- Muted Text**

Use for secondary and supporting content.

**`#1A0D10` --- Primary Text**

Use for headings and primary content.

------------------------------------------------------------------------

# 4. Complete Palette

## Dark Palette

``` text
#0D080A  — Primary Background
#170D10  — Secondary Surface
#2A0D14  — Deep Burgundy
#641A27  — Primary Burgundy
#9B2F3D  — Accent Red
#BBA9A0  — Muted Text
#F4EDE4  — Primary Text
```

## Light Palette

``` text
#F4EFE8  — Primary Background
#E8DED3  — Secondary Surface
#53161D  — Deep Burgundy
#6E1E2A  — Primary Burgundy
#8A2532  — Accent Red
#725F59  — Muted Text
#1A0D10  — Primary Text
```

------------------------------------------------------------------------

# 5. Gradient System

Gradients should look like atmospheric lighting rather than obvious
colorful gradients.

## Dark Mode Background Gradient

Recommended concept:

``` css
background:
  radial-gradient(
    circle at 75% 20%,
    rgba(155, 47, 61, 0.16),
    transparent 35%
  ),
  radial-gradient(
    circle at 15% 80%,
    rgba(100, 26, 39, 0.12),
    transparent 40%
  ),
  #0D080A;
```

### Gradient Rules

-   Keep opacity low.
-   Use burgundy as ambient light.
-   Avoid hard or obvious gradient boundaries.
-   Do not use blue or purple.
-   Do not turn the entire background bright red.
-   Gradients should support the artwork rather than compete with it.

------------------------------------------------------------------------

## Light Mode Background Gradient

Recommended concept:

``` css
background:
  radial-gradient(
    circle at 80% 15%,
    rgba(110, 30, 42, 0.08),
    transparent 32%
  ),
  #F4EFE8;
```

Light-mode gradients should be significantly more subtle than dark-mode
gradients.

------------------------------------------------------------------------

# 6. Burgundy Gradient Hierarchy

The primary color progression is:

``` text
#9B2F3D
    ↓
#641A27
    ↓
#53161D
    ↓
#2A0D14
    ↓
#170D10
    ↓
#0D080A
```

Conceptually:

**Accent Burgundy → Burgundy → Wine → Deep Burgundy → Near Black →
Almost Black**

This creates a more premium appearance than a simple:

**Red → Black**

gradient.

------------------------------------------------------------------------

# 7. Character Color System

The three anime-style versions of the person should NOT be fully
burgundy.

The character needs a neutral base so that the figure works naturally in
both themes.

  Character Element   Recommended Color
  ------------------- -------------------
  Hair                `#090708`
  Clothing Base       `#111014`
  Deep Shadow         `#070506`
  Skin Highlights     `#F0D8CC`
  Burgundy Accent     `#641A27`

### Character Principles

The character should primarily use:

-   Near-black hair
-   Charcoal/black clothing
-   Natural warm skin
-   Deep neutral shadows
-   Subtle burgundy reflected light

Burgundy can appear in:

-   Rim lighting
-   Clothing details
-   Reflections
-   Environmental light
-   Small accessories
-   Cinematic shadows

This keeps the character visually compatible with both themes.

------------------------------------------------------------------------

# 8. Character + Dark Mode

Against the `#0D080A` background, the character should be separated
using:

-   Warm skin highlights
-   Subtle ivory highlights
-   Burgundy rim lighting
-   Controlled shadows
-   Slight tonal differences between hair, clothing, and background

The character should not disappear into the background.

Avoid adding excessive glow just to create separation.

------------------------------------------------------------------------

# 9. Character + Light Mode

Against the `#F4EFE8` background, the character's dark silhouette
naturally provides contrast.

The same character artwork should remain usable without needing a
completely different color scheme.

This is a key requirement of the portfolio's visual system.

------------------------------------------------------------------------

# 10. Typography Color Hierarchy

## Dark Mode

``` text
Primary Text     #F4EDE4
Secondary Text   #BBA9A0
Muted Text       #806D67
Accent           #9B2F3D
```

## Light Mode

``` text
Primary Text     #1A0D10
Secondary Text   #5F4C47
Muted Text       #88756E
Accent           #53161D
```

Do not use pure white for all dark-mode text.

Do not use pure black for all light-mode text.

The slightly warm tones maintain the editorial aesthetic.

------------------------------------------------------------------------

# 11. Border and Divider System

## Dark Mode

Primary border:

``` text
#4A252C
```

Use with low visual weight.

Recommended opacity when used as an overlay:

``` text
0.5–0.8
```

## Light Mode

Primary border:

``` text
#CBBAB0
```

Borders should remain subtle.

Avoid thick card outlines unless a specific design element requires
them.

------------------------------------------------------------------------

# 12. Texture

A very subtle film-grain/noise texture can be applied globally.

Recommended opacity:

``` text
0.025–0.045
```

The texture should be barely perceptible.

Purpose:

-   Reduce the sterile appearance of digital gradients
-   Add cinematic/editorial character
-   Help bridge photography and anime artwork
-   Prevent large surfaces from feeling unnaturally flat

Do not make the grain visibly noisy.

------------------------------------------------------------------------

# 13. Three-Page Visual Color Direction

## Page 01 --- Front Portrait

Primary composition:

**Front-facing portrait from approximately the stomach upward.**

Recommended visual treatment:

-   Dark or ivory environment depending on theme
-   Strong silhouette
-   Subtle burgundy atmospheric lighting
-   Warm ivory skin highlights
-   Near-black hair/clothing
-   High contrast
-   Minimal surrounding decoration

The first page should communicate:

> **Identity and presence.**

------------------------------------------------------------------------

## Page 02 --- Camera

Character positioned on the **left side**.

Composition:

``` text
[ CHARACTER + CAMERA ]  →  [ CONTENT ]
```

The character should look toward the content.

Use burgundy selectively around:

-   Camera
-   Lens reflections
-   Lighting
-   Small graphic accents

The camera should remain visually identifiable without becoming a bright
colored object.

The second page should communicate:

> **Creative work and visual storytelling.**

------------------------------------------------------------------------

## Page 03 --- Walking Away

Character positioned on the **right side**.

Composition:

``` text
[ CONTENT ]  →  [ CHARACTER ]
```

Character details:

-   Back-facing
-   Walking inward
-   Left hand raised in a goodbye wave
-   Right hand in pocket

The character should visually feel as though they are moving deeper into
the page.

The third page should communicate:

> **Departure / conclusion / personality.**

------------------------------------------------------------------------

# 14. Colors to Avoid

Do not introduce these as primary design colors:

``` text
#FF0000
#FF1744
#FF0055
#7B2CFF
#6C63FF
#00BFFF
```

Avoid:

-   Neon blue
-   Neon purple
-   Cyan
-   Electric gradients
-   Generic blue-purple AI gradients
-   Excessive red glow
-   Pure-white backgrounds
-   Pure-black backgrounds everywhere

The portfolio should not resemble a generic AI-generated developer
portfolio.

------------------------------------------------------------------------

# 15. Design Rules

### Rule 1 --- Burgundy is the identity

Burgundy is the recognizable color signature of the portfolio.

### Rule 2 --- Burgundy is not the background everywhere

Use it as atmosphere, accent, lighting, and selective surfaces.

### Rule 3 --- Near-black provides depth

Use warm near-black rather than pure black wherever possible.

### Rule 4 --- Ivory replaces white

Warm ivory is the foundation of light mode and the primary highlight
color of dark mode.

### Rule 5 --- Characters remain neutral

Do not recolor the entire anime character burgundy.

### Rule 6 --- Gradients remain subtle

Gradients should feel like lighting, not decorative blobs.

### Rule 7 --- No blue/purple tech aesthetic

The portfolio's visual language should remain distinctly
burgundy/editorial.

### Rule 8 --- Maintain the same identity in both modes

Dark and light modes should feel like two versions of the same
portfolio, not two unrelated themes.

------------------------------------------------------------------------

# 16. Final Design Identity

``` text
PRIMARY IDENTITY
Burgundy Noir

SUPPORTING IDENTITY
Ivory Editorial

CHARACTER STYLE
Cinematic Anime

OVERALL FEEL
Minimal Luxury

PRIMARY DARK
#0D080A

PRIMARY LIGHT
#F4EFE8

PRIMARY BURGUNDY
#641A27

ACCENT BURGUNDY
#9B2F3D

LIGHT-MODE BURGUNDY
#6E1E2A

PRIMARY DARK TEXT
#F4EDE4

PRIMARY LIGHT TEXT
#1A0D10
```

## Final Palette Decision

**This color system is locked as the portfolio's visual foundation.**

Any future character artwork, UI components, gradients, animations,
illustrations, icons, typography, and page layouts should be designed to
work within this color system unless a deliberate exception is
introduced.

The next design phase should focus on the **anime character art
direction and the three specific poses**, while preserving this palette.
