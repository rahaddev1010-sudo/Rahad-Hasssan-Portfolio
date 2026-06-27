import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { navLinks, personalInfo } from '../data';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1240px] z-50 bg-white/95 backdrop-blur-md rounded-full px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between"
    >
      <a href="#home" className="text-xl md:text-2xl font-display font-bold text-gray-900 tracking-widest uppercase">
        RAHAD HASSAN
      </a>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[11px] font-bold text-gray-900 hover:text-primary transition-colors uppercase tracking-widest"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Desktop Socials */}
      <div className="hidden lg:flex items-center space-x-2">
        {personalInfo.socials.instagram && (
          <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center hover:bg-[#60A5FA] transition-colors">
            <Instagram size={14} />
          </a>
        )}
        {personalInfo.socials.facebook && (
          <a href={personalInfo.socials.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center hover:bg-[#60A5FA] transition-colors">
            <Facebook size={14} />
          </a>
        )}
        {personalInfo.socials.twitter && (
          <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center hover:bg-[#60A5FA] transition-colors">
            <Twitter size={14} />
          </a>
        )}
        {personalInfo.socials.linkedin && (
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center hover:bg-[#60A5FA] transition-colors">
            <Linkedin size={14} />
          </a>
        )}
        {personalInfo.socials.github && (
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center hover:bg-[#60A5FA] transition-colors">
            <Github size={14} />
          </a>
        )}
      </div>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden text-gray-900"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl overflow-hidden shadow-xl lg:hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold tracking-widest text-gray-900 hover:text-primary uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
