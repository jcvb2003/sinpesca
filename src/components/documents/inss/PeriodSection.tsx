
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PeriodSection() {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="font-medium mb-4">Período de Defeso e atividade do Requerente</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="n-publicacao">Nº da Publicação</Label>
          <Input id="n-publicacao" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="data-publicacao">Data da Publicação</Label>
          <Input id="data-publicacao" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="area">Área</Label>
          <Input id="area" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="primeiro-periodo-inicio">1º Período - Início</Label>
          <Input id="primeiro-periodo-inicio" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="primeiro-periodo-fim">1º Período - Fim</Label>
          <Input id="primeiro-periodo-fim" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="segundo-periodo-inicio">2º Período - Início</Label>
          <Input id="segundo-periodo-inicio" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="segundo-periodo-fim">2º Período - Fim</Label>
          <Input id="segundo-periodo-fim" type="date" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="especies-capturadas">Espécie capturadas proibidas</Label>
          <Input id="especies-capturadas" />
        </div>
      </div>
    </div>
  );
}
