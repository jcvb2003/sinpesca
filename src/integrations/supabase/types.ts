export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      members: {
        Row: {
          birth_date: string | null
          birthplace: string | null
          caepf: string | null
          cei: string | null
          city: string | null
          cpf: string | null
          created_at: string
          district: string | null
          electoral_section: string | null
          electoral_title: string | null
          electoral_zone: string | null
          father_name: string | null
          full_name: string
          gender: string | null
          id: string
          inss_password: string | null
          join_date: string | null
          literate: boolean | null
          marital_status: string | null
          mother_name: string | null
          mpa_status: string | null
          nationality: string | null
          nickname: string | null
          nit: string | null
          number: string | null
          observations: string | null
          phone: string | null
          pis: string | null
          profession: string | null
          profile_photo: string | null
          registration_number: string | null
          rg: string | null
          rg_issue_date: string | null
          rg_uf: string | null
          rgp_issue_date: string | null
          rgp_number: string | null
          rgp_state: string | null
          state: string | null
          state_address: string | null
          status: string | null
          status_control: string | null
          street: string | null
          updated_at: string
          zip_code: string | null
        }
        Insert: {
          birth_date?: string | null
          birthplace?: string | null
          caepf?: string | null
          cei?: string | null
          city?: string | null
          cpf?: string | null
          created_at?: string
          district?: string | null
          electoral_section?: string | null
          electoral_title?: string | null
          electoral_zone?: string | null
          father_name?: string | null
          full_name: string
          gender?: string | null
          id?: string
          inss_password?: string | null
          join_date?: string | null
          literate?: boolean | null
          marital_status?: string | null
          mother_name?: string | null
          mpa_status?: string | null
          nationality?: string | null
          nickname?: string | null
          nit?: string | null
          number?: string | null
          observations?: string | null
          phone?: string | null
          pis?: string | null
          profession?: string | null
          profile_photo?: string | null
          registration_number?: string | null
          rg?: string | null
          rg_issue_date?: string | null
          rg_uf?: string | null
          rgp_issue_date?: string | null
          rgp_number?: string | null
          rgp_state?: string | null
          state?: string | null
          state_address?: string | null
          status?: string | null
          status_control?: string | null
          street?: string | null
          updated_at?: string
          zip_code?: string | null
        }
        Update: {
          birth_date?: string | null
          birthplace?: string | null
          caepf?: string | null
          cei?: string | null
          city?: string | null
          cpf?: string | null
          created_at?: string
          district?: string | null
          electoral_section?: string | null
          electoral_title?: string | null
          electoral_zone?: string | null
          father_name?: string | null
          full_name?: string
          gender?: string | null
          id?: string
          inss_password?: string | null
          join_date?: string | null
          literate?: boolean | null
          marital_status?: string | null
          mother_name?: string | null
          mpa_status?: string | null
          nationality?: string | null
          nickname?: string | null
          nit?: string | null
          number?: string | null
          observations?: string | null
          phone?: string | null
          pis?: string | null
          profession?: string | null
          profile_photo?: string | null
          registration_number?: string | null
          rg?: string | null
          rg_issue_date?: string | null
          rg_uf?: string | null
          rgp_issue_date?: string | null
          rgp_number?: string | null
          rgp_state?: string | null
          state?: string | null
          state_address?: string | null
          status?: string | null
          status_control?: string | null
          street?: string | null
          updated_at?: string
          zip_code?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
