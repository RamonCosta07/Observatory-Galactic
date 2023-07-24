// Styles
import * as S from "@/styles/LoginStyles";
import { Button } from "@/styles/ButtonStyles";
// Hooks
import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
// Next
import Head from "next/head";
// Components
import Loading from "@/components/Loading";
import Signup from "@/components/SignUp";
import Error from "@/components/Error";
// Icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// Bibliotecas
import { parse } from 'cookie';

const Login = () => {
  const {
    signinGoogle,
    signinGithub,
    signinFacebook,
    signInWithPassword,
    errorSignin,
    setErrorSignin,
    loading,
  } = useAuth();
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorSignin("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userLogin.email === "" || userLogin.password === "") {
      setErrorSignin("Por favor, preencha todos os campos");
      return;
    }
    await signInWithPassword(userLogin.email, userLogin.password);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Head>
        <title>Login | Galactic Observatory</title>       
      </Head>

      {!loading ? (
        <S.LoginContainer active={activeTab === "login" ? "true" : "false"}>
          <S.Tabs>
            <S.Tab>
              <S.TabLink
                active={activeTab === "login" ? "true" : "false"}
                onClick={() => handleTabChange("login")}
                title="Login"
              >
                Login
              </S.TabLink>
            </S.Tab>
            <S.Tab>
              <S.TabLink
                active={activeTab === "signup" ? "true" : "false"}
                onClick={() => handleTabChange("signup")}
                title="Cadastrar conta"
              >
                Cadastro
              </S.TabLink>
            </S.Tab>
          </S.Tabs>

          {activeTab === "login" && (
            <S.Form onSubmit={handleSubmit}>
              <S.FormGroup>
                <S.Label htmlFor="email">E-mail</S.Label>
                <S.Input
                  type="email"
                  id="email"
                  name="email"
                  value={userLogin.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label htmlFor="password">Senha</S.Label>
                <S.InputWrapper>
                  <S.Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={userLogin.password}
                    onChange={handleInputChange}
                  />
                  <S.IconsWrapper>
                    {showPassword ? (
                      <S.HidePasswordIcon
                        onClick={handleTogglePassword}
                        title="Ocultar senha"
                      />
                    ) : (
                      <S.ShowPasswordIcon
                        onClick={handleTogglePassword}
                        title="Exibir senha"
                      />
                    )}
                  </S.IconsWrapper>
                </S.InputWrapper>
              </S.FormGroup>
              {errorSignin && <Error>{errorSignin}</Error>}
              <S.ButtonContainer>
                <Button type="submit" title="Acessar sua conta">
                  Login com E-mail
                </Button>
              </S.ButtonContainer>
            </S.Form>
          )}

          {activeTab === "signup" && (
            <>
              <Signup />
            </>
          )}

          <h2>ou acesse com</h2>
          <S.ButtonsContainer>
            <S.ProviderContainer
              provider="google"
              title="Entre com sua conta do Google"
            >
              <S.Button onClick={() => signinGoogle()}>
                <FcGoogle />
              </S.Button>
              <span>Google</span>
            </S.ProviderContainer>

            <S.ProviderContainer
              provider="github"
              title="Entre com sua conta do Github"
            >
              <S.Button onClick={() => signinGithub()}>
                <FaGithub />
              </S.Button>
              <span>Github</span>
            </S.ProviderContainer>

            <S.ProviderContainer
              provider="facebook"
              title="Entre com sua conta do Facebook"
            >
              <S.Button onClick={() => signinFacebook()}>
                <S.FacebookIconButton />
              </S.Button>
              <span>Facebook</span>
            </S.ProviderContainer>
          </S.ButtonsContainer>
        </S.LoginContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export async function getServerSideProps(context:any) {
  const { req } = context;
  const cookies = parse(req.headers.cookie || '');

  if (cookies['user-auth']) {
    return {
      redirect: {
        destination: '/perfil',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
