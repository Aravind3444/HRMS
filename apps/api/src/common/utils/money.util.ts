/**
 * Money utilities — NFR-MNY-001: All monetary values stored as NUMERIC(18,2).
 * NEVER use JavaScript floats for money. Use string/Decimal from Prisma.
 */

/** Round to 2 decimal places using banker's rounding */
export function roundMoney(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

/** Parse a money string to a fixed 2-decimal string */
export function toMoneyString(value: string | number): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) throw new Error(`Invalid money value: ${value}`);
  return num.toFixed(2);
}

/** Add two money values safely */
export function addMoney(a: string, b: string): string {
  const result = parseFloat(a) + parseFloat(b);
  return roundMoney(result).toFixed(2);
}
