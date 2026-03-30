/* ─────────────────────────────────────────────────────────────
   Site-wide constants — edit here to update content globally
───────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Golden Rooster",
  fullName: "Golden Rooster Construction",
  tagline: "Built Strong. Roofed Right.",
  description:
    "Golden Rooster Construction — professional wood framing and metal roofing services for residential and commercial projects. Quality work, honest pricing, results you can count on.",
  phone: "(800) 543-3862",
  phoneHref: "tel:+18005433862",
  email: "info@sheetmetalservices.com",
  emailHref: "mailto:info@sheetmetalservices.com",
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
    facebook: "https://facebook.com/sheetmetalservices",
    instagram: "https://instagram.com/sheetmetalservices",
    linkedin: "https://linkedin.com/company/sheetmetalservices",
    youtube: "https://youtube.com/@sheetmetalservices",
  },
  license: "License #TX-54892 | Fully Insured",
};

/* ─────────────────────────────────────
   Navigation
───────────────────────────────────── */
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services#wood-framing", label: "Wood Framing" },
      { href: "/services#metal-roofing", label: "Metal Roofing — Repair & Remodeling" },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

/* ─────────────────────────────────────
   Services
───────────────────────────────────── */
export const SERVICES = [
  {
    id: "wood-framing",
    icon: "Hammer",
    title: "Wood Framing",
    description:
      "At Golden Rooster Construction, we specialize in professional wood framing for both residential and commercial projects. Whether you're building a new home, a multi-unit development, or a commercial facility, our skilled framing crews deliver precise, code-compliant structures built to last.\n\nWe work closely with contractors, developers, and homeowners from the earliest stages of construction — ensuring every wall, floor system, and roof structure is framed with accuracy, efficiency, and craftsmanship. From simple single-family homes to complex commercial builds, Golden Rooster has the experience and manpower to get your project framed right, on time, and within budget.",
    features: [
      "Residential wood framing (new construction)",
      "Commercial wood framing (offices, retail, warehouses, multi-family)",
      "Structural framing & load-bearing wall systems",
      "Floor & ceiling joist framing",
      "Custom and complex architectural framing",
    ],
    color: "from-primary-dark to-primary",
  },
  {
    id: "metal-roofing",
    icon: "HardHat",
    title: "Metal Roofing — Repair & Remodeling",
    description:
      "A damaged or aging roof is more than an inconvenience — it's a risk to your entire property. Golden Rooster's metal roofing team provides expert repair and remodeling services for both residential and commercial buildings, restoring the integrity, performance, and appearance of your roof with quality materials and proven techniques.\n\nWhether you're dealing with leaks, storm damage, worn panels, or simply looking to upgrade to a more durable and energy-efficient metal roofing system, Golden Rooster brings the skills and attention to detail your property deserves.",
    features: [
      "Metal roof inspection & damage assessment",
      "Leak repair and panel replacement",
      "Full metal roof remodeling & retrofitting",
      "Re-roofing over existing structures",
      "Gutters, flashing & trim work",
      "Residential & commercial metal roofing solutions",
    ],
    color: "from-accent-dark to-accent",
  },
];

/* ─────────────────────────────────────
   Statistics
───────────────────────────────────── */
export const STATS = [
  { value: 25, suffix: "+", label: "Years in Business", icon: "Award" },
  { value: 2500, suffix: "+", label: "Projects Completed", icon: "CheckCircle2" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "Star" },
  { value: 50, suffix: "+", label: "Expert Team Members", icon: "Users" },
];

/* ─────────────────────────────────────
   Why Choose Us
───────────────────────────────────── */
export const WHY_US = [
  {
    icon: "Shield",
    title: "The Golden Rooster Guarantee",
    description:
      "When you see the Golden Rooster, you know the job will be done right. Our name is our commitment on every single project.",
  },
  {
    icon: "Gem",
    title: "Quality Work, Always",
    description:
      "We hold ourselves to the highest standards of craftsmanship — whether framing a wall or restoring a roof, we never cut corners.",
  },
  {
    icon: "HardHat",
    title: "Residential & Commercial",
    description:
      "From single-family homes to large commercial facilities, we bring the same level of skill, dedication, and precision to every project type.",
  },
  {
    icon: "FileCheck",
    title: "Honest, Transparent Pricing",
    description:
      "No surprises, no hidden costs. We provide clear, detailed estimates so you always know exactly what you're paying for.",
  },
  {
    icon: "Clock",
    title: "On Schedule, Within Budget",
    description:
      "We understand that time is money in construction. Our crews are organized to deliver on time and within the agreed budget — every time.",
  },
  {
    icon: "HeartHandshake",
    title: "Any Scale, Any State",
    description:
      "We proudly serve residential and commercial clients across multiple states, with the hands-on dedication and capacity to handle projects of any scale.",
  },
];

