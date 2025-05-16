import { Leaf } from "lucide-react"
import { Button } from "../ui/button"
import { ThemeToggle } from "../theme-toggle"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="w-dvw mx-auto px-6 sm:px-8 lg:px-12 flex h-16 items-center justify-around">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-800" />
          <span className="text-xl font-bold text-green-800">NutriSaaS</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-sm font-medium hover:text-green-800 transition-colors">
            Recursos
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-green-800 transition-colors">
            Depoimentos
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-green-800 transition-colors">
            Planos
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-green-800 transition-colors">
            Contato
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Entrar
          </Button>
          <Button className="bg-green-800 hover:bg-green-700 text-white">Começar Grátis</Button>
          <ThemeToggle/>
        </div>

      </div>
    </header>
  )
}

export default Header
