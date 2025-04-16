import { useContext,useState } from "react";
import items from "../components/dummyData/Items.json";
import { CartContext } from "../store/CartContext";
import { Outlet } from "react-router-dom";



export function Store() {
  const[toastMessage,setToastData]=useState("")
  const{data,dispatch}=useContext(CartContext)
  function toasthandler(){
   
    setToastData("Product added to cart")
    setTimeout(() => {
      setToastData("")
    }, 2000);

  }

  function addToCartHandler(ele){

      dispatch({
       type:"INSERT",
       payload:ele
      })
    
     toasthandler()
   }
   
   
  return (
    <div className="p-6">
          {toastMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-all">
          {toastMessage}
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6 text-center">Music</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((ele, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <p className="text-lg font-semibold mb-2">{ele.title}</p>

            <div className="overflow-hidden rounded-md w-full">
              <img
                src={ele.imageUrl}
                alt={ele.title}
                className="w-full h-auto transform transition-transform duration-300 hover:scale-110"
              />
            </div>

            <p className="text-xl font-bold mt-4 mb-2">₹{ele.price}</p>
            <button onClick={()=>{addToCartHandler(ele)}}className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
      <div>
      {/* only for testing purpose */}
        <Outlet/>
      </div>
    </div>
  );
}
