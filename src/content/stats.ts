import { Stat } from './types';

// Proof numbers — all four supported by current site copy (strategy.md §7 §11).
// A confirmed "40+ engineers" figure could be added here once verified.
export const stats: Stat[] = [
  { value: '30', unit: ' yrs', label: 'of engineering practice, from Colombo.', countTo: 30, verified: true },
  { value: '97', unit: '%', label: 'Sinhala & Tamil OCR accuracy, on scripts most labs skip.', countTo: 97, verified: true },
  { value: 'Fortune', unit: '\u00a0500', label: 'financial platform engineered for deterministic execution.', verified: true },
  { value: 'One', unit: '\u00a0team', label: 'research, AI and product engineering under one roof.', verified: true },
];
