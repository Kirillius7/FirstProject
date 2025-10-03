
import React, {useState} from "react"

function NewComponent(){
    const[name, setName] = useState("Guest")
    function handleNameChange(event){
        setName(event.target.value)
    }
    const[payment, setPayment] = useState("")
    function handlePaymentWay(event){
        setPayment(event.target.value)
    }

    const[shipping, setShippingMethod] = useState("")
    function handleShippingMethod(event){
        setShippingMethod(event.target.value)
    }

    return(
        <div>
            <input value = {name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <select value = {payment} onChange={handlePaymentWay}>
                <option value = "default">Set a payment type</option>
                <option value = "Visa">Visa</option>
                <option value = "Mastercard">Mastercard</option>

            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type = "radio" value = "Pick Up" checked = {shipping === "Pick Up"}
                onChange={handleShippingMethod}/>Pick Up</label><br/>
            <label><input value = "Delivery" onChange={handleShippingMethod} 
                type = "radio" checked = {shipping === "Delivery"}/>Delivery</label>
            <p>Shipping: {shipping}</p>
        </div>


    )
}

export default NewComponent