export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-background-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Contact Column (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                <i className="ri-home-smile-fill text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-foreground-950 tracking-tight">
                Sedidy Homes
              </span>
            </a>
            <p className="text-sm text-foreground-500 leading-relaxed max-w-sm mb-8">
              Nairobi's premier real estate agency. We specialize in luxury properties, commercial spaces, and helping you find the perfect place to call home across Kenya.
            </p>
            
            <div className="space-y-3">
              <a href="mailto:hello@sedidyhomes.com" className="flex items-center gap-3 text-sm text-foreground-600 hover:text-primary-600 transition-colors">
                <div className="w-8 h-8 rounded-full bg-background-100 flex items-center justify-center shrink-0">
                  <i className="ri-mail-send-line" />
                </div>
                hello@sedidyhomes.com
              </a>
              <a href="tel:+254700000000" className="flex items-center gap-3 text-sm text-foreground-600 hover:text-primary-600 transition-colors">
                <div className="w-8 h-8 rounded-full bg-background-100 flex items-center justify-center shrink-0">
                  <i className="ri-phone-line" />
                </div>
                +254 700 000 000
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground-600">
                <div className="w-8 h-8 rounded-full bg-background-100 flex items-center justify-center shrink-0">
                  <i className="ri-map-pin-line" />
                </div>
                Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold text-foreground-950 uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="/properties" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Browse Properties</a>
              </li>
              <li>
                <a href="/list-with-us" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">List Your Property</a>
              </li>
              <li>
                <a href="/about" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Property Types Column */}
          <div>
            <h3 className="text-sm font-bold text-foreground-950 uppercase tracking-wider mb-6">Property Types</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="/properties?search=House" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Houses & Mansions</a>
              </li>
              <li>
                <a href="/properties?search=Apartment" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Luxury Apartments</a>
              </li>
              <li>
                <a href="/properties?search=Villa" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Holiday Villas</a>
              </li>
              <li>
                <a href="/properties?search=Commercial" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Commercial Spaces</a>
              </li>
              <li>
                <a href="/properties?search=Land" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Plots & Land</a>
              </li>
            </ul>
          </div>

          {/* Prime Locations Column */}
          <div>
            <h3 className="text-sm font-bold text-foreground-950 uppercase tracking-wider mb-6">Prime Locations</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="/properties?search=Karen" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Karen</a>
              </li>
              <li>
                <a href="/properties?search=Runda" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Runda</a>
              </li>
              <li>
                <a href="/properties?search=Westlands" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Westlands</a>
              </li>
              <li>
                <a href="/properties?search=Riverside" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Riverside</a>
              </li>
              <li>
                <a href="/properties?search=Kilimani" className="text-sm text-foreground-500 hover:text-primary-600 transition-colors">Kilimani</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-background-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-500 text-center md:text-left">
            © {currentYear} Sedidy Homes. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-background-100 flex items-center justify-center text-foreground-500 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="Facebook">
              <i className="ri-facebook-fill" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-background-100 flex items-center justify-center text-foreground-500 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="Instagram">
              <i className="ri-instagram-line" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-background-100 flex items-center justify-center text-foreground-500 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="Twitter">
              <i className="ri-twitter-x-line" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-background-100 flex items-center justify-center text-foreground-500 hover:bg-primary-50 hover:text-primary-600 transition-colors" aria-label="LinkedIn">
              <i className="ri-linkedin-fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}