
import { Member } from "@/types/member";
import { PersonalDocumentsSection } from "./back/PersonalDocumentsSection";
import { ElectoralInfoSection } from "./back/ElectoralInfoSection";
import { IdentificationNumbersSection } from "./back/IdentificationNumbersSection";
import { FishingRegistrationSection } from "./back/FishingRegistrationSection";
import { MemberStatusSection } from "./back/MemberStatusSection";

interface BackTabProps {
  member?: Member | null;
}

export function BackTab({ member }: BackTabProps) {
  return (
    <div className="space-y-8">
      <PersonalDocumentsSection member={member} />
      <ElectoralInfoSection member={member} />
      <IdentificationNumbersSection member={member} />
      <FishingRegistrationSection member={member} />
      <MemberStatusSection member={member} />
    </div>
  );
}
