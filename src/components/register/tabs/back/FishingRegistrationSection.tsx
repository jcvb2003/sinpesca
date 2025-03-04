
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";

interface FishingRegistrationSectionProps {
  member?: Member | null;
}

export function FishingRegistrationSection({ member }: FishingRegistrationSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-2">
        <Label htmlFor="rgpNumber">N° RGP</Label>
        <Input
          id="rgpNumber"
          placeholder="Número RGP"
          className="w-full"
          defaultValue={member?.rgpNumber}
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
            defaultValue={member?.rgpIssueDate ? new Date(member.rgpIssueDate).toISOString().split('T')[0] : ''}
          />
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="rgpUf">UF</Label>
        <Input
          id="rgpUf"
          placeholder="UF"
          className="w-full"
          defaultValue={member?.rgpState}
        />
      </div>
    </div>
  );
}
