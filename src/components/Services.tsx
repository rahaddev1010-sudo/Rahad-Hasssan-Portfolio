import { motion } from 'motion/react';
import { services } from '../data';

export const Services = () => {
  return (
    <section id="services" className="section-padding relative bg-transparent">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-shadow p-6 md:p-8 flex flex-col items-start group h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-[22px] font-semibold text-secondary mb-4 leading-snug">{service.title}</h3>
              <p className="text-gray-500 text-base leading-[1.7]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
