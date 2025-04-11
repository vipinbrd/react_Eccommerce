import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import { AppLayout } from "../AppLayout"
import { Store } from "../Store"
import { Home } from "../Home"
import {About} from "../About"
import { Error } from "../Error"
import { Cart } from "../Cart"
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
        }
    ]
 }]

 )
 return <RouterProvider router={router}/>

}