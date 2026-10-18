import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Code2,
  MonitorSmartphone,
  LayoutTemplate,
  Gauge,
  Sparkles,
  AppWindow,
  ShoppingCart,
  Bot,
  Workflow,
  Target,
  TrendingUp,
  GraduationCap,
  BookOpen,
  Layers,
  ShoppingBag,
  Shield,
  Rocket,
  Briefcase,
  Building2
} from 'lucide-react';

import ugdLogo from './assets/images/unlimited_growth_drive_logo.svg';
import intugrowLogo from './assets/images/intugrow_logo.png';

export const personalInfo = {
  name: "Rahad Hassan",
  role: "Professional WordPress Expert",
  email: "rahadpcc@gmail.com",
  phone: "+880 135021488",
  location: "Bangladesh (Remote Worldwide)",
  socials: {
    github: "https://github.com/rahaddev1010-sudo",
    linkedin: "https://www.linkedin.com/in/rahad-hassan1010/",
    facebook: "https://www.facebook.com/rahadhassan.live",
    instagram: "https://www.instagram.com/rahadhassen1010/?hl=en",
    twitter: "#"
  }
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#journey' },
  { name: 'Work', href: '#work' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const services = [
  {
    title: "AI-Powered Website (WordPress + Elementor)",
    description: "Intelligent, dynamic WordPress sites powered by AI to automate workflows and elevate user experiences.",
    icon: Sparkles
  },
  {
    title: "AI Chatbot Integration for WordPress Sites",
    description: "Smart customer support automation to engage visitors, answer FAQs, and capture leads 24/7.",
    icon: Bot
  },
  {
    title: "WooCommerce Website Development",
    description: "High-performance, conversion-optimized eCommerce stores with seamless checkout flows and payment integrations.",
    icon: ShoppingCart
  },
  {
    title: "High-Converting Landing Page Design",
    description: "Laser-focused landing pages designed specifically for paid media, marketing campaigns, and lead generation.",
    icon: Target
  },
  {
    title: "Smart WordPress Redesign Using AI + Elementor",
    description: "Modernize your existing site with AI-driven insights and pixel-perfect Elementor layouts.",
    icon: Workflow
  },
  {
    title: "Elementor Pro Website Design & Development",
    description: "Custom, responsive, and highly flexible websites leveraging the full power of Elementor Pro and dynamic content.",
    icon: LayoutTemplate
  }
];

export const experiences = [
  {
    company: "Unlimited Growth Drive",
    role: "WordPress Developer",
    period: "2024 - 2025",
    employmentType: "Full-Time / Agency",
    description: "WordPress Developer specializing in Elementor, responsive website design, and website customization.",
    logo: ugdLogo,
    website: "https://www.unlimitedgrowthdrive.com",
    badge: "Agency",
    icon: Rocket
  },
  {
    company: "IntuGrow",
    role: "WordPress & Elementor Specialist",
    period: "2025 - 2026",
    employmentType: "WordPress Specialist",
    description: "WordPress & Elementor Specialist focused on modern website design, landing pages, and responsive layouts.",
    logo: intugrowLogo,
    website: "https://intugrow.com",
    badge: "Growth Partner",
    icon: TrendingUp
  }
];

export const education = [
  {
    role: "B.Sc. in Computer Science & Engineering",
    period: "2016 - 2020",
    company: "University of Science and Technology",
    description: "Built strong foundations in software engineering, database architectures, front-end systems, and human-computer interaction.",
    icon: GraduationCap
  },
  {
    role: "Professional WordPress & Web Development Certification",
    period: "2020",
    company: "Tech Academy",
    description: "Mastered advanced WordPress theme building, Elementor architecture, custom post types, WooCommerce workflows, and speed optimization.",
    icon: BookOpen
  }
];

export const skills = [
  {
    title: "WordPress & Elementor Expert",
    badge: "5+ Yrs Experience",
    icon: Code2,
    color: "blue",
    description: "Building fast, pixel-perfect, fully custom WordPress websites — from design to deployment.",
    tags: ["Elementor Pro", "Advanced Custom Fields (ACF)", "Dynamic Content", "Custom Post Types", "WooCommerce", "Theme Building", "Pixel-Perfect Figma/PSD to Elementor"]
  },
  {
    title: "AI Automation for WordPress",
    badge: "Advanced",
    icon: Layers,
    color: "purple",
    description: "Connecting WordPress sites to AI agents and tools so daily tasks run automatically, without manual effort.",
    tags: ["AI Agents & Chatbots", "Autonomous Workflows (n8n & Make.com)", "OpenAI/Anthropic API Integration", "AI Content Generation", "Predictive Lead Scoring", "Smart Form Automation"]
  },
  {
    title: "AI-Powered Website Design",
    badge: "AI",
    icon: Sparkles,
    color: "indigo",
    description: "Using AI tools to design and generate website layouts, then converting them into fully functional WordPress + Elementor sites.",
    tags: ["AI Website Builders", "Figma/AI to WordPress Conversion", "AI Copywriting & Content", "AI Image Generation", "Rapid Prototyping"]
  },
  {
    title: "Performance & SEO Optimization",
    badge: "Technical",
    icon: Gauge,
    color: "pink",
    description: "Making WordPress sites load faster and rank higher with clean technical SEO and performance tuning.",
    tags: ["Core Web Vitals", "Caching (WP Rocket)", "Image Optimization", "Technical SEO", "Schema Markup"]
  },
  {
    title: "WooCommerce & E-commerce Setup",
    badge: "Expert",
    icon: ShoppingBag,
    color: "emerald",
    description: "Setting up complete online stores — products, payments, and shipping — fully customized with Elementor.",
    tags: ["Product & Inventory Setup", "Payment Gateway Integration", "Shipping Configuration", "Custom Store Design"]
  },
  {
    title: "Security & Maintenance",
    badge: "Reliable",
    icon: Shield,
    color: "amber",
    description: "Keeping WordPress websites safe, updated, and running smoothly — so clients never have to worry about hacks, crashes, or data loss.",
    tags: ["Firewall Setup", "Secure Migrations", "Automated Backups", "Malware Scanning", "SSL Setup", "Plugin & Theme Updates", "Login Security (2FA)", "Uptime Monitoring"]
  }
];

export const projects = [
  {
    title: "Digital Growth Agency",
    tag: "WordPress",
    description: "Custom WordPress portal and digital growth engine designed for high-impact brand acceleration, SEO, and client acquisition.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "https://qseba.com/"
  },
  {
    title: "Central Surplus eCommerce",
    tag: "WooCommerce",
    description: "Enhanced eCommerce performance and conversion optimization for an online surplus store.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2574&auto=format&fit=crop",
    link: "https://yoursitehub.com/Central-Surplus-Ecommerce-Case-Study/"
  },
  {
    title: "Cookies & Cream Digital Menu",
    tag: "Elementor",
    description: "Ice cream, dessert franchise, and store location portal.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2664&auto=format&fit=crop",
    link: "https://cookiesandcreamfranchise.com/"
  },
  {
    title: "Reliable Roofing.",
    tag: "WooCommerce",
    description: "Comprehensive roofing contractor & home exterior eCommerce store with custom quote request and service booking built on WooCommerce.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    link: "https://idxbd.shop/woo/home-roffing/"
  },
  {
    title: "MRA Consultancy Platform",
    tag: "WordPress",
    description: "Professional business consulting and corporate advisory services.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2574&auto=format&fit=crop",
    link: "https://mra-consultancy.com/"
  },
  {
    title: "Grow Online IntuGrow",
    tag: "Elementor",
    description: "Full-suite digital consulting and enterprise growth platform built for high-impact online branding and scalable marketing.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
    link: "https://intugrow.com/"
  },
  {
    title: "You Coaching Swiss Portal",
    tag: "Elementor",
    description: "Personal development, leadership, and coaching services portal.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.you-coaching.ch/"
  },
  {
    title: "Roofing Experience",
    tag: "Elementor",
    description: "Interactive commercial & residential roofing showcase featuring dynamic project portfolios, estimate calculators, and responsive service pages.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=2670&auto=format&fit=crop",
    link: "https://idxbd.shop/live-project/"
  },
  {
    title: "Roofing to chimneys,",
    tag: "WordPress",
    description: "Professional construction, contracting, and building company website.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop",
    link: "https://vt1construction.com/"
  },
  {
    title: "Strata Land Clearing Solutions",
    tag: "Elementor",
    description: "Land clearing, grading, and site preparation in Colorado.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2670&auto=format&fit=crop",
    link: "https://strataexcavation.com/land-clearing-site-prep-colorado/"
  },
  {
    title: "MacBook Repair Specialists",
    tag: "WordPress",
    description: "Specialized Apple MacBook repair and display replacement.",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2600&auto=format&fit=crop",
    link: "https://pc-hilfe-zuerichsee-und-oberland.ch/macbook-display-aust/macbook-display-austausch-rapperswil/"
  },
  {
    title: "Lyons National Bank SEO",
    tag: "WordPress",
    description: "Data-driven SEO strategies improving local visibility and search rankings for the banking sector.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/lyons-national-bank-seo/"
  },
  {
    title: "NYS CCF Government Smartsite",
    tag: "WordPress",
    description: "Custom robust platform tailored for government organizations focusing on accessibility and speed.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/nys-ccf-government-smartsite/"
  },
  {
    title: "Community Bank NA SEO",
    tag: "WordPress",
    description: "Comprehensive SEO optimization driving targeted organic traffic for financial institutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/community-bank-na-seo/"
  },
  {
    title: "Foodlink Smartsite & SEO",
    tag: "WordPress",
    description: "Modernized website architecture and SEO for improved local outreach and search presence.",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2670&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/foodlink-smartsite-seo/"
  },
  {
    title: "Classic Six Paid Search",
    tag: "WooCommerce",
    description: "Precision targeting and ad spend optimization delivering high conversions for premium brands.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/classic-six-paid-search/"
  },
  {
    title: "USW Home Services Paid Search",
    tag: "WordPress",
    description: "ROI-driven paid search campaign optimization targeting local home service customers.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/usw-home-services-paid-search/"
  },
  {
    title: "Dentist Partners Platform",
    tag: "WordPress",
    description: "Modern, patient-focused web platform for dental practices with online booking integration.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2670&auto=format&fit=crop",
    link: "https://dentist-partners.vercel.app/"
  },
  {
    title: "Brightwell Family Dental",
    tag: "Elementor",
    description: "Elegant and user-friendly digital experience tailored for family dental care services.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2670&auto=format&fit=crop",
    link: "https://brightwell-family-dental.vercel.app/"
  },
  {
    title: "Dental Care Portal",
    tag: "WordPress",
    description: "Comprehensive dental care portal emphasizing a healthier lifestyle through oral hygiene.",
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=2670&auto=format&fit=crop",
    link: "https://dental-care-for-a-healthier.vercel.app/"
  }
];

export const testimonials = [
  {
    author: "Aisha Khan",
    role: "Marketing Lead",
    company: "CloudScale Growth",
    country: "🇨🇦 Canada",
    rating: 5,
    text: "Our new website is faster, easier to manage, and connected with our marketing tools through automation. Rahad always explained every step clearly and delivered exactly what we needed."
  },
  {
    author: "Daniel Brooks",
    role: "CTO",
    company: "Nexus Automation Labs",
    country: "🇬🇧 UK",
    rating: 5,
    text: "Rahad built reliable AI workflows that connected multiple platforms without any hassle. The automations have saved our team countless hours and reduced manual errors."
  },
  {
    author: "Priya Patel",
    role: "Product Manager",
    company: "Aura Commerce Tech",
    country: "🇦🇺 Australia",
    rating: 5,
    text: "Working with Rahad was effortless. He combined WordPress development with AI automation to create a solution that improved both customer experience and our team's productivity."
  },
  {
    author: "Marcus Lindner",
    role: "Operations Director",
    company: "Nordic Living & Trade",
    country: "🇩🇪 Germany",
    rating: 5,
    text: "He built our entire WooCommerce store with dynamic pricing calculators and custom checkout. Clean code, prompt communication, and delivered 3 days ahead of schedule!"
  },
  {
    author: "Elena Vasquez",
    role: "Creative Director",
    company: "Studio Nova Media",
    country: "🇺🇸 United States",
    rating: 5,
    text: "Outstanding attention to detail! He took our Figma prototype and translated every micro-interaction and responsive breakpoint into Elementor with 100% precision."
  },
  {
    author: "James Richardson",
    role: "CEO & Co-Founder",
    company: "Apex Digital UK",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    text: "Rahad completely transformed our sluggish WordPress site into a lightning-fast digital powerhouse. Our Core Web Vitals score shot from 42 to 96, and customer bounce rate dropped immediately."
  }
];
