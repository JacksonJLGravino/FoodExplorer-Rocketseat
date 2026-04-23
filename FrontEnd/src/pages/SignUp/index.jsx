import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { BordelessButton } from "../../components/BordelessButton/Index";
import { FormButton } from "../../components/FormButton/Index";
import { InputControler } from "../../components/InputControl/Index";
import { Container, Form, FormHeaderText, Logo } from "./styles";
import LogoSvg from "../../assets/logo.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os camplos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <a href="">
        <Logo src={LogoSvg} alt="logo" />
      </a>

      <Form>
        <FormHeaderText>Criar sua conta</FormHeaderText>
        <InputControler
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          htmlFor="nomeUp"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <InputControler
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          htmlFor="emailUp"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputControler
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          htmlFor="senhaUp"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton btnText="Criar conta" onClick={handleSignUp} />
        <BordelessButton href="/" btnText="ja tenho conta" />
      </Form>
    </Container>
  );
}
