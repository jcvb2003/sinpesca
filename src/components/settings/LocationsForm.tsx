
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Plus, X, Save } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

export function LocationsForm() {
  const [locations, setLocations] = useState<string[]>([]);
  const [newLocation, setNewLocation] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Load locations from localStorage on component mount
  useEffect(() => {
    const savedLocations = localStorage.getItem('systemLocations');
    if (savedLocations) {
      try {
        setLocations(JSON.parse(savedLocations));
      } catch (error) {
        console.error('Error parsing saved locations:', error);
      }
    }
  }, []);

  const handleAddLocation = () => {
    if (!newLocation.trim()) return;
    
    const formattedLocation = newLocation.toUpperCase().trim();
    if (locations.includes(formattedLocation)) {
      toast({
        title: "Localidade já existe",
        description: "Esta localidade já está cadastrada.",
        variant: "destructive"
      });
      return;
    }
    
    const updatedLocations = [...locations, formattedLocation];
    setLocations(updatedLocations);
    localStorage.setItem('systemLocations', JSON.stringify(updatedLocations));
    setNewLocation("");
    setIsDialogOpen(false);
    
    toast({
      title: "Localidade adicionada",
      description: "A localidade foi adicionada com sucesso!"
    });
  };

  const handleRemoveLocation = (index: number) => {
    const updatedLocations = [...locations];
    updatedLocations.splice(index, 1);
    setLocations(updatedLocations);
    localStorage.setItem('systemLocations', JSON.stringify(updatedLocations));
    
    toast({
      title: "Localidade removida",
      description: "A localidade foi removida com sucesso!"
    });
  };

  return (
    <div className="w-full">
      <Button 
        onClick={() => setIsDialogOpen(true)} 
        className="flex items-center gap-2"
      >
        <Plus size={16} />
        Nova Localidade
      </Button>
      
      {locations.length > 0 && (
        <div className="mt-4 space-y-2 max-h-80 overflow-y-auto">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center justify-between p-2 border rounded-md">
              <span>{location}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleRemoveLocation(index)}
              >
                <X size={16} className="text-gray-500" />
              </Button>
            </div>
          ))}
        </div>
      )}
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Nova Localidade</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input 
              placeholder="Nome da localidade" 
              value={newLocation} 
              onChange={(e) => setNewLocation(e.target.value.toUpperCase())}
              className="w-full"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleAddLocation} className="flex items-center gap-2">
              <Save size={16} />
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
