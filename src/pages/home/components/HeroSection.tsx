export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://readdy.ai/api/search-image?query=Luxury%20modern%20apartment%20interior%20with%20floor-to-ceiling%20windows%20showing%20city%20skyline%20at%20sunset%2C%20elegant%20living%20room%20with%20warm%20neutral%20tones%2C%20minimalist%20furniture%2C%20soft%20natural%20lighting%2C%20professional%20real%20estate%20photography%2C%20high-end%20residential%20design&width=1920&height=1080&seq=hero-bg&orientation=landscape)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/45" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 md:pt-28 pb-24 md:pb-32">
        {/* Headline */}
        <h1 className="mb-5">
          <span className="block text-2xl sm:text-3xl md:text-[2.6rem] font-light text-white/90 tracking-tight leading-tight">
            Find Your
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-1 leading-[1.05] drop-shadow-lg">
            Perfect Home
          </span>
          <span className="block h-1 w-16 mx-auto mt-5 rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400" />
        </h1>

        <p className="text-base sm:text-lg text-white mb-8 max-w-lg leading-relaxed drop-shadow">
          Discover premium residential and commercial properties across
          Kenya&apos;s most desirable locations
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="/properties"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-primary-500 text-white hover:bg-primary-400 active:scale-[0.97] transition-all font-medium text-sm whitespace-nowrap shadow-lg shadow-primary-500/25"
          >
            Explore Properties
          </a>
          <a
            href="/list-with-us"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 active:scale-[0.97] transition-all font-medium text-sm whitespace-nowrap"
          >
            List Your Property
          </a>
        </div>
      </div>
    </div>
  );
}