import { Capability } from './types';

export const capabilities: Capability[] = [
  {
    slug: 'product-engineering',
    name: 'Product Engineering',
    hero: 'End-to-end product engineering. Research \u2192 Strategy \u2192 Design \u2192 Engineering \u2192 Production. One team, the whole way.',
    problem:
      'Products stall when the people who research, design and build them belong to different companies with different incentives. Handoffs leak context; nobody owns the outcome.',
    whatWeDo:
      'We run the full arc — discovery, strategy, design, engineering and operation — as a single dedicated team for founders and institutions who need software done properly. We ship products and then keep them running.',
    related: ['financial-platform-engineering', 'asklex-law'],
  },
  {
    slug: 'ai-engineering',
    name: 'AI Engineering',
    hero: 'AI as engineering, not a marketing layer.',
    problem:
      'Most AI projects die between the demo and production — unreliable, unauditable, or unsafe with real data and real permissions.',
    whatWeDo:
      'We build AI systems that hold up in production: agents with permissioned access; intelligent workflows configured to real operations; retrieval grounded in real sources; rigorous evaluation; and production deployment with a human in the loop where judgment belongs.',
    related: ['asklex-law', 'ai-agent-systems', 'sinhala-tamil-ocr'],
  },
  {
    slug: 'applied-research',
    name: 'Applied Research',
    hero: 'Research that ends in something buildable.',
    problem:
      "Some problems can't be estimated until they've been investigated. Committing to a build before the research is done is how projects fail expensively.",
    whatWeDo:
      'Structured experimentation, technical research and prototyping — especially in language technology — that turns open questions into validated, buildable specifications and evidence before a full build is committed.',
    related: ['sinhala-tamil-ocr', 'discovery-research', 'asklex-law'],
  },
  {
    slug: 'language-and-data',
    name: 'Language & Data',
    hero: 'Software that can read Sinhala, Tamil and the documents nobody else can.',
    problem:
      'The scripts and documents that matter most locally — Sinhala, Tamil, degraded archival material — are exactly the ones global tools handle worst.',
    whatWeDo:
      'OCR for Sinhala and Tamil at 97% accuracy; document intelligence for archives, court records and print collections; and the data-processing pipelines that make messy, real-world material usable at scale.',
    related: ['sinhala-tamil-ocr', 'asklex-law'],
  },
  {
    slug: 'enterprise-systems',
    name: 'Enterprise Systems',
    hero: 'Institutional software that has to keep working.',
    problem:
      'Institutional systems — financial, governmental, legal — carry constraints most software never faces: volume, determinism, auditability, security, and integration into environments that already exist.',
    whatWeDo:
      'Financial systems and institutional software engineered for reliability; integrations into existing environments; and security and auditability built in from the start.',
    related: ['financial-platform-engineering', 'ai-agent-systems', 'data-protection'],
  },
  {
    slug: 'technology-advisory',
    name: 'Technology Advisory',
    hero: 'The engineering decisions that are hard to reverse.',
    problem:
      "Architecture, data protection and AI-adoption choices set years of consequences. Getting advice from people who don't also build is how you get advice that doesn't survive contact with reality.",
    whatWeDo:
      'Architecture and technical strategy; data protection — DPA-readiness assessment and engineering aligned to Sri Lanka\u2019s data-protection regime; AI-adoption guidance grounded in what actually ships; and help with the engineering decisions that are expensive to unwind.',
    related: ['data-protection', 'financial-platform-engineering'],
  },
];

export const findCapability = (slug: string) => capabilities.find((c) => c.slug === slug);
