import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {

  const [mode,setmode]=useState("light")
  // const [Gmode,gSetmode]=useState("green")
  const [alert,setAlert]=useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
//   let toggleGreenMode=()=>{
//     if(mode==='light'|| mode==='dark'){
//       gSetmode("#2ccc82")
//       document.body.style.backgroundColor ="#2ccc82"
//       showAlert("Greenmode as been enabled","success")
//     }
//     else{
//       gSetmode("light")
//       document.body.style.backgroundColor ="White"
//       showAlert("lightmode as been enabled","success")
//   }
// }
  let toggleMode =()=>
  {
    if(mode==='light'){
      setmode("dark")
      document.body.style.backgroundColor ="#042743"
      showAlert("Darkmode as been enabled","success")
      
    }
    else{
      setmode("light")
      document.body.style.backgroundColor ="White"
      showAlert("lightmode as been enabled","success")
    }
  }
  return (
    <Router>
    <div className="App">
      
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
      <Alerts alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<About />}/>  
          <Route exact path="/" element={
          <div className='container'>
              <TextForm showAlert={showAlert} mode={mode} heading ="Enter text for analysis"/>
          </div>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
