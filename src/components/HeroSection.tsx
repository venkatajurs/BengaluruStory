import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const scrollToTimeline = () => {
    const element = document.querySelector('#timeline');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 10;
      const y = (clientY / window.innerHeight - 0.5) * 10;
      backgroundRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with reduced blur */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={backgroundRef}
          className="w-full h-full transition-transform duration-500 ease-out"
        >
          <img
            src="/hero-bg.png"
            alt="Historical Bengaluru"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Softer overlay to show more background */}
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-cream/40 via-white/5 to-heritage-golden/10 pointer-events-none" />
      </div>

      {/* Decorative glow rings */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-heritage-golden/40 rounded-full animate-pulse z-10" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-heritage-maroon/40 rounded-full animate-pulse delay-700 z-10" />

      {/* Main text */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-heritage-maroon mb-6 animate-fade-in">
          Bengaluru Story
          <span className="block text-heritage-olive">The Untold Journey</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-heritage-navy mt-2">
            of a City Reborn
          </span>
        </h1>

        {/* Color changed from golden to navy for visibility */}
        <p className="text-xl md:text-2xl font-playfair font-medium text-heritage-navy mb-8 animate-fade-in delay-300">
          "From Boiled Beans to Silicon Dreams"
        </p>

        <div className="space-y-4 animate-fade-in delay-500">
          <p className="text-lg md:text-xl text-heritage-navy/80 max-w-2xl mx-auto leading-relaxed">
            Explore the centuries of Bengaluru's hidden past through stories that shaped its soul.
            Discover the forgotten tales beyond the modern IT identity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              onClick={scrollToTimeline}
              size="lg"
              className="bg-heritage-maroon hover:bg-heritage-maroon/90 text-heritage-cream font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Start the Journey
            </Button>

            <div className="text-sm text-heritage-navy/60 flex items-center">
              <span className="mr-2 text-heritage-golden">↓</span>
              Scroll to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
