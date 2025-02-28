import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

type ProvidersPropsType = {
  children: React.ReactNode;
};

export const ReactQueryProvider: React.FC<ProvidersPropsType> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
