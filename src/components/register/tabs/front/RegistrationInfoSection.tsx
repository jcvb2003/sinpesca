
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";

interface RegistrationInfoSectionProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function RegistrationInfoSection({ member, formData, onInputChange }: RegistrationInfoSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Informações de Registro</h3>
      
      <div className="space-y-2">
        <Label htmlFor="registrationNumber">Número de Registro</Label>
        <Input
          id="registrationNumber"
          placeholder="Ex: 202301"
          className="w-full"
          value={formData.registrationNumber || ''}
          onChange={(e) => onInputChange('registrationNumber', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="joinDate">Data de Cadastro</Label>
        <div className="relative">
          <Input
            id="joinDate"
            placeholder="dd/mm/aaaa"
            className="w-full pl-10"
            value={formData.joinDate || ''}
            onChange={(e) => onInputChange('joinDate', e.target.value)}
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
          value={formData.city ? `${formData.city}, ${formData.state_address || ''}` : ''}
          onChange={(e) => {
            // This is just for display - actual city and state are updated in ContactAddressSection
            // We don't want to directly update from this field
          }}
        />
      </div>
    </div>
  );
}
