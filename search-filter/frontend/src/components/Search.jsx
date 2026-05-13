import React, { useState } from 'react'
import {Data} from '../components/Data.js'
function Search() {
    const [store, setStore] = useState(Data);
    const [data, setData] = useState("");

    const getData = (e)=>{
        console.log(e.target.value);
        setData(e.target.value);
    }

    let filterOut = store.filter((curValue)=>{
        return curValue.dishName.toLowerCase().includes(data) || curValue.brandName.toLowerCase().includes(data)
    })

  return (
    <div className="container">
            <input type="text" placeholder="Search Here..." onChange={getData}/>
            <div className="type">
                <h3>Name</h3>
                <h3>Brand</h3>
                <h3>Images</h3>
            </div>
            {
                filterOut.map((curr)=>{
                    return(

                        <div className="itemList">
                            <p>{curr.dishName}</p>
                            <p>{curr.brandName}</p>
                            <img src={curr.brandUrl}/>
                        </div>
                    )
                })
            }
        </div>
  )
}
export default Search