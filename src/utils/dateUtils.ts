/**
 * Formats a given date string to a formatted date string (DD-MM-YYYY).
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 */
export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
};
