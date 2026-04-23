import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 56px 28px 24px;
  max-width: 1178px;
  margin-inline: auto;

  @media (min-width: 767px) {
    padding-block: 24px;
  }
`;

export const Close = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 767px) {
    gap: 32px;
  }

  form {
    display: none;

    @media (min-width: 767px) {
      display: block;
      width: 100%;
    }
  }
`;

export const Open = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Roboto;
    font-size: 22px;
  }

  > button {
    background: none;
    border: none;
    outline: none;
  }
`;

export const BtnMenu = styled.button`
  background: none;
  border: none;
  outline: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 26px;

  @media (min-width: 768px) {
    height: 30px;
  }
`;

export const Receipt = styled.a`
  position: relative;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    max-width: 226px;
    gap: 8px;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 12px 46px;

    &:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
  }

  span {
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 14px;

    @media (min-width: 768px) {
      display: none;
    }
  }

  > p {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const Out = styled.a`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
