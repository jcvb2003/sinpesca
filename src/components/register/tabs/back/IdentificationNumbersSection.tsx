
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Member } from "@/types/member";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UF_OPTIONS } from "../../utils/constants";

interface IdentificationNumbersSectionProps {
  member?: Member | null;
}

export function IdentificationNumbersSection({ member }: IdentificationNumbersSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Números de Identificação</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="pis">PIS</Label>
          <Input
            id="pis"
            placeholder="Número do PIS"
            className="w-full"
            defaultValue={member?.pis}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cei">CEI</Label>
          <Input
            id="cei"
            placeholder="CEI"
            className="w-full"
            defaultValue={member?.cei}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="nit">NIT</Label>
          <Input
            id="nit"
            placeholder="NIT"
            className="w-full"
            defaultValue={member?.nit}
          />
        </div>
      </div>
    </div>
  );
}
