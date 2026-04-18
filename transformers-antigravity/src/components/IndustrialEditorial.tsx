import React from 'react';

const IndustrialEditorial = () => {
  return (
    <section className="py-24 bg-background relative border-t border-white/5">
      <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 text-left">
          <span className="text-display text-tf-cyan text-xs tracking-widest uppercase mb-4 block">
            MECHANICAL EVOLUTION
          </span>
          <h2 className="text-display text-white text-4xl lg:text-5xl uppercase tracking-wider mb-8">
            Precision<br />Performance
          </h2>
          <div className="space-y-6 text-body text-white/60 font-light text-lg">
            <p>
              The fusion of Cybertronian bio-mechanics with Terran engineering yields an anomaly on the battlefield. 
              The Antigravity drive isn't just an engine; it's a living heart pumping synthetic energon through cold steel.
            </p>
            <p>
              Every piston, every gear shifting in harmony, engineered for one singular purpose: total supremacy in high-velocity combat.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div>
              <div className="text-tf-cyan text-3xl font-display mb-1">2.4M</div>
              <div className="text-white/40 text-xs font-display uppercase tracking-widest">Torque Output</div>
            </div>
            <div>
              <div className="text-tf-cyan text-3xl font-display mb-1">0.05s</div>
              <div className="text-white/40 text-xs font-display uppercase tracking-widest">Morph Delay</div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full aspect-square md:aspect-[3/4] glass-metal relative p-4 hover-industrial">
            <div className="absolute inset-0 border border-tf-cyan/20 m-4 pointer-events-none" />
            <img 
              src="/assets/still-bts.jpg" 
              alt="Blueprint details"
              className="w-full h-full object-cover filter grayscale opacity-70"
            />
            {/* Overlay grid */}
            <div 
              className="absolute inset-0 opacity-10 mix-blend-overlay"
              style={{
                backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialEditorial;
