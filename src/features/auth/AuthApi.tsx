import axios from "axios";
import { authResponse, LogType, RegisterType } from "./AuthType";

export const LoginApi = async (credentials: LogType): Promise<authResponse> => {
  const options = {
    method: "POST",
    url: "https://api.freeapi.app/api/v1/users/login",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    data: {
      username: credentials.username,
      password: credentials.password,
    },
  };

  
  try {
    const { data } = await axios.request<authResponse>(options);
    
    if (data?.data?.accessToken) {
      localStorage.setItem("authToken", data.data.accessToken);
    } else {
      console.warn("⚠️ No token received in response!");
    }
    
    return data;
  }
  catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const RegisterUser = async (
  credentials: RegisterType
): Promise<authResponse> => {
  const options = {
    method: "POST",
    url: "https://api.freeapi.app/api/v1/users/register",
    headers: { accept: "application/json", "content-type": "application/json" },
    data: {
      email: credentials.email,
      password: credentials.password,
      role: credentials.role,
      username: credentials.username,
    },
  };

  try {
    const { data } = await axios.request<authResponse>(options);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const LogOutUser=async():Promise<void>=>{
    const options = {
        method: 'POST',
        url: 'https://api.freeapi.app/api/v1/users/logout',
        headers: {accept: 'application/json'}
      };
      
      try {
        const { data } = await axios.request(options);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
}