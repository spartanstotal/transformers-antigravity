import React from 'react';
import { Play } from 'lucide-react';

const SignalSection = () => {
  return (
    <section className="py-32 relative flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Background */}
      <img 
        src="/assets/trailer-bg.jpg" 
        alt="BMW in Dark Hangar"
        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <span className="text-display text-tf-cyan text-sm tracking-[0.4em] uppercase mb-8">
          INTERCEPTED SIGNAL
        </span>
        
        <button className="w-24 h-24 md:w-32 md:h-32 rounded-full glass-metal border-tf-cyan/30 flex items-center justify-center group hover-industrial mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-tf-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <Play className="w-10 h-10 md:w-12 md:h-12 text-white group-hover:text-tf-cyan group-hover:scale-110 transition-all duration-300 ml-2" />
        </button>

        <h2 className="text-display text-white text-3xl md:text-5xl uppercase tracking-widest max-w-2xl px-4 cyan-glow">
          "THE WAR DIDN'T END. IT JUST WENT UNDERGROUND."
        </h2>
      </div>
    </section>
  );
};

export default SignalSection;
