
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INSSRequestForm } from "@/components/documents/INSSRequestForm";
import { ResidenceDeclarationForm } from "@/components/documents/ResidenceDeclarationForm";
import { RepresentationTermForm } from "@/components/documents/RepresentationTermForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { members } from "@/data/mockMembers";

const Documents = () => {
  const [activeTab, setActiveTab] = useState("inss");
  const [searchParams] = useSearchParams();
  const memberId = searchParams.get("memberId");
  const navigate = useNavigate();
  
  const memberData = memberId 
    ? members.find(m => m.id === memberId) 
    : null;

  useEffect(() => {
    // Set specific document tab if provided in URL
    const docType = searchParams.get("type");
    if (docType && ["inss", "residence", "representation"].includes(docType)) {
      setActiveTab(docType);
    }
  }, [searchParams]);

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Documentos</h1>
            <p className="text-gray-600 mt-1">
              {memberData 
                ? `Documentos de ${memberData.fullName}` 
                : "Visualize e gerencie documentos dos sócios"}
            </p>
          </div>
          
          {memberId && (
            <Button 
              variant="outline" 
              className="gap-1"
              onClick={() => navigate("/")}
            >
              <ArrowLeft size={16} />
              <span>Voltar para sócios</span>
            </Button>
          )}
        </div>
        
        <div className="bg-white rounded-lg border shadow-sm p-6 animate-slideUp">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger 
                value="inss" 
                className="py-3 text-center"
              >
                Requerimento do INSS
              </TabsTrigger>
              <TabsTrigger 
                value="residence" 
                className="py-3 text-center"
              >
                Declaração de Residência
              </TabsTrigger>
              <TabsTrigger 
                value="representation" 
                className="py-3 text-center"
              >
                Termo de Representação
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="inss" className="mt-4">
              <INSSRequestForm memberId={memberId} />
            </TabsContent>
            
            <TabsContent value="residence" className="mt-4">
              <ResidenceDeclarationForm memberId={memberId} />
            </TabsContent>
            
            <TabsContent value="representation" className="mt-4">
              <RepresentationTermForm memberId={memberId} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default Documents;
