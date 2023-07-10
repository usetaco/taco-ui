import { useContext } from 'react';
import { TacoContext } from './TacoProvider';

const useTacoContext = () => useContext(TacoContext);

export default useTacoContext;
