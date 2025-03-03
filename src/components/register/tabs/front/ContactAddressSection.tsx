
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Member } from "@/types/member";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UF_OPTIONS } from "../../utils/constants";

interface ContactAddressSectionProps {
  member?: Member | null;
}

export function ContactAddressSection({ member }: ContactAddressSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Endereço e Contato</h3>
      
      <div className="space-y-2">
        <Label htmlFor="street">Rua</Label>
        <Input
          id="street"
          placeholder="Nome da rua"
          className="w-full"
          defaultValue={member?.street}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="number">Número</Label>
        <Input
          id="number"
          placeholder="Número"
          className="w-full"
          defaultValue={member?.number}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="district">Bairro/Distrito</Label>
        <Input
          id="district"
          placeholder="Bairro"
          className="w-full"
          defaultValue={member?.district}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="city">Cidade</Label>
        <Input
          id="city"
          placeholder="Cidade"
          className="w-full"
          defaultValue={member?.city}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="stateAddress">Estado (UF)</Label>
        <Select defaultValue={member?.state_address || ""}>
          <SelectTrigger id="stateAddress">
            <SelectValue placeholder="Selecione o UF" />
          </SelectTrigger>
          <SelectContent>
            {UF_OPTIONS.map((uf) => (
              <SelectItem key={uf} value={uf}>{uf}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="zipCode">CEP</Label>
        <Input
          id="zipCode"
          placeholder="00000-000"
          className="w-full"
          defaultValue={member?.zipCode}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone de Contato</Label>
        <Input
          id="phone"
          placeholder="(00) 00000-0000"
          className="w-full"
          defaultValue={member?.phone}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="profilePhoto">Foto de Perfil</Label>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-100 border rounded-md flex items-center justify-center overflow-hidden">
            {member?.profilePhoto ? (
              <img 
                src={member.profilePhoto} 
                alt="Foto do perfil" 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">Foto</span>
            )}
          </div>
          <Button variant="outline" size="sm">
            Carregar Foto
          </Button>
        </div>
      </div>
    </div>
  );
}
