import logo from './logo.svg';
import './App.css';
import About from './About';


function App() {
  let student = {
    name:"rahul_kumar",
    branch:"cse",
    subject:"computer_science"
  } 
  return (
    <div>
      <About email="rahulkumar@gmail.com" address="kiran nagar bhopal madhya pradesh india" college={student} abc="hello abc charactor" />
    </div>
  );
}

export default App;
