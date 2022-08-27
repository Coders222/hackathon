
import { useState } from 'react';
import Landing from './Landing';
import Main from './Main';
import './App.css';

function App() {
  console.log("orion is no longer here");
  const [data, setData] = useState(false);
  const d = {togglePage :() => (setData(true))}
  return (
    <div className="App">
      {data ? <Main/>:<Landing data = {d}/>}
    </div>
  );
}

export default App;
