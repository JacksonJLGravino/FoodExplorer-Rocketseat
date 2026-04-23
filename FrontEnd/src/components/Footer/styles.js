import styled from "styled-components";

export const Container = styled.footer`
  padding-block: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-inline: auto;
  max-width: 1178px;
  padding-inline: 28px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 160%;
  font-weight: 400;
`;
