import { screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { render } from "../../test-utils/index";

describe("SearchBar", () => {
  it("shows the search input with provided placeholder", () => {
    render(
      <SearchBar
        placeholder="Find festival"
        onSearch={jest.fn()}
        currentValue={""}
      />,
    );
    expect(screen.getByPlaceholderText("Find festival")).toBeInTheDocument();
  });

  it("triggers onSearch callback with input value", () => {
    const mockSearch = jest.fn();
    render(
      <SearchBar
        placeholder="Search"
        onSearch={mockSearch}
        currentValue={""}
      />,
    );

    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "Metallica" } });
    expect(mockSearch).toHaveBeenCalledWith("Metallica");
  });
});
