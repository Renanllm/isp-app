import React from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { CountDownProvider } from './hooks/useCountDown';
import { StepProvider } from './hooks/useStep';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />

      <StepProvider>
        <CountDownProvider>
          <MainContent />
        </CountDownProvider>
      </StepProvider>
    </>
  );
}

export default App;
