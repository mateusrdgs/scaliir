import { AxiosRequestConfig } from 'axios';
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';

import axios from 'utils/axios'

interface HttpRequestBody extends AxiosRequestConfig {
  key?: string,
  mock?: any
}

const initialState = {};

export const request = (payload: HttpRequestBody): AnyAction => {
  return {
    type: 'REQUEST',
    payload
  }
}

export const response = (payload: any): AnyAction => {
  return {
    type: 'RESPONSE',
    payload
  }
}

export const responseError = (payload: any): AnyAction => {
  return {
    type: 'RESPONSE_ERROR',
    payload
  }
}

export const httpRequest = ({ key, mock, ...config }: HttpRequestBody) => {
  return (dispatch) => {
    let mockTimeout;
    return new Promise((resolve, reject) => {
      if (mock) {
        if (key) {
          dispatch(request({ key, ...config }));
        }
        mockTimeout = setTimeout(() => {
          if (key) {
            dispatch(response({ key, mock, ...config }));
          }
          clearTimeout(mockTimeout);
          resolve(mock);
        }, 1000);
      } else {
        if (key) {
          dispatch(request({ key, ...config }));
          return axios.request((config))
            .then((res) => {
              dispatch(response({ key, ...res }))
              resolve(res);
            }).catch(err => {
              const { response } = err;
              dispatch(responseError({ key, ...response }));
              reject(err);
            });
        } else {
          return axios(config)
            .then(resolve)
            .catch(reject)
        }
      }
    })
  }
}

export default handleActions({
  REQUEST: (state, { payload }: AnyAction) => {
    const { key } = payload;
    return {
      ...state,
      [key]: {
        error: false,
        loading: true,
        loaded: false,
      },
    }
  },
  RESPONSE: (state, { payload }: AnyAction) => {
    const { key, ...res } = payload;
    return {
      ...state,
      [key]: {
        ...res,
        error: false,
        loading: false,
        loaded: true,
      },
    }
  },
  RESPONSE_ERROR: (state, { payload }: AnyAction) => {
    const { key, ...err } = payload;
    return {
      ...state,
      [key]: {
        ...err,
        loading: false,
        loaded: false,
        error: true,
      }
    }
  }
}, initialState);