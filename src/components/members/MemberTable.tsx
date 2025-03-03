
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Member } from "@/types/member";
import { MemberStatusBadge } from "./MemberStatusBadge";
import { MemberModal } from "./MemberModal";
import { Button } from "@/components/ui/button";
import { FileText, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { DocumentSelectionDialog } from "../documents/DocumentSelectionDialog";
import { INSSRequestDialog } from "../documents/INSSRequestDialog";
import { RepresentationTermDialog } from "../documents/RepresentationTermDialog";

interface MemberTableProps {
  members: Member[];
}

export function MemberTable({ members }: MemberTableProps) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showDocumentSelection, setShowDocumentSelection] = useState(false);
  const [showINSSRequest, setShowINSSRequest] = useState(false);
  const [showRepresentationTerm, setShowRepresentationTerm] = useState(false);
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAction = (action: string, member: Member) => {
    if (action === "documents") {
      setActiveMember(member);
      setShowDocumentSelection(true);
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

  const handleSelectDocument = (type: string) => {
    setShowDocumentSelection(false);

    if (type === "inss") {
      setShowINSSRequest(true);
    } else if (type === "residence") {
      navigate(`/documents?memberId=${activeMember?.id}&type=residence`);
    } else if (type === "representation") {
      setShowRepresentationTerm(true);
    } else if (type === "all") {
      navigate(`/documents?memberId=${activeMember?.id}`);
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
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction("documents", member);
                      }}
                      className="h-8 w-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                      <FileText size={18} />
                    </Button>
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
      <div className="py-3 px-4 text-sm text-gray-500 border-t">
        Lista de sócios da associação
      </div>
      
      {selectedMember && (
        <MemberModal 
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          onAction={handleAction}
        />
      )}

      <DocumentSelectionDialog 
        isOpen={showDocumentSelection}
        onClose={() => setShowDocumentSelection(false)}
        onSelectDocument={handleSelectDocument}
      />

      <INSSRequestDialog
        isOpen={showINSSRequest}
        onClose={() => setShowINSSRequest(false)}
        memberId={activeMember?.id}
      />

      <RepresentationTermDialog
        isOpen={showRepresentationTerm}
        onClose={() => setShowRepresentationTerm(false)}
        memberId={activeMember?.id}
      />
    </div>
  );
}
