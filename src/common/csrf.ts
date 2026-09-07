import { randomBytes, timingSafeEqual } from 'crypto';
import { NextFunction, Request, Response } from 'express';

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

const CSRF_COOKIE_OPTS = { httpOnly: true, sameSite: 'strict' as const, path: '/' };

/** Same-origin relative path only — used after the site-wide contact form POST. */
export function safeReturnPath(value: unknown): string {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return '/';
  const path = value.split('?')[0].split('#')[0];
  if (!path || path.includes('\\') || path.includes('://')) return '/';
  return path;
}

/**
 * Ensure a CSRF cookie (path `/`) exists and expose it to Handlebars via res.locals
 * so the footer contact form can render on every page.
 */
export function csrfLocalsMiddleware(req: Request, res: Response, next: NextFunction): void {
  const existing = readCookie(req.headers.cookie, CSRF_COOKIE);
  const token = existing || generateCsrfToken();
  if (!existing) res.cookie(CSRF_COOKIE, token, CSRF_COOKIE_OPTS);
  res.locals.csrfToken = token;
  res.locals.currentPath = req.path || '/';
  res.locals.contactSent = req.query.contact === 'sent';
  res.locals.contactError = req.query.contact === 'error';
  next();
}
