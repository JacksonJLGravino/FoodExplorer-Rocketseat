import styled from "styled-components";

export const Text = styled.a`
  display: block;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  width: 100%;
  > p {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
