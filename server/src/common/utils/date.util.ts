/**
 * Date utilities — NFR-TZ-001:
 * - Timestamps stored as UTC timestamptz
 * - Business dates stored as `date` type (YYYY-MM-DD) with IANA timezone context
 */

/** Convert Date to UTC ISO string */
export function toUtcIso(date: Date): string {
  return date.toISOString();
}

/** Get current UTC date as YYYY-MM-DD */
export function todayUtc(): string {
  return new Date().toISOString().split('T')[0];
}

/** Parse YYYY-MM-DD to start-of-day UTC Date */
export function parseDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

/** Check if a date string is YYYY-MM-DD format */
export function isValidDateString(dateStr: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr) && !isNaN(Date.parse(dateStr));
}
