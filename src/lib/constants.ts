/* ─────────────────────────────────────────────────────────────
   Site-wide constants — structural/non-translatable data only.
   All user-facing strings live in messages/en.json & messages/es.json
───────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Golden Rooster",
  fullName: "Golden Rooster Construction",
  phone: "(800) 543-3862",
  phoneHref: "tel:+18005433862",
  email: "info@goldenroostersroofing.com",
  emailHref: "mailto:info@goldenroostersroofing.com",
  address: {
    street: "1234 Industrial Blvd",
    city: "Houston",
    state: "TX",
    zip: "77001",
    full: "1234 Industrial Blvd, Houston, TX 77001",
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
  license: "License #TX-54892 | Fully Insured",
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
    ],
  },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

/* ─────────────────────────────────────
   Services — structural only, text in messages/services.items.*
───────────────────────────────────── */
export const SERVICES = [
  { id: "wood-framing", icon: "Hammer", color: "from-primary-dark to-primary" },
  { id: "metal-roofing", icon: "HardHat", color: "from-accent-dark to-accent" },
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
  { id: 1, image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80", year: "2023", location: "Houston, TX", category: "Commercial" },
  { id: 2, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", year: "2023", location: "Dallas, TX", category: "Industrial" },
  { id: 3, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80", year: "2022", location: "Austin, TX", category: "Residential" },
  { id: 4, image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80", year: "2022", location: "San Antonio, TX", category: "Commercial" },
  { id: 5, image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80", year: "2022", location: "Austin, TX", category: "Commercial" },
  { id: 6, image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80", year: "2021", location: "Houston, TX", category: "Industrial" },
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
  { id: 1,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.25%20PM.mp4` },
  { id: 2,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.25%20PM(1).mp4` },
  { id: 3,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.25%20PM(2).mp4` },
  { id: 4,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.25%20PM(3).mp4` },
  { id: 5,  src: `${R2}/WhatsApp%20Video%202026-03-13%20at%2012.28.26%20PM.mp4` },
  { id: 6,  src: `${R2}/WhatsApp%20Video%202026-04-08%20at%204.51.48%20PM(1).mp4` },
  { id: 7,  src: `${R2}/WhatsApp%20Video%202026-04-08%20at%204.51.49%20PM(1).mp4` },
  { id: 8,  src: `${R2}/WhatsApp%20Video%202026-04-08%20at%204.51.49%20PM.mp4` },
  { id: 9,  src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.04.57%20PM.mp4` },
  { id: 10, src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.07.10%20PM.mp4` },
  { id: 11, src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.12.16%20PM.mp4` },
  { id: 12, src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.17.26%20PM.mp4` },
  { id: 13, src: `${R2}/WhatsApp%20Video%202026-04-09%20at%205.18.12%20PM.mp4` },
];

/* ─────────────────────────────────────
   Team — structural data, roles/bios in messages/about.team.members[i]
───────────────────────────────────── */
export const TEAM = [
  { name: "Guillermo Andrade Moncada", avatar: "/dueño.png" },
  { name: "Iván Said Rodriguez Mauricio", avatar: "/gerente.png" },
  { name: "Michael Torres", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { name: "Lisa Thompson", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
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
  ],
};
