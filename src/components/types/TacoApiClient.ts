import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
import { TacoError } from './TacoError';
import { TacoAuthClient } from './TacoAuthClient';

export class TacoApiClient {
  hostUrl: string;
  tacoAuthClient: TacoAuthClient;
  tacoApiClient: AxiosInstance;
  get: (
    endpoint: string,
    onSuccess: (data: any) => void,
    onFailure: (error: any) => void,
    authenticated?: boolean | undefined
  ) => Promise<any> = async (endpoint, onSuccess, onFailure, authenticated) => {
    try {
      if (authenticated) {
        const { data } = await this.tacoApiClient.get(
          `${this.hostUrl}${endpoint}`
        );
        onSuccess(data);
      } else {
        const { data } = await this.tacoAuthClient.apiClient.get(
          `${this.hostUrl}${endpoint}`
        );
        onSuccess(data);
      }
    } catch (e: any) {
      console.log(e);
      onFailure(e);
    }
  };
  post: (
    endpoint: string,
    payload: any,
    onSuccess: (data: any) => void,
    onFailure: (error: any) => void,
    authenticated?: boolean | undefined
  ) => Promise<any> = async (
    endpoint,
    payload,
    onSuccess,
    onFailure,
    authenticated
  ) => {
    try {
      if (authenticated) {
        const { data } = await this.tacoApiClient.post(
          `${this.hostUrl}${endpoint}`,
          JSON.stringify(payload)
        );
        onSuccess(data);
      } else {
        const { data } = await this.tacoAuthClient.apiClient.post(
          `${this.hostUrl}${endpoint}`,
          JSON.stringify(payload)
        );
        onSuccess(data);
      }
    } catch (e: any) {
      console.log(e);
      onFailure(e);
    }
  };

  constructor(hostUrl: string) {
    this.hostUrl = hostUrl;

    let axiosNoAuth = axios.create({
      baseURL: hostUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Referrer-Policy': 'no-referrer',
      },
    });

    this.tacoAuthClient = new TacoAuthClient(axiosNoAuth);

    let axiosWithAuth = axios.create({
      baseURL: hostUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Referrer-Policy': 'no-referrer',
      },
    });

    axiosWithAuth.interceptors.request.use(
      function (config) {
        const token = Cookies.get('_taco_token');

        if (token && config.headers) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
      },
      function (err) {
        return Promise.reject(err);
      }
    );

    this.tacoApiClient = axiosWithAuth;
  }
}
