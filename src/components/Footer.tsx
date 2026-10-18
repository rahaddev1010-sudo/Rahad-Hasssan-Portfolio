import { motion } from 'motion/react';
import { personalInfo, navLinks } from '../data';
import { Github, Linkedin, Facebook, Instagram, ArrowUp, MessageCircle, Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    "Elementor Pro Development",
    "WooCommerce Online Stores",
    "Speed & Core Web Vitals (90+)",
    "Figma to WordPress Conversion",
    "Dynamic ACF & Custom Post Types",
    "AI Agents & Form Automation"
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-20 pb-12 border-t border-slate-800/80">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/70">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <a 
              href="#home" 
              className="text-2xl font-black text-white tracking-tight flex items-center gap-3 hover:opacity-90 transition-opacity uppercase group inline-flex"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-lg font-black shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <span>{personalInfo.name.charAt(0)}</span>
              </div>
              <span className="text-white">{personalInfo.name}</span>
              <span className="text-blue-500">.</span>
            </a>

            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              Senior WordPress & Elementor Specialist delivering custom, high-speed, conversion-focused websites for businesses and agencies globally.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Hire & Contract Projects</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 text-slate-400 hover:text-white transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 text-slate-400 hover:text-white transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 text-slate-400 hover:text-white transition-all shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 text-slate-400 hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/8801350021488" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:border-emerald-500 text-slate-400 hover:text-white transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links (Col 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] font-extrabold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14px] text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (Col 8-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[13px] font-extrabold text-white uppercase tracking-wider">
              Core Expertise
            </h4>
            <ul className="space-y-2.5 text-[14px] text-slate-400">
              {servicesList.map((srv, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="hover:text-slate-200 transition-colors">{srv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact (Col 10-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] font-extrabold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3 text-[14px] text-slate-400">
              <div>
                <span className="block text-[11px] font-bold uppercase text-slate-500">WhatsApp / Call</span>
                <a href="tel:+8801350021488" className="font-semibold text-slate-200 hover:text-blue-400 transition-colors">
                  +880 1350-021488
                </a>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase text-slate-500">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="font-semibold text-slate-200 hover:text-blue-400 transition-colors break-all">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase text-slate-500">Location</span>
                <span className="font-semibold text-slate-300">
                  Dhaka, BD (Remote Worldwide)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <p className="flex items-center gap-1.5">
            © {currentYear} {personalInfo.name}. All rights reserved. Built with precision.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 text-slate-400 group-hover:text-white transition-all">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
