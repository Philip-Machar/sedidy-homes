import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { fetchAllProperties } from '@/services/propertyService';
import type { Property } from '@/mocks/properties';

export default function FeaturedProperties() {
  const [hotDeals, setHotDeals] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHotDeals() {
      try {
        // Fetch all published properties from your real Firebase database
        const properties = await fetchAllProperties('published');
        // Filter strictly for properties you marked as "Hot Deal"
        const deals = properties.filter((p) => p.hotDeal === true).slice(0, 6);
        setHotDeals(deals);
      } catch (error) {
        console.error("Failed to load hot deals:", error);
      } finally {
        setLoading(false);
      }
    }
    loadHotDeals();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Featured Hot Deals</h2>
            <p className="text-foreground-500 text-sm md:text-base">
              Handpicked properties offering exceptional value. Act fast—these exclusive deals won't last long!
            </p>
          </div>
          <a
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 whitespace-nowrap group"
          >
            View all properties
            <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <i className="ri-loader-4-line text-4xl animate-spin text-primary-500 inline-block mb-4" />
            <p className="text-foreground-500">Loading hot deals...</p>
          </div>
        ) : hotDeals.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl border border-background-200 shadow-sm max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-fire-line text-3xl text-primary-500" />
            </div>
            <h3 className="text-lg font-bold text-foreground-800">No Hot Deals Right Now</h3>
            <p className="text-sm text-foreground-500 mt-2 mb-6">We currently don't have any properties marked as Hot Deals. Check back later or browse our full catalog.</p>
            <a href="/properties" className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
              View All Properties
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hotDeals.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}