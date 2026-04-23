import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  width: 100%;
  gap: 73px;
  max-width: 1368px;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    gap: none;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 90px;
  }
`;

export const Logo = styled.img`
  width: 278px;
  margin-inline: auto;
  margin-top: 158px;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 324px;
  }
`;

export const Form = styled.form`
  width: 316px;
  @media (min-width: 768px) {
    width: 476px;
    padding: 64px;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 16px;
  }
`;

export const FormHeaderText = styled.h2`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
    margin-bottom: 32px;
    font-family: "Poppins", sans-serif;
  }
`;
