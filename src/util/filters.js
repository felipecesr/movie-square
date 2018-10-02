import config from './config';

export function imageHost(file_path) {
  if (!file_path) {
    return '';
  }

  return config.base_url + config.size + file_path;
}
