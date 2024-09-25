interface StopBtnProps {
  setRecording: React.Dispatch<React.SetStateAction<boolean>>;
  mediaRecorder: MediaRecorder | null;
}

export default function StopBtn({ setRecording, mediaRecorder }: StopBtnProps) {

  function handleStop() {
    setRecording(false);
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }
  }

  return (
    <button className="stopBtn" onClick={handleStop}>
      ■
    </button>
  );
}
