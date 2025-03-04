
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Upload, Download, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { members } from "@/data/mockMembers";
import { supabase } from "@/integrations/supabase/client";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

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
                Exportar CSV
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
      </div>
    </PageLayout>
  );
};

export default Settings;
