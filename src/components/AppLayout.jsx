import { Footer } from "./Footer";
import {Outlet} from "react-router-dom"
import { NavBar } from "./NavBar";
import { Generics } from "./Generics";

export function AppLayout(){
 return <>
 <NavBar/>
 <Generics/>
 <Outlet/>
 <Footer/>

 </>

}