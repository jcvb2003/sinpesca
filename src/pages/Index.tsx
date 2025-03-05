
import { useState, useEffect, useCallback } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MemberTable } from "@/components/members/MemberTable";
import { MemberSearch } from "@/components/members/MemberSearch";
import { members as mockMembers } from "@/data/mockMembers";
import { Member, DbMember, dbMemberToMember } from "@/types/member";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStatus, setFilteredStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(true);
  
  const { toast } = useToast();

  const fetchMembers = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('members')
        .select('*');

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        // Convert DB members to frontend format
        const convertedMembers: Member[] = data.map(item => dbMemberToMember(item as DbMember));
        setMembers(convertedMembers);
      } else {
        // Fallback to mock data if no DB data
        setMembers(mockMembers);
      }
    } catch (error) {
      console.error('Error fetching members:', error);
      toast({
        title: "Erro ao carregar sócios",
        description: "Usando dados de exemplo.",
        variant: "destructive"
      });
      // Fallback to mock data
      setMembers(mockMembers);
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  // Filter members based on search query
  useEffect(() => {
    let filtered = members;
    
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(member => 
        member.fullName.toLowerCase().includes(query) ||
        member.registrationNumber.toLowerCase().includes(query) ||
        (member.profession && member.profession.toLowerCase().includes(query))
      );
    }
    
    setFilteredMembers(filtered);
  }, [searchQuery, members]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (status: string[]) => {
    setFilteredStatus(status);
  };

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
  };

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lista de Sócios</h1>
          <p className="text-gray-600 mt-1">Gerencie todos os sócios da associação</p>
        </div>
        
        <MemberSearch 
          onSearch={handleSearch} 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        
        {loading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <MemberTable 
            members={filteredMembers} 
            filteredStatus={filteredStatus}
            sortBy={sortBy}
          />
        )}
      </div>
    </PageLayout>
  );
};

export default Index;
