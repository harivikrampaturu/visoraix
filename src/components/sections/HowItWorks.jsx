import AnimateOnScroll from '../ui/AnimateOnScroll';
import SectionHeading from '../ui/SectionHeading';
const steps = [
  { title: 'Capture a shelf', description: 'Pick a sample aisle photo.' },
  { title: 'Run shelf vision', description: 'The model lists SKUs and marks empty facings.' },
  { title: 'Review gaps', description: 'See which slots are missing before the next reset.' },
];
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-surface-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="Three Steps to a Result" subtitle="Try it on the homepage demo. No free-trial plan." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-primary/15 bg-surface-50 p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Step {i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
