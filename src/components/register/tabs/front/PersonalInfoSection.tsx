
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UF_OPTIONS } from "../../utils/constants";

interface PersonalInfoSectionProps {
  member?: Member | null;
}

export function PersonalInfoSection({ member }: PersonalInfoSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Dados Pessoais</h3>
      
      <div className="space-y-2">
        <Label htmlFor="fullName">Nome Completo</Label>
        <Input
          id="fullName"
          placeholder="Nome completo"
          className="w-full"
          defaultValue={member?.fullName}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="nickname">Apelido</Label>
        <Input
          id="nickname"
          placeholder="Apelido (opcional)"
          className="w-full"
          defaultValue={member?.nickname}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="birthDate">Data de Nascimento</Label>
        <div className="relative">
          <Input
            id="birthDate"
            placeholder="dd/mm/aaaa"
            type="date"
            className="w-full pl-10"
            defaultValue={member?.birthDate ? new Date(member.birthDate).toISOString().split('T')[0] : ''}
          />
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="fatherName">Nome do Pai</Label>
        <Input
          id="fatherName"
          placeholder="Nome do pai"
          className="w-full"
          defaultValue={member?.fatherName}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="motherName">Nome da Mãe</Label>
        <Input
          id="motherName"
          placeholder="Nome da mãe"
          className="w-full"
          defaultValue={member?.motherName}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="nationality">Nacionalidade</Label>
        <Input
          id="nationality"
          placeholder="Ex: Brasileira"
          className="w-full"
          defaultValue={member?.nationality}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="birthplace">Naturalidade</Label>
        <Input
          id="birthplace"
          placeholder="Cidade natal"
          className="w-full"
          defaultValue={member?.birthplace}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="state">Estado (UF)</Label>
        <Select defaultValue={member?.state || ""}>
          <SelectTrigger id="state">
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
        <Label htmlFor="profession">Profissão</Label>
        <Input
          id="profession"
          placeholder="Ex: Advogado, Médico"
          className="w-full"
          defaultValue={member?.profession}
        />
      </div>
    </div>
  );
}
