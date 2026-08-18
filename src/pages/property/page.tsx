import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PropertyCard from '@/pages/home/components/PropertyCard';
import ImageGallery from '@/pages/property/components/ImageGallery';
import { exploreProperties, featuredProperties } from '@/mocks/properties';

const allProperties = [...featuredProperties, ...exploreProperties];

const agent = {
  name: 'Brian Kiprotich',
  role: 'Senior Property Consultant',
  phone: '+254 796 476 637',
  email: 'brian@sedidyhomes.com',
  image: 'https://readdy.ai/api/search-image?query=Professional%20African%20male%20real%20estate%20agent%20portrait%20headshot%20wearing%20navy%20suit%20and%20tie%20warm%20smile%20clean%20studio%20background%20corporate%20headshot%20photography&width=200&height=200&seq=agent-james&orientation=squarish',
  experience: '8+ years',
  listings: 47,
};

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [favorited, setFavorited] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const property = useMemo(() => {
    return allProperties.find((p) => p.id === id);
  }, [id]);

  const related = useMemo(() => {
    if (!property) return [];
    return allProperties
      .filter((p) => p.id !== property.id)
      .filter((p) => {
        const sameType = p.type === property.type;
        const sameLocation = p.location.split(',')[0].trim() === property.location.split(',')[0].trim();
        return sameType || sameLocation;
      })
      .slice(0, 4);
  }, [property]);

  const statusLabel = useMemo(() => {
    if (!property?.status) {
      // infer from title
      if (property?.title.toLowerCase().includes('rent')) return 'For Rent';
      if (property?.title.toLowerCase().includes('sale')) return 'For Sale';
      return 'Available';
    }
    return property.status === 'rent' ? 'For Rent' : 'For Sale';
  }, [property]);

  const statusColor = statusLabel === 'For Sale' ? 'bg-primary-500' : 'bg-accent-500';

  const images = useMemo(() => {
    if (!property) return [];
    if (property.images && property.images.length > 0) return property.images;
    return [property.image, property.image, property.image];
  }, [property]);

  if (!property) {
    return (
      <div className="min-h-screen bg-background-50">
        <Navbar />
        <div className="h-16 md:h-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-16 h-16 bg-background-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-home-gear-line text-2xl text-foreground-400" />
          </div>
          <h1 className="text-xl font-bold text-foreground-800 mb-2">Property Not Found</h1>
          <p className="text-sm text-foreground-500 mb-6">The property you are looking for does not exist or has been removed.</p>
          <a
            href="/properties"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors"
          >
            <i className="ri-arrow-left-line" />
            Browse Properties
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const locationQuery = encodeURIComponent(property.location);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareOpen(false);
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <div className="h-16 md:h-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-5">
          <a
            href="/properties"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground-600 hover:text-foreground-900 hover:bg-background-100 rounded-xl transition-colors"
          >
            <i className="ri-arrow-left-line" />
            <span className="hidden sm:inline">Back to Listings</span>
          </a>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShareOpen(!shareOpen)}
                className="w-9 h-9 rounded-full border border-background-200 bg-card hover:bg-background-100 flex items-center justify-center transition-colors"
                aria-label="Share listing"
              >
                <i className="ri-share-line text-sm text-foreground-600" />
              </button>
              {shareOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-background-50 rounded-xl border border-background-200 shadow-lg shadow-black/5 z-40 py-1 animate-[dropdown-in_0.15s_ease-out]">
                  <button
                    onClick={copyLink}
                    className="w-full text-left px-4 py-2.5 text-[13px] text-foreground-700 hover:bg-background-100 transition-colors flex items-center gap-2"
                  >
                    <i className="ri-link text-foreground-400" />
                    Copy Link
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Check out this property: ${property.title} - ${window.location.href}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left px-4 py-2.5 text-[13px] text-foreground-700 hover:bg-background-100 transition-colors flex items-center gap-2"
                  >
                    <i className="ri-whatsapp-line text-foreground-400" />
                    WhatsApp
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => setFavorited(!favorited)}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                favorited
                  ? 'border-red-200 bg-red-50'
                  : 'border-background-200 bg-card hover:bg-background-100'
              }`}
              aria-label="Add to favorites"
            >
              <i
                className={`text-sm ${
                  favorited ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-foreground-600'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <ImageGallery images={images} title={property.title} />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start mt-6">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Title + Meta */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-[11px] font-semibold text-white uppercase tracking-wide ${statusColor}`}>
                  {statusLabel}
                </span>
                {property.hotDeal && (
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold text-white uppercase tracking-wide bg-orange-500">
                    Hot Deal
                  </span>
                )}
                {property.fullyFurnished && (
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold text-white uppercase tracking-wide bg-foreground-700/80">
                    Fully Furnished
                  </span>
                )}
                {property.underConstruction && (
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold text-black uppercase tracking-wide bg-yellow-500"
>
                    Under Construction
                  </span>
                )}
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground-950 leading-tight mb-3">
                {property.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-foreground-500">{property.currency}</span>
                  <span className="text-2xl sm:text-3xl font-bold text-primary-600 tracking-tight">
                    {property.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-foreground-500">
                  <i className="ri-map-pin-line text-sm" />
                  <span>{property.location}</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-card rounded-2xl border border-background-200 p-5 md:p-6">
              <h2 className="text-lg font-semibold text-foreground-950 mb-4">Overview</h2>
              <p className="text-sm md:text-[15px] text-foreground-700 leading-[1.8] whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="bg-card rounded-2xl border border-background-200 p-5 md:p-6">
                <h2 className="text-lg font-semibold text-foreground-950 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                        <i className="ri-check-line text-xs text-primary-600" />
                      </div>
                      <span className="text-sm text-foreground-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            <div className="bg-card rounded-2xl border border-background-200 p-5 md:p-6">
              <h2 className="text-lg font-semibold text-foreground-950 mb-4">Location</h2>
              <div className="rounded-xl overflow-hidden border border-background-200">
                <iframe
                  title={`Map of ${property.location}`}
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.3!2d36.8!3d-1.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDguMCJTIDM2wrA0OCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1!5m2!1sen!2ske&q=${locationQuery}`}
                  className="w-full h-64 md:h-80"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-sm text-foreground-500 mt-3 flex items-center gap-1.5">
                <i className="ri-map-pin-2-line" />
                {property.location}
              </p>
            </div>
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Property Details Card */}
              <div className="bg-card rounded-2xl border border-background-200 p-5">
                <h3 className="font-semibold text-foreground-950 mb-4">Property Details</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-background-100">
                    <span className="text-[10px] text-foreground-500 uppercase font-semibold tracking-wider">Beds</span>
                    <span className="text-lg font-bold text-foreground-950">{property.beds ?? '-'}</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-background-100">
                    <span className="text-[10px] text-foreground-500 uppercase font-semibold tracking-wider">Baths</span>
                    <span className="text-lg font-bold text-foreground-950">{property.baths ?? '-'}</span>
                  </div>
                  {property.sqft && (
                    <div className="flex flex-col gap-1 p-3 rounded-xl bg-background-100">
                      <span className="text-[10px] text-foreground-500 uppercase font-semibold tracking-wider">Size</span>
                      <span className="text-lg font-bold text-foreground-950">{property.sqft}</span>
                    </div>
                  )}
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-background-100">
                    <span className="text-[10px] text-foreground-500 uppercase font-semibold tracking-wider">Year Built</span>
                    <span className="text-lg font-bold text-foreground-950">{property.yearBuilt ?? '-'}</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-background-100">
                    <span className="text-[10px] text-foreground-500 uppercase font-semibold tracking-wider">Type</span>
                    <span className="text-lg font-bold text-foreground-950 capitalize">{property.type}</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-background-100">
                    <span className="text-[10px] text-foreground-500 uppercase font-semibold tracking-wider">Status</span>
                    <span className="text-lg font-bold text-foreground-950 capitalize">{statusLabel}</span>
                  </div>
                </div>
              </div>

              {/* Agent Card */}
              <div className="bg-card rounded-2xl border border-background-200 p-5">
                <h3 className="font-semibold text-foreground-950 mb-4">Listed By</h3>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-12 h-12 rounded-full object-cover border border-background-200"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-semibold text-foreground-950 text-sm">{agent.name}</p>
                    <p className="text-xs text-foreground-500">{agent.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground-500 mb-4">
                  <span className="px-2 py-1 bg-background-100 rounded-md">{agent.experience} experience</span>
                  <span className="px-2 py-1 bg-background-100 rounded-md">{agent.listings} listings</span>
                </div>

                <a
                  href={`tel:${agent.phone.replace(/\s/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition-colors active:scale-[0.98]"
                >
                  <i className="ri-phone-line" />
                  Contact Agent
                </a>
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-background-200 bg-card text-foreground-700 text-sm font-semibold rounded-xl hover:bg-background-100 transition-colors mt-2"
                >
                  <i className="ri-calendar-schedule-line" />
                  Schedule Tour
                </a>
              </div>

              {/* Quick Info */}
              <div className="bg-primary-50/50 rounded-2xl border border-primary-100/60 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <i className="ri-shield-check-line text-primary-600 text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground-800">Verified Property</p>
                    <p className="text-xs text-foreground-500 mt-1">
                      This listing has been verified by our team and includes all essential documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-background-200">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground-950 mb-2">Related Properties</h2>
              <p className="text-sm text-foreground-500">
                Discover other properties with similar features and location.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}