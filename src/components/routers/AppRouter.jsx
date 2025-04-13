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
export function AppRouter(){

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
            element:<Store/>
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
            element:<Product/>
        },
        {
            path:"product/:productId",
            element:<ProductDetails/>
        }
        
    ]
 }]

 )
 return <RouterProvider router={router}/>

}