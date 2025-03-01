
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MemberSearchProps {
  onSearch: (query: string) => void;
}

export function MemberSearch({ onSearch }: MemberSearchProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [query, onSearch]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      <Input
        type="text"
        placeholder="Buscar por nome, número de registro ou profissão..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10 py-6 w-full bg-white border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
      />
    </div>
  );
}
