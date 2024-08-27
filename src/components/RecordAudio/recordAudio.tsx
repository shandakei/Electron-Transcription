import { useState, useEffect } from 'react';
import styles from './recordAudio.module.css'
import StopBtn from '../StopBtn/StopBtn.tsx'
import TranscribeBtn from '../TranscribeBtn/TranscribeBtn.tsx'
import StartRecording from '../../utils/StartRecording/StartRecording.ts'

const RecordAudio = () => {
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false)

  useEffect(() => {
    console.log('start recording useEffect')
    if (recording) {
      StartRecording(setTranscript)
    }
  }, [recording]);

  return (
    <div className={styles.container}>
      <h2>Live 'Record Audio' Transcript</h2>
      <p className={styles.transcription}>{transcript}</p>
      <StopBtn setRecording={setRecording} mediaRecorder={null} />
      <TranscribeBtn setRecording={setRecording}/>
    </div>
  );
};

export default RecordAudio;
