
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Download, FileDown, Filter } from "lucide-react";

const RequestsReport = () => {
  const [status, setStatus] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [date, setDate] = useState<DateRange | undefined>();
  
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Relatório de Solicitações</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="in-progress">Em Andamento</SelectItem>
                  <SelectItem value="completed">Concluído</SelectItem>
                  <SelectItem value="canceled">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="request-type">Tipo de Solicitação</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger id="request-type">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inss">INSS</SelectItem>
                  <SelectItem value="representation">Termo de Representação</SelectItem>
                  <SelectItem value="certificate">Certidão</SelectItem>
                  <SelectItem value="other">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date-range">Período</Label>
              <DatePickerWithRange 
                date={date} 
                setDate={setDate} 
                className="w-full" 
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Aplicar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Resultados</CardTitle>
          <Button variant="outline" className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />
            Exportar CSV
          </Button>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto rounded-md">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">ID</th>
                  <th scope="col" className="px-6 py-3">Tipo</th>
                  <th scope="col" className="px-6 py-3">Membro</th>
                  <th scope="col" className="px-6 py-3">Data</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Responsável</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4">1001</td>
                  <td className="px-6 py-4">INSS</td>
                  <td className="px-6 py-4">João Silva</td>
                  <td className="px-6 py-4">15/05/2023</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Concluído</span>
                  </td>
                  <td className="px-6 py-4">Maria Oliveira</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4">1002</td>
                  <td className="px-6 py-4">Termo de Representação</td>
                  <td className="px-6 py-4">Ana Costa</td>
                  <td className="px-6 py-4">20/05/2023</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Em Andamento</span>
                  </td>
                  <td className="px-6 py-4">Carlos Santos</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">1003</td>
                  <td className="px-6 py-4">Certidão</td>
                  <td className="px-6 py-4">Pedro Alves</td>
                  <td className="px-6 py-4">25/05/2023</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Pendente</span>
                  </td>
                  <td className="px-6 py-4">Fernanda Lima</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestsReport;
