import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OriginSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="protocol" ref={ref}>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-tf-cyan/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left: Parallax Image */}
        <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden border border-white/10 glass-metal hover-industrial group">
          <motion.div 
            className="absolute inset-[-10%] w-[120%] h-[120%]"
            style={{ y }}
          >
            <img 
              src="/assets/story-image-new.png" 
              alt="Mechanical joint artifact" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0 filter"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 bg-tf-cyan/5 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
          </motion.div>
          
          {/* HUD Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-tf-cyan/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-tf-cyan/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-tf-cyan/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-tf-cyan/50" />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-tf-cyan" />
            <span className="text-display text-tf-cyan text-sm tracking-[0.2em] uppercase origin-left">
              THE PROTOCOL
            </span>
          </div>
          
          <h2 className="text-display text-white text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
            A Legacy <br/><span className="text-white/40">Reconstructed</span>
          </h2>
          
          <p className="text-body text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
            Deep beneath the Arctic, a signal was found—not a distress call, but a blueprint. The E92 wasn't just built for speed; it was built to house the spark of something ancient.
          </p>

          <div className="flex gap-4">
            <button className="bg-transparent border border-white/20 px-8 py-3 text-body text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300">
              Access Archives
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
