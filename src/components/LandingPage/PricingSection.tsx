import { ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
};

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      name: "Básico",
      price: "R$49",
      description: "Ideal para quem está começando",
      features: [
        "Plano alimentar básico",
        "Rotina de exercícios simples",
        "Acesso ao app",
        "Suporte por email",
      ],
      cta: "Começar Agora",
      popular: false,
    },
    {
      name: "Premium",
      price: "R$99",
      description: "Nossa opção mais popular",
      features: [
        "Plano alimentar personalizado",
        "Rotina de exercícios avançada",
        "Acesso ao app com recursos premium",
        "Suporte prioritário",
        "Consultas mensais com nutricionista",
        "Acesso à comunidade exclusiva",
      ],
      cta: "Escolher Premium",
      popular: true,
    },
    {
      name: "Família",
      price: "R$149",
      description: "Perfeito para toda a família",
      features: [
        "Planos para até 4 pessoas",
        "Planos alimentares personalizados",
        "Rotinas de exercícios para todos",
        "Acesso ao app com recursos premium",
        "Suporte prioritário 24/7",
        "Consultas quinzenais com nutricionista",
      ],
      cta: "Escolher Família",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#F5F5F5] rounded-2xl">
      <div className="container pl-5 pr-5">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <Badge className="bg-[#1A4314]/10 text-[#1A4314] hover:bg-[#1A4314]/20 mb-4">
            Planos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-[#666666]">
            Oferecemos opções flexíveis para atender às suas necessidades e
            orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-0 shadow-md relative ${
                plan.popular ? "ring-2 ring-[#1A4314]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
                  <Badge className="bg-[#1A4314] text-white">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-[#666666]">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-[#1A4314]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#1A4314] hover:bg-[#2C6B22] text-white"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
