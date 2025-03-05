
import { Member } from './memberTypes';
import { DbMember } from './dbTypes';
import { MemberStatus } from './memberStatus';

export const dbMemberToMember = (dbMember: DbMember): Member => {
  return {
    id: dbMember.id,
    registrationNumber: dbMember.registration_number || '',
    formerRegistrationNumber: '',
    fullName: dbMember.full_name,
    cpf: dbMember.cpf || '',
    profession: dbMember.profession || '',
    city: dbMember.city || '',
    state_address: dbMember.state_address || '',
    status: (dbMember.status || 'active') as MemberStatus,
    birthDate: dbMember.birth_date || '',
    fatherName: dbMember.father_name || '',
    motherName: dbMember.mother_name || '',
    nationality: dbMember.nationality || '',
    birthplace: dbMember.birthplace || '',
    state: dbMember.state || '',
    workplace: '',
    professionalEmail: '',
    street: dbMember.street || '',
    number: dbMember.number || '',
    district: dbMember.district || '',
    zipCode: dbMember.zip_code || '',
    phone: dbMember.phone || '',
    email: '',
    registrationDate: dbMember.created_at || '',
    joinDate: dbMember.join_date || '',
    location: '',
    observations: dbMember.observations || '',
    nickname: dbMember.nickname || '',
    literate: dbMember.literate,
    // Additional fields
    profilePhoto: dbMember.profile_photo || '',
    rg: dbMember.rg || '',
    rgUf: dbMember.rg_uf || '',
    rgIssueDate: dbMember.rg_issue_date || '',
    gender: dbMember.gender || '',
    maritalStatus: dbMember.marital_status || '',
    voterTitle: dbMember.voter_title || '',
    electoralZone: dbMember.electoral_zone || '',
    electoralSection: dbMember.electoral_section || '',
    caepf: dbMember.caepf || '',
    pis: dbMember.pis || '',
    cei: dbMember.cei || '',
    nit: dbMember.nit || '',
    rgpNumber: dbMember.rgp_number || '',
    rgpIssueDate: dbMember.rgp_issue_date || '',
    rgpState: dbMember.rgp_state || '',
    statusControl: dbMember.status_control || '',
    mpaStatus: dbMember.mpa_status || '',
    inssPassword: dbMember.inss_password || '',
  };
};

export const memberToDbMember = (member: Partial<Member>): Partial<DbMember> => {
  const result: Partial<DbMember> = {
    id: member.id,
    registration_number: member.registrationNumber,
    full_name: member.fullName,
    cpf: member.cpf,
    profession: member.profession,
    city: member.city,
    state_address: member.state_address,
    status: member.status,
    birth_date: member.birthDate,
    father_name: member.fatherName,
    mother_name: member.motherName,
    nationality: member.nationality,
    birthplace: member.birthplace,
    state: member.state,
    street: member.street,
    number: member.number,
    district: member.district,
    zip_code: member.zipCode,
    phone: member.phone,
    observations: member.observations,
    nickname: member.nickname,
    join_date: member.joinDate,
    // Additional fields
    profile_photo: member.profilePhoto,
    rg: member.rg,
    rg_uf: member.rgUf,
    rg_issue_date: member.rgIssueDate,
    gender: member.gender,
    marital_status: member.maritalStatus,
    voter_title: member.voterTitle,
    electoral_zone: member.electoralZone,
    electoral_section: member.electoralSection,
    caepf: member.caepf,
    pis: member.pis,
    cei: member.cei,
    nit: member.nit,
    rgp_number: member.rgpNumber,
    rgp_issue_date: member.rgpIssueDate,
    rgp_state: member.rgpState,
    status_control: member.statusControl,
    mpa_status: member.mpaStatus,
    inss_password: member.inssPassword,
  };

  // Fix for the literate field, ensuring proper type handling
  if (typeof member.literate === 'string') {
    if (member.literate === 'sim') {
      result.literate = true;
    } else if (member.literate === 'nao') {
      result.literate = false;
    }
  } else {
    // If it's already a boolean or undefined, use it as is
    result.literate = member.literate;
  }

  return result;
};
