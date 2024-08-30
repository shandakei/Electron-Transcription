import stopRecording from "../StopRecording/StopRecording";

export default async function startRecording(setTranscript: React.Dispatch<React.SetStateAction<string>>) {


  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    let mediaRecorder = new MediaRecorder(stream);

    let socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
      'token', import.meta.env.VITE_DG_API_KEY
    ]);

    // Set up the stop button listener as soon as the function runs
    const stopBtn = document.querySelector('.stopBtn');
    if (stopBtn) {
      stopRecording(stopBtn, mediaRecorder)
    }

    socket.onopen = () => {
      mediaRecorder.addEventListener('dataavailable', event => {
        if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
          socket.send(event.data);
        }
      });

      mediaRecorder.start(2000);
    };

    socket.onmessage = (message) => {
      const received = JSON.parse(message.data);
      const incoming = received.channel.alternatives[0].transcript;
      if (incoming && incoming.trim() && received.is_final) {
        setTranscript((prev: string) => `${prev} ${incoming}`.trim());
      }
      console.log(incoming);
    };

    socket.onclose = () => {
      console.log({ event: 'onclose' });
    };

    socket.onerror = (error) => {
      console.log({ event: 'onerror', error });
    };
    
  } catch (error) {
    console.error('Error accessing media devices.', error);
  }

  return;
};
