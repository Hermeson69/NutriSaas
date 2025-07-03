export interface UserResponse {
    name: string,
    email: string,
    id: string,
    gender: string
    birth_date: string
    state: string
    cep: string
    complement: string
}

export interface TokenResponse {
    access_token: string
    user: UserResponse
}

export interface UserCreate{
    name: string
    email: string
    password: string
}

export interface UserLogin{
    email: string
    password: string
}