import React, {useState} from 'react'
import ComponentD from './ComponentD'

function ComponentC(){
    return(
        <div className='box'>
            <h2>ComponentC</h2>
            <ComponentD></ComponentD>                    
        </div>
    )
}

export default ComponentC