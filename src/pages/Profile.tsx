import { Pageconfig } from "@/components/Pageconfig";

import { FormPart1 } from "@/components/Form/form-part1";
import { FormPart2 } from "@/components/Form/form-part2";

/**
 * Componente de página de perfil do usuário.
 *
 * Exibe o painel de controle do usuário com título e descrição,
 * além de renderizar os formulários de edição de perfil.
 *
 * @returns JSX.Element Página de perfil do usuário.
 */
export const Profile = () => {
  return (
    <Pageconfig
      title="Perfil"
      description="Bem-vindo ao seu painel de controle"
    >
      <FormPart1 />
      <FormPart2 />
    </Pageconfig>
  );
};
