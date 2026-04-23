import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 292px;
  width: 210px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  > .text {
    display: none;
  }

  @media (min-width: 964px) {
    height: 462px;
    width: 304px;

    > .text {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: Roboto;
      font-size: 14px;
      line-height: 160%;
      text-align: center;
    }
  }
`;

export const Image = styled.img`
  height: 88px;
  width: 88px;

  @media (min-width: 964px) {
    height: 176px;
    width: 176px;
  }
`;

export const ButtonIcon = styled.a`
  background: none;
  outline: none;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  line-height: 24px;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (min-width: 964px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 140%;
  }
`;

export const Price = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  @media (min-width: 964px) {
    font-size: 32px;
    line-height: 160%;
  }
`;
