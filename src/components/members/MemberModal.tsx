
import { Member } from "@/types/member";
import { MemberStatusBadge } from "./MemberStatusBadge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Pencil, Trash2, X } from "lucide-react";

interface MemberModalProps {
  member: Member;
  isOpen: boolean;
  onClose: () => void;
  onAction: (action: string, member: Member) => void;
}

export function MemberModal({ 
  member, 
  isOpen, 
  onClose,
  onAction
}: MemberModalProps) {
  // Function to format date to PT-BR format
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-[#1e2132] text-white">
        <DialogHeader className="p-6 flex flex-row justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
              {member.fullName.charAt(0)}
            </div>
            <div>
              <DialogTitle className="text-white">{member.fullName}</DialogTitle>
              <p className="text-gray-300 text-sm mt-1">
                {member.registrationNumber} 
                {member.formerRegistrationNumber && ` (Antigo: ${member.formerRegistrationNumber})`}
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <X size={18} />
          </Button>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6 p-6">
          <div>
            <h3 className="text-primary uppercase text-sm font-medium mb-3">Informações Pessoais</h3>
            <div className="space-y-2">
              <div>
                <p className="text-gray-300 text-xs">Nome Completo</p>
                <p className="text-white">{member.fullName}</p>
              </div>
              {member.birthDate && (
                <div>
                  <p className="text-gray-300 text-xs">Data de Nascimento</p>
                  <p className="text-white">{formatDate(member.birthDate)}</p>
                </div>
              )}
              {(member.fatherName || member.motherName) && (
                <div>
                  <p className="text-gray-300 text-xs">Filiação</p>
                  <p className="text-white">{member.fatherName} e {member.motherName}</p>
                </div>
              )}
            </div>
            
            <h3 className="text-primary uppercase text-sm font-medium mt-6 mb-3">Dados Profissionais</h3>
            <div className="space-y-2">
              {member.profession && (
                <div>
                  <p className="text-gray-300 text-xs">Profissão</p>
                  <p className="text-white">{member.profession}</p>
                </div>
              )}
              {member.workplace && (
                <div>
                  <p className="text-gray-300 text-xs">Local de Trabalho</p>
                  <p className="text-white">{member.workplace}</p>
                </div>
              )}
              {member.professionalEmail && (
                <div>
                  <p className="text-gray-300 text-xs">Email Profissional</p>
                  <p className="text-white">{member.professionalEmail}</p>
                </div>
              )}
            </div>
            
            <h3 className="text-primary uppercase text-sm font-medium mt-6 mb-3">Observações</h3>
            <p className="text-white">{member.observations || "Nenhuma observação"}</p>
          </div>
          
          <div>
            <h3 className="text-primary uppercase text-sm font-medium mb-3">Endereço</h3>
            <div className="space-y-2">
              {member.street && (
                <div>
                  <p className="text-gray-300 text-xs">Logradouro</p>
                  <p className="text-white">{member.street}, {member.number}</p>
                </div>
              )}
              {member.district && (
                <div>
                  <p className="text-gray-300 text-xs">Bairro</p>
                  <p className="text-white">{member.district}</p>
                </div>
              )}
              {(member.city || member.state_address) && (
                <div>
                  <p className="text-gray-300 text-xs">Cidade/Estado</p>
                  <p className="text-white">{member.city}, {member.state_address}</p>
                </div>
              )}
              {member.zipCode && (
                <div>
                  <p className="text-gray-300 text-xs">CEP</p>
                  <p className="text-white">{member.zipCode}</p>
                </div>
              )}
            </div>
            
            <h3 className="text-primary uppercase text-sm font-medium mt-6 mb-3">Contato</h3>
            <div className="space-y-2">
              {member.phone && (
                <div>
                  <p className="text-gray-300 text-xs">Telefone</p>
                  <p className="text-white">{member.phone}</p>
                </div>
              )}
              {member.email && (
                <div>
                  <p className="text-gray-300 text-xs">Email</p>
                  <p className="text-white">{member.email}</p>
                </div>
              )}
            </div>
            
            <h3 className="text-primary uppercase text-sm font-medium mt-6 mb-3">Status e Datas</h3>
            <div className="space-y-2">
              <div>
                <p className="text-gray-300 text-xs">Status</p>
                <MemberStatusBadge status={member.status} className="mt-1" />
              </div>
              <div>
                <p className="text-gray-300 text-xs">Data de Adesão</p>
                <p className="text-white">{formatDate(member.joinDate)}</p>
              </div>
              <div>
                <p className="text-gray-300 text-xs">Data de Registro</p>
                <p className="text-white">{formatDate(member.registrationDate)}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-3 p-4 border-t border-gray-700">
          <Button 
            variant="secondary"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => onAction("documents", member)}
          >
            <FileText size={18} className="mr-2" />
            Documentos
          </Button>
          <Button 
            variant="secondary"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => onAction("edit", member)}
          >
            <Pencil size={18} className="mr-2" />
            Editar
          </Button>
          <Button 
            variant="destructive"
            onClick={() => onAction("delete", member)}
          >
            <Trash2 size={18} className="mr-2" />
            Excluir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
