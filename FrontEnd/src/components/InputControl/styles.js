import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  margin-bottom: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border: none;
  border-radius: 8px;
  padding: 16px 14px;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
