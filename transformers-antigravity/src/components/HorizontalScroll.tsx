import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { img: "/assets/still-pitstop.jpg", title: "The Hangar Refit" },
  { img: "/assets/still-cockpit.jpg", title: "Heads-Up Display POV" },
  { img: "/assets/still-racing.jpg", title: "The Mach Pursuit" },
  { img: "/assets/still-bts.jpg", title: "Mechanical Blueprints" },
  { img: "/assets/still-aerial.jpg", title: "The Cybertronian Descent" }
];

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ctx = gsap.context(() => {
      // Create the horizontal scrolling effect
      const panelsArray = gsap.utils.toArray('.horizontal-panel');
      
      gsap.to(panelsArray, {
        xPercent: -100 * (panelsArray.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panelsArray.length - 1),
          start: "top top",
          end: () => "+=" + track.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="overflow-hidden bg-black/80 relative">
      <div 
        ref={trackRef} 
        className="flex w-[500vw] h-screen will-change-transform"
      >
        {panels.map((panel, idx) => (
          <div 
            key={idx} 
            className="horizontal-panel w-screen h-screen flex-shrink-0 relative overflow-hidden flex items-center justify-center p-8 md:p-24"
          >
            {/* Background blurred element */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm scale-110"
              style={{ backgroundImage: `url(${panel.img})` }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

            {/* Inner Content */}
            <div className="relative w-full max-w-6xl aspect-video glass-metal shadow-2xl overflow-hidden group z-20">
              <img 
                src={panel.img} 
                alt={panel.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-px bg-tf-cyan" />
                  <span className="text-display text-tf-cyan text-xs tracking-widest uppercase">
                    ARCHIVE // {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-display text-white text-2xl md:text-4xl uppercase tracking-wider">
                  {panel.title}
                </h3>
              </div>
            </div>
            
            {/* Corner Indicators for aesthetics */}
            <div className="absolute top-12 left-12 text-white/20 font-display text-xs tracking-widest uppercase">REC</div>
            <div className="absolute bottom-12 right-12 text-white/20 font-display text-xs tracking-widest uppercase">
              7N - {Math.floor(Math.random() * 9999)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
