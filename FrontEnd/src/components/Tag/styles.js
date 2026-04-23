import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  padding: 4px 8px;
  text-align: center;
  height: 32px;
  text-align: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 24px;
    font-size: 14px;
  }
`;
