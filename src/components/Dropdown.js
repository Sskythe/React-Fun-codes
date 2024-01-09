import React, { useState } from 'react'

const data = [
    {
        cname: "India",
        cities: ['mumbai', 'blr', 'pune']
    },
    {
        cname: "USA",
        cities: ['NY', 'SF', 'CAL']
    },
    {
        cname: "UK",
        cities: ['London', 'YS', 'SH']
    },
]


const Dropdown = () => {

    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    return (
        <div>
            <div>
                <h3> choose the conuntries</h3>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    {data.map((val, idx) => {
                        return <option >{val.cname}</option>
                    })}
                </select>
            </div>
            {country}
            <div>
                {country && <div><h3> choose the cities of {country}</h3>
                    <select >
                        {data.find((val) => val.cname === country).cities.map((val, idx) => {
                            return <option  >{val}</option>
                        })}
                    </select></div>}

            </div>
        </div>
    )
}

export default Dropdown