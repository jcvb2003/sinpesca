
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BoatSection() {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="font-medium mb-4">Embarcação (Caso embarcação: apresentar documentação do barco)</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="space-y-2">
          <Label htmlFor="n-rgp">Nº do RGP</Label>
          <Input id="n-rgp" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="uf-rg">UF RG</Label>
          <Select>
            <SelectTrigger id="uf-rg">
              <SelectValue placeholder="UF" />
            </SelectTrigger>
            <SelectContent>
              {["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", 
                "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
                .map((uf) => (
                  <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="ab">AB</Label>
          <Input id="ab" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="n-tripulantes">Nº de tripulantes</Label>
          <Input id="n-tripulantes" type="number" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="cpf-proprietario">CPF do Proprietário</Label>
          <Input id="cpf-proprietario" />
        </div>
      </div>
    </div>
  );
}
