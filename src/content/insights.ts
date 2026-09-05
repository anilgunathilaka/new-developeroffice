import { Insight } from './types';

// Dates mirror the current site; authors and reading times are placeholders
// until Developer Office supplies them (CLAUDE.md §7 — never invent authors/dates).
export const insights: Insight[] = [
  {
    slug: 'why-sinhala-ocr-took-30-years',
    title: 'Why Sinhala OCR Took 30 Years: Notes from a 97% Accuracy Run',
    subtitle: 'What it actually takes to make a machine read a script the big labs ignore.',
    category: 'Research',
    summary:
      'A field report from building Sinhala & Tamil OCR to 97% accuracy — the script complexity, the missing training data, and why this was a language-technology problem before it was a scanning one.',
    author: '[AUTHOR REQUIRED]',
    date: '2026-06-12',
    readingTime: '[X min]',
  },
  {
    slug: 'asklex-citable-legal-ai',
    title: 'AskLex.law: What It Takes to Make Legal AI Citable',
    subtitle: 'In a legal tool, the citation is the product.',
    category: 'Product',
    summary:
      'Why fluent legal answers aren\u2019t enough, and how retrieval-grade AI grounded in primary sources makes answers a lawyer can verify.',
    author: '[AUTHOR REQUIRED]',
    date: '2026-05-28',
    readingTime: '[X min]',
  },
  {
    slug: 'agents-in-production',
    title: 'Agents in Production: What Survived Contact with Real Workflows',
    subtitle: 'Most agent demos die on contact with reality. Here\u2019s what doesn\u2019t.',
    category: 'Engineering',
    summary:
      'Permissioned access, per-operation configuration and human-in-the-loop design — the engineering that separates a production agent from a demo.',
    author: '[AUTHOR REQUIRED]',
    date: '2026-04-30',
    readingTime: '[X min]',
  },
];

export const findInsight = (slug: string) => insights.find((i) => i.slug === slug);
