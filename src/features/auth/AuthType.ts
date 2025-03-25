export interface LogType{
    username:string;
    password:string;
}
export interface RegisterType{
    username:string;
    password:string;
    email:string;
    role:string;
}
export interface authResponse{
    data: any;
    accessToken: string;
    user:{
        id:string;
        username: string;
        password:string;
    }

}