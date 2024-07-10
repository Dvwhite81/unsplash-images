import { useContext } from 'react';
import { AppContext } from './Context';
import { AppContextType } from './types';

export const useGlobalContext = () => useContext(AppContext) as AppContextType;
