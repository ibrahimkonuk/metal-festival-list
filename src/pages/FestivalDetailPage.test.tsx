import { render, screen, waitFor } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { useQueryFestivals } from "../api/generated/apiComponents";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FestivalDetailPage from "./FestivalDetailPage";

jest.mock("../api/generated/apiComponents", () => ({
  useQueryFestivals: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useParams: jest.fn(),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Route: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

const queryClient = new QueryClient();

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <MantineProvider>{children}</MantineProvider>
  </QueryClientProvider>
);

describe("FestivalDetailPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows loading state", () => {
    (useQueryFestivals as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    render(<FestivalDetailPage />, { wrapper: Wrapper });
    expect(
      screen.getByRole("status", { name: "Loading festival details" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Loading festival details...")).toBeInTheDocument();
  });

  it("shows error state", async () => {
    const errorMessage = "Failed to fetch festival details";
    const mockError = new Error(errorMessage);

    (useQueryFestivals as jest.Mock).mockReturnValue({
      error: mockError,
      isLoading: false,
    });

    render(<FestivalDetailPage />, { wrapper: Wrapper });

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

    render(<FestivalDetailPage />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText("Hellfest")).toBeInTheDocument();
      expect(screen.getByText("Clisson, France")).toBeInTheDocument();
      expect(screen.getByText("Extreme metal festival")).toBeInTheDocument();
    });
  });

  it("handles no festival found", async () => {
    (useQueryFestivals as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
    });

    render(<FestivalDetailPage />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText("Festival Not Found")).toBeInTheDocument();
      expect(
        screen.getByText("The festival with the specified ID was not found."),
      ).toBeInTheDocument();
    });
  });
});
