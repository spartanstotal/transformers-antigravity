import React from 'react';

const specs = [
  { label: "Machine", value: "E92 Cyber-Spec" },
  { label: "Drive", value: "Antigravity V2" },
  { label: "Status", value: "Combat Ready" },
  { label: "Pilot", value: "Classified" },
  { label: "Armor", value: "Nano-Brushed Steel" },
  { label: "Audio", value: "Atmos-Industrial" },
  { label: "Power", value: "Energon-Synthetic" },
  { label: "Origin", value: "Cybertron" },
  { label: "Speed", value: "Mach 2.4" },
  { label: "Signature", value: "Autobot Verified" }
];

const TechStrip = () => {
  return (
    <div className="w-full bg-tf-cyan/5 border-y border-tf-cyan/20 overflow-hidden py-4 relative flex z-10" id="specifications">
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>

      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {/* Render the list multiple times to loop seamlessly */}
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex shrink-0">
            {specs.map((item, index) => (
              <div key={`${arrayIndex}-${index}`} className="flex items-center mx-8">
                <span className="text-display text-tf-cyan/40 text-xs tracking-widest uppercase mr-3">
                  {item.label}
                </span>
                <span className="text-body text-white/90 text-sm tracking-wider uppercase">
                  {item.value}
                </span>
                <span className="mx-8 text-tf-cyan/20">///</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStrip;
