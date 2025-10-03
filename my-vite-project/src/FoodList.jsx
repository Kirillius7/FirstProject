
import React, {useState} from 'react'

function FoodList(){
    const[food, setFoods] = useState(["Apple", "Banana", "Coconut"])
    
    function handleFood(){
        const newFood = document.getElementById("food-name").value;
        setFoods(f => ([...food, newFood]))
        document.getElementById("food-name").value = "";
    }

    function handleRemoveFood(index){
        setFoods(f => (food.filter((_, i) => i !== index)));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>{food.map((foodItem, index) => <li key = {index} onClick={() => handleRemoveFood(index)}>{foodItem}</li>)}</ul>
            <input type = "text" id ="food-name" placeholder='Write your food'></input>
            <button onClick={handleFood}>Add</button>
        </div>
    )
}

export default FoodList