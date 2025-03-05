export interface Member {
  id: string;
  registrationNumber: string;
  formerRegistrationNumber?: string;
  fullName: string;
  cpf: string;
  profession?: string;
  city?: string;
  state_address?: string;
  status: string;
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
}

export interface DbMember {
  id: string;
  registration_number: string | null;
  full_name: string;
  cpf: string | null;
  profession: string | null;
  city: string | null;
  state_address: string | null;
  status: string | null;
  birth_date: string | null;
  father_name: string | null;
  mother_name: string | null;
  nationality: string | null;
  birthplace: string | null;
  state: string | null;
  street: string | null;
  number: string | null;
  district: string | null;
  zip_code: string | null;
  phone: string | null;
  created_at: string | null;
  join_date: string | null;
  observations: string | null;
  nickname: string | null;
  literate?: boolean;
}

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
    status: dbMember.status || 'active',
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
  };

  // Fix for the literate field, ensuring proper type handling
  if (typeof member.literate === 'string') {
    if (member.literate && member.literate.toLowerCase() === 'sim') {
      result.literate = true;
    } else if (member.literate && member.literate.toLowerCase() === 'nao') {
      result.literate = false;
    }
  } else {
    // If it's already a boolean or undefined, use it as is
    result.literate = member.literate;
  }

  return result;
};
