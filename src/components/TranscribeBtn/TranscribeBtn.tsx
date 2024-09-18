import styles from './TranscribeBtn.module.css';

interface TranscribeBtnProps {
  setRecording: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TranscribeBtn({ setRecording }: TranscribeBtnProps) {
    
  function handleTranscription() {
    console.log('... attempting transcription');
    setRecording(true);
  }

  return (
    <button className={styles.transcriptionBtn} onClick={handleTranscription}>
      ▶
    </button>
  );
}
