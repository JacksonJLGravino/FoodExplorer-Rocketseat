import { useState } from "react";
import { BordelessButton } from "../../components/BordelessButton/Index";
import { FormButton } from "../../components/FormButton/Index";
import { InputControler } from "../../components/InputControl/Index";
import { Container, Form, FormHeaderText, Logo } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <a href="">
        <Logo src={LogoSvg} alt="logo" />
      </a>

      <Form>
        <FormHeaderText>Faça login</FormHeaderText>
        <InputControler
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          htmlFor="emailIn"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputControler
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          htmlFor="senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton btnText="Entrar" onClick={handleSignIn} />
        <BordelessButton href="/register" btnText="Criar uma conta" />
      </Form>
    </Container>
  );
}
