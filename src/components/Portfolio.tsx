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
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[32px] bg-gray-100 aspect-[4/5] mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-1.5 bg-gray-900/80 backdrop-blur-md text-white text-[12px] font-bold rounded-full shadow-lg">
                      {project.tag}
                    </span>
                  </div>
                </div>
                
                {/* Content & Action */}
                <div className="flex justify-between items-start gap-4 px-2">
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold text-gray-900 mb-2 group-hover:text-[#60A5FA] transition-colors">{project.title}</h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2 pr-4">{project.description}</p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#60A5FA] via-indigo-500 to-purple-500 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgb(96,165,250,0.4)] transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
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
