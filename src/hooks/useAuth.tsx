import { useState } from "react";
import { login, signUp } from "@/hooks/services/userService";

interface User {
  id: string;
  name: string;
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
/**
 * Passo as credentials como objeto para poder pegar os dados passados pelo user no login e confirmar no back
 * @param credentials 
 */
  const loginFn = async (credentials: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      /**
       * tento ver se ele esta cadastrado se estiver eu set o user como quem eu achei e inico a section dele se não da erro (nao achado provavelmente) e mando esse erro e nao deixo ele logar
       * @
       */
      const response = await login({
        email: credentials.email,
        passaword: credentials.password,
      });
      setUser(response.user);
      localStorage.setItem("token", response.token);
    } catch (error) {
      console.error(error);
      throw error; 
    } finally {
      setIsLoading(false);
    }
  };                      

  const signUpFn = async (userData: {
    name: string;
    email: string;
    password: string;
    confirpassword: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await signUp(userData);
      setUser(response.user);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
    } catch (error) {
      console.error(error);
      throw error; 
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login: loginFn,
    signUP: signUpFn, 
    isLoading,
    user,
  };
}