import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";

type Step = {
  step: string;
  title: string;
  description: string;
};

const HowItWorksSection = () => {
  const steps: Step[] = [
    {
      step: "01",
      title: "Responda ao questionário",
      description:
        "Compartilhe seus objetivos, preferências alimentares e rotina para criarmos um plano personalizado.",
    },
    {
      step: "02",
      title: "Receba seu plano personalizado",
      description:
        "Nossos especialistas criarão um plano de dieta e exercícios adaptado especificamente para você.",
    },
    {
      step: "03",
      title: "Acompanhe seu progresso",
      description:
        "Use nosso app para registrar refeições, exercícios e ver seu progresso em tempo real.",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F5F5] rounded-2xl">
      <div className="container pl-5 pr-5">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <Badge className="bg-[#1A4314]/10 text-[#1A4314] hover:bg-[#1A4314]/20 mb-4">
            Processo
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-lg text-[#666666]">
            Em apenas três passos simples, você estará no caminho para uma vida
            mais saudável e equilibrada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute z-20 -top-9 right-4 text-7xl font-bold text-[#1A4314]/10">
                {step.step}
              </div>
              <Card className="h-full p-3 border-0 shadow-md relative z-10 bg-white">
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#666666]">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
