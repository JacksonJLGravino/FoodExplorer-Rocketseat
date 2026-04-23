import { Button } from "./styles";

export function FormButton({ btnText, onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      {btnText}
    </Button>
  );
}
