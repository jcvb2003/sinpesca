
import { PageLayout } from "@/components/layout/PageLayout";
import { DevelopmentCard } from "@/components/common/DevelopmentCard";

const Documents = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documentos</h1>
          <p className="text-gray-600 mt-1">Visualize e gerencie documentos dos sócios</p>
        </div>
        
        <DevelopmentCard />
      </div>
    </PageLayout>
  );
};

export default Documents;
