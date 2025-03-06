import { useMemo, useState } from "react";
import { FestivalType } from "src/api";
import { filterFestivals } from "../utils/searchUtils";

type UseFestivalSearchReturnType = {
  filteredFestivals: FestivalType[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const useFestivalSearch = (
  festivals: FestivalType[] = [],
): UseFestivalSearchReturnType => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFestivals = useMemo(
    () => filterFestivals(festivals, searchTerm),
    [festivals, searchTerm],
  );

  return { filteredFestivals, searchTerm, setSearchTerm };
};

export default useFestivalSearch;
