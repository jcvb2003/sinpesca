
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { members } from "@/data/mockMembers";
import { RequesterSection } from "./inss/RequesterSection";
import { BoatSection } from "./inss/BoatSection";
import { PeriodSection } from "./inss/PeriodSection";
import { FormActions } from "./inss/FormActions";

interface INSSRequestFormProps {
  memberId?: string | null;
}

export function INSSRequestForm({ memberId }: INSSRequestFormProps) {
  const [activeTab, setActiveTab] = useState("requester");
  const memberData = memberId ? members.find(m => m.id === memberId) : null;

  useEffect(() => {
    if (memberData) {
      // Prefill form with member data if available
      // This is just a placeholder - in a real app you would populate the form fields
      console.log("Prefilling form with member data:", memberData);
    }
  }, [memberData]);

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger 
            value="requester" 
            className={`py-3 ${activeTab === 'requester' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Requerente
          </TabsTrigger>
          <TabsTrigger 
            value="boat" 
            className={`py-3 ${activeTab === 'boat' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Embarcação
          </TabsTrigger>
          <TabsTrigger 
            value="period" 
            className={`py-3 ${activeTab === 'period' ? 'bg-primary text-white' : 'bg-gray-100'}`}
          >
            Período e Atividade
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="requester" className="space-y-6">
          <RequesterSection />
        </TabsContent>
        
        <TabsContent value="boat" className="space-y-6">
          <BoatSection />
        </TabsContent>
        
        <TabsContent value="period" className="space-y-6">
          <PeriodSection />
        </TabsContent>
      </Tabs>
      
      <FormActions />
    </div>
  );
}
