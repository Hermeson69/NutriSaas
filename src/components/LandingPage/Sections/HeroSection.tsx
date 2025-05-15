import { ArrowRight, Star } from "lucide-react"
import { Button } from "../../ui/button"
import { Badge } from "../../ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import FoodTrackingCard from "../FoodTrackingCard"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden mt-10 bg-[#F5F5F5] py-20 md:py-32 rounded-3xl">
      <div className="container relative z-10 grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="pl-10 pr-10">
          <Badge className="bg-[#1A4314]/10 text-[#1A4314] hover:bg-[#1A4314]/20">Novo: Planos Personalizados</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transforme sua saúde com dietas <span className="text-[#1A4314]">personalizadas</span>
          </h1>
          <p className="text-lg text-[#666666] max-w-[600px]">
            Planos de dieta e treino personalizados para ajudar você a combater a obesidade e melhorar sua saúde,
            adaptados ao seu estilo de vida.
          </p>
          </div>
          <div className="pl-10 pr-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#1A4314] hover:bg-[#2C6B22] text-white">
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Ver Planos
            </Button>
          </div>
          <div className="pl-10 pr-10 flex items-center gap-4 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} className="border-2 border-white">
                  <AvatarImage src={`https://via.placeholder.com/32x32?text=${i}`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-[#F44E25] text-[#F44E25]" />
              <Star className="h-4 w-4 fill-[#F44E25] text-[#F44E25]" />
              <Star className="h-4 w-4 fill-[#F44E25] text-[#F44E25]" />
              <Star className="h-4 w-4 fill-[#F44E25] text-[#F44E25]" />
              <Star className="h-4 w-4 fill-[#F44E25] text-[#F44E25]" />
              <span className="ml-2 text-[#666666]">
                <strong>4.9/5</strong> de mais de 2.000 usuários
              </span>
            </div>
          </div>
        </div>

      
        <FoodTrackingCard />
      </div>
    </section>
  )
}

export default HeroSection
