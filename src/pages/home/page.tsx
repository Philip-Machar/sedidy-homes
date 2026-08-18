import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import ExploreProperties from './components/ExploreProperties';
import FeaturedProperties from './components/FeaturedProperties';
import PrimeLocations from './components/PrimeLocations';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ExploreProperties />
        <FeaturedProperties />
        <PrimeLocations />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}