import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { contactInfo, faqItems, offices } from '@/mocks/siteData';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = formData.get('company_alt');
    if (honeypot && String(honeypot).trim() !== '') {
      setFormStatus('success');
      form.reset();
      return;
    }

    // Remove honeypot from payload
    formData.delete('company_alt');

    try {
      const response = await fetch('https://readdy.ai/api/form/d9fjhl9gav9vgaom0hjg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>),
      });
      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;

      if (response.ok && parsed?.code === 'OK') {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
        setFormError(serverMsg || 'Something went wrong. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setFormError('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <div className="h-16 md:h-20" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-500 py-20 md:py-28">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[15%] left-[8%] w-56 h-56 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-[11px] font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-white/70 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions about a property or our services? We&apos;re here to help. Reach out and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-10 md:py-14 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Call Us', value: '+254 796 476 637', sub: 'Mon-Fri from 8am to 6pm', icon: 'ri-phone-line', href: 'tel:+254796476637' },
              { label: 'Email Us', value: 'info@sedidyhomes.com', sub: 'We reply within 24 hours', icon: 'ri-mail-line', href: 'mailto:info@sedidyhomes.com' },
              { label: 'Visit Us', value: 'Riverside Drive', sub: 'Nairobi, Kenya', icon: 'ri-map-pin-line', href: '#' },
              { label: 'Business Hours', value: 'Mon - Fri: 8:30 AM - 4:30 PM', sub: 'Sat: 9:00 AM - 2:00 PM | Sunday: Closed', icon: 'ri-time-line', href: '#' },
            ].map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-background-200 hover:border-primary-300/40 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/15 transition-colors">
                  <i className={`${info.icon} text-primary-600 text-xl`} />
                </div>
                <h3 className="font-semibold text-foreground-950 text-sm mb-1">{info.label}</h3>
                <p className="text-sm font-medium text-foreground-700">{info.value}</p>
                <p className="text-[11px] text-foreground-400 mt-1">{info.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Offices */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-background-200">
                <h2 className="text-xl font-bold text-foreground-950 mb-1">Send Us a Message</h2>
                <p className="text-sm text-foreground-500 mb-6">
                  Fill out the form and we&apos;ll respond within 24 hours
                </p>

                {formStatus === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-primary-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground-950 mb-1">Message Sent!</h3>
                    <p className="text-sm text-foreground-500">Thank you for reaching out. We&apos;ll be in touch shortly.</p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="mt-5 px-5 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-readdy-form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 rounded-lg border border-background-200 bg-background-50 text-foreground-950 placeholder:text-foreground-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-background-200 bg-background-50 text-foreground-950 placeholder:text-foreground-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+254 700 000 000"
                          className="w-full px-4 py-2.5 rounded-lg border border-background-200 bg-background-50 text-foreground-950 placeholder:text-foreground-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground-700 mb-1.5">Inquiry Type *</label>
                        <select
                          name="inquiry_type"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-background-200 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select an option</option>
                          <option value="buying">Buying a Property</option>
                          <option value="selling">Selling a Property</option>
                          <option value="renting">Renting a Property</option>
                          <option value="investment">Investment Advice</option>
                          <option value="valuation">Property Valuation</option>
                          <option value="management">Property Management</option>
                          <option value="other">Something Else</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground-700 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        required
                        maxLength={500}
                        rows={5}
                        placeholder="Tell us about your inquiry..."
                        className="w-full px-4 py-2.5 rounded-lg border border-background-200 bg-background-50 text-foreground-950 placeholder:text-foreground-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all resize-none"
                      />
                      <p className="text-[11px] text-foreground-400 mt-1">Maximum 500 characters</p>
                    </div>

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="company_alt"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      readOnly
                      className="hp-field"
                    />

                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-2.5 rounded-lg">
                        <i className="ri-error-warning-line" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary-500 text-white font-semibold text-sm hover:bg-primary-600 transition-colors disabled:opacity-60"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <i className="ri-loader-4-line animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Our Offices */}
            <div>
              <h2 className="text-xl font-bold text-foreground-950 mb-4">Our Offices</h2>
              <p className="text-sm text-foreground-500 mb-5">Visit us at any of our locations</p>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="bg-card rounded-xl p-6 border border-background-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground-950">{office.city}</h3>
                      {office.isHQ && (
                        <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-[10px] font-semibold rounded">
                          Headquarters
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-foreground-600">
                        <i className="ri-map-pin-line text-primary-500 mt-0.5 shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-sm text-foreground-600 hover:text-primary-600 transition-colors">
                        <i className="ri-phone-line text-primary-500 shrink-0" />
                        <span>{office.phone}</span>
                      </a>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-sm text-foreground-600 hover:text-primary-600 transition-colors">
                        <i className="ri-mail-line text-primary-500 shrink-0" />
                        <span>{office.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-6 rounded-xl overflow-hidden border border-background-200 h-[250px]">
                <iframe
                  title="Sedidy Homes Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891871557!2d36.68258773125001!3d-1.3028610499999768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1719999999999!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background-100">
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

      {/* Prefer to Talk Directly */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-primary-500 px-8 py-12 md:px-16 md:py-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Prefer to Talk Directly?
              </h2>
              <p className="text-white/70 max-w-lg mx-auto mb-6 text-sm md:text-base">
                Our team is available Monday to Saturday. Call us now for immediate assistance with your real estate needs.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="tel:+254796476637"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold text-sm hover:bg-background-50 transition-colors"
                >
                  <i className="ri-phone-line" />
                  +254 (796) 476 637
                </a>
                <a
                  href="mailto:info@sedidyhomes.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <i className="ri-mail-line" />
                  Email Us
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