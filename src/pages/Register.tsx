
import { PageLayout } from "@/components/layout/PageLayout";
import { RegisterForm } from "@/components/register/RegisterForm";

const Register = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cadastro de Sócios</h1>
          <p className="text-gray-600 mt-1">Preencha o formulário para cadastrar um novo sócio</p>
        </div>
        
        <RegisterForm />
      </div>
    </PageLayout>
  );
};

export default Register;
