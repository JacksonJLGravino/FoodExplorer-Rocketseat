import { Container, Input, Label } from "./styles";

export function InputControler({
  label,
  placeholder,
  htmlFor,
  type,
  onChange,
}) {
  return (
    <Container>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={htmlFor}
        onChange={onChange}
      />
    </Container>
  );
}
