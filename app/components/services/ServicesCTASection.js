'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  Route,
  Rocket,
  Sparkles,
  CheckCircle2,
  Layers,
  ShieldCheck,
} from 'lucide-react';

const advantages = [
  {
    icon: Layers,
    number: '01',
    title: 'Requirement Clarity',
    text: 'We map the real business problem before starting development.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Scalable Architecture',
    text: 'Your product is structured to handle future features and growth.',
  },
  {
    icon: MessageCircle,
    number: '03',
    title: 'Smooth Collaboration',
    text: 'Clear updates, clean communication, and transparent delivery flow.',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Launch Ready Quality',
    text: 'We focus on performance, usability, testing, and production stability.',
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Share Your Idea',
    text: 'Tell us what you want to build, improve, or automate for your business.',
  },
  {
    icon: Route,
    title: 'Plan The Roadmap',
    text: 'We define the right technology, workflow, scope, and scalable execution plan.',
  },
  {
    icon: Rocket,
    title: 'Build & Launch',
    text: 'Our team develops, tests, deploys, and supports your digital product.',
  },
];

/* ─── Animation variants ────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Component ─────────────────────────────────────────────────────────── */

export default function ServicesCTASection() {
  return (
    <>

      {/* ── Service Advantage Section ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#081a27] to-slate-950" />
        <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 mx-auto">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">

            {/* Left */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="section-title mb-4 text-white">
                Clear process.{' '}
                <span className="text-gradient">Reliable delivery.</span>
              </h2>
              <p className="section-copy text-slate-300">
                We understand your business flow, plan the right structure, and
                build software that stays clean, flexible, and easy to scale.
              </p>
            </motion.div>

            {/* Right — Advantage Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="card-title mb-2 text-white">{item.title}</h3>
                      <p className="card-text">{item.text}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Project CTA Section ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 mx-auto">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">

            {/* Left — CTA Content */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
             

              <h2 className="section-title mb-4 text-white">
                Build Software That Is{' '}
                <span className="text-gradient">Practical, Scalable, and Fast</span>
              </h2>

              <p className="section-copy mb-8 text-slate-300">
                Whether you need a website, custom software, automation, QA, or
                DevOps support, our team can help you plan and launch the right
                solution with a clear process.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/35 sm:text-base"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Right — Process Steps */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-4"
            >
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={staggerItem}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-primary/80">
                          Step {index + 1}
                        </span>
                        <h3 className="card-title mb-1 text-white">{step.title}</h3>
                        <p className="card-text">{step.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}