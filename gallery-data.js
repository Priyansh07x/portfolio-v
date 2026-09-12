/* ==========================================================================
   GALLERY DATA
   Cloudinary-hosted Portfolio Work of Priyansh Namdeo
   ========================================================================== */

const GALLERY_ITEMS = [
  /* =========================================================================
     1. PHOTOGRAPHY — SUNSETS
     ========================================================================= */
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216207/IMG_20250411_175136.jpg",
    title: "Golden Hour Glow",
    date: "2025-04-11",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216203/IMG_20250208_174807.jpg",
    title: "February Horizon",
    date: "2025-02-08",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216199/IMG_20250606_185413.jpg",
    title: "Summer Twilight",
    date: "2025-06-06",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216197/IMG_20250908_184236.jpg",
    title: "September Sunset",
    date: "2025-09-08",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216197/IMG_20250706_190338.jpg",
    title: "July Dusk",
    date: "2025-07-06",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216196/IMG_20250612_191615.jpg",
    title: "Evening Hue",
    date: "2025-06-12",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216196/IMG_20250317_181416.jpg",
    title: "Spring Sunset",
    date: "2025-03-17",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216195/IMG_20250522_184326.jpg",
    title: "May Horizon",
    date: "2025-05-22",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216195/IMG_20250531_180436.jpg",
    title: "Dusk Warmth",
    date: "2025-05-31",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216194/IMG_20250429_175952.jpg",
    title: "Amber Skyline",
    date: "2025-04-29",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216194/IMG_20250508_182920.jpg",
    title: "Scatterness",
    date: "2025-05-08",
    category: "photography",
    subcategory: "sunsets",
    featured: true
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216193/IMG_20250411_185730.jpg",
    title: "Crimson Evening",
    date: "2025-04-11",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216193/IMG_20250428_173833.jpg",
    title: "Golden Hour Glow II",
    date: "2025-04-28",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216191/IMG_20250908_184355.jpg",
    title: "Radiant Sky",
    date: "2025-09-08",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216191/IMG_20250411_175113.jpg",
    title: "Vivid Sundown",
    date: "2025-04-11",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216191/IMG_20250128_181639.jpg",
    title: "Winter Sunset II",
    date: "2025-01-28",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216190/IMG_20250128_181543.jpg",
    title: "Winter Sunset I",
    date: "2025-01-28",
    category: "photography",
    subcategory: "sunsets",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216190/IMG_20250219_173244.jpg",
    title: "Sunset View",
    date: "2025-02-19",
    category: "photography",
    subcategory: "sunsets",
    featured: true
  },

  /* =========================================================================
     1. PHOTOGRAPHY — CLOUDS
     ========================================================================= */
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216415/IMG_20250913_114609.jpg",
    title: "Towering Nimbus",
    date: "2025-09-13",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216415/IMG_20260619_181324.jpg",
    title: "Monsoon Veil II",
    date: "2026-06-19",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216414/IMG_20260619_181257.jpg",
    title: "Monsoon Veil I",
    date: "2026-06-19",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216409/IMG_20251004_135307.jpg",
    title: "Autumn Clouds",
    date: "2025-10-04",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216408/IMG_20250428_160321.jpg",
    title: "Drifting Cirrus",
    date: "2025-04-28",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216405/IMG_20251007_154213.jpg",
    title: "Storm Horizon",
    date: "2025-10-07",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216404/IMG_20250219_170440.jpg",
    title: "Soft Cloudscape",
    date: "2025-02-19",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216404/IMG_20251002_115114.jpg",
    title: "Midday Cloud Layer",
    date: "2025-10-02",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216402/IMG_20250927_104110.jpg",
    title: "Silver Lining I",
    date: "2025-09-27",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216402/IMG_20250531_172134.jpg",
    title: "May Cloud Formation",
    date: "2025-05-31",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216401/IMG_20251004_163006.jpg",
    title: "Overcast Drama",
    date: "2025-10-04",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216399/IMG_20250927_104112.jpg",
    title: "Silver Lining II",
    date: "2025-09-27",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216398/IMG_20250912_175552.jpg",
    title: "Clouds over the campus",
    date: "2025-09-12",
    category: "photography",
    subcategory: "clouds",
    featured: true
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216397/IMG_20250912_180526.jpg",
    title: "Campus Weather",
    date: "2025-09-12",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216397/IMG_20251004_163459.jpg",
    title: "October Cumulus",
    date: "2025-10-04",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216396/IMG_20250625_164331.jpg",
    title: "Summer Thunderhead",
    date: "2025-06-25",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216395/IMG_20250617_093448.jpg",
    title: "Morning Stratus",
    date: "2025-06-17",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216395/IMG_20250602_060102.jpg",
    title: "Dawn Cloudscape",
    date: "2025-06-02",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216395/IMG_20250531_170850.jpg",
    title: "Vast Horizons",
    date: "2025-05-31",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216393/IMG_20250616_094813.jpg",
    title: "Sky Whispers",
    date: "2025-06-16",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216392/IMG_20250508_182909.jpg",
    title: "Golden Cloud Edges",
    date: "2025-05-08",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216391/IMG_20250403_182858.jpg",
    title: "Spring Storm Front",
    date: "2025-04-03",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216391/IMG_20250429_130132.jpg",
    title: "Noon Formations",
    date: "2025-04-29",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216391/IMG_20251206_171130.jpg",
    title: "Winter Cloud Cover",
    date: "2025-12-06",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216391/IMG_20250219_170504.jpg",
    title: "Dusk Cloud Drift",
    date: "2025-02-19",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216390/IMG_20250105_180132.jpg",
    title: "January Cloud Trails",
    date: "2025-01-05",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216389/IMG_20260405_175058.jpg",
    title: "Rolling Storm Front",
    date: "2026-04-05",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216386/IMG_20251004_163424.jpg",
    title: "Lovely clouds",
    date: "2025-10-04",
    category: "photography",
    subcategory: "clouds",
    featured: true
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216386/IMG_20251002_170119.jpg",
    title: "October Light & Shadows",
    date: "2025-10-02",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216385/IMG_20251002_114049.jpg",
    title: "Sky Dynamics",
    date: "2025-10-02",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216385/IMG_20250819_134157.jpg",
    title: "Late Summer Atmosphere II",
    date: "2025-08-19",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216384/IMG_20250819_130107.jpg",
    title: "Late Summer Atmosphere I",
    date: "2025-08-19",
    category: "photography",
    subcategory: "clouds",
    featured: false
  },

  /* =========================================================================
     1. PHOTOGRAPHY — MOON
     ========================================================================= */
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216528/IMG_20251031_173657.jpg",
    title: "Dusk Moon",
    date: "2025-10-31",
    category: "photography",
    subcategory: "moon",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216527/IMG_20250506_191100.jpg",
    title: "Moon",
    date: "2025-05-06",
    category: "photography",
    subcategory: "moon",
    featured: true
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216526/IMG_20250111_191407.jpg",
    title: "Winter Moon Silhouette",
    date: "2025-01-11",
    category: "photography",
    subcategory: "moon",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216525/IMG_20251003_180509.jpg",
    title: "Crescent in October",
    date: "2025-10-03",
    category: "photography",
    subcategory: "moon",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216524/IMG_20251002_215756.jpg",
    title: "Night Sky Solitude",
    date: "2025-10-02",
    category: "photography",
    subcategory: "moon",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216522/IMG_20250605_010055.jpg",
    title: "Midnight Lunar Glow",
    date: "2025-06-05",
    category: "photography",
    subcategory: "moon",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216521/IMG_20250414_221646.jpg",
    title: "Spring Moon Detail",
    date: "2025-04-14",
    category: "photography",
    subcategory: "moon",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216521/IMG_20241114_203949.jpg",
    title: "November Lunar Gaze",
    date: "2024-11-14",
    category: "photography",
    subcategory: "moon",
    featured: false
  },
  {
    type: "photo",
    src: "https://res.cloudinary.com/udzwnarl/image/upload/v1789216521/IMG_20250213_192458.jpg",
    title: "Waxing Moon",
    date: "2025-02-13",
    category: "photography",
    subcategory: "moon",
    featured: false
  },

  /* =========================================================================
     2. VIDEO — GDG WORK
     ========================================================================= */
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217352/lv_0_20250130014935.mp4",
    title: "GDG Kickoff Reel",
    date: "2025-01-30",
    category: "video",
    subcategory: "gdg",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217332/lv_0_20250914202343.mp4",
    title: "GDG Tech Highlight",
    date: "2025-09-14",
    category: "video",
    subcategory: "gdg",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217325/lv_0_20251128003846.mp4",
    title: "GDG Community Showcase",
    date: "2025-11-28",
    category: "video",
    subcategory: "gdg",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217322/lv_0_20250201234401.mp4",
    title: "GDG DevFest Recap",
    date: "2025-02-01",
    category: "video",
    subcategory: "gdg",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217317/lv_0_20250923234505.mp4",
    title: "GDG Workshop Teaser",
    date: "2025-09-23",
    category: "video",
    subcategory: "gdg",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217311/lv_0_20251216173428.mp4",
    title: "GDG Speaker Promo",
    date: "2025-12-16",
    category: "video",
    subcategory: "gdg",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217293/lv_0_20251209011326.mp4",
    title: "GDG Annual Wrap Cut",
    date: "2025-12-09",
    category: "video",
    subcategory: "gdg",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217288/lv_0_20251215181833.mp4",
    title: "GDG Aftermovie Edit",
    date: "2025-12-15",
    category: "video",
    subcategory: "gdg",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217275/SOMETHING_1.mp4",
    title: "GDG Special Feature",
    date: "2025-10-01",
    category: "video",
    subcategory: "gdg",
    featured: false
  },

  /* =========================================================================
     2. VIDEO — ACM WORK
     ========================================================================= */
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217494/video_260626_131450.mp4",
    title: "ACM Chapter Teaser",
    date: "2026-06-26",
    category: "video",
    subcategory: "acm",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217480/lv_0_20260820184813.mp4",
    title: "ACM Hackathon Reel",
    date: "2026-08-20",
    category: "video",
    subcategory: "acm",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217468/ACM_edit_maria_maam.mp4",
    title: "ACM Maria Ma'am Tribute",
    date: "2025-08-15",
    category: "video",
    subcategory: "acm",
    featured: false
  },

  /* =========================================================================
     2. VIDEO — RANDOM (Edits Made by Me)
     ========================================================================= */
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217167/lv_0_20251120182753.mp4",
    title: "Cinematic Cut 01",
    date: "2025-11-20",
    category: "video",
    subcategory: "random",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217160/lv_0_20251104184808.mp4",
    title: "Motion Vignette",
    date: "2025-11-04",
    category: "video",
    subcategory: "random",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217153/lv_0_20251117190006.mp4",
    title: "Rhythm & Frame",
    date: "2025-11-17",
    category: "video",
    subcategory: "random",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217142/lv_0_20251018211358.mp4",
    title: "Mood Reel Oct",
    date: "2025-10-18",
    category: "video",
    subcategory: "random",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217137/lv_0_20251023181452.mp4",
    title: "Real",
    date: "2025-10-23",
    category: "video",
    subcategory: "random",
    featured: true
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217137/lv_0_20251123193258.mp4",
    title: "Visual Pulse",
    date: "2025-11-23",
    category: "video",
    subcategory: "random",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217120/lv_0_20251110183603.mp4",
    title: "Perspective Shift",
    date: "2025-11-10",
    category: "video",
    subcategory: "random",
    featured: false
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/udzwnarl/video/upload/v1789217080/lv_0_20251101224921.mp4",
    title: "Nightfall Edit",
    date: "2025-11-01",
    category: "video",
    subcategory: "random",
    featured: false
  }
];

// Folder hierarchy structure definition for Pinterest/folder explorer view
const GALLERY_FOLDERS = [
  {
    id: "photography",
    title: "Photography",
    icon: "camera",
    subfolders: [
      { id: "all", title: "All Photos" },
      { id: "sunsets", title: "Sunsets" },
      { id: "clouds", title: "Clouds" },
      { id: "moon", title: "Moon" }
    ]
  },
  {
    id: "video",
    title: "Videography",
    icon: "film",
    subfolders: [
      { id: "all", title: "All Videos" },
      { id: "gdg", title: "GDG Work" },
      { id: "acm", title: "ACM Work" },
      { id: "random", title: "Random (Edits)" }
    ]
  }
];

