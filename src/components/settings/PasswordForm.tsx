
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function PasswordForm() {
  const { toast } = useToast();
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (field: string, value: string) => {
    setPasswords(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast({
        title: "Erro",
        description: "A nova senha e a confirmação não coincidem.",
        variant: "destructive",
      });
      return;
    }
    
    if (!passwords.currentPassword) {
      toast({
        title: "Erro",
        description: "A senha atual é obrigatória.",
        variant: "destructive",
      });
      return;
    }
    
    if (passwords.newPassword.length < 6) {
      toast({
        title: "Erro",
        description: "A nova senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Senha atualizada",
      description: "Sua senha foi atualizada com sucesso!"
    });
    
    // Reset form
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return (
    <Card>
      <Tabs defaultValue="password">
        <TabsList className="border-b w-full justify-start rounded-none px-4 pt-2">
          <TabsTrigger value="password">Muda Senha</TabsTrigger>
          <TabsTrigger value="groups">Grupos</TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
        </TabsList>
        
        <CardContent className="p-6">
          <TabsContent value="password" className="mt-0">
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <Label htmlFor="currentPassword">Senha atual</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={passwords.currentPassword}
                  onChange={(e) => handleChange('currentPassword', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="newPassword">Nova senha</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwords.newPassword}
                  onChange={(e) => handleChange('newPassword', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Redigite a nova senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwords.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                />
              </div>
              
              <div className="flex gap-4 justify-end mt-6">
                <Button variant="outline">Fechar</Button>
                <Button onClick={handleSave}>Salvar</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="groups" className="mt-0">
            <div className="min-h-[300px] flex items-center justify-center">
              <p className="text-gray-500">Configurações de grupos estarão disponíveis em breve.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="users" className="mt-0">
            <div className="min-h-[300px] flex items-center justify-center">
              <p className="text-gray-500">Configurações de usuários estarão disponíveis em breve.</p>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
