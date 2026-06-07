import { Braces, Database, Cloud, Server, Code2, Figma, ShieldCheck, Cpu, Bot, CreditCard } from 'lucide-react';

const firstRow = [
  { name: 'Next.js', icon: Code2 },
  { name: 'React.js', icon: Braces },
  { name: 'Laravel', icon: Server },
  { name: 'Node.js', icon: Cpu },
  { name: 'Express.js', icon: Server },
  { name: 'Tailwind CSS', icon: Figma },
  { name: 'JavaScript', icon: Braces },
  { name: 'TypeScript', icon: Code2 },
];

const secondRow = [
  { name: 'PHP', icon: Server },
  { name: 'MySQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Firebase', icon: Cloud },
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: ShieldCheck },
  { name: 'GitHub', icon: Code2 },
  { name: 'Stripe', icon: CreditCard },
  { name: 'OpenAI', icon: Bot },
];

function TechCard({ tech }) {
  const Icon = tech.icon || Code2;
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-xl sm:px-8 sm:py-4 sm:text-base">
      <Icon className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6" />
      <span className="whitespace-nowrap">{tech.name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="marquee-outer">
      <div className={`marquee-inner ${reverse ? 'marquee-reverse' : 'marquee-normal'}`}>
        {[0, 1, 2].map((group) => (
          <div className="marquee-group" aria-hidden={group > 0} key={group}>
            {items.map((tech) => (
              <TechCard key={`${group}-${tech.name}`} tech={tech} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
            <h2 className="section-title mb-3">
              Technologies <span className="text-gradient">We Use</span>
            </h2>
            <p className="section-copy mx-auto max-w-2xl">
              We use modern, reliable, and scalable technologies to build fast, secure, and future-ready digital products.
            </p>
          </div>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-5">
          <MarqueeRow items={firstRow} />
          <MarqueeRow items={secondRow} reverse />
        </div>
      </div>
    </section>
  );
}