import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Member } from "@/types/member";
import { MemberStatusBadge } from "./MemberStatusBadge";
import { MemberModal } from "./MemberModal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { DocumentSelectionDialog } from "../documents/DocumentSelectionDialog";
import { INSSRequestDialog } from "../documents/INSSRequestDialog";
import { RepresentationTermDialog } from "../documents/RepresentationTermDialog";
interface MemberTableProps {
  members: Member[];
  filteredStatus?: string[];
  sortBy?: string;
}
export function MemberTable({
  members,
  filteredStatus,
  sortBy = "name"
}: MemberTableProps) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showDocumentSelection, setShowDocumentSelection] = useState(false);
  const [showINSSRequest, setShowINSSRequest] = useState(false);
  const [showRepresentationTerm, setShowRepresentationTerm] = useState(false);
  const [activeMember, setActiveMember] = useState<Member | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();

  // Filter members if filteredStatus array is provided
  const statusFilteredMembers = filteredStatus && filteredStatus.length > 0 ? members.filter(member => filteredStatus.includes(member.status)) : members;

  // Sort members based on sortBy
  const sortedMembers = [...statusFilteredMembers].sort((a, b) => {
    if (sortBy === "name") {
      return a.fullName.localeCompare(b.fullName);
    } else if (sortBy === "registration") {
      return a.registrationNumber.localeCompare(b.registrationNumber);
    } else if (sortBy === "date") {
      return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
    }
    return 0;
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedMembers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedMembers = sortedMembers.slice(startIndex, endIndex);
  const handleAction = (action: string, member: Member) => {
    if (action === "documents") {
      setActiveMember(member);
      setShowDocumentSelection(true);
    } else if (action === "edit") {
      navigate(`/register?memberId=${member.id}`);
      toast({
        title: "Editar",
        description: `Editando ${member.fullName}`
      });
    } else if (action === "delete") {
      toast({
        title: "Excluir",
        description: `Excluindo ${member.fullName}`,
        variant: "destructive"
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
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };
  return <div className="w-full overflow-hidden border rounded-lg shadow-sm bg-white animate-slideUp">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-600">Nº Registro</TableHead>
              <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-600">Nome Completo</TableHead>
              <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-600">CPF</TableHead>
              <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-600">Localidade</TableHead>
              <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</TableHead>
              <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-600">Data de Adesão</TableHead>
              <TableHead className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedMembers.map(member => <TableRow key={member.id} className="border-b hover:bg-gray-50 transition-colors cursor-pointer">
                <TableCell className="px-4 py-3 text-sm" onClick={() => setSelectedMember(member)}>
                  <div>
                    {member.registrationNumber}
                    {member.formerRegistrationNumber && ` (${member.formerRegistrationNumber})`}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-sm" onClick={() => setSelectedMember(member)}>
                  {member.fullName}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm" onClick={() => setSelectedMember(member)}>
                  {member.cpf}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm" onClick={() => setSelectedMember(member)}>
                  {member.location || member.city}
                </TableCell>
                <TableCell className="px-4 py-3" onClick={() => setSelectedMember(member)}>
                  <MemberStatusBadge status={member.status} />
                </TableCell>
                <TableCell className="px-4 py-3 text-sm" onClick={() => setSelectedMember(member)}>
                  {new Date(member.joinDate).toLocaleDateString("pt-BR")}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={e => {
                  e.stopPropagation();
                  handleAction("documents", member);
                }} className="h-8 w-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                      <FileText size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={e => {
                  e.stopPropagation();
                  handleAction("edit", member);
                }} className="h-8 w-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                      <Pencil size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={e => {
                  e.stopPropagation();
                  handleAction("delete", member);
                }} className="h-8 w-8 text-red-600 hover:text-red-800 hover:bg-red-50">
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>)}
          </TableBody>
          
        </Table>
      </div>
      
      <div className="py-3 px-4 border-t flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Itens por página:</span>
          <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
            <SelectTrigger className="h-8 w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Página {currentPage} de {totalPages}
          </div>
          <div className="flex space-x-1">
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <ChevronLeft size={16} />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      {selectedMember && <MemberModal member={selectedMember} isOpen={!!selectedMember} onClose={() => setSelectedMember(null)} onAction={handleAction} />}

      <DocumentSelectionDialog isOpen={showDocumentSelection} onClose={() => setShowDocumentSelection(false)} onSelectDocument={handleSelectDocument} />

      <INSSRequestDialog isOpen={showINSSRequest} onClose={() => setShowINSSRequest(false)} memberId={activeMember?.id} />

      <RepresentationTermDialog isOpen={showRepresentationTerm} onClose={() => setShowRepresentationTerm(false)} memberId={activeMember?.id} />
    </div>;
}