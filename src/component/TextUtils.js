import React, { useState } from 'react'

function TextUtils(props) {
  const handleClick=()=>{
    console.log("Clicked on capital button");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case","success")
  }
  const handleClickTOLowerCase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Case","success")
  }
  const handleClickToClearText=()=>{
    setText("");
    props.showAlert("Text Cleared","success")
  }
  const handleClickToTitleCase=()=>{
    let newText=text.charAt(0).toUpperCase()+text.substring(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted To Title Case","success")
  }
  const handleOnChange =(event)=>{

    setText(event.target.value);

  }
  const[text,setText]=useState("");
  const[myStyle,setStyle]=useState({
    color:"black",
    backgroundColor:"white"
  })
  const[getButton,setButton]=useState("Enable Dark Mode");
  const toogleStyle=()=>{
    if(myStyle.color=='black'){
      setStyle({
        color:"white",
        backgroundColor:"black"
      })
      setButton("Enable light Mode")
      props.showAlert("Dark Mode Enabled","success")
    }
    else{
      setStyle({
        color:"black",
        backgroundColor:"white"
      })
      setButton("Enable Dark Mode")
      props.showAlert("Light Mode Enabled","success")
    }
  }
  return (
  <>
  <div style={myStyle}>
  <div className="mb-3" >
    <h1>{props.header}</h1>
    <textarea style={myStyle}className='form-control' onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
  </div>
  <button onClick={handleClick} className="btn btn-primary mx-2">Captailaize</button>
  <button onClick={handleClickTOLowerCase} className="btn btn-primary mx-2">LowerCase</button>
  <button onClick={handleClickToClearText} className="btn btn-primary mx-2">ClearText</button>
  <button onClick={handleClickToTitleCase} className="btn btn-primary mx-2">TitleCase</button>
  <button onClick={toogleStyle} className="btn btn-primary mx-2">{getButton}</button>
  <div>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").filter(elm => elm!=='').length}words and {text.trim().length} character</p>
    <p>{0.008*text.split(" ").filter(elm => elm!=='').length} minutes to read</p>
    <h3>Preview</h3>
    
    <p>{text}</p>
    </div>
    </div>
  </>
  )
}

export default TextUtils