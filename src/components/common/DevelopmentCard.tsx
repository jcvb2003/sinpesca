
import { FileCode } from "lucide-react";

export function DevelopmentCard() {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-10 animate-slideUp">
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <FileCode className="text-primary" size={32} />
        </div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">Em Desenvolvimento</h2>
        <p className="text-gray-600 text-center max-w-md">
          Esta funcionalidade está em desenvolvimento e estará disponível em breve.
        </p>
      </div>
    </div>
  );
}
