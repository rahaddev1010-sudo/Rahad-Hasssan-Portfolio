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
                    : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
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
                {/* Image Container (Browser Mockup) */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] mb-6 group-hover:-translate-y-2 transition-all duration-500 rounded-[20px] shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-200/50 bg-white">
                  <div className="relative w-full h-full rounded-[20px] bg-white overflow-hidden flex flex-col">
                    {/* Browser Header */}
                    <div className="h-8 bg-[#f5f5f5] flex items-center px-4 gap-2 shrink-0 w-full border-b border-gray-200/80">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                      </div>
                      <div className="ml-4 flex-1 h-5 bg-white rounded-md border border-gray-200/80 flex items-center px-3 overflow-hidden shadow-sm">
                         <span className="text-[9px] text-gray-500 font-medium truncate w-full">{project.link.replace('https://', '')}</span>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="flex-1 w-full h-full relative overflow-hidden bg-gray-100 group-hover:bg-gray-200">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      {/* Badge overlay on image */}
                      <div className="absolute top-4 right-4 z-20 pointer-events-none">
                        <span className="inline-flex items-center justify-center px-3 py-1.5 bg-white/95 backdrop-blur-md text-gray-900 text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg border border-gray-100">
                          {project.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* Content & Action */}
                <div className="flex justify-between items-start gap-4 px-2">
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold text-gray-900 mb-2 group-hover:text-[#60A5FA] transition-colors">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2 pr-4">{project.description}</p>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgb(96,165,250,0.4)] transition-all">
                    <ArrowUpRight className="w-5 h-5" />
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
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold text-[14px] hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] transition-all hover:scale-105"
              >
                Load More Projects
              </button>
            ) : (
              <button 
                onClick={() => setVisibleCount(6)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white font-bold text-[14px] hover:shadow-[0_8px_20px_rgb(96,165,250,0.3)] transition-all hover:scale-105"
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
