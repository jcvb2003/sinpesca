
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Pencil, Trash2 } from "lucide-react";
import { Member } from "@/types/member";
import { MemberStatusBadge } from "./MemberStatusBadge";

interface MemberModalProps {
  member: Member;
  isOpen: boolean;
  onClose: () => void;
  onAction: (action: string, member: Member) => void;
}

export function MemberModal({ member, isOpen, onClose, onAction }: MemberModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            {member.fullName}
            <MemberStatusBadge status={member.status} className="ml-2" />
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Informações detalhadas do associado
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <h3 className="text-base font-medium text-gray-900 border-b pb-2">Informações Pessoais</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm font-medium text-gray-500">Nome completo</p>
                <p className="text-sm">{member.fullName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Data de nascimento</p>
                <p className="text-sm">{new Date(member.birthDate).toLocaleDateString("pt-BR")}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">CPF</p>
                <p className="text-sm">{member.cpf}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">RG</p>
                <p className="text-sm">{member.rg}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Nº Registro</p>
                <p className="text-sm">{member.registrationNumber}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Registro antigo</p>
                <p className="text-sm">{member.formerRegistrationNumber || "N/A"}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 border-b pb-2">Dados Profissionais</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm font-medium text-gray-500">Profissão</p>
                <p className="text-sm">{member.profession}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Local de trabalho</p>
                <p className="text-sm">{member.workplace || "N/A"}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 border-b pb-2">Endereço</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm font-medium text-gray-500">Cidade</p>
                <p className="text-sm">{member.city}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Estado</p>
                <p className="text-sm">{member.state_address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Bairro</p>
                <p className="text-sm">{member.district || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">CEP</p>
                <p className="text-sm">{member.zipCode || "N/A"}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 border-b pb-2">Contato</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm font-medium text-gray-500">Telefone</p>
                <p className="text-sm">{member.phone || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">E-mail</p>
                <p className="text-sm">{member.email || "N/A"}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 border-b pb-2">Status e Datas</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-sm font-medium text-gray-500">Data de adesão</p>
                <p className="text-sm">{new Date(member.joinDate).toLocaleDateString("pt-BR")}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <MemberStatusBadge status={member.status} />
              </div>
            </div>
          </div>
          
          {member.observations && (
            <div>
              <h3 className="text-base font-medium text-gray-900 border-b pb-2">Observações</h3>
              <p className="text-sm mt-2">{member.observations}</p>
            </div>
          )}
        </div>
        
        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button
            variant="outline"
            className="px-3 gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 border-blue-200"
            onClick={() => onAction("documents", member)}
          >
            <FileText size={16} />
            <span>Documentos</span>
          </Button>
          <Button
            variant="outline"
            className="px-3 gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 border-blue-200"
            onClick={() => onAction("edit", member)}
          >
            <Pencil size={16} />
            <span>Editar</span>
          </Button>
          <Button
            variant="outline"
            className="px-3 gap-1 text-red-600 hover:text-red-800 hover:bg-red-50 border-red-200"
            onClick={() => onAction("delete", member)}
          >
            <Trash2 size={16} />
            <span>Excluir</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
