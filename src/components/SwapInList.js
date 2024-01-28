import React, { useState } from 'react'

const SwapInList = () => {
    const [list1, setList1] = useState([
        { title: "item 1", checked: false },
        { title: "item 2", checked: false },
        { title: "item 3", checked: false },
    ])

    const [list2, setList2] = useState([
        { title: "item A", checked: false },
        { title: "item B", checked: false },
        { title: "item C", checked: false },
    ])

    const handleCheck=(idx) =>{
        const curr = [...list1]
        curr[idx].checked = !curr[idx].checked
        setList1(curr)

    }
    const handleSwap =() =>{
        const newlist1 = [...list1]
        const newlist2 = [...list2]
        newlist1.forEach((val,idx) =>{
            if (val.checked){
                
                const temp = val
                newlist1[idx] = newlist2[idx]
                newlist2[idx] = temp
            }
            newlist1[idx].checked = false
        })

        setList1(newlist1)
        setList2(newlist2)

    }
    return (
        <div>
            <div>
                List1
                <ul>
                    {

                        list1.map((val, idx) =>
                            <div key={idx}>
                                <input type='checkbox' checked={val.checked} onChange={()=>handleCheck(idx)}/>
                                {val.title}
                            </div>
                        )
                    }
                </ul>
            </div>
            <div>
                List2
                <ul>
                    {
                        list2.map((val, idx) =>
                            <div key={idx}> {val.title}</div>
                        )
                    }
                </ul>
            </div>
            <button onClick={handleSwap}>swap</button>
        </div>
    )
}

export default SwapInList