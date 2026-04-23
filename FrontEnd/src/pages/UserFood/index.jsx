import { useEffect, useState } from "react";
import {
  BgHeaderFooter,
  Container,
  GoBack,
  Food,
  FoodImg,
  TagContainer,
  Main,
  AddBtn,
  AddRemoveBtns,
  FooterBtnsControler,
  ConfirmBtn,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { Tag } from "../../components/Tag/Index";
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import { Modal } from "../../components/Modal";
import { TextModal } from "../../components/TextModal/input";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export function UserFood() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const { signOut } = useAuth();
  const params = useParams();

  function openCloseMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }
    fetchFood();
  }, []);

  return (
    <Container>
      <BgHeaderFooter>
        <HeaderUser onClick={openCloseMenu} IsOpen={isOpen} />
      </BgHeaderFooter>

      <Modal IsOpen={isOpen}>
        <TextModal text="Sair" onClick={signOut} />
      </Modal>

      {data && (
        <Main>
          <GoBack href="/">
            <div></div>
            <p>Voltar</p>
          </GoBack>

          <FoodImg src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />
          <Food>
            <h4>{data.title}</h4>
            <p>{data.description}</p>

            {data.ingredients && (
              <TagContainer>
                {data.ingredients.map((ingredient) => (
                  <Tag key={String(ingredient.id)} text={ingredient.name} />
                ))}
              </TagContainer>
            )}

            <FooterBtnsControler>
              <AddRemoveBtns>
                <AddBtn>
                  <img src={Minus} alt="" />
                </AddBtn>
                <p>01</p>
                <AddBtn>
                  <img src={Plus} alt="" />
                </AddBtn>
              </AddRemoveBtns>

              <ConfirmBtn>
                <div></div>
                <p>pedir - R$ {data.price}</p>
              </ConfirmBtn>
            </FooterBtnsControler>
          </Food>
        </Main>
      )}

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}
