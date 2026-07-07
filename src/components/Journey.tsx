import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Code2, Sparkles, BookOpen } from 'lucide-react';
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
          <div className="inline-flex bg-white rounded-full p-1.5 border border-gray-100 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-2.5 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white shadow-[0_4px_12px_rgb(96,165,250,0.3)] transform scale-[1.02]'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
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
                  <div key={index} className="group bg-white border border-sky-100/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(56,189,248,0.08)] transition-all duration-300">
                    
                    {/* Top Header Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-8 py-5 border-b border-sky-50/50 bg-sky-50/30">
                      <div className="flex items-center text-[15px] font-bold text-gray-800 mb-2 sm:mb-0">
                        <div className="w-2 h-2 rounded-sm bg-[#60A5FA] mr-3 shadow-[0_0_8px_rgb(96,165,250,0.5)]"></div>
                        {item.role}
                      </div>
                      <div className="text-[12px] font-bold text-gray-400 tracking-wider uppercase">
                        {item.period}
                      </div>
                    </div>

                    {/* Content Row */}
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center px-8 py-8 relative">
                      {/* Left side logo/company area */}
                      <div className="md:w-[30%] shrink-0 flex items-center gap-4">
                        <div className="w-14 h-14 shrink-0 bg-[#F0F9FF] shadow-sm border border-sky-100 flex items-center justify-center rounded-2xl text-[#60A5FA] group-hover:scale-110 group-hover:bg-[#60A5FA] group-hover:text-white transition-all duration-500">
                          <item.icon size={24} strokeWidth={2.5} />
                        </div>
                        <h4 className="text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight leading-tight">
                          {item.company}
                        </h4>
                      </div>
                      
                      {/* Right side description */}
                      <div className="md:w-[70%]">
                        <p className="text-gray-600 text-[14.5px] leading-[1.7] border-l-2 border-sky-100 pl-6 group-hover:border-[#60A5FA] transition-colors duration-300">
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
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid md:grid-cols-2 gap-6"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="group bg-white border border-sky-100/60 rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(96,165,250,0.08)] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-[#60A5FA]/10 transition-colors duration-500"></div>
                    
                    <div className="flex items-center mb-5 text-[16px] font-bold text-gray-900 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] text-[#60A5FA] flex items-center justify-center mr-4 group-hover:bg-[#60A5FA] group-hover:text-white transition-colors duration-300">
                        <Code2 className="w-5 h-5" />
                      </div>
                      {skill.category}
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-sky-100 to-transparent mb-5"></div>
                    <p className="text-gray-600 text-[14.5px] leading-[1.7] relative z-10 font-medium">
                      {skill.items}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
