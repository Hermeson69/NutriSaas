import type React from "react";
import {
  Dumbbell,
  Heart,
  MessageSquare,
  Salad,
  Smartphone,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: <Salad className="h-10 w-10 text-[#1A4314]" />,
      title: "Planos de Dieta Personalizados",
      description:
        "Receba planos alimentares adaptados às suas necessidades, preferências e objetivos específicos.",
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-[#1A4314]" />,
      title: "Rotinas de Exercícios",
      description:
        "Treinos personalizados que se encaixam na sua agenda e nível de condicionamento físico.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[#1A4314]" />,
      title: "Acompanhamento via App",
      description:
        "Monitore seu progresso, registre refeições e exercícios diretamente do seu smartphone.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#1A4314]" />,
      title: "Suporte de Nutricionistas",
      description:
        "Acesso a profissionais qualificados para tirar dúvidas e ajustar seu plano quando necessário.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#1A4314]" />,
      title: "Comunidade de Apoio",
      description:
        "Conecte-se com outras pessoas em jornadas semelhantes para compartilhar experiências e motivação.",
    },
    {
      icon: <Heart className="h-10 w-10 text-[#1A4314]" />,
      title: "Monitoramento de Saúde",
      description:
        "Acompanhe indicadores importantes como peso, IMC, pressão arterial e níveis de energia.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container pl-5 pr-5">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <Badge className="bg-[#1A4314]/10 text-[#1A4314] hover:bg-[#1A4314]/20 mb-4">
            Recursos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo o que você precisa para uma vida mais saudável
          </h2>
          <p className="text-lg text-[#666666]">
            Nossa plataforma oferece ferramentas completas para ajudar você a
            alcançar seus objetivos de saúde, independentemente do seu estilo de
            vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center bg-[#1A4314]/10">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
