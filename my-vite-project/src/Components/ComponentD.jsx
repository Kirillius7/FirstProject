import React, {useState, useContext} from 'react'
import { nameContext } from './ComponentA'
function ComponentD(){
    
    const user = useContext(nameContext)
    return(
        <div className='box'>
            <h2>ComponentD</h2>
            <p>{`Hello ${user}`}</p>
        </div>
    )
}

export default ComponentD