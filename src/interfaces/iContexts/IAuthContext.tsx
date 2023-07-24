// React
import { SetStateAction } from "react";

export interface UserProps {
  uid: string;
  email: string;
  name: string;
  provider: string;
}

export interface AuthContextProps {
  user: UserProps | null;
  setUser: React.Dispatch<SetStateAction<UserProps | null>>;
  loading: boolean;
  signUpEmailAndPassword: (
    email: string,
    name: string,
    password: string
  ) => Promise<any>;
  signinGoogle: () => Promise<void>;
  signinFacebook: () => Promise<void>;
  signinGithub: () => Promise<void>;
  signout: () => Promise<void>;
  errorSignup: string;
  setErrorSignup: React.Dispatch<React.SetStateAction<string>>;
  signInWithPassword: (email: string, password: string) => Promise<void>;
  errorSignin: string;
  setErrorSignin: React.Dispatch<React.SetStateAction<string>>;
}
