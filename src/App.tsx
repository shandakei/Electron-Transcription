import './App.css'
import RecAudio from './components/RecordAudio/recordAudio'; 
import SummarizeBtn from './components/summarizeBtn/summarizeBtn';
// import RemoteAudio from './utils/RemoteAudio/remoteAudio';
import OpenAIComponent from './utils/summerizer/playground.tsx'


function App() {
  console.log('hello world');

  return (
    <>
    
    <div className="container">
      <RecAudio />
      <SummarizeBtn />
    </div>
    <div>
    <OpenAIComponent />
    </div>

    </>
  )
}

export default App
