import { NavLink } from "react-router-dom";

export function NavBar() {
  const cartItemCount = 3; // get from state/store later

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

        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {cartItemCount}
          </span>
        )}
      </div>
    </nav>
  );
}
