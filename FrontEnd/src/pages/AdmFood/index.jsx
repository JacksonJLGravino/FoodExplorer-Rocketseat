import { useEffect, useState } from "react";
import {
  BgHeaderFooter,
  Container,
  GoBack,
  Food,
  FoodImg,
  TagContainer,
  Main,
  FooterBtnControler,
  ConfirmBtn,
} from "./styles";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag/Index";
import { HeaderAdm } from "../../components/HeaderAdm";
import { Modal } from "../../components/Modal";
import { TextModal } from "../../components/TextModal/input";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function AdmFood() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const { signOut } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  function openCloseMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function handleEditFood(id) {
    navigate(`/edit/${id}`);
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
        <HeaderAdm onClick={openCloseMenu} IsOpen={isOpen} />
      </BgHeaderFooter>

      <Modal IsOpen={isOpen}>
        <TextModal text="Novo Prato" href="/new" />
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

            <FooterBtnControler>
              <ConfirmBtn onClick={() => handleEditFood(data.id)}>
                <p>Editar prato</p>
              </ConfirmBtn>
            </FooterBtnControler>
          </Food>
        </Main>
      )}

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}
