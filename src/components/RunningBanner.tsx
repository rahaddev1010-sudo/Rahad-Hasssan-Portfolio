import { skills } from '../data';

export const RunningBanner = () => {
  // Extract all items into a single array
  const allSkills = skills.reduce((acc, skill) => {
    return [...acc, ...skill.items.split(', ')];
  }, [] as string[]);

  // Duplicate for seamless loop
  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <div className="w-full bg-[#0F172A] py-5 overflow-hidden border-y border-white/10 flex items-center relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap items-center w-max animate-marquee">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white/80 font-semibold text-[15px] tracking-widest uppercase mx-8">
              {item}
            </span>
            <span className="text-blue-500/50 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
