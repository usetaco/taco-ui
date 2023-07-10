import { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
import { TacoError } from './TacoError';

export class TacoAuthClient {
  currentUser: string;
  apiClient: AxiosInstance;
  login: (
    endpoint: string,
    email: string,
    password: string,
    onSuccess: (data: any) => void,
    onFailure: (error: any) => void
  ) => Promise<any> = async (
    endpoint: string,
    email,
    password,
    onSuccess,
    onFailure
  ) => {
    try {
      const { data } = await this.apiClient.post(
        endpoint,
        JSON.stringify({ Email: email, Password: password })
      );
      if (data.isAuthSuccessful) {
        Cookies.set('_taco_token', data.token);
        onSuccess(data);
      } else {
        onFailure(
          new TacoError(500, 'Auth Unsuccessful', 'Invalid email or password')
        );
      }
    } catch (e: any) {
      console.log(e);
      onFailure(e);
    }
  };

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }
}
