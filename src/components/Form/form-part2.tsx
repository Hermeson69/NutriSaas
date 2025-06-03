import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "../ui/button";

export const FormPart2 = () => {
  const [goal, setGoal] = useState<string | null>(null);
  return (
    <div className="mt-10">
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
            <Input id="imc" placeholder="Seu IMC" disabled />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="activityLevel">Índice de atividade física:</Label>
            <select id="activityLevel" className="w-full p-2 border rounded">
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
          <select id="dietRestriction" className="w-full p-2 border rounded">
            <option value="">Selecione...</option>
            <option value="outra">Outra</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="trainingExperience">
            Nível de experiência com treino:
          </Label>
          <select id="trainingExperience" className="w-full p-2 border rounded">
            <option value="">Selecione...</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="goal">Qual sua meta?</Label>
          <div className="flex space-x-2">
            <Button
              variant={goal === "perda" ? "default" : "outline"}
              className={goal === "perda" ? "bg-green-800 text-white" : ""}
              onClick={() => setGoal("perda")}
            >
              Perda de Peso
            </Button>
            <Button
              variant={goal === "massa" ? "default" : "outline"}
              className={goal === "massa" ? "bg-green-800 text-white" : ""}
              onClick={() => setGoal("massa")}
            >
              Ganhar Massa
            </Button>
          </div>
        </div>
      </CardContent>
    </div>
  );
};
