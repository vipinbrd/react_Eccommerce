import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";
import { AuthStore } from "../store/AuthContext";


export function Cart() {
  const{token}=useContext(AuthStore)
  const[CartData,setCartData]=useState("")
    const{data:items,dispatch}=useContext(CartContext)
  function inputChangeHandler() {
    
  }
  async function fetchData(){
    const userId=Object.keys(token).length>0?token.userId:null
    if(userId==null)return
    try{ 
    const response=await fetch(`http://localhost:8888/cart/${userId}`)
     if(!response.ok){
      throw new Error("something went wrong")
     }
     const jsonResponse= await response.json();
     setCartData(jsonResponse)
  
  }catch(error){
    alert("something went wrong")
  }

  }

  useEffect(()=>{
    fetchData()
  },[token])


  
console.log(CartData)



  return (
   
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {!CartData&&<p>Loading...</p>}

      {CartData&& <ul className="space-y-4">
        {CartData.cartItems.map((ele, index) => (
          <li
            key={index}
            className="grid grid-cols-[80px_1fr_100px_120px_80px] items-center gap-4 bg-white p-4 rounded shadow"
          >
           
            <img
              src={ele.product.images[0].imageUrl}
              alt={ele.product.title}
              className="w-16 h-16 object-cover rounded"
            />

     
            <p className="truncate font-medium">{ele.product.title}</p>

         
            <p className="font-semibold text-center">₹{ele.product.sellingPrice}</p>

    
            <div className="flex items-center justify-center space-x-2">
              <button className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">
                -
              </button>
              <input
                value={1}
                onChange={() => inputChangeHandler()}
                className="w-12 text-center border rounded"
              />
              <button className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">
                +
              </button>
            </div>

      
            <button className="text-red-500 text-sm hover:underline">
              Remove
            </button>
          </li>
        ))}
      </ul>}

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <p className="text-xl font-bold">Total amount: ₹{CartData.totalPrice}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
