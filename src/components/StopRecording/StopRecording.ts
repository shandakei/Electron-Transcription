export default async function startRecording(transcript, setTranscript) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // console.log({ stream });

      const socket = new WebSocket('wss://api.deepgram.com/v1/listen', [
        'token', '7a022fdecfba5b581d63987b434ba69318699182'
      ]);

       socket.onmessage = (message) => {
        const received = JSON.parse(message.data);
        const incoming = received.channel.alternatives[0].transcript;
        if (incoming && incoming.trim() && received.is_final) {
          setTranscript((prev) => `${prev} ${incoming}`.trim());
        }
        // console.log(received);
        console.log(transcript);
      };

      socket.onclose = () => {
        console.log({ event: 'onclose' });
      };

      socket.onerror = (error) => {
        console.log({ event: 'onerror', error });
      };
  };