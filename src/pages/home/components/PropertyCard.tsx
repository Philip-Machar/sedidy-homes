import { useState } from 'react';
import type { Property } from '@/mocks/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [favorited, setFavorited] = useState(false);

  const visibleTags = property.tags.slice(0, 3);
  const extraTagCount = property.tags.length - 3;

  return (
    <a
      href={`/properties/${property.id}`}
      className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-2xl focus-visible:ring-offset-background-50"
    >
      <article className="bg-card rounded-2xl overflow-hidden border border-background-200 hover:border-background-200/80 shadow-sm hover:shadow-lg hover:shadow-black/5 transition-all duration-300 flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-background-100">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
          />
          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
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
            {property.underConstruction && (
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide shadow-sm bg-yellow-600 text-black">
                Under Construction
              </span>
            )}
          </div>
          {/* Favorite button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setFavorited(!favorited);
            }}
            className="absolute top-2.5 right-2.5 w-8 h-8 bg-background-50/70 backdrop-blur-sm hover:bg-background-50 rounded-full transition-all duration-200 hover:scale-110 flex items-center justify-center"
            aria-label="Add to favorites"
          >
            <i
              className={`${
                favorited ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-foreground-700'
              } text-sm`}
            />
          </button>
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

          {/* Construction progress */}
          {property.constructionProgress !== undefined && (
            <div className="mb-3 pb-3 border-b border-background-200">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] text-foreground-500/50 uppercase tracking-widest font-semibold">
                  Construction
                </span>
                <span className="text-[11px] font-bold text-primary-600 tabular-nums">
                  {property.constructionProgress}%
                </span>
              </div>
              <div className="w-full bg-background-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full transition-all duration-500"
                  style={{ width: `${property.constructionProgress}%` }}
                />
              </div>
            </div>
          )}

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