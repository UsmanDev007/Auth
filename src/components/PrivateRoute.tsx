import { Navigate, Outlet, } from "react-router-dom"
import { UseAuth } from "../hooks/UseAuth";

export const PrivateRoute=()=>{
    const {isAuthenticated}=UseAuth();
    return isAuthenticated ? <Outlet/>: <Navigate to ='/login'/>
}