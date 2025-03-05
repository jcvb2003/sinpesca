
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { SystemParameters } from "@/components/settings/ParametersForm";

export function PeriodSection() {
  const [parameters, setParameters] = useState<SystemParameters | null>(null);
  
  useEffect(() => {
    // Load parameters from localStorage
    const savedParameters = localStorage.getItem('systemParameters');
    if (savedParameters) {
      try {
        setParameters(JSON.parse(savedParameters));
      } catch (error) {
        console.error('Error parsing saved parameters:', error);
      }
    }
  }, []);
  
  return (
    <div className="space-y-6">
      <div className="border p-4 rounded-md space-y-4">
        <h3 className="font-medium">Período de Pesca</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-period-start">1º Período - Início</Label>
            <Input 
              id="first-period-start" 
              value={parameters?.firstPeriodStart || ''} 
              readOnly 
              className="bg-gray-50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="first-period-end">1º Período - Fim</Label>
            <Input 
              id="first-period-end" 
              value={parameters?.firstPeriodEnd || ''} 
              readOnly 
              className="bg-gray-50"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="second-period-start">2º Período - Início</Label>
            <Input 
              id="second-period-start" 
              value={parameters?.secondPeriodStart || ''} 
              readOnly 
              className="bg-gray-50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="second-period-end">2º Período - Fim</Label>
            <Input 
              id="second-period-end" 
              value={parameters?.secondPeriodEnd || ''} 
              readOnly 
              className="bg-gray-50"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="area">Área de Pesca</Label>
          <Input 
            id="area" 
            value={parameters?.fishingArea || ''} 
            readOnly 
            className="bg-gray-50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="species">Espécies Proibidas</Label>
          <Textarea 
            id="species" 
            value={parameters?.prohibitedSpecies || ''} 
            readOnly 
            className="bg-gray-50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Local</Label>
          <Input 
            id="location" 
            value={parameters?.fishingLocation || ''} 
            readOnly 
            className="bg-gray-50"
          />
        </div>
      </div>
    </div>
  );
}
