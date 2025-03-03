
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StateSelect } from "@/components/ui/state-select";

export function FrontTab() {
  const [status, setStatus] = useState("");
  const [rgState, setRgState] = useState("");
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b pb-2">Informações Pessoais</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nome Completo</Label>
          <Input 
            id="fullName" 
            placeholder="Nome completo"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="registrationNumber">Número de Registro</Label>
          <Input 
            id="registrationNumber" 
            placeholder="Número de registro"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="formerRegistrationNumber">Antigo Número de Registro</Label>
          <Input 
            id="formerRegistrationNumber" 
            placeholder="Antigo número de registro (opcional)"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input 
            id="cpf" 
            placeholder="xxx.xxx.xxx-xx"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="rg">RG</Label>
          <Input 
            id="rg" 
            placeholder="xxxx-xxx"
            className="shadow-sm"
          />
        </div>
        
        <StateSelect
          id="rg_state"
          label="UF RG"
          value={rgState}
          onChange={setRgState}
          className="space-y-2"
        />
        
        <div className="space-y-2">
          <Label htmlFor="birthDate">Data de Nascimento</Label>
          <Input 
            id="birthDate" 
            type="date"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="joinDate">Data de Adesão</Label>
          <Input 
            id="joinDate" 
            type="date"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="status" className="shadow-sm">
              <SelectValue placeholder="Selecione o status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="inactive">Inativo</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="suspended">Suspenso</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="observations">Observações</Label>
          <Textarea 
            id="observations" 
            placeholder="Observações adicionais (opcional)"
            className="shadow-sm min-h-[80px]"
          />
        </div>
      </div>
    </div>
  );
}
