import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { services } from '@/mocks/siteData';

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We start by understanding your needs, preferences, and budget to tailor our services to you.',
    icon: 'ri-chat-1-line',
  },
  {
    step: '02',
    title: 'Property Search & Analysis',
    description: 'Our team curates properties that match your criteria, complete with detailed market analysis.',
    icon: 'ri-search-line',
  },
  {
    step: '03',
    title: 'Viewings & Negotiations',
    description: 'We arrange property viewings and handle all negotiations to secure the best deal for you.',
    icon: 'ri-eye-line',
  },
  {
    step: '04',
    title: 'Documentation & Closing',
    description: 'From legal paperwork to final handover, we ensure a smooth and hassle-free closing process.',
    icon: 'ri-shield-check-line',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <div className="h-16 md:h-20" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-500 py-20 md:py-28">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[15%] right-[8%] w-56 h-56 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-[11px] font-medium rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Comprehensive Real Estate Solutions
            </h1>
            <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              From property sales to investment consulting, we offer a full spectrum of real estate services designed to meet your unique needs and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">What We Offer</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground-950 mt-2 tracking-tight">
              Our Expert Services
            </h2>
            <p className="text-foreground-600 mt-3 max-w-xl mx-auto">
              We provide end-to-end real estate solutions tailored to individual clients, investors, and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card rounded-2xl p-6 md:p-8 border border-background-200 hover:border-primary-300/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/15 transition-colors">
                  <i className={`${service.icon} text-primary-600 text-2xl`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground-950 mb-2">{service.title}</h3>
                <p className="text-sm text-foreground-500 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground-600">
                      <i className="ri-check-line text-primary-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">How It Works</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground-950 mt-2 tracking-tight">
              Our Simple Process
            </h2>
            <p className="text-foreground-600 mt-3 max-w-xl mx-auto">
              Getting started with Sedidy Homes is easy. Here&apos;s how we work with you from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative bg-card rounded-xl p-6 border border-background-200 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="font-semibold text-foreground-950 mb-2">{step.title}</h3>
                <p className="text-sm text-foreground-500 leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-primary-300/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Advantage */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">Why Choose Us</span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground-950 mt-2 tracking-tight">
                The Sedidy Homes Advantage
              </h2>
              <p className="text-foreground-600 mt-4 leading-relaxed">
                When you choose Sedidy Homes, you&apos;re not just getting a service &mdash; you&apos;re gaining a dedicated partner committed to your success in the real estate market.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: 'ri-verified-badge-line', title: 'Market Knowledge', desc: 'Deep expertise in Nairobi and coastal markets' },
                  { icon: 'ri-customer-service-2-line', title: '24/7 Support', desc: 'Always available to answer your questions' },
                  { icon: 'ri-speed-line', title: 'Fast Turnaround', desc: 'Quick response times and efficient processing' },
                  { icon: 'ri-award-line', title: 'Proven Track Record', desc: '2,500+ successful transactions and counting' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                      <i className={`${item.icon} text-primary-600 text-sm`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground-800 text-sm">{item.title}</h4>
                      <p className="text-xs text-foreground-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-500 rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Let us help you achieve your real estate goals. Contact our team today for a free consultation and personalized service recommendation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Free initial consultation',
                  'Personalized service package',
                  'No obligation, no pressure',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <i className="ri-check-line text-accent-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-background-50 transition-colors"
                >
                  Contact Us
                  <i className="ri-arrow-right-line" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need a Custom Solution */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-3">
            Need a Custom Solution?
          </h2>
          <p className="text-foreground-600 max-w-lg mx-auto mb-6 text-sm md:text-base">
            Every client is unique. Contact us to discuss your specific requirements and we&apos;ll create a tailored service package just for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+254796476637"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-colors"
            >
              <i className="ri-phone-line" />
              Schedule a Call
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-background-200 text-foreground-700 font-semibold text-sm hover:bg-background-100 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}