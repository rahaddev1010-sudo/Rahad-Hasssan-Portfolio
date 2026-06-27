import { personalInfo, navLinks } from '../data';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-display font-bold mb-1 text-white uppercase tracking-widest">
              {personalInfo.name}<span className="text-white">.</span>
            </h3>
            <p className="text-gray-400 text-sm">{personalInfo.role}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={personalInfo.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left mt-4 text-xs text-gray-600">
          Available for freelance projects & full-time opportunities.
        </div>
      </div>
    </footer>
  );
};
