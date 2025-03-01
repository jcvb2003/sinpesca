
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function OtherTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Observações Gerais</h3>
        <div className="space-y-2">
          <Label htmlFor="observations">Informações adicionais sobre o sócio</Label>
          <Textarea
            id="observations"
            placeholder="Informações adicionais sobre o sócio"
            className="min-h-[200px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
