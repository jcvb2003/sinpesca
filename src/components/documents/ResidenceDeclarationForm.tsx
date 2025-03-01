import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, X } from "lucide-react";
import { useEffect } from "react";
import { members } from "@/data/mockMembers";

interface ResidenceDeclarationFormProps {
  memberId?: number;
}

export function ResidenceDeclarationForm({ memberId }: ResidenceDeclarationFormProps) {
  const memberData = memberId ? members.find(m => m.id === memberId) : null;

  useEffect(() => {
    if (memberData) {
      // Prefill form with member data if available
      console.log("Prefilling residence declaration with member data:", memberData);
    }
  }, [memberData]);

  return (
    <div className="space-y-6">
      <div className="border p-4 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="data">Data:</Label>
            <Input id="data" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700 mb-4">
            No caso de requerente analfabeto, é obrigatória a assinatura de duas testemunhas 
            (anexar documento de identificação com foto e CPF).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-md space-y-4">
              <h3 className="font-medium">1ª Testemunha</h3>
              <div className="space-y-2">
                <Label htmlFor="t1-nome">Nome</Label>
                <Input id="t1-nome" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="t1-rg">RG</Label>
                  <Input id="t1-rg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="t1-cpf">CPF</Label>
                  <Input id="t1-cpf" />
                </div>
              </div>
            </div>
            
            <div className="border p-4 rounded-md space-y-4">
              <h3 className="font-medium">2ª Testemunha</h3>
              <div className="space-y-2">
                <Label htmlFor="t2-nome">Nome</Label>
                <Input id="t2-nome" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="t2-rg">RG</Label>
                  <Input id="t2-rg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="t2-cpf">CPF</Label>
                  <Input id="t2-cpf" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Label className="mb-2 block">Sabe ler e escrever?</Label>
            <RadioGroup defaultValue="sim" className="flex items-center">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="r-sim" />
                <Label htmlFor="r-sim">Sim</Label>
              </div>
              <div className="flex items-center space-x-2 ml-6">
                <RadioGroupItem value="nao" id="r-nao" />
                <Label htmlFor="r-nao">Não</Label>
              </div>
            </RadioGroup>
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
