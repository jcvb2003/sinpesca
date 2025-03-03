
import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";

interface MemberSearchProps {
  onSearch: (query: string) => void;
}

export function MemberSearch({ onSearch }: MemberSearchProps) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [query, onSearch]);

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Buscar por nome, número de registro ou profissão..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 py-6 w-full bg-white border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
        />
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            <span>Filtros</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={status.includes("active")}
            onCheckedChange={(checked) => {
              if (checked) setStatus([...status, "active"]);
              else setStatus(status.filter(s => s !== "active"));
            }}
          >
            Ativo
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status.includes("inactive")}
            onCheckedChange={(checked) => {
              if (checked) setStatus([...status, "inactive"]);
              else setStatus(status.filter(s => s !== "inactive"));
            }}
          >
            Inativo
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status.includes("pending")}
            onCheckedChange={(checked) => {
              if (checked) setStatus([...status, "pending"]);
              else setStatus(status.filter(s => s !== "pending"));
            }}
          >
            Pendente
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Ordenar
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={sortBy === "name"}
            onCheckedChange={(checked) => {
              if (checked) setSortBy("name");
            }}
          >
            Nome
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={sortBy === "registration"}
            onCheckedChange={(checked) => {
              if (checked) setSortBy("registration");
            }}
          >
            Nº de Registro
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={sortBy === "date"}
            onCheckedChange={(checked) => {
              if (checked) setSortBy("date");
            }}
          >
            Data de Adesão
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button variant="outline">
        Exportar
      </Button>
    </div>
  );
}
