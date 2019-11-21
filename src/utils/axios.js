import axios from 'axios';

const instance = axios.create();

export const setAxiosDefaults = defaults => {
  instance.defaults = {
    ...axios.defaults,
    ...defaults,
  };
};

export default instance;
