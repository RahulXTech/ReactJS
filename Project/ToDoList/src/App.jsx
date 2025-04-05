import "./App.css";
import { useState, useEffect } from "react";
function App() {
  let [inputvalues, setInputvalues] = useState([]);
  let [add, setAdd] = useState(null);
  
  const inputChange = (e)=>{
    let toname = setInputvalues(e.target.value);
    if(!inputvalues.include(toname)){
        let finalList = [...todolist, toname]
    }
    else{ 
    alert("Eror dublicate entry");
    console.log(e.target.value);
    }
  };
  
  let printingss = () => {
    console.log("button is working");
    console.log(inputvalues)
    setAdd();
  };
  let TodoItems = [
    { item: "Buy milk", date: "31/03/2025" },
    { item: "Goto library", date: "31/03/2025" },
  ];

  return (
    <>
      <center>
        <h1 className="">TODO Application</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col-4">
              <input type="text" placeholder="Enter massage"
               onChange={inputChange}/>
            </div>
            <div className="col-6">
              <input type="date" width="2vw" />
            </div>
            <div className="col-1">
              <button
                onClick={()=>{
                  printingss();}}
                type="button"
                className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </div>
        <ul className="container text-center">
          <li className="row">

            <div className="col-4">
              {inputvalues}
            </div>
            <div className="col-6">04/10/2025</div>
            <div className="col-1">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </center>
    </>
  );
}
export default App;
