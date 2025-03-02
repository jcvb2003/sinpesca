
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function DataConnectorInfo() {
  return (
    <Alert className="mb-6">
      <Info className="h-4 w-4" />
      <AlertTitle>Sobre armazenamento de dados</AlertTitle>
      <AlertDescription className="text-sm">
        <p className="mb-2">
          Em um ambiente de produção, esta aplicação deveria ser conectada a um banco de dados real.
          Opções recomendadas:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Supabase</strong>: Para autenticação, armazenamento e APIs serverless
          </li>
          <li>
            <strong>Microsoft Access</strong>: Para compatibilidade com sistemas existentes
          </li>
          <li>
            <strong>PostgreSQL</strong>: Para um banco de dados relacional robusto
          </li>
        </ul>
        <p className="mt-2 text-xs italic">
          Atualmente, o sistema está utilizando dados simulados para demonstração.
        </p>
      </AlertDescription>
    </Alert>
  );
}
