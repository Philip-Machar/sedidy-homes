import { featuredProperties } from '@/mocks/properties';
import PropertyCard from './PropertyCard';

export default function FeaturedProperties() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
              Featured Properties
            </h2>
            <p className="text-foreground-500 text-lg">
              Handpicked premium properties with the highest potential
            </p>
          </div>
          <a href="/featured">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border bg-background-50 shadow-xs h-9 rounded-full px-8 py-6 text-base font-medium group transition-all duration-300 hover:bg-primary-500 hover:text-primary-foreground border-background-200"
            >
              View All Featured
              <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform" />
            </button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}