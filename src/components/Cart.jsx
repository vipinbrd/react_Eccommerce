import { useContext } from "react";
import { CartContext } from "../store/CartContext";


export function Cart() {
    const{data:items,dispatch}=useContext(CartContext)
  function inputChangeHandler() {
    // Placeholder
  }
  const totalPrice=items.reduce((acc,cur)=>{return acc+cur.price},0)
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <ul className="space-y-4">
        {items.map((ele, index) => (
          <li
            key={index}
            className="grid grid-cols-[80px_1fr_100px_120px_80px] items-center gap-4 bg-white p-4 rounded shadow"
          >
           
            <img
              src={ele.imageUrl}
              alt={ele.title}
              className="w-16 h-16 object-cover rounded"
            />

     
            <p className="truncate font-medium">{ele.title}</p>

         
            <p className="font-semibold text-center">₹{ele.price}</p>

    
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
      </ul>

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <p className="text-xl font-bold">Total amount: ₹{totalPrice}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
