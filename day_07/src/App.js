import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import moduleBtn from "./Button.module.css";
import MenuSt from "./Menu.module.css";

function App() {
  let [passW, setpassW] = useState(true);
  let [small, setSmall] = useState(true);
  let [mode, setModel] = useState(true);
  let [overlay, setOverlay] = useState(true);

  return (
    <div className="App">
      <div
        onClick={() => {
          setOverlay(false);
          setModel(false);
        }}
        className={overlay ? moduleBtn.OverLay : moduleBtn.HideOverLay}
      ></div>
      <div className={mode ? moduleBtn.Model : moduleBtn.HideModel}>
        <h4>Enquiry registration??</h4>
        <button
          onClick={() => {
            setModel(!mode);
            setOverlay(!overlay);
          }}
        >
          x
        </button>
      </div>
      <button className={moduleBtn.error}>ErroButton</button>
      <button className={moduleBtn.fixed}>FixedButton</button>
      <br />
      <button onClick={() => setSmall(!small)} className={moduleBtn.fixed}>
        {small ? <span>&#9776;</span> : <span> &#10006; </span>}{" "}
      </button>
      <button className={moduleBtn.fixed}>Enquiry</button>
      <input type={passW ? "password" : "text"} className={moduleBtn.fixed} />
      <button
        onClick={() => {
          setpassW(!passW);
        }}
        className={moduleBtn.fixed}
      >
        {!passW ? "Hide" : "Show"}
      </button>
      <div className={MenuSt.activeMenu}>
        <ul className={`${MenuSt.Menu} ${small ? "" : MenuSt.activeMenu}`}>
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
