import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import TextUtils from './component/TextUtils';
import Alert from './component/Alert';
import { useState } from 'react';

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
    <TextUtils showAlert={showAlert} header="Enter your Text"/>
    </div>
    </>
  );
}

export default App;
