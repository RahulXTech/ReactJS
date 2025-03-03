import logo from './logo.svg';
import './App.css';

function App() {
  let num = ["Rahul","Mohit","Sumit","Chandu"];
  return (
    <div className="App">
      {num.map((names)=>{
        return(
          <h1>{names}</h1>
        )
      })}
    </div>
  );
}

export default App;
