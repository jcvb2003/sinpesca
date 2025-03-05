
import { Button } from "@/components/ui/button";
import { Save, X, Trash } from "lucide-react";

interface FormActionsProps {
  isEditing: boolean;
  loading: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export function FormActions({ isEditing, loading, onCancel, onDelete }: FormActionsProps) {
  return (
    <div className="flex justify-end mt-8 space-x-4">
      {isEditing ? (
        <>
          <Button 
            variant="outline" 
            type="button" 
            onClick={onCancel}
            className="flex items-center gap-2"
            disabled={loading}
          >
            <X size={16} />
            Cancelar
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            onClick={onDelete}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-red-50 border-red-200"
            disabled={loading}
          >
            <Trash size={16} />
            Excluir
          </Button>
          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary/90 flex items-center gap-2"
            disabled={loading}
          >
            <Save size={16} />
            {loading ? "Salvando..." : "Salvar"}
          </Button>
        </>
      ) : (
        <>
          <Button 
            variant="outline" 
            type="button" 
            onClick={onCancel}
            disabled={loading}
          >
            Cancelar
          </Button>
          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary/90"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar Sócio"}
          </Button>
        </>
      )}
    </div>
  );
}
