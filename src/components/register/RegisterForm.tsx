
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Member, DbMember, dbMemberToMember } from "@/types/member";
import { FrontTab } from "./tabs/FrontTab";
import { BackTab } from "./tabs/BackTab";
import { OtherTab } from "./tabs/OtherTab";
import { useMemberForm } from "@/hooks/useMemberForm";
import { FormContainer } from "./components/FormContainer";
import { FormActions } from "./components/FormActions";
import { DeleteConfirmationDialog } from "./components/DeleteConfirmationDialog";
import { useToast } from "@/components/ui/use-toast";

export function RegisterForm() {
  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const location = useLocation();
  const { toast } = useToast();
  
  const {
    formData,
    loading,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    handleInputChange,
    handleSubmit,
    handleDelete,
    handleCancel,
    isEditing
  } = useMemberForm(editingMember);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const memberId = params.get('memberId');
    
    if (memberId) {
      fetchMemberData(memberId);
    }
  }, [location.search]);

  const fetchMemberData = async (memberId: string) => {
    try {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .eq('id', memberId)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        const convertedMember = dbMemberToMember(data as DbMember);
        setEditingMember(convertedMember);
      }
    } catch (error) {
      console.error('Error fetching member data:', error);
      toast({
        title: "Erro ao carregar dados",
        description: "Não foi possível carregar os dados do sócio.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <FormContainer
        frontTab={
          <FrontTab 
            member={editingMember} 
            formData={formData} 
            onInputChange={(field, value) => handleInputChange(field, value)} 
          />
        }
        backTab={
          <BackTab 
            member={editingMember} 
            formData={formData} 
            onInputChange={(field, value) => handleInputChange(field, value)} 
          />
        }
        otherTab={
          <OtherTab 
            formData={formData} 
            onInputChange={(field, value) => handleInputChange(field, value)} 
          />
        }
        formActions={
          <FormActions 
            isEditing={isEditing} 
            loading={loading} 
            onCancel={handleCancel} 
            onDelete={() => setShowDeleteConfirmation(true)} 
          />
        }
        onSubmit={handleSubmit}
      />

      <DeleteConfirmationDialog
        open={showDeleteConfirmation}
        onOpenChange={setShowDeleteConfirmation}
        onConfirmDelete={handleDelete}
        loading={loading}
      />
    </>
  );
}
