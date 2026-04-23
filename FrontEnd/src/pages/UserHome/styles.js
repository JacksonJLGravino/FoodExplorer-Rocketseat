import styled from "styled-components";

export const Container = styled.div`
  margin-inline: auto;
  width: 100%;
  align-items: center;
`;

export const BgHeaderFooter = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  width: 100%;
`;

export const BannerContainer = styled.div`
  padding-inline: 24px;
`;

export const FoodsContainer = styled.div`
  padding-inline: 24px;
  margin-bottom: 24px;
  max-width: 1168px;
  margin-inline: auto;

  > h3 {
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 24px;
  }
`;
