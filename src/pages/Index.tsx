
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Timeline from '@/components/Timeline';
import UntoldStories from '@/components/UntoldStories';
import MapsArchitecture from '@/components/MapsArchitecture';
import CulturalLegacy from '@/components/CulturalLegacy';
import References from '@/components/References';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-heritage-cream">
      <Navigation />
      <HeroSection />
      <Timeline />
      <UntoldStories />
      <MapsArchitecture />
      <CulturalLegacy />
      <References />
      <Footer />
    </div>
  );
};

export default Index;
