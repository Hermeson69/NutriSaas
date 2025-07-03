import { useState } from "react";
import { login, singUp } from "@/hooks/services/userService";
import type { UserCreate, UserLogin, UserResponse } from "@/types/userTypes";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginFn = async (credentials: UserLogin): Promise<UserResponse | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const user = await login(credentials);
      return user;
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  const singUpFn = async (userData: UserCreate): Promise<UserResponse | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const user = await singUp(userData);
      return user;
    } catch (err: any) {
      setError(err.message || "Erro ao fazer cadastro");
    } finally {
      setLoading(false);
    }
  };

  return {
    login: loginFn,
    signUp: singUpFn,
    loading,
    error,
  };
}
