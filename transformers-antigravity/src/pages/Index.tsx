import React from 'react';
import Navbar from '../components/Navbar';
import TransformHeroSection from '../components/TransformHeroSection';
import TechStrip from '../components/TechStrip';
import OriginSection from '../components/OriginSection';
import FactionSection from '../components/FactionSection';
import HorizontalScroll from '../components/HorizontalScroll';
import SignalSection from '../components/SignalSection';
import IndustrialEditorial from '../components/IndustrialEditorial';
import ManifestSection from '../components/ManifestSection';
import FinalCTA from '../components/FinalCTA';
import ScrollReveal from '../components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground selection:bg-tf-cyan selection:text-black">
      <Navbar />
      <main>
        <TransformHeroSection />
        <TechStrip />
        
        <ScrollReveal>
          <OriginSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <FactionSection />
        </ScrollReveal>
        
        <HorizontalScroll />
        
        <ScrollReveal>
          <SignalSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <IndustrialEditorial />
        </ScrollReveal>
        
        <ScrollReveal>
          <ManifestSection />
        </ScrollReveal>
        
        <FinalCTA />
      </main>
    </div>
  );
};

export default Index;
