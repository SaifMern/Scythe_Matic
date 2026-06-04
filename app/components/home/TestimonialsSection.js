'use client';

import { Star, Quote } from 'lucide-react';

const firstRow = [
  {
    name: 'Rachel Thompson',
    role: 'Founder, E-commerce Brand',
    initials: 'RT',
    review:
      'The team delivered a fast, clean, and modern e-commerce platform. Their communication and attention to detail were excellent.',
  },
  {
    name: 'Sophie Reynolds',
    role: 'Marketing Director',
    initials: 'SR',
    review:
      'They helped us redesign our brand presence with a professional website and smooth user experience.',
  },
  {
    name: 'James Smith',
    role: 'Startup Founder',
    initials: 'JS',
    review:
      'From planning to launch, the whole process was structured, transparent, and very professional.',
  },
  {
    name: 'Michael Carter',
    role: 'Operations Manager',
    initials: 'MC',
    review:
      'Their development quality, support, and delivery speed made a real difference for our business.',
  },
];

const secondRow = [
  {
    name: 'Liam O’Connor',
    role: 'Education Platform Owner',
    initials: 'LO',
    review:
      'They built a complete learning platform with clean design, stable performance, and easy management.',
  },
  {
    name: 'Isabella Rossi',
    role: 'Creative Brand Lead',
    initials: 'IR',
    review:
      'The UI design and development work were both impressive. The final product looked polished and premium.',
  },
  {
    name: 'Lucas Silva',
    role: 'Business Consultant',
    initials: 'LS',
    review:
      'Very responsive, reliable, and easy to collaborate with. The project was completed smoothly.',
  },
  {
    name: 'Emma Williams',
    role: 'Product Manager',
    initials: 'EW',
    review:
      'They helped us turn our idea into a scalable digital product with a strong technical foundation.',
  },
];

function TestimonialCard({ item }) {
  return (
    <div className="relative flex h-[260px] w-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:w-[430px] sm:p-7 lg:w-[500px]">
      <Quote className="absolute right-6 top-6 h-14 w-14 text-primary/10 sm:h-16 sm:w-16" />

      <div>
        <div className="mb-5 flex gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>

        <p className="max-w-[90%] text-sm leading-7 text-slate-300 sm:text-base">
          “{item.review}”
        </p>
      </div>

      <div>
        <div className="mb-5 h-px w-full bg-white/10" />

        <div className="flex items-center gap-4">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-sm font-bold text-white ring-1 ring-white/10 sm:h-14 sm:w-14">
            {item.initials}
          </div>

          <div>
            <h3 className="text-base font-bold text-white sm:text-lg">
              {item.name}
            </h3>
            <p className="text-xs font-medium text-slate-400 sm:text-sm">
              {item.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="testimonial-marquee-wrapper">
      <div
        className={`testimonial-marquee-track ${
          reverse ? 'testimonial-marquee-right' : 'testimonial-marquee-left'
        }`}
      >
        {repeatedItems.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
            <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-xs font-medium sm:text-sm">
              Client Reviews
            </span>

            <h2 className="section-title mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>

            <p className="section-copy mx-auto max-w-2xl">
              Businesses trust us for clean design, reliable development, and
              scalable software solutions that deliver real results.
            </p>
          </div>
        </div>

        <div className="w-screen overflow-hidden">
          <div className="space-y-6">
            <MarqueeRow items={firstRow} />
            <MarqueeRow items={secondRow} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}