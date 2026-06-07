'use client';

import { motion } from 'framer-motion';
import {
  Monitor,
  Megaphone,
  Search,
  Rocket,
  ShieldCheck,
  Headphones,
} from 'lucide-react';

const features = [
  {
    title: 'Website Development',
    description:
      'We create stunning, fast, and scalable websites tailored to your business needs with modern technologies.',
    icon: Monitor,
    color: 'from-primary to-accent',
  },
  {
    title: 'Digital Marketing',
    description:
      'Our data-driven marketing strategies help you reach the right audience and convert visitors into customers.',
    icon: Megaphone,
    color: 'from-primary to-accent',
  },
  {
    title: 'Search Engine Optimization',
    description:
      'We improve your search visibility, organic traffic, and rankings with long-term SEO strategies.',
    icon: Search,
    color: 'from-primary to-accent',
  },
  {
    title: 'Scalable Solutions',
    description:
      'We build systems that can grow with your business without compromising performance or reliability.',
    icon: Rocket,
    color: 'from-accent to-primary',
  },
  {
    title: 'Secure Development',
    description:
      'Security, clean architecture, and best practices are included from the first stage of development.',
    icon: ShieldCheck,
    color: 'from-primary to-accent',
  },
  {
    title: 'Ongoing Support',
    description:
      'We provide reliable support, maintenance, and improvements to keep your digital product running smoothly.',
    icon: Headphones,
    color: 'from-primary to-accent',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10 mx-auto">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title mb-3">
            Why <span className="text-gradient">Choose</span> Us
          </h2>
          <p className="section-copy mx-auto max-w-2xl">
            We are a software company focused on building reliable, scalable, and
            result-driven solutions for modern businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20 sm:min-h-[320px] sm:p-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />

                  <div className="relative z-10 mb-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.07] backdrop-blur-xl transition-all duration-500 group-hover:bg-white/[0.1]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="card-title mb-3 text-white">{item.title}</h3>
                    <p className="card-text">{item.description}</p>
                  </div>

                  <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}