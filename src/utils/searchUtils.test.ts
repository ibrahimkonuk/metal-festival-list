import { filterFestivals } from "./searchUtils";

describe("filterFestivals", () => {
  const testFestivals = [
    {
      id: "1",
      name: "Wacken Open Air",
      location: { city: "Wacken", country: "Germany" },
      info: "The biggest metal festival in the world",
    },
    {
      id: "2",
      name: "Hellfest",
      location: { city: "Clisson", country: "France" },
      info: "One of the largest metal festivals in France",
    },
    {
      id: "3",
      name: "Download Festival",
      location: { city: "Donington Park", country: "UK" },
      info: "Major rock and metal festival in England",
    },
    {
      id: "4",
      name: null,
      location: null,
      info: null,
    },
  ];

  it("should return all festivals when search term is empty", () => {
    const result = filterFestivals(testFestivals, "");
    expect(result).toEqual(testFestivals);
  });

  it("should filter festivals by name", () => {
    const result = filterFestivals(testFestivals, "Wacken");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Wacken Open Air");
  });

  it("should filter festivals by city", () => {
    const result = filterFestivals(testFestivals, "Clisson");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Hellfest");
  });

  it("should filter festivals by country", () => {
    const result = filterFestivals(testFestivals, "UK");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Download Festival");
  });

  it("should filter festivals by info", () => {
    const result = filterFestivals(testFestivals, "biggest metal");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Wacken Open Air");
  });

  it("should be case-insensitive", () => {
    const result = filterFestivals(testFestivals, "wAcKeN");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Wacken Open Air");
  });

  it("should handle festivals with null properties", () => {
    const result = filterFestivals(testFestivals, "nonexistent");
    expect(result).toHaveLength(0);
  });

  it("should return an empty array when no matches are found", () => {
    const result = filterFestivals(testFestivals, "nonexistent");
    expect(result).toHaveLength(0);
  });
});
