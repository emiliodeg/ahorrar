export interface Environment {
  production: boolean;
  baseUrl: string;
  supabase: {
    url: string;
    apiKey: string;
  };
}
