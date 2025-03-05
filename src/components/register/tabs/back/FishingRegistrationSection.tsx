
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";

interface FishingRegistrationSectionProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function FishingRegistrationSection({ member, formData, onInputChange }: FishingRegistrationSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-2">
        <Label htmlFor="rgpNumber">N° RGP</Label>
        <Input
          id="rgpNumber"
          placeholder="Número RGP"
          className="w-full"
          value={formData.rgpNumber || ''}
          onChange={(e) => onInputChange('rgpNumber', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="rgpIssueDate">Emissão RGP</Label>
        <div className="relative">
          <Input
            id="rgpIssueDate"
            placeholder="dd/mm/aaaa"
            type="date"
            className="w-full pl-10"
            value={formData.rgpIssueDate || ''}
            onChange={(e) => onInputChange('rgpIssueDate', e.target.value)}
          />
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="rgpState">UF</Label>
        <Input
          id="rgpState"
          placeholder="UF"
          className="w-full"
          value={formData.rgpState || ''}
          onChange={(e) => onInputChange('rgpState', e.target.value)}
        />
      </div>
    </div>
  );
}
