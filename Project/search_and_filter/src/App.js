import axios from "axios";
import { useState, useEffect } from "react";
import Category from "./Category";
import Product from "./Product";

function App() {
  let [prouctCategory, setProductCategory] = useState([])
  let URL = 'https://dummyjson.com/products/categories'
  let getCategory=()=>{
    axios.get(URL)
    .then((rec)=>{
      setProductCategory(rec.data)
      // console.log(rec.data)
    })
  }
  
  useEffect(()=>{
    getCategory()
    
  }, [])

  
  
  console.log(prouctCategory)
  return (
    <>
      <div className="py-[40px]">
        <div className=" max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Procucts
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div className="bg-gray-200">
              <Category />
              <ul>

              {prouctCategory.map((categ, index)=>(
                
                <li key={index}> {categ}</li>
                ))}
              
                </ul>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <Product />
                <Product />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
