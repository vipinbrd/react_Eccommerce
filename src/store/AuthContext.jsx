import { createContext, useState } from "react";

  export const AuthStore=createContext({});
export function AuthContext({children}){
    const storedData=JSON.parse(localStorage.getItem("token"))||{}
 const[token,setToken]=useState({})


 return <AuthStore.Provider value={{token,setToken}}>{children}</AuthStore.Provider>
  


}