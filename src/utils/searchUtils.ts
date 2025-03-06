import { FestivalsResponseType, FestivalType } from "src/api";

/**
 * Filters an array of festivals based on a search term.
 * The search term is matched against the festival's name, city, country, and info.
 *
 * @param festivals - The array of festivals to filter.
 * @param searchTerm - The search term to filter by.
 * @returns The filtered array of festivals.
 */
export const filterFestivals = (
  festivals: FestivalsResponseType | undefined,
  searchTerm: string,
): FestivalType[] => {
  if (!festivals) return [];
  if (!searchTerm) return festivals;

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return festivals.filter((festival) => {
    const nameMatch = festival.name
      ?.toLowerCase()
      .includes(lowerCaseSearchTerm);
    const cityMatch = festival.location?.city
      ?.toLowerCase()
      .includes(lowerCaseSearchTerm);
    const countryMatch = festival.location?.country
      ?.toLowerCase()
      .includes(lowerCaseSearchTerm);
    const infoMatch = festival.info
      ?.toLowerCase()
      .includes(lowerCaseSearchTerm);

    return nameMatch || cityMatch || countryMatch || infoMatch;
  });
};
