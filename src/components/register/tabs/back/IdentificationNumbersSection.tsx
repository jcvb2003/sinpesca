
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Member } from "@/types/member";

interface IdentificationNumbersSectionProps {
  member?: Member | null;
}

export function IdentificationNumbersSection({ member }: IdentificationNumbersSectionProps) {
  return (
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
  );
}
