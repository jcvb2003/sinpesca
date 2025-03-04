
import { Button } from "@/components/ui/button";

export function FormActions() {
  return (
    <div className="flex justify-end gap-4 pt-4 border-t">
      <Button variant="outline">Novo</Button>
      <Button>Salvar</Button>
      <Button variant="outline">Cancelar</Button>
      <Button variant="destructive">Excluir</Button>
      <Button variant="outline">Imprimir</Button>
      <Button variant="outline">Fechar</Button>
    </div>
  );
}
