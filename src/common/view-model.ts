/** Metadata passed from every controller into the layout <head> (CLAUDE.md §9). */
export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  /** name of the page-specific stylesheet in /public/css/pages, without extension */
  pageCss?: string;
  /** JSON-LD object, serialised in the template with the `json` helper */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** which top-level nav item is active, for aria-current styling */
  nav?: 'work' | 'capabilities' | 'studio' | 'insights' | '';
}

/** Base render context shared by all pages. */
export interface BaseContext {
  meta: PageMeta;
}
