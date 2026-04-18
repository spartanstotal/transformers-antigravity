import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const castData = [
  {
    name: "Optimus Prime",
    title: "The Vanguard",
    desc: "The heavy-metal heart of the resistance.",
    img: "/assets/cast-driver1.jpg"
  },
  {
    name: "Bumblebee",
    title: "The Scout",
    desc: "Redefining velocity through antigravity agility.",
    img: "/assets/cast-driver2.jpg"
  },
  {
    name: "Megatron",
    title: "The Tyrant",
    desc: "Evolution is only achieved through conquest.",
    img: "/assets/cast-principal.jpg"
  },
  {
    name: "Elena Santos",
    title: "Tech Specialist",
    desc: "The human mind behind the interface.",
    img: "/assets/cast-engineer.jpg"
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, rotateX: 15, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const FactionSection = () => {
  return (
    <section className="py-24 relative bg-black/50" id="faction">
      <div className="container-page perspective-1000">
        
        <div className="text-center mb-16">
          <span className="text-display text-tf-cyan text-xs tracking-[0.3em] uppercase block mb-4">
            PRIME DIRECTIVE
          </span>
          <h2 className="text-display text-white text-3xl md:text-4xl uppercase tracking-widest">
            THE FACTION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {castData.map((cast, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="group relative glass-metal overflow-hidden min-h-[400px] flex flex-col justify-end p-6 border-b-2 border-b-transparent hover:border-b-tf-cyan hover-industrial"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={cast.img} 
                  alt={cast.name} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
                <div className="text-tf-cyan text-[10px] uppercase tracking-widest font-display mb-2 opacity-80">
                  {cast.title}
                </div>
                <h3 className="text-display text-white text-xl uppercase tracking-wider mb-3">
                  {cast.name}
                </h3>
                <p className="text-body text-white/50 text-sm h-0 opacity-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 overflow-hidden">
                  {cast.desc}
                </p>
              </div>

              {/* Cyber Accents */}
              <div className="absolute top-4 right-4 text-[10px] text-white/20 font-display">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactionSection;
