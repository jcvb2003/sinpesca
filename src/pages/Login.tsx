
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AuthError } from "@supabase/supabase-js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      let response;
      
      if (isSignUp) {
        // Register new user
        response = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            }
          }
        });
      } else {
        // Login existing user
        response = await supabase.auth.signInWithPassword({
          email,
          password
        });
      }

      if (response.error) {
        throw response.error;
      }

      if (isSignUp && response.data?.user) {
        toast({
          title: "Cadastro realizado com sucesso",
          description: "Por favor, verifique seu email para confirmar o cadastro.",
        });
        setIsSignUp(false);
      } else if (response.data?.user) {
        toast({
          title: "Login realizado com sucesso",
          description: "Bem-vindo de volta ao sistema do Sindicato de Pescadores",
        });
        navigate("/");
      }
    } catch (error) {
      const authError = error as AuthError;
      let errorMessage = "Erro ao processar sua solicitação";
      
      if (authError.message === "Invalid login credentials") {
        errorMessage = "Credenciais inválidas. Verifique seu email e senha.";
      } else if (authError.message.includes("Email")) {
        errorMessage = "Formato de email inválido ou não encontrado.";
      } else if (authError.message.includes("Password")) {
        errorMessage = "A senha deve ter pelo menos 6 caracteres.";
      }
      
      toast({
        title: isSignUp ? "Erro no cadastro" : "Erro no login",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
            <Fish className="h-8 w-8 text-blue-700" />
          </div>
          <CardTitle className="text-2xl">Sindicato de Pescadores</CardTitle>
          <CardDescription>
            {isSignUp 
              ? "Crie sua conta para acessar o sistema" 
              : "Entre com suas credenciais para acessar o sistema"}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleAuth}>
          <CardContent className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input 
                  id="fullName" 
                  type="text" 
                  placeholder="Seu nome completo" 
                  value={fullName} 
                  onChange={(e) => setFullName(e.target.value)} 
                  required 
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
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
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading 
                ? "Processando..." 
                : isSignUp 
                  ? "Cadastrar" 
                  : "Entrar"}
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              className="w-full text-sm"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp 
                ? "Já possui uma conta? Faça login" 
                : "Não possui uma conta? Cadastre-se"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
