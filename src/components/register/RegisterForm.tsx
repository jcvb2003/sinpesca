
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FrontTab } from "./tabs/FrontTab";
import { BackTab } from "./tabs/BackTab";
import { OtherTab } from "./tabs/OtherTab";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { members } from "@/data/mockMembers";
import { Member } from "@/types/member";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Save, X, Trash } from "lucide-react";

export function RegisterForm() {
  const [activeTab, setActiveTab] = useState("frente");
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're editing an existing member
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const memberId = params.get('memberId');
    
    if (memberId) {
      const member = members.find(m => m.id === memberId);
      if (member) {
        setEditingMember(member);
      }
    }
  }, [location.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMember) {
      toast({
        title: "Membro Atualizado",
        description: "As informações do sócio foram atualizadas com sucesso!"
      });
    } else {
      toast({
        title: "Cadastro Realizado",
        description: "Novo sócio cadastrado com sucesso!"
      });
    }
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    toast({
      title: "Membro Excluído",
      description: "O sócio foi excluído com sucesso!"
    });
    navigate('/');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-slideUp">
      <form onSubmit={handleSubmit}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger 
              value="frente" 
              className={`py-3 text-center ${activeTab === "frente" ? "border-b-2 border-[rgb(3,187,133)]" : ""}`}
            >
              Frente
            </TabsTrigger>
            <TabsTrigger 
              value="verso" 
              className={`py-3 text-center ${activeTab === "verso" ? "border-b-2 border-[rgb(3,187,133)]" : ""}`}
            >
              Verso
            </TabsTrigger>
            <TabsTrigger 
              value="outros" 
              className={`py-3 text-center ${activeTab === "outros" ? "border-b-2 border-[rgb(3,187,133)]" : ""}`}
            >
              Outros
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="frente" className="mt-4">
            <FrontTab member={editingMember} />
          </TabsContent>
          
          <TabsContent value="verso" className="mt-4">
            <BackTab member={editingMember} />
          </TabsContent>
          
          <TabsContent value="outros" className="mt-4">
            <OtherTab member={editingMember} />
          </TabsContent>
          
          <div className="flex justify-end mt-8 space-x-4">
            {editingMember ? (
              <>
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={handleCancel}
                  className="flex items-center gap-2"
                >
                  <X size={16} />
                  Cancelar
                </Button>
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={handleDelete}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-red-50 border-red-200"
                >
                  <Trash size={16} />
                  Excluir
                </Button>
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                  <Save size={16} />
                  Salvar
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" type="button" onClick={handleCancel}>
                  Cancelar
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Cadastrar Sócio
                </Button>
              </>
            )}
          </div>
        </Tabs>
      </form>

      <AlertDialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Você tem certeza que deseja excluir este sócio? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 text-white hover:bg-red-700">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
