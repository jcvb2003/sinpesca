
import { PageLayout } from "@/components/layout/PageLayout";
import { RegisterForm } from "@/components/register/RegisterForm";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Register = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [memberName, setMemberName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const memberId = params.get('memberId');
    
    if (memberId) {
      // Fetch member name from Supabase
      fetchMemberName(memberId);
    } else {
      setIsEditing(false);
      setMemberName("");
    }
  }, [location.search]);

  const fetchMemberName = async (memberId: string) => {
    try {
      const { data, error } = await supabase
        .from('members')
        .select('full_name')
        .eq('id', memberId)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setIsEditing(true);
        setMemberName(data.full_name);
      } else {
        // Fallback to mock data
        const mockMember = (await import('@/data/mockMembers')).members.find(m => m.id === memberId);
        if (mockMember) {
          setIsEditing(true);
          setMemberName(mockMember.fullName);
        }
      }
    } catch (error) {
      console.error('Error fetching member name:', error);
    }
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditing ? `Editar Sócio: ${memberName}` : "Cadastro de Sócios"}
          </h1>
          <p className="text-gray-600 mt-1">
            {isEditing 
              ? "Edite as informações do sócio e salve as alterações" 
              : "Preencha o formulário para cadastrar um novo sócio"}
          </p>
        </div>
        
        <RegisterForm />
      </div>
    </PageLayout>
  );
};

export default Register;
