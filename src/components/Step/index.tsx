
import styles from './styles.module.scss';

interface StepProps {
  number: number;
  description: string;
}

export function Step({ number, description }: StepProps) {
  return (
    <div className={styles.stepContent}>
      <div className={styles.stepNumber}>{number}</div>
      <div className={styles.stepDescription}>
        {description}
      </div>
    </div>
  );
}