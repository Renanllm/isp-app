import { useState } from 'react';
import styles from './styles.module.scss';

type inputFormatted = {
  phrase: string,
  phonetics: string
}

interface PhraseInputProps {
  inputEvent: (value: inputFormatted) => void;
}

export function PhraseInput({ inputEvent }: PhraseInputProps) {
  const [phrase, setPhrase] = useState('');
  const [phonetics, setPhonetics] = useState('');

  function handlePhraseInputChange(inputValue: string) {
    if (!inputValue.includes('/')) {
      setPhrase(inputValue);
      return;
    }

    const [pharseFormated, phoneticsFormated] = inputValue.split('/');
    setPhrase(pharseFormated.trim());
    setPhonetics(phoneticsFormated.trim());
  }

  function handleInputBlur() {
    inputEvent({
      phrase,
      phonetics
    });
  }

  return (
    <>
      <input
        className={styles.phraseInput}
        type="text"
        value={phrase}
        onChange={(event) => handlePhraseInputChange(event.target.value)}
        onBlur={handleInputBlur}
      />
    </>
  );
}