import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginApi,LogOutUser,RegisterUser } from "../features/auth/AuthApi";
export const UseAuth=()=>{
    // const queryClient=useQueryClient();
    const loginMuation=useMutation({
        mutationFn:LoginApi,
        onSuccess:(data)=>{
             localStorage.setItem('authToken',data?.data?.accessToken)
        }
    })
    const SignUpMuation=useMutation({
        mutationFn:RegisterUser,
        
    })
    const LogoutMutation=useMutation({
        mutationFn:LogOutUser,
        onSuccess:()=>{
            localStorage.removeItem('authToken')
        }
    })
    return {loginMuation,SignUpMuation,LogoutMutation}
}
