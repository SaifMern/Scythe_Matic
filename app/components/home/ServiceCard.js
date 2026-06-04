'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
  Settings,
  ShieldCheck,
  Bot,
  TrendingUp,
  CloudCog,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const icons = {
  Code,
  Settings,
  ShieldCheck,
  Bot,
  TrendingUp,
  CloudCog,
};

export default function ServiceCard({ service, index }) {
  const Icon = icons[service.iconName] || Code;
  const isLeftCard = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeftCard ? -70 : 70,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20 sm:min-h-[320px] sm:p-7 lg:min-h-[340px]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
        />

        <div className="relative z-10 mb-5 flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg sm:h-14 sm:w-14`}
          >
            <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
          </div>

          <h3 className="card-title text-white">
            {service.title}
          </h3>
        </div>

        <div className="relative z-10 flex flex-1 flex-col">
          <p className="card-text mb-6">
            {service.description}
          </p>

          <ul className="mb-6 space-y-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href={service.id ? `/services#${service.id}` : '/services'}
            className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-primary"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
        />
      </div>
    </motion.div>
  );
}