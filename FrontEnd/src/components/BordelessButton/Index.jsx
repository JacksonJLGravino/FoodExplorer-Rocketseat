import { Button, Container } from "./styles";

export function BordelessButton({ btnText, ...rest }) {
  return (
    <Container>
      <Button {...rest}>{btnText}</Button>
    </Container>
  );
}
