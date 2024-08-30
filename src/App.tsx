// import { useState } from 'react';
import './App.css';
import RecAudio from './components/RecordAudio/recordAudio';
// import SummarizeBtn from './components/summarizeBtn/summarizeBtn';
// import { summarizeText } from './utils/summerizer/summerizer';

function App() {
  // Initialize summary state
  // const [summary, setSummary] = useState('');

  // // Function to handle summarization
  // async function handleSummarize() {
  //   const text = "once a on a time there were three little pigs all lived in a house and i forgot the actual beginning of the story...";
  //   const summary = await summarizeText(text);
  //   setSummary(summary);
  // }

  return (
    <>
      <div className="container">
        <RecAudio />
        {/* <SummarizeBtn /> */}
      </div>
      <div>
        {/* <button onClick={handleSummarize}>Test</button> */}
        {/* <p>{summary}</p> */}
      </div>
    </>
  );
}

export default App;
