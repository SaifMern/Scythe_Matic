'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@scythematic.com',
    description: 'Send us your project details anytime.',
    href: 'mailto:hello@scythematic.com',
    color: 'from-primary to-accent',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+92 300 0000000',
    description: 'Talk directly with our team.',
    href: 'tel:+923000000000',
    color: 'from-primary to-accent',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Karachi, Pakistan',
    description: 'Working with clients worldwide.',
    href: '#',
    color: 'from-primary to-accent',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Sat',
    description: '10:00 AM - 7:00 PM',
    href: '#',
    color: 'from-accent to-primary',
  },
];

const bottomContact = [
  {
    icon: Mail,
    label: 'Email:',
    value: 'hello@scythematic.com',
    href: 'mailto:hello@scythematic.com',
  },
  {
    icon: Phone,
    label: 'Phone:',
    value: '+92 300 0000000',
    href: 'tel:+923000000000',
  },
  {
    icon: MapPin,
    label: 'Address:',
    value: 'Karachi, Pakistan',
    href: '#',
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:pb-20 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-44 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:34px_34px] opacity-20" />

        <div className="container relative z-10 mx-auto">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.span variants={heroItem} className="section-eyebrow">
              Contact Us
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="page-title mb-5 text-white"
            >
              Let’s Build Something{' '}
              <span className="text-gradient">Great Together</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="page-subtitle mx-auto max-w-3xl"
            >
              Have a project idea, need a custom software solution, or want to
              scale your software product? Share your details and our team will
              get back to you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Main */}
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative z-10 mx-auto">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-5"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <MessageCircle className="h-7 w-7" />
                  </div>

                  <h2 className="section-title mb-4 text-white">
                    Start Your <span className="text-gradient">Project</span>
                  </h2>

                  <p className="section-copy text-slate-300">
                    Tell us what you want to build. We will review your idea,
                    understand your requirements, and suggest the best solution
                    for your business.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-black/15"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                      />

                      <div className="relative z-10 flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>

                        <div>
                          <h3 className="card-title mb-1 text-white">
                            {item.title}
                          </h3>

                          <p className="mb-1 text-sm font-semibold text-primary">
                            {item.value}
                          </p>

                          <p className="card-text">{item.description}</p>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/15 backdrop-blur-xl sm:p-8 lg:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-accent/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <span className="section-eyebrow">Send Message</span>

                    <h2 className="section-title mb-3 text-white">
                      Tell Us About Your{' '}
                      <span className="text-gradient">Idea</span>
                    </h2>

                    <p className="section-copy text-slate-300">
                      Fill out the form and our team will contact you shortly.
                    </p>
                  </div>

                  <div
                    className="
                      [&_input]:border-white/10
                      [&_input]:bg-white/[0.06]
                      [&_input]:text-white
                      [&_input]:placeholder:text-slate-300
                      [&_input]:focus:border-primary/50
                      [&_input]:focus:bg-white/[0.08]
                      [&_textarea]:border-white/10
                      [&_textarea]:bg-white/[0.06]
                      [&_textarea]:text-white
                      [&_textarea]:placeholder:text-slate-300
                      [&_textarea]:focus:border-primary/50
                      [&_textarea]:focus:bg-white/[0.08]
                      [&_label]:text-white
                    "
                  >
                    <ContactForm />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="relative overflow-hidden bg-white px-4 py-12 text-slate-950 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,210,196,0.08),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.08),transparent_34%)]" />

        <div className="container relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/5 sm:p-6 lg:grid-cols-3 lg:gap-0 lg:p-8"
          >
            {bottomContact.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group flex flex-col gap-4 rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-slate-50 sm:flex-row sm:items-start sm:p-6 ${
                    index !== bottomContact.length - 1
                      ? 'lg:border-r lg:border-slate-200'
                      : ''
                  }`}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-950 text-primary shadow-xl shadow-slate-950/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/25">
                    <Icon className="h-7 w-7" strokeWidth={2.3} />
                  </div>

                  <div>
                    <h3 className="mb-3 text-[clamp(1.1rem,1.3vw,1.35rem)] font-extrabold tracking-[-0.03em] text-slate-950">
                      {item.label}
                    </h3>

                    <p className="text-[clamp(1rem,1.15vw,1.15rem)] font-medium leading-relaxed text-slate-700">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}