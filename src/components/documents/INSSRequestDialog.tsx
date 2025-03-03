
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface INSSRequestDialogProps {
  isOpen: boolean;
  onClose: () => void;
  memberId?: string;
}

export function INSSRequestDialog({
  isOpen,
  onClose,
  memberId
}: INSSRequestDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div>
            <DialogTitle className="text-xl font-bold">
              Gerar Ficha de Requerimento Seguro Desemprego Pescador Artesanal
            </DialogTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <form>
          <div className="space-y-6">
            <div>
              <h5 className="text-md font-bold mt-4">REQUERENTE*:</h5>
              <hr className="mt-0" />
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="nome">Nome do Requerente</Label>
                  <Input id="nome" placeholder="Nome" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="data_nascimento">Data de Nascimento</Label>
                  <Input id="data_nascimento" type="date" />
                </div>
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="CPF" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="nome_mae">Nome Mãe</Label>
                  <Input id="nome_mae" placeholder="Nome da mãe" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="rg">RG</Label>
                  <Input id="rg" placeholder="RG" />
                </div>
                <div>
                  <Label htmlFor="pis_pasep">PIS</Label>
                  <Input id="pis_pasep" placeholder="PIS/PASEP" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="cei">CEI</Label>
                  <Input id="cei" placeholder="CEI" />
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-md font-bold mt-4">ENDEREÇO*:</h5>
              <hr className="mt-0" />
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="endereco">Logradouro</Label>
                  <Input id="endereco" placeholder="Endereço" />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="CEP" />
                </div>
                <div>
                  <Label htmlFor="numero">Nº</Label>
                  <Input id="numero" placeholder="Nº" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input id="complemento" placeholder="Complemento" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="uf">UF</Label>
                  <Select defaultValue="PA">
                    <SelectTrigger id="uf">
                      <SelectValue placeholder="Selecione o estado" />
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
                  <Input id="cidade" placeholder="Município" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="Telefone" />
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-md font-bold mt-4">PERÍODO DE DEFESO E ATIVIDADES DO REQUERENTE*:</h5>
              <hr className="mt-0" />
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="n_publicacao">N° da publicação</Label>
                  <Input id="n_publicacao" placeholder="N° da publicação" />
                </div>
                <div>
                  <Label htmlFor="data_publicacao">Data da publicação</Label>
                  <Input id="data_publicacao" type="date" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="area">Área</Label>
                  <Input id="area" placeholder="Área" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="primeiro_periodo_inicio">1° Período – Início:</Label>
                  <Input id="primeiro_periodo_inicio" type="date" />
                </div>
                <div>
                  <Label htmlFor="primeiro_periodo_fim">Fim</Label>
                  <Input id="primeiro_periodo_fim" type="date" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="segundo_periodo_inicio">2° Período – Início:</Label>
                  <Input id="segundo_periodo_inicio" type="date" />
                </div>
                <div>
                  <Label htmlFor="segundo_periodo_fim">Fim</Label>
                  <Input id="segundo_periodo_fim" type="date" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="especies_proibidas">Espécies capturadas proibidas:</Label>
                  <Input id="especies_proibidas" placeholder="Espécies capturadas proibidas" />
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-md font-bold mt-4">EMBARCAÇÃO (CASO EMBARCADO, APRESENTAR DOCUMENTO DO BARCO)*:</h5>
              <hr className="mt-0" />
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="rgp">Número RGP:</Label>
                  <Input id="rgp" placeholder="Número RGP" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="estado_id">UF:</Label>
                  <Select defaultValue="PA">
                    <SelectTrigger id="estado_id">
                      <SelectValue placeholder="Selecione o estado" />
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
                  <Input id="ab" placeholder="AB" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <Label htmlFor="n_tripulantes">N° de Tripulantes:</Label>
                  <Input id="n_tripulantes" placeholder="Número de tripulantes" />
                </div>
                <div>
                  <Label htmlFor="cpf_proprietario">CPF do Proprietário:</Label>
                  <Input id="cpf_proprietario" placeholder="CPF do proprietário" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Label htmlFor="nivel_alfabetizacao">Nível de Alfabetização</Label>
                  <Select>
                    <SelectTrigger id="nivel_alfabetizacao">
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
          </div>
          
          <DialogFooter className="mt-6">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Gerar Documento
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
