import { useState } from 'react';

const navLinks = [
  { label: 'Properties', href: '/properties' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-7xl transition-all duration-500 rounded-2xl border bg-white/90 border-background-200/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
          {/* Logo */}
          <a className="flex items-center gap-2.5 shrink-0" href="/">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden border border-background-200 bg-transparent flex items-center justify-center shrink-0">
              <img
                src="https://static.readdy.ai/image/fe5858082443eeff1e1c88cf3b867878/edd0819509b061b2db54eb05bd38ce9d.webp"
                alt="Sedidy Homes"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-bold text-sm md:text-lg whitespace-nowrap text-foreground-950">
              Sedidy Homes
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium transition-all duration-300 rounded-xl whitespace-nowrap text-foreground-600 hover:text-foreground-950 hover:bg-background-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden lg:block">
              <a
                href="/list-with-us"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary-400 h-10 px-5 bg-primary-500 text-white hover:bg-primary-600 active:scale-[0.97] shadow-sm"
              >
                List with us
              </a>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl transition-all lg:hidden text-foreground-700 hover:bg-background-100"
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <i className="ri-close-line text-lg" />
              ) : (
                <i className="ri-menu-line text-lg" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[calc(3.5rem+0.75rem)] md:top-[calc(4rem+1.25rem)] left-3 right-3 sm:left-4 sm:right-4 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="mx-auto max-w-[440px] backdrop-blur-xl rounded-2xl border p-3 space-y-1 bg-white/90 border-background-200/80 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-foreground-600 hover:text-foreground-950 hover:bg-background-100"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/list-with-us"
              className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all h-10 px-4 py-2 bg-primary-500 text-white hover:bg-primary-600 active:scale-[0.98]"
            >
              List with us
            </a>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}