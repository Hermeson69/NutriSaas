import { Button } from "../../ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#F5F5F5] text-black">
      <div className="container pl-5 pr-5">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar sua saúde?
          </h2>
          <p className="text-xl mb-8 text-black/80">
            Junte-se a milhares de pessoas que já estão vivendo uma vida mais
            saudável com o NutriSaaS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-[#1A4314] hover:bg-white/90"
            >
              Começar Gratuitamente
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black border-black hover:bg-black/10"
            >
              Falar com um Consultor
            </Button>
          </div>
          <p className="mt-4 text-sm text-black/70">
            Teste grátis por 14 dias. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
