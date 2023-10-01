import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [textColor,setTextColor]=useState(red);
  function toggleButton(e){
    const newColor=textColor===red ?blue: red;
    setTextColor(newColor);
  }
  // constructor
  const 
//code here 
  return (
    <div id="main">
      <p className={ma} >Newton School</p>
      <button id='button' onClick={toggleButton}>Change Style</button>
    </div>
  )
}


export default App;
