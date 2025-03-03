
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface INSSRequestDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function INSSRequestDialog({ isOpen, onClose }: INSSRequestDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Gerar Ficha de Requerimento Seguro Desemprego Pescador Artesanal
          </DialogTitle>
        </DialogHeader>
        
        <form id="form-requrimento-seguro-pescador" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-base font-semibold mb-2">REQUERENTE*:</h3>
            <div className="border-t border-gray-200"></div>
            <div className="grid gap-4 mt-4">
              <div>
                <Label htmlFor="nome">Nome do Requerente</Label>
                <Input id="nome" placeholder="Nome" className="mt-1" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="data_nascimento">Data de Nascimento</Label>
                  <Input id="data_nascimento" type="date" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="CPF" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="nome_mae">Nome Mãe</Label>
                <Input id="nome_mae" placeholder="Nome da mãe" className="mt-1" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rg">RG</Label>
                  <Input id="rg" placeholder="RG" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="pis_pasep">PIS</Label>
                  <Input id="pis_pasep" placeholder="PIS" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="cei">CEI</Label>
                <Input id="cei" placeholder="CEI" className="mt-1" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-2">ENDEREÇO*:</h3>
            <div className="border-t border-gray-200"></div>
            <div className="grid gap-4 mt-4">
              <div>
                <Label htmlFor="endereco">Logradouro</Label>
                <Input id="endereco" placeholder="Endereço" className="mt-1" />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="CEP" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="numero">Nº</Label>
                  <Input id="numero" placeholder="Nº" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="complemento">Complemento</Label>
                <Input id="complemento" placeholder="Complemento" className="mt-1" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="uf">UF</Label>
                  <Select>
                    <SelectTrigger id="uf" className="mt-1">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">AC</SelectItem>
                      <SelectItem value="AL">AL</SelectItem>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="AP">AP</SelectItem>
                      <SelectItem value="BA">BA</SelectItem>
                      <SelectItem value="CE">CE</SelectItem>
                      <SelectItem value="DF">DF</SelectItem>
                      <SelectItem value="ES">ES</SelectItem>
                      <SelectItem value="GO">GO</SelectItem>
                      <SelectItem value="MA">MA</SelectItem>
                      <SelectItem value="MG">MG</SelectItem>
                      <SelectItem value="MS">MS</SelectItem>
                      <SelectItem value="MT">MT</SelectItem>
                      <SelectItem value="PA">PA</SelectItem>
                      <SelectItem value="PB">PB</SelectItem>
                      <SelectItem value="PE">PE</SelectItem>
                      <SelectItem value="PI">PI</SelectItem>
                      <SelectItem value="PR">PR</SelectItem>
                      <SelectItem value="RJ">RJ</SelectItem>
                      <SelectItem value="RN">RN</SelectItem>
                      <SelectItem value="RO">RO</SelectItem>
                      <SelectItem value="RR">RR</SelectItem>
                      <SelectItem value="RS">RS</SelectItem>
                      <SelectItem value="SC">SC</SelectItem>
                      <SelectItem value="SE">SE</SelectItem>
                      <SelectItem value="SP">SP</SelectItem>
                      <SelectItem value="TO">TO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cidade">Município</Label>
                  <Input id="cidade" placeholder="Município" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="Telefone" className="mt-1" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-2">PERÍODO DE DEFESO E ATIVIDADES DO REQUERENTE*:</h3>
            <div className="border-t border-gray-200"></div>
            <div className="grid gap-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="n_publicacao">N° da publicação</Label>
                  <Input id="n_publicacao" placeholder="N° da publicação" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="data_publicacao">Data da publicação</Label>
                  <Input id="data_publicacao" type="date" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="area">Área</Label>
                <Input id="area" placeholder="Área" className="mt-1" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="primeiro_periodo_inicio">1° Período – Início:</Label>
                  <Input id="primeiro_periodo_inicio" type="date" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="primeiro_periodo_fim">Fim</Label>
                  <Input id="primeiro_periodo_fim" type="date" className="mt-1" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="segundo_periodo_inicio">2° Período – Início:</Label>
                  <Input id="segundo_periodo_inicio" type="date" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="segundo_periodo_fim">Fim</Label>
                  <Input id="segundo_periodo_fim" type="date" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="especies_proibidas">Espécies capturadas proibidas:</Label>
                <Input id="especies_proibidas" placeholder="Espécies capturadas proibidas" className="mt-1" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-2">EMBARCAÇÃO (CASO EMBARCADO, APRESENTAR DOCUMENTO DO BARCO)*:</h3>
            <div className="border-t border-gray-200"></div>
            <div className="grid gap-4 mt-4">
              <div>
                <Label htmlFor="rgp">Número RGP:</Label>
                <Input id="rgp" placeholder="Número RGP" className="mt-1" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="estado_id">UF:</Label>
                  <Select>
                    <SelectTrigger id="estado_id" className="mt-1">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">AC</SelectItem>
                      <SelectItem value="AL">AL</SelectItem>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="AP">AP</SelectItem>
                      <SelectItem value="BA">BA</SelectItem>
                      <SelectItem value="CE">CE</SelectItem>
                      <SelectItem value="DF">DF</SelectItem>
                      <SelectItem value="ES">ES</SelectItem>
                      <SelectItem value="GO">GO</SelectItem>
                      <SelectItem value="MA">MA</SelectItem>
                      <SelectItem value="MG">MG</SelectItem>
                      <SelectItem value="MS">MS</SelectItem>
                      <SelectItem value="MT">MT</SelectItem>
                      <SelectItem value="PA">PA</SelectItem>
                      <SelectItem value="PB">PB</SelectItem>
                      <SelectItem value="PE">PE</SelectItem>
                      <SelectItem value="PI">PI</SelectItem>
                      <SelectItem value="PR">PR</SelectItem>
                      <SelectItem value="RJ">RJ</SelectItem>
                      <SelectItem value="RN">RN</SelectItem>
                      <SelectItem value="RO">RO</SelectItem>
                      <SelectItem value="RR">RR</SelectItem>
                      <SelectItem value="RS">RS</SelectItem>
                      <SelectItem value="SC">SC</SelectItem>
                      <SelectItem value="SE">SE</SelectItem>
                      <SelectItem value="SP">SP</SelectItem>
                      <SelectItem value="TO">TO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="ab">AB:</Label>
                  <Input id="ab" placeholder="AB" className="mt-1" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="n_tripulantes">N° de Tripulantes:</Label>
                  <Input id="n_tripulantes" placeholder="N° de Tripulantes" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cpf_proprietario">CPF do Proprietário:</Label>
                  <Input id="cpf_proprietario" placeholder="CPF do Proprietário" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="nivel_alfabetizacao">Nível de Alfabetização</Label>
                <Select>
                  <SelectTrigger id="nivel_alfabetizacao" className="mt-1">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Completamente Alfabetizado</SelectItem>
                    <SelectItem value="2">Capaz apenas de assinar seu nome</SelectItem>
                    <SelectItem value="3">Não alfabetizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
        
        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" form="form-requrimento-seguro-pescador">
            Gerar Documento
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
