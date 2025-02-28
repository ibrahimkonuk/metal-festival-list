import React from 'react';
import { MantineProvider as NativeMantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from '../../theme';

type MantineProviderPropsType = {
  children: React.ReactNode;
};

export const MantineProvider: React.FC<MantineProviderPropsType> = ({
  children,
}) => {
  return (
    <NativeMantineProvider theme={theme}>{children}</NativeMantineProvider>
  );
};
