import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import TextUtils from './component/TextUtils';
import Alert from './component/Alert';
import { useState } from 'react';
import About from './component/About';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {
  const [alert, setalert] = useState(null);
  const showAlert=(msg,type)=>{
    setalert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <>
    <Navbar/>
    <div>
    <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextUtils showAlert={showAlert} header="Enter your Text"/>}/>
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
