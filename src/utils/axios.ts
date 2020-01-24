import axios from 'axios';

const instance = axios.create();

export const setAxiosDefaults = (defaults): void => {
  instance.defaults = {
    ...axios.defaults,
    ...defaults,
  };
};

export default instance;
