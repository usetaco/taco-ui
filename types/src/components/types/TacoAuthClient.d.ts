import { AxiosInstance } from 'axios';
export declare class TacoAuthClient {
    currentUser: string;
    apiClient: AxiosInstance;
    login: (endpoint: string, email: string, password: string, onSuccess: (data: any) => void, onFailure: (error: any) => void) => Promise<any>;
    constructor(apiClient: AxiosInstance);
}
