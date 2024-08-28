import { useState, useEffect } from 'react';
import styles from './recordAudio.module.css'
import StopBtn from '../StopBtn/StopBtn.tsx'
import TranscribeBtn from '../TranscribeBtn/TranscribeBtn.tsx'
import StartRecording from '../../utils/StartRecording/StartRecording.ts'
import SummarizedText from '../summarizedText/summarizedText.tsx';
import OpenAIComponent from '../../utils/summerizer/playground.tsx'

const RecordAudio = () => {
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false)
  const [summarized, setSummarized] = useState(false)
  const [response, setResponse] = useState<string | null>(null);

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
      {summarized ? <SummarizedText response={response} /> : <></>}
    </div>
    <div className={styles.btns}>
      <StopBtn setRecording={setRecording} mediaRecorder={null} />
      <TranscribeBtn setRecording={setRecording}/>
      <OpenAIComponent setSummarized={setSummarized} summarized={summarized} response={response} setResponse={setResponse}/>
    </div>
    </div>
  );
};

export default RecordAudio;
