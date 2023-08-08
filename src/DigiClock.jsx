import React, { useState } from "react";

const DigiClock = () => {
    const [cTime, uTime] = useState(new Date().toLocaleTimeString())

    const upTime = () => {
        uTime(new Date().toLocaleTimeString())

    }
    setInterval(upTime, 1000)


    return (
        <>
            <div className="box">
                <h2 style={{ color: "white" }}>Digital Clock</h2>
                <h1 style={{fontWeight:"bold", fontSize: "50px"}}>{cTime}</h1>
            </div>

        </>
    );
}
export default DigiClock;
