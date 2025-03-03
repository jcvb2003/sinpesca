
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";

interface RegistrationInfoSectionProps {
  member?: Member | null;
}

export function RegistrationInfoSection({ member }: RegistrationInfoSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Informações de Registro</h3>
      
      <div className="space-y-2">
        <Label htmlFor="registrationNumber">Número de Registro</Label>
        <Input
          id="registrationNumber"
          placeholder="Ex: 202301"
          className="w-full"
          defaultValue={member?.registrationNumber}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="registrationDate">Data de Cadastro</Label>
        <div className="relative">
          <Input
            id="registrationDate"
            placeholder="dd/mm/aaaa"
            className="w-full pl-10"
            defaultValue={member?.joinDate ? new Date(member.joinDate).toISOString().split('T')[0] : ''}
            type="date"
          />
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="location">Localidade</Label>
        <Input
          id="location"
          placeholder="Ex: São Paulo, SP"
          className="w-full"
          defaultValue={member?.city ? `${member.city}, ${member.state_address}` : ''}
        />
      </div>
    </div>
  );
}
