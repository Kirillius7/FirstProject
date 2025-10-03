
import React, {useState} from 'react'

function ListCars(){
    const[cars, setCar] = useState([])
    const[carYear, setYear] = useState(new Date().getFullYear())
    const[carMake, setMake] = useState("")
    const[carModel, setModel] = useState("")

    function handleYearCar(event){
        setYear(event.target.value)
    }
    function handleMakeCar(event){
        setMake(event.target.value)
    }
    function handleModelCar(event){
        setModel(event.target.value)
    }

    function addCar(){
        const newCar = {year: carYear, make: carMake, model: carModel}

        setCar(c => ([...c, newCar]))

        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    }
    function removeCar(index){
        setCar(c => (c.filter((_, i) => i !== index)))
    }
    return(
        <div>
            <h2>List of cars</h2>
            <ul>
                {cars.map((car, index) => <li key = {index} onClick={() => removeCar(index)}>{car.make} {car.model} {car.year}</li>)}
            </ul>
            <input type='text' value = {carMake} onChange={handleMakeCar} placeholder='Write your make'></input><br/>
            <input type='text' value = {carModel} onChange={handleModelCar} placeholder='Write your model'></input><br/>
            <input type='number' value = {carYear} onChange={handleYearCar} ></input><br/>
            <button onClick={addCar}>Add a car</button>
        </div>
    )
}

export default ListCars