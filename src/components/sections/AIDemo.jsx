import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const shelves = {
  cereal: {
    label: 'Cereal bay',
    skus: ['Oats box', 'Flake box', 'Granola', 'Bran'],
    gaps: [2],
  },
  drinks: {
    label: 'Drinks bay',
    skus: ['Sparkling', 'Still water', 'Juice', 'Tea'],
    gaps: [1, 3],
  },
  snack: {
    label: 'Snack bay',
    skus: ['Chips', 'Nuts', 'Bars', 'Crackers'],
    gaps: [0],
  },
};

export default function AIDemo() {
  const [id, setId] = useState('cereal');
  const [status, setStatus] = useState('idle');
  const shelf = shelves[id];
  return (
    <section id="demo" className="scroll-mt-24 bg-surface-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="AI Demo" title="Read a Shelf Photo" subtitle="Each bay returns a different SKU list and a different set of gaps." />
        <div className="mt-8 rounded-3xl border border-primary/15 bg-surface-100 p-6">
          <div className="flex flex-wrap gap-2">
            {Object.entries(shelves).map(([key, value]) => (
              <button key={key} type="button" onClick={() => { setId(key); setStatus('idle'); }} className={`rounded-md px-4 py-2 text-sm ${id === key ? 'bg-primary text-white' : 'border border-primary/20'}`}>{value.label}</button>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {shelf.skus.map((sku, i) => (
              <div key={sku} className={`flex h-24 items-end rounded-lg p-2 text-xs ${shelf.gaps.includes(i) ? 'border border-dashed border-secondary bg-surface-50 text-ink-muted' : 'bg-primary/15 text-ink'}`}>
                {shelf.gaps.includes(i) ? 'Empty facing' : sku}
              </div>
            ))}
          </div>
          <button type="button" onClick={() => { setStatus('loading'); setTimeout(() => setStatus('done'), 900); }} className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-white">Diagnose shelf</button>
          {status === 'loading' && <p className="mt-4 text-sm text-primary"><Loader2 className="mr-2 inline h-4 w-4 animate-spin" />Matching facings...</p>}
          {status === 'done' && (
            <div className="mt-4 rounded-xl border border-primary/15 bg-surface-50 p-4 text-sm text-ink-soft">
              <p className="font-semibold text-ink">SKU list · {shelf.label}</p>
              <ul className="mt-2 list-disc pl-5">
                {shelf.skus.map((sku, i) => (
                  <li key={sku}>{sku}{shelf.gaps.includes(i) ? ' — gap' : ' — facing ok'}</li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-3 text-center text-xs text-ink-muted">Simulated shelf vision. Switch bays to see a different gap map.</p>
        </div>
      </div>
    </section>
  );
}
