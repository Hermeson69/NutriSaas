import { Upload } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Label } from "../ui/label"

/**
 * Componente de formulário responsável pela terceira etapa do cadastro,
 * onde o usuário pode informar dados médicos, como restrições médicas
 * e realizar o upload de arquivos relacionados à saúde.
 *
 * @component
 *
 * @returns {JSX.Element} Um card contendo campos para seleção de restrição médica
 *                       e upload de dados médicos.
 *
 * @example
 * <FormPart3 />
 */
export const FormPart3 = () => {
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
    )
}