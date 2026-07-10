import { motion } from 'motion/react';
import { personalInfo, navLinks } from '../data';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800/60 pb-10 mb-10">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <a href="#home" className="text-3xl font-black text-white tracking-widest mb-2 flex items-center justify-center md:justify-start gap-3 hover:opacity-90 transition-opacity uppercase group inline-flex">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0F172A] text-xl shadow-[0_0_20px_rgb(255,255,255,0.15)] group-hover:shadow-[0_0_30px_rgb(255,255,255,0.3)] group-hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-white to-white"></div>
                <span className="relative z-10 font-bold">{personalInfo.name.charAt(0)}</span>
              </motion.div>
              <span className="text-white drop-shadow-md">{personalInfo.name}</span>
              <span className="text-blue-400">.</span>
            </a>
            <p className="text-gray-400 text-[15px] font-medium mt-1">{personalInfo.role}</p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 10 }}
              href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgb(37,99,235,0.4)] transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: -10 }}
              href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgb(37,99,235,0.4)] transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 10 }}
              href={personalInfo.socials.facebook} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgb(37,99,235,0.4)] transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: -10 }}
              href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgb(37,99,235,0.4)] transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[14px] text-gray-500 font-medium">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white hover:underline transition-all">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left mt-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[12px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Available for new projects
          </span>
        </div>
      </div>
    </footer>
  );
};
