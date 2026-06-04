'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Target,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '20+', label: 'Skilled Experts' },
  { value: '5+', label: 'Years Experience' },
];

const expertise = [
  'Custom Software Development',
  'Web Development',
  'Software Quality Assurance',
  'AI Automation',
  'DevOps',
  'Product Growth Strategy',
];

const values = [
  {
    icon: Target,
    title: 'Result Driven',
    description:
      'We focus on building software solutions that solve real business problems and create measurable results.',
    color: 'from-primary to-accent',
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    description:
      'We combine strategy, design, and technology to create modern experiences that stand out.',
    color: 'from-primary to-accent',
  },
  {
    icon: ShieldCheck,
    title: 'Quality First',
    description:
      'Clean code, scalable architecture, performance, and security are part of every project we deliver.',
    color: 'from-primary to-accent',
  },
];

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:pb-24 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-44 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative z-10 mx-auto">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.span
              variants={heroItem}
              className="mb-5 inline-flex rounded-full glass px-4 py-2 text-xs font-medium text-white/90 sm:text-sm"
            >
              About Scythematic
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="page-title mb-5 text-white"
            >
              Building Enterprise Software
              <br />
              <span className="text-gradient">With Premium Precision</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="page-subtitle mx-auto max-w-3xl"
            >
              We are a modern software company helping businesses design, develop, automate, and scale digital products with reliable engineering, clean interfaces, and result-focused strategy.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/services"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 sm:w-auto sm:text-base"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full glass px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:w-auto sm:text-base"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45 + index * 0.1,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl glass p-4 text-center sm:p-5"
              >
                <div className="mb-1 text-xl font-bold text-gradient sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      {/* Company Overview Section */}
<section className="relative overflow-hidden bg-white px-4 py-16 text-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
  {/* Soft background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,210,196,0.08),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08),transparent_36%)]" />

  <div className="container relative z-10 mx-auto">
    <div className="grid items-stretch gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-950/5 backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <span className="mb-3 block text-[clamp(1.4rem,2vw,2rem)] font-extrabold leading-tight tracking-[-0.04em] text-slate-950">
          Company
        </span>

        <h2 className="mb-6 text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-primary">
          Overview
        </h2>

        <div className="mb-7 border-l-4 border-primary pl-5">
          <p className="text-[clamp(1rem,1.25vw,1.2rem)] font-bold italic leading-[1.6] text-slate-700">
            Being a forward-thinking software company, we help organizations
            start their journey toward business growth, digital innovation, and
            scalable technological transformation.
          </p>
        </div>

        <p className="section-copy max-w-4xl text-slate-700">
          Scythematic brings together product strategy, UI engineering, custom
          software development, automation, quality assurance, and DevOps under
          one roof. We work closely with clients to understand their goals and
          create software solutions that are practical, scalable, and easy to
          use.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            'Diverse Business Units',
            'Solution Based Approach',
            'Committed Workforce',
            'Global Delivery Model',
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-slate-950/8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <span className="text-xl font-extrabold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="card-title text-slate-950">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: -55, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-950/10 lg:min-h-full"
      >
        <img
          src="/company-overview.png"
          alt="Company overview"
          className="h-full min-h-[420px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-slate-950/75 p-5 text-white backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Scythematic
          </p>

          <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em]">
            Built for scalable digital growth.
          </h3>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/*New Section */}

{/* Vision Mission Section */}
<section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
  <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
  <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

  <div className="container relative z-10 mx-auto">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {[
        {
          title: 'Vision',
          highlight:
            'Being a leading software house, we aim to help organizations start their journey toward business and technological transformation.',
          description:
            'Our vision is to create practical, scalable, and future-ready digital solutions that help businesses improve performance, simplify operations, and grow with confidence.',
        },
        {
          title: 'Mission',
          highlight:
            'We carefully study each customer case to understand the client’s needs and objectives, then deliver reliable and efficient solutions.',
          description:
            'Our mission is to combine strategy, design, development, automation, quality assurance, and DevOps to guide clients toward smarter business decisions and long-term success.',
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            delay: index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10">
            <h2 className="section-title mb-7 text-white">
              {item.title}
            </h2>

            <div className="mb-7 border-l-4 border-primary pl-5">
              <p className="text-[clamp(1.05rem,1.35vw,1.35rem)] font-bold italic leading-[1.55] text-white/90">
                {item.highlight}
              </p>
            </div>

            <p className="section-copy text-slate-300">
              {item.description}
            </p>
          </div>

          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent/10" />
        </motion.div>
      ))}
    </div>
  </div>
</section>






      {/* Values */}
    {/* Facts & Clients Section */}
<section className="relative overflow-hidden bg-white text-slate-950">
  <div className="grid min-h-[680px] lg:grid-cols-2">
    {/* Left Facts */}
    <motion.div
      initial={{ opacity: 0, x: -55 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#092f35] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-12 xl:px-16"
    >
      <div className="absolute -left-24 top-10 text-[28rem] font-black leading-none text-white/[0.035]">
        S
      </div>

      <div className="relative z-10 mx-auto max-w-2xl lg:mx-0">
        <p className="mb-4 text-[clamp(1rem,1.2vw,1.2rem)] font-medium text-white/90">
          We Love To Share
        </p>

        <h2 className="mb-7 text-[clamp(2.5rem,5vw,4.8rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-white">
          Our Facts.
        </h2>

        <p className="mb-8 text-[clamp(1rem,1.25vw,1.2rem)] font-semibold italic leading-[1.65] text-white/90">
          Scythematic has grown by helping businesses transform ideas into
          reliable, scalable, and high-performing digital products.
        </p>

        <div className="space-y-6 section-copy text-slate-300">
          <p>
            Our team works across software development, automation, quality
            assurance, DevOps, and product strategy to deliver practical
            solutions that support long-term business growth.
          </p>

          <p>
            We focus on building strong relationships with clients by combining
            clear communication, technical expertise, and a result-driven
            delivery process.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '24/7', label: 'Support Mindset' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.05em] text-primary">
                {item.value}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-300 sm:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Right Clients */}
    <motion.div
      initial={{ opacity: 0, x: 55 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16"
    >
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl lg:mx-0">
        <h2 className="mb-8 text-[clamp(2.5rem,5vw,4.6rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-slate-950">
          Clients
          <br />
          <span className="text-primary">about us.</span>
        </h2>

        <div className="mb-8 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
            <span className="text-2xl">☺</span>
          </div>

          <p className="text-[clamp(1.4rem,2.8vw,2.4rem)] font-medium italic leading-tight text-slate-400">
            happy clients and their reviews
          </p>
        </div>

        <div className="space-y-6 section-copy text-slate-700">
          <p>
            Over the years, Scythematic has helped businesses improve digital
            workflows, communication, and operational performance through
            carefully planned software solutions.
          </p>

          <p>
            Our clients trust us because we focus on clean execution, scalable
            systems, responsive support, and solutions that match real business
            needs.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-950/5">
          <p className="text-[clamp(1rem,1.25vw,1.2rem)] font-semibold italic leading-relaxed text-slate-700">
            “They understood our requirements clearly and delivered a solution
            that was professional, scalable, and easy for our team to use.”
          </p>

          <div className="mt-5">
            <h4 className="text-base font-bold text-slate-950">
              Client Feedback
            </h4>
            <p className="text-sm text-slate-500">
              Software Development Project
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </main>
  );
}