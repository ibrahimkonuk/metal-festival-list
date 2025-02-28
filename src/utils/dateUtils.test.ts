import { formatDateTime } from './dateUtils';

describe('formatDateTime', () => {
  it('formats valid date string correctly', () => {
    const result = formatDateTime('2024-05-15T12:00:00Z');
    expect(result).toBe('15-05-2024');
  });

  it('handles invalid date strings', () => {
    const result = formatDateTime('invalid-date');
    expect(result).toBe('Invalid date');
  });

  it('pads single-digit days and months', () => {
    const result = formatDateTime('2024-01-02T00:00:00Z');
    expect(result).toBe('02-01-2024');
  });
});
