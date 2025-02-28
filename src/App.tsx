import React from 'react';
import './App.css';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './pages/router/AppRouter';
import { AppProvider } from './providers';

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
