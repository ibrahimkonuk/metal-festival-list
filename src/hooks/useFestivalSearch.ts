import { useMemo, useState } from "react";
import { FestivalType } from "src/api";
import { filterFestivals } from "../utils/searchUtils";

const useFestivalSearch = (festivals: FestivalType[] = []) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFestivals = useMemo(
    () => filterFestivals(festivals, searchTerm),
    [festivals, searchTerm],
  );

  return { filteredFestivals, searchTerm, setSearchTerm };
};

export default useFestivalSearch;
