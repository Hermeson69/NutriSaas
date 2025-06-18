import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Componente de página de erro 404.
 *
 * Exibe uma mensagem informando que a página não foi encontrada e fornece um link para retornar à página inicial.
 * Também registra no console um erro sempre que um usuário tenta acessar uma rota inexistente.
 *
 * @returns JSX.Element Página de erro 404 estilizada.
 */
export default function NotFound(){
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

