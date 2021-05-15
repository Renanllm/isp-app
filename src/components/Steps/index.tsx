
import { Step } from '../Step';
import styles from './styles.module.scss';

export function Steps() {
  return (
    <section className={styles.stepsContainer}>
      <Step
        description="Grave sua voz"
        number={1}
      />
      <Step
        description="Escute o áudio"
        number={2}
      />
      <Step
        description="Repetir frase junto com o narrador"
        number={3}
      />
      <Step
        description="Repetir frase após o narrador"
        number={4}
      />
      <Step
        description="Grave sua voz novamente"
        number={5}
      />
    </section>
  );
}