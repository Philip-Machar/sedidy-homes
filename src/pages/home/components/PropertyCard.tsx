import type { Property } from '@/mocks/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const visibleTags = property.tags.slice(0, 3);
  const extraTagCount = property.tags.length - 3;

  return (
    <a
      href={`/properties/${property.id}`}
      className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-2xl focus-visible:ring-offset-background-50"
    >
      <article className="bg-card rounded-2xl overflow-hidden border border-background-200 hover:border-background-200/80 shadow-sm hover:shadow-lg hover:shadow-black/5 transition-all duration-300 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-background-100">
          
          {/* 1. Blurred Background Layer */}
          <img
            src={property.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-125 opacity-70 group-hover:scale-[1.3] transition-transform duration-700 ease-out"
          />
          
          {/* 2. Main Foreground Image (Uncropped) */}
          <img
            src={property.image}
            alt={property.title}
            className="absolute inset-0 w-full h-full object-contain group-hover:scale-[1.06] transition-transform duration-700 ease-out z-10"
            loading="lazy"
            decoding="async"
          />
          
          {/* Badges (z-20 to sit above foreground image) */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-20">
            {property.hotDeal && (
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide shadow-sm bg-orange-500 text-white">
                Hot Deal
              </span>
            )}
            {property.fullyFurnished && (
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide shadow-sm bg-foreground-700/80 text-background-50 backdrop-blur-sm">
                Fully Furnished
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-3.5 pt-3 pb-3.5 flex-1 flex flex-col min-h-0">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-[13px] font-medium text-foreground-500">
              {property.currency}
            </span>
            <span className="text-xl font-bold text-foreground-950 tracking-tight tabular-nums">
              {property.price}
            </span>
          </div>
          <h3 className="text-[13px] font-semibold text-foreground-950 mb-1 line-clamp-1 leading-snug group-hover:text-primary-600 transition-colors duration-200">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 mb-3">
            <i className="ri-map-pin-line text-[12px] text-foreground-400" />
            <span className="text-[12px] text-foreground-500 line-clamp-1">
              {property.location}
            </span>
          </div>
          <p className="text-[12px] text-foreground-500/70 leading-relaxed line-clamp-2 mb-3">
            {property.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 text-[11px] rounded-md font-medium ${
                  tag.startsWith('+')
                    ? 'bg-background-100 text-foreground-500/50'
                    : 'bg-background-100 text-foreground-500'
                }`}
              >
                {tag}
              </span>
            ))}
            {extraTagCount > 0 && (
              <span className="px-2 py-0.5 bg-background-100 text-foreground-500/50 text-[11px] rounded-md font-medium">
                +{extraTagCount}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-background-200/50">
            <span className="text-[10px] uppercase tracking-widest text-foreground-500/50 font-semibold">
              {property.type}
            </span>
            <div className="flex items-center gap-1 text-foreground-500 group-hover:text-primary-600 transition-colors duration-200">
              <span className="text-[11px] font-medium">View Details</span>
              <i className="ri-arrow-right-line text-[11px]" />
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}