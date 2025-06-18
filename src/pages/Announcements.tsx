import { Pageconfig } from "@/components/Pageconfig";

/**
 * Announcements page component.
 *
 * Renders the main announcements/news page with a title and description,
 * using the `Pageconfig` layout component.
 *
 * @returns {JSX.Element} The rendered announcements page.
 */
export default function Announcements() {
  return (
    <Pageconfig
      title="Notícias"
      description="Bem-vindo ao seu painel de controle"
    >
      <div>{/* Seus componentes e conteúdo aqui */}</div>
    </Pageconfig>
  );
}
