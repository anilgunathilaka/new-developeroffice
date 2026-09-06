import { CaseStudy, ProjectCard } from './types';

// Full case studies drafted to the edge of what is publicly verifiable (strategy.md §10).
// Anything not confirmable is marked with placeholder tokens per CLAUDE.md §7.
export const work: CaseStudy[] = [
  {
    slug: 'sinhala-tamil-ocr',
    name: 'Sinhala & Tamil OCR',
    tag: 'Language',
    viz: 'ocr',
    image: '/images/Sinhala-Tamil-OCR.webp',
    descriptor:
      'Optical character recognition for Sinhala and Tamil at 97% accuracy, digitising archives, court records and print collections at scale.',
    context:
      "Vast amounts of Sri Lanka's written record — archives, court files, print collections — exist only on paper, in Sinhala and Tamil. Both are complex scripts, and both are largely ignored by the major OCR and AI labs, whose models are tuned for high-resource languages.",
    problem:
      'General-purpose OCR fails on Sinhala and Tamil. The scripts are dense with ligatures, modifiers and combining forms; document sources are old, degraded and inconsistently printed. Off-the-shelf accuracy was nowhere near usable for records where a single mis-read character can change a name, a date or a legal meaning.',
    question:
      'Could OCR read Sinhala and Tamil accurately enough to trust for archival and legal digitisation?',
    research:
      'We treated it as a language-technology problem, not a scanning problem — studying the scripts\u2019 structure, the failure modes of existing models, and the conditions of real source documents. Where usable training data didn\u2019t exist, building the data was part of the work.',
    approach:
      'Rather than adapt a general model, we built on models trained specifically for these scripts, with a pipeline designed around the realities of degraded, real-world documents.',
    engineering:
      'A production OCR engine built to run against archives, court records and print collections at scale — engineered for throughput and for the messiness of decades-old material, not clean lab inputs.',
    validation:
      'Accuracy was measured against real archival and record material, the conditions the system was actually meant to serve.',
    result: '97% OCR accuracy on Sinhala and Tamil.',
    resultVerified: true,
    impact:
      'Digitisation of Sinhala and Tamil archives, court records and print collections becomes feasible at scale — material that was effectively locked in paper becomes searchable and usable. [CONTENT REQUIRED: specific deployments / volumes]',
    learned:
      'When the big labs skip your language, accuracy is an engineering problem you have to own end-to-end — from the data up.',
    technology: ['OCR models trained for Sinhala & Tamil', 'Document-processing pipeline', '[CONTENT REQUIRED: precise stack]'],
    related: ['asklex-law', 'ai-agent-systems'],
  },
  {
    slug: 'asklex-law',
    name: 'AskLex.law',
    tag: 'Legal AI',
    viz: 'legal',
    image: '/images/AskLex.webp',
    descriptor:
      'A legal research assistant for Sri Lankan law: statute and case-law questions answered in seconds, with citations a lawyer can verify.',
    context:
      'Legal research in Sri Lanka means navigating statutes, case law and commentary — slow, manual, and unforgiving of error. AskLex.law is a legal research assistant that answers questions about Sri Lankan law in seconds.',
    problem:
      "Legal AI has an inherent trust problem: a fluent answer that can't be checked is worse than no answer, because it invites reliance without verification. For a legal tool, the citation is the product.",
    question:
      'Can AI answer legal questions in seconds with citations a lawyer can actually verify?',
    research:
      'We approached it as a retrieval and reliability problem, not a chatbot problem — how to ground answers in real statutes and case law, and surface citations the user can check rather than take on faith.',
    approach:
      'Retrieval-grade AI: answers built from and anchored to primary legal sources — statutes, case law and commentary — with verifiable citations attached to what the system says.',
    engineering:
      'A system that returns statute and case-law answers in seconds, each carrying citations a lawyer can follow to the source.',
    validation:
      'The bar is verifiability: citations must resolve to real, correct sources a legal professional can confirm. [CONTENT REQUIRED: evaluation method / accuracy]',
    result: 'Legal questions answered in seconds, with checkable citations.',
    resultVerified: false,
    impact:
      'Legal research that took hours compresses toward seconds — without asking the user to trust an unverifiable answer. [CONTENT REQUIRED: usage / adoption]',
    learned:
      'In legal AI, the citation is the product. Fluency without verifiability is a liability, not a feature.',
    technology: ['Retrieval-augmented AI over Sri Lankan legal corpora', 'Citation resolution', '[CONTENT REQUIRED: precise stack]'],
    related: ['sinhala-tamil-ocr', 'ai-agent-systems'],
  },
  {
    slug: 'financial-platform-engineering',
    name: 'Financial Platform Engineering',
    tag: 'Finance',
    viz: 'finance',
    image: '/images/Financial-Platform-Engineering.webp',
    descriptor:
      'Product engineering for a Fortune 500 financial platform: high-volume workflows, deterministic execution, long-term maintainability.',
    context:
      'Product engineering for a Fortune 500 financial platform — software operating at the scale and reliability standards of a global financial institution. [CONTENT REQUIRED: client named only with permission]',
    problem:
      'Financial platforms carry constraints most software never meets at once: high transaction volume, zero tolerance for non-deterministic behaviour, full auditability, and integration into a large, pre-existing environment — all while staying maintainable for years.',
    question:
      "How do you engineer for high volume and absolute determinism inside a system that already exists and can't be disrupted?",
    research:
      'Understanding the existing environment, its workflows and its failure modes came before any build — in financial infrastructure the integration surface is the hard part.',
    approach:
      'Engineering for deterministic behaviour and auditability first, designed to slot into the existing platform rather than replace it.',
    engineering:
      'High-volume workflows built for predictable, deterministic execution, with auditability and long-term maintainability as first-order requirements.',
    validation:
      'Correctness under volume and determinism under load, validated against the standards of a Fortune 500 financial environment. [CONTENT REQUIRED: specifics]',
    result: 'High-volume workflows running with deterministic execution and auditability.',
    resultVerified: false,
    impact: '[CONTENT REQUIRED: impact metrics]',
    learned: 'At financial scale, "works" means "works the same way every time, and can prove it did."',
    technology: ['[CONTENT REQUIRED: stack]'],
    related: ['ai-agent-systems', 'product-engineering'],
  },
  {
    slug: 'ai-agent-systems',
    name: 'AI Agent Systems',
    tag: 'Agents',
    viz: 'agents',
    image: '/images/AI-Agent-Systems.webp',
    descriptor:
      'Autonomous and semi-autonomous agents that research, draft and monitor, with permissioned access and workflows configured per operation.',
    context:
      'Autonomous and semi-autonomous agents that do real work inside real operations — researching, drafting and monitoring — rather than agents that demo well and fail in production.',
    problem:
      'Most agent demos collapse on contact with reality: unbounded permissions, no configurability, and workflows that don\u2019t match how an actual operation runs. In production, an agent with the wrong access or the wrong assumptions is a risk, not a feature.',
    question: 'What does it take for an AI agent to survive contact with a real workflow?',
    research:
      'We studied where agents break in production — permissions, reliability, and the gap between a generic workflow and a specific operation\u2019s real one.',
    approach:
      'Agents with permissioned access and workflows configured to each operation, with a human in the loop where judgment belongs — autonomy scoped deliberately, not maximised.',
    engineering:
      'Systems that research, draft and monitor, built around each operation\u2019s actual process and access boundaries.',
    validation:
      'The test is production: whether the agent keeps doing useful, correct work inside a live workflow. [CONTENT REQUIRED: specifics]',
    result: 'Agents running in production workflows with permissioned access.',
    resultVerified: false,
    impact: '[CONTENT REQUIRED: impact metrics]',
    learned: 'Production agents are an engineering discipline, not a prompt. Scope the autonomy; earn the trust.',
    technology: ['Agentic AI', 'Permissioned access controls', 'Workflow configuration', '[CONTENT REQUIRED: precise stack]'],
    related: ['asklex-law', 'financial-platform-engineering'],
  },
];

// Additional Work entries that use the same template; specifics marked CONTENT REQUIRED.
export const workExtra: ProjectCard[] = [
  { slug: 'data-protection', name: 'Data Protection Advisory', tag: 'Compliance', viz: 'compliance',
    image: '/images/Data-Protection-Advisory.webp',
    descriptor: "DPA-readiness assessment and engineering for organisations handling personal data under Sri Lanka's data-protection regime." },
  { slug: 'product-engineering', name: 'Product Engineering', tag: 'Product', viz: 'product',
    image: '/images/Product-Engineering.webp',
    descriptor: 'End-to-end product teams — design, build, ship, operate — for founders and institutions that need software done properly.' },
  { slug: 'discovery-research', name: 'Discovery & Research', tag: 'Research', viz: 'research',
    image: '/images/Discovery-Research.webp',
    descriptor: 'Structured discovery that turns open questions into buildable specs, prototypes and evidence before a build is committed.' },
];

export const findCaseStudy = (slug: string) => work.find((w) => w.slug === slug);
export const allProjectCards = (): ProjectCard[] => [...work, ...workExtra];
