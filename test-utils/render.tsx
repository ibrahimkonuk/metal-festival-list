import React from 'react';
import { MantineProvider } from '@mantine/core';
import {
  RenderResult,
  render as testingLibraryRender,
} from '@testing-library/react';
import { theme } from '../src/theme';
import { TranslationProvider } from './TranslationProvider';

export const render = (ui: React.ReactNode): RenderResult => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>
        <TranslationProvider>{children}</TranslationProvider>
      </MantineProvider>
    ),
  });
};
