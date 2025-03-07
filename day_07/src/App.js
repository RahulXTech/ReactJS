import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import moduleBtn from './Button.module.css'
import MenuSt from './Menu.module.css'


function App() {
  let [passW, setpassW] = useState(true)
  let [small, setSmall] = useState(true)

  return (
    <div className="App">
      <button className={moduleBtn.error}>ErroButton</button>
      <button className={moduleBtn.fixed}>FixedButton</button>
      <br/>
      <button onClick={()=>setSmall(!small)} className={moduleBtn.fixed}>{small ? <span>&#9776;</span> : <span> &#10006; </span> } </button>
      <input type={(passW) ? 'password' : 'text'} className={moduleBtn.fixed}/><button onClick={()=>{setpassW(!passW)}} className={moduleBtn.fixed}>{(!passW) ? 'Hide' : 'Show'}</button>
      <div className={MenuSt.activeMenu}>
        <ul className={`${MenuSt.Menu} ${small ? '' : MenuSt.activeMenu}`}>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Help</li>
          </ul>
      </div>
    </div>
  );
}

export default App;
