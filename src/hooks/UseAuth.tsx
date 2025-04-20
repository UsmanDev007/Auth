import { useMutation, useQuery } from "@tanstack/react-query";
import { LoginApi,LogOutUser,RegisterUser,CurrentUser} from "../features/auth/AuthApi";
import { getToken } from "../features/auth/AuthUtils";
import { useNavigate } from "react-router-dom";
export const UseAuth=()=>{
    // const queryClient=useQueryClient();
    const navigate =useNavigate();
    const loginMuation=useMutation({
        mutationFn:LoginApi,
        onSuccess:(data)=>{
             localStorage.setItem('authToken',data?.data?.accessToken)
             navigate('/profile')
        }
    })
    const SignUpMuation=useMutation({
        mutationFn:RegisterUser,
        
    })
    const LogoutMutation=useMutation({
        mutationFn:LogOutUser,
        onSuccess:()=>{
            localStorage.removeItem('authToken')
            navigate('/login')
        }
    })
    const isAuthenticated =!!getToken();
    const CurrentUserMutation=useQuery({
        queryKey: ['current-user'],
        queryFn: CurrentUser,
        enabled:isAuthenticated
    })
    
    return {loginMuation,SignUpMuation,LogoutMutation,isAuthenticated,CurrentUserMutation}
}
