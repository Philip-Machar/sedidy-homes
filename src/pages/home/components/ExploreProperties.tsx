import { useState, useEffect } from 'react';
import { propertyCategories, type Property } from '@/mocks/properties';
import { fetchAllProperties } from '@/services/propertyService';
import PropertyCard from './PropertyCard';

export default function ExploreProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProperties() {
      const data = await fetchAllProperties();
      setProperties(data);
      setLoading(false);
    }
    loadProperties();
  }, []);

  const filtered =
    activeCategory === 'All'
      ? properties
      : properties.filter(
          (p) => p.type.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section className="py-16 md:py-24 bg-background-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">
              Browse Listings
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mt-1.5 tracking-tight">
              Explore Properties
            </h2>
          </div>
          <a
            href="/properties"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-500 hover:text-foreground-950 transition-colors group shrink-0"
          >
            View all properties
            <i className="ri-arrow-right-line text-sm group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Categories Tab */}
        <div className="hidden md:flex flex-wrap gap-1.5 mb-8">
          {propertyCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-lg text-[13px] font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-primary-foreground'
                  : 'text-foreground-500 hover:text-foreground-950 hover:bg-foreground-950/[0.04]'
              }`}
            >
              {activeCategory === cat && (
                <div className="absolute inset-0 bg-primary-500 rounded-lg" />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Loading / Grid */}
        {loading ? (
          <div className="text-center py-16">
            <i className="ri-loader-4-line text-3xl animate-spin text-primary-500" />
            <p className="text-sm text-foreground-500 mt-2">Loading properties...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}