import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { members } from "@/data/mockMembers";

interface INSSRequestFormProps {
  memberId?: string | null;
}

export function INSSRequestForm({ memberId }: INSSRequestFormProps) {
  const [activeTab, setActiveTab] = useState("requester");
  const memberData = memberId ? members.find(m => m.id === memberId) : null;

  useEffect(() => {
    if (memberData) {
      // Prefill form with member data if available
      // This is just a placeholder - in a real app you would populate the form fields
      console.log("Prefilling form with member data:", memberData);
    }
  }, [memberData]);

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger 
            value="requester" 
            className={`py-3 ${activeTab === 'requester' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Requerente
          </TabsTrigger>
          <TabsTrigger 
            value="boat" 
            className={`py-3 ${activeTab === 'boat' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Embarcação
          </TabsTrigger>
          <TabsTrigger 
            value="period" 
            className={`py-3 ${activeTab === 'period' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Período e Atividade
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="requester" className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="codigo">Código</Label>
              <Input id="codigo" className="bg-amber-100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="data">Data</Label>
              <Input id="data" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insc-sindical">Insc. Sindical</Label>
              <Input id="insc-sindical" />
            </div>
          </div>
          
          <div className="border p-4 rounded-md space-y-4">
            <h3 className="font-medium">Dados do Requerente</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cei">CEI</Label>
                <Input id="cei" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="data-nascimento">Data de Nascimento</Label>
                <Input id="data-nascimento" type="date" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="nome-mae">Nome da Mãe</Label>
                <Input id="nome-mae" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rg">RG</Label>
                <Input id="rg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pis">PIS</Label>
                <Input id="pis" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nit">NIT</Label>
                <Input id="nit" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="space-y-2 md:col-span-3">
                <Label htmlFor="endereco">Endereço</Label>
                <Input id="endereco" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numero">Nº</Label>
                <Input id="numero" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bairro">Bairro ou Complemento</Label>
                <Input id="bairro" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="space-y-2 md:col-span-3">
                <Label htmlFor="municipio">Município</Label>
                <Input id="municipio" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="uf">UF</Label>
                <Select>
                  <SelectTrigger id="uf">
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC">AC</SelectItem>
                    <SelectItem value="AL">AL</SelectItem>
                    <SelectItem value="AP">AP</SelectItem>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="BA">BA</SelectItem>
                    <SelectItem value="CE">CE</SelectItem>
                    <SelectItem value="DF">DF</SelectItem>
                    <SelectItem value="ES">ES</SelectItem>
                    <SelectItem value="GO">GO</SelectItem>
                    <SelectItem value="MA">MA</SelectItem>
                    <SelectItem value="MT">MT</SelectItem>
                    <SelectItem value="MS">MS</SelectItem>
                    <SelectItem value="MG">MG</SelectItem>
                    <SelectItem value="PA">PA</SelectItem>
                    <SelectItem value="PB">PB</SelectItem>
                    <SelectItem value="PR">PR</SelectItem>
                    <SelectItem value="PE">PE</SelectItem>
                    <SelectItem value="PI">PI</SelectItem>
                    <SelectItem value="RJ">RJ</SelectItem>
                    <SelectItem value="RN">RN</SelectItem>
                    <SelectItem value="RS">RS</SelectItem>
                    <SelectItem value="RO">RO</SelectItem>
                    <SelectItem value="RR">RR</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="SP">SP</SelectItem>
                    <SelectItem value="SE">SE</SelectItem>
                    <SelectItem value="TO">TO</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cep">CEP</Label>
                <Input id="cep" />
              </div>
              <div className="space-y-2 md:col-span-5">
                <Label htmlFor="situacao-mpa">Situação no MPA</Label>
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger id="situacao-mpa">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ativo">Ativo</SelectItem>
                      <SelectItem value="inativo">Inativo</SelectItem>
                      <SelectItem value="suspenso">Suspenso</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="icon" variant="outline">+</Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="boat" className="space-y-6">
          <div className="border p-4 rounded-md">
            <h3 className="font-medium mb-4">Embarcação (Caso embarcação: apresentar documentação do barco)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="space-y-2">
                <Label htmlFor="n-rgp">Nº do RGP</Label>
                <Input id="n-rgp" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="uf-rg">UF RG</Label>
                <Select>
                  <SelectTrigger id="uf-rg">
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC">AC</SelectItem>
                    <SelectItem value="AL">AL</SelectItem>
                    <SelectItem value="AP">AP</SelectItem>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="BA">BA</SelectItem>
                    <SelectItem value="CE">CE</SelectItem>
                    <SelectItem value="DF">DF</SelectItem>
                    <SelectItem value="ES">ES</SelectItem>
                    <SelectItem value="GO">GO</SelectItem>
                    <SelectItem value="MA">MA</SelectItem>
                    <SelectItem value="MT">MT</SelectItem>
                    <SelectItem value="MS">MS</SelectItem>
                    <SelectItem value="MG">MG</SelectItem>
                    <SelectItem value="PA">PA</SelectItem>
                    <SelectItem value="PB">PB</SelectItem>
                    <SelectItem value="PR">PR</SelectItem>
                    <SelectItem value="PE">PE</SelectItem>
                    <SelectItem value="PI">PI</SelectItem>
                    <SelectItem value="RJ">RJ</SelectItem>
                    <SelectItem value="RN">RN</SelectItem>
                    <SelectItem value="RS">RS</SelectItem>
                    <SelectItem value="RO">RO</SelectItem>
                    <SelectItem value="RR">RR</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="SP">SP</SelectItem>
                    <SelectItem value="SE">SE</SelectItem>
                    <SelectItem value="TO">TO</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ab">AB</Label>
                <Input id="ab" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="n-tripulantes">Nº de tripulantes</Label>
                <Input id="n-tripulantes" type="number" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="cpf-proprietario">CPF do Proprietário</Label>
                <Input id="cpf-proprietario" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="period" className="space-y-6">
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
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end gap-4 pt-4 border-t">
        <Button variant="outline">Novo</Button>
        <Button>Salvar</Button>
        <Button variant="outline">Cancelar</Button>
        <Button variant="destructive">Excluir</Button>
        <Button variant="outline">Imprimir</Button>
        <Button variant="outline">Fechar</Button>
      </div>
    </div>
  );
}
