import hbs = require('hbs');

/**
 * Register Handlebars helpers. Keep each helper tiny and pure (CLAUDE.md §6).
 * `json` is used only for trusted, server-built JSON-LD objects.
 */
export function registerHbsHelpers(): void {
  hbs.registerHelper('eq', (a: unknown, b: unknown) => a === b);

  // concat string args (last arg is the Handlebars options object, so drop it)
  hbs.registerHelper('concat', (...args: unknown[]) => args.slice(0, -1).join(''));

  hbs.registerHelper('json', (context: unknown) => JSON.stringify(context));

  hbs.registerHelper('formatDate', (value?: string) => {
    if (!value) return '[DATE]';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value; // pass through placeholders like [DATE]
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  });

  // Article-card date, e.g. "12 APR 2026". UTC getters avoid a timezone
  // off-by-one on date-only ISO strings parsed as UTC midnight.
  hbs.registerHelper('compactDate', (value?: string) => {
    if (!value) return '[DATE]';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  });

  hbs.registerHelper('year', () => new Date().getFullYear());

  // Cache-busting suffix for static assets. Bump ASSET_VERSION on deploy.
  const version = process.env.ASSET_VERSION || '191';
  hbs.registerHelper('asset', (path: string) => new hbs.handlebars.SafeString(`${path}?v=${version}`));
}
