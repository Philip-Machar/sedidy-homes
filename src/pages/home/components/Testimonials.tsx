import { testimonials } from '@/mocks/properties';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-500/5 to-secondary-500/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground-950 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-foreground-500 text-lg">
            Real stories from satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-card rounded-xl p-6 border border-background-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className="ri-star-fill text-yellow-500 text-sm"
                  />
                ))}
              </div>
              <p className="text-foreground-950 mb-6 italic leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground-950">{t.name}</p>
                  <p className="text-xs text-foreground-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}