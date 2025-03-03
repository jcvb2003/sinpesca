
import React from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FileText, ChevronDown } from "lucide-react";

export type DocumentType = "inss" | "residence" | "representation" | "all";

interface DocumentTypeSelectorProps {
  onSelect: (type: DocumentType) => void;
  triggerClassName?: string;
}

export function DocumentTypeSelector({ onSelect, triggerClassName }: DocumentTypeSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={`gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 border-blue-200 ${triggerClassName}`}
        >
          <FileText size={16} />
          <span>Documentos</span>
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={() => onSelect("inss")} className="cursor-pointer">
          Requerimento do INSS
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("residence")} className="cursor-pointer">
          Declaração de Residência
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("representation")} className="cursor-pointer">
          Termo de Representação
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("all")} className="cursor-pointer">
          Todos
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
