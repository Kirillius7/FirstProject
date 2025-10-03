
import React, {useState} from 'react'

function ToDoList(){
    const[tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const[newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addNewTask(){
        setTasks(t => ([...t, newTask]))
        setNewTask("")
    }

    function removeTask(index){
        setTasks(tasks.filter((_, i) => i !== index))
    }
    
    function moveTaskUp(index){
        setTasks(prevTasks => {
            if(index > 0){
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
                return updatedTasks;
            }
            return prevTasks;
        });
    }

    function moveTaskDown(index){
        setTasks(prevTasks => {
            if(index < prevTasks.length - 1){
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
                return updatedTasks;
            }
            return prevTasks;
        });
    }

    return(
        <div className = "to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type = "text" value = {newTask} placeholder='enter a task...' onChange={handleInputChange}/>
                <button className = "add-button" onClick = {addNewTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key = {index}>
                        <span>{task}</span>
                        <button onClick = {() => removeTask(index)}>Delete</button>
                        <button onClick = {() => moveTaskUp(index)}>Up</button>
                        <button onClick = {() => moveTaskDown(index)}>Down</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoList