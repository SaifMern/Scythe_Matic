'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Osama Shamim',
    role: 'Full Stack Developer',
    image: '/team/member-1.jpg',
    email: 'hello@scythematic.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Team Member 2',
    role: 'UI/UX Designer',
    image: '/team/member-2.jpg',
    email: 'designer@scythematic.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Team Member 3',
    role: 'QA Engineer',
    image: '/team/member-3.jpg',
    email: 'qa@scythematic.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Team Member 4',
    role: 'Digital Marketing Specialist',
    image: '/team/member-4.jpg',
    email: 'marketing@scythematic.com',
    linkedin: 'https://linkedin.com',
  },
];

const marqueeItems = [
  { value: 'Plan', label: 'Clear Roadmap' },
  { value: 'Design', label: 'Modern Interface' },
  { value: 'Build', label: 'Clean Engineering' },
  { value: 'Scale', label: 'Reliable Growth' },
  { value: 'Test', label: 'Quality Assurance' },
  { value: 'Ship', label: 'On-Time Delivery' },
];

const workflowSteps = [
  {
    step: '01',
    title: 'Strategy Sprint',
    text: 'We break down your business goal, target users, technical scope, and launch priorities before development begins.',
  },
  {
    step: '02',
    title: 'Design & Engineering Sync',
    text: 'Designers and developers work together so the final product looks polished and functions smoothly across devices.',
  },
  {
    step: '03',
    title: 'Quality Loop',
    text: 'Every release goes through review, testing, performance checks, and refinements before it reaches users.',
  },
];

const ownershipPoints = [
  'Product-first thinking',
  'Clean and maintainable code',
  'Design systems that scale',
  'Testing before delivery',
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

function SocialLink({ href, ariaLabel, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-slate-300 transition-all duration-300 hover:bg-primary/20 hover:text-primary"
    >
      {children}
    </a>
  );
}

export default function TeamPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxStartIndex = Math.max(teamMembers.length - cardsPerView, 0);
  const safeActiveIndex = Math.min(activeIndex, maxStartIndex);
  const translateValue = safeActiveIndex * (100 / cardsPerView);

  useEffect(() => {
    if (activeIndex > maxStartIndex) setActiveIndex(maxStartIndex);
  }, [activeIndex, maxStartIndex]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:pb-16 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-44 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="container relative z-10 mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1 variants={staggerItem} className="page-title mb-5 text-white">
              Meet The People Behind
              <br />
              <span className="text-gradient">Scythematic</span>
            </motion.h1>
            <motion.p variants={staggerItem} className="page-subtitle mx-auto max-w-3xl">
              A focused team of creative and technical experts working together
              to design, develop, test, and grow scalable digital products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative z-10 mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
          >
            <h2 className="section-title mb-3">
              Small Team, <span className="text-gradient">Big Impact</span>
            </h2>
            <p className="section-copy mx-auto max-w-2xl">
              Our team brings development, design, testing, and growth expertise
              together to deliver professional software solutions.
            </p>
          </motion.div>

          <div className="mx-auto max-w-7xl overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: '-' + translateValue + '%' }}
              transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.8 }}
            >
              {teamMembers.map((member) => (
                <div key={member.name} className="shrink-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3">
                  <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/20 sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="relative mb-6 h-[330px] overflow-hidden rounded-3xl bg-slate-900 sm:h-[360px] lg:h-[390px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      </div>
                      <div className="text-center">
                        <h3 className="mb-2 text-2xl font-bold text-white">{member.name}</h3>
                        <p className="mb-6 text-sm font-medium text-primary sm:text-base">{member.role}</p>
                        <div className="flex items-center justify-center gap-3 border-t border-white/10 pt-5">
                          <SocialLink href={'mailto:' + member.email} ariaLabel={'Email ' + member.name}>
                            <Mail className="h-5 w-5" />
                          </SocialLink>
                          <SocialLink href={member.linkedin} ariaLabel={member.name + ' LinkedIn'}>
                            <Linkedin className="h-5 w-5" />
                          </SocialLink>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {maxStartIndex > 0 && (
            <div className="mt-8 flex justify-center gap-3">
              {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={'Show team slide ' + (index + 1)}
                  className={'h-2.5 w-2.5 rounded-full transition-colors duration-300 ' + (safeActiveIndex === index ? 'bg-primary shadow-lg shadow-primary/40' : 'bg-white/30 hover:bg-white/60')}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Operating System */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="container relative z-10 mx-auto">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-8 max-w-4xl text-center sm:mb-10 lg:mb-12"
          >
            <h2 className="section-title mb-3 text-white">
              The People Behind Every{' '}
              <span className="text-gradient">Scalable Product</span>
            </h2>
            <p className="section-copy mx-auto max-w-3xl text-slate-300">
              Our team works like a focused product unit, combining strategy,
              engineering, automation, testing, and deployment to turn complex
              ideas into clean digital systems.
            </p>
          </motion.div>

          {/* Two Column */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

            {/* Left — Ownership */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative z-10">
                <h3 className="card-title mb-3 text-white">
                  We build with ownership, not just execution.
                </h3>
                <p className="section-copy mb-6 text-slate-300">
                  Every project is handled with a clear sense of responsibility.
                  From the first idea to final deployment, our team focuses on
                  decisions that improve usability, stability, performance, and
                  long-term growth.
                </p>
                <div className="flex flex-col gap-3">
                  {ownershipPoints.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3">
                      <span className="text-primary">–</span>
                      <p className="text-sm font-medium text-slate-300 sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Workflow */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-4"
            >
              {workflowSteps.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-sm font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="card-title mb-1 text-white">{item.title}</h3>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Marquee */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] py-5 backdrop-blur-xl"
          >
            <div className="marquee-outer">
              <div className="marquee-inner marquee-normal">
                {[0, 1, 2].map((group) => (
                  <div key={group} className="marquee-group" aria-hidden={group > 0}>
                    {marqueeItems.map((item) => (
                      <div
                        key={item.value + '-' + group}
                        className="flex shrink-0 items-center gap-4 rounded-xl border border-white/10 bg-slate-950/60 px-5 py-3"
                      >
                        <span className="text-sm font-bold text-white">{item.value}</span>
                        <span className="h-px w-4 bg-primary/40" />
                        <span className="text-sm text-slate-400">{item.label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
