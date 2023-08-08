import React, { useState } from "react";
import "./ClickCount.css"
const ChangeBG = () => {

    const[color,setColor]=useState("#b3d1e5")
        const changePurple =()=>{
        
        setColor("purple");
    }
    const changeRed =()=>{
        
        setColor("red");
    }
    const changeGreen =()=>{
        
        setColor("green");
    }
    const changeBlue =()=>{
        
        setColor("blue");
    }
    const changeYellow =()=>{
        
        setColor("yellow");
    }




    return (
        <>
            <div className="box" style={{backgroundColor:color}}>
                <h3 style={{ color: "Black" }}>Background Color</h3>
                <div>
                    <button onClick={changePurple}style={{backgroundColor:"purple"}}> Purple</button>
                    <button onClick={changeRed} style={{backgroundColor:"red"}}> Red</button>
                    <button onClick={changeGreen} style={{backgroundColor:"green"}}> Green</button>
                    <button onClick={changeBlue} style={{backgroundColor:"blue"}}> Blue</button>
                    <button onClick={changeYellow}style={{backgroundColor:"yellow"}}> Yellow</button>
                </div>
            </div>


        </>
    );
}
export default ChangeBG;