import { PostRequest } from "@/utils/requests";
import { API_URL } from "@/core/constants";
import type { UserResponse, TokenResponse, UserCreate } from "@/types/userTypes";
import StorageHandle from "@/core/storege"

const USER_URL = {
    LOGIN: API_URL + "/user/login",
    SIGNUP: API_URL + "/user/",
};

/**
 * Função async para o usuario poder fazer o login no sistema mandando as credenciais de email(string) senha(string) e retornando a resposta da API para ver se ele esta no sistema
 * @param credentials 
 * @returns response
 */
export async function login(credentials: { email: string; password: string }): Promise<UserResponse> {
    try {
        const tokenResponse:TokenResponse = await PostRequest(USER_URL.LOGIN, credentials);
        StorageHandle.setCookie("token", tokenResponse.access_token);
        return tokenResponse.user;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Login error: ${error.message}`);
        } else {
            throw new Error("Login error: Unknown error");
        }
    }
}

export async function singUp(userData: UserCreate): Promise<UserResponse> {
    try {
        const userResponse: UserResponse = await PostRequest(USER_URL.SIGNUP, userData);
        return userResponse;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Signup error: ${error.message}`);
        } else {
            throw new Error("Signup error: Unknown error");
        }
    }
}
