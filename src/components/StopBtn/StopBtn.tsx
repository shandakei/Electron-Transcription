import styles from './StopBtn.module.css'
export default function stopBtn({setRecording}) {
    function handleStop() {
        console.log('..attempted stop')
        setRecording(false)
    }
    return (
      <button className={styles.stopBtn} onClick={handleStop}>STOP</button>
    )
}