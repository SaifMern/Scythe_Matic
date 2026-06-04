'use client';

import ServicesCTASection from '../components/services/ServicesCTASection';
import { motion } from 'framer-motion';
import {
  Code,
  Settings,
  ShieldCheck,
  Bot,
  CloudCog,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Code,
    id: 'web-development',
    title: 'Web Development',
    description:
      'We build fast, responsive, and scalable websites and web applications using modern technologies like React, Next.js, Laravel, and Tailwind CSS.',
    points: [
      'Business websites',
      'React & Next.js apps',
      'E-commerce platforms',
      'Landing pages',
      'Responsive UI development',
    ],
    color: 'from-primary to-accent',
  },
  {
    icon: Settings,
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description:
      'We develop custom software products tailored to specific business needs, from planning and architecture to development and deployment.',
    points: [
      'CRM systems',
      'Admin dashboards',
      'Business portals',
      'Custom web applications',
      'Workflow management systems',
    ],
    color: 'from-primary to-accent',
  },
  {
    icon: ShieldCheck,
    id: 'software-quality-assurance',
    title: 'Software Quality Assurance',
    description:
      'We test your software carefully to make sure it is stable, secure, user-friendly, and ready for real users.',
    points: [
      'Manual testing',
      'Bug reporting',
      'UI/UX testing',
      'Performance testing',
      'Cross-browser testing',
    ],
    color: 'from-primary to-accent',
  },
  {
    icon: Bot,
    id: 'ai-automation',
    title: 'AI Automation',
    description:
      'We create AI-powered automation systems that save time, reduce manual work, and improve business productivity.',
    points: [
      'AI chatbots',
      'Business automation',
      'Data automation',
      'Support automation',
      'AI workflow integration',
    ],
    color: 'from-primary to-accent',
  },
  {
    icon: CloudCog,
    id: 'devops',
    title: 'DevOps',
    description:
      'We handle server setup, cloud deployment, CI/CD pipelines, and infrastructure management for reliable applications.',
    points: [
      'Server setup',
      'CI/CD pipelines',
      'Cloud deployment',
      'Docker setup',
      'Application monitoring',
    ],
    color: 'from-primary to-accent',
  },
  {
    icon: TrendingUp,
    id: 'product-growth-strategy',
    title: 'Product Growth Strategy',
    description:
      'We improve digital products with positioning, conversion strategy, analytics, funnel planning, and scalable growth experiments.',
    points: [
      'Product positioning',
      'Conversion strategy',
      'Funnel planning',
      'Analytics reporting',
      'Growth roadmap',
    ],
    color: 'from-accent to-primary',
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
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:pb-24 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative z-10 mx-auto">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 lg:mb-20"
          >
            <motion.span variants={heroItem} className="section-eyebrow">
              Services
            </motion.span>

            <motion.h1 variants={heroItem} className="page-title mb-5 text-white">
              Our <span className="text-gradient">Services</span>
            </motion.h1>

            <motion.p variants={heroItem} className="page-subtitle mx-auto max-w-3xl">
              Scythematic brings enterprise software expertise, well-established
              processes and flexible delivery models to help you at every stage
              of your software project, be it development from scratch,
              customization or re-engineering.
            </motion.p>
          </motion.div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isLeftCard = index % 2 === 0;

              return (
                <motion.article
                  id={service.id}
                  key={service.title}
                  initial={{ opacity: 0, x: isLeftCard ? -70 : 70, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="scroll-mt-28 h-full"
                >
                  <div className="group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20 sm:min-h-[360px] sm:p-7 lg:min-h-[380px]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                    />

                    <div className="relative z-10 mb-5 flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg sm:h-14 sm:w-14`}
                      >
                        <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                      </div>

                      <h2 className="card-title text-white">{service.title}</h2>
                    </div>

                    <div className="relative z-10 flex flex-1 flex-col">
                      <p className="card-text mb-6">{service.description}</p>

                      <ul className="mb-6 grid gap-3">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2 text-sm text-slate-300"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contact"
                        className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-primary"
                      >
                        Discuss Project
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>

                    <div
                      className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesCTASection />
    </main>
  );
}
