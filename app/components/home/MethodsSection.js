'use client';

import { motion } from 'framer-motion';
import { Lightbulb, LayoutTemplate, PencilLine, CheckCircle } from 'lucide-react';

const methods = [
  {
    number: '01',
    title: 'Exploration',
    description:
      "We understand your business, goals, audience, competitors, and project requirements before starting the work.",
    icon: Lightbulb,
    color: 'from-primary to-accent',
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'We create a clear plan, user flow, layout structure, and development roadmap for a smooth project process.',
    icon: LayoutTemplate,
    color: 'from-primary to-accent',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We design and develop scalable, modern, and high-performance software solutions with clean code.',
    icon: PencilLine,
    color: 'from-primary to-accent',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'After testing and final approval, we deliver the complete project with proper support and guidance.',
    icon: CheckCircle,
    color: 'from-primary to-accent',
  },
];

export default function MethodsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
  <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-xs font-medium sm:text-sm">
    Our Methods
  </span>

  <h2 className="section-title mb-4">
    Our Expert <span className="text-gradient">Methods</span>
  </h2>

  <p className="section-copy mx-auto max-w-2xl">
    We follow a clear, professional, and result-driven process to deliver scalable software solutions.
  </p>
</div>

        <div className="relative mx-auto max-w-7xl">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-[88px] hidden h-px bg-gradient-to-r from-primary/40 via-accent/50 to-primary/40 lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {methods.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <div className="relative mb-7 flex h-[150px] items-center justify-center">
                    <span className="absolute -top-3 right-8 text-6xl font-black italic text-white/5 sm:text-7xl">
                      {item.number}
                    </span>

                    <div
                      className={`relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] sm:h-32 sm:w-32`}
                    >
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-10 blur-xl`}
                      />
                      <Icon className="relative z-10 h-10 w-10 text-primary sm:h-12 sm:w-12" />
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <h3 className="card-title mb-4 text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-400 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}