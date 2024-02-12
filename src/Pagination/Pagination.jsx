import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products")
        const res = await response.json();

        setData(res.products)

    }

    const selectedPage = (idx) =>{
        if (idx > 0 && idx < data.length/10){
            setPage(idx)
            console.log(idx)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div style={{ marginLeft: '100px' }}>
        
           <div>
           {
                data.slice((page*10) -10, page*10).map((val, idx) => {
                    return <div key={val.id}>
                            {val.id} ---
                            {val.title}
                    </div>
                })
            }
           </div>

           <div>
           {
                data.length > 0 && (
                    <div style ={{ cursor:"pointer"}}>
                        <span onClick={()=>{selectedPage(page - 1)}}> ← </span>
                        {
                            [...Array(data.length/10)].map((_,i)=>{
                                return <span key={i} onClick={()=>{selectedPage(i+1)}}>{i+1}</span>
                            })
                        }
                        <span onClick={()=>{selectedPage(page + 1)}}> → </span>
                    </div>
                )
            }
           </div>
        </div>
    )
}

export default Pagination