/**
 * All site content lives here so sections stay presentational.
 * Icons are referenced by name and resolved in the Services component
 * to keep this file free of JSX.
 */
import type { IconType } from "react-icons";
import {
  RiSmartphoneLine,
  RiGlobalLine,
  RiSettings4Line,
  RiMegaphoneLine,
  RiQuillPenLine,
  RiInstagramLine,
  RiSearchLine,
  RiBarChartBoxLine,
  RiRocket2Line,
} from "react-icons/ri";

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */
export interface Service {
  num: string;
  icon: IconType;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    num: "01",
    icon: RiSmartphoneLine,
    title: "App Development",
    description: "iOS & Android apps built with Flutter that users actually love.",
  },
  {
    num: "02",
    icon: RiGlobalLine,
    title: "Website Development",
    description: "Fast, conversion-optimized sites from landing pages to full eCommerce.",
  },
  {
    num: "03",
    icon: RiSettings4Line,
    title: "SaaS Development",
    description: "Scalable software with dashboards, admin panels & role-based systems.",
  },
  {
    num: "04",
    icon: RiMegaphoneLine,
    title: "Paid Advertising",
    description: "Meta & Google campaigns engineered to convert, not just get clicks.",
  },
  {
    num: "05",
    icon: RiQuillPenLine,
    title: "Content Creation",
    description: "Scroll-stopping content that builds trust and drives action.",
  },
  {
    num: "06",
    icon: RiInstagramLine,
    title: "Social Media Marketing",
    description: "Platform strategy and growth that compounds over time.",
  },
  {
    num: "07",
    icon: RiSearchLine,
    title: "SEO",
    description: "Rank higher. Get found. Own your category organically.",
  },
  {
    num: "08",
    icon: RiBarChartBoxLine,
    title: "Market Research",
    description: "Data-driven insights that tell you exactly where the opportunity is.",
  },
  {
    num: "09",
    icon: RiRocket2Line,
    title: "Full Digital Marketing",
    description: "End-to-end growth — from product launch to market domination.",
  },
];

/* ------------------------------------------------------------------ */
/* STATS (About section count-up)                                     */
/* ------------------------------------------------------------------ */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 3, suffix: "+", label: "Years in Marketing" },
  { value: 6, suffix: "+", label: "Apps Shipped" },
  { value: 2, suffix: "", label: "Brands Founded" },
];

/* ------------------------------------------------------------------ */
/* WORK / PROJECTS                                                     */
/* ------------------------------------------------------------------ */
export type ProjectCategory = "apps" | "websites";
export type ProjectStatus = "live" | "in-progress" | "coming-soon";

export interface Project {
  id: string;
  category: ProjectCategory;
  name: string;
  tag: string;
  description: string;
  status: ProjectStatus;
  url?: string;
}

export const PROJECTS: Project[] = [
  // ---- APPS ----
  {
    id: "raja-packers-app",
    category: "apps",
    name: "Raja Packers App",
    tag: "Flutter · Business Tool",
    description:
      "GST invoice generation app built for a packers & movers company. Clean, fast, functional.",
    status: "live",
  },
  {
    id: "shades-of-linen-app",
    category: "apps",
    name: "Shades of Linen",
    tag: "Flutter · eCommerce",
    description:
      "Full-featured clothing store app with product browsing, cart, and seamless checkout.",
    status: "live",
  },
  {
    id: "giftsmandi-app",
    category: "apps",
    name: "GiftsMandi",
    tag: "Flutter · Corporate · Admin Panel",
    description:
      "Corporate gifting app with admin-only backend panel accessible via secure mail authentication.",
    status: "live",
  },
  {
    id: "cuto",
    category: "apps",
    name: "Cuto",
    tag: "Flutter · ERP · My Product",
    description:
      "Coaching management system with 5 strict role levels: Owner, Teacher, Student, HR, Parents.",
    status: "in-progress",
  },
  {
    id: "gstnex",
    category: "apps",
    name: "GSTNex",
    tag: "Flutter · SaaS · My Product",
    description:
      "All-in-one GST billing, inventory, payments & business management for Indian businesses.",
    status: "in-progress",
  },
  {
    id: "custom-build",
    category: "apps",
    name: "Custom Build",
    tag: "Flutter · Upcoming",
    description: "Next project currently in discovery phase.",
    status: "coming-soon",
  },
  // ---- WEBSITES ----
  {
    id: "shades-of-linen-web",
    category: "websites",
    name: "Shades of Linen",
    tag: "Next.js · eCommerce",
    description:
      "Full eCommerce store with customer-facing site and integrated owner admin panel.",
    status: "live",
    url: "https://shadesoflinen.com",
  },
  {
    id: "gstnex-web",
    category: "websites",
    name: "GSTNex",
    tag: "Next.js · SaaS",
    description: "Product marketing website for the GSTify billing app.",
    status: "live",
    url: "https://gstify.site",
  },
  {
    id: "giftsmandi-web",
    category: "websites",
    name: "GiftsMandi",
    tag: "Next.js · Business",
    description:
      "Corporate gifting company website showcasing their catalogue and services.",
    status: "live",
    url: "https://giftsmandi.com",
  },
];

export const WORK_FILTERS = [
  { label: "All", value: "all" },
  { label: "Apps", value: "apps" },
  { label: "Websites", value: "websites" },
] as const;

/* ------------------------------------------------------------------ */
/* TIMELINE                                                            */
/* ------------------------------------------------------------------ */
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2022",
    title: "Entered Digital Marketing",
    description: "Self-taught ads, content & SEO from the ground up.",
  },
  {
    year: "2023",
    title: "Certified Digital Marketer",
    description: "Completed professional certification. Turned knowledge into client results.",
  },
  {
    year: "2023–24",
    title: "Founded Arshu Clothing",
    description:
      "Launched a D2C fashion brand. Handled sourcing, branding, marketing, and sales end-to-end.",
  },
  {
    year: "2023–24",
    title: "Founded Kysta — Cosmetics Brand",
    description: "Built a second brand from scratch. Deep-dived into consumer psychology and paid growth.",
  },
  {
    year: "2024",
    title: "Managed Raja Packers",
    description:
      "Ran the digital presence and operations of a packers & movers company for a full year.",
  },
  {
    year: "2025",
    title: "Built First Flutter App",
    description: "Entered app development. First client app delivered: Raja Packers invoicing app.",
  },
  {
    year: "2025–Present",
    title: "Shipping Products",
    description:
      "Building Cuto (ERP) and GSTNex (SaaS) — two products entirely owned and developed by me.",
  },
];

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Arshu delivered our app exactly how we imagined — with an admin panel that works flawlessly. He understood our business needs without us explaining twice. Truly rare to find someone who thinks like a developer and a business owner simultaneously.",
    name: "Rahul Mehra",
    role: "Owner · GiftsMandi",
    initials: "RM",
  },
  {
    quote:
      "From the Flutter app to the full website, Arshu handled everything seamlessly. Our store launched ahead of schedule and the customer experience is exactly what we wanted. He's both developer and marketer, Really a combination that's almost impossible to find.",
    name: "Faisal Aman",
    role: "Founder · Shades of Linen",
    initials: "FA",
  },
  {
    quote:
      "We hired Arshu to manage our digital presence and build our invoicing app. Within months, he transformed how we operate digitally. Smart, dependable, and genuinely invested in our growth.",
    name: "Faheem Khan",
    role: "Director · Raja Packers",
    initials: "FK",
  },
];
