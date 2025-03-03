
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";

interface BackTabProps {
  member?: Member | null;
}

export function BackTab({ member }: BackTabProps) {
  const UF_OPTIONS = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT",
    "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="maritalStatus">Estado Civil</Label>
          <Select defaultValue={member?.maritalStatus || ""}>
            <SelectTrigger id="maritalStatus">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solteiro">Solteiro(a)</SelectItem>
              <SelectItem value="casado">Casado(a)</SelectItem>
              <SelectItem value="divorciado">Divorciado(a)</SelectItem>
              <SelectItem value="viuvo">Viúvo(a)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="literate">Alfabetizado</Label>
          <Select defaultValue={member?.literate ? "sim" : "nao"}>
            <SelectTrigger id="literate">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sim">Sim</SelectItem>
              <SelectItem value="nao">Não</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="gender">Sexo</Label>
          <Select defaultValue={member?.gender || ""}>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="feminino">Feminino</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="rg">RG</Label>
          <Input
            id="rg"
            placeholder="Número do RG"
            className="w-full"
            defaultValue={member?.rg}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="rgUf">UF RG</Label>
          <Select defaultValue={member?.rgUf || ""}>
            <SelectTrigger id="rgUf">
              <SelectValue placeholder="Selecione o UF" />
            </SelectTrigger>
            <SelectContent>
              {UF_OPTIONS.map((uf) => (
                <SelectItem key={uf} value={uf}>{uf}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="rgIssueDate">Expedição</Label>
          <div className="relative">
            <Input
              id="rgIssueDate"
              placeholder="dd/mm/aaaa"
              type="date"
              className="w-full pl-10"
              defaultValue={member?.rgIssueDate ? new Date(member.rgIssueDate).toISOString().split('T')[0] : ''}
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            placeholder="000.000.000-00"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            placeholder="Número do título de eleitor"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="electoralZone">Zona</Label>
          <Input
            id="electoralZone"
            placeholder="Zona eleitoral"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="electoralSection">Seção</Label>
          <Input
            id="electoralSection"
            placeholder="Seção eleitoral"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="caepf">CAEPF</Label>
          <Input
            id="caepf"
            placeholder="CAEPF"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="pis">PIS</Label>
          <Input
            id="pis"
            placeholder="Número do PIS"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cei">CEI</Label>
          <Input
            id="cei"
            placeholder="CEI"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="nit">NIT</Label>
          <Input
            id="nit"
            placeholder="NIT"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="rgpNumber">N° RGP</Label>
          <Input
            id="rgpNumber"
            placeholder="Número RGP"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="rgpIssueDate">Emissão RGP</Label>
          <div className="relative">
            <Input
              id="rgpIssueDate"
              placeholder="dd/mm/aaaa"
              className="w-full pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="rgpUf">UF</Label>
          <Input
            id="rgpUf"
            placeholder="UF"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="statusControl">Controle da Situação</Label>
          <Input
            id="statusControl"
            placeholder="Controle da situação"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="status">Situação</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Ativo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="inactive">Inativo</SelectItem>
              <SelectItem value="suspended">Suspenso</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="mpaStatus">Situação no MPA</Label>
          <Input
            id="mpaStatus"
            placeholder="Situação no MPA"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="inssPassword">Senha no INSS</Label>
          <Input
            id="inssPassword"
            placeholder="Senha no INSS"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
