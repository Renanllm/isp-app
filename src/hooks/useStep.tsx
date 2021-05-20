import { createContext, ReactNode, useContext, useState } from 'react';
import { stepsData } from '../data/steps';
import { IStep } from '../interfaces/step.interface';

const NOT_FOUND = -1;

interface StepContextData {
  steps: IStep[];
  activeStep: IStep;
  activateStep: (step: IStep) => void;
  goToTheNextStep: () => void;
}

interface StepProviderProps {
  children: ReactNode;
}

export const StepContext = createContext({} as StepContextData);

export function StepProvider({ children }: StepProviderProps) {
  const [steps, setSteps] = useState(stepsData);
  const [activeStep, setActiveStep] = useState(steps[0]);

  function activateStep(step: IStep) {
    const stepIndex = steps.findIndex(stepInArray =>
      stepInArray.order === step.order);

    if (stepIndex === NOT_FOUND) {
      throw new Error('Invalid step!');
    }

    const newSteps = [...steps];
    newSteps[stepIndex] = step;

    setSteps(newSteps);
    setActiveStep(step);
  }

  function goToTheNextStep() {
    if (activeStep.hasFinished) {
      const nextStepOrder = activeStep.order + 1;
      const stepItemWithTheNextOrder =
        steps.find(step => step.order === nextStepOrder);

      if (stepItemWithTheNextOrder) {
        setActiveStep(stepItemWithTheNextOrder);
      }
    }
  }

  return (
    <StepContext.Provider
      value={{
        steps,
        activeStep,
        activateStep,
        goToTheNextStep
      }}>
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  const context = useContext(StepContext);

  return context;
}