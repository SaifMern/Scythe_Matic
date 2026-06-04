'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

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
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-4 sm:px-5 lg:px-8">
      <nav className="mx-auto max-w-7xl transition-all duration-500">
        <div
          className={`relative overflow-hidden rounded-[28px] border backdrop-blur-2xl transition-all duration-500 lg:rounded-full ${
            isScrolled
              ? 'border-white/15 bg-slate-950/88 shadow-2xl shadow-black/35'
              : 'border-white/10 bg-slate-950/68 shadow-xl shadow-black/20'
          }`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute -left-24 top-0 h-24 w-64 rotate-12 bg-primary/10 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-24 w-64 -rotate-12 bg-accent/10 blur-3xl" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
          </div>

          <div className="relative z-10 flex h-[72px] items-center justify-between px-4 sm:h-[78px] sm:px-5 lg:h-[86px] lg:px-6">
            <Link
              href="/"
              prefetch
              className="group flex shrink-0 items-center"
              aria-label="Go to home page"
            >
              <span className="relative flex items-center">
                <span className="absolute -inset-3 rounded-full bg-primary/0 blur-xl transition-all duration-500 group-hover:bg-primary/10" />

                <Image
                  src="/logo.png"
                  alt="Scythematic Logo"
                  width={240}
                  height={62}
                  priority
                  className="relative h-auto w-[145px] object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:w-[175px] lg:w-[215px]"
                />
              </span>
            </Link>

            <div className="hidden items-center border border-white/10 bg-white/[0.035] p-1.5 backdrop-blur-xl lg:flex">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    prefetch
                    className={`group relative overflow-hidden px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.02em] transition-all duration-300 xl:px-5 xl:text-[15px] ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span
                      className={`absolute inset-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-primary/18 shadow-inner shadow-primary/10'
                          : 'bg-transparent group-hover:bg-white/[0.06]'
                      }`}
                    />

                    <span
                      className={`absolute bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                        isActive ? 'w-8' : 'w-0 group-hover:w-7'
                      }`}
                    />

                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                prefetch
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/35 xl:px-6 xl:py-3 xl:text-[15px]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Start Project</span>

                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={20} strokeWidth={3} />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06] text-white shadow-sm backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-primary lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-70" />
              <span className="relative z-10">
                {isMobileOpen ? (
                  <X size={23} strokeWidth={2.4} />
                ) : (
                  <Menu size={23} strokeWidth={2.4} />
                )}
              </span>
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-out lg:hidden ${
              isMobileOpen
                ? 'max-h-[520px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="relative border-t border-white/10 p-3 sm:p-4">
              <div className="grid gap-2">
                {navLinks.map((link, index) => {
                  const isActive = isActiveLink(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      prefetch
                      className={`relative border px-4 py-3 text-sm font-semibold uppercase tracking-[0.02em] transition-all duration-300 ${
                        isActive
                          ? 'border-primary/25 bg-primary/15 text-white'
                          : 'border-white/10 bg-white/[0.035] text-slate-300 hover:bg-white/[0.07] hover:text-white'
                      }`}
                      style={{
                        transitionDelay: isMobileOpen
                          ? `${index * 35}ms`
                          : '0ms',
                      }}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  prefetch
                  className="group mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-dark"
                >
                  <span>Start Project</span>
                  <ArrowRight
                    size={18}
                    strokeWidth={2.6}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
