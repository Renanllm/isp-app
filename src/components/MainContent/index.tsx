import { CountDown } from '../CountDown';
import { Steps } from '../Steps';
import styles from './styles.module.scss';

export function MainContent() {
  return (
    <main className={styles.mainContainer}>
      <Steps />
      <CountDown />
    </main>
  );
}