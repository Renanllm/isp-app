import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useStep } from './useStep';

interface CountDownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountDownProviderProps {
  children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { activeStep, activateStep, goToTheNextStep } = useStep();

  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(activeStep?.timeToFinish ?? 0);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  useEffect(() => {
    if (!activeStep?.hasFinished) {
      resetCountDown();
      return;
    }

    goToTheNextStep();
  }, [activeStep]);

  useEffect(() => {
    activateStep({
      ...activeStep,
      hasFinished
    });
  }, [hasFinished]);

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
      }}>
      {children}
    </CountDownContext.Provider>
  );
}

export function useCountDown() {
  const context = useContext(CountDownContext);

  return context;
}