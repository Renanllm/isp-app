import { useState } from 'react';
import { PhraseInput } from '../PhraseInput';
import styles from './styles.module.scss';

type inputFormatted = {
  phrase: string,
  phonetics: string
}

export function Header() {
  const [phrase, setPhrase] = useState('');
  const [phonetics, setPhonetics] = useState('');

  function handlePhoneticsEvent({ phrase, phonetics }: inputFormatted) {
    setPhrase(phrase);
    setPhonetics(phonetics);
  }

  return (
    <header className={styles.headerContainer}>
      {(phrase === '') ? (
        <PhraseInput inputEvent={handlePhoneticsEvent} />
      ) : (
        <div className={styles.phrase}>
          {phrase}
        </div>
      )}

      <span>{phonetics}</span>

      <div className={styles.tag}>ISP</div>
    </header>
  );
}