'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Film,
  Truck,
  Leaf,
  HeartPulse,
  GraduationCap,
  Building2,
  Blocks,
  Users,
  Landmark,
} from 'lucide-react';

const industries = [
  { title: 'Blockchain', icon: Blocks, color: 'from-primary to-accent' },
  { title: 'Health / Medical', icon: HeartPulse, color: 'from-primary to-accent' },
  { title: 'Social Network', icon: Users, color: 'from-primary to-accent' },
  { title: 'Real Estate', icon: Building2, color: 'from-primary to-accent' },
  { title: 'Education', icon: GraduationCap, color: 'from-primary to-accent' },
  { title: 'Finance', icon: Landmark, color: 'from-primary to-accent' },
  { title: 'E-commerce', icon: ShoppingCart, color: 'from-primary to-accent' },
  { title: 'Entertainment', icon: Film, color: 'from-primary to-accent' },
  { title: 'Transportation', icon: Truck, color: 'from-primary to-accent' },
  { title: 'Agriculture', icon: Leaf, color: 'from-accent to-primary' },
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);

    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxStartIndex = Math.max(industries.length - cardsPerView, 0);
  const safeActiveIndex = Math.min(activeIndex, maxStartIndex);
  const translateValue = safeActiveIndex * (100 / cardsPerView);

  useEffect(() => {
    if (activeIndex > maxStartIndex) {
      setActiveIndex(maxStartIndex);
    }
  }, [activeIndex, maxStartIndex]);

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-xs font-medium sm:text-sm">
            Industries
          </span>

          <h2 className="section-title mb-4">
            Industries <span className="text-gradient">We Serve</span>
          </h2>

          <p className="section-copy mx-auto max-w-2xl">
            We build scalable software solutions for multiple industries with a
            focus on performance, usability, and business growth.
          </p>
        </div>

        <div className="mx-auto max-w-7xl overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${translateValue}%` }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 18,
              mass: 0.8,
            }}
          >
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="shrink-0 basis-full px-2 sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="group relative flex min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20 sm:min-h-[250px] lg:min-h-[280px]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                    />

                    <h3 className="relative z-10 mb-10 text-xl font-bold text-white sm:text-2xl">
                      {industry.title}
                    </h3>

                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl">
                      <Icon className="h-12 w-12 text-primary transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14" />
                    </div>

                    <div
                      className={`absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-gradient-to-br ${industry.color} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Dots only for valid smooth movements */}
        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show industry ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                safeActiveIndex === index
                  ? 'bg-primary shadow-lg shadow-primary/40'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}