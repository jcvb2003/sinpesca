
import { Member } from "@/types/member";
import { RegistrationInfoSection } from "./front/RegistrationInfoSection";
import { PersonalInfoSection } from "./front/PersonalInfoSection";
import { ContactAddressSection } from "./front/ContactAddressSection";

interface FrontTabProps {
  member?: Member | null;
}

export function FrontTab({ member }: FrontTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <RegistrationInfoSection member={member} />
      <PersonalInfoSection member={member} />
      <ContactAddressSection member={member} />
    </div>
  );
}
