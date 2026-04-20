/**
 * Format a number as Nigerian Naira.
 * e.g. 15000 → "₦15,000"
 */
export const fmt = (amount) => `₦${Number(amount).toLocaleString()}`;
