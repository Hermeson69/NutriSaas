import { useState } from "react";

interface Logindata {
  email: string;
  password: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirpassword: string;
}

export const useAuth = () => {
  const [isLoading, setisLoading] = useState(false);
  const [user, setuser] = useState<any>(null);

  const login = async (data: Logindata) => {
    setisLoading(true);

    // teoricamente simula uma chamada de API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockUser = {
      id: 1,
      email: data.email,
      password: data.password,
      name: "Usuario Logado",
    };
    setuser(mockUser);

    console.log("Login realizado: ", mockUser);
    return mockUser;
  };

  const signUP = async (data: SignUpData) => {
    setisLoading(true);

    // teoricamente simula uma chamada de API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockUser = {
      id: 2,
      email: data.email,
      name: data.name,
    };
    setuser(mockUser);
    setisLoading(false);

    console.log("Cadastro feito:", mockUser);
    return mockUser;
  };

  const logout = () =>{
    setuser(null);
  }

  return {
    user,
    isLoading,
    login,
    signUP,
    logout
  }
};
