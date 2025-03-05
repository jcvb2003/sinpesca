
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, ReactNode } from "react";

interface FormContainerProps {
  frontTab: ReactNode;
  backTab: ReactNode;
  otherTab: ReactNode;
  formActions: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

export function FormContainer({ 
  frontTab, 
  backTab, 
  otherTab, 
  formActions, 
  onSubmit 
}: FormContainerProps) {
  const [activeTab, setActiveTab] = useState("frente");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-slideUp">
      <form onSubmit={onSubmit}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger 
              value="frente" 
              className={`py-3 text-center ${activeTab === "frente" ? "border-b-2 border-[rgb(3,187,133)]" : ""}`}
            >
              Frente
            </TabsTrigger>
            <TabsTrigger 
              value="verso" 
              className={`py-3 text-center ${activeTab === "verso" ? "border-b-2 border-[rgb(3,187,133)]" : ""}`}
            >
              Verso
            </TabsTrigger>
            <TabsTrigger 
              value="outros" 
              className={`py-3 text-center ${activeTab === "outros" ? "border-b-2 border-[rgb(3,187,133)]" : ""}`}
            >
              Outros
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="frente" className="mt-4">
            {frontTab}
          </TabsContent>
          
          <TabsContent value="verso" className="mt-4">
            {backTab}
          </TabsContent>
          
          <TabsContent value="outros" className="mt-4">
            {otherTab}
          </TabsContent>
          
          {formActions}
        </Tabs>
      </form>
    </div>
  );
}
