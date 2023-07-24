// Hooks
import { useContext } from 'react';
import AuthContext from '@/contexts/AuthContext';
// Interfaces
import {AuthContextProps} from '@/interfaces/iContexts/IAuthContext'

const useAuth = (): AuthContextProps => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
};

export default useAuth;
