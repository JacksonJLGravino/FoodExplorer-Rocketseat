import { Container } from "./styles";

export function AddFoodTag({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew.toString()}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button
        onClick={onClick}
        type="button"
        className={isNew ? "button-add" : "button-delete"}>
        {isNew ? "+" : "x"}
      </button>
    </Container>
  );
}
