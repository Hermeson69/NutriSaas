import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Badge } from "../../ui/badge";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ana Matsunaga",
      role: "Profissional de Marketing, 32 anos",
      quote:
        "Como profissional ocupada, nunca conseguia manter uma dieta. O NutriSaaS adaptou um plano à minha rotina agitada e perdi 15kg em 6 meses!",
    },
    {
      name: "João de Deus",
      role: "Professor, 38 anos",
      quote:
        "Pai de dois filhos, não tinha tempo para cuidar da minha saúde. Com o NutriSaaS, consegui integrar hábitos saudáveis à rotina familiar e perdi 20kg.",
    },
    {
      name: "Thais Carla",
      role: "Estudante, 25 anos",
      quote:
        "Sempre lutei contra a obesidade. O NutriSaaS me deu as ferramentas e o suporte que precisava para finalmente fazer mudanças duradouras na minha vida.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container pl-5 pr-5">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <Badge className="bg-[#1A4314]/10 text-[#1A4314] hover:bg-[#1A4314]/20 mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Histórias de sucesso
          </h2>
          <p className="text-lg text-[#666666]">
            Veja como o NutriSaaS tem ajudado pessoas reais a transformarem suas
            vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div>
                    <CardTitle className="text-base">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-[#F44E25] text-[#F44E25]"
                    />
                  ))}
                </div>
                <p className="text-[#666666]">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
