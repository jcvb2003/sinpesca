
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INSSRequestForm } from "@/components/documents/INSSRequestForm";
import { ResidenceDeclarationForm } from "@/components/documents/ResidenceDeclarationForm";
import { RepresentationTermForm } from "@/components/documents/RepresentationTermForm";

const Documents = () => {
  const [activeTab, setActiveTab] = useState("inss");

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documentos</h1>
          <p className="text-gray-600 mt-1">Visualize e gerencie documentos dos sócios</p>
        </div>
        
        <div className="bg-white rounded-lg border shadow-sm p-6 animate-slideUp">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger 
                value="inss" 
                className={`py-3 ${activeTab === 'inss' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              >
                Requerimento do INSS
              </TabsTrigger>
              <TabsTrigger 
                value="residence" 
                className={`py-3 ${activeTab === 'residence' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              >
                Declaração de Residência
              </TabsTrigger>
              <TabsTrigger 
                value="representation" 
                className={`py-3 ${activeTab === 'representation' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              >
                Termo de Representação
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="inss" className="mt-4">
              <INSSRequestForm />
            </TabsContent>
            
            <TabsContent value="residence" className="mt-4">
              <ResidenceDeclarationForm />
            </TabsContent>
            
            <TabsContent value="representation" className="mt-4">
              <RepresentationTermForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default Documents;
