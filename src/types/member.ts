
export type MemberStatus = 'active' | 'inactive' | 'suspended';

export interface Member {
  id: string;
  registrationNumber: string;
  formerRegistrationNumber?: string;
  fullName: string;
  nickname?: string;
  cpf: string;
  birthDate: string;
  fatherName?: string;
  motherName?: string;
  nationality?: string;
  birthplace?: string;
  state?: string;
  profession?: string;
  workplace?: string;
  professionalEmail?: string;
  profilePhoto?: string;

  // Address
  street?: string;
  number?: string;
  district?: string;
  city?: string;
  state_address?: string;
  zipCode?: string;
  phone?: string;
  email?: string;

  // Registration Data
  registrationDate: string;
  joinDate: string;
  status: MemberStatus;
  observations?: string;
  
  // Additional Registration Data
  maritalStatus?: string;
  literate?: string;
  rg?: string;
  rgState?: string;
  rgUf?: string; // Added this property to fix the error
  rgIssueDate?: string;
  voterTitle?: string;
  electoralZone?: string;
  electoralSection?: string;
  caepf?: string;
  gender?: string;
  pis?: string;
  cei?: string;
  nit?: string;
  rgpNumber?: string;
  rgpIssueDate?: string;
  rgpState?: string;
  statusControl?: string;
  mpaStatus?: string;
  inssPassword?: string;
}
