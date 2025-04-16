import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import { AppLayout } from "../AppLayout"
import { Store } from "../Store"
import { Home } from "../Home"
import {About} from "../About"
import { Error } from "../Error"
import { Cart } from "../Cart"
import { Movie } from "../movie/Movie"
import { Product } from "../product/Product"
import { ProductDetails } from "../product/ProductDetails"
import { Login } from "../Login"
import { useContext } from "react"
import { AuthStore } from "../../store/AuthContext"
export function AppRouter(){
const {token}=useContext(AuthStore)
const isLoggedIn=Object.keys(token).length>0
 const router=createBrowserRouter([{
   

    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
            index:true,
            element:<Store/>
        },
        {
            path:"store",
            element:<Store/>,
            children:[{
                path:"newstore",
                element:<h1>i am new Store</h1>
            }]
        },
        {
            path:"home",
            element:<Home/>
        },
        {
            path:"about",
            element:<About/>
        },
        {
            path:"cart",
            element:<Cart/>
        },
        {
            path:"movie",
            element:<Movie/>
        },
        {
            path:"product",
            element: isLoggedIn?<Product/>:<Login/>
        },
        {
            path:"product/:productId",
            element:<ProductDetails/>
        },
        {
            path:"login",
            element:<Login/>
        }
        
    ]
 }]

 )
 return <RouterProvider router={router}/>

}