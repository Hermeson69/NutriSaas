import { useState } from "react";
import { cn } from "@/lib/utils";
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
import { useAuth } from "@/hooks/useAuth";
import type { UserCreate } from "@/types/userTypes";

interface SignUpFormProps extends React.ComponentPropsWithoutRef<"div"> {
  onToggleForm: () => void;
}

export function SignUpForm({
  className,
  onToggleForm,
  ...props
}: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp, loading, error } = useAuth();
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (password !== confirmPassword) {
      setFormError("As senhas não coincidem.");
      return;
    }

    const userData: UserCreate = {
      name,
      email,
      password,
    };

    const result = await signUp(userData);
    if (!result) {
      setFormError("Erro ao cadastrar. Tente novamente.");
      return;
    }

    // Aqui você pode redirecionar ou mostrar mensagem de sucesso
    // Exemplo: setRedirecting(true);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Criar Conta</CardTitle>
          <CardDescription>
            Cadastre-se para acessar nosso sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Fulano de tal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  </div>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="********"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {(formError || error) && (
                  <div className="text-red-600 text-sm text-center">
                    {formError || error}
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-green-800 hover:bg-green-700"
                  disabled={loading}
                >
                  {loading ? "Cadastrando..." : "Cadastrar-se"}
                </Button>
              </div>
              <div className="text-center text-sm">
                Tem uma conta?{" "}
                <button
                  type="button"
                  onClick={onToggleForm}
                  className="underline underline-offset-4 text-green-800 hover:text-green-600"
                >
                  Entrar
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
