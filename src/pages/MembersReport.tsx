
import React, { useState } from "react";
import { DevelopmentCard } from "@/components/common/DevelopmentCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileSpreadsheet, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { members } from "@/data/mockMembers";
import { MemberStatusBadge } from "@/components/members/MemberStatusBadge";
import { useToast } from "@/components/ui/use-toast";

export default function MembersReport() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { toast } = useToast();
  
  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (member.cpf && member.cpf.includes(searchTerm));
    
    const matchesStatus = statusFilter === "all" || member.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleExportExcel = () => {
    // Em um sistema real, usaríamos uma biblioteca como exceljs ou xlsx
    toast({
      title: "Exportando relatório",
      description: "Gerando arquivo Excel com dados dos membros...",
    });
    
    setTimeout(() => {
      toast({
        title: "Exportação concluída",
        description: "O relatório foi exportado com sucesso",
      });
      
      // Simulação básica de download CSV (em um sistema real seria um .xlsx)
      const headers = "ID,Número de Registro,Nome Completo,CPF,Profissão,Cidade,Estado,Status,Data de Nascimento\n";
      const csvData = filteredMembers.map(member => 
        `${member.id},${member.registrationNumber},"${member.fullName}",${member.cpf},${member.profession || ''},${member.city || ''},${member.state_address || ''},${member.status},${member.birthDate}`
      ).join("\n");

      const blob = new Blob([headers + csvData], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'relatorio_membros.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Relatório de Membros</h1>

        <Card className="shadow-md mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5 text-primary" />
              Dados dos Associados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar membro..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select
                    value={statusFilter}
                    onValueChange={setStatusFilter}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filtrar por status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os status</SelectItem>
                      <SelectItem value="active">Ativos</SelectItem>
                      <SelectItem value="inactive">Inativos</SelectItem>
                      <SelectItem value="suspended">Suspensos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={handleExportExcel} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Exportar Excel
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nº Registro</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>CPF</TableHead>
                    <TableHead>Cidade</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMembers.length > 0 ? (
                    filteredMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="font-medium">{member.registrationNumber}</TableCell>
                        <TableCell>{member.fullName}</TableCell>
                        <TableCell>{member.cpf}</TableCell>
                        <TableCell>{member.city || "-"}</TableCell>
                        <TableCell>
                          <MemberStatusBadge status={member.status} />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        Nenhum membro encontrado.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
