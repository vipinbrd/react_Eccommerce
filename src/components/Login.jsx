import { useContext, useRef } from "react";
import { AuthStore } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate=useNavigate()
  const username = useRef();
  const password = useRef();
 const{token, setToken}=useContext(AuthStore)
  async function loginHandler(e) {
    e.preventDefault(); 
    const phone = username.current.value;
    const pass = password.current.value;
    const data={
        username:phone,
        password:pass,
    }
 try{ 
    const request=await fetch("http://localhost:8888/authenticate",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
      if(!request.ok){
        throw new Error("bad Crediantial")
      }
    const response=await request.json();
    setToken(response)
    localStorage.setItem("token",JSON.stringify(response))
    navigate("/product")
    
}
    catch(error){
  alert("Bad Crediantial")
    }
    
    

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={loginHandler}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <label htmlFor="phone" className="block mb-1 text-sm font-medium">
          Mobile Number
        </label>
        <input
          id="phone"
          type="tel"
          ref={username}
          placeholder="Enter your mobile number"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="password" className="block mb-1 text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          ref={password}
          placeholder="Enter your password"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
