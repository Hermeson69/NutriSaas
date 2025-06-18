import { Pageconfig } from "@/components/Pageconfig"

/**
 * Componente de página de configurações.
 *
 * Exibe o painel de controle com título e descrição personalizados.
 *
 * @returns O componente de configurações do painel.
 */
export const Setting = () =>{
    <Pageconfig
          title="Configurações"
          description="Bem-vindo ao seu painel de controle"
        >
          <div>{/* Seus componentes e conteúdo aqui */}</div>
        </Pageconfig>
}