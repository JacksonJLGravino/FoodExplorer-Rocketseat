import { useEffect, useState } from "react";
import {
  BgHeaderFooter,
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
  Btns,
  ButtonSave,
  ButtonDelete,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderAdm } from "../../components/HeaderAdm";
import UploadSimple from "../../assets/uploadSimple.svg";
import { AddFoodTag } from "../../components/AddFoodTag";
import { Modal } from "../../components/Modal";
import { TextModal } from "../../components/TextModal/input";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function AdmEditFood() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [image, setImage] = useState(null);

  const { signOut } = useAuth();
  const params = useParams();
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

  async function handleRemove() {
    const confirm = window.confirm("deseja realmente remover esse prato?");

    if (confirm) {
      await api.delete(`/foods/${params.id}`);
      navigate("/");
    }
  }

  async function editFood() {
    let priceDecimal = parseFloat(price).toFixed(2);

    try {
      await api.put(`/foods/${params.id}`, {
        title,
        description,
        type,
        price: priceDecimal,
        ingredients,
      });
    } catch (error) {
      alert("nao foi possivel");
    }

    if (image != null) {
      updateImage();
    }
  }

  async function updateImage() {
    const fileUploadForm = new FormData();
    fileUploadForm.append("image", image);

    await api.patch(`/foods/${params.id}`, fileUploadForm);

    alert("Refeição editada com sucesso!");
    navigate("/");
  }

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setIngredients([]);
      setData(response.data);
      setTitle(response.data.title);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setType(response.data.type);
      let ingredients = [...Object.values(response.data.ingredients)];
      ingredients.map((ingredient) => {
        setIngredients((prevState) => [...prevState, ingredient.name]);
      });
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

          <FormFood>
            <h3>Editar Prato</h3>
            <Section1>
              <ImportFileDiv>
                <label htmlFor="ImgEdit">
                  <p>Imagem do prato</p>
                  <div>
                    <img src={UploadSimple} alt="" />
                    <span>Selecione imagem para alterá-la</span>
                  </div>
                </label>
                <input
                  type="file"
                  id="ImgEdit"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </ImportFileDiv>

              <InputControler>
                <label htmlFor="nomeEditFood">Nome</label>
                <input
                  type="text"
                  defaultValue={title}
                  id="nomeEditFood"
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
                  {ingredients &&
                    ingredients.map((ingredient, index) => (
                      <AddFoodTag
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredients(ingredient)}
                      />
                    ))}
                  <AddFoodTag
                    placeholder="Adicionar"
                    isNew={true}
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredients}
                  />
                </div>
              </IngredientsDiv>

              <InputControler>
                <label htmlFor="valorEditFood">Preço</label>
                <input
                  type="number"
                  placeholder="R$40,00"
                  id="valorEditFood"
                  defaultValue={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </InputControler>
            </Section2>

            <Description>
              <label htmlFor="">Descrição</label>
              <textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Description>

            <Btns>
              <ButtonDelete type="button" onClick={handleRemove}>
                <p>Excluir Prato</p>
              </ButtonDelete>
              <ButtonSave type="button" onClick={editFood}>
                <p>Salvar alterações</p>
              </ButtonSave>
            </Btns>
          </FormFood>
        </Main>
      )}

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}
