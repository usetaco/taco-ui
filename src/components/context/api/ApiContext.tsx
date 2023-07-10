import { useContext } from 'react';
import { ApiContext } from './ApiProvider';

const useTacoApiClient = () => useContext(ApiContext);

export default useTacoApiClient;
