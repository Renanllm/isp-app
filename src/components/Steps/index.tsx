
import { useStep } from '../../hooks/useStep';
import { Step } from '../Step';
import styles from './styles.module.scss';

export function Steps() {
  const { steps } = useStep();

  return (
    <section className={styles.stepsContainer}>
      { steps.map(step => (
        <Step
          key={step.order}
          step={step}
        />
      ))}
    </section>
  );
}