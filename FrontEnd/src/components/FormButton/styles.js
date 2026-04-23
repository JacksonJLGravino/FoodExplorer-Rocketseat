import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  margin-bottom: 32px;
  padding-block: 12px;
  align-items: center;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.TOMATO_100};

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;
