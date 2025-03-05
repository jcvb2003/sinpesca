
import { useState } from "react";
import { Member } from "@/types/member";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { DbMember, memberToDbMember } from "@/types/member";

export const useMemberForm = (initialMember?: Member | null) => {
  const [formData, setFormData] = useState<Partial<Member>>(initialMember || {});
  const [loading, setLoading] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: any) => {
    let formattedValue = value;
    
    // Format value based on field type
    if (typeof value === 'string') {
      if (field === 'email' || field === 'professionalEmail') {
        formattedValue = value.toLowerCase();
      } else {
        formattedValue = value.toUpperCase();
      }
    }

    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.fullName) {
        toast({
          title: "Erro ao salvar",
          description: "Nome completo é obrigatório",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      const dbData = memberToDbMember(formData);
      
      if (initialMember) {
        const { error } = await supabase
          .from('members')
          .update(dbData)
          .eq('id', initialMember.id);

        if (error) throw error;

        toast({
          title: "Membro Atualizado",
          description: "As informações do sócio foram atualizadas com sucesso!"
        });
      } else {
        // Generate a unique ID for the new member
        const newMemberId = crypto.randomUUID();
        
        const { error } = await supabase
          .from('members')
          .insert({
            ...dbData,
            id: newMemberId,
            full_name: formData.fullName,
            status: formData.status || 'active'
          });

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

  const handleDelete = async () => {
    if (!initialMember) return;
    
    setLoading(true);
    try {
      const { error } = await supabase
        .from('members')
        .delete()
        .eq('id', initialMember.id);
      
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

  const handleCancel = () => {
    navigate('/');
  };

  return {
    formData,
    loading,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    handleInputChange,
    handleSubmit,
    handleDelete,
    handleCancel,
    isEditing: !!initialMember
  };
};
