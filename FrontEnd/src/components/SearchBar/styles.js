import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border-radius: 5px;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_900};

  input {
    width: 100%;
    background: none;
    outline: none;
    border: none;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
