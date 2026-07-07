import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Code2, Sparkles, BookOpen, Layers, ShoppingCart, Rocket, MonitorSmartphone } from 'lucide-react';
import { education, skills } from '../data';

export const Journey = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'skills'>('education');

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'My Skills' }
  ] as const;

  return (
    <section id="journey" className="section-padding bg-transparent">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-sky-200 text-[#60A5FA] font-bold text-[11px] tracking-[0.2em] uppercase mb-4 shadow-sm bg-sky-50/50">
            JOURNEY
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-[1.2] mb-8">
            Professional Journey & Expertise
          </h2>

          {/* Tabs */}
          <div className="inline-flex relative bg-white/60 backdrop-blur-md rounded-full p-2 border border-gray-200 shadow-sm ring-1 ring-black/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 rounded-full text-[14px] font-bold tracking-wide transition-all duration-300 z-10 min-w-[160px] ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 rounded-full shadow-[0_4px_15px_rgb(96,165,250,0.4)] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                {education.map((item, index) => (
                  <div key={index} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(96,165,250,0.12)] hover:-translate-y-1 transition-all duration-400 relative">
                    
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
                      {/* Left side logo/company area */}
                      <div className="md:w-[30%] shrink-0 flex items-center gap-4">
                        <div className="w-16 h-16 shrink-0 bg-white border border-gray-100 shadow-sm flex items-center justify-center rounded-2xl text-gray-400 group-hover:scale-110 group-hover:border-indigo-100 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-500">
                          <item.icon size={26} strokeWidth={2} />
                        </div>
                        <h4 className="text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {item.company}
                        </h4>
                      </div>
                      
                      {/* Right side description */}
                      <div className="md:w-[70%]">
                        <p className="text-gray-600 text-[15px] leading-[1.8] border-l-2 border-gray-100 group-hover:border-gradient-to-b group-hover:border-transparent group-hover:bg-gradient-to-b group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-[length:2px_100%] group-hover:bg-no-repeat group-hover:bg-left pl-6 transition-all duration-300 opacity-90 group-hover:opacity-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

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
                  className="space-y-6"
                >
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                      }}
                      className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(56,189,248,0.12)] hover:-translate-y-1 transition-all duration-400 relative"
                    >
                      {/* Background glow effect */}
                      <div className="absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-bl from-sky-100/50 via-blue-100/30 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                      
                      {/* Content Row */}
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center px-8 py-8 relative z-10">
                        {/* Left Side */}
                        <div className="md:w-[35%] shrink-0 flex items-center gap-5">
                          <div className="w-16 h-16 shrink-0 bg-white border border-gray-100 shadow-sm flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:border-sky-200 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-500">
                            {index === 0 && <Code2 className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors" />}
                            {index === 1 && <Layers className="w-7 h-7 text-purple-500 group-hover:text-white transition-colors" />}
                            {index === 2 && <ShoppingCart className="w-7 h-7 text-pink-500 group-hover:text-white transition-colors" />}
                            {index === 3 && <Sparkles className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors" />}
                            {index === 4 && <Rocket className="w-7 h-7 text-emerald-500 group-hover:text-white transition-colors" />}
                            {index === 5 && <MonitorSmartphone className="w-7 h-7 text-indigo-500 group-hover:text-white transition-colors" />}
                          </div>
                          <h4 className="text-[20px] md:text-[22px] font-black text-gray-900 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-blue-600 transition-all duration-300">
                            {skill.category}
                          </h4>
                        </div>

                        {/* Right Side */}
                        <div className="md:w-[65%] border-l-0 md:border-l-2 border-gray-100 group-hover:border-gradient-to-b group-hover:border-transparent group-hover:bg-gradient-to-b group-hover:from-sky-500 group-hover:to-blue-600 group-hover:bg-[length:2px_100%] group-hover:bg-no-repeat group-hover:bg-left pt-4 md:pt-0 pl-0 md:pl-8 transition-all duration-300">
                          <div className="flex flex-wrap gap-2.5">
                            {skill.items.split(', ').map((item, idx) => (
                              <span 
                                key={idx}
                                className="px-4 py-2 rounded-xl bg-gray-50/50 border border-gray-100 text-[13.5px] font-semibold text-gray-600 hover:bg-white hover:border-sky-200 hover:text-sky-600 hover:shadow-[0_4px_12px_rgb(56,189,248,0.15)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
