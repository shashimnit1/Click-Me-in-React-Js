import React from "react";
import ChangeBG from "./ChangeBG";
import ClickCount from "./ClickCount"
import ClickDate from "./ClickDate"
import DigiClock from "./DigiClock";


const App = () => {

    const OuterBox = {
        width: "100vw",
        height: "fit - content",
        padding: "5pt",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        lineHeight: "2",
        gap: "5px",
        //   backgroundColor: "rgb(203, 195, 227)"
        //border: "2pt solid Black",

    };
    return (
        <>
            <div style={OuterBox}>
                <ClickCount />

                <ClickDate />
                <DigiClock />
                <ChangeBG />
                <ChangeBG />

            </div>
        </>
    );
}
export default App;