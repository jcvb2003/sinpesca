
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Member } from "@/types/member";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FrontTabProps {
  member?: Member | null;
}

export function FrontTab({ member }: FrontTabProps) {
  const UF_OPTIONS = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT",
    "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
  ];

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
            defaultValue={member?.registrationNumber}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="registrationDate">Data de Cadastro</Label>
          <div className="relative">
            <Input
              id="registrationDate"
              placeholder="dd/mm/aaaa"
              className="w-full pl-10"
              defaultValue={member?.joinDate ? new Date(member.joinDate).toISOString().split('T')[0] : ''}
              type="date"
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
            defaultValue={member?.city ? `${member.city}, ${member.state_address}` : ''}
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
            defaultValue={member?.fullName}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="nickname">Apelido</Label>
          <Input
            id="nickname"
            placeholder="Apelido (opcional)"
            className="w-full"
            defaultValue={member?.nickname}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthDate">Data de Nascimento</Label>
          <div className="relative">
            <Input
              id="birthDate"
              placeholder="dd/mm/aaaa"
              type="date"
              className="w-full pl-10"
              defaultValue={member?.birthDate ? new Date(member.birthDate).toISOString().split('T')[0] : ''}
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
            defaultValue={member?.fatherName}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="motherName">Nome da Mãe</Label>
          <Input
            id="motherName"
            placeholder="Nome da mãe"
            className="w-full"
            defaultValue={member?.motherName}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="nationality">Nacionalidade</Label>
          <Input
            id="nationality"
            placeholder="Ex: Brasileira"
            className="w-full"
            defaultValue={member?.nationality}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthplace">Naturalidade</Label>
          <Input
            id="birthplace"
            placeholder="Cidade natal"
            className="w-full"
            defaultValue={member?.birthplace}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="state">Estado (UF)</Label>
          <Select defaultValue={member?.state || ""}>
            <SelectTrigger id="state">
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
          <Label htmlFor="profession">Profissão</Label>
          <Input
            id="profession"
            placeholder="Ex: Advogado, Médico"
            className="w-full"
            defaultValue={member?.profession}
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
    </div>
  );
}
