/* ─────────────────────────────────────────────────────────────
   Site-wide constants — structural/non-translatable data only.
   All user-facing strings live in messages/en.json & messages/es.json
───────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Golden Rooster",
  fullName: "Golden Rooster Construction",
  phone: "(800) 543-3862",
  phoneHref: "tel:+18005433862",
  phoneEngineer: "(720) 663-4136",
  phoneEngineerHref: "tel:+17206634136",
  whatsappEngineerNumber: "17206634136",
  email: "info@goldenroostersroofing.com",
  emailHref: "mailto:info@goldenroostersroofing.com",
  emailAlt: "rodma15@goldenroostersroofing.com",
  emailAltHref: "mailto:rodma15@goldenroostersroofing.com",
  whatsappNumber: "18005433862",
  address: {
    street: "336 Wheatberry Dr",
    city: "Brighton",
    state: "CO",
    zip: "80601",
    full: "336 Wheatberry Dr, Brighton, CO 80601",
  },
  hours: {
    weekdays: "Monday – Friday: 7:00 AM – 6:00 PM",
    saturday: "Saturday: 8:00 AM – 1:00 PM",
    sunday: "Sunday: Closed",
  },
  social: {
    facebook: "https://facebook.com/goldenroostersroofing",
    instagram: "https://instagram.com/goldenroostersroofing",
    linkedin: "https://linkedin.com/company/goldenroostersroofing",
    youtube: "https://youtube.com/@goldenroostersroofing",
  },
  license: "License #CO-54892 | Fully Insured",
};

/* ─────────────────────────────────────
   Navigation — hrefs only, labels in messages/nav.*
───────────────────────────────────── */
export const NAV_LINKS = [
  { href: "/", key: "home" },
  {
    href: "/services",
    key: "services",
    dropdown: [
      { href: "/services#wood-framing", key: "woodFraming" },
      { href: "/services#metal-roofing", key: "metalRoofing" },
      { href: "/services#dry-wall", key: "dryWall" },
      { href: "/services#remodeling", key: "remodeling" },
      { href: "/services#steel-frame", key: "steelFrame" },
      { href: "/services#roofing", key: "roofing" },
      { href: "/services#siding", key: "siding" },
    ],
  },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

/* ─────────────────────────────────────
   Services — structural only, text in messages/services.items.*
───────────────────────────────────── */
export const SERVICES = [
  { id: "wood-framing",  icon: "Hammer",    color: "from-primary-dark to-primary",  image: "/thumbnails/video-9.jpg", videoId: 9 },
  { id: "metal-roofing", icon: "HardHat",   color: "from-accent-dark to-accent",    image: "/thumbnails/video-1.jpg", videoId: 1 },
  { id: "dry-wall",      icon: "Layers",    color: "from-steel-dark to-steel",       image: "/thumbnails/video-8.jpg", videoId: 8 },
  { id: "remodeling",    icon: "Wrench",    color: "from-primary to-primary-light",  image: "/thumbnails/video-6.jpg", videoId: 6 },
  { id: "steel-frame",   icon: "Building2", color: "from-steel to-primary",          image: "/thumbnails/video-4.jpg", videoId: 4 },
  { id: "roofing",       icon: "Home",      color: "from-accent-dark to-accent",     image: "/thumbnails/video-3.jpg", videoId: 3 },
  { id: "siding",        icon: "Grid3X3",   color: "from-steel-dark to-primary",     image: "/thumbnails/video-7.jpg", videoId: 7 },
];

/* ─────────────────────────────────────
   Statistics — values only, labels in messages/stats.items[i].label
───────────────────────────────────── */
export const STATS = [
  { value: 25, suffix: "+", icon: "Award" },
  { value: 2500, suffix: "+", icon: "CheckCircle2" },
  { value: 98, suffix: "%", icon: "Star" },
  { value: 50, suffix: "+", icon: "Users" },
];

/* ─────────────────────────────────────
   Why Choose Us — icons only, text in messages/whyUs.items[i]
───────────────────────────────────── */
export const WHY_US_ICONS = [
  "Shield",
  "Gem",
  "HardHat",
  "FileCheck",
  "Clock",
  "HeartHandshake",
];

/* ─────────────────────────────────────
   Projects — structural data, text in messages/projects.items[i]
───────────────────────────────────── */
export const PROJECTS = [
  { id: 1, image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80", year: "2023", location: "Denver, CO", category: "Commercial" },
  { id: 2, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", year: "2023", location: "Cheyenne, WY", category: "Industrial" },
  { id: 3, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80", year: "2022", location: "Omaha, NE", category: "Residential" },
  { id: 4, image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80", year: "2022", location: "Colorado Springs, CO", category: "Commercial" },
  { id: 5, image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80", year: "2022", location: "Sacramento, CA", category: "Commercial" },
  { id: 6, image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80", year: "2021", location: "Brighton, CO", category: "Industrial" },
];

/* ─────────────────────────────────────
   Testimonials — structural data, text in messages/testimonials.items[i]
───────────────────────────────────── */
export const TESTIMONIALS = [
  { id: 1, name: "Robert Hargrove", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80", rating: 5 },
  { id: 2, name: "Maria Castellanos", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80", rating: 5 },
  { id: 3, name: "David Chen", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80", rating: 5 },
];

/* ─────────────────────────────────────
   Project Videos — hosted on Cloudflare R2
───────────────────────────────────── */
const R2 = "https://pub-3c6a5eb70ab14c668f7c32ed2c20072f.r2.dev/videos";

export const PROJECT_VIDEOS = [
  { id: 1,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.25%20PM.mp4`,    poster: "/thumbnails/video-1.jpg" },
  { id: 2,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.25%20PM(1).mp4`, poster: "/thumbnails/video-2.jpg" },
  { id: 3,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.25%20PM(2).mp4`, poster: "/thumbnails/video-3.jpg" },
  { id: 4,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.25%20PM(3).mp4`, poster: "/thumbnails/video-4.jpg" },
  { id: 5,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.26%20PM.mp4`,    poster: "/thumbnails/video-5.jpg" },
  { id: 6,  src: `${R2}/WhatsApp%20Video%202026-04-08%20at%204.51.48%20PM(1).mp4`,  poster: "/thumbnails/video-6.jpg" },
  { id: 7,  src: `${R2}/WhatsApp%20Video%202026-04-08%20at%204.51.49%20PM(1).mp4`,  poster: "/thumbnails/video-7.jpg" },
  { id: 8,  src: `${R2}/WhatsApp%20Video%202026-04-08%20at%204.51.49%20PM.mp4`,     poster: "/thumbnails/video-8.jpg" },
  { id: 9,  src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.04.57%20PM.mp4`,     poster: "/thumbnails/video-9.jpg" },
  { id: 10, src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.07.10%20PM.mp4`,     poster: "/thumbnails/video-10.jpg" },
  { id: 11, src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.12.16%20PM.mp4`,     poster: "/thumbnails/video-11.jpg" },
  { id: 12, src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.17.26%20PM.mp4`,     poster: "/thumbnails/video-12.jpg" },
  { id: 13, src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.18.12%20PM.mp4`,     poster: "/thumbnails/video-13.jpg" },
];

/* ─────────────────────────────────────
   Team — structural data, roles/bios in messages/about.team.members[i]
───────────────────────────────────── */
export const TEAM = [
  { name: "Iván Said Rodriguez Mauricio", avatar: "/gerente.png" },
  { name: "Guillermo Andrade Moncada", avatar: "/dueño.png" },
];

/* ─────────────────────────────────────
   Values — icons only, text in messages/about.values.items[i]
───────────────────────────────────── */
export const VALUES_ICONS = ["Gem", "Scale", "ShieldCheck", "HeartHandshake", "Medal", "TrendingUp"];

/* ─────────────────────────────────────
   Footer Links — hrefs only, labels in messages/footer.links.*
───────────────────────────────────── */
export const FOOTER_LINKS = {
  company: [
    { href: "/about", key: "about" },
    { href: "/about#team", key: "team" },
    { href: "/about#values", key: "values" },
    { href: "/contact", key: "careers" },
  ],
  services: [
    { href: "/services#wood-framing", key: "woodFraming" },
    { href: "/services#metal-roofing", key: "metalRoofing" },
    { href: "/services#dry-wall", key: "dryWall" },
    { href: "/services#remodeling", key: "remodeling" },
    { href: "/services#steel-frame", key: "steelFrame" },
    { href: "/services#roofing", key: "roofing" },
    { href: "/services#siding", key: "siding" },
  ],
};
