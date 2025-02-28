import { render, screen, fireEvent } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import SearchBar from "./SearchBar";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider>{children}</MantineProvider>
);

describe("SearchBar", () => {
  it("shows the search input with provided placeholder", () => {
    render(<SearchBar placeholder="Find festival" onSearch={jest.fn()} />, {
      wrapper: Wrapper,
    });
    expect(screen.getByPlaceholderText("Find festival")).toBeInTheDocument();
  });

  it("triggers onSearch callback with input value", () => {
    const mockSearch = jest.fn();
    render(<SearchBar placeholder="Search" onSearch={mockSearch} />, {
      wrapper: Wrapper,
    });

    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "Metallica" } });
    expect(mockSearch).toHaveBeenCalledWith("Metallica");
  });
});
