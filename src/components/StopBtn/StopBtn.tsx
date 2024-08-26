import styles from './StopBtn.module.css';

interface TranscribeBtnProps {
  setRecording: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TranscribeBtn({ setRecording }: TranscribeBtnProps) {
    
  function handleTranscription() {
    console.log('... stopping transcription');
    setRecording(false);
  }

  return (
    <button className={styles.transcriptionBtn} onClick={handleTranscription}>
      STOP
    </button>
  );
}
