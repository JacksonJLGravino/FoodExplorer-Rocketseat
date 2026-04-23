import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 964px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const InfoSun = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;

export const AddBtn = styled.button`
  background: none;
  border: none;
  outline: none;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: Roboto;
  font-size: 16px;
`;

export const BtnInclude = styled.button`
  padding: 4px 59px;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  margin-top: 16px;
  border-radius: 5px;
  line-height: 24px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  @media (min-width: 964px) {
    margin-top: 0;
    padding: 12px 24px;
  }
`;
