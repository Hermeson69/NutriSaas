import { Leaf, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  const social = [
    {
      name: "Instagram",
      href: "/",
      icon: Instagram,
      bgColor: "bg-transparent",
    },
    {
      name: "Twitter",
      href: "/",
      icon: Twitter,
      bgColor: "bg-transparent",
    },
  ]

  return (
    <footer className="bg-white text-black py-12">
      <div className="container  pl-5 pr-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold text-[#1A4314]">NutriSaaS</span>
            </div>
            <p className="text-black/70 mb-4">
              Transformando vidas através de nutrição personalizada e tecnologia.
            </p>
            <div className="flex gap-4">
              {social.map((socialItem) => (
                <a
                  key={socialItem.name}
                  href={socialItem.href}
                  className="text-black/70 hover:text-black"
                >
                  <span className="sr-only">{socialItem.name}</span>
                  <div className={`h-8 w-8 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#F5F5F5]/80`}>
                    <socialItem.icon className="h-5 w-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Produto</h3>
            <ul className="space-y-2">
              {["Recursos", "Planos", "Preços", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#666666] hover:text-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {["Sobre nós", "Carreiras", "Blog", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#666666] hover:text-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Termos de Uso", "Privacidade", "Cookies", "Licenças"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#666666] hover:text-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#F5F5F5] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#666666] text-sm">
            &copy; {new Date().getFullYear()} NutriSaaS. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-[#666666] hover:text-black text-sm">
              Termos
            </a>
            <a href="#" className="text-[#666666] hover:text-black text-sm">
              Privacidade
            </a>
            <a href="#" className="text-[#666666] hover:text-black text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
