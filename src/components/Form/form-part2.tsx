import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import { DatePickerNoCalendar } from "../DatePickerNoCalendar";
/**
 * Componente de formulário responsável pela segunda etapa do cadastro de informações do sistema.
 *
 * Exibe campos para o usuário informar dados corporais, como peso, altura, IMC, índice de atividade física,
 * índice de gordura corporal, restrições alimentares, nível de experiência com treino e objetivo (meta).
 *
 * @component
 * @returns {JSX.Element} Elemento JSX contendo os campos do formulário para preenchimento dos dados corporais.
 */
export const FormPart2 = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [goal, setGoal] = useState<string | null>(null);
  const [metrics, setMetrics] = useState(false);

  const handleMwtricChange = () => {
    setMetrics(false);
  };
  return (
    <div>
      <CardHeader>
        <CardTitle>Cadastro De Informações Do Sistema</CardTitle>
        <CardDescription>
          Dados Corporais - Informe seus dados corporais
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
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
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid gap-2">
            <Label htmlFor="bodyFat">Índice de gordura corporal</Label>
            <Input id="bodyFat" placeholder="Clique aqui" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="activityLevel">Índice de atividade física:</Label>
            <Select required>
              <SelectTrigger className="w-[auto]">
                <SelectValue placeholder="Índice de atividade física" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Baixa</SelectItem>
                <SelectItem value="medium">Media</SelectItem>
                <SelectItem value="higth">Alta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="metrics">Métricas circunferências:</Label>
            <div className="relative">
              <Button
          type="button"
          variant="outline"
          onClick={() => setMetrics((prev) => !prev)}
          aria-expanded={metrics}
          aria-controls="metrics-fields"
          className="w-full"
              >
          {metrics ? "Ocultar métricas" : "Clique para preencher métricas"}
              </Button>
              {metrics && (
          <div
            id="metrics-fields"
            className="absolute z-50 mt-2 left-0 w-full bg-white w-full border rounded-md shadow-lg p-4"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="waist">Cintura:</Label>
                <Input id="waist" placeholder="Sua cintura em cm" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hip">Quadril:</Label>
                <Input id="hip" placeholder="Seu quadril em cm" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="neck">Pescoço:</Label>
                <Input id="neck" placeholder="Seu pescoço em cm" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
            </div>
          </div>
              )}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="metrics">Métricas circunferências:</Label>
            <div className="relative">
              <Button
                type="button"
                variant="outline"
                className="w-full"
              >
                Clique para preencher métricas
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="dietRestriction">Restrição alimentar</Label>
            <Select required>
              <SelectTrigger className="w-[auto]">
                <SelectValue placeholder="Selecione uma restrição alimentar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lactose">Lactose</SelectItem>
                <SelectItem value="gluten">Glúten</SelectItem>
                <SelectItem value="soja">Soja</SelectItem>
                <SelectItem value="ovo">Ovo</SelectItem>
                <SelectItem value="amendoim">Amendoim</SelectItem>
                <SelectItem value="castanhas">Castanhas</SelectItem>
                <SelectItem value="frutos-do-mar">Frutos do Mar</SelectItem>
                <SelectItem value="peixe">Peixe</SelectItem>
                <SelectItem value="milho">Milho</SelectItem>
                <SelectItem value="trigo">Trigo</SelectItem>
                <SelectItem value="nenhuma">Nenhuma</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="trainingExperience">
              Nível de experiência com treino:
            </Label>
            <Select required>
              <SelectTrigger className="w-[auto]">
                <SelectValue placeholder="Selecione o nível de experiência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="iniciante">Iniciante</SelectItem>
                <SelectItem value="intermediario">Intermediário</SelectItem>
                <SelectItem value="avancado">Avançado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label htmlFor="birthDate">
                Data De Avaliação: <span className="text-red-600">*</span>
              </Label>
              <DatePickerNoCalendar selected={date} onSelect={setDate} />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="buget">Orçamento mensal:</Label>
            <Input id="buget" placeholder="Seu orçamento mensal R$" />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="goal">Qual sua meta?</Label>
          <div className="flex space-x-2">
            <Button
              variant={goal === "perda" ? "default" : "outline"}
              className={`${goal === "perda" ? "bg-green-800 text-white" : ""}`}
              onClick={() => setGoal("perda")}
            >
              Perda de Peso
            </Button>
            <Button
              variant={goal === "massa" ? "default" : "outline"}
              className={`${goal === "massa" ? "bg-green-800 text-white" : ""}`}
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
