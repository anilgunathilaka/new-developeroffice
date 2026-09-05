import { randomBytes, timingSafeEqual } from 'crypto';

/**
 * Zero-dependency double-submit CSRF guard (CLAUDE.md §11): the server sets an
 * httpOnly cookie and renders the same value into a hidden form field. A
 * cross-site form can't read the httpOnly cookie to reproduce that value, so a
 * mismatch on POST means the request didn't originate from our own page.
 */
export const CSRF_COOKIE = 'csrf_token';

export function generateCsrfToken(): string {
  return randomBytes(24).toString('hex');
}

export function readCookie(header: string | undefined, name: string): string | undefined {
  if (!header) return undefined;
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    if (part.slice(0, idx).trim() === name) return decodeURIComponent(part.slice(idx + 1).trim());
  }
  return undefined;
}

export function verifyCsrf(cookieValue: string | undefined, formValue: unknown): boolean {
  if (!cookieValue || typeof formValue !== 'string' || !formValue) return false;
  const a = Buffer.from(cookieValue);
  const b = Buffer.from(formValue);
  return a.length === b.length && timingSafeEqual(a, b);
}
