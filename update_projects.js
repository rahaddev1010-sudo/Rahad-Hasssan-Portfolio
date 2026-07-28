const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

// Match everything before export const projects = [...
const prefixMatch = content.match(/([\s\S]*?)export const projects = \[\n/);
const suffixMatch = content.match(/\n\];\n\nexport const testimonials = \[([\s\S]*)/);

if (!prefixMatch || !suffixMatch) {
  console.error("Failed to parse data.ts");
  process.exit(1);
}

const newProjects = `  {
    title: "Apex Ecom Pro",
    tag: "eCommerce Development",
    description: "High-performance eCommerce storefront optimized for conversions and seamless user journeys.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
    link: "https://apex-ecom-pro.vercel.app/"
  },
  {
    title: "Lyons National Bank SEO",
    tag: "SEO & Strategy",
    description: "Data-driven SEO strategies improving local visibility and search rankings for the banking sector.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/lyons-national-bank-seo/"
  },
  {
    title: "Dentist Partners Platform",
    tag: "Web Development",
    description: "Modern, patient-focused web platform for dental practices with online booking integration.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2670&auto=format&fit=crop",
    link: "https://dentist-partners.vercel.app/"
  },
  {
    title: "NYS CCF Government Smartsite",
    tag: "Web Development",
    description: "Custom robust platform tailored for government organizations focusing on accessibility and speed.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/nys-ccf-government-smartsite/"
  },
  {
    title: "Brightwell Family Dental",
    tag: "Web Development",
    description: "Elegant and user-friendly digital experience tailored for family dental care services.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2670&auto=format&fit=crop",
    link: "https://brightwell-family-dental.vercel.app/"
  },
  {
    title: "Community Bank NA SEO",
    tag: "SEO Optimization",
    description: "Comprehensive SEO optimization driving targeted organic traffic for financial institutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/community-bank-na-seo/"
  },
  {
    title: "Dental Care Portal",
    tag: "Web Development",
    description: "Comprehensive dental care portal emphasizing a healthier lifestyle through oral hygiene.",
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=2674&auto=format&fit=crop",
    link: "https://dental-care-for-a-healthier.vercel.app/"
  },
  {
    title: "Foodlink Smartsite & SEO",
    tag: "Development & SEO",
    description: "Modernized website architecture and SEO for improved local outreach and search presence.",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2670&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/foodlink-smartsite-seo/"
  },
  {
    title: "Central Surplus eCommerce",
    tag: "WooCommerce & CRO",
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
    title: "Classic Six Paid Search",
    tag: "Paid Advertising",
    description: "Precision targeting and ad spend optimization delivering high conversions for premium brands.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/classic-six-paid-search/"
  },
  {
    title: "USW Home Services Paid Search",
    tag: "Paid Search & Ads",
    description: "ROI-driven paid search campaign optimization targeting local home service customers.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop",
    link: "https://yoursitehub.com/case-studies/usw-home-services-paid-search/"
  },
  {
    title: "MRA Consultancy Platform",
    tag: "WordPress Elementor",
    description: "Professional business consulting and corporate advisory services.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2574&auto=format&fit=crop",
    link: "https://mra-consultancy.com/"
  },
  {
    title: "You Coaching Swiss Portal",
    tag: "Elementor",
    description: "Personal development, leadership, and coaching services portal.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.you-coaching.ch/"
  },
  {
    title: "MacBook Repair Specialists",
    tag: "WordPress",
    description: "Specialized Apple MacBook repair and display replacement.",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2600&auto=format&fit=crop",
    link: "https://pc-hilfe-zuerichsee-und-oberland.ch/macbook-display-aust/macbook-display-austausch-rapperswil/"
  },
  {
    title: "VT1 Construction & Engineering",
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
  }`;

const finalContent = prefixMatch[1] + "export const projects = [\n" + newProjects + "\n];\n\nexport const testimonials = [" + suffixMatch[1];
fs.writeFileSync('src/data.ts', finalContent);
console.log("Updated data.ts successfully.");
