import packageJson from '../../../package.json';

export const appVersion = `v${packageJson.version}`;

export const currentYear = new Date().getFullYear().toString();
