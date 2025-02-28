import React from 'react';
import { MantineProvider } from './MantineProvider';
import { ReactQueryProvider } from './ReactQueryProvider';

type AppProviderPropsType = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderPropsType> = ({ children }) => {
  return (
    <MantineProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </MantineProvider>
  );
};
