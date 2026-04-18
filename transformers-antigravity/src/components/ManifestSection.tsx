import React from 'react';

const ManifestSection = () => {
  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      <div className="container-page flex flex-col items-center text-center">
        <h2 className="text-display text-tf-cyan text-xl md:text-2xl uppercase tracking-[0.5em] mb-4">
          GLOBAL RELEASE
        </h2>
        <div className="text-display text-white text-6xl md:text-8xl tracking-widest mb-12">
          2026
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl opacity-70">
          <div className="border border-white/10 p-6 glass-metal hover-industrial group">
            <h4 className="text-display text-white text-lg uppercase mb-2 group-hover:text-tf-cyan transition-colors">Theaters</h4>
            <p className="text-body text-white/50 text-sm">Experience the metal clash in IMAX 3D.</p>
          </div>
          <div className="border border-white/10 p-6 glass-metal hover-industrial group">
            <h4 className="text-display text-white text-lg uppercase mb-2 group-hover:text-tf-cyan transition-colors">Digital</h4>
            <p className="text-body text-white/50 text-sm">Secure your highly classified digital copy.</p>
          </div>
          <div className="border border-white/10 p-6 glass-metal hover-industrial group">
            <h4 className="text-display text-white text-lg uppercase mb-2 group-hover:text-tf-cyan transition-colors">Meridian</h4>
            <p className="text-body text-white/50 text-sm">Exclusive physical drops via Antigravity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
