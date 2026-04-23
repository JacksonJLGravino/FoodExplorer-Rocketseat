import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Button = styled.a`
  margin-bottom: 32px;
  margin-inline: auto;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: none;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
