import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../store/CartContext";

export function NavBar() {
 const{data}=useContext(CartContext)

  return (
    <nav className="bg-black text-white py-4 px-8 flex items-center justify-between">
      <div className="flex-1" />

      <div className="flex space-x-8 text-lg">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          Store
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          About
        </NavLink>
      </div>

      <div className="flex-1 text-right relative">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          Cart
        </NavLink>

       
          <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {data.length}
          </span>
        
      </div>
    </nav>
  );
}
