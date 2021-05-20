import { useCountDown } from '../../hooks/useCountDown';
import { useStep } from '../../hooks/useStep';
import styles from './styles.module.scss';

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useCountDown();
  const { activeStep } = useStep();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <section className={styles.countDownContainer}>
      <div className={styles.countDownContent}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={`${styles.countDownButton}`}>
          Encerrado &#9989;
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              type="button"
              className={`${styles.countDownButtonActive} ${styles.countDownButton}`}
              onClick={() => resetCountDown()}>
              Abandonar &#x2715;
            </button>
          ) : (
            <button
              type="button"
              className={styles.countDownButton}
              onClick={() => startCountDown()}
              disabled={!activeStep?.timeToFinish}
            >
              Iniciar &#9658;
            </button>
          )}
        </>
      )}
    </section>
  );
}