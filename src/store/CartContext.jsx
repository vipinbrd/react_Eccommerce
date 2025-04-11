import { useReducer } from "react";
import { createContext } from "react";

export const CartContext=createContext([])


export function CartDataProvider({children}){
   
    function reducer(state,action){
      if(action.type=="INSERT"){
        return [...state,action.payload]
      }
        return state;
    }
  const[data,dispatch]=useReducer(reducer,[])
    

    return <CartContext.Provider value={{data,dispatch}}>{children}</CartContext.Provider>


}