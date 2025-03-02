
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";

export default function Reports() {
  return (
    <PageLayout>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-8">Relatórios</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Relatório de Membros
              </CardTitle>
              <CardDescription>
                Visualize e exporte dados de todos os membros
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-2">
              <p className="text-sm text-gray-500">
                Relatório detalhado com informações de todos os membros cadastrados, incluindo status, data de associação e outras informações importantes.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/reports/members">
                <Button variant="default">Acessar Relatório</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Relatório de Requerimentos
              </CardTitle>
              <CardDescription>
                Visualize e exporte dados de todos os requerimentos do INSS
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-2">
              <p className="text-sm text-gray-500">
                Relatório detalhado com informações de todos os requerimentos do INSS realizados, incluindo status, data e tipo de benefício solicitado.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/reports/requests">
                <Button variant="default">Acessar Relatório</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
