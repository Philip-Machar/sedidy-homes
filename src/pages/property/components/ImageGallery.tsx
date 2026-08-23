import { useState, useCallback, useEffect, useRef } from 'react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const preloaded = useRef<Set<string>>(new Set());

  // Preload an image in the background
  const preload = useCallback((src: string) => {
    if (preloaded.current.has(src)) return;
    preloaded.current.add(src);
    const img = new window.Image();
    img.src = src;
  }, []);

  // Preload adjacent images when current changes
  useEffect(() => {
    if (images.length <= 1) return;
    const next = (current + 1) % images.length;
    const prev = (current - 1 + images.length) % images.length;
    preload(images[next]);
    preload(images[prev]);
  }, [current, images, preload]);

  // Preload the first image immediately
  useEffect(() => {
    if (images.length > 1) {
      preload(images[1]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const goNext = useCallback(() => {
    setLoaded(false);
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLoaded(false);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    setLoaded(false);
    setCurrent(index);
  }, [current]);

  // Keyboard navigation for fullscreen
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!fullscreen) return;
      if (e.key === 'Escape') setFullscreen(false);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [fullscreen, goNext, goPrev]);

  // Reset loaded state when image src changes
  useEffect(() => {
    setLoaded(false);
  }, [current]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Main Gallery */}
      <div className="relative w-full bg-background-100 rounded-2xl overflow-hidden group">
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
          {/* Shimmer skeleton while image loads */}
          {!loaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-background-100 via-background-200 to-background-100 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite]" />
          )}

          {/* 1. Blurred Background Layer */}
          <img
            src={images[current]}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60 transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* 2. Main Foreground Image (Uncropped) */}
          <img
            src={images[current]}
            alt={`${title} - Photo ${current + 1}`}
            className={`absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            fetchpriority="high"
            decoding="async"
          />

          {/* Overlay gradient for text safety */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <i className="ri-arrow-left-s-line text-lg md:text-xl" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <i className="ri-arrow-right-s-line text-lg md:text-xl" />
              </button>
            </>
          )}

          {/* Fullscreen toggle */}
          <button
            onClick={() => setFullscreen(true)}
            className="absolute bottom-3 left-3 z-20 w-9 h-9 rounded-lg bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Open fullscreen"
          >
            <i className="ri-fullscreen-line text-sm" />
          </button>

          {/* Bullets */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-6 bg-white'
                      : 'w-1.5 bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex gap-2 p-2 md:p-3 overflow-x-auto scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={`${img}-thumb`}
                onClick={() => goTo(idx)}
                className={`relative shrink-0 w-16 h-11 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                  idx === current
                    ? 'ring-2 ring-primary-500 ring-offset-2 ring-offset-background-50'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`${title} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center animate-[fade-in_0.2s_ease-out]"
          onClick={() => setFullscreen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close fullscreen"
          >
            <i className="ri-close-line text-lg" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium">
            {current + 1} / {images.length}
          </div>

          {/* Nav buttons in fullscreen */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                aria-label="Previous"
              >
                <i className="ri-arrow-left-s-line text-xl" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                aria-label="Next"
              >
                <i className="ri-arrow-right-s-line text-xl" />
              </button>
            </>
          )}

          {/* Fullscreen image */}
          <img
            src={images[current]}
            alt={title}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            decoding="async"
          />
        </div>
      )}
    </>
  );
}