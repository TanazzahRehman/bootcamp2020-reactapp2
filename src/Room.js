import React, {useState} from 'react';
import './Room.css';

//console.log("state=" ,state);

function Room() {
    const [islit, setlit] = useState(false);
    let [age, setage] = useState(1);

    function update(){
        console.log("Button clicked");
        setlit(!islit);
    }

    const incrementor = () => {
        console.log("increase age ");
        setage(++age);
     }
    
  return (
      
    <div className={"room " +(islit?"lit":"dark")} >
      this room is {islit ? "lit": "dark"}
   
       <br /> 
       <button onClick = {update} > Toggle light </button>
       <br />
       Age : {age} 
       <br />
       <button onClick = { () =>
        {
        console.log("increase age");
        setage(++age);
       }}>
            increment age </button>
    </div>
  );
}

export default Room;