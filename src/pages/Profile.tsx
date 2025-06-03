import { Pageconfig } from "@/components/Pageconfig";

import { FormPart1 } from "@/components/Form/form-part1";
import { FormPart2 } from "@/components/Form/form-part2";

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
