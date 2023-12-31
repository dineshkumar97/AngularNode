import { EnvName } from '@enums/environment.enum';
const scheme = 'http://';
const host   = 'localhost';
const port   = ':3000';
const path   = '/api';
const baseUrl = `${scheme}${host}${port}${path}`;

export const environment = {
  production      : true,
  appName         : 'EasyAngular',
  envName         : EnvName.PROD,
  defaultLanguage : 'en',
  apiBaseUrl      : baseUrl,
};