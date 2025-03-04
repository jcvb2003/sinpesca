
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";
import { UF_OPTIONS } from "../../utils/constants";

interface PersonalDocumentsSectionProps {
  member?: Member | null;
}

export function PersonalDocumentsSection({ member }: PersonalDocumentsSectionProps) {
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
            defaultValue={member?.cpf}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            placeholder="Número do título de eleitor"
            className="w-full"
            defaultValue={member?.title}
          />
        </div>
      </div>
    </div>
  );
}
