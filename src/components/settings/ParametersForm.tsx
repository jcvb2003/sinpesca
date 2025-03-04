
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function ParametersForm() {
  const { toast } = useToast();
  const [parameters, setParameters] = useState({
    publicationNumber: "048",
    publicationDate: "06/11/2007",
    fishingArea: "BACIA AMAZÔNICA DA ILHA DO MARAJÓ",
    firstPeriodStart: "01/01/2025",
    firstPeriodEnd: "30/04/2025",
    secondPeriodStart: "",
    secondPeriodEnd: "",
    prohibitedSpecies: "ACARÁ, ARACU, TRAIRA ETC.",
    fishingLocation: "PROPRIEDADE DA UNIÃO",
    situation6: "6 - SUSPENSO",
    situation7: "",
    situation8: "",
    situation9: "",
    situation10: ""
  });

  const handleChange = (field: string, value: string) => {
    setParameters(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Parâmetros atualizados",
      description: "Os parâmetros foram salvos com sucesso!"
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Requerimento do INSS</h2>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <Label htmlFor="publicationNumber">Número da publicação</Label>
              <Input
                id="publicationNumber"
                value={parameters.publicationNumber}
                onChange={(e) => handleChange('publicationNumber', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="publicationDate">Data da Publicação</Label>
              <Input
                id="publicationDate"
                value={parameters.publicationDate}
                onChange={(e) => handleChange('publicationDate', e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <Label htmlFor="fishingArea">Área da Pesca</Label>
            <Input
              id="fishingArea"
              value={parameters.fishingArea}
              onChange={(e) => handleChange('fishingArea', e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>
              <Label htmlFor="firstPeriodStart">1º Período - Início</Label>
              <Input
                id="firstPeriodStart"
                type="text"
                value={parameters.firstPeriodStart}
                onChange={(e) => handleChange('firstPeriodStart', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="firstPeriodEnd">1º Período - Fim</Label>
              <Input
                id="firstPeriodEnd"
                type="text"
                value={parameters.firstPeriodEnd}
                onChange={(e) => handleChange('firstPeriodEnd', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="secondPeriodStart">2º Período - Início</Label>
              <Input
                id="secondPeriodStart"
                type="text"
                value={parameters.secondPeriodStart}
                onChange={(e) => handleChange('secondPeriodStart', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="secondPeriodEnd">2º Período - Fim</Label>
              <Input
                id="secondPeriodEnd"
                type="text"
                value={parameters.secondPeriodEnd}
                onChange={(e) => handleChange('secondPeriodEnd', e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <Label htmlFor="prohibitedSpecies">Espécies proibidas</Label>
            <Input
              id="prohibitedSpecies"
              value={parameters.prohibitedSpecies}
              onChange={(e) => handleChange('prohibitedSpecies', e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Declaração SEAP</h2>
          <div className="mb-4">
            <Label htmlFor="fishingLocation">Local da Pesca</Label>
            <Input
              id="fishingLocation"
              value={parameters.fishingLocation}
              onChange={(e) => handleChange('fishingLocation', e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Situações Extras dos Sócios</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="situation6">6ª Situação</Label>
              <Input
                id="situation6"
                value={parameters.situation6}
                onChange={(e) => handleChange('situation6', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="situation7">7ª Situação</Label>
              <Input
                id="situation7"
                value={parameters.situation7}
                onChange={(e) => handleChange('situation7', e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="situation8">8ª Situação</Label>
              <Input
                id="situation8"
                value={parameters.situation8}
                onChange={(e) => handleChange('situation8', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="situation9">9ª Situação</Label>
              <Input
                id="situation9"
                value={parameters.situation9}
                onChange={(e) => handleChange('situation9', e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="situation10">10ª Situação</Label>
              <Input
                id="situation10"
                value={parameters.situation10}
                onChange={(e) => handleChange('situation10', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-end mt-6">
          <Button variant="outline">Fechar</Button>
          <Button onClick={handleSave}>Salvar</Button>
        </div>
      </div>
    </Card>
  );
}
