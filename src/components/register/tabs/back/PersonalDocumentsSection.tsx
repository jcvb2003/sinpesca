
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";
import { UF_OPTIONS } from "../../utils/constants";

interface PersonalDocumentsSectionProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function PersonalDocumentsSection({ member, formData, onInputChange }: PersonalDocumentsSectionProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="maritalStatus">Estado Civil</Label>
          <Select 
            value={formData.maritalStatus || ""}
            onValueChange={(value) => onInputChange('maritalStatus', value)}
          >
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
          <Select 
            value={formData.literate === true ? "sim" : formData.literate === false ? "nao" : ""}
            onValueChange={(value) => onInputChange('literate', value)}
          >
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
          <Select 
            value={formData.gender || ""}
            onValueChange={(value) => onInputChange('gender', value)}
          >
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
            value={formData.rg || ''}
            onChange={(e) => onInputChange('rg', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="rgUf">UF RG</Label>
          <Select 
            value={formData.rgUf || ""}
            onValueChange={(value) => onInputChange('rgUf', value)}
          >
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
              value={formData.rgIssueDate || ''}
              onChange={(e) => onInputChange('rgIssueDate', e.target.value)}
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
            value={formData.cpf || ''}
            onChange={(e) => onInputChange('cpf', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="voterTitle">Título</Label>
          <Input
            id="voterTitle"
            placeholder="Número do título de eleitor"
            className="w-full"
            value={formData.voterTitle || ''}
            onChange={(e) => onInputChange('voterTitle', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
