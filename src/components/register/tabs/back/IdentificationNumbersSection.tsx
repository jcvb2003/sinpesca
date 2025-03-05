
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Member } from "@/types/member";

interface IdentificationNumbersSectionProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function IdentificationNumbersSection({ member, formData, onInputChange }: IdentificationNumbersSectionProps) {
  // The uppercase conversion will be handled by the RegisterForm component
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-2">
        <Label htmlFor="pis">PIS</Label>
        <Input
          id="pis"
          placeholder="Número do PIS"
          className="w-full"
          value={formData.pis || ''}
          onChange={(e) => onInputChange('pis', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="cei">CEI</Label>
        <Input
          id="cei"
          placeholder="CEI"
          className="w-full"
          value={formData.cei || ''}
          onChange={(e) => onInputChange('cei', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="nit">NIT</Label>
        <Input
          id="nit"
          placeholder="NIT"
          className="w-full"
          value={formData.nit || ''}
          onChange={(e) => onInputChange('nit', e.target.value)}
        />
      </div>
    </div>
  );
}
