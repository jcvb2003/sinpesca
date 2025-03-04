
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UF_OPTIONS } from "@/components/register/utils/constants";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function EntityForm() {
  const { toast } = useToast();
  const [entity, setEntity] = useState({
    name: "DOS PESCADORES(AS) ARTESANAIS E ECOEXTRATIVISTA DO ESTADO DO PARÁ",
    shortName: "SINPESCA PA",
    cnpj: "19.117.877/0001-95",
    address: "RUA SANTO ANTONIO - S/N",
    neighborhood: "CENTRO",
    city: "OEIRAS DO PARÁ",
    uf: "PA",
    zipCode: "68470-000",
    phone: "",
    cellphone: "(91)9.9181-3492",
    federation: "",
    confederation: "CNPA",
    pole: "OEIRAS DO PARÁ",
    foundingDate: "02/06/2016",
    email: "sinpescaoeiras@gmail.com",
    region: "COMARCA BELÉM",
    bank: "",
    agency: "",
    federalRegistration: ""
  });

  const handleChange = (field: string, value: string) => {
    setEntity(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Entidade atualizada",
      description: "As informações da entidade foram salvas com sucesso!"
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <Label htmlFor="entityName">Nome da Entidade</Label>
            <Input
              id="entityName"
              value={entity.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="shortName">Nome Abreviado</Label>
            <Input
              id="shortName"
              value={entity.shortName}
              onChange={(e) => handleChange('shortName', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input
              id="cnpj"
              value={entity.cnpj}
              onChange={(e) => handleChange('cnpj', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              value={entity.address}
              onChange={(e) => handleChange('address', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input
              id="neighborhood" 
              value={entity.neighborhood}
              onChange={(e) => handleChange('neighborhood', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              value={entity.city}
              onChange={(e) => handleChange('city', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="uf">UF</Label>
            <Select 
              value={entity.uf} 
              onValueChange={(value) => handleChange('uf', value)}
            >
              <SelectTrigger id="uf">
                <SelectValue placeholder="Selecione UF" />
              </SelectTrigger>
              <SelectContent>
                {UF_OPTIONS.map((uf) => (
                  <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="zipCode">CEP</Label>
            <Input
              id="zipCode"
              value={entity.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="phone">Fone</Label>
            <Input
              id="phone"
              value={entity.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="cellphone">Celular</Label>
            <Input
              id="cellphone"
              value={entity.cellphone}
              onChange={(e) => handleChange('cellphone', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="federation">Federação</Label>
            <Input
              id="federation"
              value={entity.federation}
              onChange={(e) => handleChange('federation', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="confederation">Confederação</Label>
            <Input
              id="confederation"
              value={entity.confederation}
              onChange={(e) => handleChange('confederation', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="pole">Polo</Label>
            <Input
              id="pole"
              value={entity.pole}
              onChange={(e) => handleChange('pole', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="foundingDate">Fundação</Label>
            <Input
              id="foundingDate"
              value={entity.foundingDate}
              onChange={(e) => handleChange('foundingDate', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={entity.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <Label htmlFor="region">Comarca</Label>
            <Input
              id="region"
              value={entity.region}
              onChange={(e) => handleChange('region', e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <Label>Dados PV Desc. em Conta</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="bank">Banco</Label>
                <Input
                  id="bank"
                  value={entity.bank}
                  onChange={(e) => handleChange('bank', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="agency">Agência</Label>
                <Input
                  id="agency"
                  value={entity.agency}
                  onChange={(e) => handleChange('agency', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="federalRegistration">Registro no Órgão Federal</Label>
          <Input
            id="federalRegistration"
            value={entity.federalRegistration}
            onChange={(e) => handleChange('federalRegistration', e.target.value)}
          />
        </div>

        <div className="flex gap-4 justify-end mt-6">
          <Button variant="outline">Fechar</Button>
          <Button onClick={handleSave}>Salvar</Button>
        </div>
      </div>
    </Card>
  );
}
