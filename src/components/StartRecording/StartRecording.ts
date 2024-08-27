export default async function startRecording(transcript: string, setTranscript: React.Dispatch<React.SetStateAction<string>>) {
  
  let mediaRecorder: MediaRecorder | null = null;
  let socket: WebSocket | null = null;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorder = new MediaRecorder(stream);

    socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
      'token', '7a022fdecfba5b581d63987b434ba69318699182'
    ]);

    // Set up the stop button listener as soon as the function runs
    const stopBtn = document.querySelector('.stopBtn');
    if (stopBtn) {
      stopBtn.addEventListener('click', () => {
        console.log('Stop button clicked.');
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
          console.log('Recording stopped.');
        }
        // if (socket && socket.readyState === WebSocket.OPEN) {
        //   socket.close();
        //   console.log('WebSocket closed.');
        // }
      });
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
