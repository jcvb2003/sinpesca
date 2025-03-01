
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FrontTab } from "./tabs/FrontTab";
import { BackTab } from "./tabs/BackTab";
import { OtherTab } from "./tabs/OtherTab";
import { useToast } from "@/components/ui/use-toast";

export function RegisterForm() {
  const [activeTab, setActiveTab] = useState("frente");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cadastro Realizado",
      description: "Novo sócio cadastrado com sucesso!",
    });
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6 animate-slideUp">
      <form onSubmit={handleSubmit}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger 
              value="frente" 
              className={`py-3 ${activeTab === 'frente' ? 'bg-primary text-white' : 'bg-gray-100'}`}
            >
              Frente
            </TabsTrigger>
            <TabsTrigger 
              value="verso" 
              className={`py-3 ${activeTab === 'verso' ? 'bg-primary text-white' : 'bg-gray-100'}`}
            >
              Verso
            </TabsTrigger>
            <TabsTrigger 
              value="outros" 
              className={`py-3 ${activeTab === 'outros' ? 'bg-primary text-white' : 'bg-gray-100'}`}
            >
              Outros
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="frente" className="mt-4">
            <FrontTab />
          </TabsContent>
          
          <TabsContent value="verso" className="mt-4">
            <BackTab />
          </TabsContent>
          
          <TabsContent value="outros" className="mt-4">
            <OtherTab />
          </TabsContent>
          
          <div className="flex justify-end mt-8 space-x-4">
            <Button variant="outline" type="button">
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Cadastrar Sócio
            </Button>
          </div>
        </Tabs>
      </form>
    </div>
  );
}
