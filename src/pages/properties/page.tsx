import { useState, useMemo, useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PropertyCard from '@/pages/home/components/PropertyCard';
import FilterDropdown from '@/pages/properties/components/FilterDropdown';
import { featuredProperties, propertyCategories, type Property } from '@/mocks/properties';
import { fetchAllProperties } from '@/services/propertyService';

const sortOptions = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

const transactionTypes = ['All', 'For Sale', 'For Rent'];
const furnishingOptions = ['All Furnishing', 'Furnished', 'Unfurnished', 'Semi-Furnished'];
const bedroomOptions = ['Bedrooms', '1', '2', '3', '4', '5+'];
const priceRanges = ['All Prices', 'Under 5M', '5M - 15M', '15M - 50M', '50M+'];

function parsePrice(price: string): number {
  return parseInt(price.replace(/,/g, ''), 10) || 0;
}

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [transactionType, setTransactionType] = useState('All');
  const [furnishing, setFurnishing] = useState('All Furnishing');
  const [bedrooms, setBedrooms] = useState('Bedrooms');
  const [priceRange, setPriceRange] = useState('All Prices');
  const [visibleCount, setVisibleCount] = useState(20);

  // Fetch properties from Firebase on mount
  useEffect(() => {
    async function loadProperties() {
      const fetchedProperties = await fetchAllProperties();
      // Combine static featured properties with our fetched properties
      setProperties([...featuredProperties, ...fetchedProperties]);
      setLoading(false);
    }
    loadProperties();
  }, []);

  const filtered = useMemo(() => {
    let result = [...properties];

    if (activeCategory !== 'All') {
      const cat = activeCategory.toLowerCase();
      result = result.filter((p) => p.type.toLowerCase().includes(cat) || p.title.toLowerCase().includes(cat));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (transactionType === 'For Sale') {
      result = result.filter((p) => p.title.toLowerCase().includes('sale'));
    } else if (transactionType === 'For Rent') {
      result = result.filter((p) => p.title.toLowerCase().includes('rent'));
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return result;
  }, [properties, activeCategory, searchQuery, sortBy, transactionType]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleReset = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSortBy('newest');
    setTransactionType('All');
    setFurnishing('All Furnishing');
    setBedrooms('Bedrooms');
    setPriceRange('All Prices');
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <div className="h-16 md:h-20" />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-primary-500 py-16 md:py-24">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-[11px] font-medium rounded-full mb-4">
              Find Your Dream Property
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
              Find Your Dream Property
            </h1>
            <p className="text-white/70 mt-4 text-base md:text-lg leading-relaxed max-w-xl">
              Explore our extensive collection of premium properties across Kenya. Filter by location, price, and type to find exactly what you&apos;re looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="z-30 bg-background-50 border-b border-background-200/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
              <input
                type="text"
                placeholder="Search by property name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-background-200 bg-card text-foreground-950 placeholder:text-foreground-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
              />
            </div>
            <button className="px-6 py-2.5 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
              <i className="ri-search-line" />
              Search
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2">
            <FilterDropdown
              options={transactionTypes.map((t) => ({ label: t, value: t }))}
              value={transactionType}
              onChange={setTransactionType}
            />

            <FilterDropdown
              options={[{ label: 'All Property Type', value: 'All' }, ...propertyCategories.filter((c) => c !== 'All').map((c) => ({ label: c, value: c }))]}
              value={activeCategory}
              onChange={setActiveCategory}
            />

            <FilterDropdown
              options={furnishingOptions.map((f) => ({ label: f, value: f }))}
              value={furnishing}
              onChange={setFurnishing}
            />

            <FilterDropdown
              options={bedroomOptions.map((b) => ({ label: b, value: b }))}
              value={bedrooms}
              onChange={setBedrooms}
            />

            <FilterDropdown
              options={priceRanges.map((p) => ({ label: p, value: p }))}
              value={priceRange}
              onChange={setPriceRange}
            />

            <FilterDropdown
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
            />

            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg bg-accent-500 text-background-50 dark:text-foreground-950 text-[13px] font-medium hover:bg-accent-600 transition-colors whitespace-nowrap shrink-0"
            >
              Reset
            </button>
          </div>

          <p className="text-[13px] text-foreground-500 mt-3">
            Showing <span className="text-foreground-700 font-semibold tabular-nums">{visible.length}</span> of{' '}
            <span className="text-foreground-700 font-semibold tabular-nums">{filtered.length}</span> properties
          </p>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <i className="ri-loader-4-line text-4xl animate-spin text-primary-500 mb-4 inline-block" />
              <p className="text-sm text-foreground-500">Loading properties...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-background-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-2xl text-foreground-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground-800 mb-1">No properties found</h3>
              <p className="text-sm text-foreground-500">Try adjusting your filters or search query.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                {visible.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((c) => c + 12)}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-colors"
                  >
                    View More
                    <i className="ri-arrow-down-s-line" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-primary-500 px-8 py-12 md:px-16 md:py-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-white/70 max-w-lg mx-auto mb-6 text-sm md:text-base">
                Let us know your requirements and our team will curate a personalized list of properties just for you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-background-50 transition-colors"
              >
                <i className="ri-mail-send-line" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}