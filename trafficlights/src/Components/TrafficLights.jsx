import React, {useEffect,useRef} from "react";
import './index.css';
function TrafficLights() {
    const red=useRef(0);
    const yellow=useRef(0);
    const green=useRef(0);

    useEffect(()=>{

    },[]);

    const redLight=()=>{
        red.current.style.backgroundColor="red";
        setTimeout(()=>{
            red.current.style.backgroundColor="White";
            greenLight();
        },4000)
    };

    const greenLight=()=>{
        green.current.style.backgroundColor="green";
        setTimeout(()=>{
            green.current.style.backgroundColor="white";
            yellowLight();
        },3000)
    };

    const yellowLight=()=>{
        yellow.current.style.backgroundColor="yellow";
        setTimeout(()=>{
            yellow.current.style.backgroundColor="white";
            redLight();
        },500)
    }
  return (
    <div className="lightWrapper">
        <div className="light" ref={green}></div>
        <div className="light" ref={red}></div>
        <div className="light" ref={yellow}></div>
    </div>
  )
}

export default TrafficLights