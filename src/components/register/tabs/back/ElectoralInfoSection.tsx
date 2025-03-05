
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Member } from "@/types/member";

interface ElectoralInfoSectionProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function ElectoralInfoSection({ member, formData, onInputChange }: ElectoralInfoSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-2">
        <Label htmlFor="electoralZone">Zona</Label>
        <Input
          id="electoralZone"
          placeholder="Zona eleitoral"
          className="w-full"
          value={formData.electoralZone || ''}
          onChange={(e) => onInputChange('electoralZone', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="electoralSection">Seção</Label>
        <Input
          id="electoralSection"
          placeholder="Seção eleitoral"
          className="w-full"
          value={formData.electoralSection || ''}
          onChange={(e) => onInputChange('electoralSection', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="caepf">CAEPF</Label>
        <Input
          id="caepf"
          placeholder="CAEPF"
          className="w-full"
          value={formData.caepf || ''}
          onChange={(e) => onInputChange('caepf', e.target.value)}
        />
      </div>
    </div>
  );
}
