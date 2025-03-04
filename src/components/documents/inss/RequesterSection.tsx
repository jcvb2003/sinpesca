
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function RequesterSection() {
  return (
    <div className="space-y-6">
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
                {["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", 
                  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
                  .map((uf) => (
                    <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                  ))
                }
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
    </div>
  );
}
