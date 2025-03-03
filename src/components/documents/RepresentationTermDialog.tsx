
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface RepresentationTermDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RepresentationTermDialog({ isOpen, onClose }: RepresentationTermDialogProps) {
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
            Gerar Termo de Representação
          </DialogTitle>
        </DialogHeader>
        
        <form id="form-termo-representacao" onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox id="aposentadoria-idade" />
              <div>
                <Label htmlFor="aposentadoria-idade" className="font-medium">
                  Aposentadoria por Idade
                </Label>
                <div className="flex flex-wrap gap-4 mt-1 ml-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="aposentadoria-idade-rural" />
                    <Label htmlFor="aposentadoria-idade-rural">rural</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="aposentadoria-idade-urbana" />
                    <Label htmlFor="aposentadoria-idade-urbana">urbana</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="aposentadoria-idade-deficiencia" />
                    <Label htmlFor="aposentadoria-idade-deficiencia">da pessoa com deficiência</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="aposentadoria-contribuicao" />
              <div>
                <Label htmlFor="aposentadoria-contribuicao" className="font-medium">
                  Aposentadoria por Tempo de Contribuição
                </Label>
                <div className="flex flex-wrap gap-4 mt-1 ml-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="aposentadoria-contribuicao-deficiencia" />
                    <Label htmlFor="aposentadoria-contribuicao-deficiencia">da pessoa com deficiência</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="beneficios-assistenciais" />
              <div>
                <Label htmlFor="beneficios-assistenciais" className="font-medium">
                  Benefícios Assistenciais
                </Label>
                <div className="flex flex-wrap gap-4 mt-1 ml-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="beneficios-assistenciais-idoso" />
                    <Label htmlFor="beneficios-assistenciais-idoso">ao idoso</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="beneficios-assistenciais-deficiente" />
                    <Label htmlFor="beneficios-assistenciais-deficiente">à pessoa com deficiência</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="beneficios-assistenciais-microcefalia" />
              <div>
                <Label htmlFor="beneficios-assistenciais-microcefalia" className="font-medium">
                  à pessoa com microcefalia
                </Label>
                <div className="flex flex-wrap gap-4 mt-1 ml-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="beneficios-assistenciais-trabalhador" />
                    <Label htmlFor="beneficios-assistenciais-trabalhador">ao trabalhador portuário avulso</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="pensao-morte" />
              <div>
                <Label htmlFor="pensao-morte" className="font-medium">
                  Pensão por Morte
                </Label>
                <div className="flex flex-wrap gap-4 mt-1 ml-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pensao-morte-rural" />
                    <Label htmlFor="pensao-morte-rural">rural</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pensao-morte-urbana" />
                    <Label htmlFor="pensao-morte-urbana">urbana</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="pensao-talidomida" />
              <Label htmlFor="pensao-talidomida" className="font-medium">
                Pensão especial síndrome da Talidomida
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="pensao-zika" />
              <Label htmlFor="pensao-zika" className="font-medium">
                Pensão especial - crianças com síndrome congênita do zika virus
              </Label>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="auxilio-reclusao" />
              <div>
                <Label htmlFor="auxilio-reclusao" className="font-medium">
                  Auxílio-Reclusão
                </Label>
                <div className="flex flex-wrap gap-4 mt-1 ml-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="auxilio-reclusao-rural" />
                    <Label htmlFor="auxilio-reclusao-rural">rural</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="auxilio-reclusao-urbana" />
                    <Label htmlFor="auxilio-reclusao-urbana">urbano</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="salario-maternidade" />
              <div>
                <Label htmlFor="salario-maternidade" className="font-medium">
                  Salário Maternidade
                </Label>
                <div className="flex flex-wrap gap-4 mt-1 ml-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="salario-maternidade-rural" />
                    <Label htmlFor="salario-maternidade-rural">rural</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="salario-maternidade-urbana" />
                    <Label htmlFor="salario-maternidade-urbana">urbano</Label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="seguro-desemprego" />
              <Label htmlFor="seguro-desemprego" className="font-medium">
                Seguro-Desemprego Pescador Artesanal
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="certidao-tempo-servico" />
              <Label htmlFor="certidao-tempo-servico" className="font-medium">
                Certidão de Tempo de Contribuição - CTC
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="copia-processo" />
              <Label htmlFor="copia-processo" className="font-medium">
                Cópia de Processos
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="revisao-beneficio" />
              <Label htmlFor="revisao-beneficio" className="font-medium">
                Revisão de Benefícios e Certidões
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="recurso" />
              <Label htmlFor="recurso" className="font-medium">
                Recurso
              </Label>
            </div>
            
            <div className="flex items-start space-x-2 pt-4">
              <Checkbox id="atualizacao-manutencao" />
              <Label htmlFor="atualizacao-manutencao" className="font-medium">
                Atualizações para manutenção do benefício e outros serviços relacionados, na modalidade de atendimento à distância, bem como a preparação e instrução de requerimentos para posterior análise pelo INSS
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="orientacoes-informacoes" />
              <Label htmlFor="orientacoes-informacoes" className="font-medium">
                Orientações e informações sobre formas de acesso aos serviços digitais do INSS
              </Label>
            </div>
          </div>
        </form>
        
        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" form="form-termo-representacao">
            Gerar Documento
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
