
import { MemberStatus } from './memberStatus';

export interface Member {
  id: string;
  registrationNumber: string;
  formerRegistrationNumber?: string;
  fullName: string;
  cpf: string;
  profession?: string;
  city?: string;
  state_address?: string;
  status: MemberStatus;
  birthDate?: string;
  fatherName?: string;
  motherName?: string;
  nationality?: string;
  birthplace?: string;
  state?: string;
  workplace?: string;
  professionalEmail?: string;
  street?: string;
  number?: string;
  district?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  registrationDate?: string;
  joinDate?: string;
  location?: string;
  observations?: string;
  nickname?: string;
  literate?: boolean;
  // Additional fields
  profilePhoto?: string;
  rg?: string;
  rgUf?: string;
  rgIssueDate?: string;
  gender?: string;
  maritalStatus?: string;
  voterTitle?: string;
  electoralZone?: string;
  electoralSection?: string;
  caepf?: string;
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
