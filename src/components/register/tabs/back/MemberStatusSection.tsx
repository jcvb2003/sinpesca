
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Member } from "@/types/member";

interface MemberStatusSectionProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function MemberStatusSection({ member, formData, onInputChange }: MemberStatusSectionProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="statusControl">Controle da Situação</Label>
          <Input
            id="statusControl"
            placeholder="Controle da situação"
            className="w-full"
            value={formData.statusControl || ''}
            onChange={(e) => onInputChange('statusControl', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="status">Situação</Label>
          <Select 
            value={formData.status || "active"}
            onValueChange={(value) => onInputChange('status', value)}
          >
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
            value={formData.mpaStatus || ''}
            onChange={(e) => onInputChange('mpaStatus', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="inssPassword">Senha no INSS</Label>
          <Input
            id="inssPassword"
            placeholder="Senha no INSS"
            className="w-full"
            value={formData.inssPassword || ''}
            onChange={(e) => onInputChange('inssPassword', e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
