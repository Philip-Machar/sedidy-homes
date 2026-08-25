import { useState, useEffect } from 'react';
import { fetchAllProperties } from '@/services/propertyService';

const LOCATIONS = [
  {
    id: 'karen',
    name: 'Karen',
    description: 'Luxurious family homes and expansive leafy compounds.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'runda',
    name: 'Runda',
    description: 'Exclusive estates and diplomatic residences.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'riverside',
    name: 'Riverside',
    description: 'Premium apartments and modern commercial hubs.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'westlands',
    name: 'Westlands',
    description: 'Vibrant city living, penthouses, and business centers.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
];

export default function PrimeLocations() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    async function loadLocationCounts() {
      try {
        const properties = await fetchAllProperties('published');
        
        const newCounts: Record<string, number> = {};
        
        LOCATIONS.forEach(loc => {
          // Count properties where the 'General Location' field includes the neighborhood name
          const count = properties.filter(p => 
            p.location?.toLowerCase().includes(loc.name.toLowerCase())
          ).length;
          newCounts[loc.id] = count;
        });
        
        setCounts(newCounts);
      } catch (error) {
        console.error("Failed to load location counts:", error);
      }
    }
    loadLocationCounts();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">Explore Prime Locations</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto text-sm md:text-base">
            Discover premium properties in Kenya's most sought-after neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {LOCATIONS.map((location) => (
            <a
              key={location.id}
              href={`/properties?search=${location.name}`}
              className="group relative h-72 md:h-80 rounded-2xl overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              {/* Background Image */}
              <img
                src={location.image}
                alt={`${location.name} real estate`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{location.name}</h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-arrow-right-up-line text-white" />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm line-clamp-2 mb-3">
                    {location.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary-500/90 backdrop-blur-sm text-white text-[11px] font-semibold rounded-lg">
                    {counts[location.id] !== undefined ? counts[location.id] : '...'} Properties
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}