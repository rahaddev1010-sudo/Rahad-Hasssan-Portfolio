const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

content = content.replace(
  /const animatedTexts = \[\s*"High-End Websites\.",\s*"Scalable Web Apps\.",\s*"Premium Interfaces\.",\s*"Digital Success\."\s*\];/,
  `const animatedTexts = [
  "WordPress Websites.",
  "Elementor Pro Designs.",
  "AI Automation Solutions.",
  "High-Converting Stores."
];`
);

content = content.replace(
  /I am a dedicated Frontend Developer crafting seamless, modern, and high-performance digital experiences that elevate brands and engage users\./,
  "I am a WordPress & Elementor Expert specializing in custom website development, WooCommerce, and AI Automation to help businesses scale and succeed online."
);

fs.writeFileSync('src/components/Hero.tsx', content);
