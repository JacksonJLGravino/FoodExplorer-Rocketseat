import { ButtonIcon, Container, Image, Price, Title } from "./styles";
import Heart from "../../assets/heart.svg";
import Pencil from "../../assets/pencil.svg";
import { AddButton } from "../AddButton";

export function FoodCard({
  image,
  title,
  price,
  isAdmin = false,
  hrefIcon,
  description,
  onClick,
}) {
  return (
    <Container>
      <Image src={image} />
      <ButtonIcon href={hrefIcon}>
        {isAdmin ? (
          <img src={Pencil} alt="" onClick={onClick} />
        ) : (
          <img src={Heart} alt="" />
        )}
      </ButtonIcon>
      <Title>{title}</Title>
      <p className="text">{description}</p>
      <Price>R$ {price}</Price>
      {isAdmin ? <div></div> : <AddButton onClick={onClick} />}
    </Container>
  );
}
