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
  padding-block: 20px;
  margin-block: 16px 32px;
  max-width: 1178px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    padding-top: 76px;
    padding-inline: 28px;
    gap: 48px;
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

export const FoodImg = styled.img`
  display: flex;
  width: 264px;
  height: 264px;
  margin-top: 50px;
  margin-inline: auto;

  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
    width: 390px;
    height: 389px;
  }
`;

export const Food = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;
  font-family: Poppins;

  > h4 {
    margin-top: 16px;
    font-size: 27px;
    font-weight: 500;
    line-height: 140%;
  }

  > p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: 24px;
  }
  @media (min-width: 768px) {
    text-align: start;

    > h4 {
      margin-top: 0;
      font-size: 40px;
    }

    > p {
      font-size: 24px;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 24px;
  flex-wrap: wrap;
`;

export const FooterBtnControler = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 24px;
    justify-content: start;
  }
`;

export const ConfirmBtn = styled.a`
  height: 38px;
  width: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  outline: none;
  border-radius: 5px;
  gap: 5px;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Poppins;
    font-size: 10px;
    font-weight: 500;
    line-height: 16px;
  }

  @media (min-width: 768px) {
    height: 48px;
    width: 162px;

    > p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
