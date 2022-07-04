import styled from "styled-components";
import searchIcon from "../Assets/SearchBar.png";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ListHeadingStyle = styled.h1`
  font-family: "Roboto Mono";
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  color: #000000;
  margin: 23px 0 40px 0;
`;

export const InputBoxStyle = styled.input`
  width: 300px;
  height: 43px;
  text-align: left;
  padding-left: 16px;
  background: transparent url(${searchIcon});
  background-repeat: no-repeat;
  background-position: right;
  background-position: calc(100% - 20px) center;
  &:focus::placeholder {
    color: white;
  }
`;
export const TitleStyle = styled.h1`
  position: absolute;
  left: 96px;
  right: 94px;
  top: 136px;
  bottom: 127px;
  font-family: "Rubik";
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  width: 111px;
  height: 56px;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  opacity: 0;
  z-index: 2;
`;

export const ButtonStyle = styled.button`
  position: absolute;
  top: 245px;
  left: 89px;
  right: 87px;
  bottom: 37px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  background-color: #352c9a;
  color: white;
  width: 145px;
  height: 43px;
  margin-top: 20px;
  border-style: none;
  opacity: 0;
  z-index: 2;

  &:hover {
    background-color: #724fd8;
  }
  &:active {
    text-decoration: underline;
  }
  &:disabled {
    background-color: #626262;
  }
`;

export const CardDivStyle = styled.article`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 149px;
  margin-top: 66px;
`;
export const CardsStyle = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 75px;
`;
export const CardsImageStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;

  @media (max-width: 1230px) {
    width: 300px;
    height: 320px;
    margin: 24px auto 24px auto;
  }
`;

export const CardStyle = styled.article`
  height: 374px;
  width: 350px;
  border-radius: 20px;
  position: relative;
  &::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: 250ms ease-out;
  border-radius: 20px;
}
&:hover::after {
  opacity: 0.6;
  background-color: #626262;
}
&:hover  ${TitleStyle} {
  opacity: 1;

}
&:hover  ${ButtonStyle} {
  opacity: 1;

}
  @media (max-width: 1230px) {
    width: 300px;
    height: 320px;
    margin: 24px auto 24px auto;
    &::after {
  content: '';
  position: absolute;
  top: 22px;
  
  }
}
`;
