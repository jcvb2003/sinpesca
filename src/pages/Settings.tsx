
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Upload, Download, LogOut, Database, Server, Key } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EntityForm } from "@/components/settings/EntityForm";
import { ParametersForm } from "@/components/settings/ParametersForm";
import { PasswordForm } from "@/components/settings/PasswordForm";
import { LocationsForm } from "@/components/settings/LocationsForm";
import { useState } from "react";
import { Member, DbMember, dbMemberToMember } from "@/types/member";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isExporting, setIsExporting] = useState(false);

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

  const handleExportMembers = async () => {
    setIsExporting(true);
    try {
      // Fetch members from Supabase
      const { data, error } = await supabase
        .from('members')
        .select('*');

      if (error) {
        throw error;
      }

      if (!data || data.length === 0) {
        toast({
          title: "Sem dados para exportar",
          description: "Não há sócios cadastrados para exportar.",
          variant: "destructive",
        });
        return;
      }

      // Convert DB members to frontend format
      const members: Member[] = data.map(item => dbMemberToMember(item as DbMember));

      // Create CSV headers with all available fields
      const headers = "ID,Número de Registro,Nome Completo,CPF,Profissão,Cidade,Estado,Status,Data de Nascimento,Apelido,Nome do Pai,Nome da Mãe,Nacionalidade,Naturalidade,Local de Trabalho,Email,Endereço,Número,Bairro,CEP,Telefone,Data de Adesão,Localidade,Observações\n";
      
      // Create CSV data rows
      const csvData = members.map(member => 
        `${member.id || ''},${member.registrationNumber || ''},"${member.fullName || ''}",${member.cpf || ''},${member.profession || ''},${member.city || ''},${member.state_address || ''},${member.status || ''},${member.birthDate || ''},${member.nickname || ''},"${member.fatherName || ''}","${member.motherName || ''}",${member.nationality || ''},${member.birthplace || ''},${member.workplace || ''},${member.email || ''},"${member.street || ''}",${member.number || ''},${member.district || ''},${member.zipCode || ''},${member.phone || ''},${member.joinDate || ''},${member.location || ''},"${member.observations || ''}"`
      ).join("\n");

      // Create a Blob with UTF-8 encoding
      const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), headers + csvData], { type: 'text/csv;charset=utf-8;' });
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'socios_cadastrados.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Exportação concluída",
        description: "Os dados dos sócios foram exportados com sucesso",
      });
    } catch (error) {
      console.error("Erro ao exportar membros:", error);
      toast({
        title: "Erro na exportação",
        description: "Não foi possível exportar os dados dos sócios.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
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

        <Tabs defaultValue="data" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="data">Dados</TabsTrigger>
            <TabsTrigger value="entity">Entidade</TabsTrigger>
            <TabsTrigger value="parameters">Parâmetros</TabsTrigger>
            <TabsTrigger value="passwords">Senhas</TabsTrigger>
            <TabsTrigger value="logout">Sair</TabsTrigger>
          </TabsList>

          <TabsContent value="data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-primary" />
                    <Download className="h-5 w-5 text-primary" />
                    Importar ou Exportar
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
                  <Button 
                    onClick={handleExportMembers} 
                    variant="default" 
                    className="flex items-center gap-2"
                    disabled={isExporting}
                  >
                    {isExporting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                        Exportando...
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        Exportar
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Localidades
                  </CardTitle>
                  <CardDescription>
                    Cadastre as localidades utilizadas no sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <p className="text-sm text-gray-500">
                    Gerencie as localidades que serão disponíveis para seleção no cadastro de sócios.
                  </p>
                </CardContent>
                <CardFooter>
                  <LocationsForm />
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="entity">
            <EntityForm />
          </TabsContent>

          <TabsContent value="parameters">
            <ParametersForm />
          </TabsContent>

          <TabsContent value="passwords">
            <PasswordForm />
          </TabsContent>

          <TabsContent value="logout">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Settings;
