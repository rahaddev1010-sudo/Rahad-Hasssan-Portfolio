const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

const prefixMatch = content.match(/([\s\S]*?)export const services = \[\n/);
const suffixMatch = content.match(/\n\];\n\nexport const projects = \[([\s\S]*)/);

if (!prefixMatch || !suffixMatch) {
  console.error("Failed to parse data.ts");
  process.exit(1);
}

const newServices = `  {
    title: "AI Automation",
    description: "Connecting your site to AI agents and tools like n8n, Make, and Zapier so daily tasks run themselves.",
    icon: Workflow,
    isAI: true
  },
  {
    title: "WooCommerce Automation",
    description: "Orders, inventory, and customer emails sync and update without anyone touching the backend.",
    icon: ShoppingCart,
    isAI: true
  },
  {
    title: "Headless WordPress",
    description: "A faster, modern Next.js frontend for clients who want more speed and control.",
    icon: AppWindow,
    isAI: false
  },
  {
    title: "Core WordPress Work",
    description: "Development, Elementor builds, migrations, security, and SEO — the foundation everything runs on.",
    icon: LayoutTemplate,
    isAI: false
  },
  {
    title: "AI Chat & Support Agents",
    description: "Customer questions get answered instantly, day or night, without you or your team on standby.",
    icon: Bot,
    isAI: true
  },
  {
    title: "Automation Audit & Consulting",
    description: "A clear look at your site or store to find exactly what is worth automating first.",
    icon: Target,
    isAI: false
  }`;

const finalContent = prefixMatch[1] + "export const services = [\n" + newServices + "\n];\n\nexport const projects = [" + suffixMatch[1];
fs.writeFileSync('src/data.ts', finalContent);
console.log("Updated services in data.ts successfully.");
