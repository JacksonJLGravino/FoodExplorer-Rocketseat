import styled from "styled-components";
import CaretLeft from "../../assets/caretLeft.svg";

export const Container = styled.div`
  margin-inline: auto;
  width: 100%;
  align-items: center;
`;

export const Main = styled.div`
  position: relative;
  margin-inline: auto;
  padding-inline: 56px;
  padding-block: 10px;
  margin-bottom: 43px;
  max-width: 1178px;

  @media (min-width: 768px) {
    margin-top: 24px;
    padding-top: 76px;
    padding-inline: 28px;
  }
`;

export const BgHeaderFooter = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  width: 100%;
`;

export const GoBack = styled.a`
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  align-items: center;
  position: absolute;

  > div {
    background-image: url(${CaretLeft});
    background-repeat: no-repeat;
    background-size: cover;
    width: 32px;
    height: 32px;
  }

  > p {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  @media (min-width: 768px) {
    margin-left: 28px;
    top: 0;
    left: 0;

    > p {
      font-weight: 700;
    }
  }
`;

export const FormFood = styled.form`
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  > h3 {
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Section1 = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Section2 = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
    grid-template-areas: "a a b";
  }
`;

export const InputControler = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 16px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    border-radius: 8px;
    padding: 16px 14px;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;

export const ImportFileDiv = styled.div`
  > label p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  > label div {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    margin-top: 16px;
    border-radius: 8px;
    padding: 12px 32px;
    display: flex;
    cursor: pointer;
  }

  > label div span {
    margin-left: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }

  > input {
    display: none;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  > select {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const IngredientsDiv = styled.div`
  display: flex;
  flex-direction: column;

  > h6 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 5px;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    grid-area: a;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  > textarea {
    font-family: Roboto;
    font-size: 16px;
    width: 100%;
    height: 172px;
    font-weight: 400;
    line-height: 100%;
    border: none;
    border-radius: 8px;
    padding: 14px;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    resize: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  @media (min-width: 768px) {
    grid-area: b;
  }
`;

export const Btns = styled.div`
  display: flex;
  gap: 32px;

  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

export const ButtonDelete = styled.button`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_800};
  border: none;
  outline: none;
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.COLORS.DARK_900};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    width: 172px;
    align-self: flex-end;
  }
`;

export const ButtonSave = styled.button`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  outline: none;
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    width: 172px;
    align-self: flex-end;
  }
`;
