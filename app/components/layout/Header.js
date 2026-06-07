'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isActiveLink = (href) => {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="w-full">
        <div className="relative w-full">
          <div className="relative z-10 flex h-[72px] items-center justify-between px-4 sm:h-[78px] sm:px-5 lg:h-[86px] lg:px-6">
            {/* Logo */}
            <Link
              href="/"
              prefetch
              className="group flex shrink-0 items-center"
              aria-label="Go to home page"
            >
              <Image
                src="/logo.png"
                alt="Scythematic Logo"
                width={240}
                height={62}
                priority
                className="relative h-auto w-[145px] object-contain sm:w-[175px] lg:w-[215px]"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    prefetch
                    className={`relative text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-gray-800 px-4 py-2 rounded-md'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-md'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Start Project Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                prefetch
                className="group relative inline-flex items-center gap-2 rounded-[2px] bg-primary px-2 py-1 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                <span className="relative">Start Project</span>
              </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              className="block lg:hidden"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
              isMobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="relative border-t border-gray-700 p-3 sm:p-4">
              <div className="grid gap-2">
                {navLinks.map((link) => {
                  const isActive = isActiveLink(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      prefetch
                      className={`relative px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                        isActive
                          ? 'text-white bg-gray-800 rounded-md'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  prefetch
                  className="group mt-2 flex items-center justify-center gap-2 rounded-[2px] bg-primary px-2 py-1 text-sm font-semibold text-white hover:bg-primary-dark"
                >
                  <span>Start Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}