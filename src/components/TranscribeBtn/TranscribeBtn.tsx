import styles from './TranscribeBtn.module.css'

export default function TranscribeBtn({setRecording}) {
    function handleTranscription() {
        console.log('... attempting transcription')
        setRecording(true)
    }
    return (
        <button className={styles.transcriptionBtn} onClick={handleTranscription}>Start Transcription</button>
    )
}