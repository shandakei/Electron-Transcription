import { useState, useEffect } from 'react';
import styles from './recordAudio.module.css'
import StopBtn from '../StopBtn/StopBtn.tsx'
import TranscribeBtn from '../TranscribeBtn/TranscribeBtn.tsx'
import StartRecording from '../../utils/StartRecording/StartRecording.ts'
import SummarizedText from '../summarizedText/summarizedText.tsx';
import SummarizeBtn from '../summarizeBtn/summarizeBtn.tsx';

const RecordAudio = () => {
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false)
  const [summarized, setSummarized] = useState(false)

  useEffect(() => {
    console.log('start recording useEffect')
    if (recording) {
      StartRecording(setTranscript)
    }
  }, [recording]);

  return (
    <div className={styles.body}>
    <h2>Live 'Record Audio' Transcript</h2>
    <div className={styles.container}>
      <p className={styles.transcription}>{transcript}</p>
      {summarized ? <SummarizedText /> : <></>}
    </div>
    <div className={styles.btns}>
      <StopBtn setRecording={setRecording} mediaRecorder={null} />
      <TranscribeBtn setRecording={setRecording}/>
      <SummarizeBtn setSummarized={setSummarized} summarized={summarized} />
    </div>
    </div>
  );
};

export default RecordAudio;
