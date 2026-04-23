import { Container, Text } from "./styles";
import logoFooter from "../../assets/logoFooter.svg";

export function Footer() {
  return (
    <Container>
      <img src={logoFooter} alt="logo" />

      <Text>© 2023 - Todos os direitos reservados.</Text>
    </Container>
  );
}
