
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
  // Additional DB fields
  profile_photo?: string | null;
  rg?: string | null;
  rg_uf?: string | null;
  rg_issue_date?: string | null;
  gender?: string | null;
  marital_status?: string | null;
  voter_title?: string | null;
  electoral_zone?: string | null;
  electoral_section?: string | null;
  caepf?: string | null;
  pis?: string | null;
  cei?: string | null;
  nit?: string | null;
  rgp_number?: string | null;
  rgp_issue_date?: string | null;
  rgp_state?: string | null;
  status_control?: string | null;
  mpa_status?: string | null;
  inss_password?: string | null;
}
