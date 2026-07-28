const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

const prefixMatch = content.match(/([\s\S]*?)export const projects = \[\n/);
const suffixMatch = content.match(/\nexport const projects = \[([\s\S]*)/);

if (!prefixMatch || !suffixMatch) {
  console.error("Failed to parse data.ts");
  process.exit(1);
}

const extras = `export const education = [
  {
    role: "Senior WordPress Developer",
    period: "2020 - Present",
    company: "Freelance / Agency",
    description: "Developing scalable, high-performance WordPress and Elementor sites. Specializing in WooCommerce optimization, headless WordPress setups, and custom plugin integration.",
    icon: Code2
  },
  {
    role: "Web Automation Specialist",
    period: "2022 - Present",
    company: "Tech Consultant",
    description: "Implementing AI-powered workflows using n8n, Make, and Zapier to automate business processes, customer support, and eCommerce operations.",
    icon: Sparkles
  }
];

export const skills = [
  {
    category: "Frontend Development",
    items: "React, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML5, CSS3, Framer Motion"
  },
  {
    category: "WordPress & CMS",
    items: "Elementor Pro, WooCommerce, Custom Themes, Plugin Development, Headless WP"
  },
  {
    category: "AI & Automation",
    items: "n8n, Make.com, Zapier, Custom GPTs, API Integrations, Support Chatbots"
  },
  {
    category: "SEO & Performance",
    items: "Technical SEO, Core Web Vitals, Page Speed Optimization, CRO"
  }
];

`;

const finalContent = prefixMatch[1] + extras + "export const projects = [" + suffixMatch[1];
fs.writeFileSync('src/data.ts', finalContent);
console.log("Updated data.ts with education and skills successfully.");
