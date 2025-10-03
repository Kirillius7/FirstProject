
import React, {useState, useEffect} from "react"

function Effect(){

    const[width, setWidth] = useState(window.innerWidth)
    const[height, setHeight] = useState(window.innerHeight)

    

    /*useEffect(() => {
        document.title = `Number: ${nmbr}`
    })  ,[] - when element mounts, ,[nmbr, color] -> runs on mount + when value changes */
    
    useEffect(() => {
        window.addEventListener("resize", handleSizeWindow);
        console.log("WindowListener is activated")

        return(() =>{
            window.removeEventListener("resize", handleSizeWindow)
            console.log("WindowListener is deactivated")
        })
    }, [])

    useEffect(() =>{
        document.title = `Size is ${width} x ${height}`
    }, [width, height])

    function handleSizeWindow(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }


    return(
        <div>
            <p>width: {width}</p>
            <p>height: {height}</p>
        </div>
    )
}

export default Effect