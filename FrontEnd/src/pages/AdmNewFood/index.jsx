import { useState } from "react";
import {
  BgHeaderFooter,
  Button,
  CategoryDiv,
  Container,
  Description,
  FormFood,
  GoBack,
  ImportFileDiv,
  IngredientsDiv,
  Main,
  InputControler,
  Section1,
  Section2,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderAdm } from "../../components/HeaderAdm";
import UploadSimple from "../../assets/uploadSimple.svg";
import { AddFoodTag } from "../../components/AddFoodTag";
import { Modal } from "../../components/Modal";
import { TextModal } from "../../components/TextModal/input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function AdmNewFood() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Refeição");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [image, setImage] = useState(null);

  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  function openCloseMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  async function handleNewFood() {
    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não adicionou."
      );
    }

    if (image == null) {
      return alert("Você não adicionou uma imagem.");
    }

    let priceDecimal = parseFloat(price).toFixed(2);

    await api.post("/foods", {
      title,
      description,
      ingredients,
      price: priceDecimal,
      type,
    });

    updateImage();
  }

  async function updateImage() {
    const fileUploadForm = new FormData();
    fileUploadForm.append("image", image);

    await api.patch("/foods", fileUploadForm);

    alert("Refeição criada com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <BgHeaderFooter>
        <HeaderAdm onClick={openCloseMenu} IsOpen={isOpen} />
      </BgHeaderFooter>

      <Modal IsOpen={isOpen}>
        <TextModal text="Novo Prato" href="/new" />
        <TextModal text="Sair" onClick={signOut} />
      </Modal>

      <Main>
        <GoBack href="/">
          <div></div>
          <p>Voltar</p>
        </GoBack>

        <FormFood>
          <h3>Novo Prato</h3>
          <Section1>
            <ImportFileDiv>
              <label htmlFor="image">
                <p>Imagem do prato</p>
                <div>
                  <img src={UploadSimple} alt="" />
                  <span>Selecione imagem</span>
                </div>
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </ImportFileDiv>

            <InputControler>
              <label htmlFor="nomeFood">Nome</label>
              <input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                id="nomeFood"
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputControler>

            <CategoryDiv>
              <label htmlFor="category">Categoria</label>
              <select onChange={(e) => setType(e.target.value)} id="category">
                <option value="Refeição">Refeição</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Bebida">Bebida</option>
              </select>
            </CategoryDiv>
          </Section1>

          <Section2>
            <IngredientsDiv>
              <h6>Ingredientes</h6>
              <div>
                {ingredients.map((ingredient, index) => (
                  <AddFoodTag
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredients(ingredient)}
                  />
                ))}
                <AddFoodTag
                  placeholder="Escreva um ingrediente"
                  isNew={true}
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredients}
                />
              </div>
            </IngredientsDiv>

            <InputControler>
              <label htmlFor="valorFood">Preço</label>
              <input
                type="number"
                placeholder="R$00,00"
                id="valorFood"
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputControler>
          </Section2>

          <Description>
            <label htmlFor="">Descrição</label>
            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Description>

          <Button type="button" onClick={handleNewFood}>
            <p>Salvar alterações</p>
          </Button>
        </FormFood>
      </Main>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}
