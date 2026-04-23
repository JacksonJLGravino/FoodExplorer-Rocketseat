import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background: ${({ theme, $isnew }) =>
    $isnew === "true" ? "transparent" : theme.COLORS.LIGHT_600};

  border: ${({ theme, $isnew }) =>
    $isnew === "true" ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  > button {
    border: none;
    background: none;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 100%;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 100%;
    background: transparent;
    border: none;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
