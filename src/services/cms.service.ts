import { createApiClient } from '~/schemas/content';
import settings from '~/settings';

import Axios from 'axios';

const axios = Axios.create({
  headers: {
    common: {
      'X-Api-Key': import.meta.env.VITE_CMS_API_KEY,
    },
  },
  paramsSerializer: {
    indexes: null,
  },
});
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // The below is for logging error to know the reason for api fail
    console.error(error);
    return Promise.reject(error);
  }
);

export const cmsApiClient = createApiClient(settings.serverUrl, {
  validate: 'request',
  axiosInstance: axios,
});
