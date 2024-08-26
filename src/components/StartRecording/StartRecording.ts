let mediaRecorder: MediaRecorder | null = null;
let socket: WebSocket | null = null;

export default async function startRecording(transcript: string, setTranscript: React.Dispatch<React.SetStateAction<string>>) {
  

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // console.log({ stream });

      const mediaRecorder = new MediaRecorder(stream);

      const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
        'token', '7a022fdecfba5b581d63987b434ba69318699182'
      ]);

      socket.onopen = () => {
        // console.log({ event: 'onopen' });

        mediaRecorder.addEventListener('dataavailable', event => {
          if (event.data.size > 0 && socket.readyState === 1) {
            socket.send(event.data);
            // setInterval(() => socket.send(event.data), 3000);

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
        // console.log(received);
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

    return
  };

  
  export function stopRecording() {
    if (mediaRecorder) {
      mediaRecorder.stop();
      console.log('Recording stopped.');
    }
    if (socket) {
      socket.close();
      console.log('WebSocket closed.');
    }
  }
