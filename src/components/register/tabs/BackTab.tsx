
import { Member } from "@/types/member";
import { PersonalDocumentsSection } from "./back/PersonalDocumentsSection";
import { ElectoralInfoSection } from "./back/ElectoralInfoSection";
import { IdentificationNumbersSection } from "./back/IdentificationNumbersSection";
import { FishingRegistrationSection } from "./back/FishingRegistrationSection";
import { MemberStatusSection } from "./back/MemberStatusSection";

interface BackTabProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (section: string, field: string, value: any) => void;
}

export function BackTab({ member, formData, onInputChange }: BackTabProps) {
  return (
    <div className="space-y-8">
      <PersonalDocumentsSection 
        member={member}
        formData={formData}
        onInputChange={(field, value) => onInputChange('documents', field, value)} 
      />
      <ElectoralInfoSection 
        member={member}
        formData={formData}
        onInputChange={(field, value) => onInputChange('electoral', field, value)} 
      />
      <IdentificationNumbersSection 
        member={member}
        formData={formData}
        onInputChange={(field, value) => onInputChange('identification', field, value)} 
      />
      <FishingRegistrationSection 
        member={member}
        formData={formData}
        onInputChange={(field, value) => onInputChange('fishing', field, value)} 
      />
      <MemberStatusSection 
        member={member}
        formData={formData}
        onInputChange={(field, value) => onInputChange('status', field, value)} 
      />
    </div>
  );
}
