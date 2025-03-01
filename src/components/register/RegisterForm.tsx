
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
    <div className="bg-white rounded-lg shadow-sm p-6 animate-slideUp">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Cadastro de Sócios</h2>
          <p className="text-gray-600 mt-1">Preencha o formulário para cadastrar um novo sócio</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger 
              value="frente" 
              className="py-3 text-center"
            >
              Frente
            </TabsTrigger>
            <TabsTrigger 
              value="verso" 
              className="py-3 text-center"
            >
              Verso
            </TabsTrigger>
            <TabsTrigger 
              value="outros" 
              className="py-3 text-center"
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
