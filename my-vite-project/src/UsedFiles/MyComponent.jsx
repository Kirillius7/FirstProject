import React, {useState} from "react"
function MyComponent(){

    const [name, setName] = useState("Inkognito"); // also provides using objects
    // const [car, setCar] = useState({year: 2024, model: "ford", model: "edge"}) -> <p>car.year</p>
    // setCar(car => ({...car, year: event.target.value}))
    const updateName = () =>{
        setName("Patrick")
    }
    const[age, setAge] = useState(1);
    const updateAge = () => {
        setAge(age + 1)
    }

    const[isEmployed, setEmploymentStatus] = useState(false);
    const updateEmploymentStatus = () => {
        setEmploymentStatus(!isEmployed)
    }
    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set name</button>
                <p>Age: {age}</p>
                <button onClick={updateAge}>Set name</button>
                <p>Is employed?: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={updateEmploymentStatus}>Set name</button>
            </div>)
}

export default MyComponent