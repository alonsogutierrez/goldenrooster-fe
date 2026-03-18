/* ─────────────────────────────────────────────────────────────
   Site-wide constants — edit here to update content globally
───────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Sheet Metal",
  fullName: "The Golden Rooster Sheet Metal Roofing",
  tagline: "Precision in Every Panel",
  description:
    "The Golden Rooster Sheet Metal Roofing — industry-leading metal roofing, fabrication, and construction services with over 25 years of precision craftsmanship.",
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
      { href: "/services#metal-roofing", label: "Metal Roofing Systems" },
      { href: "/services#fabrication", label: "Sheet Metal Fabrication" },
      { href: "/services#gutters", label: "Gutter & Drainage" },
      { href: "/services#skylights", label: "Skylights & Ventilation" },
      { href: "/services#repairs", label: "Repairs & Maintenance" },
      { href: "/services#commercial", label: "Commercial Projects" },
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
    id: "metal-roofing",
    icon: "Building2",
    title: "Metal Roofing Systems",
    description:
      "Standing seam, R-panel, and corrugated metal roofing systems engineered for lasting protection, energy efficiency, and architectural beauty.",
    features: ["Standing Seam", "R-Panel Systems", "Corrugated Metal", "Metal Tile"],
    color: "from-blue-600 to-steel",
  },
  {
    id: "fabrication",
    icon: "Layers",
    title: "Sheet Metal Fabrication",
    description:
      "Custom-cut, bent, and finished metal components precision-crafted in our state-of-the-art facility to exact project specifications.",
    features: ["Custom Cutting", "Precision Bending", "CNC Fabrication", "On-site Forming"],
    color: "from-primary to-steel",
  },
  {
    id: "gutters",
    icon: "Droplets",
    title: "Gutter & Drainage Systems",
    description:
      "Seamless gutters, downspouts, and complete drainage solutions that protect your investment from water damage for decades to come.",
    features: ["Seamless Gutters", "Custom Downspouts", "Box Gutters", "Drainage Design"],
    color: "from-steel to-primary",
  },
  {
    id: "skylights",
    icon: "Sun",
    title: "Skylights & Ventilation",
    description:
      "Natural light and ventilation systems designed for maximum energy efficiency, comfort, and long-term structural integrity.",
    features: ["Fixed Skylights", "Vented Units", "Roof Ventilation", "Solar Tubes"],
    color: "from-amber-500 to-accent",
  },
  {
    id: "repairs",
    icon: "Wrench",
    title: "Repairs & Maintenance",
    description:
      "Fast, reliable repair and maintenance programs that extend the service life of your metal systems and prevent costly future damage.",
    features: ["Leak Repairs", "Panel Replacement", "Preventive Programs", "Emergency Service"],
    color: "from-green-600 to-steel",
  },
  {
    id: "commercial",
    icon: "Briefcase",
    title: "Commercial Projects",
    description:
      "Large-scale commercial, industrial, and institutional metal roofing and façade projects delivered on schedule and within budget.",
    features: ["Warehouses", "Office Buildings", "Industrial Facilities", "Institutional"],
    color: "from-primary-dark to-primary",
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
    title: "25+ Years of Expertise",
    description:
      "Decades of hands-on experience in commercial and residential sheet metal work across every climate and building type.",
  },
  {
    icon: "Gem",
    title: "Premium Materials Only",
    description:
      "We source exclusively from certified manufacturers, ensuring every panel, gutter, and fastener meets our strict quality standards.",
  },
  {
    icon: "HardHat",
    title: "Certified Expert Craftsmen",
    description:
      "Our OSHA-trained, manufacturer-certified team brings unrivaled precision and pride to every single project.",
  },
  {
    icon: "FileCheck",
    title: "Industry-Leading Warranty",
    description:
      "All workmanship is backed by our comprehensive warranty program, giving you complete peace of mind long after installation.",
  },
  {
    icon: "Clock",
    title: "On-Time, Every Time",
    description:
      "Meticulous project planning and seasoned project managers mean we consistently deliver on schedule without sacrificing quality.",
  },
  {
    icon: "HeartHandshake",
    title: "Dedicated Client Support",
    description:
      "From free estimate to project completion and beyond, our team is always available to answer questions and provide support.",
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
    name: "Robert A. Johnson",
    title: "Founder & CEO",
    bio: "25+ years of industry leadership, pioneering precision metal systems across the Southwest.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sarah Mitchell",
    title: "Director of Operations",
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
   Company Values
───────────────────────────────────── */
export const VALUES = [
  {
    icon: "Medal",
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every task — from site preparation to final inspection. Average is never acceptable.",
  },
  {
    icon: "Scale",
    title: "Integrity",
    description:
      "Transparent pricing, honest communication, and doing what we say we'll do. Our reputation is built one handshake at a time.",
  },
  {
    icon: "Lightbulb",
    title: "Innovation",
    description:
      "We continuously invest in the latest equipment, techniques, and materials to bring our clients the best the industry has to offer.",
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
    { href: "/services#metal-roofing", label: "Metal Roofing" },
    { href: "/services#fabrication", label: "Fabrication" },
    { href: "/services#gutters", label: "Gutter Systems" },
    { href: "/services#skylights", label: "Skylights" },
    { href: "/services#repairs", label: "Repairs" },
    { href: "/services#commercial", label: "Commercial" },
  ],
};
