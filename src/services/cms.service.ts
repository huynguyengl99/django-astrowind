import { createApiClient } from '~/schemas/content';
import Axios from 'axios';

const axios = Axios.create({
  headers: {
    common: {
      'X-Api-Key': import.meta.env.VITE_CMS_API_KEY,
    },
  },
});

export const cmsApiClient = createApiClient('http://localhost:8000/', {
  validate: 'request',
  axiosInstance: axios,
});
