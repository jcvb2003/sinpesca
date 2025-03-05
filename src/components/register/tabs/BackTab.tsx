
import { Member } from "@/types/member";
import { PersonalDocumentsSection } from "./back/PersonalDocumentsSection";
import { ElectoralInfoSection } from "./back/ElectoralInfoSection";
import { IdentificationNumbersSection } from "./back/IdentificationNumbersSection";
import { FishingRegistrationSection } from "./back/FishingRegistrationSection";
import { MemberStatusSection } from "./back/MemberStatusSection";

interface BackTabProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (field: string, value: any) => void;
}

export function BackTab({ member, formData, onInputChange }: BackTabProps) {
  return (
    <div className="space-y-8">
      <PersonalDocumentsSection 
        member={member}
        formData={formData}
        onInputChange={onInputChange} 
      />
      <ElectoralInfoSection 
        member={member}
        formData={formData}
        onInputChange={onInputChange} 
      />
      <IdentificationNumbersSection 
        member={member}
        formData={formData}
        onInputChange={onInputChange} 
      />
      <FishingRegistrationSection 
        member={member}
        formData={formData}
        onInputChange={onInputChange} 
      />
      <MemberStatusSection 
        member={member}
        formData={formData}
        onInputChange={onInputChange} 
      />
    </div>
  );
}
