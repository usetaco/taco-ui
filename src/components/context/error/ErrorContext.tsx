import { useContext } from 'react';
import { ErrorContext } from './ErrorProvider';

const useTacoError = () => useContext(ErrorContext);

export default useTacoError;
