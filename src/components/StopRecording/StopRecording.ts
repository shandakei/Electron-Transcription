export default async function stopRecording(
  transcript: string,
  setTranscript: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    // Assuming you are stopping the recording process by closing the media stream
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach((track) => track.stop()); // Stops the recording

    const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
      'token',
      '7a022fdecfba5b581d63987b434ba69318699182',
    ]);

    socket.onmessage = (message: MessageEvent) => {
      const received = JSON.parse(message.data);
      const incoming = received.channel.alternatives[0].transcript;
      if (incoming && incoming.trim() && received.is_final) {
        setTranscript((prev: string) => `${prev} ${incoming}`.trim());
      }
      console.log(transcript);
    };

    socket.onclose = () => {
      console.log({ event: 'onclose' });
    };

    socket.onerror = (error: Event) => {
      console.log({ event: 'onerror', error });
    };

    // Stop the WebSocket when recording ends
    socket.close();
  } catch (error) {
    console.error('Error stopping recording:', error);
  }
}
