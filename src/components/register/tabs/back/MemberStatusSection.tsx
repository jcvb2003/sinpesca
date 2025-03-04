
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Member } from "@/types/member";

interface MemberStatusSectionProps {
  member?: Member | null;
}

export function MemberStatusSection({ member }: MemberStatusSectionProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="statusControl">Controle da Situação</Label>
          <Input
            id="statusControl"
            placeholder="Controle da situação"
            className="w-full"
            defaultValue={member?.statusControl}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="status">Situação</Label>
          <Select defaultValue={member?.status || "active"}>
            <SelectTrigger>
              <SelectValue placeholder="Ativo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="inactive">Inativo</SelectItem>
              <SelectItem value="suspended">Suspenso</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="mpaStatus">Situação no MPA</Label>
          <Input
            id="mpaStatus"
            placeholder="Situação no MPA"
            className="w-full"
            defaultValue={member?.mpaStatus}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="inssPassword">Senha no INSS</Label>
          <Input
            id="inssPassword"
            placeholder="Senha no INSS"
            className="w-full"
            defaultValue={member?.inssPassword}
          />
        </div>
      </div>
    </>
  );
}
