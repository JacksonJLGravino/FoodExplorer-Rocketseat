import { Container, ImgContainer, TextContainer } from "./styles";
import banner from "../../assets/banner2.png";

export function Banner() {
  return (
    <Container>
      <ImgContainer></ImgContainer>

      <TextContainer>
        <h3>Sabores inigualáveis</h3>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </TextContainer>
    </Container>
  );
}
