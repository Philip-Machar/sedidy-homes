// File: src/pages/home/page.tsx
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import ExploreProperties from './components/ExploreProperties';
import FeaturedProperties from './components/FeaturedProperties';
import PrimeLocations from './components/PrimeLocations';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FadeInScroll from '@/components/base/FadeInScroll'; // <-- Import the new component

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main className="min-h-screen">
        {/* The Hero usually animates on load, so we leave it as is */}
        <HeroSection />
        
        {/* Wrap subsequent sections to reveal on scroll */}
        <FadeInScroll>
          <ExploreProperties />
        </FadeInScroll>
        
        <FadeInScroll>
          <FeaturedProperties />
        </FadeInScroll>
        
        <FadeInScroll>
          <PrimeLocations />
        </FadeInScroll>
        
        <FadeInScroll>
          <WhyChooseUs />
        </FadeInScroll>
        
        <FadeInScroll>
          <Testimonials />
        </FadeInScroll>
      </main>
      <Footer />
    </div>
  );
}