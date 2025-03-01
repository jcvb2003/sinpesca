
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, X } from "lucide-react";
import { useEffect } from "react";
import { members } from "@/data/mockMembers";

interface RepresentationTermFormProps {
  memberId?: string | null;
}

export function RepresentationTermForm({ memberId }: RepresentationTermFormProps) {
  const memberData = memberId ? members.find(m => m.id === memberId) : null;

  useEffect(() => {
    if (memberData) {
      // Prefill form with member data if available
      console.log("Prefilling representation term with member data:", memberData);
    }
  }, [memberData]);

  return (
    <div className="space-y-6">
      <div className="border p-4 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="servico">Serviço ou benefício</Label>
            <Select>
              <SelectTrigger id="servico">
                <SelectValue placeholder="0 - Nenhum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 - Nenhum</SelectItem>
                <SelectItem value="1">1 - Aposentadoria</SelectItem>
                <SelectItem value="2">2 - Auxílio Doença</SelectItem>
                <SelectItem value="3">3 - Seguro Defeso</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tipo">Rural ou Urbano</Label>
            <Select defaultValue="rural">
              <SelectTrigger id="tipo">
                <SelectValue placeholder="Rural" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rural">Rural</SelectItem>
                <SelectItem value="urbano">Urbano</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="data">Data:</Label>
            <Input id="data" type="date" className="bg-amber-100" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="outros-beneficios">Outros Benefícios</Label>
            <Select>
              <SelectTrigger id="outros-beneficios">
                <SelectValue placeholder="0 - Nenhum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 - Nenhum</SelectItem>
                <SelectItem value="1">1 - Salário Maternidade</SelectItem>
                <SelectItem value="2">2 - Pensão por Morte</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="atualizacao">Atualização ou Orientação</Label>
            <Select>
              <SelectTrigger id="atualizacao">
                <SelectValue placeholder="0 - Nenhum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 - Nenhum</SelectItem>
                <SelectItem value="1">1 - Atualização Cadastral</SelectItem>
                <SelectItem value="2">2 - Orientação Previdenciária</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-4 pt-4 border-t">
        <Button variant="outline" className="h-12 w-24">
          <Check className="h-6 w-6 text-green-600" />
        </Button>
        <Button variant="outline" className="h-12 w-24">
          <X className="h-6 w-6 text-red-600" />
        </Button>
      </div>
    </div>
  );
}
