
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

export function UserMenu() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userData, setUserData] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserData(user);
      } catch (e) {
        console.error("Erro ao carregar dados do usuário");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    toast({
      title: "Sessão encerrada",
      description: "Você foi desconectado com sucesso",
    });
    navigate("/login");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  // Obter iniciais do email para avatar
  const getInitials = (email: string) => {
    if (!email) return "U";
    const parts = email.split("@");
    return parts[0].charAt(0).toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" alt="Foto de perfil" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userData ? getInitials(userData.email) : "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        {userData && (
          <DropdownMenuLabel className="font-normal text-xs truncate">
            {userData.email}
          </DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSettings}>
          <Settings className="mr-2 h-4 w-4" />
          <span>Configurações</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
