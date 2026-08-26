import { testimonials } from '@/mocks/properties';

export default function Testimonials() {
  // Duplicate array to ensure the infinite scroll has enough content to loop seamlessly
  const doubledTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-background-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary-500 font-bold mb-4">
            Words of Trust
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground-950 mb-6">
            Client <span className="italic text-primary-400 font-light">Stories</span>
          </h2>
          <div className="w-12 h-1 bg-accent-500 rounded-full" />
        </div>

      </div>

      {/* The Infinite Sliding Marquee */}
      <div className="relative w-full flex overflow-hidden mt-10">
        
        {/* Gradient fades on the edges for a clean look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white dark:from-background-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white dark:from-background-100 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-6 md:gap-8 px-4 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {doubledTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[320px] md:w-[450px] bg-background-50/60 dark:bg-card/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <i key={idx} className="ri-star-fill text-accent-500 text-lg" />
                ))}
              </div>
              
              <p className="text-foreground-700 text-base md:text-lg mb-10 italic font-light leading-relaxed flex-1">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground-950 tracking-wide">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-widest text-primary-500 font-bold mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}