import { Footer } from "./Footer";
import {Outlet} from "react-router-dom"
import { NavBar } from "./NavBar";

export function AppLayout(){
 return <>
 <NavBar/>
 <Outlet/>
 <Footer/>

 </>

}