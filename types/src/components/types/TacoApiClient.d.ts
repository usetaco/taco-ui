import { AxiosInstance } from 'axios';
import { TacoAuthClient } from './TacoAuthClient';
export declare class TacoApiClient {
    hostUrl: string;
    tacoAuthClient: TacoAuthClient;
    tacoApiClient: AxiosInstance;
    get: (endpoint: string, onSuccess: (data: any) => void, onFailure: (error: any) => void, authenticated?: boolean | undefined) => Promise<any>;
    post: (endpoint: string, payload: any, onSuccess: (data: any) => void, onFailure: (error: any) => void, authenticated?: boolean | undefined) => Promise<any>;
    constructor(hostUrl: string);
}
