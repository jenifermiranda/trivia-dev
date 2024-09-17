import { createContext } from 'react';
import { GlobalContextType } from '../types/GlobalContext.type';

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export default GlobalContext;
