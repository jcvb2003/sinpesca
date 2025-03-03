import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Pencil, Trash2, User } from "lucide-react";
import { Member } from "@/types/member";
import { MemberStatusBadge } from "./MemberStatusBadge";
import { useState } from "react";
import { DocumentSelectionDialog } from "../documents/DocumentSelectionDialog";
import { INSSRequestDialog } from "../documents/INSSRequestDialog";
import { RepresentationTermDialog } from "../documents/RepresentationTermDialog";
import { useNavigate } from "react-router-dom";

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
  const [showDocumentSelection, setShowDocumentSelection] = useState(false);
  const [showINSSRequest, setShowINSSRequest] = useState(false);
  const [showRepresentationTerm, setShowRepresentationTerm] = useState(false);
  const navigate = useNavigate();

  const handleDocuments = () => {
    setShowDocumentSelection(true);
  };

  const handleSelectDocument = (type: string) => {
    setShowDocumentSelection(false);

    if (type === "inss") {
      setShowINSSRequest(true);
    } else if (type === "residence") {
      onClose();
      navigate(`/documents?memberId=${member.id}&type=residence`);
    } else if (type === "representation") {
      setShowRepresentationTerm(true);
    } else if (type === "all") {
      onClose();
      navigate(`/documents?memberId=${member.id}`);
    }
  };

  const handleEdit = () => {
    onClose();
    navigate(`/register?memberId=${member.id}`);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[1200px] max-h-[80vh] overflow-y-auto">
          <div className="absolute right-16 top-4 h-16 w-16 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 overflow-hidden">
            {member.profilePhoto ? (
              <img 
                src={member.profilePhoto} 
                alt={`Foto de ${member.fullName}`} 
                className="h-full w-full object-cover" 
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=80&h=80&fit=crop';
                }} 
              /> 
            ) : (
              <User className="h-8 w-8 text-gray-400" />
            )}
          </div>
          
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
            <Button variant="outline" className="px-3 gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 border-blue-200" onClick={handleDocuments}>
              <FileText size={16} />
              <span>Documentos</span>
            </Button>
            <Button variant="outline" className="px-3 gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 border-blue-200" onClick={handleEdit}>
              <Pencil size={16} />
              <span>Editar</span>
            </Button>
            <Button variant="outline" className="px-3 gap-1 text-red-600 hover:text-red-800 hover:bg-red-50 border-red-200" onClick={() => onAction("delete", member)}>
              <Trash2 size={16} />
              <span>Excluir</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <DocumentSelectionDialog 
        isOpen={showDocumentSelection}
        onClose={() => setShowDocumentSelection(false)}
        onSelectDocument={handleSelectDocument}
      />

      <INSSRequestDialog
        isOpen={showINSSRequest}
        onClose={() => setShowINSSRequest(false)}
        memberId={member.id}
      />

      <RepresentationTermDialog
        isOpen={showRepresentationTerm}
        onClose={() => setShowRepresentationTerm(false)}
        memberId={member.id}
      />
    </>
  );
}
