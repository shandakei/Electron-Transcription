import styles from './StopBtn.module.css';

interface StopBtnProps {
  setRecording: React.Dispatch<React.SetStateAction<boolean>>;
  mediaRecorder: MediaRecorder | null;
}

export default function StopBtn({ setRecording, mediaRecorder }: StopBtnProps) {

  function handleStop() {
    console.log('... stopping transcription');
    setRecording(false);
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }
  }

  return (
    <button className="stopBtn" onClick={handleStop}>
      STOP
    </button>
  );
}
