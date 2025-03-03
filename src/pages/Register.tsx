
import { PageLayout } from "@/components/layout/PageLayout";
import { RegisterForm } from "@/components/register/RegisterForm";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { members } from "@/data/mockMembers";

const Register = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [memberName, setMemberName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const memberId = params.get('memberId');
    
    if (memberId) {
      const member = members.find(m => m.id === memberId);
      if (member) {
        setIsEditing(true);
        setMemberName(member.fullName);
      }
    } else {
      setIsEditing(false);
      setMemberName("");
    }
  }, [location.search]);

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
