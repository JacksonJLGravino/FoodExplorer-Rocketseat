import styled from "styled-components";
import banner from "../../assets/banner.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  margin-inline: auto;
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-block: 44px 62px;
  border-radius: 3px;
  padding: 36px 8px 22px;

  @media (min-width: 768px) {
    padding: 88px 100px 92px;
    border-radius: 8px;
    margin-block: 164px 63px;
  }
`;

export const ImgContainer = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  width: 40%;
  height: 130%;
  position: absolute;
  top: -29px;
  left: -18px;

  @media (min-width: 768px) {
    top: -132px;
    left: -54px;
    width: 50%;
    height: 160%;
  }
`;

export const TextContainer = styled.div`
  width: 60%;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }

  > p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  @media (min-width: 768px) {
    > h3 {
      font-size: 40px;
      font-weight: 500;
    }

    > p {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      line-height: 100%;
    }
  }
`;
