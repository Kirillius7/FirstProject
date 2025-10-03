import React, {useState, createContext} from 'react'
import ComponentB from './ComponentB'

export const nameContext = createContext()
function ComponentA(){
    
    const[name, setName] = useState("Kyrylo")

    return(
        <div className='box'>
            <h2>ComponentA</h2>
            <p>{`Hello ${name}`}</p>
            <nameContext.Provider value = {name}>
                <ComponentB></ComponentB>
            </nameContext.Provider>
        </div>
    )
}

export default ComponentA