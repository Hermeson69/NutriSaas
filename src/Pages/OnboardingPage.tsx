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

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
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
          <Card>
            <CardHeader>
              <CardTitle>Cadastro De Informações Do Sistema</CardTitle>
              <CardDescription>
                Dados Pessoais - Preencha seus dados pessoais básicos
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 w-full">
              <div className="grid gap-2 w-full">
                <Label htmlFor="name">Nome:</Label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="surname">Apelido:</Label>
                  <Input id="surname" placeholder="Seu apelido" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sex">Sexo:</Label>
                  <Input id="sex" placeholder="Seu sexo" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone (DDD):</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="birthDate">Data De Nascimento:</Label>
                  <Input id="birthDate" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="id">Idade:</Label>
                  <Input id="id" placeholder="Sua idade" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="street">Rua:</Label>
                <Input id="street" placeholder="Sua rua" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="neighborhood">Bairro:</Label>
                  <Input id="neighborhood" placeholder="Seu bairro" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number">Nº:</Label>
                  <Input id="number" placeholder="Número" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cep">CEP:</Label>
                  <Input id="cep" placeholder="Seu CEP" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="city">Cidade:</Label>
                  <Input id="city" placeholder="Sua cidade" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">Estado:</Label>
                  <Input id="state" placeholder="Seu estado" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Cadastro De Informações Do Sistema</CardTitle>
              <CardDescription>
                Dados Pessoais - Preencha seus Dados Corporais -
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 w-full">
              <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2 w-full">
                <Label htmlFor="peso">Peso:</Label>
                <Input id="peso" placeholder="Seu peso" />
              </div>
                <div className="grid gap-2">
                  <Label htmlFor="altura">Altura:</Label>
                  <Input id="altura" placeholder="Sua Altura:" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sex">Sexo:</Label>
                  <Input id="sex" placeholder="Seu sexo" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone (DDD):</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="birthDate">Data De Nascimento:</Label>
                  <Input id="birthDate" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="id">Idade:</Label>
                  <Input id="id" placeholder="Sua idade" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="street">Rua:</Label>
                <Input id="street" placeholder="Sua rua" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="neighborhood">Bairro:</Label>
                  <Input id="neighborhood" placeholder="Seu bairro" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number">Nº:</Label>
                  <Input id="number" placeholder="Número" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cep">CEP:</Label>
                  <Input id="cep" placeholder="Seu CEP" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="city">Cidade:</Label>
                  <Input id="city" placeholder="Sua cidade" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="state">Estado:</Label>
                  <Input id="state" placeholder="Seu estado" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Cadastro De Informações Do Sistema</CardTitle>
              <CardDescription>
                Dados Médicos - Informe seu histórico médico
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="medicalRestriction">
                  Restrição médica (Opcional)
                </Label>
                <select
                  id="medicalRestriction"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Selecione...</option>
                  <option value="outra">Outra</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="medicalFile">Upload de dados médicos</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="medicalFile"
                    className="flex-1 flex items-center justify-center w-full h-10 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-accent"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    <span>Escolha um arquivo</span>
                    <input id="medicalFile" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Cadastro De Informações Do Sistema</CardTitle>
              <CardDescription>
                Dados Corporais - Informe seus dados corporais
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="weight">Peso:</Label>
                  <Input id="weight" placeholder="Seu peso" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="height">Altura:</Label>
                  <Input id="height" placeholder="Sua altura" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="imc">IMC:</Label>
                  <Input id="imc" placeholder="Seu IMC" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="activityLevel">
                    Índice de atividade física:
                  </Label>
                  <select
                    id="activityLevel"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Selecione...</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bodyFat">Índice de gordura corporal</Label>
                <Input id="bodyFat" placeholder="Clique aqui" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dietRestriction">Restrição alimentar</Label>
                <select
                  id="dietRestriction"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Selecione...</option>
                  <option value="outra">Outra</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="trainingExperience">
                  Nível de experiência com treino:
                </Label>
                <select
                  id="trainingExperience"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Selecione...</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="goal">Qual sua meta?</Label>
                <div className="flex space-x-2">
                  <Button variant="outline">Perda de Peso</Button>
                  <Button variant="outline">Ganhar Massa</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
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
