import { Pageconfig } from "@/components/Pageconfig";

/**
 * Componente responsável por exibir a página de planos.
 *
 * @returns JSX.Element Página de planos com título e descrição configurados.
 */
export const Plans = () => {
  return (
    <Pageconfig
      title="Planos"
      description="Bem-vindo ao seu painel de controle"
    >
      <div>{/* Seus componentes e conteúdo aqui */}</div>
    </Pageconfig>
  );
};
