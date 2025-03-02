
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de autenticação - em um ambiente real usaríamos Supabase ou outro backend
    setTimeout(() => {
      if (email && password) {
        // Simulando login bem-sucedido
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify({ email }));
        toast({
          title: "Login realizado com sucesso",
          description: "Bem-vindo de volta ao sistema do Sindicato de Pescadores",
        });
        navigate("/");
      } else {
        toast({
          title: "Erro no login",
          description: "Por favor, verifique seu email e senha",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
            <Fish className="h-8 w-8 text-blue-700" />
          </div>
          <CardTitle className="text-2xl">Sindicato de Pescadores</CardTitle>
          <CardDescription>Entre com suas credenciais para acessar o sistema</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email ou Usuário</Label>
              <Input 
                id="email" 
                type="text" 
                placeholder="seu.email@exemplo.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Sua senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Autenticando..." : "Entrar"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
