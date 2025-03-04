
import { Member } from "@/types/member";
import { RegistrationInfoSection } from "./front/RegistrationInfoSection";
import { PersonalInfoSection } from "./front/PersonalInfoSection";
import { ContactAddressSection } from "./front/ContactAddressSection";

interface FrontTabProps {
  member?: Member | null;
  formData: Partial<Member>;
  onInputChange: (section: string, field: string, value: any) => void;
}

export function FrontTab({ member, formData, onInputChange }: FrontTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <RegistrationInfoSection 
        member={member} 
        formData={formData} 
        onInputChange={(field, value) => onInputChange('registration', field, value)} 
      />
      <PersonalInfoSection 
        member={member} 
        formData={formData} 
        onInputChange={(field, value) => onInputChange('personal', field, value)} 
      />
      <ContactAddressSection 
        member={member} 
        formData={formData} 
        onInputChange={(field, value) => onInputChange('contact', field, value)} 
      />
    </div>
  );
}
