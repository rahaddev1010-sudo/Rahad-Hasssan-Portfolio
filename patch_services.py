import sys

content = open('src/components/Services.tsx').read()
header = """
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-sky-200 text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 shadow-sm bg-sky-50/50">
            SERVICES
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] font-bold text-gray-900 leading-[1.2]"
          >
            What I Can Do For You
          </motion.h2>
        </div>
"""

content = content.replace('<div className="grid md:grid-cols-2', header + '        <div className="grid md:grid-cols-2')

with open('src/components/Services.tsx', 'w') as f:
    f.write(content)
