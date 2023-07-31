// Hooks
import { createContext, useState, useEffect } from "react";
// Next
import Router from "next/router";
// Firebase
import {
  auth,
  db,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "@/services/firebase";
import {
  signInWithPopup,
  User,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
// Bibliotecas
import cookie from "js-cookie";
import sendWelcomeEmail from "@/pages/api/sendWelcomeEmail";
// Interfaces
import {
  AuthContextProps,
  UserProps,
} from "@/interfaces/iContexts/IAuthContext";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorSignup, setErrorSignup] = useState("");
  const [errorSignin, setErrorSignin] = useState("");

  const handleUser = (currentUser: User | null) => {
    if (currentUser) {
      const formattedUser = {
        uid: currentUser.uid,
        email: currentUser.email!,
        name: currentUser.displayName ? currentUser.displayName : "",
        provider: currentUser.providerData[0].providerId,
      };
      setUser(formattedUser);
      setSession("true");
      return formattedUser.email;
    }
    setUser(null);
    setSession("");
    return false;
  };

  const setSession = (session: string) => {
    if (session) {
      cookie.set("user-auth", session, {
        expires: 1,
      });
    } else {
      cookie.remove("user-auth");
    }
  };

  const signUpEmailAndPassword = async (
    email: string,
    name: string,
    password: string
  ) => {
    // setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userEmailAndPassword = userCredential.user;
      // Atualizar o displayName do usuário
      await updateProfile(userEmailAndPassword, { displayName: name });
      const userDocRef = doc(db, "users", userEmailAndPassword.uid);
      await setDoc(userDocRef, {
        uid: userEmailAndPassword.uid,
        email: userEmailAndPassword.email,
        name: name,
        provider: userEmailAndPassword.providerData[0].providerId,
      });
      handleUser(userEmailAndPassword);
      if (userEmailAndPassword.email && userEmailAndPassword.displayName) {
        await sendWelcomeEmail(
          userEmailAndPassword.email,
          userEmailAndPassword.displayName
        );
      }
      Router.push("/perfil");
    } catch (error: any) {
      const errorCode = error.code;
      let customErrorMessage = "";
      switch (errorCode) {
        case "auth/email-already-in-use":
          customErrorMessage = "E-mail já existe";
          break;
        case "auth/invalid-email":
          customErrorMessage = "E-mail inválido";
          break;
        default:
          customErrorMessage = "Erro desconhecido, tente novamente mais tarde";
          break;
      }
      setErrorSignup(customErrorMessage);
    } finally {
      // setLoading(false);
    }
  };

  const signInWithPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorSignin("");

      Router.push("/perfil");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          setErrorSignin("E-mail inválido");
          break;
        case "auth/user-disabled":
          setErrorSignin("Usuário desabilitado");
          break;
        case "auth/user-not-found":
          setErrorSignin("Usuário não encontrado");
          break;
        case "auth/wrong-password":
          setErrorSignin("Senha incorreta");
          break;
        default:
          setErrorSignin(
            "Erro ao fazer login, por favor tente novamente mais tarde"
          );
          break;
      }
    }
  };

  const signinGoogle = async () => {
    try {
      setLoading(true);
      const response = await signInWithPopup(auth, googleProvider);
      const user = response.user;
      handleUser(user);

      // Verificar se o usuário já existe na coleção "users"
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // Se o usuário não existir, criar um novo documento na coleção "users"
        const newUser = {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          provider: user.providerData[0].providerId,
        };

        await setDoc(userRef, newUser);
        if (user.email && user.displayName) {
          await sendWelcomeEmail(user.email, user.displayName);
        }
      }

      Router.push("/perfil");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          setErrorSignin("E-mail inválido");
          break;
        case "auth/user-disabled":
          setErrorSignin("Usuário desabilitado");
          break;
        case "auth/account-exists-with-different-credential":
          setErrorSignin(
            "E-mail vinculado a essa conta já foi cadastrado utilizando outro serviço de provedor"
          );
          break;
        case "auth/user-not-found":
          setErrorSignin("Usuário não encontrado");
          break;
        case "auth/wrong-password":
          setErrorSignin("Senha incorreta");
          break;
        default:
          setErrorSignin(
            "Erro ao fazer login, por favor tente novamente mais tarde"
          );
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  const signinGithub = async () => {
    try {
      setLoading(true);
      const response = await signInWithPopup(auth, githubProvider);
      const user = response.user;
      handleUser(user);

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        const newUser = {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          provider: user.providerData[0].providerId,
        };

        await setDoc(userRef, newUser);
        if (user.email && user.displayName) {
          await sendWelcomeEmail(user.email, user.displayName);
        }
      }

      Router.push("/perfil");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          setErrorSignin("E-mail inválido");
          break;
        case "auth/user-disabled":
          setErrorSignin("Usuário desabilitado");
          break;
        case "auth/user-not-found":
          setErrorSignin("Usuário não encontrado");
          break;
        case "auth/account-exists-with-different-credential":
          setErrorSignin(
            "E-mail vinculado a essa conta já foi cadastrado utilizando outro serviço de provedor"
          );
          break;
        case "auth/wrong-password":
          setErrorSignin("Senha incorreta");
          break;
        default:
          setErrorSignin(
            "Erro ao fazer login, por favor tente novamente mais tarde"
          );
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  const signinFacebook = async () => {
    try {
      setLoading(true);
      const response = await signInWithPopup(auth, facebookProvider);
      const user = response.user;
      handleUser(user);
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        const newUser = {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          provider: user.providerData[0].providerId,
        };

        await setDoc(userRef, newUser);
        if (user.email && user.displayName) {
          await sendWelcomeEmail(user.email, user.displayName);
        }
      }
      Router.push("/perfil");
    } catch (error: any) {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          setErrorSignin("E-mail inválido");
          break;
        case "auth/user-disabled":
          setErrorSignin("Usuário desabilitado");
          break;
        case "auth/account-exists-with-different-credential":
          setErrorSignin(
            "E-mail vinculado a essa conta já foi cadastrado utilizando outro serviço de provedor"
          );
          break;
        case "auth/user-not-found":
          setErrorSignin("Usuário não encontrado");
          break;
        case "auth/wrong-password":
          setErrorSignin("Senha incorreta");
          break;
        default:
          setErrorSignin(
            "Erro ao fazer login, por favor tente novamente mais tarde"
          );
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      Router.push("/");
      await auth.signOut();
      handleUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      handleUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        signUpEmailAndPassword,
        signinGoogle,
        signinFacebook,
        signinGithub,
        signout,
        errorSignup,
        setErrorSignup,
        signInWithPassword,
        errorSignin,
        setErrorSignin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