/* ─────────────────────────────────────
   Projects Gallery
───────────────────────────────────── */
export const PROJECTS = [
  {
    id: 1,
    title: "Westfield Corporate Center",
    category: "Commercial",
    location: "Houston, TX",
    description: "150,000 sq ft standing seam metal roof system with custom flashings and integrated solar-ready panels.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
    year: "2023",
  },
  {
    id: 2,
    title: "Riverside Industrial Park",
    category: "Industrial",
    location: "Dallas, TX",
    description: "R-panel metal roofing and full wall cladding system for 4-building industrial complex.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    year: "2023",
  },
  {
    id: 3,
    title: "Oakwood Residence",
    category: "Residential",
    location: "Austin, TX",
    description: "Custom standing seam residential roof with integrated gutters and decorative metal trim package.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    year: "2022",
  },
  {
    id: 4,
    title: "Metro Distribution Hub",
    category: "Commercial",
    location: "San Antonio, TX",
    description: "High-performance insulated metal panel system engineered for extreme thermal performance.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    year: "2022",
  },
  {
    id: 5,
    title: "Summit Tech Campus",
    category: "Commercial",
    location: "Austin, TX",
    description: "Architectural metal façade and roofing system for a 3-building corporate tech campus.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    year: "2022",
  },
  {
    id: 6,
    title: "Clearwater Manufacturing",
    category: "Industrial",
    location: "Houston, TX",
    description: "Complete metal re-roofing of 80,000 sq ft manufacturing facility with ventilation systems.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
    year: "2021",
  },
];

/* ─────────────────────────────────────
   Testimonials
───────────────────────────────────── */
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Robert Hargrove",
    title: "VP of Facilities",
    company: "BuildCorp International",
    rating: 5,
    text: "Sheet Metal has been our trusted roofing partner for over a decade. Their precision work on our 12-building corporate campus was outstanding — on time, on budget, and flawless quality. We wouldn't use anyone else.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    name: "Maria Castellanos",
    title: "Property Manager",
    company: "Skyline Real Estate Group",
    rating: 5,
    text: "They handled a complex re-roofing project on our 200-unit mixed-use development with zero disruption to tenants. The communication throughout was exceptional. I highly recommend Sheet Metal to any property owner.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "David Chen",
    title: "Principal Architect",
    company: "Chen + Partners Architecture",
    rating: 5,
    text: "As an architect, I demand precision and design integrity. Sheet Metal consistently delivers both. Their custom fabrication capabilities allow us to execute designs that other contractors simply couldn't achieve.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
  },
];

/* ─────────────────────────────────────
   Team
───────────────────────────────────── */
export const TEAM = [
  {
    name: "Guillermo Andrade Moncada",
    title: "Owner & Founder",
    bio: "25+ years of industry leadership, pioneering precision metal systems across the Southwest.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Iván Said Rodriguez Mauricio",
    title: "General Manager",
    bio: "Master of project logistics, ensuring every job is delivered on time with zero compromises.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Torres",
    title: "Lead Fabricator",
    bio: "25 years of hands-on metal craftsmanship; the precision behind every custom panel we produce.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lisa Thompson",
    title: "Senior Project Manager",
    bio: "PMP-certified with expertise in complex commercial and institutional metal roofing projects.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];

/* ─────────────────────────────────────
   Mission & Vision
───────────────────────────────────── */
export const MISSION =
  "To deliver exceptional wood framing and metal roofing solutions with precision, reliability, and craftsmanship — building structures that stand the test of time while exceeding our clients' expectations on every project, on schedule, and within budget.";

export const VISION =
  "To become the most trusted and sought-after framing and metal roofing contractor in our region — recognized for our unwavering commitment to quality, our skilled team, and our ability to transform every client's vision into a durable, lasting reality.";

/* ─────────────────────────────────────
   Company Values
───────────────────────────────────── */
export const VALUES = [
  {
    icon: "Gem",
    title: "Quality Without Compromise",
    description:
      "We hold ourselves to the highest standards of craftsmanship in every wood frame we build and every metal roof we install. Quality is not the exception — it is the foundation of everything we do.",
  },
  {
    icon: "Scale",
    title: "Integrity & Honesty",
    description:
      "We operate with full transparency in our estimates, timelines, and communication. Our clients can always count on us to be straightforward, accountable, and dependable — from the first conversation to the final nail.",
  },
  {
    icon: "ShieldCheck",
    title: "Safety First",
    description:
      "The well-being of our team and the people who will live and work in the structures we build is our top priority. We follow strict safety protocols on every job site, without exception.",
  },
  {
    icon: "HeartHandshake",
    title: "Client Partnership",
    description:
      "We don't just complete projects — we build relationships. We listen, collaborate, and work alongside our clients to ensure their goals are met and their investment is protected.",
  },
  {
    icon: "Medal",
    title: "Excellence in Execution",
    description:
      "We take pride in getting the job done right the first time. Through skilled labor, careful planning, and attention to detail, we deliver results that speak for themselves.",
  },
  {
    icon: "TrendingUp",
    title: "Growth & Innovation",
    description:
      "As a growing company, we are committed to continuous improvement — embracing new techniques, materials, and industry best practices to better serve our clients and strengthen our team.",
  },
];

/* ─────────────────────────────────────
   Footer Links
───────────────────────────────────── */
export const FOOTER_LINKS = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/about#team", label: "Our Team" },
    { href: "/about#values", label: "Our Values" },
    { href: "/contact", label: "Careers" },
  ],
  services: [
    { href: "/services#wood-framing", label: "Wood Framing" },
    { href: "/services#metal-roofing", label: "Metal Roofing" },
  ],
};
