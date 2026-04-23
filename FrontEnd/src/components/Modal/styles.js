import styled from "styled-components";

export const ModalMenu = styled.div`
  position: absolute;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.DARK_400};
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
