'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const AUTOPLAY_DELAY = 5000;

const slides = [
  {
    badge: '◈ Premium Software Company',
    title: 'Enterprise Software',
    highlight: 'With Precision',
    description:
      'Scythematic designs and engineers scalable digital products with clean architecture, premium interfaces, and measurable business impact.',
    primaryBtn: 'Start Project',
    secondaryBtn: 'View Work',
  },
  {
    badge: '⚡ Scalable Web Platforms',
    title: 'Modern Systems',
    highlight: 'Built To Scale',
    description:
      'Fast, responsive, SEO-friendly platforms crafted with high accessibility, secure code, and production-ready performance.',
    primaryBtn: 'Get Started',
    secondaryBtn: 'Our Services',
  },
  {
    badge: '◎ AI, QA & DevOps',
    title: 'Reliable Delivery',
    highlight: 'For Growth',
    description:
      'From product strategy to automation and deployment, we help businesses launch, improve, and scale with confidence.',
    primaryBtn: 'Book a Call',
    secondaryBtn: 'See Portfolio',
  },
];

const stats = [
  { value: '150+', label: 'Projects' },
  { value: '50+', label: 'Clients' },
  { value: '10+', label: 'Team' },
  { value: '5+', label: 'Years' },
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.98,
    transition: {
      duration: 0.42,
      ease: [0.7, 0, 0.84, 0],
    },
  }),
};

const itemVariants = {
  enter: {
    opacity: 0,
    y: 22,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const [[activeIndex, direction], setSlide] = useState([0, 1]);
  const [touchStart, setTouchStart] = useState(null);

  const activeSlide = slides[activeIndex];

  const nextSlide = useCallback(() => {
    setSlide(([prev]) => [(prev + 1) % slides.length, 1]);
  }, []);

  const prevSlide = useCallback(() => {
    setSlide(([prev]) => [(prev - 1 + slides.length) % slides.length, -1]);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      if (index === activeIndex) return;
      setSlide([index, index > activeIndex ? 1 : -1]);
    },
    [activeIndex]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => clearTimeout(timer);
  }, [activeIndex, nextSlide]);

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 60) nextSlide();
    if (diff < -60) prevSlide();

    setTouchStart(null);
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-4 pb-12 pt-28 sm:px-6 sm:pb-14 lg:pt-32"
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,210,196,0.16),transparent_38%)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-0 bg-slate-950/72" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="container relative z-20 mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          {/* Slider Content */}
          <div className="relative min-h-[390px] overflow-visible sm:min-h-[370px] md:min-h-[395px] lg:min-h-[430px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-x-0 top-0 mx-auto px-1 pb-8"
              >
                <motion.div variants={itemVariants} className="mb-5">
                  <span className="inline-flex rounded-full glass px-4 py-2 text-xs font-medium text-white/90 sm:text-sm">
                    {activeSlide.badge}
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="page-title mx-auto mb-5 max-w-4xl text-white"
                >
                  {activeSlide.title}
                  <br />
                  <span className="text-gradient">{activeSlide.highlight}</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="page-subtitle mx-auto mb-8 max-w-2xl"
                >
                  {activeSlide.description}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                  <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 sm:w-auto sm:text-base">
                    {activeSlide.primaryBtn}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <button className="w-full rounded-full glass px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:w-auto sm:text-base">
                    {activeSlide.secondaryBtn}
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-2 grid max-w-3xl grid-cols-2 gap-4 md:mt-4 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45 + index * 0.1,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl glass p-4 sm:p-5"
              >
                <div className="mb-1 text-xl font-bold text-gradient sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className="mt-9 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="hidden h-10 w-10 items-center justify-center rounded-full glass transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:flex"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                    activeIndex === index
                      ? 'bg-primary shadow-lg shadow-primary/40'
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="hidden h-10 w-10 items-center justify-center rounded-full glass transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Progress */}
          <div className="mx-auto mt-5 h-1 max-w-[220px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              key={activeIndex}
              className="h-full bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: 'left' }}
              transition={{
                duration: AUTOPLAY_DELAY / 1000,
                ease: 'linear',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}