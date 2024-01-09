import React, { useEffect, useState } from 'react'
import './ColorGuesser.css'


const ColorGuesser = () => {
    const [colour, setcolour] = useState("")
    const [buttons, setButtons] = useState([])
    const [result, setResult] = useState(undefined)

    const getColour = () =>{
        const temp = getRandomColour()
        setcolour(temp)
        setButtons([temp, getRandomColour(), getRandomColour()].sort(
            () => 0.5 - Math.random()
        ))
    }
    const getRandomColour = () => {
        const list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        const res = new Array(6)
            .fill("")
            .map((val) => list[Math.floor(Math.random() * list.length)])
            .join("")

        return `#${res}`

    }

    useEffect(() => {
        getColour()


    }, [])
    const checkGuess = (guess) => {
        if (colour === guess){
            getColour()
            setResult(true)
        }
        else{
            setResult(false)
        }
    }

    return (

        <div className='block'>
            <div className='middle' style={{ backgroundColor: colour }}></div>
            <div className='btns'>
                {
                    buttons.map((val, idx) => (
                        <div key={idx}> <button onClick={()=>checkGuess(val)}>{val}</button>
                        </div>
                    ))
                }

            </div>
            {result ? 'correct guess':'Incorrect guess' }
        </div>
    )
}

export default ColorGuesser