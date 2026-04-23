import React, { useState } from "react";
import {
  BgHeaderFooter,
  Container,
  BannerContainer,
  FoodsContainer,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { Banner } from "../../components/Banner";
import { useAuth } from "../../hooks/auth";

import { Modal } from "../../components/Modal";
import { TextModal } from "../../components/TextModal/input";
import { ScrollSlider } from "../../components/ScrollSlider";

export function UserHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { signOut } = useAuth();

  function openCloseMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function handleDetails(id) {
    console.log(id);
  }

  return (
    <Container>
      <BgHeaderFooter>
        <HeaderUser
          onClick={openCloseMenu}
          IsOpen={isOpen}
          onChange={(e) => setSearch(e.target.value)}
        />
      </BgHeaderFooter>

      <Modal
        IsOpen={isOpen}
        onChange={(e) => setSearch(e.target.value)}
        value={search}>
        <TextModal text="Sair" onClick={signOut} />
      </Modal>

      <BannerContainer>
        <Banner />
      </BannerContainer>

      <FoodsContainer>
        <h3>Refeições</h3>
        <div>
          <ScrollSlider search={search} type="Refeição" />
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Sobremesas</h3>
        <div>
          <ScrollSlider search={search} type="Sobremesa" />
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Bebidas</h3>
        <div>
          <ScrollSlider search={search} type="Bebida" />
        </div>
      </FoodsContainer>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}
