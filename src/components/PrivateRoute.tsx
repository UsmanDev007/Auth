import { Navigate, Outlet, } from "react-router-dom"
import { UseAuth } from "../hooks/UseAuth";

export const PrivateRoute=()=>{
    const token=localStorage.getItem('authToken')
    return token ? <Outlet/>: <Navigate to ='/login'/>
}