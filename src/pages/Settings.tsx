
import { PageLayout } from "@/components/layout/PageLayout";
import { DevelopmentCard } from "@/components/common/DevelopmentCard";

const Settings = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
          <p className="text-gray-600 mt-1">Customize as configurações do sistema</p>
        </div>
        
        <DevelopmentCard />
      </div>
    </PageLayout>
  );
};

export default Settings;
