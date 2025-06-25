"use client";
import * as React from "react";
import { format, isValid, parse } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Props para o componente DatePickerNoCalendar
 * @property {Date} [selected] - Data selecionada (opcional)
 * @property {(date?: Date) => void} [onSelect] - Callback ao selecionar uma data
 */
type Props = {
  selected?: Date;
  onSelect?: (date?: Date) => void;
};

// Array de meses (01 a 12)
const months = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);

/**
 * Retorna os dias válidos para um determinado mês e ano
 * @param {string} month - Mês selecionado
 * @param {string} year - Ano selecionado
 * @returns {string[]} - Array de dias válidos
 */
function getDaysInMonth(month: string, year: string): string[] {
  const m = parseInt(month, 10);
  const y = parseInt(year, 10) || new Date().getFullYear();
  if (!m) return [];
  const daysInMonth = new Date(y, m, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
}

// Array de anos de 1950 até o ano atual
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) =>
  String(1950 + i)
);

/**
 * Componente de DatePicker sem calendário, apenas selects para dia, mês e ano
 * @param {Props} props - Propriedades do componente
 */
export function DatePickerNoCalendar({ selected, onSelect }: Props) {
  // Estado local para armazenar dia, mês e ano selecionados
  const [date, setDate] = React.useState({
    day: "",
    month: "",
    year: "",
  });
  // Estado para mensagem de erro
  const [error, setError] = React.useState("");

  // Atualiza o estado local se a prop selected mudar
  React.useEffect(() => {
    if (selected) {
      setDate({
        day: format(selected, "dd"),
        month: format(selected, "MM"),
        year: format(selected, "yyyy"),
      });
    }
  }, [selected]);

  /**
   * Manipula mudanças nos selects de dia, mês e ano
   * @param {"day" | "month" | "year"} field - Campo alterado
   * @param {string} value - Novo valor selecionado
   */
  const handleChange = (field: "day" | "month" | "year", value: string) => {
    if (field === "day" && !date.month) {
      setError("Selecione o mês primeiro");
      onSelect?.(undefined);
      return;
    }

    const newDate = { ...date, [field]: value };
    setDate(newDate);

    const { day, month, year } = newDate;
    // Se todos os campos estiverem preenchidos, tenta montar a data
    if (day && month && year) {
      const parsed = parse(`${year}-${month}-${day}`, "yyyy-MM-dd", new Date());
      if (isValid(parsed)) {
        setError("");
        onSelect?.(parsed); // Chama callback com a data válida
      } else {
        setError("Data inválida");
        onSelect?.(undefined); // Chama callback com undefined se inválida
      }
    } else {
      setError("Selecione dia, mês e ano");
      onSelect?.(undefined);
    }
  };

  return (
    <Popover>
      {/* Botão que abre o popover */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[auto] justify-start text-left font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? (
            format(selected, "dd/MM/yyyy")
          ) : (
            <span>Selecionar data</span>
          )}
        </Button>
      </PopoverTrigger>
      {/* Conteúdo do popover: selects para dia, mês e ano */}
      <PopoverContent className="w-auto p-3">
        <div className="flex gap-2">
          {/* Select de dia */}
          <Select
            value={date.day}
            onValueChange={(v) => handleChange("day", v)}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Dia" />
            </SelectTrigger>
            <SelectContent>
              {getDaysInMonth(date.month, date.year).map((d: string) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* Select de mês */}
          <Select
            value={date.month}
            onValueChange={(v) => handleChange("month", v)}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

           <Select
            value={date.year}
            onValueChange={(v) => handleChange("year", v)}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

        </div>
        {/* Mensagem fixa para instrução */}

        {/* Exibe mensagem de erro, se houver */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </PopoverContent>
    </Popover>
  );
}
