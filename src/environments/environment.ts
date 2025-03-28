import { Environment } from './environment.model';

export const environment: Environment = {
  production: process.env['NODE_ENV'] === 'production',
  baseUrl: process.env['BASE_URL'] || '',
  supabase: {
    apiKey: process.env['SUPABASE_API_KEY'] || '',
    url: process.env['SUPABASE_URL'] || ''
  }
};
