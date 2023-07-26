'use cliente';
// Styles
import * as S from "@/styles/LoginStyles";
import { Button } from "@/styles/ButtonStyles";
// Hooks e Bibliotecas
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { validate } from "email-validator";
// Components
import Error from "@/components/Error";

const Signup = () => {
  const { signUpEmailAndPassword, errorSignup, setErrorSignup, loading } =
    useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const nameRegex = /^[a-zA-Z\s]+$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setError("");
    setErrorSignup("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setErrorSignup("");
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      confirmPassword === ""
    ) {
      setError("Por favor, preencha todos os campos");
      return;
    }
    const firstName = formData.name.split(" ")[0];
    if (firstName.length < 3) {
      setError("O primeiro nome deve ter no mínimo 3 caracteres");
      return;
    }
    if (formData.name.length + 1 > 30) {
      setError("O nome completo não pode ter mais de 30 caracteres");
      return;
    }
    if (!nameRegex.test(formData.name)) {
      setError("Nome não pode ter números ou caracteres especiais");
      return;
    }
    if (!validate(formData.email)) {
      setError("Formato de e-mail inválido");
      return;
    }
    if (formData.password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(formData.password)) {
      if (!/[a-z]/.test(formData.password)) {
        setError("A senha deve conter pelo menos uma letra minúscula.");
        return;
      }

      if (!/[A-Z]/.test(formData.password)) {
        setError("A senha deve conter pelo menos uma letra maiúscula.");
        return;
      }

      if (!/\d/.test(formData.password)) {
        setError("A senha deve conter pelo menos um número.");
        return;
      }

      if (!/[@$!%*?&]/.test(formData.password)) {
        setError("A senha deve conter pelo menos um caractere especial.");
        return;
      }

      if (!/[A-Za-z\d@$!%*?&]{8,}/.test(formData.password)) {
        setError("A senha deve ter no mínimo 8 caracteres.");
        return;
      }
    }

    const formattedName = formData.name
      .split(" ")
      .map(
        (namePart) =>
          namePart.charAt(0).toUpperCase() + namePart.slice(1).toLowerCase()
      )
      .join(" ");
    formData.name = formattedName;

    await signUpEmailAndPassword(
      formData.email,
      formData.name,
      formData.password
    );
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormGroup>
        <S.Label htmlFor="name">Nome</S.Label>
        <S.Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="password">Senha</S.Label>
        <S.InputWrapper>
          <S.Input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
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

      <S.FormGroup>
        <S.Label htmlFor="confirmPassword">Confirme a senha</S.Label>
        <S.InputWrapper>
          <S.Input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
              setErrorSignup("");
            }}
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
      {error && <Error>{error}</Error>}
      {!error && errorSignup && <Error>{errorSignup}</Error>}
      <S.ButtonContainer>
        <Button type="submit" title="Cadastrar sua nova conta">
          Cadastrar
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
};

export default Signup;
