import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LoadingRedirectProps {
    message?: string;
}

/**
 * Componente de carregamento e redirecionamento automático.
 *
 * Exibe uma animação de carregamento e uma mensagem personalizada enquanto aguarda
 * um tempo determinado antes de redirecionar o usuário para a rota "/onboarding".
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} [props.message="Redirecionando...."] - Mensagem exibida durante o carregamento.
 *
 * @returns {JSX.Element} Elemento visual de carregamento e redirecionamento.
 *
 * @example
 * <LoadingRedirect message="Aguarde, estamos te redirecionando!" />
 */
export function LoadingRedirect({message = "Redirecionando...."}:LoadingRedirectProps ) {

    const navigate = useNavigate();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate("/onboarding");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

return(
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6">
        <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-800 rounded-[50%] animate-pulse"></div>
            <p className="text-lg font-medium text-light">{message}</p>
            <p className="text-sm text-muted-foreground">Agurde um momento...</p>
        </div>
    </div>
);

}