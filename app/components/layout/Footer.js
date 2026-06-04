'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import NewsletterForm from '../ui/NewsletterForm';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { name: 'Web Development', href: '/services#web-development' },
  {
    name: 'Custom Software Development',
    href: '/services#custom-software-development',
  },
  {
    name: 'Software Quality Assurance',
    href: '/services#software-quality-assurance',
  },
  { name: 'AI Automation', href: '/services#ai-automation' },
  { name: 'DevOps', href: '/services#devops' },
  {
    name: 'Product Growth Strategy',
    href: '/services#product-growth-strategy',
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  const pathname = usePathname();
  const showNewsletter = pathname === '/';

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {showNewsletter && (
        <div className="border-b border-white/10 px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="section-title mb-4">
                Stay <span className="text-gradient">Updated</span>
              </h3>

              <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base lg:text-lg">
                Subscribe to our newsletter for the latest updates, insights,
                and exclusive offers.
              </p>

              <NewsletterForm />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_1.15fr_1.2fr] lg:gap-12">
          {/* Logo / About */}
          <div>
            <Link href="/" className="mb-6 inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Scythematic Logo"
                width={240}
                height={62}
                priority
                className="h-auto w-[155px] object-contain sm:w-[190px] lg:w-[220px]"
              />
            </Link>

            <p className="mb-7 max-w-sm text-sm leading-relaxed text-white/75 sm:text-base">
              Scythematic is a premium software company building enterprise web platforms, custom software, QA-backed systems, AI automation, and DevOps workflows for scalable growth.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 sm:h-11 sm:w-11"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-5 text-xl font-bold leading-tight text-white sm:mb-6 sm:text-2xl">
              Links
            </h4>

            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm leading-relaxed text-white/75 transition-colors hover:text-primary sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-xl font-bold leading-tight text-white sm:mb-6 sm:text-2xl">
              Our Major Services
            </h4>

            <ul className="space-y-3 sm:space-y-4">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="block text-sm leading-relaxed text-white/75 transition-colors hover:text-primary sm:text-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xl font-bold leading-tight text-white sm:mb-6 sm:text-2xl">
              Contact Info
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@scythematic.com"
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/75 transition-colors hover:text-primary sm:text-base"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                  <span className="break-all">hello@scythematic.com</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+923000000000"
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/75 transition-colors hover:text-primary sm:text-base"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                  <span>+92 300 0000000</span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                <span>Karachi, Pakistan</span>
              </li>

              <li className="flex items-start gap-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                <span>Opening Hours: 10:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:mt-12 sm:pt-7 md:flex-row md:text-left">
          <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
            © {new Date().getFullYear()} Scythematic. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:gap-x-6 sm:text-sm">
            <Link
              href="/about"
              className="text-white/55 transition-colors hover:text-primary"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-white/55 transition-colors hover:text-primary"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="text-white/55 transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}