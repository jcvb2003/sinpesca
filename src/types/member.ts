
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
  literate?: boolean;
  rg?: string;
  rgUf?: string;
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

// Helper interface for mapping between Supabase DB fields and our frontend model
export interface DbMember {
  id: string;
  registration_number?: string;
  full_name: string;
  nickname?: string;
  cpf?: string;
  birth_date?: string;
  father_name?: string;
  mother_name?: string;
  nationality?: string;
  birthplace?: string;
  state?: string;
  profession?: string;
  profile_photo?: string;

  // Address
  street?: string;
  number?: string;
  district?: string;
  city?: string;
  state_address?: string;
  zip_code?: string;
  phone?: string;

  // Registration Data
  join_date?: string;
  status?: string;
  observations?: string;
  
  // Additional Registration Data
  marital_status?: string;
  literate?: boolean;
  rg?: string;
  rg_uf?: string;
  rg_issue_date?: string;
  electoral_title?: string;
  electoral_zone?: string;
  electoral_section?: string;
  caepf?: string;
  gender?: string;
  pis?: string;
  cei?: string;
  nit?: string;
  rgp_number?: string;
  rgp_issue_date?: string;
  rgp_state?: string;
  status_control?: string;
  mpa_status?: string;
  inss_password?: string;

  // Timestamps
  created_at: string;
  updated_at: string;
}

// Helper function to convert database member to frontend member
export function dbMemberToMember(dbMember: DbMember): Member {
  return {
    id: dbMember.id,
    registrationNumber: dbMember.registration_number || '',
    fullName: dbMember.full_name,
    nickname: dbMember.nickname,
    cpf: dbMember.cpf || '',
    birthDate: dbMember.birth_date || '',
    fatherName: dbMember.father_name,
    motherName: dbMember.mother_name,
    nationality: dbMember.nationality,
    birthplace: dbMember.birthplace,
    state: dbMember.state,
    profession: dbMember.profession,
    profilePhoto: dbMember.profile_photo,
    
    // Address
    street: dbMember.street,
    number: dbMember.number,
    district: dbMember.district,
    city: dbMember.city,
    state_address: dbMember.state_address,
    zipCode: dbMember.zip_code,
    phone: dbMember.phone,
    email: undefined,
    
    // Registration
    registrationDate: dbMember.created_at || new Date().toISOString(),
    joinDate: dbMember.join_date || new Date().toISOString(),
    status: (dbMember.status as MemberStatus) || 'active',
    observations: dbMember.observations,
    
    // Additional fields
    maritalStatus: dbMember.marital_status,
    literate: dbMember.literate,
    rg: dbMember.rg,
    rgUf: dbMember.rg_uf,
    rgIssueDate: dbMember.rg_issue_date,
    voterTitle: dbMember.electoral_title,
    electoralZone: dbMember.electoral_zone,
    electoralSection: dbMember.electoral_section,
    caepf: dbMember.caepf,
    gender: dbMember.gender,
    pis: dbMember.pis,
    cei: dbMember.cei,
    nit: dbMember.nit,
    rgpNumber: dbMember.rgp_number,
    rgpIssueDate: dbMember.rgp_issue_date,
    rgpState: dbMember.rgp_state,
    statusControl: dbMember.status_control,
    mpaStatus: dbMember.mpa_status,
    inssPassword: dbMember.inss_password,
    workplace: undefined,
    professionalEmail: undefined,
    formerRegistrationNumber: undefined
  };
}

// Helper function to convert frontend member to database format
export function memberToDbMember(member: Partial<Member>): Partial<DbMember> {
  return {
    id: member.id,
    registration_number: member.registrationNumber,
    full_name: member.fullName,
    nickname: member.nickname,
    cpf: member.cpf,
    birth_date: member.birthDate,
    father_name: member.fatherName,
    mother_name: member.motherName,
    nationality: member.nationality,
    birthplace: member.birthplace,
    state: member.state,
    profession: member.profession,
    profile_photo: member.profilePhoto,
    
    // Address
    street: member.street,
    number: member.number,
    district: member.district,
    city: member.city,
    state_address: member.state_address,
    zip_code: member.zipCode,
    phone: member.phone,
    
    // Registration
    join_date: member.joinDate,
    status: member.status,
    observations: member.observations,
    
    // Additional fields
    marital_status: member.maritalStatus,
    literate: member.literate === 'sim' ? true : member.literate === 'nao' ? false : member.literate,
    rg: member.rg,
    rg_uf: member.rgUf,
    rg_issue_date: member.rgIssueDate,
    electoral_title: member.voterTitle,
    electoral_zone: member.electoralZone,
    electoral_section: member.electoralSection,
    caepf: member.caepf,
    gender: member.gender,
    pis: member.pis,
    cei: member.cei,
    nit: member.nit,
    rgp_number: member.rgpNumber,
    rgp_issue_date: member.rgpIssueDate,
    rgp_state: member.rgpState,
    status_control: member.statusControl,
    mpa_status: member.mpaStatus,
    inss_password: member.inssPassword
  };
}
