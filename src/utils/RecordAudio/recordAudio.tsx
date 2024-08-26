import { useState } from 'react';
import styles from './recordAudio.module.css'
import StopBtn from '../../components/StopBtn/StopBtn.tsx'
import TranscribeBtn from '../../components/TranscribeBtn/TranscribeBtn.tsx'
import StartRecording from '../../components/StartRecording/StartRecording.ts'

const RecordAudio = () => {
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false)

  if (recording) {
    StartRecording(transcript, setTranscript)
  }

  return (
    <div className={styles.container}>
      <h2>Live 'Record Audio' Transcript</h2>
      <p className={styles.transcription}>{transcript}</p>
      <StopBtn setRecording={setRecording} />
      <TranscribeBtn setRecording={setRecording}/>
    </div>
  );
};

export default RecordAudio;
