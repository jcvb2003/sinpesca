
import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MemberTable } from "@/components/members/MemberTable";
import { MemberSearch } from "@/components/members/MemberSearch";
import { members } from "@/data/mockMembers";
import { Member } from "@/types/member";

const Index = () => {
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(members);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMembers(members);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = members.filter(member => 
        member.fullName.toLowerCase().includes(query) ||
        member.registrationNumber.toLowerCase().includes(query) ||
        (member.profession && member.profession.toLowerCase().includes(query))
      );
      setFilteredMembers(filtered);
    }
  }, [searchQuery]);

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lista de Sócios</h1>
          <p className="text-gray-600 mt-1">Gerencie todos os sócios da associação</p>
        </div>
        
        <MemberSearch onSearch={setSearchQuery} />
        
        <MemberTable members={filteredMembers} />
      </div>
    </PageLayout>
  );
};

export default Index;
