import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerNoCalendar } from "../DatePickerNoCalendar";
import { useState } from "react";

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
            <DatePickerNoCalendar selected={date} onSelect={setDate} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="id">Idade:</Label>
            <Input id="id" placeholder="Sua idade" disabled />
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
            <Input id="city" placeholder="CEP" />
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
    </div>
  );
};
