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
import { DatePickerNoCalendar } from "../DatePickerNoCalendar";
import { useState } from "react";

/**
 * Componente de formulário responsável pela primeira etapa do cadastro de informações do sistema.
 *
 * Exibe campos para preenchimento de dados pessoais básicos, como nome, apelido, sexo, telefone, data de nascimento,
 * idade (calculada automaticamente), endereço (rua, bairro, número, CEP, cidade e estado).
 *
 * @component
 * @example
 * <FormPart1 />
 *
 * @returns {JSX.Element} Elemento JSX contendo o formulário de dados pessoais.
 */
export const FormPart1 = () => {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div>
      <CardHeader>
        <CardTitle>Cadastro De Informações Do Sistema</CardTitle>
        <CardDescription>
          Dados Pessoais - Preencha seus dados pessoais básicos
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 w-full">
        <div className="grid gap-2 w-full">
          <Label htmlFor="name">Nome: <span className="text-red-600">*</span></Label>
          <Input id="name" placeholder="Seu nome" required/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="surname">Apelido:</Label>
            <Input id="surname" placeholder="Seu apelido" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sex">Sexo: <span className="text-red-600">*</span></Label>
            <Select required> 
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sexo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Masculino</SelectItem>
                <SelectItem value="Famale">Femenino</SelectItem>
                <SelectItem value="Other">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="grid gap-2">
            <Label htmlFor="phone">Telefone (DDD): <span className="text-red-600">*</span></Label>
            <Input id="phone" placeholder="(11) 99999-9999" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="birthDate">Data De Nascimento: <span className="text-red-600">*</span></Label>
            <DatePickerNoCalendar selected={date} onSelect={setDate}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="id">Idade:</Label>
            <Input id="id" placeholder="Sua idade" disabled />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="street">Rua: <span className="text-red-600">*</span></Label>
          <Input id="street" placeholder="Sua rua" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="neighborhood">Bairro: <span className="text-red-600">*</span></Label>
            <Input id="neighborhood" placeholder="Seu bairro" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Nº: <span className="text-red-600">*</span></Label>
            <Input id="number" placeholder="Número" required />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="cep">CEP: <span className="text-red-600">*</span></Label>
            <Input id="cep" placeholder="CEP" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="city">Cidade: <span className="text-red-600">*</span></Label>
            <Input id="city" placeholder="Sua cidade" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="state">Estado: <span className="text-red-600">*</span></Label>
            <Input id="state" placeholder="Seu estado" required />
          </div>
        </div>
      </CardContent>
    </div>
  );
};
