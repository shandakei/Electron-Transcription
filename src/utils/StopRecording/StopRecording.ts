

export default async function stopRecording(stopBtn: any, mediaRecorder: any) {
  stopBtn.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      console.log('Recording stopped.');
    }
  });
}
