import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesCTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Network Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[8%] top-[18%] h-px w-64 rotate-12 bg-primary/40" />
        <div className="absolute left-[28%] top-[8%] h-px w-72 rotate-75 bg-primary/30" />
        <div className="absolute right-[10%] top-[20%] h-px w-72 -rotate-12 bg-primary/40" />
        <div className="absolute right-[20%] bottom-[20%] h-px w-80 rotate-12 bg-primary/25" />
        <div className="absolute left-[38%] bottom-[12%] h-px w-72 -rotate-12 bg-primary/25" />
      </div>

      {/* Dots */}
      <div className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
      <div className="absolute left-[38%] top-[35%] h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
      <div className="absolute right-[18%] top-[18%] h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
      <div className="absolute right-[28%] bottom-[25%] h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
      <div className="absolute left-[56%] bottom-[15%] h-2 w-2 rounded-full bg-primary shadow-lg shadow-primary/50" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="section-title mb-6 text-white">
            Interested In Different{' '}
            <span className="text-gradient">Services?</span>
          </h2>

          <p className="section-copy mx-auto mb-8 max-w-2xl text-slate-300">
            Look no further. Your challenge, our expertise.
            <br className="hidden sm:block" />
            Schedule a call to share your idea!
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 sm:text-base"
          >
            Get In Touch
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}