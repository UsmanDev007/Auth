export interface LogType{
    username:string;
    password:string;
}
export interface RegisterType{
    email:string;
    password:string;
    username:string;
    role:string;
}
export interface authResponse{
    data: any;
    accessToken: string;
    // user:{
    //     id:string;
    //     username: string;
    //     password:string;

    // }
}
export interface resetPassword{
    newPassword:string;
}