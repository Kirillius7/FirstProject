import React, {useState} from "react"

function Counter(){

    const[number, setNumber] = useState(0)
    const incrementNumber = () =>{
        setNumber(number + 1)
        // a better practise to use setNumber(c => c + 1) -> in case we need to add more than once
        // setNumber(c => c + 1)
        // setNumber(c => c + 1) -> 2, w/o => -> 1
    }
    const decrementNumber = () =>{
        setNumber(number - 1)
    }
    const resetNumber = () =>{
        setNumber(0)
    }
    return(
        <div className = "div-class">
            <p className="p-class">Counter tool</p>
            <p className="p-class">Number: {number}</p>
            <button className = "btn-class" onClick={incrementNumber}>incrementNumber</button>
            <button className = "btn-class" onClick={decrementNumber}>decrementNumber</button>
            <button className = "btn-class" onClick={resetNumber}>resetNumber</button>
        </div>
    )

}

export default Counter