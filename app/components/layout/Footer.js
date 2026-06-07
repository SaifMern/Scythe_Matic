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
  { name: 'Custom Software Development', href: '/services#custom-software-development' },
  { name: 'Software Quality Assurance', href: '/services#software-quality-assurance' },
  { name: 'AI Automation', href: '/services#ai-automation' },
  { name: 'DevOps', href: '/services#devops' },
  { name: 'Product Growth Strategy', href: '/services#product-growth-strategy' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/vortaxstudio/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/vorta_xstudio?igsh=MTgxbDY5c2k3aDRwMg==', label: 'Instagram' },
];

const contactItems = [
  { icon: Mail, href: 'mailto:hello@scythematic.com', label: 'hello@scythematic.com', isLink: true, extraClass: 'break-all' },
  { icon: Phone, href: 'tel:+923000000000', label: '+92 316 6237612', isLink: true, extraClass: '' },
  { icon: MapPin, href: null, label: 'Office # 02,-05 2nd Floor, UBL Bank,  Main Boulevard, Bahria Town, Lahore.', isLink: false, extraClass: '' },
  { icon: Clock, href: null, label: 'Mon - Fri: 10:00 AM- 09:00 PM', isLink: false, extraClass: '' },
];

function SocialIcon({ item }) {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function ContactItem({ item }) {
  const Icon = item.icon;
  if (item.isLink) {
    return (
      <li>
        <a
          href={item.href}
          className={'flex items-start gap-3 text-sm text-white/60 transition-colors duration-200 hover:text-primary ' + item.extraClass}
        >
          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
          <span>{item.label}</span>
        </a>
      </li>
    );
  }
  return (
    <li className="flex items-start gap-3 text-sm text-white/60">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
      <span>{item.label}</span>
    </li>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const showNewsletter = pathname === '/';

  return (
    <footer className="relative bg-slate-950 text-white">

      {showNewsletter && (
        <div className="border-b border-white/10 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-xl text-center">
              <h3 className="section-title mb-3">
                Stay <span className="text-gradient">Updated</span>
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-400 sm:text-base">
                Subscribe for the latest updates, insights, and exclusive offers.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1.1fr] lg:gap-14">

          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Scythematic"
                width={200}
                height={52}
                priority
                className="h-auto w-[140px] object-contain sm:w-[170px] lg:w-[200px]"
              />
            </Link>
            <p className="max-w-xs text-sm leading-7 text-white/60">
              Scythematic builds enterprise web platforms, custom software,
              QA-backed systems, AI automation, and DevOps workflows for
              scalable business growth.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((item) => (
                <SocialIcon key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/35">
            Quick Links

            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/35">
             Our Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/35">
              Contact
            </p>
            <ul className="space-y-4">
              {contactItems.map((item) => (
                <ContactItem key={item.label} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 sm:mt-12" />

        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row sm:pt-7">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} Scythematic. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs">
            <Link href="/about" className="text-white/35 transition-colors duration-200 hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-white/35 transition-colors duration-200 hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-white/35 transition-colors duration-200 hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
