import React from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { CountDownProvider } from './hooks/useCountDown';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />

      <CountDownProvider>
        <MainContent />
      </CountDownProvider>
    </>
  );
}

export default App;
