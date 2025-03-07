import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

function App() {

let [but, setbut] = useState(true)

  return (

    <div className="App">
      <button onClick={()=>{
        setbut(!but)
      }} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
 { (but) ? 'Hide' : 'Show'}
</button>

    </div>
  );
}

export default App;
