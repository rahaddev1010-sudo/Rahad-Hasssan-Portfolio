import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';

const tabs = ['All', 'WordPress', 'Elementor', 'WooCommerce'];

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = projects.filter(project => 
    activeTab === 'All' ? true : project.tag === activeTab
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="work" className="section-padding bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-6 shadow-sm bg-white">
              PORTFOLIO
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-[1.2]">
              Featured Client Work
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-1.5 p-1.5 bg-sky-50/60 rounded-full border border-sky-100"
          >
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCount(6);
                }}
                className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white shadow-[0_4px_12px_rgb(96,165,250,0.3)]'
                    : 'text-gray-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#60A5FA] hover:to-purple-500 hover:bg-white/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative flex flex-col"
              >
                {/* Premium Mockup Container */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] sm:aspect-[16/11] mb-6 group-hover:-translate-y-2 transition-all duration-500 rounded-[24px] overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-white/60">
                  {/* Background Blur Shapes */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-200/40 transition-colors duration-700"></div>
                     <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100/40 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 group-hover:bg-purple-200/40 transition-colors duration-700"></div>
                  </div>

                  {/* MacBook Mockup */}
                  <div className="absolute left-[8%] top-[10%] right-[8%] bottom-[15%] z-10 flex flex-col items-center group-hover:scale-[1.02] transition-transform duration-700">
                    {/* Screen */}
                    <div className="w-full flex-1 bg-[#1A1A1A] rounded-t-xl sm:rounded-t-2xl p-1.5 sm:p-2 shadow-2xl relative border border-gray-800/50">
                       {/* Camera dot */}
                       <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-800 rounded-full"></div>
                       <div className="w-full h-full bg-white rounded-t-md sm:rounded-t-lg overflow-hidden relative">
                         <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                       </div>
                    </div>
                    {/* Keyboard Base */}
                    <div className="w-[115%] h-3 sm:h-4 bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1] rounded-b-xl sm:rounded-b-2xl relative shadow-[0_10px_20px_rgb(0,0,0,0.15)] flex justify-center border-t border-white/50">
                      {/* Trackpad notch */}
                      <div className="w-1/4 h-1 sm:h-1.5 bg-[#94A3B8]/50 rounded-b-md shadow-inner"></div>
                    </div>
                  </div>

                  {/* iPhone Mockup (Bottom Left) */}
                  <div className="absolute left-[6%] bottom-[6%] w-[24%] aspect-[1/2.1] z-20 bg-[#1A1A1A] rounded-[16px] sm:rounded-[24px] p-1 sm:p-1.5 shadow-[0_15px_35px_rgb(0,0,0,0.25)] border border-gray-700/50 group-hover:scale-[1.08] group-hover:-translate-y-2 group-hover:rotate-[-2deg] transition-all duration-500 ease-out">
                    <div className="w-full h-full bg-white rounded-[12px] sm:rounded-[20px] overflow-hidden relative border border-black/20">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-3 sm:h-4 bg-[#1A1A1A] rounded-b-xl sm:rounded-b-2xl z-10"></div>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-left-top" />
                    </div>
                  </div>

                  {/* Floating Tech Badge (Top Left) */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 delay-100">
                     <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-md text-gray-900 text-[10px] sm:text-xs font-bold rounded-xl shadow-[0_8px_16px_rgb(0,0,0,0.08)] border border-white">
                        <span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgb(96,165,250,0.6)]"></span>
                        {project.tag}
                     </span>
                  </div>

                  {/* Floating Analytics Badge (Right Side) */}
                  <div className="absolute top-1/4 -right-2 z-20 pointer-events-none hidden sm:flex flex-col gap-2">
                     <div className="px-3 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-[0_8px_20px_rgb(0,0,0,0.08)] border border-white/60 flex items-center gap-2 transform translate-x-10 opacity-0 group-hover:-translate-x-6 group-hover:opacity-100 transition-all duration-500 delay-150">
                        <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <div className="flex flex-col pr-2">
                           <span className="text-[11px] font-bold text-gray-900 leading-tight">Premium</span>
                           <span className="text-[9px] font-medium text-gray-500">Quality</span>
                        </div>
                     </div>
                  </div>
                </a>
                
                {/* Content & Action */}
                <div className="flex justify-between items-start gap-4 px-2">
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2 pr-4">{project.description}</p>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgb(96,165,250,0.4)] transition-all">
                    <motion.div
                      whileHover={{ x: 3, y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-12">
            {visibleCount < filteredProjects.length ? (
              <button 
                onClick={handleLoadMore}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold text-[14px] hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] transition-all hover:-translate-y-1 hover:scale-105 duration-300"
              >
                Load More Projects
              </button>
            ) : (
              <button 
                onClick={() => setVisibleCount(6)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold text-[14px] hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] transition-all hover:-translate-y-1 hover:scale-105 duration-300"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
