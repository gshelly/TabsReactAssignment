import './App.css';
import { useState } from 'react';
import Tabs from './Components/Tabs';
import Results from './Components/Results';

function App() {
  const tabsArray = [
    { label: "Tab1", content: " This is Tab1 Content" },
    { label: "Tab2", content: " This is Tab2 Content" },
    { label: "Tab3", content: " This is Tab3 Content" },
    { label: "Tab4", content: " This is Tab4 Content" }
  ]
  const [result, setResult] = useState(tabsArray[0].content)

  return (
    <div className="App">
      <Tabs tabsArray={tabsArray} setResult={setResult} />
      <Results result={result} />
    </div>
  );
}

export default App;
