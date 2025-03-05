
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Member } from "@/types/member";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UF_OPTIONS } from "../../utils/constants";

interface ContactAddressSectionProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function ContactAddressSection({ member, formData, onInputChange }: ContactAddressSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Endereço e Contato</h3>
      
      <div className="space-y-2">
        <Label htmlFor="street">Rua</Label>
        <Input
          id="street"
          placeholder="Nome da rua"
          className="w-full"
          value={formData.street || ''}
          onChange={(e) => onInputChange('street', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="number">Número</Label>
        <Input
          id="number"
          placeholder="Número"
          className="w-full"
          value={formData.number || ''}
          onChange={(e) => onInputChange('number', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="district">Bairro/Distrito</Label>
        <Input
          id="district"
          placeholder="Bairro"
          className="w-full"
          value={formData.district || ''}
          onChange={(e) => onInputChange('district', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="city">Cidade</Label>
        <Input
          id="city"
          placeholder="Cidade"
          className="w-full"
          value={formData.city || ''}
          onChange={(e) => onInputChange('city', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="state_address">Estado (UF)</Label>
        <Select 
          value={formData.state_address || ""}
          onValueChange={(value) => onInputChange('state_address', value)}
        >
          <SelectTrigger id="state_address">
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
          value={formData.zipCode || ''}
          onChange={(e) => onInputChange('zipCode', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone de Contato</Label>
        <Input
          id="phone"
          placeholder="(00) 00000-0000"
          className="w-full"
          value={formData.phone || ''}
          onChange={(e) => onInputChange('phone', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="profilePhoto">Foto de Perfil</Label>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-100 border rounded-md flex items-center justify-center overflow-hidden">
            {formData.profilePhoto ? (
              <img 
                src={formData.profilePhoto} 
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
