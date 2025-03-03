
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface DocumentSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDocument: (type: string) => void;
}

export function DocumentSelectionDialog({
  isOpen,
  onClose,
  onSelectDocument
}: DocumentSelectionDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Selecione o tipo de documento</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-4 py-4">
          <Button 
            variant="outline" 
            className="justify-start h-auto py-3 text-left"
            onClick={() => onSelectDocument("inss")}
          >
            <FileText className="mr-2 h-5 w-5 text-blue-500" />
            <div className="flex flex-col items-start">
              <span className="font-medium">Requerimento do INSS</span>
              <span className="text-xs text-gray-500">Seguro desemprego para pescador artesanal</span>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="justify-start h-auto py-3 text-left"
            onClick={() => onSelectDocument("residence")}
          >
            <FileText className="mr-2 h-5 w-5 text-green-500" />
            <div className="flex flex-col items-start">
              <span className="font-medium">Declaração de Residência</span>
              <span className="text-xs text-gray-500">Comprovação de endereço do sócio</span>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="justify-start h-auto py-3 text-left"
            onClick={() => onSelectDocument("representation")}
          >
            <FileText className="mr-2 h-5 w-5 text-purple-500" />
            <div className="flex flex-col items-start">
              <span className="font-medium">Termo de Representação</span>
              <span className="text-xs text-gray-500">Autorização para representação junto ao INSS</span>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="justify-start h-auto py-3 text-left"
            onClick={() => onSelectDocument("all")}
          >
            <FileText className="mr-2 h-5 w-5 text-gray-500" />
            <div className="flex flex-col items-start">
              <span className="font-medium">Todos os Documentos</span>
              <span className="text-xs text-gray-500">Gerar todos os documentos</span>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
