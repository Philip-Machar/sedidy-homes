import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import PropertyCard from '@/pages/home/components/PropertyCard';
import ImageGallery from '@/pages/property/components/ImageGallery';
import { type Property, featuredProperties } from '@/mocks/properties';
import { fetchAllProperties } from '@/services/propertyService';

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [favorited, setFavorited] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  
  const [property, setProperty] = useState<Property | null>(null);
  const [related, setRelated] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!id) return;
      
      setLoading(true);
      try {
        const allFetched = await fetchAllProperties();
        const allProperties = [...featuredProperties, ...allFetched];
        
        const foundProperty = allProperties.find(p => String(p.id) === String(id));
        setProperty(foundProperty || null);

        if (foundProperty) {
          const relatedProps = allProperties
            // 1. Exclude the current property
            .filter((p) => String(p.id) !== String(foundProperty.id))
            // 2. STRICTLY match by property type
            .filter((p) => p.type?.toLowerCase() === foundProperty.type?.toLowerCase())
            // 3. Limit to 4 results
            .slice(0, 4);
            
          setRelated(relatedProps);
        }
      } catch (error) {
        console.error("Error loading property:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [id]);

  const statusLabel = useMemo(() => {
    if (!property?.status) {
      if (property?.title?.toLowerCase().includes('rent')) return 'For Rent';
      if (property?.title?.toLowerCase().includes('sale')) return 'For Sale';
      return 'Available';
    }
    return property.status === 'rent' ? 'For Rent' : 'For Sale';
  }, [property]);

  const statusColor = statusLabel === 'For Sale' ? 'bg-primary-500' : 'bg-accent-500';

  const images = useMemo(() => {
    if (!property) return [];
    if (property.images && property.images.length > 0) return property.images;
    return property.image ? [property.image, property.image, property.image] : [];
  }, [property]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background-50">
        <Navbar />
        <div className="h-16 md:h-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <i className="ri-loader-4-line text-4xl animate-spin text-primary-500 inline-block mb-4" />
          <p className="text-foreground-500">Loading property details...</p>
        </div>
        <Footer />
      </div>
    );
  }

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

  // --- SMART MAP PARSER ---
  const rawMapInput = ((property as any).mapLocation || property.location || '').trim();
  let mapIframeSrc = '';
  let externalMapLink = '';

  const isUrl = /^https?:\/\//i.test(rawMapInput);
  const isIframe = rawMapInput.toLowerCase().startsWith('<iframe') && rawMapInput.includes('src="');
  const isEmbedUrl = rawMapInput.startsWith('https://www.google.com/maps/embed');

  if (isIframe) {
    // User pasted the full embed HTML code
    const match = rawMapInput.match(/src="([^"]+)"/);
    mapIframeSrc = match ? match[1] : '';
  } else if (isEmbedUrl) {
    // User pasted just the embed URL source
    mapIframeSrc = rawMapInput;
  } else if (isUrl) {
    // User pasted a standard share link (e.g. maps.app.goo.gl)
    // We cannot embed this directly, so we expose it as a button and fallback the visual map
    externalMapLink = rawMapInput;
    mapIframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(property.location || '')}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  } else {
    // User pasted a plain text address
    mapIframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(rawMapInput)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  }

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
                  title={`Map showing location`}
                  src={mapIframeSrc}
                  className="w-full h-64 md:h-80"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-sm text-foreground-500 flex items-center gap-1.5">
                  <i className="ri-map-pin-2-line text-primary-500" />
                  {(!isUrl && !isIframe) ? rawMapInput : property.location}
                </p>

                {externalMapLink && (
                  <a 
                    href={externalMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-50 text-primary-700 text-xs font-bold rounded-lg hover:bg-primary-100 transition-colors whitespace-nowrap"
                  >
                    <i className="ri-external-link-line" />
                    Open in Google Maps
                  </a>
                )}
              </div>
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
                    <span className="text-lg font-bold text-foreground-950 capitalize">{property.type || '-'}</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-background-100">
                    <span className="text-[10px] text-foreground-500 uppercase font-semibold tracking-wider">Status</span>
                    <span className="text-lg font-bold text-foreground-950 capitalize">{statusLabel}</span>
                  </div>
                </div>
                
                {/* Direct Contact/Tour Call To Action */}
                <div className="mt-6 pt-6 border-t border-background-200">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition-colors active:scale-[0.98]"
                  >
                    <i className="ri-calendar-schedule-line" />
                    Schedule Tour
                  </a>
                </div>
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
                Discover other properties with similar features.
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