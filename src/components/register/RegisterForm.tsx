
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
import { supabase } from "@/integrations/supabase/client";

export function RegisterForm() {
  const [activeTab, setActiveTab] = useState("frente");
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [formData, setFormData] = useState<Partial<Member>>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const memberId = params.get('memberId');
    
    if (memberId) {
      // First try to get data from Supabase
      fetchMemberData(memberId);
    }
  }, [location.search]);

  const fetchMemberData = async (memberId: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .eq('id', memberId)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setEditingMember(data as Member);
        setFormData(data);
      } else {
        // Fallback to mockdata if not found in database
        const mockMember = members.find(m => m.id === memberId);
        if (mockMember) {
          setEditingMember(mockMember);
          setFormData(mockMember);
        }
      }
    } catch (error) {
      console.error('Error fetching member data:', error);
      toast({
        title: "Erro ao carregar dados",
        description: "Não foi possível carregar os dados do sócio.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingMember) {
        // Update existing member
        const { error } = await supabase
          .from('members')
          .update(formData)
          .eq('id', editingMember.id);

        if (error) throw error;

        toast({
          title: "Membro Atualizado",
          description: "As informações do sócio foram atualizadas com sucesso!"
        });
      } else {
        // Create new member
        const { error } = await supabase
          .from('members')
          .insert([{ ...formData, full_name: formData.fullName }]);

        if (error) throw error;

        toast({
          title: "Cadastro Realizado",
          description: "Novo sócio cadastrado com sucesso!"
        });
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving member data:', error);
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao salvar os dados do sócio.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = async () => {
    if (!editingMember) return;
    
    setLoading(true);
    try {
      const { error } = await supabase
        .from('members')
        .delete()
        .eq('id', editingMember.id);
      
      if (error) throw error;
      
      toast({
        title: "Membro Excluído",
        description: "O sócio foi excluído com sucesso!"
      });
      navigate('/');
    } catch (error) {
      console.error('Error deleting member:', error);
      toast({
        title: "Erro ao excluir",
        description: "Ocorreu um erro ao excluir o sócio.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
      setShowDeleteConfirmation(false);
    }
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
            <FrontTab 
              member={editingMember} 
              formData={formData} 
              onInputChange={handleInputChange} 
            />
          </TabsContent>
          
          <TabsContent value="verso" className="mt-4">
            <BackTab 
              member={editingMember} 
              formData={formData} 
              onInputChange={handleInputChange} 
            />
          </TabsContent>
          
          <TabsContent value="outros" className="mt-4">
            <OtherTab 
              formData={formData} 
              onInputChange={handleInputChange} 
            />
          </TabsContent>
          
          <div className="flex justify-end mt-8 space-x-4">
            {editingMember ? (
              <>
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={handleCancel}
                  className="flex items-center gap-2"
                  disabled={loading}
                >
                  <X size={16} />
                  Cancelar
                </Button>
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={handleDelete}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-red-50 border-red-200"
                  disabled={loading}
                >
                  <Trash size={16} />
                  Excluir
                </Button>
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                  disabled={loading}
                >
                  <Save size={16} />
                  {loading ? "Salvando..." : "Salvar"}
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  type="button" 
                  onClick={handleCancel}
                  disabled={loading}
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90"
                  disabled={loading}
                >
                  {loading ? "Cadastrando..." : "Cadastrar Sócio"}
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
            <AlertDialogCancel disabled={loading}>Cancelar</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete} 
              className="bg-red-600 text-white hover:bg-red-700"
              disabled={loading}
            >
              {loading ? "Excluindo..." : "Excluir"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
