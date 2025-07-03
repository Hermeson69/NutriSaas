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
import {LoadingRedirect} from "@/components/loading-redirect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

interface LoginFormProps extends React.ComponentPropsWithoutRef<"div"> {
  onToggleForm: () => void;
}

export function LoginForm({ 
  className,
  onToggleForm,
  ...props
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();

  const [redirecting, setRedirecting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await login({ email, password }); // envia para o useAuth
    if (user) {
      setRedirecting(true);
    }
  };

  if (redirecting) {
    return <LoadingRedirect />;
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Bem-Vindo(a)</CardTitle>
          <CardDescription className="font-sans">
            Login para nosso sistema integrado de assistencia a saúde.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
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
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-green-800"
                    >
                      Esqueceu sua senha?
                    </a>
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
                {error && (
                  <div className="text-red-600 text-sm">{error}</div>
                )}
                <Button
                onClick={handleSubmit}
                  type="submit"
                  className="w-full bg-green-800 hover:bg-green-700"
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>
              </div>
              
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full" type="button">
                  {/* ... SVG Apple ... */}
                  Login with Apple
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  {/* ... SVG Google ... */}
                  Login with Google
                </Button>
              </div>
              
              <div className="text-center text-sm">
                Não tem uma conta?{" "}
                <button
                  type="button"
                  onClick={onToggleForm}
                  className="underline underline-offset-4 text-green-800 hover:text-green-600"
                >
                  Cadastre-se
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        Olhe antes de continuar, tenha confirme os<Link to={"#"}>
        Terms of Service
        </Link>{" "}
        e <Link to={"#"}>
       Privacy Policy.
        </Link>{" "}
      </div>
    </div>
  );
}
