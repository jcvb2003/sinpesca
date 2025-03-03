
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function FrontTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Informações de Registro</h3>
        
        <div className="space-y-2">
          <Label htmlFor="registrationNumber">Número de Registro</Label>
          <Input
            id="registrationNumber"
            placeholder="Ex: 202301"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="registrationDate">Data de Cadastro</Label>
          <div className="relative">
            <Input
              id="registrationDate"
              placeholder="dd/mm/aaaa"
              className="w-full pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Localidade</Label>
          <Input
            id="location"
            placeholder="Ex: São Paulo, SP"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Dados Pessoais</h3>
        
        <div className="space-y-2">
          <Label htmlFor="fullName">Nome Completo</Label>
          <Input
            id="fullName"
            placeholder="Nome completo"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="nickname">Apelido</Label>
          <Input
            id="nickname"
            placeholder="Apelido (opcional)"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthDate">Data de Nascimento</Label>
          <div className="relative">
            <Input
              id="birthDate"
              placeholder="dd/mm/aaaa"
              className="w-full pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fatherName">Nome do Pai</Label>
          <Input
            id="fatherName"
            placeholder="Nome do pai"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="motherName">Nome da Mãe</Label>
          <Input
            id="motherName"
            placeholder="Nome da mãe"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="nationality">Nacionalidade</Label>
          <Input
            id="nationality"
            placeholder="Ex: Brasileira"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthplace">Naturalidade</Label>
          <Input
            id="birthplace"
            placeholder="Cidade natal"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="state">Estado (UF)</Label>
          <Input
            id="state"
            placeholder="UF"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="profession">Profissão</Label>
          <Input
            id="profession"
            placeholder="Ex: Advogado, Médico"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Endereço e Contato</h3>
        
        <div className="space-y-2">
          <Label htmlFor="street">Rua</Label>
          <Input
            id="street"
            placeholder="Nome da rua"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="number">Número</Label>
          <Input
            id="number"
            placeholder="Número"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="district">Bairro/Distrito</Label>
          <Input
            id="district"
            placeholder="Bairro"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input
            id="city"
            placeholder="Cidade"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="stateAddress">Estado (UF)</Label>
          <Input
            id="stateAddress"
            placeholder="UF"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="zipCode">CEP</Label>
          <Input
            id="zipCode"
            placeholder="00000-000"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone de Contato</Label>
          <Input
            id="phone"
            placeholder="(00) 00000-0000"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="profilePhoto">Foto de Perfil</Label>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-100 border rounded-md flex items-center justify-center">
              <span className="text-gray-400">Foto</span>
            </div>
            <Button variant="outline" size="sm">
              Carregar Foto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
