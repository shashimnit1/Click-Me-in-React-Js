import React, { useState } from "react";
import "./ClickCount.css"




const ClickCount = () => {

  const [count, setcount] = useState(0);
  const counting = () => {
    setcount(count + 1);

  }
  const reset = () => {
    setcount(0);
  }
  return (
    <>
      <div className="box">
        <h1>{count}</h1>
        <div>
          <button className="button70" onClick={counting}> Click Me</button>
          <button className="button70" onClick={reset}> Reset</button>
        </div>
      </div>

    </>
  );
}

export default ClickCount;