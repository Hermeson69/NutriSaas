import {Link} from "react-router-dom";

/**
 * Página inicial do sistema integrado de Gestão de Saúde.
 *
 * Exibe uma mensagem de boas-vindas e um botão para redirecionar o usuário à página de login.
 *
 * @component
 * @returns {JSX.Element} O componente da página inicial.
 */
const Index = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Bem Vindo ao seu sistema integrado de Gestão de Saude</h1>
                <p className="text-xl text-gray-600 mb-6">Vamos comecar a mudar o seu futuro!</p>
                <Link to="/LoginPage">
                    <button className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-700">
                        Ir para Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Index;
