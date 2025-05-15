import { Leaf } from "lucide-react"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-[#1A4314]" />
          <span className="text-xl font-bold text-[#1A4314]">NutriSaaS</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-sm font-medium hover:text-[#1A4314] transition-colors">
            Recursos
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-[#1A4314] transition-colors">
            Depoimentos
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-[#1A4314] transition-colors">
            Planos
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-[#1A4314] transition-colors">
            Contato
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Entrar
          </Button>
          <Button className="bg-[#1A4314] hover:bg-[#2C6B22] text-white">Começar Grátis</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
