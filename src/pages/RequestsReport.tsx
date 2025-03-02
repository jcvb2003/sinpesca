
import React, { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileSpreadsheet, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Dados simulados de requerimentos do INSS
const mockRequests = [
  { id: "1", memberId: "3", memberName: "Ana Paula Santos", requestType: "Aposentadoria Rural", date: "2023-06-15", status: "Em análise" },
  { id: "2", memberId: "1", memberName: "Maria Silva Pereira", requestType: "Auxílio Doença", date: "2023-07-22", status: "Aprovado" },
  { id: "3", memberId: "5", memberName: "Fernanda Costa Lima", requestType: "Pensão por Morte", date: "2023-08-10", status: "Pendente" },
  { id: "4", memberId: "2", memberName: "João Carlos Oliveira", requestType: "Seguro Defeso", date: "2023-09-05", status: "Negado" },
  { id: "5", memberId: "4", memberName: "Roberto Almeida Ferreira", requestType: "Aposentadoria Rural", date: "2023-10-18", status: "Em análise" },
];

const RequestsReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredRequests = mockRequests.filter(
    (request) => 
      request.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requestType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExportExcel = () => {
    // Em um sistema real, usaríamos uma biblioteca como exceljs ou xlsx
    // para gerar um arquivo Excel real. Aqui simulamos apenas o processo.
    toast({
      title: "Exportando relatório",
      description: "Gerando arquivo Excel com os requerimentos do INSS...",
    });
    
    setTimeout(() => {
      toast({
        title: "Exportação concluída",
        description: "O relatório foi exportado com sucesso",
      });
      
      // Simulação básica de download - em um sistema real usaríamos
      // uma biblioteca apropriada para gerar o arquivo Excel
      const headers = "ID,Nome do Membro,Tipo de Requerimento,Data,Status\n";
      const csvData = filteredRequests.map(req => 
        `${req.id},"${req.memberName}",${req.requestType},${req.date},${req.status}`
      ).join("\n");

      const blob = new Blob([headers + csvData], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'relatorio_requerimentos_inss.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Relatório de Requerimentos</h1>

        <Card className="shadow-md mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5 text-primary" />
              Requerimentos do INSS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar requerimento..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button onClick={handleExportExcel} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Exportar Excel
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead>Nome do Membro</TableHead>
                    <TableHead>Tipo de Requerimento</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests.length > 0 ? (
                    filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.id}</TableCell>
                        <TableCell className="font-medium">{request.memberName}</TableCell>
                        <TableCell>{request.requestType}</TableCell>
                        <TableCell>{new Date(request.date).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium 
                            ${request.status === 'Aprovado' ? 'bg-green-100 text-green-800' : ''}
                            ${request.status === 'Em análise' ? 'bg-yellow-100 text-yellow-800' : ''}
                            ${request.status === 'Pendente' ? 'bg-blue-100 text-blue-800' : ''}
                            ${request.status === 'Negado' ? 'bg-red-100 text-red-800' : ''}
                          `}>
                            {request.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        Nenhum requerimento encontrado.
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
};

export default RequestsReport;
