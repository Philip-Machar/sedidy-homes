import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { aboutStats, coreValues, teamMembers, timelineItems, faqItems } from '@/mocks/siteData';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <div className="h-16 md:h-20" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-500 py-20 md:py-28">
        <div className="absolute top-[15%] right-[5%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] left-[3%] w-56 h-56 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-[11px] font-medium rounded-full mb-4">
              About Sedidy Homes
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Building Dreams, <span className="text-accent-400">Creating Homes</span>
            </h1>
            <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              For over 15 years, we&apos;ve been Kenya&apos;s trusted partner in finding exceptional properties. Our commitment to excellence and client satisfaction has made us the leading real estate agency in East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-14 bg-background-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 text-center border border-background-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mx-auto mb-3">
                  <i className={`${stat.icon} text-primary-600 text-lg`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground-950 tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.08em] font-medium text-foreground-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">Our Story</span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground-950 mt-2 tracking-tight">
                A Legacy of Trust in Kenyan Real Estate
              </h2>
              <p className="text-foreground-600 mt-5 leading-relaxed">
                Sedidy Homes began with a simple belief: every Kenyan deserves a transparent, stress-free path to owning property. What started as a close-knit team operating from a modest office along Riverside Drive has grown into one of East Africa&apos;s most trusted real estate agencies.
              </p>
              <p className="text-foreground-600 mt-4 leading-relaxed">
                From the very beginning, our approach was different. Instead of treating properties as transactions, we saw them as the foundations of families, communities, and futures. We built our reputation on honest advice, deep local expertise, and a genuine commitment to seeing every client thrive.
              </p>
              <p className="text-foreground-600 mt-4 leading-relaxed">
                Today, we&apos;ve helped over 2,500 families find their dream homes, facilitated major commercial transactions, and continue to innovate in how real estate services are delivered in Kenya. Our roots may be in Nairobi, but our impact reaches across the entire country.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="/properties"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-colors"
                >
                  Browse Properties
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-background-200 text-foreground-700 font-semibold text-sm hover:bg-background-100 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20luxury%20real%20estate%20office%20interior%20in%20Nairobi%20Kenya%20with%20warm%20natural%20lighting%2C%20elegant%20wooden%20furniture%20and%20green%20plants%2C%20professional%20welcoming%20atmosphere%2C%20warm%20neutral%20tones%2C%20clean%20architectural%20photography&width=900&height=675&seq=about-story-01&orientation=landscape"
                  alt="Sedidy Homes Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-primary-500 text-white rounded-xl p-5 shadow-xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs opacity-90 mt-0.5">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">Our Values</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground-950 mt-2 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-foreground-600 mt-3 max-w-xl mx-auto">
              Our core values guide every decision we make and every interaction we have with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 border border-background-200 hover:border-primary-300/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                  <i className={`${value.icon} text-primary-600 text-xl`} />
                </div>
                <h3 className="font-semibold text-foreground-950 mb-2">{value.title}</h3>
                <p className="text-sm text-foreground-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">Our Journey</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground-950 mt-2 tracking-tight">
              Milestones That Define Us
            </h2>
          </div>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-background-300 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {timelineItems.map((item, index) => (
                <div key={item.year} className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-card rounded-xl p-6 border border-background-200 hover:shadow-md transition-all">
                      <span className="inline-block px-2.5 py-0.5 bg-primary-500 text-white text-[11px] font-semibold rounded-md mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-semibold text-foreground-950 mb-1">{item.title}</h3>
                      <p className="text-sm text-foreground-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {/* Dot on timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full border-2 border-white z-10 items-center justify-center" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-16 md:py-24 bg-foreground-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why We Built This
              </h2>
              <p className="text-foreground-300 leading-relaxed mb-4 italic">
                &ldquo;For many Kenyans, buying a home is the most significant investment of their lives. Yet, for years, the market was plagued by a lack of transparency and inconsistent standards, making what should be a milestone moment a source of immense stress.&rdquo;
              </p>
              <p className="text-foreground-300 leading-relaxed mb-6">
                We established Sedidy Homes to transform this experience. By combining deep local expertise with a commitment to integrity, we ensure that every family and investor we serve can navigate the property market with absolute confidence. Our team works tirelessly to demystify real estate, offering honest valuations, clear communication, and unwavering support at every step.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PN</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Peter Njoroge</p>
                  <p className="text-foreground-400 text-xs">Founder &amp; Managing Director</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20luxury%20real%20estate%20office%20interior%20in%20Nairobi%20Kenya%20with%20warm%20natural%20lighting%2C%20elegant%20wooden%20furniture%20and%20green%20plants%2C%20professional%20welcoming%20atmosphere%2C%20warm%20neutral%20tones%2C%20clean%20architectural%20photography&width=800&height=600&seq=about-founder-01&orientation=landscape"
                  alt="Sedidy Homes Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-background-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">The Experts</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground-950 mt-2 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-foreground-600 mt-3 max-w-xl mx-auto">
              Passionate professionals dedicated to making your property dreams a reality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-2xl overflow-hidden border border-background-200 hover:shadow-lg hover:border-background-200/80 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-background-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground-950">{member.name}</h3>
                  <p className="text-[13px] text-primary-600 font-medium mt-0.5">{member.role}</p>
                  <p className="text-[13px] text-foreground-500 mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-widest text-primary-600 font-semibold">FAQs</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground-950 mt-2 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground-600 mt-3">
              Find quick answers to common questions about our services
            </p>
          </div>
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-background-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-background-50 transition-colors"
                >
                  <span className="font-medium text-foreground-800 text-sm">{faq.question}</span>
                  <i className={`${openFaq === index ? 'ri-subtract-line' : 'ri-add-line'} text-foreground-400 shrink-0 ml-4`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-foreground-500 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-primary-500 px-8 py-12 md:px-16 md:py-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Find Your Dream Property?
              </h2>
              <p className="text-white/70 max-w-lg mx-auto mb-6 text-sm md:text-base">
                Let our experienced team help you navigate the Kenyan real estate market. Whether you&apos;re buying, selling, or investing, we&apos;re here to guide you every step of the way.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/properties"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-background-50 transition-colors"
                >
                  View Properties
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}