import { PostRequest } from "@/utils/requests";//da api


const API_URL = {
  LOGIN: "https://api.example.com/auth/login",
  SIGNUP: "https://api.example.com/auth/signup",
};

/**
 * Função async para o usuario poder fazer o login no sistema mandando as credenciais de email(string) senha(string) e retornando a resposta da API para ver se ele esta no sistema
 * @param credentials 
 * @returns response
 */

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

/**
 * Função async para cadastrar o usuario ao sistema passando os userData (tudo do formulario de cadastro) como: nome, email, password e confirPassword
 * @param userData 
 * @returns response
 */

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
