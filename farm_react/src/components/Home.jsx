import React, { useState } from "react";
import MyInput from "./MyInput";
import { LocalStore } from "./LocalStore";
import Textaxiospost from "./Textaxiospost";

// import About from "./About";

export default function Home()
// {
//     return (
//         <div style={{ backgroundColor: "white" }}>
//             <h1>Home</h1>
//             <hr />
//             <About />
//             <br />
//             <hr />
//         </div>
//     );
// }

//export default Home;


{
    //stateless
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    function add() {
        setC(Number(a) + Number(b));
    }
    function sub() {
        setC(Number(a) - Number(b));
    }
    function divi() {
        setC(Number(a) / Number(b));
    }
    function mul() {
        setC(Number(a) * Number(b));
    }

    return (
        <>
            <div style={{ backgroundColor: "white" }}>
                <h1>Home - demo</h1>
                <p>Functional component - stateless</p>
                <input
                    value={a}
                    onChange={e => setA(e.target.value)}
                />
                <br />
                <br />
                <input
                    value={b}
                    onChange={e => setB(e.target.value)}
                />
                <br />
                <br />
                <button onClick={add}>add</button>&nbsp;
                <button onClick={sub}>sub</button>&nbsp;
                <button onClick={divi}>divi</button>&nbsp;
                <button onClick={mul}>mul</button>
                <br />
                <h3>Total : {a} + {b} = {c}</h3>
                <hr />
                <MyInput />
                <br />
                <hr />
                <LocalStore />
                <hr />
                <Textaxiospost />
                <br />
                <hr />
            </div>
        </>
    )
}