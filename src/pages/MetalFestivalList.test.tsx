import { screen, waitFor } from "@testing-library/react";
import MetalFestivalList from "./MetalFestivalList";
import { useQueryFestivals } from "./../api/generated/apiComponents";
import { render } from "../../test-utils/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("./../api/generated/apiComponents", () => ({
  useQueryFestivals: jest.fn(),
}));

const queryClient = new QueryClient();

describe("MetalFestivalList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows loading state", () => {
    (useQueryFestivals as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MetalFestivalList />
      </QueryClientProvider>,
    );
    expect(
      screen.getByRole("status", { name: "Loading festivals" }),
    ).toBeInTheDocument();
  });

  it("shows error state", async () => {
    const errorMessage = "Failed to fetch festivals";
    const mockError = new Error(errorMessage);

    (useQueryFestivals as jest.Mock).mockReturnValue({
      error: mockError,
      isLoading: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MetalFestivalList />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Error")).toBeInTheDocument();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  it("displays festival data", async () => {
    const mockData = [
      {
        id: 1,
        name: "Hellfest",
        start: "2024-06-20",
        end: "2024-06-22",
        location: {
          city: "Clisson",
          country: "France",
        },
        info: "Extreme metal festival",
      },
    ];

    (useQueryFestivals as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MetalFestivalList />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Hellfest")).toBeInTheDocument();
      expect(screen.getByText("Clisson/France")).toBeInTheDocument();
      expect(
        screen.getByText("Date: 20-06-2024 - 22-06-2024"),
      ).toBeInTheDocument();
      expect(screen.getByText("Extreme metal festival")).toBeInTheDocument();
    });
  });

  it("handles missing data gracefully", async () => {
    const mockData = [
      {
        id: 2,
        name: "",
        start: null,
        end: null,
        location: {},
        info: "",
      },
    ];

    (useQueryFestivals as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MetalFestivalList />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByText("Festival Name Not Available"),
      ).toBeInTheDocument();
      expect(screen.getByText("Location Not Available")).toBeInTheDocument();
      expect(screen.getByText("Date: N/A - N/A")).toBeInTheDocument();
    });
  });
});
