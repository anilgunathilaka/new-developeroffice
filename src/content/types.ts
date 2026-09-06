/**
 * Content types. The `verified` flags enforce CLAUDE.md §7 governance:
 * a result/number must be explicitly marked verified, otherwise templates
 * render it with a placeholder treatment so unverified data can't ship silently.
 */

export interface Stat {
  value: string;      // e.g. "30", "97", "Fortune 500", "One team"
  unit?: string;      // e.g. "yrs", "%"  (rendered in accent)
  label: string;      // descriptor beneath the numeral
  countTo?: number;   // if set, the numeral counts up to this on scroll
  image?: string;     // optional card background in /public/images
  verified: boolean;
}

export interface ProjectCard {
  slug: string;
  name: string;
  tag: string;        // category label, e.g. "Language"
  descriptor: string; // one-line card copy
  viz: 'ocr' | 'legal' | 'finance' | 'agents' | 'compliance' | 'product' | 'research';
  image?: string;     // real project image in /public/images
}

/** 13-section case-study shape (strategy.md §9). Missing sections use placeholder tokens. */
export interface CaseStudy extends ProjectCard {
  context: string;
  problem: string;
  question: string;
  research: string;
  approach: string;
  engineering: string;
  validation: string;
  result: string;
  resultVerified: boolean;   // false => template shows [RESULT TO BE VERIFIED] treatment
  impact: string;
  learned: string;
  technology: string[];
  related: string[];         // slugs
}

export interface Capability {
  slug: string;
  name: string;
  hero: string;
  problem: string;
  whatWeDo: string;
  related: string[];         // project slugs
}

export interface Insight {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Research' | 'Engineering' | 'AI' | 'Product';
  summary: string;
  author: string;            // placeholder until supplied
  date: string;              // ISO or placeholder
  readingTime: string;       // placeholder until supplied
}
