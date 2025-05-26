declare global {
    interface TypeUserRequest {
        name: string;
        apelido?: string;
    }
    interface TypeUserResponse {
        email: string;
        name?: string | null;
        
    }
    interface TypeLoginRequest {
        email: string;
        password: string;
    }
    interface TypeLoginResponse {
        acess_token: string;
        user: TypeUserResponse
    }
}

export {};