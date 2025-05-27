declare global {
  interface TypeUserRequest {
    name: string;
    apelido?: string;
    sexo: string;
    telefone: string; 
    data_de_nascimento: string; 
    rua: string;
    bairro: string;
    numero: number | string;
    cep: string; 
    cidade: string;
    estado: string;
    peso: number;
    altura: number;
    indice_atividade_fisica: string;
    indice_gordura_corporal: number;
    circunferencia_pescoco: number;
    circunferencia_cintura: number;
    circunferencia_quadril: number;
    restricao_alimentar: string;
    meta: boolean;
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
    user: TypeUserResponse;
  }
}

export {};
