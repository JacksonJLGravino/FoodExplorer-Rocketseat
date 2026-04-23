import { Container } from "./styles";
import Search from "../../assets/search.svg";

export function SearchBar({ ...rest }) {
  return (
    <Container>
      <label htmlFor="">
        <img src={Search} alt="" />
      </label>
      <input {...rest} />
    </Container>
  );
}
