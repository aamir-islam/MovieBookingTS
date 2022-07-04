import styled from "styled-components";

export const PNFMainDiv = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeadingPNF = styled.h2`
  width: 792px;
  height: 38px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  @media (max-width: 768px) {
    width: 300px;
    height: 48px;
  }
`;
export const PNFImage = styled.img`
  width: 620px;
  height: 447px;
  margin-top: 48px;
  @media (max-width: 768px) {
    width: 300px;
    height: 320px;
    margin: 24px auto 24px auto;
  }
`;
