
import { stopRecording } from '/home/shandakei/GAH/Electron-Transcription/src/components/StartRecording/StartRecording.ts';
import styles from './StopBtn.module.css';

export default function StopBtn({ setRecording }: { setRecording: React.Dispatch<React.SetStateAction<boolean>> }) {
  function handleStop() {
    console.log('... attempting to stop recording');
    stopRecording(); // Call the stop function
    setRecording(false);
  }

  return (
    <button className={styles.stopBtn} onClick={handleStop}>
      STOP
    </button>
  );
}

// interface StopBtnProps {
//   setRecording: (value: boolean) => void;
// }

// export default function StopBtn({ setRecording }: StopBtnProps) {
//     function handleStop() {
//         console.log('..attempted stop')
//         setRecording(false)
//     }
//     return (
//       <button className={styles.stopBtn} onClick={handleStop}>STOP</button>
//     )
// }

// import styles from './StopBtn.module.css';

// interface StopBtnProps {
//   setRecording: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export default function StopBtn({ setRecording }: StopBtnProps) {
//   function handleStop() {
//     console.log('..attempted stop');
//     setRecording(false);
//   }

//   return (
//     <button className={styles.stopBtn} onClick={handleStop}>
//       STOP
//     </button>
//   );
// }
