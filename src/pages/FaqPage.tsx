import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'What is Force G?',
    answer:
      'Force G is an AI‑powered plant and floral design platform that lets you generate, sculpt, and visualize stunning botanical designs using cutting‑edge generative AI. From simple arrangements to complex 3D compositions, Force G brings your creative vision to life.',
  },
  {
    question: 'How does the AI generation work?',
    answer:
      'Our proprietary AI models are trained on millions of botanical specimens and artistic floral arrangements. You simply describe your vision — or upload a reference — and our system generates high‑fidelity designs in seconds. You can then refine, adjust colors, shapes, and export in multiple formats.',
  },
  {
    question: 'Can I use the designs commercially?',
    answer:
      'Absolutely. All designs created with a Pro or Enterprise subscription come with a full commercial license. You own the output and can use it for client work, print, web, packaging, or any other commercial purpose without attribution.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! Our Starter plan is completely free and includes 5 AI generations per month with access to the community gallery. The Pro plan also offers a 14‑day free trial with full access to all features — no credit card required.',
  },
  {
    question: 'What export formats are supported?',
    answer:
      'We support PNG, JPEG, SVG, and PDF exports. Pro users also get access to layered PSD files and 3D model exports (OBJ, GLTF). Enterprise customers can request custom format pipelines for their specific workflow needs.',
  },
  {
    question: 'How does team collaboration work?',
    answer:
      'Enterprise plans include real‑time collaboration for up to 25 team members. You can share projects, leave comments on designs, maintain a shared asset library, and manage permissions through our admin dashboard.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel at any time with no penalties. Your subscription will remain active until the end of your current billing cycle. All your designs and exports will remain accessible for 90 days after cancellation.',
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="liquid-glass rounded-2xl sm:rounded-3xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 cursor-pointer group text-left"
      >
        <span className="text-sm sm:text-base font-medium text-white/90 pr-6 group-hover:text-white transition-colors">
          {item.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4 text-white/70" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          isOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
      {/* Header */}
      <div className="text-center pt-8 sm:pt-12 pb-12 sm:pb-16 max-w-2xl mx-auto">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-4 font-semibold">
          Help Center
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] text-white leading-[1.1] mb-6">
          Frequently <br className="hidden sm:block" />
          <em className="font-serif italic text-white/80 font-normal">asked questions</em>
        </h1>
        <p className="text-sm sm:text-base text-white/60 max-w-lg mx-auto leading-relaxed">
          Everything you need to know about Force G. Can't find what you're looking for? Reach out to our team.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-2xl mx-auto flex flex-col gap-3 sm:gap-4">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12 sm:mt-16">
        <p className="text-sm text-white/50 mb-4">Still have questions?</p>
        <a
          href="mailto:hello@forceg.ai"
          className="liquid-glass-strong rounded-full px-8 py-3 text-sm font-medium text-white/90 hover:scale-105 active:scale-95 transition-transform cursor-pointer inline-block"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
