
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Upload, Download, LogOut, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { members } from "@/data/mockMembers";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("geral");

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Sessão encerrada",
        description: "Você foi desconectado com sucesso",
      });
      
      navigate("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      toast({
        title: "Erro ao encerrar sessão",
        description: "Ocorreu um erro ao tentar desconectar. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleExportMembers = () => {
    const headers = "ID,Número de Registro,Nome Completo,CPF,Profissão,Cidade,Estado,Status,Data de Nascimento\n";
    const csvData = members.map(member => 
      `${member.id},${member.registrationNumber},"${member.fullName}",${member.cpf},${member.profession || ''},${member.city || ''},${member.state_address || ''},${member.status},${member.birthDate}`
    ).join("\n");

    const blob = new Blob([headers + csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'membros_sindicato.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Exportação concluída",
      description: "Os dados dos membros foram exportados com sucesso",
    });
  };

  const handleImportData = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,.xlsx,.xls,.mdb,.accdb';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        toast({
          title: "Arquivo recebido",
          description: `O arquivo ${file.name} será processado. Esta é uma simulação.`,
        });
      }
    };
    input.click();
  };

  return (
    <PageLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Configurações</h1>
        <p className="text-gray-600 mb-6">Customize as configurações do sistema</p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 w-full max-w-md">
            <TabsTrigger value="geral">Geral</TabsTrigger>
            <TabsTrigger value="entidade">Entidade</TabsTrigger>
            <TabsTrigger value="inss">INSS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="geral" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-primary" />
                    <Download className="h-5 w-5 text-primary" />
                    Importar ou Exportar Sócios
                  </CardTitle>
                  <CardDescription>
                    Importe ou exporte dados dos sócios
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <p className="text-sm text-gray-500">
                    Ferramenta para importar ou exportar dados completos dos sócios cadastrados no sistema, incluindo informações pessoais e de status.
                  </p>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button onClick={handleImportData} variant="outline" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Importar
                  </Button>
                  <Button onClick={handleExportMembers} variant="default" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Exportar
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="shadow-md bg-red-50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <LogOut className="h-5 w-5" />
                    Sair do Sistema
                  </CardTitle>
                  <CardDescription className="text-red-600/80">
                    Encerrar sessão atual
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <p className="text-sm text-red-600/70">
                    Ao sair, você precisará fazer login novamente para acessar o sistema.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleLogout} variant="destructive" className="w-full">
                    Sair
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="entidade" className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Dados da Entidade</CardTitle>
                <CardDescription>Informações sobre a entidade sindical</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <img 
                    src="/lovable-uploads/4a6a72ca-9155-4ca8-898c-d564c88844ad.png" 
                    alt="Configuração de entidade" 
                    className="w-full max-w-3xl mx-auto border rounded-lg shadow-sm" 
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Tela de configuração dos dados da entidade sindical
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inss" className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Configurações do INSS</CardTitle>
                <CardDescription>Parâmetros para requisições ao INSS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <img 
                    src="/lovable-uploads/980b8e44-9e54-4ebe-b94a-361951d5528a.png" 
                    alt="Configuração de INSS" 
                    className="w-full max-w-3xl mx-auto border rounded-lg shadow-sm" 
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Configurações especiais para requisições de INSS
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Gerenciamento de Senhas</CardTitle>
                <CardDescription>Configuração de senhas do sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <img 
                    src="/lovable-uploads/51475ea2-9049-4b8f-a12e-4bb249f81b34.png" 
                    alt="Gerenciamento de senhas" 
                    className="w-full max-w-3xl mx-auto border rounded-lg shadow-sm" 
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Tela de manutenção de senhas do sistema
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Settings;
