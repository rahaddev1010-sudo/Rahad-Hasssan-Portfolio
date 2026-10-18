import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Code2, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Rocket, 
  TrendingUp, 
  LayoutTemplate,
  Briefcase,
  CheckCircle2,
  Calendar,
  Building2,
  ExternalLink
} from 'lucide-react';
import { experiences, education, skills } from '../data';
import { TypingHeading } from './TypingHeading';

export const Journey = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills'>('experience');

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'My Skills' }
  ] as const;

  return (
    <section id="journey" className="section-padding bg-transparent relative">
      {/* Anchor for #experience link */}
      <span id="experience" className="absolute -top-28 left-0 block w-0 h-0 pointer-events-none" />

      <div className="max-w-[1050px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-sky-200 text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 shadow-sm bg-sky-50/50">
            CAREER & EXPERTISE
          </span>
          <TypingHeading 
            text="Professional Journey & Experience"
            className="text-[32px] md:text-[42px] font-bold text-gray-900 leading-[1.2] mb-8"
          />

          {/* Tabs */}
          <div className="inline-flex relative bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-full p-1.5 sm:p-2 border border-gray-200 shadow-sm ring-1 ring-black/5 max-w-full overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-full text-[13px] sm:text-[14px] font-bold tracking-wide transition-all duration-300 z-10 min-w-[110px] sm:min-w-[145px] ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 rounded-xl sm:rounded-full shadow-[0_4px_15px_rgb(96,165,250,0.4)] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            
            {/* WORK EXPERIENCE TAB */}
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                {experiences.map((item, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-[#60A5FA]/10 via-white to-purple-500/10 border border-[#60A5FA]/20 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(96,165,250,0.08)] hover:shadow-[0_12px_40px_rgb(96,165,250,0.15)] hover:-translate-y-1 transition-all duration-400 relative"
                  >
                    {/* Background glow effect */}
                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                    {/* Top Header Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 py-5 border-b border-gray-50 bg-gradient-to-r from-gray-50/50 to-transparent relative z-10">
                      <div className="flex items-center text-[15px] font-bold text-gray-800 mb-2 sm:mb-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mr-3 shadow-[0_0_8px_rgb(168,85,247,0.6)] group-hover:scale-125 transition-transform duration-300" />
                        {item.role}
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="text-[12px] font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50/70 px-4 py-1.5 rounded-full border border-indigo-100/60 shadow-2xs">
                          {item.period}
                        </div>
                        {item.website && (
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${item.company}`}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 text-gray-400 hover:text-white border border-gray-200/80 hover:border-transparent transition-all duration-300 shadow-2xs hover:scale-105"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content Row */}
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center px-8 py-8 relative z-10">
                      {/* Left side logo/company area */}
                      <div className="md:w-[35%] shrink-0 flex items-center gap-4">
                        <div className="w-16 h-16 shrink-0 bg-white border border-[#60A5FA]/20 shadow-sm flex items-center justify-center rounded-2xl p-2.5 group-hover:scale-110 group-hover:border-transparent group-hover:shadow-md transition-all duration-500 overflow-hidden">
                          {item.logo ? (
                            <img 
                              src={item.logo} 
                              alt={item.company} 
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <Building2 className="w-7 h-7 text-indigo-500" />
                          )}
                        </div>
                        <h4 className="text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {item.company}
                        </h4>
                      </div>

                      {/* Right side description */}
                      <div className="md:w-[65%]">
                        <p className="text-gray-600 text-[15px] leading-[1.8] border-l-2 border-gray-100 group-hover:border-gradient-to-b group-hover:border-transparent group-hover:bg-gradient-to-b group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-[length:2px_100%] group-hover:bg-no-repeat group-hover:bg-left pl-6 transition-all duration-300 opacity-90 group-hover:opacity-100 font-medium">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* EDUCATION TAB */}
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                {education.map((item, index) => (
                  <div key={index} className="group bg-gradient-to-br from-[#60A5FA]/10 via-white to-purple-500/10 border border-[#60A5FA]/20 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(96,165,250,0.08)] hover:shadow-[0_12px_40px_rgb(96,165,250,0.15)] hover:-translate-y-1 transition-all duration-400 relative">
                    
                    {/* Background glow effect */}
                    <div className="absolute -left-20 -top-20 w-40 h-40 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                    {/* Top Header Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 py-5 border-b border-gray-50 bg-gradient-to-r from-gray-50/50 to-transparent relative z-10">
                      <div className="flex items-center text-[15px] font-bold text-gray-800 mb-2 sm:mb-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mr-3 shadow-[0_0_8px_rgb(168,85,247,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                        {item.role}
                      </div>
                      <div className="text-[12px] font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50/50 px-4 py-1.5 rounded-full border border-indigo-100/50">
                        {item.period}
                      </div>
                    </div>

                    {/* Content Row */}
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center px-8 py-8 relative z-10">
                      {/* Left side logo/institution area */}
                      <div className="md:w-[32%] shrink-0 flex items-center gap-4">
                        <div className="w-16 h-16 shrink-0 bg-white/60 border border-[#60A5FA]/20 shadow-sm flex items-center justify-center rounded-2xl text-gray-400 group-hover:scale-110 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#60A5FA] group-hover:via-indigo-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-500">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <item.icon size={26} strokeWidth={2} />
                          </motion.div>
                        </div>
                        <h4 className="text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {item.company}
                        </h4>
                      </div>
                      
                      {/* Right side description */}
                      <div className="md:w-[68%]">
                        <p className="text-gray-600 text-[15px] leading-[1.8] border-l-2 border-gray-100 group-hover:border-gradient-to-b group-hover:border-transparent group-hover:bg-gradient-to-b group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-[length:2px_100%] group-hover:bg-no-repeat group-hover:bg-left pl-6 transition-all duration-300 opacity-90 group-hover:opacity-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* MY SKILLS TAB */}
            {activeTab === 'skills' && (
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="space-y-4"
              >
                {skills.map((skill, index) => {
                  const colorMap: Record<string, { bg: string, text: string, border: string, badgeBg: string, badgeText: string, hoverBorder: string }> = {
                    blue: { bg: 'bg-blue-50/50', text: 'text-blue-500', border: 'border-blue-100', badgeBg: 'bg-blue-100/50', badgeText: 'text-blue-600', hoverBorder: 'group-hover:border-blue-200' },
                    purple: { bg: 'bg-purple-50/50', text: 'text-purple-500', border: 'border-purple-100', badgeBg: 'bg-purple-100/50', badgeText: 'text-purple-600', hoverBorder: 'group-hover:border-purple-200' },
                    indigo: { bg: 'bg-indigo-50/50', text: 'text-indigo-500', border: 'border-indigo-100', badgeBg: 'bg-indigo-100/50', badgeText: 'text-indigo-600', hoverBorder: 'group-hover:border-indigo-200' },
                    pink: { bg: 'bg-pink-50/50', text: 'text-pink-500', border: 'border-pink-100', badgeBg: 'bg-pink-100/50', badgeText: 'text-pink-600', hoverBorder: 'group-hover:border-pink-200' },
                    emerald: { bg: 'bg-emerald-50/50', text: 'text-emerald-500', border: 'border-emerald-100', badgeBg: 'bg-emerald-100/50', badgeText: 'text-emerald-600', hoverBorder: 'group-hover:border-emerald-200' },
                    amber: { bg: 'bg-amber-50/50', text: 'text-amber-500', border: 'border-amber-100', badgeBg: 'bg-amber-100/50', badgeText: 'text-amber-600', hoverBorder: 'group-hover:border-amber-200' },
                  };
                  const c = colorMap[skill.color] || colorMap.blue;
                  
                  return (
                    <motion.div 
                      key={index} 
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                      }}
                      className={`group bg-white/80 backdrop-blur-md border border-gray-100 rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 ${c.hoverBorder} relative overflow-hidden flex flex-col md:flex-row gap-5 items-start`}
                    >
                      {/* Soft background glow on hover */}
                      <div className={`absolute -inset-4 bg-gradient-to-br ${c.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl z-0`} />

                      {/* Icon */}
                      <div className={`relative z-10 w-12 h-12 shrink-0 rounded-[14px] flex items-center justify-center ${c.bg} border ${c.border} group-hover:scale-105 transition-transform duration-300`}>
                        <skill.icon className={`w-6 h-6 ${c.text}`} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="text-[17px] md:text-[19px] font-bold text-gray-900 leading-tight">
                            {skill.title}
                          </h4>
                        </div>
                        
                        <p className="text-[14px] text-gray-500 mb-4 leading-relaxed">
                          {skill.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {skill.tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[12.5px] font-medium text-gray-600 hover:bg-white hover:border-gray-200 hover:text-gray-900 transition-colors duration-200 cursor-default shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
