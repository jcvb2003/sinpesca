
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function OtherTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold border-b pb-2">Informações Profissionais</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="profession">Profissão</Label>
          <Input 
            id="profession" 
            placeholder="Profissão"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="workplace">Local de Trabalho</Label>
          <Input 
            id="workplace" 
            placeholder="Local de trabalho (opcional)"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="workExperience">Experiência de Trabalho</Label>
          <Textarea 
            id="workExperience" 
            placeholder="Descreva a experiência de trabalho (opcional)"
            className="shadow-sm min-h-[100px]"
          />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold border-b pb-2 pt-4">Documentação Adicional</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="profilePhoto">Foto do Perfil</Label>
          <Input 
            id="profilePhoto" 
            type="file" 
            accept="image/*"
            className="shadow-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="documents">Documentos</Label>
          <Input 
            id="documents" 
            type="file" 
            multiple
            className="shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
