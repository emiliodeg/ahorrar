import { Environment } from './environment.model';

export const environment: Environment = {
  production: process.env['NODE_ENV'] === 'production',
  baseUrl: process.env?.['BASE_URL'] || '',
  supabase: {
    apiUrl: process.env?.['SUPABASE_DATABASE_URL'] || '',
    key: process.env?.['SUPABASE_ANON_KEY'] || ''
  }
};
