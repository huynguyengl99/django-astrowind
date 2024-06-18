import defaultSettings from './base.settings';
import devSettings from './dev.settings';
import productionSettings from './production.settings';

interface ISettings {
  appEnv?: string;
  serverUrl: string;
}

const env = import.meta.env.VITE_APP_ENV;

let envSettings = defaultSettings;

switch (env) {
  case 'dev':
    envSettings = devSettings;
    break;
  case 'production':
    envSettings = productionSettings;
    break;
  default:
    envSettings = defaultSettings;
}

const settings: ISettings = {
  appEnv: env,
  ...defaultSettings,
  ...envSettings,
};

export default settings;
