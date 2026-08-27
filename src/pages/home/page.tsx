// File: src/pages/home/page.tsx
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import SEO from '@/components/feature/SEO';
import HeroSection from './components/HeroSection';
import ExploreProperties from './components/ExploreProperties';
import FeaturedProperties from './components/FeaturedProperties';
import PrimeLocations from './components/PrimeLocations';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FadeInScroll from '@/components/base/FadeInScroll';

export default function Home() {
  // Define Sedidy Homes as a local real estate business to Google
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sedidy Homes",
    "image": "https://static.readdy.ai/image/fe5858082443eeff1e1c88cf3b867878/edd0819509b061b2db54eb05bd38ce9d.webp",
    "description": "Nairobi's premier real estate agency specializing in luxury properties in Karen, Runda, Westlands, and Kilimani.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Riverside Drive",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "telephone": "+254796476637",
    "url": "https://www.kenyaclassichomes.com"
  });

  return (
    <div className="min-h-screen bg-background-50">
      <SEO 
        title="Sedidy Homes | Luxury Real Estate in Nairobi (Karen, Runda, Westlands, Kilimani, Lavington)"
        description="Discover premium apartments, villas, and mansions for rent and sale in Nairobi's most prestigious neighbourhoods, including Karen, Runda, Kilimani, and Westlands."
        schema={schema}
      />
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <FadeInScroll><ExploreProperties /></FadeInScroll>
        <FadeInScroll><FeaturedProperties /></FadeInScroll>
        <FadeInScroll><PrimeLocations /></FadeInScroll>
        <FadeInScroll><WhyChooseUs /></FadeInScroll>
        <FadeInScroll><Testimonials /></FadeInScroll>
      </main>
      <Footer />
    </div>
  );
}