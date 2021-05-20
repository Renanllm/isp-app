
import { useStep } from '../../hooks/useStep';
import { IStep } from '../../interfaces/step.interface';
import styles from './styles.module.scss';

interface StepProps {
  step: IStep;
}

export function Step({ step }: StepProps) {
  const { activeStep, activateStep } = useStep();

  function setActiveStep() {
    activateStep(step);
  }

  function isActive() {
    return step.order === activeStep?.order;
  }

  function isNewStep() {
    return !isActive() && !step.hasFinished;
  }

  return (
    <>
      { isNewStep() ? (
        <div onClick={setActiveStep} className={styles.stepContent}>
          <div className={styles.stepOrder}>{step?.order}</div>
          <div className={styles.stepDescription}>
            {step?.description}
          </div>
        </div>
      ) : (
        <div onClick={setActiveStep}
          className={`${styles.stepContent} 
            ${step.hasFinished ? styles.stepDone : styles.stepActive}`}
        >
          <div className={`${styles.stepOrder} ${styles.stepOrderActive}`}>
            {step?.order}
          </div>
          <div className={`${styles.stepDescription} ${styles.stepDescriptionActive}`}>
            {step?.description}
          </div>
        </div>
      )}
    </>
  );
}