import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
const items = [
  { title: 'Shelf OCR', description: 'Reads facings from a single aisle photo.' },
  { title: 'SKU Lists', description: 'Returns a ranked product list for the bay.' },
  { title: 'Gap Detection', description: 'Highlights empty slots against the expected planogram.' },
];
export default function FeaturesTeaser() {
  return (
    <section className="bg-surface-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Features" title='Shelf Photo to SKU and Gaps' subtitle='Vision reads facings, missing slots, and planogram drift.' />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-primary/15 bg-surface-100 p-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/features" className="inline-flex items-center gap-2 font-semibold text-primary">See all features <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
