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

export default function ServicesCTASection() {
  return (
    <>
      {/* Service Advantage Section */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#081a27] to-slate-950" />
        <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr]"
          >
            {/* Left Highlight */}
            <div className="relative overflow-hidden border-b border-white/10 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
              <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-20 right-10 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />

              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10"
              >
                <span className="section-eyebrow">
                  Why Teams Choose Us
                </span>

                <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.05em] text-white">
                  Clear process. Better execution.{' '}
                  <span className="text-gradient">Reliable delivery.</span>
                </h2>

                <p className="section-copy mt-5 text-slate-300">
                  We don’t just write code. We understand your business flow,
                  plan the right structure, and build software that stays clean,
                  flexible, and easy to scale.
                </p>
              </motion.div>
            </div>

            {/* Right Unique Cards */}
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {advantages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.12 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative min-h-[220px] overflow-hidden bg-slate-950/90 p-6 transition-all duration-500 hover:bg-slate-900 sm:p-7"
                  >
                    <div className="absolute right-5 top-5 text-6xl font-black leading-none text-white/[0.035] transition-all duration-500 group-hover:text-primary/10">
                      {item.number}
                    </div>

                    <div className="relative z-10 flex h-full flex-col justify-end">
                      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>

                      <h3 className="card-title mb-3 text-white">
                        {item.title}
                      </h3>

                      <p className="card-text">{item.text}</p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project CTA Section */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,210,196,0.14),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.12),transparent_36%)]" />

            <div className="relative z-10 grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
              {/* Left Content */}
              <div className="relative overflow-hidden border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-lg shadow-primary/10"
                >
                  <Sparkles className="h-7 w-7" />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.16,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="section-eyebrow"
                >
                  Ready To Start?
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="section-title mb-5 text-white"
                >
                  Build Software That Is{' '}
                  <span className="text-gradient">
                    Practical, Scalable, and Fast
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: 0.28,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="section-copy mb-8 max-w-2xl text-slate-300"
                >
                  Whether you need a website, custom software, automation, QA,
                  or DevOps support, our team can help you plan and launch the
                  right solution with a clear process.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.34,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/35 sm:text-base"
                  >
                    Discuss Your Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Right Process Timeline */}
              <div className="relative p-6 sm:p-8 lg:p-10 xl:p-12">
                <div className="absolute left-[43px] top-12 hidden h-[calc(100%-96px)] w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 sm:block" />

                <div className="grid gap-5">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: 36 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          duration: 0.65,
                          delay: 0.15 + index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="group relative rounded-3xl border border-white/10 bg-slate-950/40 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative z-10 flex gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div>
                            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-primary">
                              Step {index + 1}
                            </span>

                            <h3 className="card-title mb-2 text-white">
                              {step.title}
                            </h3>

                            <p className="card-text">{step.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}