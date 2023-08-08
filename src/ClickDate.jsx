import React, { useState } from "react";
import "./ClickCount.css"

const ClickDate = () => {
    const [curTime, get] = useState(new Date().toLocaleTimeString())
    const date = new Date();

    const getTime = () => {
        
        let x = new Date().toLocaleTimeString()
        get(x);
    }

    return (
        <>
            <div className="box">
                <h2 style={{color:"white"}}>Current Time</h2>
                <h1>{curTime}</h1>
                <button className="button70" onClick={getTime} > Get Current Time</button>

            </div>
        </>
    );

}

export default ClickDate;