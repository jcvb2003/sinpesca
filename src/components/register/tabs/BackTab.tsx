
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StateSelect } from "@/components/ui/state-select";

export function BackTab() {
  const [state, setState] = useState("");
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b pb-2">Informações Adicionais</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input 
            id="phone" 
            placeholder="(xx) xxxxx-xxxx"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="exemplo@email.com"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="street">Endereço</Label>
          <Input 
            id="street" 
            placeholder="Rua, número, bairro"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="district">Bairro</Label>
          <Input 
            id="district" 
            placeholder="Bairro"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input 
            id="city" 
            placeholder="Cidade"
            className="shadow-sm"
          />
        </div>
        
        <StateSelect
          id="state_address"
          label="UF"
          value={state}
          onChange={setState}
          className="space-y-2"
        />
        
        <div className="space-y-2">
          <Label htmlFor="zipCode">CEP</Label>
          <Input 
            id="zipCode" 
            placeholder="xxxxx-xxx"
            className="shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
