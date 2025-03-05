
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";

interface RegistrationInfoSectionProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function RegistrationInfoSection({ member, formData, onInputChange }: RegistrationInfoSectionProps) {
  const [locations, setLocations] = useState<string[]>([]);
  
  // Load locations from localStorage
  useEffect(() => {
    const savedLocations = localStorage.getItem('systemLocations');
    if (savedLocations) {
      try {
        setLocations(JSON.parse(savedLocations));
      } catch (error) {
        console.error('Error parsing saved locations:', error);
      }
    }
  }, []);

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
        {locations.length > 0 ? (
          <Select 
            value={formData.birthplace || ''}
            onValueChange={(value) => onInputChange('birthplace', value)}
          >
            <SelectTrigger id="location" className="w-full">
              <SelectValue placeholder="Selecione a localidade" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location, index) => (
                <SelectItem key={index} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <Input
            id="location"
            placeholder="Ex: RIO ARATICU"
            className="w-full"
            value={formData.birthplace || ''}
            onChange={(e) => onInputChange('birthplace', e.target.value)}
          />
        )}
      </div>
    </div>
  );
}
