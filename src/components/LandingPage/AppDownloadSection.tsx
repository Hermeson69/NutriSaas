import { Apple, Smartphone } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const AppDownloadSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#f5f5f5] rounded-2xl">
      <div className="container  pl-5 pr-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-[#1A4314]/10 text-[#1A4314] hover:bg-[#1A4314]/20 mb-4">
              App Mobile
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leve o NutriSaaS com você
            </h2>
            <p className="text-lg text-[#666666] mb-6">
              Baixe nosso aplicativo para ter acesso a todos os recursos mesmo
              quando estiver offline. Disponível para iOS e Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Apple className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Baixar na</span>
                  <span className="text-sm font-medium">App Store</span>
                </div>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Disponível no</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-[300px]">
            <div className="relative z-10">
              <img
                src="https://via.placeholder.com/300x600?text=App+Mobile"
                alt="NutriSaaS Mobile App"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 -z-10 h-[200px] w-[200px] rounded-full bg-[#1A4314]/10 blur-3xl"></div>
            <div className="absolute -left-4 -top-4 -z-10 h-[200px] w-[200px] rounded-full bg-[#F44E25]/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
