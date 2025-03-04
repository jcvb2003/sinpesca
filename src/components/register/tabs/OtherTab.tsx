
import { Member } from "@/types/member";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface OtherTabProps {
  formData: Partial<Member>;
  onInputChange: (section: string, field: string, value: any) => void;
}

export function OtherTab({ formData, onInputChange }: OtherTabProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="observations">Observações</Label>
        <Textarea
          id="observations"
          placeholder="Adicione observações relevantes sobre o sócio aqui..."
          className="min-h-[200px]"
          value={formData.observations || ''}
          onChange={(e) => onInputChange('other', 'observations', e.target.value)}
        />
      </div>
    </div>
  );
}
