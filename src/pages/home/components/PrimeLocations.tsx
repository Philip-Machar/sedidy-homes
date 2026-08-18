import { primeLocations } from '@/mocks/properties';

export default function PrimeLocations() {
  return (
    <section className="py-20 px-4 bg-background-100/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
            Explore Prime Locations
          </h2>
          <p className="text-foreground-500 text-lg max-w-2xl mx-auto">
            Discover our curated selection of the most sought-after neighborhoods
            and investment hotspots
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primeLocations.map((loc) => (
            <a key={loc.name} href={`/locations/${loc.name.toLowerCase()}`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl h-48 mb-4">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-background-50/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-background-50/30 transition-all">
                      <i className="ri-arrow-right-line text-white text-lg" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-foreground-950 mb-1">
                  {loc.name}
                </h3>
                <p className="text-sm text-primary-600 font-semibold mb-2">
                  {loc.propertyCount} properties
                </p>
                <p className="text-sm text-foreground-500">{loc.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}