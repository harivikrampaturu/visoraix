import useDocumentTitle from '../hooks/useDocumentTitle';
import team from '../data/team';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  useDocumentTitle('About', 'Learn about Visoraix, a Chicago product company shipping Scene understanding for retail that turns a shelf photo into a SKU list and gap map.');
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading eyebrow="About Visoraix" title="A Product, Not a Services Desk" subtitle="Scene understanding for retail that turns a shelf photo into a SKU list and gap map." />
        </AnimateOnScroll>
        <div className="max-w-3xl mx-auto mb-16 glass-card rounded-2xl p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">Our Story</h3>
          <p className="mb-4 text-ink-soft">Visoraix started in Chicago with retail engineers who still walked aisles with clipboards.</p>
          <p className="mb-4 text-ink-soft">A shelf photo should become a SKU list and a gap map in one inference pass.</p>
          <p className="text-ink-soft">We built that as a vision product, not a field-audit service.</p>
        </div>
        <div className="max-w-3xl mx-auto mb-16 glass-card rounded-2xl p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">Our AI</h3>
          <p className="mb-4 text-ink-soft">Visoraix runs a detection model for facings and empty slots, then matches boxes to a SKU index.</p>
          <p className="mb-4 text-ink-soft">Catalog training is offline. Store photos are inference only.</p>
          <p className="text-ink-soft">GPUs keep detection interactive on full-resolution shelf frames. No NVIDIA partnership claimed.</p>
        </div>
        <SectionHeading eyebrow="Our Team" title="The People Behind Visoraix" subtitle="Based in Chicago, the United States." />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="glass-card rounded-xl p-6 text-center">
              <img src={member.avatar} alt={member.name} className="mx-auto mb-4 h-20 w-20 rounded-full" />
              <h4 className="font-display text-lg font-semibold text-ink">{member.name}</h4>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-ink-soft">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
