
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Member } from "@/types/member";
import { MemberStatusBadge } from "./MemberStatusBadge";
import { MemberModal } from "./MemberModal";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { DocumentTypeSelector, DocumentType } from "@/components/documents/DocumentTypeSelector";
import { INSSRequestDialog } from "@/components/documents/INSSRequestDialog";
import { RepresentationTermDialog } from "@/components/documents/RepresentationTermDialog";

interface MemberTableProps {
  members: Member[];
}

export function MemberTable({ members }: MemberTableProps) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showINSSForm, setShowINSSForm] = useState(false);
  const [showRepresentationForm, setShowRepresentationForm] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDocumentSelect = (type: DocumentType, member: Member) => {
    if (type === "inss") {
      setShowINSSForm(true);
    } else if (type === "representation") {
      setShowRepresentationForm(true);
    } else if (type === "residence") {
      navigate(`/documents?memberId=${member.id}&type=residence`);
      setSelectedMember(null);
    } else if (type === "all") {
      navigate(`/documents?memberId=${member.id}`);
      setSelectedMember(null);
    }
  };

  const handleAction = (action: string, member: Member) => {
    if (action === "documents") {
      // Just let the dropdown handle this
    } else if (action === "edit") {
      toast({
        title: "Editar",
        description: `Editando ${member.fullName}`,
      });
    } else if (action === "delete") {
      toast({
        title: "Excluir",
        description: `Excluindo ${member.fullName}`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full overflow-hidden border rounded-lg shadow-sm bg-white animate-slideUp">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Nº Registro</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Nome Completo</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">CPF</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Localidade</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Data de Adesão</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ações</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr 
                key={member.id} 
                className="border-b hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td 
                  className="px-4 py-3 text-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  <div>
                    {member.registrationNumber}
                    {member.formerRegistrationNumber && (
                      <div className="text-xs text-gray-500">
                        Antigo: {member.formerRegistrationNumber}
                      </div>
                    )}
                  </div>
                </td>
                <td 
                  className="px-4 py-3 text-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  {member.fullName}
                </td>
                <td 
                  className="px-4 py-3 text-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  {member.cpf}
                </td>
                <td 
                  className="px-4 py-3 text-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  {member.city}
                </td>
                <td 
                  className="px-4 py-3"
                  onClick={() => setSelectedMember(member)}
                >
                  <MemberStatusBadge status={member.status} />
                </td>
                <td 
                  className="px-4 py-3 text-sm"
                  onClick={() => setSelectedMember(member)}
                >
                  {new Date(member.joinDate).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <DocumentTypeSelector 
                      onSelect={(type) => handleDocumentSelect(type, member)}
                      triggerClassName="px-2 h-8"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction("edit", member);
                      }}
                      className="h-8 w-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                      <Pencil size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction("delete", member);
                      }}
                      className="h-8 w-8 text-red-600 hover:text-red-800 hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-3 px-4 text-sm text-gray-500 border-t flex justify-between items-center">
        <span>Lista de sócios da associação</span>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Download size={16} />
          <span>Exportar</span>
        </Button>
      </div>
      
      {selectedMember && (
        <MemberModal 
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          onAction={handleAction}
        />
      )}

      {showINSSForm && (
        <INSSRequestDialog
          isOpen={showINSSForm}
          onClose={() => setShowINSSForm(false)}
        />
      )}

      {showRepresentationForm && (
        <RepresentationTermDialog
          isOpen={showRepresentationForm}
          onClose={() => setShowRepresentationForm(false)}
        />
      )}
    </div>
  );
}
