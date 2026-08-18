export default function Footer() {
  return (
    <footer className="bg-card border-t border-background-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a className="flex items-center gap-2 mb-4" href="/">
              <div className="w-10 h-10 rounded-md overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="https://static.readdy.ai/image/fe5858082443eeff1e1c88cf3b867878/edd0819509b061b2db54eb05bd38ce9d.webp"
                  alt="Sedidy Homes"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-bold text-lg text-foreground-950">
                Sedidy Homes
              </span>
            </a>
            <p className="text-foreground-500 text-sm mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property. Premium real
              estate solutions for every lifestyle and investment goal.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+254796476637"
                className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
              >
                <i className="ri-phone-line text-foreground-400 text-sm" />
                <span className="text-sm text-foreground-500">
                  +254 796 476 637
                </span>
              </a>
              <a
                href="mailto:info@sedidyhomes.com"
                className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
              >
                <i className="ri-mail-line text-foreground-400 text-sm" />
                <span className="text-sm text-foreground-500">
                  info@sedidyhomes.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <i className="ri-map-pin-line text-foreground-400 text-sm" />
                <span className="text-sm text-foreground-500">Riverside Drive, Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground-950 mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Browse Properties', href: '/properties' },
                { label: 'For Sellers', href: '/sellers-buyers#sellers' },
                { label: 'For Buyers', href: '/sellers-buyers#buyers' },
                { label: 'For Investors', href: '/sellers-buyers#investors' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-500 hover:text-primary-600 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <i className="ri-arrow-right-line text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground-950 mb-4 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Team', href: '/our-team' },
                { label: 'Careers', href: '/careers' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-500 hover:text-primary-600 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <i className="ri-arrow-right-line text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground-950 mb-4 text-sm uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-conditions' },
                { label: 'Cookie Policy', href: '/cookie-policy' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-500 hover:text-primary-600 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <i className="ri-arrow-right-line text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background-200 pt-8 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground-500 text-center md:text-left">
            &copy; 2026 Sedidy Homes. All rights reserved. |{' '}
            <span className="text-xs">Home Sweet Home</span>
          </p>
          <div className="flex items-center gap-2">
            {[
              {
                label: 'Facebook',
                href: 'https://www.facebook.com',
                icon: 'ri-facebook-fill',
              },
              {
                label: 'Twitter',
                href: 'https://x.com',
                icon: 'ri-twitter-x-fill',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com',
                icon: 'ri-instagram-line',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com',
                icon: 'ri-linkedin-fill',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com',
                icon: 'ri-tiktok-fill',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com',
                icon: 'ri-youtube-fill',
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-background-100 hover:bg-primary-500 hover:text-primary-foreground text-foreground-500 transition-all duration-200"
              >
                <i className={`${social.icon} text-sm`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}