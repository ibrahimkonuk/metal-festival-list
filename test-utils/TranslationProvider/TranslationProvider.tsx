import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18nForTests';

type TranslationProviderPropsType = {
  children: React.ReactNode;
};

export const TranslationProvider: React.FC<TranslationProviderPropsType> = ({
  children,
}) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
