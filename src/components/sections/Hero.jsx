import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const enter = () =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;
  const stagger = (ms) => ({ transitionDelay: mounted ? `${ms}ms` : '0ms' });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-100 via-surface-50 to-surface-200">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className={`inline-flex items-center gap-2 rounded-full border border-primary/25 bg-surface-200 px-4 py-1.5 text-sm font-semibold text-primary ${enter()}`} style={stagger(0)}>
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI Shelf Vision
            </span>
            <h1 className={`mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl ${enter()}`} style={stagger(80)}>
              Understand Retail Shelves <span className="gradient-text">with AI</span>
            </h1>
            <p className={`mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0 ${enter()}`} style={stagger(160)}>
              Turn shelf photos into SKU insights and gap detection instantly.
            </p>
            <div className={`mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start ${enter()}`} style={stagger(240)}>
              <Button href="/#demo" size="lg" variant="primary">
                <span className="inline-flex items-center gap-2">
                  AI Demo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">View Pricing</Button>
            </div>
          </div>
          <div className={enter()} style={stagger(280)}>
            <div className="overflow-hidden rounded-3xl border border-primary/25 bg-surface-100 p-3 shadow-card">
              <img src="/images/hero/product.jpg" alt="Scene understanding for retail that turns a shelf photo into a SKU list and gap map." className="aspect-video w-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
