export interface Environment {
  production: boolean;
  baseUrl: string;
  supabase: {
    apiUrl: string;
    key: string;
  };
}
