import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TransformHeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    // Load initial frame to avoid flash
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 231;
    const currentFrame = (index: number) => 
      `/hero-sequence/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

    const images: HTMLImageElement[] = [];
    const imageInfo = { frame: 0 };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      const img = images[Math.round(imageInfo.frame)];
      if (img && img.complete) {
        // Draw image covering the canvas (object-fit: cover equivalent)
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Preload images and render first frame when it loads
    images[0].onload = render;
    
    // Also trigger a render immediately just in case it was cached and already loaded
    if (images[0].complete) {
      render();
    }

    // Wait until at least first image loads then setup ScrollTrigger
    let animation = gsap.to(imageInfo, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
      onUpdate: render,
    });

    // Resize handling
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', handleResize);

    // Text Overlay Animation (scrub through the hero height)
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "10% top", 
          end: "80% top",
          scrub: true,
        }
      }
    );

    return () => {
      window.removeEventListener('resize', handleResize);
      animation.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      {/* Fixed Background Canvas */}
      <div className="fixed top-0 left-0 h-screen w-full overflow-hidden -z-10 bg-black">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
        <div className="scanline"></div>
        {/* Gradients to blend edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-50" />
      </div>

      {/* Hero Content Layer (Occupies only 100vh instead of 500vh) */}
      <div ref={containerRef} className="relative h-[100vh] w-full flex flex-col justify-end items-center pb-32 px-4 z-10">
        <div ref={textRef} className="text-center max-w-4xl mx-auto opacity-0">
          <h1 className="text-display text-white text-[clamp(40px,7vw,80px)] leading-[0.9] tracking-tight mb-6 cyan-glow uppercase">
            BORN ON EARTH. FORGED IN STARS.
          </h1>
          <p className="text-body text-white/70 text-lg md:text-xl lg:text-2xl font-light uppercase tracking-wide max-w-2xl mx-auto border-l-2 border-tf-cyan pl-4 text-left">
            The discovery of the Antigravity drive changes the war forever. A new evolution begins.
          </p>
        </div>
      </div>
    </>
  );
};

export default TransformHeroSection;
