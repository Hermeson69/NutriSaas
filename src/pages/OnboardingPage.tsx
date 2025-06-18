import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Upload } from "lucide-react"; // Assuming you're using lucide-react for icons
import { DatePickerNoCalendar } from "@/components/DatePickerNoCalendar";
import { FormPart1 } from "@/components/Form/form-part1";
import { FormPart2 } from "@/components/Form/form-part2";
import { FormPart3 } from "@/components/Form/form-part3";

/**
 * Página de Onboarding responsável por gerenciar o fluxo de cadastro inicial do usuário.
 *
 * Esta página exibe um formulário dividido em etapas (wizard), permitindo ao usuário avançar ou retroceder entre os passos.
 * O progresso é exibido através de uma barra de progresso e o usuário pode finalizar o cadastro ao completar todas as etapas.
 *
 * @component
 * @returns {JSX.Element} Componente da página de onboarding.
 *
 * @example
 * // Uso típico em rotas protegidas:
 * <Route path="/onboarding" element={<OnboardingPage />} />
 *
 * @remarks
 * - Utiliza hooks de estado para controlar o passo atual.
 * - Navega para o dashboard ao finalizar o onboarding.
 * - Os componentes `FormPart1`, `FormPart2` e `FormPart3` representam os formulários de cada etapa.
 */
export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;
  const navigate = useNavigate();



  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    console.log("Finalização concluída!");
    navigate("/DashBoard");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
         <FormPart1/>
        )
      case 2:
        return (
         <FormPart2/>
        )
      case 3:
        return (
          <FormPart3/>
        );
      // case 4:
      //   return (
      //     <Card>
      //       <CardHeader>
      //         <CardTitle>teoricamete o revisar</CardTitle>
      //       </CardHeader>
      //     </Card>
      //   );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-muted p-6">
      <div className="w-full max-w-md flex items-center justify-center">
        <Card className="w-[650px]">
          <CardHeader>
            <CardTitle>
              Configuração Inicial - Passo {currentStep} de {totalSteps}
            </CardTitle>
            <CardDescription>
              Complete as informações abaixo para finalizar seu cadastro
            </CardDescription>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          <CardContent className="space-y-6 w-[600px]">
            {renderStep()}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Anterior
              </Button>
              {currentStep === totalSteps ? (
                <Button
                  onClick={handleFinish}
                  className="bg-green-800 hover:bg-green-700"
                >
                  Finalizar
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="bg-green-800 hover:bg-green-700"
                >
                  Próximo
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
