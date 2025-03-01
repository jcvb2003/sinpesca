
import { PageLayout } from "@/components/layout/PageLayout";
import { DevelopmentCard } from "@/components/common/DevelopmentCard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Upload, Download } from "lucide-react";

const Settings = () => {
  return (
    <PageLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Configurações</h1>
        <p className="text-gray-600 mb-6">Customize as configurações do sistema</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                <Download className="h-5 w-5 text-primary" />
                Importar ou Exportar
              </CardTitle>
              <CardDescription>
                Importe ou exporte dados do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-2">
              <p className="text-sm text-gray-500">
                Ferramenta para importar ou exportar dados completos do sistema, incluindo membros, solicitações e configurações.
              </p>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Importar
              </Button>
              <Button variant="default" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
            </CardFooter>
          </Card>
          
          <DevelopmentCard />
        </div>
      </div>
    </PageLayout>
  );
};

export default Settings;
