import React from 'react';

const FinalCTA = () => {
  return (
    <footer className="py-12 bg-background border-t-2 border-tf-cyan/20">
      <div className="container-page flex flex-col items-center">
        <h2 className="text-display text-white text-2xl md:text-3xl uppercase tracking-[0.2em] mb-8 text-center">
          Join the <span className="text-tf-cyan">Resistance</span>
        </h2>
        
        <div className="flex w-full max-w-md mx-auto mb-16">
          <input 
            type="email" 
            placeholder="ENTER ENCRYPTION KEY [EMAIL]" 
            className="w-full bg-white/5 border border-white/20 text-body text-white px-4 py-3 outline-none focus:border-tf-cyan transition-colors"
          />
          <button className="bg-tf-cyan text-black font-display font-bold px-6 py-3 uppercase tracking-widest hover:bg-white transition-colors whitespace-nowrap">
            Transmit
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-white/10 pt-8 mt-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-display text-tf-cyan text-[20px] font-bold leading-none cyan-glow">TF</span>
            <span className="text-body text-white/50 uppercase tracking-[0.3em] text-[10px]">&copy; 2026 ANTIGRAVITY CORP</span>
          </div>
          
          <div className="flex gap-6 text-body text-xs text-white/40 uppercase tracking-widest">
            <a href="#" className="hover:text-tf-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-tf-cyan transition-colors">Terms</a>
            <a href="#" className="hover:text-tf-cyan transition-colors">Classified</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FinalCTA;
