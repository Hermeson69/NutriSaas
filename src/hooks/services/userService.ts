import { PostRequest } from "@/utils/requests";//da api


const API_URL = {
  LOGIN: "https://api.example.com/auth/login",
  SIGNUP: "https://api.example.com/auth/signup",
};

export async function login(credentials: {email: string; passaword: string}): Promise<any>{
    try{
        const response = await PostRequest(API_URL.LOGIN, credentials);
        return response;
    }catch (error){
        if (error instanceof Error) {
            throw new Error(`Login error: ${error.message}`);
        } else {
            throw new Error("Login error: Unknown error");
        }
    }
}

export async function signUp(userData: {
    name: string;
    email: string; 
    password: string;
    confirpassword: string;
}): Promise<any>{
     try{
        const { name, email, password } = userData;
        const response = await PostRequest(API_URL.SIGNUP, { name, email, password });
        return response;
     } catch (error){
        if(error instanceof Error){
            throw new Error(`login error: ${error.message}`);
        }else{
            throw new Error("Login error: Unknown error");
        }
     }
}
