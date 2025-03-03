
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface RepresentationTermDialogProps {
  isOpen: boolean;
  onClose: () => void;
  memberId?: string;
}

export function RepresentationTermDialog({
  isOpen,
  onClose,
  memberId
}: RepresentationTermDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">
            Gerar Termo de Representação
          </DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <form>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="aposentadoria-idade" />
                <div>
                  <Label htmlFor="aposentadoria-idade" className="font-medium">Aposentadoria por Idade</Label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="aposentadoria-idade-rural" />
                      <Label htmlFor="aposentadoria-idade-rural" className="text-sm">rural</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="aposentadoria-idade-urbana" />
                      <Label htmlFor="aposentadoria-idade-urbana" className="text-sm">urbana</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="aposentadoria-idade-deficiencia" />
                      <Label htmlFor="aposentadoria-idade-deficiencia" className="text-sm">da pessoa com deficiência</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="aposentadoria-contribuicao" />
                <div>
                  <Label htmlFor="aposentadoria-contribuicao" className="font-medium">Aposentadoria por Tempo de Contribuição</Label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="aposentadoria-contribuicao-deficiencia" />
                      <Label htmlFor="aposentadoria-contribuicao-deficiencia" className="text-sm">da pessoa com deficiência</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="beneficios-assistenciais" />
                <div>
                  <Label htmlFor="beneficios-assistenciais" className="font-medium">Benefícios Assistenciais</Label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="beneficios-assistenciais-idoso" />
                      <Label htmlFor="beneficios-assistenciais-idoso" className="text-sm">ao idoso</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="beneficios-assistenciais-deficiente" />
                      <Label htmlFor="beneficios-assistenciais-deficiente" className="text-sm">à pessoa com deficiência</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="beneficios-assistenciais-microcefalia" />
                <div>
                  <Label htmlFor="beneficios-assistenciais-microcefalia" className="font-medium">à pessoa com microcefalia</Label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="beneficios-assistenciais-trabalhador" />
                      <Label htmlFor="beneficios-assistenciais-trabalhador" className="text-sm">ao trabalhador portuário avulso</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="pensao-morte" />
                <div>
                  <Label htmlFor="pensao-morte" className="font-medium">Pensão por Morte</Label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pensao-morte-rural" />
                      <Label htmlFor="pensao-morte-rural" className="text-sm">rural</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pensao-morte-urbana" />
                      <Label htmlFor="pensao-morte-urbana" className="text-sm">urbana</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="pensao-talidomida" />
              <Label htmlFor="pensao-talidomida">Pensão especial síndrome da Talidomida</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="pensao-zika" />
              <Label htmlFor="pensao-zika">Pensão especial - crianças com síndrome congênita do zika virus</Label>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="auxilio-reclusao" />
                <div>
                  <Label htmlFor="auxilio-reclusao" className="font-medium">Auxílio-Reclusão</Label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="auxilio-reclusao-rural" />
                      <Label htmlFor="auxilio-reclusao-rural" className="text-sm">rural</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="auxilio-reclusao-urbana" />
                      <Label htmlFor="auxilio-reclusao-urbana" className="text-sm">urbana</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="salario-maternidade" />
                <div>
                  <Label htmlFor="salario-maternidade" className="font-medium">Salário Maternidade</Label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="salario-maternidade-rural" />
                      <Label htmlFor="salario-maternidade-rural" className="text-sm">rural</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="salario-maternidade-urbana" />
                      <Label htmlFor="salario-maternidade-urbana" className="text-sm">urbana</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="seguro-desemprego" />
              <Label htmlFor="seguro-desemprego">Seguro-Desemprego Pescador Artesanal</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="certidao-tempo-servico" />
              <Label htmlFor="certidao-tempo-servico">Certidão de Tempo de Contribuição - CTC</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="copia-processo" />
              <Label htmlFor="copia-processo">Cópia de Processos</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="revisao-beneficio" />
              <Label htmlFor="revisao-beneficio">Revisão de Benefícios e Certidões</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="recurso" />
              <Label htmlFor="recurso">Recurso</Label>
            </div>
            
            <div className="pt-4"></div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="atualizacao-manutencao" />
              <Label htmlFor="atualizacao-manutencao" className="text-sm">
                Atualizações para manutenção do benefício e outros serviços relacionados, na modalidade de atendimento à distância, bem como a preparação e instrução de requerimentos para posterior análise pelo INSS
              </Label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="orientacoes-informacoes" />
              <Label htmlFor="orientacoes-informacoes" className="text-sm">
                Orientações e informações sobre formas de acesso aos serviços digitais do INSS
              </Label>
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
