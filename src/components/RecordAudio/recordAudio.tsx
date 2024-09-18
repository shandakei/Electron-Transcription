import { useState, useEffect } from 'react';
import styles from './recordAudio.module.css'
import StopBtn from '../StopBtn/StopBtn.tsx'
import TranscribeBtn from '../TranscribeBtn/TranscribeBtn.tsx'
import StartRecording from '../../utils/StartRecording/StartRecording.ts'
import SummarizedText from '../summarizedText/summarizedText.tsx';
// import OpenAIComponent from '../../utils/summerizer/summerizer.ts'
import SummeriseIt from '../../utils/summerizer/summerizer.ts';

const RecordAudio = () => {
  const [transcript, setTranscript] = useState('');
  const [recording, setRecording] = useState(false)
  const [summarized, setSummarized] = useState('Nothing has been summerized')
  const [showSummery, setShowSummery] = useState(false)
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    console.log('start recording useEffect')
    if (recording) {
      StartRecording(setTranscript)
    }
  }, [recording]);

  return (
    <div className={styles.body}>
    <div className={styles.btns}>
      <StopBtn setRecording={setRecording} mediaRecorder={null} />
      <TranscribeBtn setRecording={setRecording}/>
      {/* <OpenAIComponent setSummarized={setSummarized} summarized={summarized} response={response} setResponse={setResponse}/> */}
      <button onClick={() => SummeriseIt(transcript, setSummarized, setShowSummery)}>Summerize Content</button>
      {showSummery ? <button onClick={() => setShowSummery(false)}>Hide Summery</button> : <button onClick={() => setShowSummery(true)}>Show Summery</button>}
    </div>
    <h2>Live 'Record Audio' Transcript</h2>
    <div className={styles.container}>
      <p className={styles.transcription}>{transcript}</p>
      {showSummery ? <SummarizedText response={summarized} /> : <></>}
    </div>
    </div>
  );
};

export default RecordAudio;
