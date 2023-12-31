import { EnvName } from '@enums/environment.enum';
const scheme = 'http://';
const host   = 'localhost';
const port   = ':5000';
const path   = '/api';

const baseUrl = scheme + host + port + path;

export const environment = {
  production      : false,
  appName         : 'EasyAngular',
  envName         : EnvName.LOCAL,
  defaultLanguage : 'en',
  apiBaseUrl      : baseUrl,
  apiUrl : 'http://localhost:3000/api'
};

