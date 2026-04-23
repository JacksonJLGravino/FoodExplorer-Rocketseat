import { useState } from "react";
import {
  BgHeaderFooter,
  Container,
  BannerContainer,
  FoodsContainer,
} from "./styles";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { HeaderAdm } from "../../components/HeaderAdm";
import { Modal } from "../../components/Modal";
import { TextModal } from "../../components/TextModal/input";
import { useAuth } from "../../hooks/auth";
import { ScrollSlider } from "../../components/ScrollSlider";

export function AdmHome() {
  const [isOpen, setIsOpen] = useState();
  const [search, setSearch] = useState("");

  const { signOut } = useAuth();

  function openCloseMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <Container>
      <BgHeaderFooter>
        <HeaderAdm
          onClick={openCloseMenu}
          IsOpen={isOpen}
          onChange={(e) => setSearch(e.target.value)}
        />
      </BgHeaderFooter>

      <Modal
        IsOpen={isOpen}
        onChange={(e) => setSearch(e.target.value)}
        value={search}>
        <TextModal text="Novo Prato" href="/new" />
        <TextModal text="Sair" onClick={signOut} />
      </Modal>

      <BannerContainer>
        <Banner />
      </BannerContainer>

      <FoodsContainer>
        <h3>Refeições</h3>
        <div>
          <ScrollSlider search={search} type="Refeição" isAdmin={true} />
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Sobremesas</h3>
        <div>
          <ScrollSlider search={search} type="Sobremesa" isAdmin={true} />
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Bebidas</h3>
        <div>
          <ScrollSlider search={search} type="Bebida" isAdmin={true} />
        </div>
      </FoodsContainer>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}
