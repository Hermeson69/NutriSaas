/**
 * Nosso "struct global" onde nele se encapsula tudo referente ao user
 */

declare global {

  /**
   * Tudo que o user vai mandar para o BD Nome, apelido (caso tenha) sexo e etc...
   */
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
  /**
   * Resposta do BD ao user com suas credenciais
   */
  interface TypeUserResponse {
    email: string;
    name?: string | null;
  }
  /**
   * O que o user vai mandar ao fazer o login
   */
  interface TypeLoginRequest {
    email: string;
    password: string;
  }
  /**
   * Resposta da API ao fazer o login token de acesso único de acesso ao user,
   */
  interface TypeLoginResponse {
    acess_token: string;
    user: TypeUserResponse;
  }
}

export {};
