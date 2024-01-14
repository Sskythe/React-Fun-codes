import React, { useEffect, useState } from 'react'
import './TL.css'


type displayLight = "red" | "yellow" | "green"
const TrafficLights = () => {
    const  [ current, setCurrent] = useState<displayLight>("red")

    const getLight =  (light : displayLight)=>{
        return `light ${light}` + (current === light ? " on" :"")
    }

 

    useEffect(() => {
       if (current === "red"){
        setTimeout(()=>setCurrent("yellow"), 3000)
       }
       else if (current === "yellow"){
        setTimeout(()=>setCurrent("green"), 3000)
       }
       else{
        setTimeout(()=>setCurrent("red"), 3000)
       }
    }, [current])

    return (
        <div className='main'>
            <div className={getLight("red")}></div>
            <div className={getLight("yellow")}></div>
            <div className={getLight("green")}></div>

        </div>
    )
}

export default TrafficLights