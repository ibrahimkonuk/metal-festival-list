import React from "react";
import { MantineProvider } from "@mantine/core";
import {
  RenderResult,
  render as testingLibraryRender,
} from "@testing-library/react";
import { theme } from "../src/theme";
import { TranslationProvider } from "./TranslationProvider";
import { MemoryRouter } from "react-router-dom";

export const render = (ui: React.ReactNode): RenderResult => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter>
        <MantineProvider theme={theme}>
          <TranslationProvider>{children}</TranslationProvider>
        </MantineProvider>
      </MemoryRouter>
    ),
  });
};
